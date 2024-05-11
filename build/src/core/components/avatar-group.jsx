/**
 * @name AvatarGroup
 * @file avatar-group.tsx
 * @description avatar group component
 */
"use client";
// Modules
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
// Contexts
import { useTheme } from '@/core/contexts/theme';
var propTypes = {
    /**
     * Set event data
     */
    data: PropTypes.any.isRequired
};
var AvatarGroup = function (_a) {
    var data = _a.data;
    var replaceClassName = useTheme().replaceClassName;
    return (data.attendees && (<div className='d-flex align-items-center'>
                {/* Avatar group [[ Find at scss/components/avatar.scss ]] */}
                <div className='avatar-group'>
                    {data.attendees.map(function (attendee) { return (<div key={attendee.id} className='avatar'>
                            <div className='avatar__image'>
                                <Image src={attendee.cover} width={128} height={128} alt={attendee.name}/>
                            </div>
                        </div>); })}
                </div>
                {data.totalAttendee && (<div className={replaceClassName('ps-1')}>{data.totalAttendee - 3 + '+'}</div>)}
            </div>));
};
AvatarGroup.propTypes = propTypes;
AvatarGroup.displayName = 'AvatarGroup';
export default AvatarGroup;
