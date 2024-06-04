import { IRootState } from "@/store";
import { searchBarActions } from "@/store/searchBarSlice";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

function SearchBarModal({
  children,
  className = "",
}: {
  children: ReactNode;
  className: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const showSearchBar = useSelector(
    (state: IRootState) => state.searchBar.showSearchBar
  );


  const modal = dialog.current;
  if (showSearchBar) {
    modal?.showModal();
  } else {
    modal?.close();
  }
  
  return createPortal(
   
    <dialog ref={dialog} className={className}>
      {children}
    </dialog>,
   
    document.getElementById("root")!
   
  );
}

export default SearchBarModal;
