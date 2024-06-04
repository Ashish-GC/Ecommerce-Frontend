import { IRootState } from '@/store';
import  { ReactNode, useRef } from 'react'
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

function WishlistModal({children,className=''}:{children:ReactNode , className:string}) {
    const dialog = useRef<HTMLDialogElement>(null);
    
    const showWishlist = useSelector((state:IRootState)=>state.wishlist.showWishlist)

       const modal = dialog.current;
       if( showWishlist ){
           modal?.showModal();
       }
       else{
         modal?.close();
       }
       return createPortal(
        <dialog ref={dialog} className={className}>
               {children}
        </dialog> , document.getElementById('root')!
      )
}

export default WishlistModal
