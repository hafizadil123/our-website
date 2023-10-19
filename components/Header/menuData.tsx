import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
    logo:"/images/header/home.svg"
  },
  {
    id: 2,
    title: "Services",
    path: "/about",
    newTab: false,
    logo:"/images/header/service.svg"

  },
  {
    id: 33,
    title: "Projects",
    path: "/blog",
    newTab: false,
    logo:"/images/header/projects.svg"

  },
  {
    id: 3,
    title: "Reviews",
    path: "/contact",
    newTab: false,
    logo:"/images/header/reviews.svg"

  },
  {
    id: 4,
    title: "About",
    path: "/About",

    newTab: false,
    logo:"/images/header/about.svg",
  },
];
export default menuData;
