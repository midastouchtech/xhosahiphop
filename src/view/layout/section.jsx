/**
 * @name Section
 * @file section.tsx
 * @description common component for music pages section
 */
'use client';

// Modules
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { SwiperClass } from 'swiper/react';

// Components
import Carousel, { CarouselProps } from '@/core/components/carousel';
import TrackCard from '@/core/components/card/track';
import EventCard from '@/core/components/card/event';
import AvatarCard from '@/core/components/card/avatar';
import CollectionCard from '@/core/components/card/collection';

const Section = ({
  card,
  data,
  href,
  subtitle,
  slideView,
  title,
  ...props
}) => {
  let cardType = null;
  let cardProps = null;

  const sectionHead = () => {
    return href ? (
      <>
        <div className='flex-grow-1'>
          {subtitle && <span className='section__subtitle'>{subtitle}</span>}
          <h3 className='mb-0' dangerouslySetInnerHTML={{ __html: title }} />
        </div>
        <Link href={href} className='btn btn-link'>
          View All
        </Link>
      </>
    ) : (
      <>
        {subtitle && <span className='section__subtitle'>{subtitle}</span>}
        <h3 className='mb-0' dangerouslySetInnerHTML={{ __html: title }} />
      </>
    );
  };

  const handleAfterInit = (swiper) => {
    console.log('swiper', swiper);
    const slide = swiper.slides[0];
    if (swiper.slides.length > 0) {
      const { height } = slide.getBoundingClientRect();
      const foot = slide.querySelector('.cover__foot');

      if (foot) {
        const footHeight = foot.getBoundingClientRect().height || 0;
        const percentage = Math.round(((height - footHeight) / height) * 100);
        const { parentElement } = swiper.el;

        parentElement.style.setProperty('--cover-foot', `${percentage}%`);
      }
    }
  };

  //
  // Set card component element & props.
  if (card === 'event') {
    cardType = EventCard;
  } else if (card === 'avatar') {
    cardType = AvatarCard;
  } else if (card === 'playlist' || card === 'genre') {
    cardType = CollectionCard;
    if (card === 'playlist') {
      cardProps = {
        info: true,
      };
    }
  } else {
    cardType = TrackCard;
    cardProps = {
      dropdown: card !== 'artist',
      link: card === 'artist' || card === 'album',
      favorite: true,
      play: card === 'radio' || card === 'track',
      playlist: card === 'album' || card === 'track',
      queue: card === 'radio' || card === 'track',
    };
  }
  console.log('data', data);
  return (
    // Section [[ Find at scss/framework/section.scss ]]
    <section className='section'>
      <div className='section__head'>{sectionHead()}</div>
      <Carousel
        data={data}
        Component={cardType}
        childProps={cardProps}
        slideView={slideView}
        onAfterInit={handleAfterInit}
        {...props}
      />
    </section>
  );
};

Section.displayName = 'Section';

export default Section;
