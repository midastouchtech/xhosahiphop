
// Components
import Section from '@/view/layout/section'

// Utilities
import { getPlaylist } from '@/core/utils/helper'


export default async function PlaylistPage() {

    const playlist = await getPlaylist()
	
	return (
        <>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/song.jpg)'}} 
            />

            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
                <Section 
                    title='Trending <span class="text-primary">Playlist</span>'
                    data={playlist}
                    card='playlist'
                    slideView={4}
                    grid
                />
            </div>
        </>
    )
}
