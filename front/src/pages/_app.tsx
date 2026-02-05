import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head'
import { useRouter } from "next/router";
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
    const { basePath } = useRouter()
    return <>
        <Head>
            <meta name="description" content="自動化技術を活用したソリューションを開発・提供する技術系企業サイトです。" />
            <meta name="keywords" content="スタートアップ, システム開発, 自動化, クラウド, 技術顧問, フルスタック, AWS, FastAPI, Next.js, Go, テクシズ" />
            <meta name="theme-color" content="#ffffff" />
            <meta property="og:title" content="株式会社テクシズ" />
            <meta property="og:description" content="自動化技術を活用したソリューションを開発・提供する技術系企業サイトです。" />
            <meta property="og:url" content="https://tecsiz.co.jp" />
            <meta property="og:type" content="website" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href={`${basePath}/favicon.ico`} />
        </Head>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-J99R1TMD8Z"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-J99R1TMD8Z');
            `}
        </Script>
        <Component {...pageProps} />
    </>;
}
