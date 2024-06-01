import React from "react";
import { Link } from "react-router-dom";
import event from "../pictures/event.png";
import event2 from "../pictures/event2.png";
import event3 from "../pictures/event3.png";
import event4 from "../pictures/event4.png";

const HomeComponent = () => {
  return (
    <main className="home-main ">
      <div className=" home-container ">
        <div
          className=" carousel slide "
          id="carouselExampleControls"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner ">
            <div
              class="carousel-item active    p-5 "
              style={{
                backgroundImage: `url(${event4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container-fluid py-5 home-container-text">
                <h1 className="display-4 fw-bold ">劇本殺預約排程系統</h1>
                <p className="col-md-8 fs-2 ">
                  本系統是一個提供全台劇本殺活動之揪團、參團、預約等交流平台.玩家及主揪們可透過此平台進行交流、互動.
                </p>
                <Link
                  className="btn btn-warning btn-lg"
                  type="button"
                  to="/about"
                >
                  認識劇本殺
                </Link>
              </div>
            </div>
            <div
              class="carousel-item   p-5"
              style={{
                backgroundImage: `url(${event2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container-fluid py-5 home-container-text">
                <h1 className="display-4 fw-bold ">劇本殺預約排程系統</h1>
                <p className="col-md-8 fs-2 ">
                  本系統是一個提供全台劇本殺活動之揪團、參團、預約等交流平台.玩家及主揪們可透過此平台進行交流、互動.
                </p>
                <Link
                  className="btn btn-warning btn-lg"
                  type="button"
                  to="/about"
                >
                  認識劇本殺
                </Link>
              </div>
            </div>
            <div
              class="carousel-item  p-5"
              style={{
                backgroundImage: `url(${event3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container-fluid py-5 home-container-text">
                <h1 className="display-4 fw-bold ">劇本殺預約排程系統</h1>
                <p className="col-md-8 fs-2 ">
                  本系統是一個提供全台劇本殺活動之揪團、參團、預約等交流平台.玩家及主揪們可透過此平台進行交流、互動.
                </p>
                <Link
                  className="btn btn-warning btn-lg"
                  type="button"
                  to="/about"
                >
                  認識劇本殺
                </Link>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev "
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-dark rounded-3"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden ">Previous</span>
          </button>
          <button
            class="carousel-control-next "
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-dark rounded-3"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid">
        <div className=" row justify-content-md-evenly  two-box mt-4">
          <div className="col-md-5 mb-2  ">
            <div className="h-100 p-5  player rounded-3 shadow-lg">
              <h2>作為一個玩家</h2>
              <p>玩家可以參加他們喜歡的劇本殺團。</p>
              <Link
                style={{ margin: "0.5rem" }}
                className="btn btn-warning"
                type="button"
                to="/register"
              >
                註冊帳號
              </Link>
              <Link
                style={{ margin: "0.5rem" }}
                className="btn btn-warning"
                type="button"
                to="/login"
              >
                會員登入
              </Link>
            </div>
          </div>
          <div className="col-md-5 mb-2 ">
            <div className="h-100 p-5 gamemaster  rounded-3 shadow-lg">
              <h2>作為一個主揪</h2>
              <p>您可以通過註冊成為一名主揪，並開始發布您的開團資訊。</p>
              <Link
                className="btn btn-warning"
                type="button"
                to="/postlarpevent"
              >
                揪團去~
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="p-3 mt-3 text-muted bg-warning">
        &copy; 2024 Darien Design
      </footer>
    </main>
  );
};

export default HomeComponent;
