/**
 * @name Songs
 * @file songs.tsx
 * @description songs page component
 */
"use client"


// Modules
import React from 'react'
import PropTypes from 'prop-types'
import { RiLoader3Fill } from '@remixicon/react'

// Context
import { useTheme } from '@/core/contexts/theme'

// Components
import Section from '@/view/layout/section'
import TrackList from '@/core/components/list'

// Utilities
import { AlbumTypes, SongTypes } from '@/core/types'

interface Props {
    albums: AlbumTypes[]
    songs: SongTypes[]
}

const propTypes = {
    /**
     * Set albums data
     */
    albums: PropTypes.array.isRequired,
    
    /**
     * Set songs data
     */
    songs: PropTypes.array.isRequired

}


const Songs: React.FC<Props> = ({albums, songs}) => {

    const {replaceClassName} = useTheme()


    return (
        <>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/song.jpg)'}} 
            />
            
            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
                {/* Section [[ Find at scss/framework/section.scss ]] */}
                <div className='section'>
                    <div className='section__head'>
                        <span className={replaceClassName(
                            'd-block pe-3 fs-6 fw-semibold'
                            )}
                        >
                            5240 Songs in the list
                        </span>
                        <div>
                            <select className='form-select' aria-label='Filter song'>
                                <option value='Popular'>Popular</option>
                                <option value='Most played'>Most played</option>
                                <option value='A to Z'>A to Z</option>
                                <option value='Z to A'>Z to A</option>
                            </select>
                        </div>
                    </div>

                    {/* List [[ Find at scss/components/list.scss ]] */}
                    <div className='list'>
                        <div className='row'>
                            {songs.map((item: any, index: number) => (
                                <div key={index} className='col-xl-6'>
                                    <TrackList 
                                        data={item}
                                        duration
                                        dropdown
                                        playlist
                                        queue
                                        play
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='mt-5 text-center'>
                        <button type='button' className='btn btn-primary'>
                            <div className='btn__wrap'>
                                <RiLoader3Fill />
                                <span>Load more</span>
                            </div>
                        </button>
                    </div>
                </div>

                <Section 
                    title='Free <span class="text-primary">Albums</span>'
                    data={albums}
                    card='album'
                    slideView={5}
                    navigation
                    autoplay
                />
            </div>
        </>
    )
}


Songs.propTypes = propTypes as any
Songs.displayName = 'Songs'

export default Songs