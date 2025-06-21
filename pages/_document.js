import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Fakhridanish Mirza Priyoyuwono - Student Engineer & IoT Developer</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content="I'm a student at SMA Negeri 1 Waru with a passion for creating IoT-based solutions using data science, electrical engineering, and smart system development." />
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>
      <body className="antialiased overscroll-none">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
