import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <script dangerouslySetInnerHTML={{
          __html: `
console.log('This script runs on the server side and is injected into the head of the document.');
window.API_ENDPOINT = "${process.env.API_ENDPOINT}";`
        }} />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
