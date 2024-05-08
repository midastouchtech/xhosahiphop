
// Modules
import Link from 'next/link'
import { RiHome4Line } from '@remixicon/react'

// Components
import RegisterForm from './form'


export default async function RegisterPage() {
	
	return (
		<>
			<div 
                className='d-flex align-items-center justify-content-between mb-2'
            >
                <h4 className='mb-0'>
                    Register with <span className='text-primary'>Listen</span>
                </h4>
                <Link href='/' className='back-home'>
					<RiHome4Line />
                </Link>
            </div>
            <p className='fs-6'>
                It's time to join with Listen and gain full awesome music experience.
            </p>
            <RegisterForm />
		</>
	)
}
