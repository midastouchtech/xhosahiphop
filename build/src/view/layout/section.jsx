/**
 * @name Section
 * @file section.tsx
 * @description common component for music pages section
 */
"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// Modules
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
// Components
import Carousel from '@/core/components/carousel';
import TrackCard from '@/core/components/card/track';
import EventCard from '@/core/components/card/event';
import AvatarCard from '@/core/components/card/avatar';
import CollectionCard from '@/core/components/card/collection';
var propTypes = {
    /**
     * Set card component base on name
     */
    card: PropTypes.string.isRequired,
    /**
     * Set section link
     */
    href: PropTypes.string,
    /**
     * Set section subtitle
     */
    subtitle: PropTypes.string,
    /**
     * Set section title
     */
    title: PropTypes.string.isRequired,
};
var Section = function (_a) {
    var card = _a.card, data = _a.data, href = _a.href, subtitle = _a.subtitle, slideView = _a.slideView, title = _a.title, props = __rest(_a, ["card", "data", "href", "subtitle", "slideView", "title"]);
    var cardType = null;
    var cardProps = null;
    var sectionHead = function () {
        return (href ? (<>
                    <div className='flex-grow-1'>
                        {subtitle && (<span className='section__subtitle'>{subtitle}</span>)}
                        <h3 className='mb-0' dangerouslySetInnerHTML={{ __html: title }}/>
                    </div>
                    <Link href={href} className='btn btn-link'>View All</Link>
                </>) : (<>
                    {subtitle && (<span className='section__subtitle'>{subtitle}</span>)}
                    <h3 className='mb-0' dangerouslySetInnerHTML={{ __html: title }}/>
                </>));
    };
    var handleAfterInit = function (swiper) {
        var slide = swiper.slides[0];
        var height = slide.getBoundingClientRect().height;
        var foot = slide.querySelector('.cover__foot');
        if (foot) {
            var footHeight = foot.getBoundingClientRect().height || 0;
            var percentage = Math.round(((height - footHeight) / height) * 100);
            var parentElement = swiper.el.parentElement;
            if (parentElement) {
                parentElement.style.setProperty('--swiper-carousel-navigation-top', percentage / 2 + '%');
            }
        }
    };
    // 
    // Set card component element & props.
    if (card === 'event') {
        cardType = EventCard;
    }
    else if (card === 'avatar') {
        cardType = AvatarCard;
    }
    else if (card === 'playlist' || card === 'genre') {
        cardType = CollectionCard;
        if (card === 'playlist') {
            cardProps = {
                info: true
            };
        }
    }
    else {
        cardType = TrackCard;
        cardProps = {
            dropdown: card !== 'artist',
            link: card === 'artist' || card === 'album',
            favorite: true,
            play: card === 'radio' || card === 'track',
            playlist: card === 'album' || card === 'track',
            queue: card === 'radio' || card === 'track'
        };
    }
    return (
    // Section [[ Find at scss/framework/section.scss ]]
    <section className='section'>
            <div className='section__head'>{sectionHead()}</div>
            <Carousel data={data} Component={cardType} childProps={cardProps} slideView={slideView} onAfterInit={handleAfterInit} {...props}/>
        </section>);
};
Section.propTypes = propTypes;
Section.displayName = 'Section';
export default Section;
