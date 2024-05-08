
// Components
import Section from '@/view/layout/section'

// Utilities
import { getGenre } from '@/core/utils/helper'


export default async function GenrePage() {

    const genre = await getGenre()
	
	return (
		<>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/home.jpg)'}}
            />
            
            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
                <Section 
                    title='Music <span class="text-primary">Genres</span>'
                    data={genre}
                    card='genre'
                    slideView={4}
                    grid
                    navigation
                    autoplay
                />
                <Section 
                    title='Podcast <span class="text-primary">Genres</span>'
                    data={genre}
                    card='genre'
                    slideView={4}
                    grid
                    navigation
                    autoplay
                />
            </div>
		</>
	)
}
