/**
 *
 * Root layout
 */
import 'swiper/scss';
import 'swiper/scss/a11y';
import 'swiper/scss/autoplay';
import 'swiper/scss/grid';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
// Global scss
import '../../public/scss/styles.scss';
// Context
import Authentication from '@/core/contexts/authentication';
import Theme from '@/core/contexts/theme';
import Player from '@/core/contexts/player';
// Components
import Bootstrap from '@/core/components/bootstrap';
import Snackbar from '@/core/components/snackbar';
import Settings from '@/core/components/settings';
// Utilities
import { ENABLE_SETTINGS } from '@/core/constants/constant';
// Template metadata
export var metadata = {
  title: 'XhosaHipHop - Online Music Streaming App',
  description: 'XhosaHipHop - Online Music Streaming App Template',
  keywords:
    'music template, music app, music web app, responsive music app, music, themeforest, nextjs music app template, react music app template, css3, react, nextjs',
};
export default function RootLayout(_a) {
  var children = _a.children;
  return (
    <html lang='en'>
      <head>
        {/* Favicon */}
        <link
          rel='icon'
          sizes='32x32'
          href='/images/logos/favicon.ico'
          type='image/x-icon'
        />

        {/* IOS Touch Icons */}
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/images/logos/apple-icon/touch-icon-iphone.png'
          type='image/png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/images/logos/apple-icon/touch-icon-ipad.png'
          type='image/png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/logos/apple-icon/touch-icon-iphone-retina.png'
          type='image/png'
        />
        <link
          rel='apple-touch-icon'
          sizes='167x167'
          href='/images/logos/apple-icon/touch-icon-ipad-retina.png'
          type='image/png'
        />

        {/* Google fonts */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </head>

      <body>
        <Authentication>
          <Theme>
            <Bootstrap />

            {/* Layout */}
            <Snackbar>
              <Player>{children}</Player>
            </Snackbar>
            {ENABLE_SETTINGS && <Settings />}
          </Theme>
        </Authentication>
      </body>
    </html>
  );
}
