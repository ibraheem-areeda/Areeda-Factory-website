import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-red-500 uppercase md:h-24 lg:px-10 xl:px-20">
      {/* LEFT LINKS */}
      <div className=" hidden md:flex gap-4 flex-1">
        <Link href="/">Home Page</Link>
        <Link href="/products">Products</Link>
        <Link href="/">Contact Us</Link>
      </div>
      {/* LOGO */}
      <div className=" text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Areeda</Link>
      </div>
      {/* MOBILE MENU */}
      <div className=" md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className=" hidden md:flex gap-4 justify-end flex-1">
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon/>
        <div className=" md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md ">
          <Image src="/phone.png" alt="" width={20} height={20}/>
          <span>+962 79 50 17 656</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
