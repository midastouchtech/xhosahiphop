/**
 * @name EventCard
 * @file event.tsx
 * @description event card component
 */
'use client';
// Modules
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { RiMapPinFill } from '@remixicon/react';
// Contexts
import { useTheme } from '@/core/contexts/theme';
// Components
import AvatarGroup from '../avatar-group';
import { removeHtml } from '@/core/utils';
var propTypes = {
  /**
   * Set event data
   */
  data: PropTypes.any.isRequired,
};
var EventCard = function (_a) {
  var data = _a.data;
  var replaceClassName = useTheme().replaceClassName;
  return (
    // Cover [[ Find at scss/components/cover.scss ]]
    <div className='cover cover--round scale-animation'>
      <Link href={'/music/event/' + data.id} className='cover__image'>
        <div className='ratio ratio-16x9'>
          <Image src={data.image} width={540} height={320} alt={data.title} />
        </div>
      </Link>
      <div className='cover__foot mt-3 px-2'>
        <div className='cover__subtitle d-flex mb-2'>
          <RiMapPinFill size={16} />
          <span
            className={replaceClassName('ms-1 fw-semibold')}
            dangerouslySetInnerHTML={{ __html: data.venue.name }}
          ></span>
        </div>
        <div className='mb-3'>
          <Link href={'/music/event/' + data.id} className='cover__title fs-6'>
            {data.title}
          </Link>
        </div>
        <div className='d-flex align-items-center justify-content-between'>
          <AvatarGroup data={data} />
          <Link
            className='btn btn-sm btn-light-primary'
            href={'/music/event/' + data.id}
          >
            Join Event
          </Link>
        </div>
      </div>
    </div>
  );
};
EventCard.propTypes = propTypes;
EventCard.displayName = 'EventCard';
export default EventCard;
