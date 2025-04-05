import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
        <Head>
            <meta charSet="utf-8" />
            <meta name="description" content="自動化技術を活用したソリューションを開発・提供する技術系企業サイトです。" />
            <meta name="keywords" content="スタートアップ, システム開発, 自動化, クラウド, 技術顧問, フルスタック, AWS, FastAPI, Next.js, Go, テクシズ" />
            <meta name="theme-color" content="#ffffff" />
            <meta property="og:title" content="株式会社テクシズ" />
            <meta property="og:description" content="自動化技術を活用したソリューションを開発・提供する技術系企業サイトです。" />
            <meta property="og:url" content="https://tecsiz.co.jp" />
            <meta property="og:type" content="website" />
        </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
