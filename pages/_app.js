import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { init } from '@emailjs/browser';
import { Provider } from 'react-redux';
import store from '../redux/store';

// Initialize emailjs lib
init('user_BLQMNLMuIbHGtGh5Gktsy');

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
