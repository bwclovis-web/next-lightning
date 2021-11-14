import  '../styles/GlobalStyles.scss'
import   '../styles/Reset.scss'
import  '../styles/StyledContainer.scss'
import '../styles/Typography.scss'
import '../styles/DefaultGridStyles.scss'

function MyApp({ Component, pageProps }) {
  return (
      <main>
          <Component {...pageProps} />
      </main>
  )
}

export default MyApp
