
// Components
import Section from '@/view/layout/section'

// Utilities
import { getArtists } from '@/core/utils/helper'
import { ArtistTypes } from '@/core/types'


export default async function ArtistPage() {

    const artists = await getArtists() as ArtistTypes[]
    
	
	return (
		<>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/artists.jpg)'}}
            />

            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
                <Section 
                    title='Featured <span class="text-primary">Artists</span>'
                    data={artists}
                    card='avatar'
                    slideView={6}
                    pagination
                    autoplay
                />

                <Section 
                    title='Top <span class="text-primary">Artists</span>'
                    data={artists}
                    card='artist'
                    slideView={5}
                    grid
                    navigation
                    autoplay
                />
            </div>
		</>
	)
}
