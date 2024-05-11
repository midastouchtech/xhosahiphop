/**
 * @name Event
 * @file event.tsx
 * @description music landing page event section component
 */
"use client";
// Modules
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
// Components
import Carousel from '@/core/components/carousel';
import EventCard from '@/core/components/card/event';
var propTypes = {
    /**
     * Set event data
     */
    events: PropTypes.array.isRequired
};
var Event = function (_a) {
    var events = _a.events;
    return (
    // Main section [[ Find at scss/framework/section.scss ]]
    <section className='main-section bg-light'>
            <div className='container'>
                <div className='d-sm-flex align-items-center justify-content-between text-center mb-5'>
                    <h2 className='mb-4 mb-sm-0'>Upcoming <span className='text-primary'>Event</span></h2>
                    <Link className='btn btn-outline-primary' href='/music/event'>Explore all events</Link>
                </div>
                <Carousel Component={EventCard} slideView={3} gap={32} data={events} pagination autoplay/>
            </div>
        </section>);
};
Event.propTypes = propTypes;
Event.displayName = 'Event';
export default Event;
