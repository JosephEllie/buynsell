import RootLayout from '@/components/RootLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { store } from '@/store/ConfigureStore';
import { Provider } from "react-redux"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className='font-bodyFont bg-gray-300 '>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </div>
    </Provider>
  )
}
