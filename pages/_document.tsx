import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <script src="/env.js" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
