import React from "react";
import "../components/styles/header.css";
import { Link, NavLink } from "react-router";

const Header = () => {
  const user = "";
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar p-0 w-11/12 mx-auto">
        {/* navbar start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-xl font-bold cursor-pointer">
            Orkid Employee
          </Link>
        </div>

        {/* center navbar */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* navbar end */}
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2">
              <div>{user.email}</div>
              <button
                onClick={handleLogOut}
                className="btn rounded-lg bg-neutral text-neutral-content"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="btn rounded-lg bg-neutral text-neutral-content"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
