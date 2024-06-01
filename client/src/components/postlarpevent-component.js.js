import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import larpEventService from "../services/larpevent.service";

const PostLarpeventComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  let [name, setName] = useState("");
  let [type, setType] = useState("");
  let [time, setTime] = useState("");
  let [place, setPlace] = useState("");
  let [price, setPrice] = useState(null);
  let [male, setMale] = useState(0);
  let [female, setFemale] = useState(0);
  let [contact, setContact] = useState("");
  let [note, setNote] = useState("");
  let [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeType = (e) => {
    setType(e.target.value);
  };
  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleChangePlace = (e) => {
    setPlace(e.target.value);
  };
  const handleChangeMale = (e) => {
    setMale(e.target.value);
  };
  const handleChangeFemale = (e) => {
    setFemale(e.target.value);
  };

  const handleChangeContact = (e) => {
    setContact(e.target.value);
  };

  const handleChangeNote = (e) => {
    setNote(e.target.value);
  };

  const postLarp = () => {
    console.log(price);
    if (name === "") {
      setMessage("劇本名稱不能為空,請重新輸入");
      return;
    }

    if (time === "") {
      setMessage("時間不能為空,請重新輸入");
      return;
    }

    if (place === "") {
      setMessage("地點不能為空,請重新輸入");
      return;
    }

    if (price === "" || price === null || isNaN(price)) {
      setMessage("價格請填入一個數字");
      return;
    } else if (price < 0) {
      setMessage("價格不能為負數");
      return;
    }

    if (contact === "") {
      setMessage("聯絡方式不能為空,請重新輸入");
      return;
    }

    larpEventService
      .post(name, type, time, place, price, male, female, contact, note)
      .then(() => {
        window.alert("新劇本已創建成功");
        navigate("/larpevent");
      })
      .catch((error) => {
        setMessage(error.response.data);
      });
  };

  return (
    <div className="row justify-content-sm-center container-fluid postlarpevent-container">
      {!currentUser && (
        <div>
          <p>在發布新劇本團之前，您必須先登錄。</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleTakeToLogin}
          >
            帶我進入登錄頁面。
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role !== "主揪" && (
        <div>
          <p>只有主揪可以發布新劇本團。</p>
        </div>
      )}

      {currentUser && currentUser.user.role === "主揪" && (
        <div className="col-md-6 bg-white p-5 rounded-3">
          <div className="form-group">
            <h1>新增劇本</h1>
            {message && (
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            )}
            <label for="exampleforName">劇本名稱(必填)：</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleforName"
              onChange={handleChangeName}
            />
            <br />
            <label for="exampleforType">類型：</label>
            <input
              name="type"
              type="text"
              className="form-control"
              id="exampleforType"
              onChange={handleChangeType}
            />
            <br />
            <label for="exampleforTime">時間(必填)：</label>
            <input
              name="time"
              type="text"
              className="form-control"
              id="exampleforTime"
              onChange={handleChangeTime}
            />
            <br />
            <label for="exampleforPlace">地點(必填)：</label>
            <input
              name="place"
              type="text"
              className="form-control"
              id="exampleforTime"
              onChange={handleChangePlace}
            />
            <br />
            <label for="exampleforPrice">價格(必填)：</label>
            <input
              name="price"
              type="number"
              className="form-control"
              id="exampleforPrice"
              onChange={handleChangePrice}
            />
            <br />
            <label for="exampleforMale">缺男：</label>
            <input
              name="male"
              type="number"
              className="form-control"
              id="exampleforMale"
              onChange={handleChangeMale}
            />
            <br />
            <label for="exampleforFemale">缺女：</label>
            <input
              name="female"
              type="number"
              className="form-control"
              id="exampleforFemale"
              onChange={handleChangeFemale}
            />
            <br />
            <label for="exampleforContact">聯絡方式(必填)：</label>
            <input
              name="contact"
              type="text"
              className="form-control"
              id="exampleforContact"
              placeholder="請輸入電話或LineID"
              onChange={handleChangeContact}
            />
            <br />
            <label for="exampleforNote">備註：</label>
            <textarea
              name="note"
              type="text"
              className="form-control"
              id="exampleforNote"
              onChange={handleChangeNote}
            />
            <br />
            <button className="btn btn-primary" onClick={postLarp}>
              交出表單
            </button>
            <br />
            <br />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostLarpeventComponent;
