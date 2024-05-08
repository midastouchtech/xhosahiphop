
// Modules
import Link from 'next/link'


export default async function FourOFourPage() {
	
	return (
		<div className='d-flex align-items-center justify-content-center min-vh-100'>
			<div className='container text-center fs-5'>
				<div className='row'>
					<div className='col-xl-7 col-lg-9 col-lg-10 mx-auto'>
						<h1 className='display-1 fw-bold'>
							4<span className='text-primary'>0</span>4
						</h1>
						<p>Sorry! But the page you are looking for does not exist, have been removed. Name change or is temporarily unavailable</p>
						<Link 
							href='/' 
							className='btn btn-lg btn-primary rounded-pill mt-5' 
							style={{minWidth: 200}}
						>
							Go To Homepage
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
