import React, { useContext, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
 
export const SidebarData = [

  {
    title: "Home",
    path: "/",
    icon: <BiIcons.BiHome />,
    iconClosed: <BiIcons.BiHome />,
    iconOpened: <BiIcons.BiHome />,
  },
  {
    title: "Store",
    path: "/store",
    icon: <AiIcons.AiFillShop />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Vegetables",
        path: "/vegetablesStore",
        icon: <GiIcons.GiTomato />,
      },
      {
        title: "Grocery",
        path: "/groceryStore",
        icon: <GiIcons.GiBowlOfRice />,
      },
      {
        title: "Drinks",
        path: "/drinkStore",
        icon: <BiIcons.BiDrink />,
      },
      {
        title: "Cleaning items",
        path: "/cleaningStore",
        icon: <MdIcons.MdCleaningServices />,
      },
      {
        title: "Pets food",
        path: "/petStore",
        icon: <MdIcons.MdPets />,
      },
    ],
  },
  {
    title: "SignUp",
    path: "/signup",
    icon: <FaIcons.FaSign />,
  },
];