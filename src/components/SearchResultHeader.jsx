import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  const [selectMenu, setSelectMenu] = useState("All");
  const { setImageSearch } = useContext(Context)

  useEffect(() => {
    return () => setImageSearch(false);
  },[])

  const clickHandler = (menuItem) => {
    let isTypeImage = menuItem.name === "Images";
    setSelectMenu(menuItem.name);
    setImageSearch(isTypeImage ? true : false);
  };

  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="hidden md:block w-[192px] mr-10"
              src={Logo}
            />
          </Link>
         
          <SearchInput from="searchResult" />
        </div>
        <div className="hidden md:block">
          <ProfileIcon />
        </div>
      </div>
      <div className="flex ml-[-12px] mt-3">
        {menu.map((menuItem, index) => (
          <span
            key={index}
            className={`flex items-center p-3 text-[#5f6368] cursor-pointer relative ${
              selectMenu === menuItem.name ? "text-[#1a73e8]" : ""
            }`}
            onClick={() => clickHandler(menuItem)}
          >
            <span className="hidden md:block mr-2">
              {/* Use menuItem.icon if it's available */}
              {menuItem.icon}
            </span>
            <span className="text-sm">{menuItem.name}</span>
            {selectMenu === menuItem.name && (
              <span className="h-[3px] w-[calc(100%-20px)] bg-[#1a73e8] bottom-0 left-[10px] absolute"></span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;
