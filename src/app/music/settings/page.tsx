
export default async function PlanPage() {	
	
	return (
		<>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/event.jpg)'}}
            />
            
            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
				{/* Section [[ Find at scss/framework/section.scss ]] */}
				<div className='section'>
					<div className='col-xl-8 col-md-11 mx-auto'>
						<div className='card'>
                            <div className='card-header'>
                                <h4 className='mb-0'>Settings</h4>
                            </div>
                            <div className='card-body pb-5'>
                                <h5 className='mb-3'>Notification</h5>
                                <div className='d-flex align-items-center justify-content-between mb-2'>
                                    <label htmlFor='email'>
										Get email notifications
									</label>
                                    <div className='switch'>
                                        <input type='checkbox' id='email' />
                                        <label htmlFor='email'></label>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <label htmlFor='message'>
										Get message notifications
									</label>
                                    <div className='switch'>
                                        <input type='checkbox' id='message' />
                                        <label htmlFor='message'></label>
                                    </div>
                                </div>
                                <h5 className='mt-4 mb-3'>Music Quality</h5>
                                <div className='d-flex align-items-center justify-content-between mb-2'>
                                    <label htmlFor='stream'>Streaming quality</label>
                                    <select 
										name='stream' 
										id='stream' 
										className='form-select form-select-sm w-auto' 
										style={{minWidth: 120}}
									>
                                        <option value='Very High'>Very High</option>
                                        <option value='High'>High</option>
                                        <option value='Medium'>Medium</option>
                                        <option value='Low'>Low</option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mb-2'>
                                    <label htmlFor='level'>
										Adjust the volume level htmlFor your environment
									</label>
                                    <select 
										name='level' 
										id='level' 
										className='form-select form-select-sm w-auto' 
										style={{minWidth: 120}}
									>
                                        <option value='Quiet'>Quiet</option>
                                        <option value='Normal'>Normal</option>
                                        <option value='Loud'>Loud</option>
                                        <option value='Louder'>Louder</option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <label htmlFor='volume'>
										Same volume level htmlFor all songs
									</label>
                                    <div className='switch'>
                                        <input type='checkbox' id='volume' />
                                        <label htmlFor='volume'></label>
                                    </div>
                                </div>
                                <h5 className='mt-4 mb-3'>History</h5>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <label>Clear your music history</label>
                                    <button 
										type='button' 
										className='btn btn-sm btn-primary'
									>
										Clear Now
									</button>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</>
	)
}
