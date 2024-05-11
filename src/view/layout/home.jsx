/**
 * @name Home
 * @file home.tsx
 * @description common component for music pages section
 */
"use client";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Modules
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';
// Components
import Section from './section';
import Tab from '@/core/components/tab';
import TrackList from '@/core/components/list';
var propTypes = {
    /**
     * Set albums data
     */
    albums: PropTypes.array.isRequired,
    /**
     * Set artists data
     */
    artists: PropTypes.array.isRequired,
    /**
     * Set events data
     */
    events: PropTypes.array.isRequired,
    /**
     * Set playlist data
     */
    playlist: PropTypes.array.isRequired,
    /**
     * Set radio data
     */
    radio: PropTypes.array.isRequired,
    /**
     * Set songs data
     */
    song: PropTypes.array.isRequired,
};
var Home = function (_a) {
    var albums = _a.albums, artists = _a.artists, events = _a.events, playlist = _a.playlist, radio = _a.radio, song = _a.song;
    // 
    // Data for tab list view
    var tabs = [
        {
            id: 'trending',
            name: 'Trending',
            list: __spreadArray([], song, true).slice(0, 5)
        },
        {
            id: 'international',
            name: 'International',
            list: __spreadArray([], song, true).slice(5)
        },
        {
            id: 'recent',
            name: 'Recent',
            list: __spreadArray([], song, true).slice(0, 5)
        }
    ];
    // 
    // Divide albums data into two part to set a design.
    var divide = Math.ceil(albums.length / 2);
    var albumList = [];
    albumList.push(__spreadArray([], albums, true).slice(0, divide));
    albumList.push(__spreadArray([], albums, true).slice(-divide));
    return (
    // Under hero [[ Find at scss/framework/hero.scss ]]
    <div className='under-hero container'>
            <Section title='Top <span class="text-primary">Charts</span>' subtitle='Listen top charts' href='/music/song' data={song} card='track' slideView={5} navigation autoplay/>

            <div className='row'>
                <div className='col-xl-6'>
                    <Section title='Upcoming <span class="text-primary">Events</span>' href='/music/event' data={events} card='event' slideView={2} pagination autoplay/>
                </div>
                <div className='col-xl-1'></div>
                <div className='section col-xl-5'>
                    <Tab id='songs_list'>
                        {tabs.map(function (tab, index) { return (<li key={tab.id} className='nav-item' role='presentation'>
                                <button className={classNames('nav-link', index === 0 && 'active')} id={tab.id} data-bs-toggle='tab' data-bs-target={'#' + tab.id + '_pane'} type='button' role='tab' aria-controls={tab.id + '_pane'} aria-selected={index === 0 ? true : false}>
                                    {tab.name}
                                </button>
                            </li>); })}
                    </Tab>

                    <div className='tab-content mt-4' id='songs_list_content'>
                        {tabs.map(function (tab, index) { return (<div key={tab.id} id={tab.id + '_pane'} role='tabpanel' aria-labelledby={tab.id} tabIndex={0} className={classNames('tab-pane fade', index === 0 && 'show active')}>
                                {/* List [[ Find at scss/components/list.scss ]] */}
                                <div className='list'>
                                    {tab.list.map(function (item, listIndex) { return (<TrackList key={listIndex} data={item} play duration dropdown favorite playlist queue/>); })}
                                </div>
                            </div>); })}
                    </div>
                </div>
            </div>

            <Section title='New <span class="text-primary">Releases</span>' subtitle='New to listen' href='/music/song' data={song} card='track' slideView={5} navigation autoplay/>

            <Section title='Featured <span class="text-primary">Artists</span>' subtitle='Best to listen' href='/music/artist' data={artists} card='avatar' slideView={6} pagination autoplay/>

            <section className='section'>
                <div className='section__head'>
                    <div className='flex-grow-1'>
                        <span className='section__subtitle'>Trending to listen</span>
                        <h3 className='mb-0'>Top <span className='text-primary'>Albums</span></h3>
                    </div>
                    <Link href='/music/album' className='btn btn-link'>View All</Link>
                </div>
                {/* List [[ Find at scss/components/list.scss ]] */}
                <div className='list list--lg list--order'>
                    <div className='row'>
                        {albumList.map(function (item, index) { return (<div key={index} className='col-xl-6'>
                                {item.map(function (album) { return (<TrackList key={album.id} data={album} download dropdown favorite link/>); })}
                            </div>); })}
                    </div>
                </div>
            </section>
            
            <Section title='Best <span class="text-primary">Playlist</span>' subtitle='Collection to listen' href='/music/playlist' data={playlist} card='playlist' slideView={4} navigation autoplay/>
            
            <Section title='Live <span class="text-primary">Radios</span>' subtitle='Listen live now' href='/music/stations' data={radio} card='radio' slideView={5} pagination autoplay/>
        </div>);
};
Home.propTypes = propTypes;
Home.displayName = 'Home';
export default Home;
