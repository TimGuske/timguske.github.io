import Navigation from './Navigation'
import styles from '../styles/Layout.module.css'

export default function Layout({children}) {
  return (
    <>
        <Navigation />
        <div className={styles.main}>
           {children}
         </div>
    </>
  )
}
