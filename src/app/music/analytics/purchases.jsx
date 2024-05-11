/**
 * @name Purchases
 * @file purchases.tsx
 * @description purchases analytics component
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
import React from 'react';
import { Chart as ChartJS, CategoryScale, LineElement, LinearScale, PointElement, Tooltip, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { RiCurrencyFill } from '@remixicon/react';
// Contexts
import { useTheme } from '@/core/contexts/theme';
// Hooks
import useCSSVar from '@/core/hooks/useCSSVar';
// Utilities
import { CHART_TOOLTIP } from '@/core/constants/constant';
ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Tooltip);
var Purchases = function () {
    var _a = useTheme(), rtl = _a.rtl, replaceClassName = _a.replaceClassName;
    var data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
                label: 'Users',
                data: [65, 59, 42, 73, 56, 55, 40],
                backgroundColor: '#000000',
                borderColor: '#000000',
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: 'rgba(' + useCSSVar('black-rgb') + ', 0)',
                pointBorderColor: 'rgba(' + useCSSVar('black-rgb') + ', 0)',
                pointHoverBackgroundColor: '#000000',
                pointHoverBorderColor: 'rgba(' + useCSSVar('black-rgb') + ', 0.1)'
            }]
    };
    var options = {
        responsive: true,
        maintainAspectRatio: false,
        font: {
            family: useCSSVar('body-font-family'),
            size: 13
        },
        hover: {
            intersect: false,
            mode: 'index'
        },
        elements: {
            line: { tension: 0.4 }
        },
        scales: {
            x: { display: false },
            y: {
                display: false,
                min: 0,
                max: 85
            }
        },
        layout: {
            padding: 0
        },
        interaction: {
            mode: 'index'
        },
        plugins: {
            legend: { display: false },
            tooltip: __assign(__assign({}, CHART_TOOLTIP), { rtl: rtl })
        }
    };
    return (<div className='card h-100 bg-warning'>
            <div className='card-body'>
                <h5 className='text-black'>Purchases</h5>
                <div className='d-flex align-items-center text-black'>
                    <RiCurrencyFill size={20}/>
                    <p className={replaceClassName('fw-medium ps-2')}>11,012,547</p>
                </div>
            </div>
            <div style={{ height: 160 }}>
                <Line options={options} data={data}/>
            </div>
        </div>);
};
Purchases.displayName = 'Purchases';
export default Purchases;
