// pages/_app.js
import '../styles/globals.css'; // Global styles
import '../styles/layout.css';   // Layout styles

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
