import Link from "next/link";
import React from "react";

const NavbarItem = ({ href, children }) => {
  return (
    <li >
      <Link href={href}>
        <a> {children}</a>
      </Link>
    </li>
  );
};

export default NavbarItem;
