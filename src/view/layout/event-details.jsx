/**
 * @name EventDetails
 * @file event-details.tsx
 * @description event details page component
 */
'use client';
// Modules
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  RiAddCircleLine,
  RiMailOpenFill,
  RiMapPin2Fill,
  RiPhoneFill,
} from '@remixicon/react';
// Components
import AvatarGroup from '@/core/components/avatar-group';
// Contexts
import { useTheme } from '@/core/contexts/theme';
import AvatarCard from '@/core/components/card/avatar';
import Carousel from '@/core/components/carousel';
import Artist from '@/view/landing/artist';
import { assoc } from 'ramda';
import Link from 'next/link';
var propTypes = {
  /**
   * Set event data
   */
  event: PropTypes.object.isRequired,
};
var EventDetails = function (_a) {
  var event = _a.event;
  var replaceClassName = useTheme().replaceClassName;
  return (
    <>
      {/* Hero [[ Find at scss/framework/hero.scss ]] */}
      <div
        className='hero'
        style={{ backgroundImage: 'url(/images/banner/event.jpg)' }}
      />

      {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
      <div className='under-hero container'>
        {/* Section [[ Find at scss/framework/section.scss ]] */}
        <div className='section'>
          <div className='col-xl-8 px-sm-4 px-md-5 px-xl-0 mx-auto mb-5'>
            <h1>{event.title}</h1>
            {/* Info list [[ Find at scss/components/list.scss ]] */}
            <ul className='info-list info-list--dotted mt-3'>
              <li>
                <AvatarGroup data={event} />
              </li>
              {event.seats && <li>{event.seats} seats only</li>}
              <li className='fw-semibold'>{event.date}</li>
            </ul>

            <button
              type='button'
              className='btn btn-primary mt-4'
              style={{ minWidth: 140 }}
            >
              <div className='btn__wrap'>
                <RiAddCircleLine />
                <span>Join Event</span>
              </div>
            </button>
          </div>

          <div className='col-xl-10 mx-auto mb-5'>
            {/* Cover [[ Find at scss/components/cover.scss ]] */}
            <div className='cover cover--round'>
              <div className='cover__image'>
                <div className='ratio ratio-16x9'>
                  <Image
                    width={540}
                    height={320}
                    src={event.image}
                    alt={event.title}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='col-xl-8 px-4 px-md-5 px-xl-0 mx-auto'>
            <div className='row g-4 fs-6 mb-4'>
              <div className='col-sm-6 d-flex'>
                <RiMapPin2Fill size={20} />
                <div className={replaceClassName('ms-3')}>
                  <span className='d-block mb-2 fw-semibold text-dark'>
                    Venue At
                  </span>
                  <Link href={event.venue.href}>{event.venue.name}</Link>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='d-flex align-items-center mb-3'>
                  <RiPhoneFill size={20} />
                  <a
                    href={'tel:' + event.phone}
                    className={replaceClassName('ms-3 text-dark')}
                  >
                    {event.phone}
                  </a>
                </div>
                <div className='d-flex align-items-center'>
                  <RiMailOpenFill size={20} />
                  <a
                    href={'mailto:' + event.email}
                    className={replaceClassName('ms-3 text-dark')}
                  >
                    {event.email}
                  </a>
                </div>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: event.description }} />
            <div className='row g-4 fs-6 mt-4'>
              <div className='col-12'>
                <h4 className='fw-semibold my-4'>
                  Perfomances <span className='text-primary'>By</span>
                </h4>
                <Carousel
                  Component={AvatarCard}
                  slideView={6}
                  data={event.artists.map((c) => assoc('cover', c.image, c))}
                  pagination
                  autoplay
                />
              </div>
            </div>
            <div className='row g-4 fs-6 mt-4'>
              <div className='col-12'>
                <h4 className='fw-semibold my-4'>
                  Organised <span className='text-primary'>By</span>
                </h4>
                <Carousel
                  Component={AvatarCard}
                  slideView={4}
                  data={event.organisers.map((c) => assoc('cover', c.image, c))}
                  pagination
                  autoplay
                />
              </div>
              <div className='col-12'>
                <h4 className='fw-semibold my-4'>
                  In Partnership <span className='text-primary'>With</span>
                </h4>
                <Carousel
                  Component={AvatarCard}
                  slideView={6}
                  data={event.companies.map((c) => assoc('cover', c.image, c))}
                  pagination
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
EventDetails.propTypes = propTypes;
EventDetails.displayName = 'EventDetails';
export default EventDetails;
