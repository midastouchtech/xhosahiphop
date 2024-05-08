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

interface Props {
  register?: boolean;
  showLink?: boolean;
}

const propTypes = {
  /**
   * Set plan registered
   */
  register: PropTypes.bool,

  /**
   * Set register/choose plan link
   */
  showLink: PropTypes.bool,
};

const PlanCard: React.FC<Props> = ({ register, showLink }) => {
  const { rtl, replaceClassName } = useTheme();

  const ArrowIcon = rtl ? RiArrowLeftLine : RiArrowRightLine;

  const title = register ? (
    <>
      Free <span className='text-primary'>Trial</span>
    </>
  ) : (
    <>
      Selected <span className='text-primary'>Plan</span>
    </>
  );
  const subTitle = register ? (
    <>
      Get 45 days <b>Free Trial</b> subscription plan to experience awesome
      music.
    </>
  ) : (
    <>
      Your current subscription plan will terminate in <b>10 days</b>, kindly
      select your plan.
    </>
  );
  const href = register ? '/auth/register' : '/music/plan';
  const label = register ? 'Register now' : 'Choose plan';

  return (
    <div className='card plan__info overflow-hidden'>
      <div className='card-body d-flex flex-column p-0'>
        <div className='p-4'>
          <h3 className='h4 mb-3'>{title}</h3>
          <p className='fs-6'>{subTitle}</p>
          {showLink && (
            <Link href={href} className='d-inline-flex align-items-center'>
              <span className={replaceClassName('me-1')}>{label}</span>
              <ArrowIcon size={16} />
            </Link>
          )}
        </div>
        <div className='px-3 text-center mt-auto'>
          <Image
            src='/images/misc/plan.png'
            width={320}
            height={374}
            alt='Plan image'
            className='img-fluid'
          />
        </div>
      </div>
    </div>
  );
};

PlanCard.propTypes = propTypes as any;
PlanCard.displayName = 'PlanCard';

export default PlanCard;
