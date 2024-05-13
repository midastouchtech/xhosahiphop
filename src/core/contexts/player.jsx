/**
 * @name Player
 * @file player.tsx
 * @description use to handle player features
 */
'use client';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
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
  useScript,
} from 'usehooks-ts';
// Components
import AudioPlayer from '../components/audio-player';
// Utilities
import { addClass, getPersonName, hasClass, removeClass } from '../utils';
import { COLLAPSE, SHOW, SONG_KEY } from '../constants/constant';
var PlayerContext = createContext({});
var SONGS = [];
var ARTWORK_SIZES = [
  '96x96',
  '128x128',
  '192x192',
  '256x256',
  '384x384',
  '512x512',
];
var MEDIA_CONTROLS = {
  playPause: false,
  nextPrev: false,
};
var Player = function (_a) {
  var children = _a.children;
  var pathname = usePathname();
  var _b = useLocalStorage(SONG_KEY, []),
    songs = _b[0],
    setSongs = _b[1];
  var enqueueSnackbar = useSnackbar().enqueueSnackbar;
  var status = useScript('/js/amplitude.min.js', {
    removeOnUnmount: false,
    id: 'Amplitude',
  });
  var _c = useState({}),
    activeSong = _c[0],
    setActiveSong = _c[1];
  var _d = useState(false),
    isPlaying = _d[0],
    setIsPlaying = _d[1];
  var playerRef = useRef(null);
  // Setup audio player
  useEffect(
    function () {
      if (status === 'ready' && songs.length) {
        SONGS = songs;
        initPlayer();
        handleSongChange();
      }
    },
    [status]
  );
  // Set media data on active song change
  useEffect(
    function () {
      if (status === 'ready' && songs.length && activeSong) {
        mediaSession();
      }
    },
    [activeSong]
  );
  // Change player view on route
  useEffect(
    function () {
      if (status === 'ready') {
        toggleBodyClass();
        var playerSongs = Amplitude.getSongs();
        var player = playerRef.current;
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
    },
    [pathname, status]
  );
  var addQueue = function (song) {
    if (!isAdded(song.id)) {
      SONGS.push(getSongObject(song));
      setSongs(SONGS);
      if (SONGS.length) {
        initPlayer();
      }
    }
  };
  var clearPlaylist = function () {
    if (SONGS.length) {
      // Clear player songs
      SONGS.forEach(function (song, index) {
        return Amplitude.removeSong(index);
      });
    }
    SONGS = [];
    setSongs(SONGS);
    pause();
    mediaSession();
    handleSongChange();
  };
  // Get active song data
  var getCurrentSong = function () {
    return Amplitude.getActiveSongMetadata();
  };
  // Retrieve the index of a song based on its ID
  var getSongIndex = function (id) {
    return SONGS.findIndex(function (song) {
      return song.id === id;
    });
  };
  // Retrieve song data compatible with the player.
  var getSongObject = function (song) {
    console.log('new song obj', {
      ...song,
      name: song.title,
      artist: getPersonName(song?.artists) || '',
      url: song.src,
      cover_art_url: song.cover,
    });
    return __assign(__assign({}, song), {
      name: song.title,
      artist:
        getPersonName(
          song === null || song === void 0 ? void 0 : song.artists
        ) || '',
      url: song.premium ? song.preview.url : song.src,
      cover_art_url: song.cover,
    });
  };
  // Handle browser media click event
  var handleMediaClick = function (isPlay) {
    if (isPlay) {
      console.log('playing song');
      play();
      navigator.mediaSession.playbackState = 'playing';
    } else {
      console.log('pausing song');
      pause();
      navigator.mediaSession.playbackState = 'paused';
    }
    setPlayerStatus();
  };
  // Handle player song change event
  var handleSongChange = function () {
    setActiveSong(getCurrentSong());
    setPlayerStatus();
  };
  // Initialize player
  var initPlayer = function (isPlay) {
    addClass(playerRef.current, SHOW);
    console.log('init player', SONGS);
    Amplitude.init({
      songs: SONGS,
      callbacks: {
        song_change: function () {
          return handleSongChange();
        },
      },
    });
    isPlay && play();
    handleSongChange();
  };
  // Check song is added in playlist
  var isAdded = function (id) {
    var index = getSongIndex(id);
    if (index > -1) {
      enqueueSnackbar('The song is already in the lineup.');
      return true;
    }
    return false;
  };
  // Initialize browser media features
  var mediaSession = function () {
    var _a, _b;
    var nextTrack = function () {
      return SONGS.length >= 2
        ? Amplitude.next(Amplitude.getActivePlaylist() || '')
        : enqueueSnackbar('Song lineup is empty');
    };
    var prevTrack = function () {
      return SONGS.length >= 2
        ? Amplitude.prev(Amplitude.getActivePlaylist() || '')
        : enqueueSnackbar('Song lineup is empty');
    };
    if ('mediaSession' in navigator) {
      var MEDIA = navigator.mediaSession;
      // Set song meta on notification
      MEDIA.metadata = new window.MediaMetadata({
        title: activeSong.title,
        artist: activeSong.artists
          ? (_a = activeSong.artists) === null || _a === void 0
            ? void 0
            : _a
                .map(function (artist) {
                  return artist.name;
                })
                .join(',')
          : '',
        album: activeSong.album
          ? (_b = activeSong.album) === null || _b === void 0
            ? void 0
            : _b.name
          : '',
        artwork: ARTWORK_SIZES.map(function (size) {
          return {
            src: activeSong.cover,
            sizes: size,
            type: 'image/png',
          };
        }),
      });
      if (SONGS.length >= 1 && !MEDIA_CONTROLS.playPause) {
        MEDIA_CONTROLS.playPause = true;
        MEDIA.setActionHandler('play', function () {
          return handleMediaClick(true);
        });
        MEDIA.setActionHandler('pause', function () {
          return handleMediaClick();
        });
      }
      if (SONGS.length >= 2 && !MEDIA_CONTROLS.nextPrev) {
        MEDIA_CONTROLS.nextPrev = true;
        MEDIA.setActionHandler('previoustrack', prevTrack);
        MEDIA.setActionHandler('nexttrack', nextTrack);
      }
    }
  };
  var nextPlay = function (song) {
    if (!isAdded(song.id)) {
      var index = getSongIndex(song.id);
      if (songs.length) {
        var activeIndex = Amplitude.getActiveIndex();
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
  var onScroll = function () {
    var scrollY = window.innerHeight + Math.round(window.scrollY);
    var externalPage =
      scrollY >= document.body.offsetHeight &&
      !pathname.startsWith('/music') &&
      !pathname.startsWith('/auth') &&
      SONGS.length > 0;
    if (window.innerWidth >= 576) {
      document.body.classList.toggle('player-added', externalPage);
    }
  };
  // Pause active song
  var pause = function () {
    return Amplitude.pause();
  };
  // Play active song
  var play = function () {
    return Amplitude.play();
  };
  var playAll = function (playlist) {
    var songList = playlist.map(function (song) {
      return getSongObject(song);
    });
    if (SONGS.length) {
      SONGS.push.apply(SONGS, songList);
    } else {
      SONGS = songList;
      initPlayer(true);
    }
    setSongs(SONGS);
    setPlayerStatus();
  };
  var playPause = function (song) {
    console.log('playing song', song);
    var songId = getCurrentSong().id;
    if (songId !== song.id) {
      var index = getSongIndex(song.id);
      setActiveSong(song);
      // Add song if not exist
      if (index === -1) {
        SONGS.push(getSongObject(song));
        setSongs(SONGS);
        if (SONGS.length === 1) {
          isPlaying && pause();
          initPlayer(true);
        } else {
          Amplitude.playSongAtIndex(getSongIndex(song.id));
        }
        // Play exist song
      } else {
        Amplitude.playSongAtIndex(index);
      }
    } else {
      songId === song.id && !isPlaying ? play() : pause();
    }
    setPlayerStatus();
  };
  var removeSong = function (id) {
    var index = getSongIndex(id);
    if (index > -1) {
      SONGS.splice(index, 0);
      Amplitude.removeSong(index);
      // Clear playlist
      SONGS.length === 0 ? clearPlaylist() : setSongs(SONGS);
    }
  };
  var setPlayerStatus = function () {
    setTimeout(function () {
      setIsPlaying(Amplitude.getPlayerState() === 'playing');
    }, 1);
  };
  // Toggle `body` class to handle player overlapping issues
  var toggleBodyClass = function () {
    var externalPage =
      window.innerWidth < 576 &&
      !pathname.startsWith('/music') &&
      SONGS.length > 0;
    document.body.classList.toggle('player-added', externalPage);
  };
  // Window resize event
  var onResize = useDebounceCallback(toggleBodyClass, 150);
  // Window events
  useEventListener('scroll', onScroll);
  useEventListener('resize', onResize);
  // Context props
  var context = useMemo(
    function () {
      return {
        addQueue: addQueue,
        clearPlaylist: clearPlaylist,
        nextPlay: nextPlay,
        playAll: playAll,
        playPause: playPause,
        removeSong: removeSong,
        setPlayerStatus: setPlayerStatus,
        activeSong: activeSong,
        isPlaying: isPlaying,
        songs: songs,
      };
    },
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
export var usePlayer = function () {
  var context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a Player');
  }
  return context;
};
