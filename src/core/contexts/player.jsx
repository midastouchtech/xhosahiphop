/**
 * @name Player
 * @file player.tsx
 * @description use to handle player features
 */
'use client';

// Modules
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';
import { useSnackbar } from 'notistack';
import {
  useDebounceCallback,
  useEventListener,
  useLocalStorage,
} from 'usehooks-ts';
import { useScript } from '@uidotdev/usehooks';
// Components
import AudioPlayer from '../components/audio-player';

// Utilities
import { addClass, getPersonName, hasClass, removeClass } from '../utils';
import { COLLAPSE, SHOW, SONG_KEY } from '../constants/constant';
import { RiWindowsFill } from '@remixicon/react';

const PlayerContext = createContext({});
console.log(RiWindowsFill);
let SONGS = [];
const ARTWORK_SIZES = [
  '96x96',
  '128x128',
  '192x192',
  '256x256',
  '384x384',
  '512x512',
];
const MEDIA_CONTROLS = {
  playPause: false,
  nextPrev: false,
};

const Player = ({ children }) => {
  const pathname = usePathname();
  const [songs, setSongs] = useLocalStorage(SONG_KEY, []);
  const { enqueueSnackbar } = useSnackbar();
  const status = useScript('/js/amplitude.min.js', {
    removeOnUnmount: false,
  });

  const [activeSong, setActiveSong] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  // Setup audio player
  useEffect(() => {
    if (status === 'ready' && songs.length) {
      SONGS = songs;
      initPlayer();
      handleSongChange();
    }
  }, [status]);

  // Set media data on active song change
  useEffect(() => {
    if (status === 'ready' && songs.length && activeSong) {
      mediaSession();
    }
  }, [activeSong]);

  // Change player view on route
  useEffect(() => {
    if (status === 'ready' && Amplitude) {
      toggleBodyClass();
      console.log('Amplitude', Amplitude);
      console.log('window.amplitude', window.Amplitude);
      const playerSongs = Amplitude?.getSongs();
      const player = playerRef.current;

      if (playerSongs.length) {
        if (pathname.startsWith('/auth')) {
          removeClass(player, SHOW);
          pause();
          handleSongChange();
        } else if (
          !pathname.startsWith('/music') &&
          typeof window !== 'undefined'
        ) {
          addClass(player, SHOW);
          addClass(player, COLLAPSE);
        } else {
          addClass(player, SHOW);
          hasClass(player, COLLAPSE) && removeClass(player, COLLAPSE);
        }
      }
    }
  }, [pathname, status]);

  const addQueue = (song) => {
    if (!isAdded(song.id)) {
      SONGS.push(getSongObject(song));
      setSongs(SONGS);

      if (SONGS.length) {
        initPlayer();
      }
    }
  };

  const clearPlaylist = () => {
    if (SONGS.length) {
      // Clear player songs
      SONGS.forEach((song, index) => Amplitude?.removeSong(index));
    }

    SONGS = [];
    setSongs(SONGS);
    pause();
    mediaSession();
    handleSongChange();
  };

  // Get active song data
  const getCurrentSong = () => Amplitude?.getActiveSongMetadata();

  // Retrieve the index of a song based on its ID
  const getSongIndex = (id) => SONGS.findIndex((song) => song.id === id);

  // Retrieve song data compatible with the player.
  const getSongObject = (song) => {
    return {
      ...song,
      name: song.title,
      artist: getPersonName(song?.artists) || '',
      url: song.src,
      cover_art_url: song.cover,
    };
  };

  // Handle browser media click event
  const handleMediaClick = (isPlay) => {
    if (isPlay) {
      play();
      navigator.mediaSession.playbackState = 'playing';
    } else {
      pause();
      navigator.mediaSession.playbackState = 'paused';
    }

    setPlayerStatus();
  };

  // Handle player song change event
  const handleSongChange = () => {
    setActiveSong(getCurrentSong());
    setPlayerStatus();
  };

  // Initialize player
  const initPlayer = (isPlay) => {
    addClass(playerRef.current, SHOW);
    //console.log('Amplitude', Amplitude);
    console.log('window.amplitude', window.Amplitude);
    Amplitude?.init({
      songs: SONGS,
      callbacks: {
        song_change: () => handleSongChange(),
      },
    });

    isPlay && play();
    handleSongChange();
  };

  // Check song is added in playlist
  const isAdded = (id) => {
    const index = getSongIndex(id);
    if (index > -1) {
      enqueueSnackbar('The song is already in the lineup.');
      return true;
    }

    return false;
  };

  // Initialize browser media features
  const mediaSession = () => {
    const nextTrack = () =>
      SONGS.length >= 2
        ? Amplitude?.next(Amplitude?.getActivePlaylist() || '')
        : enqueueSnackbar('Song lineup is empty');

    const prevTrack = () =>
      SONGS.length >= 2
        ? Amplitude?.prev(Amplitude?.getActivePlaylist() || '')
        : enqueueSnackbar('Song lineup is empty');

    if ('mediaSession' in navigator) {
      const MEDIA = navigator.mediaSession;
      // Set song meta on notification
      MEDIA.metadata = new window.MediaMetadata({
        title: activeSong.title,
        artist: activeSong.artists
          ? activeSong.artists?.map((artist) => artist.name).join(',')
          : '',
        album: activeSong.album ? activeSong.album?.name : '',
        artwork: ARTWORK_SIZES.map((size) => ({
          src: activeSong.cover,
          sizes: size,
          type: 'image/png',
        })),
      });

      if (SONGS.length >= 1 && !MEDIA_CONTROLS.playPause) {
        MEDIA_CONTROLS.playPause = true;
        MEDIA.setActionHandler('play', () => handleMediaClick(true));
        MEDIA.setActionHandler('pause', () => handleMediaClick());
      }

      if (SONGS.length >= 2 && !MEDIA_CONTROLS.nextPrev) {
        MEDIA_CONTROLS.nextPrev = true;
        MEDIA.setActionHandler('previoustrack', prevTrack);
        MEDIA.setActionHandler('nexttrack', nextTrack);
      }
    }
  };

  const nextPlay = (song) => {
    if (!isAdded(song.id)) {
      const index = getSongIndex(song.id);
      if (songs.length) {
        const activeIndex = Amplitude?.getActiveIndex();
        if (index === -1) {
          SONGS.splice(activeIndex + 1, 0, getSongObject(song));
        }
      } else {
        // Initialize player
        SONGS.push(getSongObject(song));
        initPlayer();
      }

      setSongs(SONGS);
    }
  };

  // Window scroll event
  const onScroll = () => {
    const scrollY = window.innerHeight + Math.round(window.scrollY);
    const externalPage =
      scrollY >= document.body.offsetHeight &&
      !pathname.startsWith('/music') &&
      !pathname.startsWith('/auth') &&
      SONGS.length > 0;

    if (window.innerWidth >= 576) {
      document.body.classList.toggle('player-added', externalPage);
    }
  };

  // Pause active song
  const pause = () => Amplitude?.pause();

  // Play active song
  const play = () => Amplitude?.play();

  const playAll = (playlist) => {
    const songList = playlist.map((song) => getSongObject(song));

    if (SONGS.length) {
      SONGS.push(...songList);
    } else {
      SONGS = songList;
      initPlayer(true);
    }

    setSongs(SONGS);
    setPlayerStatus();
  };

  const playPause = (song) => {
    const songId = getCurrentSong().id;

    if (songId !== song.id) {
      const index = getSongIndex(song.id);
      setActiveSong(song);

      // Add song if not exist
      if (index === -1) {
        SONGS.push(getSongObject(song));
        setSongs(SONGS);

        if (SONGS.length === 1) {
          isPlaying && pause();
          initPlayer(true);
        } else {
          Amplitude?.playSongAtIndex(getSongIndex(song.id));
        }

        // Play exist song
      } else {
        Amplitude?.playSongAtIndex(index);
      }
    } else {
      songId === song.id && !isPlaying ? play() : pause();
    }

    setPlayerStatus();
  };

  const removeSong = (id) => {
    const index = getSongIndex(id);
    if (index > -1) {
      SONGS.splice(index, 0);
      Amplitude?.removeSong(index);
      // Clear playlist
      SONGS.length === 0 ? clearPlaylist() : setSongs(SONGS);
    }
  };

  const setPlayerStatus = () => {
    setTimeout(() => {
      setIsPlaying(Amplitude?.getPlayerState() === 'playing');
    }, 1);
  };

  // Toggle `body` class to handle player overlapping issues
  const toggleBodyClass = () => {
    const externalPage =
      window.innerWidth < 576 &&
      !pathname.startsWith('/music') &&
      SONGS.length > 0;
    document.body.classList.toggle('player-added', externalPage);
  };

  // Window resize event
  const onResize = useDebounceCallback(toggleBodyClass, 150);

  // Window events
  useEventListener('scroll', onScroll);
  useEventListener('resize', onResize);

  // Context props
  const context = useMemo(
    () => ({
      addQueue,
      clearPlaylist,
      nextPlay,
      playAll,
      playPause,
      removeSong,
      setPlayerStatus,
      activeSong,
      isPlaying,
      songs,
    }),
    [activeSong, isPlaying, songs]
  );

  return (
    <PlayerContext.Provider value={context}>
      {children}
      <AudioPlayer ref={playerRef} />
    </PlayerContext.Provider>
  );
};

Player.displayName = 'Player';
export default Player;

/**
 *
 * Player context hook
 * @returns
 */
export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a Player');
  }

  return context;
};
