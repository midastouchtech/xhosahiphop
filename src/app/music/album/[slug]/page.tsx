
// Components
import CoverInfo from '@/core/components/cover-info'
import Section from '@/view/layout/section'
import Comments from '@/core/components/comments'
import TrackList from '@/core/components/list'

// Utilities
import { getAlbums } from '@/core/utils/helper'
import { AlbumTypes, ParamsTypes } from '@/core/types'


export default async function AlbumDetailsPage({params}: ParamsTypes) {

    const albums = await getAlbums()
    const album = albums.find(item => item.id === params.slug) as AlbumTypes
    
	
	return (
		<>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/song.jpg)'}}
            />

            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
                <CoverInfo data={album} />

                {/* Section [[ Find at scss/framework/section.scss ]] */}
                <div className='section'>
                    {/* List [[ Find at scss/components/list.scss ]] */}
                    <div className='list'>
                        <div className='row'>
                            {album.songs?.map((item: any, index: number) => (
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
                </div>
                

                <Section 
                    title='Related <span class="text-primary">Albums</span>'
                    data={albums}
                    card='album'
                    slideView={5}
                    navigation
                    autoplay
                />

                <Comments id={album.id} />
            </div>
		</>
	)
}
