import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { DataContext } from "../context/DataContext";
import { FilterContext } from "../context/FilterContext";

export const Navbar = () => {
  const { authState } = useContext(AuthContext);
  const { dataState, dispatchData } = useContext(DataContext);
  const { filterState, dispatchFilter } = useContext(FilterContext);
  const navigate = useNavigate();

  const inputStyle = {
    padding: "6px 12px",
    width: "90%",
    borderRadius: "5px",
    border: "2px solid black",
    outline: "none",
    letterSpacing: "2px",
    fontSize: "em",
  };
  return (
    <nav className="navbar">
      <div className="logo-container">
        <NavLink to="/" className="logo-link">
          GearStore
        </NavLink>
      </div>
      <ul className="navbar-nav">
        {dataState?.showSearch && (
          <li className="nav-item-hoverles">
            {" "}
            <input
              type="text"
              placeholder="SEARCH"
              style={inputStyle}
              value={filterState?.searchFilter}
              onChange={(e) => {
                dispatchFilter({
                  type: "SET_SEARCH_FILTER",
                  payload: e.target.value,
                });
                navigate("/products");
              }}
            />
            <span></span>
          </li>
        )}

        {!dataState?.showSearch && (
          <li
            className="nav-item nav-item-pointer"
            onClick={() => {
              dispatchData({
                type: "SET_SHOWSEARCH_TRUE",
                payload: true,
              });
  
            }}
          >
            <i className="fas fa-magnifying-glass"></i>

          </li>
        )}

        

        <li className="nav-item">
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? "nav-link navlink-active" : "nav-link"
            }
          >
            <i className="fas fa-heart"></i>
            <span className="wishlist-count">
              <span style={{ position: "relative", bottom: "6px" }}>
                {dataState?.wishlist?.length}
              </span>
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "nav-link navlink-active" : "nav-link"
            }
          >
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">
              <span style={{ position: "relative", bottom: "6px" }}>
                {dataState?.cart?.length}
              </span>
            </span>
          </NavLink>
        </li>
        <li
          className={authState?.isLoggedin ? "nav-item-hoverles" : "nav-item"}
        >
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "nav-link navlink-active" : "nav-link"
            }
          >
            {!authState?.isLoggedin && <i className="fas fa-user"></i>}
            <span className="link-text">
              {authState?.isLoggedin ? (
                <span
                  style={{
                    backgroundColor: "#d8a90c",
                    color: "white",
                    padding: "4px 6px",
                    borderRadius: "3px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                  }}
                >
                  {authState?.userDetails?.firstName}
                </span>
              ) : (
                ""
              )}
            </span>
            
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};