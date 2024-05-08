
// Modules
import Link from 'next/link'
import { RiAddFill } from '@remixicon/react'

// Components
import Carousel from '@/core/components/carousel'
import EventCard from '@/core/components/card/event'

// Utilities
import { getEvents } from '@/core/utils/helper'


export default async function EventPage() {

    const events = await getEvents()
	
	return (
		<>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/event.jpg)'}}
            />
            
            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
                {/* Section [[ Find at scss/framework/section.scss ]] */}
                <div className='section'>
                    <div className='section__head'>
                        <div className='flex-grow-1'>
                            <h3 className='mb-0'>
                                Upcoming <span className='text-primary'>Events</span>
                            </h3>
                        </div>
                        <Link href='/music/event/create' className='btn btn-primary'>
                            <div className='btn__wrap'>
                                <RiAddFill />
                                <span>Create Event</span>
                            </div>
                        </Link>
                    </div>
                    
                    <Carousel 
                        data={events}
                        Component={EventCard}
                        slideView={3}
                        grid
                    />
                </div>
            </div>
		</>
	)
}
