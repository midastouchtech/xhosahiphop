/**
 * @name Statistics
 * @file statistics.tsx
 * @description user statistics analytics component
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
import React, { useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, BarElement, LinearScale, Tooltip, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
// Contexts
import { useTheme } from '@/core/contexts/theme';
// Hooks
import useCSSVar from '@/core/hooks/useCSSVar';
// Utilities
import { isDark } from '@/core/utils';
import { CHART_TOOLTIP } from '@/core/constants/constant';
ChartJS.register(CategoryScale, BarElement, LinearScale, Tooltip);
var Statistics = function () {
    var _a = useTheme(), rtl = _a.rtl, theme = _a.theme;
    var bodyColor = useCSSVar('body-color');
    var data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
                label: 'Songs',
                data: [65, 59, 42, 73, 56, 55, 40],
                backgroundColor: useCSSVar('purple'),
                hoverBackgroundColor: useCSSVar('purple'),
                borderWidth: 0,
                borderColor: 'rgba(0,0,0, 0)',
                barThickness: 32,
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
    useEffect(function () {
        options.color = isDark(theme) ? '#92929F' : bodyColor;
        options.scales = {
            x: {
                border: {
                    color: isDark(theme) ? '#34343e' : '#EFF2F5'
                },
                grid: {
                    color: isDark(theme) ? '#34343e' : '#EFF2F5'
                }
            },
            y: {
                position: rtl ? 'right' : 'left',
                border: {
                    color: isDark(theme) ? '#34343e' : '#EFF2F5'
                },
                min: 0,
                max: 80,
                grid: {
                    color: isDark(theme) ? '#34343e' : '#EFF2F5'
                }
            }
        };
    }, [theme, rtl]);
    return (<div className='card h-100'>
            <div className='card-header'>
                <h5 className='mb-0'>User Statistics</h5>
            </div>
            <div className='card-body'>
                <div style={{ height: 300 }}>
                    <Bar key={theme + (rtl ? '-rtl' : '-ltr')} options={options} data={data}/>
                </div>
                <div className='text-center'>
                    <div className='fw-bold fs-6 mt-3 mb-2 text-dark'>Top Countries</div>
                    <div className='row'>
                        <div className='col-4 border-right'>
                            <div className='py-2 px-sm-3'>
                                <span className='d-block'>USA</span>
                                <p className='fw-bold'>1,243</p>
                            </div>
                        </div>
                        <div className='col-4 border-right'>
                            <div className='py-2 px-sm-3'>
                                <span className='d-block'>UK</span>
                                <p className='fw-bold'>643</p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='py-2 px-sm-3'>
                                <span className='d-block'>Canada</span>
                                <p className='fw-bold'>351</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>);
};
Statistics.displayName = 'Statistics';
export default Statistics;
