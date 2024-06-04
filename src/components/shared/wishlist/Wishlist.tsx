import { useDispatch } from "react-redux";
import classes from "./Wishlist.module.css";
import WishlistModal from "./WishlistModal";
import { wishlistActions } from "@/store/wishlistSlice";

function Wishlist() {
    const dispatch = useDispatch();

    const closeModalHandler=()=>{
        dispatch(wishlistActions.hideWishlist())
    }
    const openModalHandler=()=>{
     dispatch(wishlistActions.openWishlist());
    }
    
  return (
    <>
      <svg
        className="nasa-icon cart-icon nasa-icon-1 w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7"
        viewBox="0 0 32 32"
        fill="currentColor"
        onClick={openModalHandler}
      >
        <path d="M3.205 3.205v25.59h25.59v-25.59h-25.59zM27.729 27.729h-23.457v-23.457h23.457v23.457z"></path>
        <path d="M9.068 13.334c0 3.828 3.104 6.931 6.931 6.931s6.93-3.102 6.93-6.931v-3.732h1.067v-1.066h-3.199v1.066h1.065v3.732c0 3.234-2.631 5.864-5.864 5.864-3.234 0-5.865-2.631-5.865-5.864v-3.732h1.067v-1.066h-3.199v1.066h1.065v3.732z"></path>
      </svg>
      <WishlistModal className={classes.modal}>
        <div>wishlisthere</div>
        <button onClick={closeModalHandler}>close</button>
      </WishlistModal>
    </>
  );
}

export default Wishlist;
