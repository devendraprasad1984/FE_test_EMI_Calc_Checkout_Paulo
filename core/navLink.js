import React from "react";
import Link from "next/link";

const NavLink = props => {
  const {name, href} = props
  return <>
    <Link
      prefetch={true}
      href={href}
      passHref
    >
    <span className={`navBtn`}>
      {name}
    </span>
    </Link>
  </>
}

export default NavLink