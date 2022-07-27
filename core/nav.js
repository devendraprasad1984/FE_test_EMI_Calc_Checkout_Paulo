import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import config from "../config";
import Link from "next/link";
import { useReactAppContext } from "../context/appContext";

const btnNav = ["navBtn"].join(" ");

// const colorValue = { color: "#7936de" };
const activeClassName = "active";

const activeColor = (menuRef) => {
  const router = useRouter();
  let isHome = router.asPath === "/" && menuRef === "/";
  let match =
    menuRef !== "/" && router.pathname.indexOf(menuRef) !== -1 && !isHome;
  if (isHome) return activeClassName;
  return match ? activeClassName : "";
};

const Nav = () => {
  const { isMobile } = useReactAppContext();
  const [show, setShow] = useState(isMobile);

  const handleOpenCloseNav = () => {
    setShow(!show);
  };

  return (
    <Fragment>
      <div className={[`${show ? "hide" : "show"}`].join(" ")}>
        <div className={["pageNav", "column"].join(" ")}>
          <div className={"column"}>
            {config.menus.map((menu) => {
              return (
                <Link
                  prefetch={true}
                  key={"id" + menu.name}
                  href={menu.href}
                  passHref
                >
                  <span className={`navBtn ${activeColor(menu.href)}`}>
                    {menu.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
