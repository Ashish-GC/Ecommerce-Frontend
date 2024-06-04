import { IRootState } from "@/store";
import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";


function SidebarModal({children,className=''}:{children:ReactNode , className:string}) {
    
    const dialog = useRef<HTMLDialogElement>(null);
    
     const showSidebar = useSelector((state:IRootState)=>state.sidebar.showSidebar)

        const modal = dialog.current;
        if(showSidebar){
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

export default SidebarModal ;
