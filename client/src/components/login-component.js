import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import wall from "../pictures/wall.jpg";

const LoginComponent = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      let response = await AuthService.login(username, password);
      localStorage.setItem("user", JSON.stringify(response.data));
      window.alert("登入成功,您現在將被重新導向至個人頁面");
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/profile");
    } catch (e) {
      console.log(e);
      setMessage(e.response.data);
    }
  };

  return (
    <div className="row justify-content-md-center container-fluid login-container mt-2">
      <div className="col-md-6 bg-white p-5 rounded-3  login-input">
        <div>
          <h1>歡迎來到劇本殺世界</h1>
          <h5>一起來體驗您的第二人生</h5>
          {message && <div className="alert alert-danger">{message}</div>}

          <div className="form-group">
            <label htmlFor="username">帳號：</label>
            <input
              onChange={handleUsername}
              type="text"
              className="form-control"
              name="username"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="password">密碼：</label>
            <input
              onChange={handlePassword}
              type="password"
              className="form-control"
              name="password"
            />
          </div>
          <br />
          <div className="form-group">
            <button onClick={handleLogin} className="btn btn-primary btn-block">
              <span>登入系統</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
