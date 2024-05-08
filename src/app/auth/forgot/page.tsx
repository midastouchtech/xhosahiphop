
// Modules
import Link from 'next/link'
import { RiHome4Line } from '@remixicon/react'

// Components
import PasswordForm from './form'


export default async function ForgotPage() {
	
	return (
		<>
			<div className='d-flex align-items-center justify-content-between mb-2'>
                <h4 className='mb-0'>
                    Forgot <span className='text-primary'>Password</span>
                </h4>
                <Link href='/' className='back-home'>
					<RiHome4Line />
                </Link>
            </div>
            <p className='fs-6'>
                Type your registered email id below and get link to reset password.
            </p>
            <PasswordForm />
		</>
	)
}
