/**
 * @name PlanCard
 * @file plan.tsx
 * @description plan card component
 */
'use client';
// Modules
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';
// Contexts
import { useTheme } from '@/core/contexts/theme';
var propTypes = {
    /**
     * Set plan registered
     */
    register: PropTypes.bool,
    /**
     * Set register/choose plan link
     */
    showLink: PropTypes.bool,
};
var PlanCard = function (_a) {
    var register = _a.register, showLink = _a.showLink;
    var _b = useTheme(), rtl = _b.rtl, replaceClassName = _b.replaceClassName;
    var ArrowIcon = rtl ? RiArrowLeftLine : RiArrowRightLine;
    var title = register ? (<>
      Free <span className='text-primary'>Trial</span>
    </>) : (<>
      Selected <span className='text-primary'>Plan</span>
    </>);
    var subTitle = register ? (<>
      Get 45 days <b>Free Trial</b> subscription plan to experience awesome
      music.
    </>) : (<>
      Your current subscription plan will terminate in <b>10 days</b>, kindly
      select your plan.
    </>);
    var href = register ? '/auth/register' : '/music/plan';
    var label = register ? 'Register now' : 'Choose plan';
    return (<div className='card plan__info overflow-hidden'>
      <div className='card-body d-flex flex-column p-0'>
        <div className='p-4'>
          <h3 className='h4 mb-3'>{title}</h3>
          <p className='fs-6'>{subTitle}</p>
          {showLink && (<Link href={href} className='d-inline-flex align-items-center'>
              <span className={replaceClassName('me-1')}>{label}</span>
              <ArrowIcon size={16}/>
            </Link>)}
        </div>
        <div className='px-3 text-center mt-auto'>
          <Image src='/images/misc/plan.png' width={320} height={374} alt='Plan image' className='img-fluid'/>
        </div>
      </div>
    </div>);
};
PlanCard.propTypes = propTypes;
PlanCard.displayName = 'PlanCard';
export default PlanCard;
