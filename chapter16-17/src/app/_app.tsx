// pages/_app.tsx
import { AppProps } from 'next/app';
import { CartProvider } from '../../context/CartProvider';
import { ProductsProvider } from '../../context/ProductsProvider';
import RootLayout from './layout';
import '../styles/globals.css'; // Import global styles here

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <CartProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </CartProvider>
    </ProductsProvider>
  );
}

export default MyApp;
