import { useDispatch, useSelector } from 'react-redux'
import classes from './SearchBar.module.css'
import SearchBarModal from './SearchBarModal.tsx'
import { searchBarActions, searchBarSlice } from '@/store/searchBarSlice.ts';
import { IoCloseSharp } from 'react-icons/io5';
import { IRootState } from '@/store/index.ts';


function SearchBar() {
    const dispatch = useDispatch();

  const  openSearchBarHandler=()=>{
      dispatch(searchBarActions.openSearchBar())
  }
  const closeSearchBarHandler=()=>{
    dispatch(searchBarActions.hideSearchBar())  
  }


  return (
    <>
    <svg
    fill="currentColor"
    viewBox="0 0 80 80"
    className="w-6 h-5 md:w-7 md:h-6 lg:w-7 lg:h-6"
    onClick={openSearchBarHandler}
     >
    <path d="M74.3,72.2L58.7,56.5C69.9,44,69,24.8,56.5,13.5s-31.7-10.3-43,2.2s-10.3,31.7,2.2,43c11.6,10.5,29.3,10.5,40.9,0 l15.7,15.7L74.3,72.2z M36.1,63.5c-15.1,0-27.4-12.3-27.4-27.4C8.7,20.9,21,8.7,36.1,8.7c15.1,0,27.4,12.3,27.4,27.4 C63.5,51.2,51.2,63.5,36.1,63.5z"></path>
    <path d="M36.1,12.8v3c11.2,0,20.3,9.1,20.3,20.3h3C59.4,23.2,49,12.8,36.1,12.8z"></path>
  </svg>
  <SearchBarModal className={classes.modal}>
      <div className={classes.modalContent}>
            <div className={classes.searchBar}>
            <input type="text" name="search"   placeholder="I'm shopping for ..." data-suggestions="Sweater, Jacket, Shirt ..." data-placeholder="I'm shopping for ..." autoFocus={false}/>
                  <span className={classes.searchIcon} onClick={closeSearchBarHandler}>
                  <svg viewBox="0 0 80 80" width="26" height="26" fill="currentColor"><path d="M74.3,72.2L58.7,56.5C69.9,44,69,24.8,56.5,13.5s-31.7-10.3-43,2.2s-10.3,31.7,2.2,43c11.6,10.5,29.3,10.5,40.9,0 l15.7,15.7L74.3,72.2z M36.1,63.5c-15.1,0-27.4-12.3-27.4-27.4C8.7,20.9,21,8.7,36.1,8.7c15.1,0,27.4,12.3,27.4,27.4 C63.5,51.2,51.2,63.5,36.1,63.5z"></path><path d="M36.1,12.8v3c11.2,0,20.3,9.1,20.3,20.3h3C59.4,23.2,49,12.8,36.1,12.8z"></path></svg>
                  </span> 
                 
            </div>
            <div className={classes.recentSearches}>recent searches</div>
            <IoCloseSharp
            size={35}
            className={classes.closeButton}
            onClick={closeSearchBarHandler}
          >
            Close
          </IoCloseSharp>
      </div>
      
  </SearchBarModal>
  </>
  )
}

export default SearchBar
