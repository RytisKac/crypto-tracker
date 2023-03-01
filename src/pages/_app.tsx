import Layout from '@/components/Layout/Layout';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import { useEffect } from 'react';


export default function App({ Component, pageProps, router }: AppProps) {
	useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();

		router.events.on("routeChangeStart", handleRouteStart);
		router.events.on("routeChangeComplete", handleRouteDone);
		router.events.on("routeChangeError", handleRouteDone);

		return () => {
			router.events.off("routeChangeStart", handleRouteStart);
			router.events.off("routeChangeComplete", handleRouteDone);
			router.events.off("routeChangeError", handleRouteDone);
		};
	}, [router.events]);

	return (
		<Layout>
			<div>
				<Component {...pageProps} />
			</div>
		</Layout>
	);
}
