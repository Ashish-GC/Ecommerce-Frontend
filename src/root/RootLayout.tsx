
import { Outlet } from 'react-router-dom';
import classes from "./RootLayout.module.css"
import NavBar from '../components/shared/NavBar/NavBar';
import RecentlyViewed from '@/components/shared/recentlyViewed/RecentlyViewed';

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
      <RecentlyViewed/>
      </section>
    </div>
  )
}

export default RootLayout
