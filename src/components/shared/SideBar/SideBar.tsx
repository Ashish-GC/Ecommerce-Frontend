import SidebarModal from "./SidebarModal";
import classes from "./SideBar.module.css";
import { useDispatch } from "react-redux";
import { sidebarActions } from "@/store/sidebarSlice";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { categories } from "@/constants/categories";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function SideBar() {
  const [subCategory, setSubCategory] = useState("");

  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(sidebarActions.closeSidebar());
  };
  const openModalHandler = () => {
    dispatch(sidebarActions.openSidebar());
  };

  const subCategoryHandler = (categoryName: string) => {
    if (subCategory !== categoryName) {
      setSubCategory(categoryName);
    } else {
      setSubCategory("");
    }
  };

  return (
    <>
      <svg
        onClick={openModalHandler}
        viewBox="0 0 32 32"
        className="w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7"
        fill="currentColor"
      >
        <path d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z"></path>
      </svg>
      <SidebarModal className={classes.sidebarModal}>
        <div className={classes.sidebarContent}>
          <div className={classes.user}>
            <Link to="/my-account/login" onClick={closeModalHandler}>
              <FaRegUserCircle size={20} />
              <div className={classes.userProfile}>Sign In</div>
            </Link>
          </div>

          <div className={classes.categories}>
            {categories.map((category: any) => {
              const categoryUrl = category.categoryName.replace(/\s+/g, "-");
              return (
                <div
                 key={category.categoryName}
                  className={`${
                    category.categoryName === subCategory
                      ? classes.categoryColor
                      : classes.categoryContainer
                  }`}
                >
                  <div className={`${classes.category} `}>
                    <NavLink
                      className={({ isActive }): string =>
                        `${isActive && "text-red-500"} `
                      }
                      to={`/product-category/${categoryUrl}`}
                      onClick={() => {
                        closeModalHandler();
                        subCategoryHandler(category.categoryName);
                      }}
                    >
                      {category.categoryName}
                    </NavLink>
                    <AiOutlinePlus
                     className="cursor-pointer"
                      size={17}
                      onClick={() => subCategoryHandler(category.categoryName)}
                    ></AiOutlinePlus>
                  </div>
                  {subCategory === category.categoryName && (
                    <ul className={classes.subCategory}>
                      {category.subCategories.map((subCategory: any,index) => {
                        const categoryUrl = category.categoryName.replace(
                          /\s+/g,
                          "-"
                        );
                        const subCategoryUrl =
                          subCategory.subCategoryName.replace(/\s+/g, "-");
                        return (
                          <li key={index}>
                            <NavLink
                              className={({ isActive }): string =>
                                `${isActive && "text-red-500"} `
                              }
                              onClick={closeModalHandler}
                              to={`/product-category/${categoryUrl}/${subCategoryUrl}`}
                            >
                              {subCategory.subCategoryName}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          <IoCloseSharp
            size={35}
            className={classes.closeButton}
            onClick={closeModalHandler}
          >
            Close
          </IoCloseSharp>
        </div>
      </SidebarModal>
    </>
  );
}

export default SideBar;
