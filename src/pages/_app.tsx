import type { AppProps } from "next/app";
import Script from "next/script";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="theme-init" strategy="beforeInteractive">
        {`
          (function () {
            try {
              var stored = localStorage.getItem("theme");
              var prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
              var theme = stored || (prefersLight ? "light" : "dark");
              document.documentElement.dataset.theme = theme;
              document.documentElement.style.colorScheme = theme;
            } catch (e) {
              document.documentElement.dataset.theme = "dark";
              document.documentElement.style.colorScheme = "dark";
            }
          })();
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
