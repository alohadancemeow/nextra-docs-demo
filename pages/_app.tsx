import type { AppProps } from "next/app";
import "../styles.css";
import { Niramit, Bai_Jamjuree } from "next/font/google";

const myFont = Niramit({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["thai"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${myFont.style.fontFamily};
          /* line-height: 1.75rem; */
          letter-spacing: 0.025em;
        }
        code {
          font-family: ${myFont.style.fontFamily};
          font-weight: 300;
          font-size: 14px;
      `}</style>
      <Component {...pageProps} />;
    </>
  );
}
