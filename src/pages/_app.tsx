import { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
