import { IRootState } from '@/store';
import  { ReactNode, useRef } from 'react'
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

function RecentlyViewedModal({children,className=''}:{children:ReactNode , className:string}) {
 
    const dialog = useRef<HTMLDialogElement>(null);
    
    const showRecentlyViewed = useSelector((state:IRootState)=>state.recentlyViewed.showRecentlyViewed)

       const modal = dialog.current;
       if( showRecentlyViewed ){
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

export default RecentlyViewedModal
