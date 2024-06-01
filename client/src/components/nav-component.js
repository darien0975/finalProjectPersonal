import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";

const NavComponent = ({ currentUser, setCurrentUser }) => {
  const handleLogout = () => {
    AuthService.logout();
    window.alert("登出成功");
    setCurrentUser(null);
  };

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link className="nav-link  active" to="/">
                  首頁
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">
                  認識劇本殺
                </Link>
              </li>
              {!currentUser && (
                <li className="nav-item">
                  <Link className="nav-link " to="/register">
                    註冊會員
                  </Link>
                </li>
              )}
              {!currentUser && (
                <li className="nav-item">
                  <Link className="nav-link " to="/login">
                    會員登入
                  </Link>
                </li>
              )}
              {currentUser && (
                <li className="nav-item">
                  <Link onClick={handleLogout} className="nav-link " to="/">
                    會員登出
                  </Link>
                </li>
              )}
              {currentUser && (
                <li className="nav-item">
                  <Link className="nav-link " to="/profile">
                    個人頁面
                  </Link>
                </li>
              )}
              {currentUser && (
                <li className="nav-item">
                  <Link className="nav-link " to="/larpevent">
                    劇本頁面
                  </Link>
                </li>
              )}
              {currentUser && currentUser.user.role === "主揪" && (
                <li className="nav-item">
                  <Link className="nav-link " to="/postlarpevent">
                    新增劇本
                  </Link>
                </li>
              )}
              {currentUser && currentUser.user.role === "玩家" && (
                <li className="nav-item">
                  <Link className="nav-link " to="/join">
                    參加劇本
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavComponent;
