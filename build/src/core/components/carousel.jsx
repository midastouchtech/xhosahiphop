/**
 * @name Carousel
 * @file carousel.tsx
 * @description use component to customize swiper slider
 */
"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Modules
import React, { createElement, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Grid, Navigation, Pagination } from 'swiper/modules';
// Contexts
import { useTheme } from '../contexts/theme';
var propTypes = {
    /**
     * Set Swiper {autoplay} option,
     */
    autoplay: PropTypes.bool,
    /**
     * Set {spaceBetween} to Swiper in desktop
     *
     * @default 24
     */
    gap: PropTypes.number,
    /**
     * Set grid layout to Swiper in desktop
     */
    grid: PropTypes.bool,
    /**
     * Set {navigation} to Swiper
     */
    navigation: PropTypes.bool,
    /**
     * Set {pagination} to Swiper
     */
    pagination: PropTypes.bool,
    /**
     * Set {slidesPerView} to Swiper
     *
     * @default 1
     */
    slideView: PropTypes.number,
    /**
     * Set data of array for Swiper slide view
     */
    data: PropTypes.array.isRequired,
    /**
     * Component to set inside Swiper slide
     */
    Component: PropTypes.elementType.isRequired,
    /**
     * Set child component props
     */
    childProps: PropTypes.any,
    /**
     * Event will be fired after swiper.update() call
     */
    onAfterInit: PropTypes.func
};
var Carousel = function (_a) {
    var autoplay = _a.autoplay, _b = _a.gap, gap = _b === void 0 ? 24 : _b, grid = _a.grid, navigation = _a.navigation, pagination = _a.pagination, _c = _a.slideView, slideView = _c === void 0 ? 1 : _c, data = _a.data, Component = _a.Component, childProps = _a.childProps, onAfterInit = _a.onAfterInit;
    var rtl = useTheme().rtl;
    var _d = useState(), direction = _d[0], setDirection = _d[1];
    var next = useRef(null);
    var prev = useRef(null);
    // Set carousel slides
    var desktopSlides = slideView;
    var tabletLandscapeSlides = desktopSlides >= 5
        ? Math.round(desktopSlides / 1.5)
        : desktopSlides === 4
            ? Math.round(desktopSlides / 2)
            : desktopSlides;
    var mobileLandscapeSlides = desktopSlides > 4 ? 3 : 2;
    var mobilePortraitSlides = desktopSlides > 4 ? 2 : 1;
    // Set carousel spacing
    var desktopGap = gap;
    var mobileGap = 16;
    // Calculate number of rows to set grid view
    var rows = data.reduce(function (all, one, i) {
        var ch = Math.floor(i / desktopSlides);
        all[ch] = [].concat((all[ch] || []), one);
        return all;
    }, []).length;
    // Carousel options
    var options = {
        speed: 500,
        slidesPerView: mobilePortraitSlides,
        slidesPerGroup: 1,
        spaceBetween: mobileGap,
        breakpoints: {
            480: { slidesPerView: mobileLandscapeSlides },
            768: { slidesPerView: tabletLandscapeSlides },
            1200: {
                slidesPerView: desktopSlides,
                spaceBetween: desktopGap,
            }
        }
    };
    useEffect(function () { return setDirection(rtl ? 'rtl' : 'ltr'); }, [rtl]);
    /**
     *
     * Event before swiper init to set navigation ref
     * @param swiper
     */
    var onBeforeInit = function (swiper) {
        var navigation = swiper.params.navigation;
        if (navigation && typeof navigation !== 'boolean') {
            navigation.prevEl = prev.current;
            navigation.nextEl = next.current;
        }
    };
    // Set autoplay option
    if (autoplay) {
        options.autoplay = {
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        };
    }
    // Set grid layout for desktop view
    if (grid && options.breakpoints) {
        options.breakpoints[1200].grid = {
            rows: rows,
            fill: 'row'
        };
    }
    // Set swiper pagination option
    if (pagination) {
        options.pagination = {
            clickable: true,
            dynamicBullets: true
        };
    }
    return (<div className='swiper-carousel'>
            <Swiper key={direction} dir={direction} modules={[A11y, Autoplay, Grid, Navigation, Pagination]} onBeforeInit={onBeforeInit} onAfterInit={onAfterInit} {...options}>
                {data.map(function (slide, index) {
            return <SwiperSlide key={index}>
                        {createElement(Component, __assign({ data: slide }, childProps))}
                    </SwiperSlide>;
        })}
            </Swiper>

            {/* Swiper controls */}
            {navigation && (<>
                    <div ref={prev} className='swiper-button-prev btn-default rounded-pill'/>
                    <div ref={next} className='swiper-button-next btn-default rounded-pill'/>
                </>)}
        </div>);
};
Carousel.propTypes = propTypes;
Carousel.displayName = 'Carousel';
export default Carousel;
