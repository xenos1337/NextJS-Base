import Head from "next/head";
import React from "react";
import "../public/css/globals.css";

function MyApp({ Component, pageProps }: any) {
	return (
		<>
			<Head>
				<title>Next.JS</title>
				{/* Add your headers here, they will be added/displayed on all pages */}
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
