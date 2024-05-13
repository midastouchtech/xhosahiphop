/**
 * @name PlayButton
 * @file play.tsx
 * @description music play button component
 */
'use client';
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
// Modules
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { RiPauseFill, RiPlayFill } from '@remixicon/react';
import { useEventCallback } from 'usehooks-ts';
// Contexts
import { usePlayer } from '@/core/contexts/player';
// Utilities
import { addClass, removeClass } from '@/core/utils';
var propTypes = {
  /**
   * Set song data
   */
  song: PropTypes.object,
  /**
   * Set playlist data
   */
  playlist: PropTypes.array,
  /**
   * Set icon size
   */
  iconSize: PropTypes.number,
  /**
   * Flag to set main player button
   */
  playerButton: PropTypes.bool,
  /**
   * Flag to set button color
   */
  primaryButton: PropTypes.bool,
};
var PlayButton = function (_a) {
  var className = _a.className,
    iconSize = _a.iconSize,
    playlist = _a.playlist,
    playerButton = _a.playerButton,
    primaryButton = _a.primaryButton,
    song = _a.song,
    props = __rest(_a, [
      'className',
      'iconSize',
      'playlist',
      'playerButton',
      'primaryButton',
      'song',
    ]);
  var _b = usePlayer(),
    playAll = _b.playAll,
    playPause = _b.playPause,
    setPlayerStatus = _b.setPlayerStatus,
    activeSong = _b.activeSong,
    isPlaying = _b.isPlaying;
  var isPlayerButton = playerButton && isPlaying;
  var isTrackButton =
    activeSong.id === (song === null || song === void 0 ? void 0 : song.id) &&
    activeSong.type ===
      (song === null || song === void 0 ? void 0 : song.type) &&
    !playerButton &&
    isPlaying;
  var Icon = isPlayerButton || isTrackButton ? RiPauseFill : RiPlayFill;
  var buttonRef = useRef(null);
  useEffect(
    function () {
      var btn = buttonRef.current;
      if (!isPlaying && btn) {
        removeClass(btn, 'amplitude-playing');
        addClass(btn, 'amplitude-paused');
      }
    },
    [isPlaying, buttonRef.current]
  );
  /**
   *
   * Handle play button `onClick`
   */
  var handleClick = useEventCallback(function () {
    if (playlist) {
      console.log('click play playlist', playlist);
      playAll(playlist);
    } else if (playerButton) {
      setPlayerStatus();
      console.log('click play player');
    } else {
      console.log('click play song', song);
      playPause(song);
    }
  });
  /**
   *
   * Add play button class
   * @returns
   */
  var btnClassName = function () {
    var classes = [className, 'btn btn-icon rounded-pill'];
    primaryButton ? classes.push('btn-primary') : classes.push('btn-default');
    if (playerButton) classes.push('amplitude-play-pause');
    if (!primaryButton && !playerButton) classes.push('btn-play');
    if (isTrackButton) classes.push('active');
    return classes;
  };
  return (
    <button
      ref={buttonRef}
      type='button'
      aria-label={isPlayerButton || isTrackButton ? 'Pause' : 'Play'}
      onClick={handleClick}
      className={classNames(btnClassName())}
      {...(playlist && { id: 'play_all' })}
      {...props}
    >
      <Icon size={iconSize} />
    </button>
  );
};
PlayButton.propTypes = propTypes;
PlayButton.displayName = 'PlayButton';
export default PlayButton;
