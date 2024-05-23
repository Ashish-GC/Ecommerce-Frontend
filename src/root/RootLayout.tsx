
import { Outlet } from 'react-router-dom';
import classes from "./RootLayout.module.css"
import NavBar from '../components/shared/NavBar/NavBar';

function RootLayout() {
  return (
    <div className={classes.main}>
     <section className={classes.nav}>
          <NavBar/>
     </section>
      <section className={classes.content}>
        <Outlet/>
      </section>
      <section className={classes.timer}>
      <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 3.205c-7.066 0-12.795 5.729-12.795 12.795s5.729 12.795 12.795 12.795 12.795-5.729 12.795-12.795c0-7.066-5.729-12.795-12.795-12.795zM16 27.729c-6.467 0-11.729-5.261-11.729-11.729s5.261-11.729 11.729-11.729 11.729 5.261 11.729 11.729c0 6.467-5.261 11.729-11.729 11.729z"></path>
            <path d="M16 17.066h-6.398v1.066h7.464v-10.619h-1.066z"></path>
        </svg>
      </section>
    </div>
  )
}

export default RootLayout
