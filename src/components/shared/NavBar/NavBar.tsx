import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import SideBar from "../SideBar/SideBar";
import SearchBar from "../searchBar/SearchBar";
import Wishlist from "../wishlist/Wishlist";

function NavBar() {


  return (
    <nav className={classes.nav}>
      <ul className={classes.navContent}>
        <li className="flex-[35%] flex gap-2 ">
           <SideBar/>
           <SearchBar/>
        </li>
        <li className="flex-[30%] flex justify-center ">
        <Link to="/">
          {/* <img
            className="max-h-[40px] w-auto"
            src="//showic.com/wp-content/uploads/2024/05/showict3.png"
            alt="Showict"
            srcSet="//showict.com/wp-content/uploads/2024/05/showict3.png 1x, //showict.com/wp-content/uploads/2024/05/showict3.png 2x"
          /> */}
          shopping
         </Link>
        </li>
        <li className="flex-[35%] flex justify-end ">
         <Wishlist></Wishlist>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
