import "@/styles/globals.css";
import { Layout } from "../components";
import { useNavigate } from "react-router-dom"

export default function App({ Component, pageProps }) {
  
  // navigate('/home');
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
