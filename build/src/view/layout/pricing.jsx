/**
 * @name Pricing
 * @file pricing.tsx
 * @description component use to display plan pricing.
 */
'use client';
// Modules
import React from 'react';
import PropTypes from 'prop-types';
import { RiCheckboxCircleFill } from '@remixicon/react';
// Contexts
import { useTheme } from '@/core/contexts/theme';
// Components
import PlanCard from '@/core/components/card/plan';
import IconEl from '@/core/utils/icon';
var propTypes = {
    /**
     * Set event data
     */
    data: PropTypes.any.isRequired,
    /**
     * Set user plan
     */
    userPlan: PropTypes.bool,
    /**
     * Set register/choose plan link
     */
    showLink: PropTypes.bool,
};
var Pricing = function (_a) {
    var data = _a.data, userPlan = _a.userPlan, showLink = _a.showLink;
    var replaceClassName = useTheme().replaceClassName;
    return (<>
      {/* Plan [[ Find at scss/framework/plan.scss ]] */}
      <div className='plan bg-light'>
        <PlanCard register={userPlan} showLink={showLink}/>
        <div className='plan__data'>
          {data.map(function (plan) { return (<div className='card plan__col' key={plan.id}>
              <div className='card-body fw-medium'>
                <div className='d-flex align-items-center text-dark mb-4'>
                  {IconEl(plan.icon, 32)}
                  <i className='ri-music-2-line fs-3'></i>
                  <h3 className={replaceClassName('h4 mb-0 ps-3')} dangerouslySetInnerHTML={{ __html: plan.title }}/>
                </div>
                <p className='fs-6 opacity-50'>What you'll get</p>
                {plan.features.map(function (feature) { return (<div className='d-flex mb-3' key={feature.id}>
                    <RiCheckboxCircleFill className='text-primary opacity-75' size={16}/>
                    <span className={replaceClassName('ps-2')}>
                      {feature.title}
                    </span>
                  </div>); })}
              </div>
              <div className='card-footer pb-4 pb-sm-0'>
                <div className='text-dark mb-3'>
                  <span className='fs-4 fw-bold'>R{plan.price}</span>/year
                </div>
                <button type='button' className='btn btn-primary w-100'>
                  Choose
                </button>
              </div>
            </div>); })}
        </div>
      </div>
    </>);
};
Pricing.propTypes = propTypes;
Pricing.displayName = 'Pricing';
export default Pricing;
