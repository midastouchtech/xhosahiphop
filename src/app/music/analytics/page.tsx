
// Modules
import { RiSettingsFill } from '@remixicon/react'

// Components
import TotalUsers from './total-users'
import TotalSongs from './total-songs'
import Purchases from './purchases'
import Statistics from './statistics'


export default async function AnalyticsPage() {

    /**
     * 
     * Progress bar view
     * @param label 
     * @param progress 
     * @param color 
     * @returns 
     */
    const progressBar = (label:string, progress: number, color: string) => {
        return (
            <div className='progress' style={{height: '0.25rem'}}>
                <div
                    role='progressbar'
                    className={'progress-bar bg-' + color}
                    style={{width: progress + '%'}}
                    aria-label={label}
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                />
            </div>
        )
    }
	

	return (
        <>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/analytics.jpg)'}}
            />
            
            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
                {/* Section [[ Find at scss/framework/section.scss ]] */}
                <div className='section'>
                    <div className='mb-5 fs-6'>
                        <h3>Hi <span className='text-primary'>Admin</span>, Welcome to the Listen App</h3>
                        <p>Select your music to listen & download free and premium music.</p>
                    </div>
                    <div className='row g-4'>
                        <div className='col-xl-5'>
                            <div className='card bg-primary text-white'>
                                <div className='card-body fs-6'>
                                    <div 
                                        className='d-flex align-items-center justify-content-between mb-2'
                                    >
                                        <h4 className='text-white mb-0'>
                                            Total Earnings
                                        </h4>
                                        <button 
                                            type='button' 
                                            className='btn btn-icon text-white' 
                                            aria-label='Settings'
                                        >
                                            <RiSettingsFill />
                                        </button>
                                    </div>
                                    <p>Voluptatem ut, facilis ipsum, nostrum quia officia dolor mollitia temporibus hic aspernatur laborum.</p>
                                    <span className='display-4 d-block mb-3'>$126,457</span> 
                                    <button 
                                        type='button' 
                                        className='btn btn-warning rounded-pill'
                                    >
                                        Get Details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-7'>
                            <div className='row h-100'>
                                <div className='col-sm-4'>
                                    <TotalUsers />
                                </div>
                                <div className='col-sm-4 mt-4 mt-sm-0'>
                                    <TotalSongs />
                                </div>
                                <div className='col-sm-4 mt-4 mt-sm-0'>
                                    <Purchases />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <Statistics />
                        </div>
                        <div className='col-md-4'>
                            <div className='card h-100'>
                                <div className='card-header'>
                                    <h5 className='mb-0'>Referrals</h5>
                                </div>
                                <div className='card-body'>
                                    <ul className='list-group list-group-flush'>
                                        <li className='list-group-item border-0 px-0 py-3'>
                                            <p className='fs-4 mb-1 fw-semibold'>3421</p>
                                            <p className='mb-2 fw-medium'>Visits from Facebook</p>
                                            {progressBar('Facebook visits', 80, 'primary')}
                                        </li>
                                        <li className='list-group-item border-0 px-0 py-3'>
                                            <p className='fs-4 mb-1 fw-semibold'>2401</p>
                                            <p className='mb-2 fw-medium'>Visits from Instagram</p>
                                            {progressBar('Instagram visits', 67, 'danger')}
                                        </li>
                                        <li className='list-group-item border-0 px-0 py-3'>
                                            <p className='fs-4 mb-1 fw-semibold'>975</p>
                                            <p className='mb-2 fw-medium'>Visits from X</p>
                                            {progressBar('X visits', 31, 'info')}
                                        </li>
                                        <li className='list-group-item border-0 px-0 py-3'>
                                            <p className='fs-4 mb-1 fw-semibold'>1672</p>
                                            <p className='mb-2 fw-medium'>Visits from Affiliates</p>
                                            {progressBar('Affiliates visits', 52, 'success')}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
    )
}
