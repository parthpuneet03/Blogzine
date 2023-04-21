import '@/styles/globals.css'
import { AuthProvider} from '@/context/auth-context';


export default function App({ Component, pageProps }) {
  return (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
  )
}
