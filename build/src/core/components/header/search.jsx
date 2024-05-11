/**
 * @name Search
 * @file search.tsx
 * @description header search component
 */
"use client";
// Modules
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { RiSearch2Line } from '@remixicon/react';
// Contexts
import { useTheme } from '@/core/contexts/theme';
// Components
import Scrollbar from '../scrollbar';
// Utilities
import { SEARCH_RESULTS } from '@/core/constants/constant';
var Search = function () {
    var pathname = usePathname();
    var replaceClassName = useTheme().replaceClassName;
    var searchRef = useRef(null);
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    // Add/Remove DOM click event
    useEffect(function () {
        document.addEventListener('click', handleDOMClick);
        return function () { return document.removeEventListener('click', handleDOMClick); };
    }, [isOpen]);
    // Close search on route change
    useEffect(function () { return closeSearch; }, [pathname]);
    /**
     *
     * Handle `onClick` event to show search
     */
    var handleClick = function () {
        document.body.setAttribute(SEARCH_RESULTS, 'true');
        setIsOpen(true);
    };
    /**
     *
     * Handle DOM `onClick` event to hide search
     * @param event
     */
    var handleDOMClick = function (event) {
        var current = searchRef.current;
        if (current && !current.contains(event.target))
            closeSearch();
    };
    /**
     *
     * Close search
     */
    var closeSearch = function () {
        if (isOpen) {
            document.body.removeAttribute(SEARCH_RESULTS);
            setIsOpen(false);
        }
    };
    return (<>
            {/* Search form [[ Find at scss/framework/search.scss ]] */}
            <form id='search_form' className={replaceClassName('me-3')}>
                <label htmlFor='search_input'>
                    <RiSearch2Line />
                </label>
                <input id='search_input' className='form-control form-control-sm' placeholder='Type anything to get result...' onClick={handleClick}/>
            </form>

            {/* Search form [[ Find at scss/framework/search.scss ]] */}
            <div ref={searchRef} id='search_results' className='search pb-3'>
                <div className='search__head'>
                    <button type='button' className='btn btn-sm btn-light-primary active'>Trending</button>
                    <button type='button' className='btn btn-sm btn-light-primary'>Artists</button>
                    <button type='button' className='btn btn-sm btn-light-primary'>Songs</button>
                    <button type='button' className='btn btn-sm btn-light-primary'>Albums</button>
                </div>
                <Scrollbar className='flex-1'>
                    <div className='search__body'>
                        <div className='mb-4'>
                            <div className='d-flex align-items-center justify-content-between mb-3'>
                                <span className='search__title'>Artists</span>
                                <Link href='/music/artist' className='btn btn-link'>View All</Link>
                            </div>
                            <div className='row g-4 list'>
                                <div className='col-xl-3 col-md-4 col-sm-6'>
                                    <div className='list__item'>
                                        <Link href='/music/artist/1' className='list__cover'>
                                            <div className='ratio ratio-1x1'>
                                                <Image src='/images/cover/large/5.jpg' width={128} height={128} alt='Jina Moore'/>
                                            </div>
                                        </Link>
                                        <div className='list__content'>
                                            <Link href='/music/artist/1' className='list__title text-truncate'>Jina Moore</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-md-4 col-sm-6'>
                                    <div className='list__item'>
                                        <Link href='/music/artist/1' className='list__cover'>
                                            <div className='ratio ratio-1x1'>
                                                <Image src='/images/cover/large/6.jpg' width={128} height={128} alt='Rasomi Pelina'/>
                                            </div>
                                        </Link>
                                        <div className='list__content'>
                                            <Link href='/music/artist/1' className='list__title text-truncate'>Rasomi Pelina</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-md-4 col-sm-6'>
                                    <div className='list__item'>
                                        <Link href='/music/artist/1' className='list__cover'>
                                            <div className='ratio ratio-1x1'>
                                                <Image src='/images/cover/large/7.jpg' width={128} height={128} alt='Pimila Holliwy'/>
                                            </div>
                                        </Link>
                                        <div className='list__content'>
                                            <Link href='/music/artist/1' className='list__title text-truncate'>Pimila Holliwy</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-md-4 col-sm-6'>
                                    <div className='list__item'>
                                        <Link href='/music/artist/1' className='list__cover'>
                                            <div className='ratio ratio-1x1'>
                                                <Image src='/images/cover/large/8.jpg' width={128} height={128} alt='Karen Jennings'/>
                                            </div>
                                        </Link>
                                        <div className='list__content'>
                                            <Link href='/music/artist/1' className='list__title text-truncate'>Karen Jennings</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className='d-flex align-items-center justify-content-between mb-3'>
                                <span className='search__title'>Songs</span>
                                <Link href='/music/song' className='btn btn-link'>View All</Link>
                            </div>
                            <div className='row g-4 list'>
                                <div className='col-xl-3 col-md-4 col-sm-6'>
                                    <div className='list__item'>
                                        <Link href='/music/song/1' className='list__cover'>
                                            <div className='ratio ratio-1x1'>
                                                <Image src='/images/cover/small/6.jpg' width={128} height={128} alt='Hey not me'/>
                                            </div>
                                        </Link>
                                        <div className='list__content'>
                                            <Link href='/music/song/1' className='list__title text-truncate'>Hey not me</Link>
                                            <div className='list__subtitle text-truncate'>
                                                <Link href='/music/artist/1'>Rasomi Pelina</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-md-4 col-sm-6'>
                                    <div className='list__item'>
                                        <Link href='/music/song/1' className='list__cover'>
                                            <div className='ratio ratio-1x1'>
                                                <Image src='/images/cover/small/7.jpg' width={128} height={128} alt='Deep inside'/>
                                            </div>
                                        </Link>
                                        <div className='list__content'>
                                            <Link href='/music/song/1' className='list__title text-truncate'>Deep inside</Link>
                                            <div className='list__subtitle text-truncate'>
                                                <Link href='/music/artist/1'>Pimila Holliwy</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-md-4 col-sm-6'>
                                    <div className='list__item'>
                                        <Link href='/music/song/1' className='list__cover'>
                                            <div className='ratio ratio-1x1'>
                                                <Image src='/images/cover/small/8.jpg' width={128} height={128} alt='Sadness'/>
                                            </div>
                                        </Link>
                                        <div className='list__content'>
                                            <Link href='/music/song/1' className='list__title text-truncate'>Sadness</Link>
                                            <div className='list__subtitle text-truncate'>
                                                <Link href='/music/artist/1'>Karen Jennings</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-md-4 col-sm-6'>
                                    <div className='list__item'>
                                        <Link href='/music/song/1' className='list__cover'>
                                            <div className='ratio ratio-1x1'>
                                                <Image src='/images/cover/small/9.jpg' width={128} height={128} alt='Electric wave'/>
                                            </div>
                                        </Link>
                                        <div className='list__content'>
                                            <Link href='/music/song/1' className='list__title text-truncate'>Electric wave</Link>
                                            <div className='list__subtitle text-truncate'>
                                                <Link href='/music/artist/1'>Lenisa Gory</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='d-flex align-items-center justify-content-between mb-3'>
                                <span className='search__title'>Albums</span>
                                <Link href='/music/album' className='btn btn-link'>View All</Link>
                            </div>
                            <div className='row g-4 list'>
                                <div className='col-xl-3 col-md-4 col-sm-6'>
                                    <div className='list__item'>
                                        <Link href='/music/album/1' className='list__cover'>
                                            <div className='ratio ratio-1x1'>
                                                <Image src='/images/cover/small/1.jpg' width={128} height={128} alt='Mummy'/>
                                            </div>
                                        </Link>
                                        <div className='list__content'>
                                            <Link href='/music/album/1' className='list__title text-truncate'>Mummy</Link>
                                            <div className='list__subtitle text-truncate'>
                                                <Link href='/music/artist/1'>Arebica Luna</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-md-4 col-sm-6'>
                                    <div className='list__item'>
                                        <Link href='/music/album/1' className='list__cover'>
                                            <div className='ratio ratio-1x1'>
                                                <Image src='/images/cover/small/2.jpg' width={128} height={128} alt='Hot shot'/>
                                            </div>
                                        </Link>
                                        <div className='list__content'>
                                            <Link href='/music/album/1' className='list__title text-truncate'>Hot shot</Link>
                                            <div className='list__subtitle text-truncate'>
                                                <Link href='/music/artist/1'>Gerrina Linda</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-md-4 col-sm-6'>
                                    <div className='list__item'>
                                        <Link href='/music/album/1' className='list__cover'>
                                            <div className='ratio ratio-1x1'>
                                                <Image src='/images/cover/small/3.jpg' width={128} height={128} alt='Own way'/>
                                            </div>
                                        </Link>
                                        <div className='list__content'>
                                            <Link href='/music/album/1' className='list__title text-truncate'>Own way</Link>
                                            <div className='list__subtitle text-truncate'>
                                                <Link href='/music/artist/1'>Zunira Willy & Nutty Nina</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-md-4 col-sm-6'>
                                    <div className='list__item'>
                                        <Link href='/music/album/1' className='list__cover'>
                                            <div className='ratio ratio-1x1'>
                                                <Image src='/images/cover/small/4.jpg' width={128} height={128} alt='Say yes'/>
                                            </div>
                                        </Link>
                                        <div className='list__content'>
                                            <Link href='/music/album/1' className='list__title text-truncate'>Say yes</Link>
                                            <div className='list__subtitle text-truncate'>
                                                <Link href='/music/artist/1'>Johnny Marro</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Scrollbar>
            </div>
        </>);
};
Search.displayName = 'Search';
export default Search;
