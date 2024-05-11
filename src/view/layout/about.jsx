/**
 * @name About
 * @file about.tsx
 * @description about page component
 */
"use client";
// Modules
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiFacebookCircleLine, RiFileList3Line, RiHeadphoneLine, RiInstagramLine, RiTwitterXLine, RiVipCrownLine } from '@remixicon/react';
// Contexts
import { useTheme } from '@/core/contexts/theme';
var About = function () {
    var replaceClassName = useTheme().replaceClassName;
    return (<>
            {/* Main section [[ Find at scss/framework/section.scss ]] */}
			<div className='main-section pb-0'>
				<div className='container'>
					<div className='col-xl-9 col-lg-10'>
						<h1 className='mb-0'>Music doesn't lie. If there is something to be <span className='text-primary'>changed in this world</span>, then it can only happen through music.</h1>
					</div>
				</div>
			</div>

			{/* Main section [[ Find at scss/framework/section.scss ]] */}
			<div className='main-section'>
				<div className='container'>
					<div className='row g-5'>
						<div className='col-lg-5'>
							<Image src='/images/background/about.jpg' width={960} height={1024} className='img-fluid' alt='About image'/>
						</div>
						<div className='col-lg-7 fs-5'>
							<div className={replaceClassName('pe-5')}>
								<h2 className='my-4'><span className='text-primary'>Our</span> Story</h2>
								<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
							</div>
							<div className='ratio ratio-16x9 mt-5'>
								<iframe src='https://www.youtube.com/embed/7e90gBu4pas' title='Working at Envato' allow='accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture'></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main section [[ Find at scss/framework/section.scss ]] */}
			<div className='main-section bg-light'>
				<div className='container text-center'>
					<h2 className='mb-5'>How it <span className='text-primary'>works?</span></h2>
					<div className='row g-5 fs-6'>
						<div className='col-lg-4 col-sm-6'>
							<div className='px-xl-3'>
								<RiFileList3Line size={32} style={{ color: 'var(--bs-pink)' }}/>
								<h3 className='h4 mt-4'>1. Register your email</h3>
								<p>Quaerat facilis fuga accusantium ut velit ab ex quibusdam sint quos totam eaque officia molestiae id porro neque incidunt!</p>
							</div>
						</div>
						<div className='col-lg-4 col-sm-6'>
							<div className='px-xl-3'>
								<RiVipCrownLine size={32} style={{ color: 'var(--bs-purple)' }}/>
								<h3 className='h4 mt-4'>2. Select your plan</h3>
								<p>Tempora nihil nam vero quaerat facilis aliquid unde quidem expedita, maiores in, reprehenderit nostrum doloremque praesentium voluptate!</p>
							</div>
						</div>
						<div className='col-lg-4 col-sm-6'>
							<div className='px-xl-3'>
								<RiHeadphoneLine size={32} style={{ color: 'var(--bs-indigo)' }}/>
								<h3 className='h4 mt-4'>3. Access unlimited music</h3>
								<p>Aliquam, delectus porro minima nisi voluptatibus provident incidunt earum laudantium voluptates nesciunt ipsum.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main section [[ Find at scss/framework/section.scss ]] */}
			<div className='main-section'>
				<div className='container'>
					<div className='col-xl-6 col-lg-8 mx-auto text-center fs-5 mb-5'>
						<h2>Awesome <span className='text-primary'>Team</span></h2>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus sit aliquid molestiae sint ab illo.</p>
					</div>
					<div className='row g-5 justify-content-center'>

						<div className='col-xl-2 col-lg-3 col-sm-4 col-6'>
							{/* Avatar [[ Find at scss/components/avatar.scss ]] */}
							<div className='avatar avatar--xxl d-block text-center'>
								<div className='avatar__image mx-auto'>
									<Image src='/images/users/thumb.jpg' width={128} height={128} alt='Arebica Luna'/>
								</div>
								<div className='h5 mt-3'>Olive Yew</div>
								<p>Founder</p>
								<ul className='social justify-content-center'>
									<li>
										<Link href='#' aria-label='Facebook' target='_blank'>
											<RiFacebookCircleLine size={20}/>
										</Link>
									</li>
									<li>
										<Link href='#' aria-label='X' target='_blank'>
											<RiTwitterXLine size={20}/>
										</Link>
									</li>
									<li>
										<Link href='#' aria-label='Instagram' target='_blank'>
											<RiInstagramLine size={20}/>
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className='col-xl-2 col-lg-3 col-sm-4 col-6'>
							{/* Avatar [[ Find at scss/components/avatar.scss ]] */}
							<div className='avatar avatar--xxl d-block text-center'>
								<div className='avatar__image mx-auto'>
									<Image src='/images/users/thumb-2.jpg' width={128} height={128} alt='Aida Bugg'/>
								</div>
								<div className='h5 mt-3'>Aida Bugg</div>
								<p>Co-founder</p>
								<ul className='social justify-content-center'>
									<li>
										<Link href='#' aria-label='Facebook' target='_blank'>
											<RiFacebookCircleLine size={20}/>
										</Link>
									</li>
									<li>
										<Link href='#' aria-label='X' target='_blank'>
											<RiTwitterXLine size={20}/>
										</Link>
									</li>
									<li>
										<Link href='#' aria-label='Instagram' target='_blank'>
											<RiInstagramLine size={20}/>
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className='col-xl-2 col-lg-3 col-sm-4 col-6'>
							{/* Avatar [[ Find at scss/components/avatar.scss ]] */}
							<div className='avatar avatar--xxl d-block text-center'>
								<div className='avatar__image mx-auto'>
									<Image src='/images/users/thumb-3.jpg' width={128} height={128} alt='Teri Dactyl'/>
								</div>
								<div className='h5 mt-3'>Teri Dactyl</div>
								<p>Account manager</p>
								<ul className='social justify-content-center'>
									<li>
										<Link href='#' aria-label='Facebook' target='_blank'>
											<RiFacebookCircleLine size={20}/>
										</Link>
									</li>
									<li>
										<Link href='#' aria-label='X' target='_blank'>
											<RiTwitterXLine size={20}/>
										</Link>
									</li>
									<li>
										<Link href='#' aria-label='Instagram' target='_blank'>
											<RiInstagramLine size={20}/>
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className='col-xl-2 col-lg-3 col-sm-4 col-6'>
							{/* Avatar [[ Find at scss/components/avatar.scss ]] */}
							<div className='avatar avatar--xxl d-block text-center'>
								<div className='avatar__image mx-auto'>
									<Image src='/images/users/thumb-4.jpg' width={128} height={128} alt='Peg Legge'/>
								</div>
								<div className='h5 mt-3'>Peg Legge</div>
								<p>Team leader</p>
								<ul className='social justify-content-center'>
									<li>
										<Link href='#' aria-label='Facebook' target='_blank'>
											<RiFacebookCircleLine size={20}/>
										</Link>
									</li>
									<li>
										<Link href='#' aria-label='X' target='_blank'>
											<RiTwitterXLine size={20}/>
										</Link>
									</li>
									<li>
										<Link href='#' aria-label='Instagram' target='_blank'>
											<RiInstagramLine size={20}/>
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className='col-xl-2 col-lg-3 col-sm-4 col-6'>
							{/* Avatar [[ Find at scss/components/avatar.scss ]] */}
							<div className='avatar avatar--xxl d-block text-center'>
								<div className='avatar__image mx-auto'>
									<Image src='/images/users/thumb-5.jpg' width={128} height={128} alt='Allie Grater'/>
								</div>
								<div className='h5 mt-3'>Allie Grater</div>
								<p>Business manager</p>
								<ul className='social justify-content-center'>
									<li>
										<Link href='#' aria-label='Facebook' target='_blank'>
											<RiFacebookCircleLine size={20}/>
										</Link>
									</li>
									<li>
										<Link href='#' aria-label='X' target='_blank'>
											<RiTwitterXLine size={20}/>
										</Link>
									</li>
									<li>
										<Link href='#' aria-label='Instagram' target='_blank'>
											<RiInstagramLine size={20}/>
										</Link>
									</li>
								</ul>
							</div>
						</div>

					</div>
				</div>
			</div>
		</>);
};
About.displayName = 'About';
export default About;
