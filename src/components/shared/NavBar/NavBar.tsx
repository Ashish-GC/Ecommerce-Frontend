import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navContent}>
        <li className="flex-[35%] flex gap-2 ">
          <svg
            viewBox="0 0 32 32"
            className="w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7"
            fill="currentColor"
          >
            <path d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z"></path>
          </svg>
          
            <svg
              fill="currentColor"
              viewBox="0 0 80 80"
              className="w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7"
            >
              <path d="M74.3,72.2L58.7,56.5C69.9,44,69,24.8,56.5,13.5s-31.7-10.3-43,2.2s-10.3,31.7,2.2,43c11.6,10.5,29.3,10.5,40.9,0 l15.7,15.7L74.3,72.2z M36.1,63.5c-15.1,0-27.4-12.3-27.4-27.4C8.7,20.9,21,8.7,36.1,8.7c15.1,0,27.4,12.3,27.4,27.4 C63.5,51.2,51.2,63.5,36.1,63.5z"></path>
              <path d="M36.1,12.8v3c11.2,0,20.3,9.1,20.3,20.3h3C59.4,23.2,49,12.8,36.1,12.8z"></path>
            </svg>
        
        </li>
        <li className="flex-[30%] flex justify-center ">
        <Link to="/">
          <img
            className="max-h-[40px] w-auto"
            src="//showict.com/wp-content/uploads/2024/05/showict3.png"
            alt="Showict"
            srcSet="//showict.com/wp-content/uploads/2024/05/showict3.png 1x, //showict.com/wp-content/uploads/2024/05/showict3.png 2x"
          />
         </Link>
        </li>
        <li className="flex-[35%] flex justify-end ">
          <svg
            className="nasa-icon cart-icon nasa-icon-1 w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path d="M3.205 3.205v25.59h25.59v-25.59h-25.59zM27.729 27.729h-23.457v-23.457h23.457v23.457z"></path>
            <path d="M9.068 13.334c0 3.828 3.104 6.931 6.931 6.931s6.93-3.102 6.93-6.931v-3.732h1.067v-1.066h-3.199v1.066h1.065v3.732c0 3.234-2.631 5.864-5.864 5.864-3.234 0-5.865-2.631-5.865-5.864v-3.732h1.067v-1.066h-3.199v1.066h1.065v3.732z"></path>
          </svg>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
