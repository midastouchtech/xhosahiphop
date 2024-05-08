
// Modules
import Link from 'next/link'
import { RiHome4Line } from '@remixicon/react'

// Components
import LoginForm from './form'


export default async function LoginPage() {
	
	return (
		<>
            <div 
                className='d-flex align-items-center justify-content-between mb-2'
            >
                <h4 className='mb-0'>
                    Login to <span className='text-primary'>Listen</span>
                </h4>
                <Link href='/' className='back-home'>
					<RiHome4Line />
                </Link>
            </div>
            <p className='fs-6'>
                Welcome back! login with your data that you entered during registration
            </p>
            <LoginForm />
		</>
	)
}
