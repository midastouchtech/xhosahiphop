/**
 * @name TrackDropdown
 * @file dropdown.tsx
 * @description dropdown options component
 */
'use client';
// Modules
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';
import { RiMore2Fill, RiMoreFill } from '@remixicon/react';
// Contexts
import { usePlayer } from '@/core/contexts/player';
import { isEmpty, isNil } from 'ramda';
var propTypes = {
  /**
   * Display download option
   */
  download: PropTypes.bool,
  /**
   * Set className on `<a>`
   */
  btnClassName: PropTypes.string,
  /**
   * Display add queue option
   */
  favorite: PropTypes.bool,
  /**
   * Set more icon vertically
   */
  iconVertical: PropTypes.bool,
  /**
   * Set data
   */
  data: PropTypes.object,
  /**
   * Display play track option
   */
  play: PropTypes.bool,
  /**
   * Display add playlist option
   */
  playlist: PropTypes.bool,
  /**
   * Display add queue option
   */
  queue: PropTypes.bool,
};
var TrackDropdown = function (_a) {
  var className = _a.className,
    btnClassName = _a.btnClassName,
    download = _a.download,
    favorite = _a.favorite,
    href = _a.href,
    iconVertical = _a.iconVertical,
    data = _a.data,
    play = _a.play,
    playlist = _a.playlist,
    showCta = _a.showCta,
    queue = _a.queue;

  var _b = usePlayer(),
    addQueue = _b.addQueue,
    nextPlay = _b.nextPlay,
    playAll = _b.playAll,
    playPause = _b.playPause;
  /**
   *
   * Handle link `onClick` event
   */
  var handleClick = function () {
    return data.songs ? playAll(data.songs) : playPause(data);
  };
  const exists = (i) =>
    !isNil(i) &&
    !isEmpty(i) &&
    i !== 'null' &&
    i !== 'undefined' &&
    i !== 0 &&
    i !== '0';
  return (
    // Cover [[ Find at scss/components/cover.scss ]]
    <div className={className}>
      {exists(data.price) ? (
        <span role='button'>
          <a className='bg-dark text-white px-4 py-1 rounded text-xs dropdown-link'>
            R {data.price}
          </a>
        </span>
      ) : (
        <span />
      )}
      {showCta && (data.src || data.url) && (
        <span role='button'>
          {data.premium && (
            <a
              className='bg-primary mx-4 text-white px-4 py-1 rounded text-xs pe-auto'
              onClick={function () {
                const link = data.src || data.url;
                return (window.location = '/soon');
              }}
            >
              Buy
            </a>
          )}
          {!data.premium && (
            <a
              className='bg-primary mx-4 text-white px-4 py-1 rounded text-xs pointer-events'
              href={data.src || data.url}
              target='_blank'
              download
            >
              Download
            </a>
          )}
        </span>
      )}
      <a
        role='button'
        className={classNames(btnClassName, 'dropdown-link')}
        data-bs-toggle='dropdown'
        aria-label='Options'
        aria-expanded='false'
      >
        {iconVertical ? <RiMore2Fill /> : <RiMoreFill />}
      </a>
      <div className='dropdown-menu dropdown-menu-sm'>
        {favorite && (
          <a className='dropdown-item' role='button'>
            Favorite
          </a>
        )}
        {playlist && (
          <a className='dropdown-item' role='button'>
            Add to playlist
          </a>
        )}
        {queue && (
          <>
            <a
              className='dropdown-item'
              role='button'
              onClick={function () {
                return addQueue(data);
              }}
            >
              Add to queue
            </a>
            <a
              className='dropdown-item'
              role='button'
              onClick={function () {
                return nextPlay(data);
              }}
            >
              Next to play
            </a>
          </>
        )}
        {download && (
          <a className='dropdown-item' role='button'>
            Download
          </a>
        )}
        <a className='dropdown-item' role='button'>
          Share
        </a>
        <div className='dropdown-divider'></div>
        {play ? (
          <a className='dropdown-item' role='button' onClick={handleClick}>
            Play
          </a>
        ) : (
          href && (
            <Link href={href} className='dropdown-item'>
              View details
            </Link>
          )
        )}
      </div>
    </div>
  );
};
TrackDropdown.propTypes = propTypes;
TrackDropdown.displayName = 'TrackDropdown';
export default TrackDropdown;
