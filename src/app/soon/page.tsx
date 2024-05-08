// Modules
import Link from 'next/link';

export default async function FourOFourPage() {
  return (
    <div className='d-flex align-items-center justify-content-center min-vh-100'>
      <div className='container text-center fs-5'>
        <div className='row'>
          <div className='col-xl-7 col-lg-9 col-lg-10 mx-auto'>
            <h1 className='display-1 fw-bold'>
              COMING <span className='text-primary'>SOON</span>!!!
            </h1>
            <h3>Get Ready to Elevate Your Xhosa HipHop Experience</h3>
            <p>
              Brace yourself, Xhosa HipHop lovers! The ultimate platform
              dedicated to celebrating and amplifying the vibrant world of Xhosa
              rap music is on its way.
            </p>
            <Link
              href='/'
              className='btn btn-lg btn-primary rounded-pill mt-5 text-light'
              style={{ minWidth: 200 }}
            >
              Go To Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
