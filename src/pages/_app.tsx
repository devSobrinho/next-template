import type { AppProps } from "next/app";
import { CssBaseline } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import store, { persistor } from "../shared/store";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <CssBaseline />
          <Component {...pageProps} />
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            theme="colored"
            pauseOnHover
          />
        </PersistGate>
      </Provider>
    </>
  )
}
