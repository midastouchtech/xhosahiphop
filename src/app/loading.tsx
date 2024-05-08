
export default async function Loading() {
	
	return (
		// loader [[ Find at scss/framework/loader.scss ]]
        <div id='loader'>
            <div className='loader'>
                <div className='loader__eq mx-auto'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span className='loader__text mt-2'>Loading</span>
            </div>
        </div>
	)
}
