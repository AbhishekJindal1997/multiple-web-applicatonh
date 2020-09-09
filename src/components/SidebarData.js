import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Todo-List",
    path: "/todo",
    icon: <FcIcons.FcTodoList />,
    cName: "nav-text",
  },
  {
    title: "Calculator",
    path: "/calculator",
    icon: <AiIcons.AiFillCalculator />,
    cName: "nav-text",
  },
];
