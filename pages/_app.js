// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import RouteGuard from "../RouteGuard";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <RouteGuard>
            <Component {...pageProps} />;
          </RouteGuard>
          <ToastContainer />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
