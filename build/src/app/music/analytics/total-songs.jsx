/**
 * @name TotalSongs
 * @file total-songs.tsx
 * @description total songs analytics component
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
import { Chart as ChartJS, CategoryScale, BarElement, LinearScale, Tooltip, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { RiMusicFill } from '@remixicon/react';
// Contexts
import { useTheme } from '@/core/contexts/theme';
// Hooks
import useCSSVar from '@/core/hooks/useCSSVar';
// Utilities
import { CHART_TOOLTIP } from '@/core/constants/constant';
ChartJS.register(CategoryScale, BarElement, LinearScale, Tooltip);
var TotalSongs = function () {
    var _a = useTheme(), rtl = _a.rtl, replaceClassName = _a.replaceClassName;
    var data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
                label: 'Songs',
                data: [65, 59, 42, 73, 56, 55, 40],
                backgroundColor: useCSSVar('success'),
                hoverBackgroundColor: useCSSVar('success'),
                borderWidth: 0,
                borderColor: 'rgba(0,0,0, 0)',
                barThickness: 12,
                pointRadius: 0
            }]
    };
    var options = {
        responsive: true,
        maintainAspectRatio: false,
        font: {
            family: useCSSVar('body-font-family'),
            size: 13
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
    return (<div className='card h-100'>
            <div className='card-body'>
                <h5>Total Songs</h5>
                <div className='d-flex align-items-center text-dark'>
                    <RiMusicFill size={20}/>
                    <p className={replaceClassName('fw-medium ps-2')}>58,415</p>
                </div>
            </div>
            <div style={{ height: 160 }}>
                <Bar options={options} data={data}/>
            </div>
        </div>);
};
TotalSongs.displayName = 'TotalSongs';
export default TotalSongs;
