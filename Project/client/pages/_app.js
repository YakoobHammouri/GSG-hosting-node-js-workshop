import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/globals.css';

import theme from '../src/theme';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css/swiper.min.css';

import Head from 'next/head';
import 'nprogress/nprogress.css';
import { Router } from 'next/router';
import NProgress from 'nprogress';

// const Sidebar = dynamic(() => import('../src/components/Sidebar'));

export default function App({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false, easing: 'ease', speed: 800 });
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const open = isMd ? false : openSidebar;

  useEffect(() => {
    //Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles !== null) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      offset: 60, // offset (in px) from the original trigger point
      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <link rel="shortcut icon" href="favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

        {/* Android */}
        <meta name="theme-color" content="#1780C0" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* iOS*/}
        <meta name="apple-mobile-web-app-title" content="Hosting Node js" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* Windows */}
        <meta name="msapplication-navbutton-color" content="#1780C0" />
        <meta name="msapplication-TileColor" content="#000" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="browserconfig.xml" />
        {/* Pinned Sites */}
        <meta name="application-name" content="Hosting Node js" />
        <meta name="msapplication-tooltip" content="Hosting Node js" />
        <meta name="msapplication-starturl" content="/" />
        {/* Tap highlighting */}
        <meta name="msapplication-tap-highlight" content="no" />
        {/* UC Mobile Browser */}
        <meta name="full-screen" content="yes" />
        <meta name="browsermode" content="application" />
        {/* Disable night mode for this page */}
        <meta name="nightmode" content="enable/disable" />
        {/* Fitscreen */}
        {/* <meta name="viewport" content="uc-fitscreen=yes" /> */}
        {/* Layout mode*/}
        <meta name="layoutmode" content="fitscreen/standard" />
        {/* imagemode - show image even in text only mode */}
        <meta name="imagemode" content="force" />
        {/* Orientation */}
        <meta name="screen-orientation" content="portrait" />
        <meta name="msapplication-TileColor" content="#000" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="eu" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hosting Node js" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
          rel="stylesheet"
        />
        <title>Hosting Node js | TO Do</title>
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* <Sidebar
          onClose={handleSidebarClose}
          open={open}
          NavItem={navItem}
          SystemConstants={systemConstants}
        /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
