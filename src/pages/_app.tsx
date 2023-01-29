import Header from '@/components/Header/Header';
import Layout from '@/components/Layout/Layout';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<div>
				<Header />
				<Component {...pageProps} />
			</div>
		</Layout>
	);
}
