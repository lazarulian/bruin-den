import "@/styles/globals.css";
import { Layout } from "../components";

export default function App({ Component, pageProps }) {

  // navigate('/home');
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
