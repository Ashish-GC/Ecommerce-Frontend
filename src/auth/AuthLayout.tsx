
import {  Outlet} from 'react-router-dom'
import classes from "./AuthLayout.module.css"


function AuthLayout() {

  return (
    <div className={classes.main}>   
      <Outlet/>
      <footer className={classes.footer}>
     <p className="text-center text-[0.65rem]  md:text-xs">We noticed you're visiting from India. We've updated our prices to Indian rupee for your shopping convenience. Use United States (US) dollar instead. Dismiss </p> 
      </footer>
    </div>
  )
}

export default AuthLayout
