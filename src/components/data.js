import { GiBasketballJersey } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";
import { IoShirtSharp } from "react-icons/io5";
import { PiPantsFill } from "react-icons/pi";
import { GiSchoolBag } from "react-icons/gi";
import { TbPerfume } from "react-icons/tb";
import { GiHoodie } from "react-icons/gi";
import { GiShirt } from "react-icons/gi";

export const countries = [
  {
    image: "/images/1.webp",
    title: "Combo Offer",
  },
  {
    image: "/images/2.jpg",
    title: "Panjabi",
  },
  {
    image: "/images/3.jpg",
    title: "Shirt",
  },
];

export const categories = [
  {
    url: "jersey",
    name: "Jersey",
    icon: <GiBasketballJersey className="icon" />,
    bgColor: "#f39893",
  },
  {
    url: "t-shirt",
    name: "T-Shirt",
    icon: <IoShirtSharp className="icon" />,
    bgColor: "#7c87a5",
  },

  {
    url: "hoodie",
    name: "Hoodie",
    icon: <GiHoodie className="icon" />,
    bgColor: "#abd194",
  },
  {
    url: "panjabi",
    name: "Panjabi",
    icon: <GiShirt className="icon" />,
    bgColor: "#7ac2da",
  },
  {
    url: "shoes",
    name: "Shoes",
    icon: <GiConverseShoe className="icon" />,
    bgColor: "#53bbb4",
  },
  {
    url: "bag",
    name: "Bag",
    icon: <GiSchoolBag className="icon" />,
    bgColor: "#f1c85e",
  },
  {
    url: "perfume",
    name: "Perfume",
    icon: <TbPerfume className="icon" />,
    bgColor: "#b88cbf",
  },
  {
    url: "pants",
    name: "Pants",
    icon: <PiPantsFill className="icon" />,
    bgColor: "#f5a572",
  },
];
