/**
 * @name Playlist
 * @file playlist.tsx
 * @description audio player playlist component
 */
"use client"


// Modules
import React from 'react'
import { RiMusic2Line, RiPlayListFill } from '@remixicon/react'
import { useEventCallback, useIsClient } from 'usehooks-ts'

// Contexts
import { useTheme } from '@/core/contexts/theme'
import { usePlayer } from '@/core/contexts/player'

// Components
import Scrollbar from '../scrollbar'
import TrackList from '../list'


const Playlist: React.FC = () => {

    const {replaceClassName} = useTheme()
    const {clearPlaylist, songs} = usePlayer()
    const isClient = useIsClient()

    // Handle link `onClick` event
    const handleClick = useEventCallback(clearPlaylist)


    return (
        // Playlist [[ Find at scss/framework/playlist.scss ]]
        isClient && (
            <div
                className={replaceClassName(
                    'playlist dropstart me-3'
                )}
            >
                <button 
                    className='btn btn-icon' 
                    data-bs-toggle='dropdown' 
                    data-bs-auto-close='outside' 
                    aria-label='Playlist' 
                    aria-expanded='false'
                >
                    <RiPlayListFill size={20} />
                </button>
                <div className='dropdown-menu playlist__dropdown'>
                    <div className='playlist__head d-flex align-items-center justify-content-between'>
                        <h6 className='mb-0'>Next Lineup</h6>
                        <a 
                            role='button' 
                            className='btn btn-link' 
                            onClick={handleClick}
                        >
                            Clear
                        </a>
                    </div>
                    <div className='playlist__body'>
                        {songs.length ? (
                            <Scrollbar className='flex-1'>
                                <div className='list'>
                                    {songs.map((song, index) => (
                                        <TrackList 
                                            key={index}
                                            data={song}
                                            play
                                            remove
                                        />
                                    ))}
                                </div>
                            </Scrollbar>
                        ) : (
                            <div className='col-sm-8 col-10 mx-auto mt-5 text-center'>
                                <RiMusic2Line className='mb-3 text-dark' />
                                <p>No songs, album or playlist are added on lineup.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    )
}


Playlist.displayName = 'Playlist'
export default Playlist