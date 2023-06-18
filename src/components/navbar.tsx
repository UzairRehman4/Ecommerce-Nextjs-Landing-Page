import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationMenuDemo } from "./navlinks";
import Searchinput from "./searchinput";

const Navbar = () => {
  return (
    <div>
      {/* Navbar container */}
      <div className="navbar  bg-slate-500 ">
        {/* Start of navbar */}
        <div className="navbar-start px-11 h-5">
          {/* Dropdown menu */}
          <div className="dropdown">
            {/* Hamburger menu icon */}
            <label tabIndex={0} className="p-0 text-2xl lg:hidden ">
              <GiHamburgerMenu />
            </label>
            {/* Dropdown content */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-slate-500 text-white  rounded-md w-52 duration-300 "
            >
              {/* Home link */}
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              {/* Women section */}
              <li tabIndex={0}>
                <details>
                  <summary>Women</summary>
                  {/* Women's category links */}
                  <ul className="p-2">
                    <li>
                      <Link href={"/"}>Tops</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Shirts</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Pants</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Acessories/Jewelry</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Shoes</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href={"/"}>Men</Link>
              </li>
              <li>
                <Link href={"/"}>Kids</Link>
              </li>
              {/* About link */}
              <li>
                <Link href={"/"}>About</Link>
              </li>
              {/* Contact link */}
              <li>
                <Link href={"/"}>Contact</Link>
              </li>
              <Searchinput />
            </ul>
          </div>
          {/* Logo */}
          <Image
            src="/images/nike-logo.png"
            alt="logo"
            className="hidden lg:block ml-5 cursor-pointer invert"
            width={140}
            height={100}
          />
        </div>
        {/* Center of navbar */}
        <div className="navbar-center ">
          {/* Logo (hidden on large screens) */}
          <Link href={"/"}>
            <Image
              src="/images/nike-logo.png"
              className="block lg:hidden invert"
              alt="logo"
              width={110}
              height={100}
            />
          </Link>
          {/* Navigation menu */}
          <div className="hidden lg:flex">
            <NavigationMenuDemo />
          </div>
        </div>
        {/* End of navbar */}
        <div className="navbar-end">
          {/* Dropdown with cart items */}
          <div className="dropdown dropdown-end">
            {/* Cart icon */}
            <label tabIndex={0} className="pr-5 cursor-pointer group ">
              <div className="indicator">
                {/* Cart icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 group-hover:text-white duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Cart icon path */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {/* Cart items count */}
                <span className="badge badge-sm indicator-item font-semibold ">
                  2
                </span>
              </div>
            </label>
            {/* Dropdown content with cart items */}
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-slate-400 shadow"
            >
              <div className="card-body">
                {/* Cart summary */}
                <span className="font-bold text-lg text-black">2 Items</span>
                <span className="text-white">Subtotal: $999</span>
                <div className="card-actions">
                  {/* View cart button */}
                  <button className="btn btn-neutral text-white btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
