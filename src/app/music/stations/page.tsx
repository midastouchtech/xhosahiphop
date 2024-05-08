
// Components
import Section from '@/view/layout/section'

// Utilities
import { getRadio } from '@/core/utils/helper'


export default async function StationsPage() {

    const radio = await getRadio()
    
	
	return (
		<>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/radio.jpg)'}}
            />
            
            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
                <Section 
                    title='Live <span class="text-primary">Frequency</span>'
                    data={radio}
                    card='radio'
                    slideView={5}
                    grid
                    navigation
                    autoplay
                />
                <Section 
                    title='Top <span class="text-primary">Radio</span>'
                    data={radio}
                    card='radio'
                    slideView={5}
                    grid
                    navigation
                    autoplay
                />
            </div>
		</>
	)
}
