import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>Chat Cast - Secure Chating and File Sharing Platform</title>
      <link rel="icon" href={"../../../assets/images/brand/favicon.ico"} />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" />
      <link
        href="https://nextjs.spruko.com/sash/preview/assets/plugins/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrapLink"
      />
      <meta
        name="description"
        content="Chat Cast offers secure and private chatting alongside seamless file sharing of PDFs, images, and videos. Connect with confidence!"
      ></meta>
      <link rel="author" href="https://yuvrajgupta.in"></link>
      <meta name="author" content="Yuvraj Gupta"></meta>
      <link
        rel="manifest"
        href="/manifest.json"
        crossorigin="use-credentials"
      ></link>
      <meta
        name="keywords"
        content="secure chat,file sharing,private messaging,chat app,file sharing app"
      ></meta>
      <meta name="creator" content="Yuvraj Gupta"></meta>
      <meta
        name="publisher"
        content="My personal practice project yuvrajgupta.in"
      ></meta>
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
