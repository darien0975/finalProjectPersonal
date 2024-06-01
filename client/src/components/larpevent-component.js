import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import larpEventService from "../services/larpevent.service";

const LarpEventcomponent = ({ currentUser, setCurrentUser }) => {
  const API_URL = "http://localhost:8080/api/larpevent";
  const navigate = useNavigate();
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  const [larpData, setLarpData] = useState(null);
  const [message, setMessage] = useState("");
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    let _id;

    if (currentUser && currentUser.user) {
      _id = currentUser.user._id;

      if (currentUser.user.role === "主揪") {
        larpEventService
          .get(_id)
          .then((data) => {
            console.log(data);
            setLarpData(data.data);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (currentUser.user.role === "玩家") {
        larpEventService
          .getJoinedLarpEvent(_id)
          .then((data) => {
            console.log(data);
            setLarpData(data.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  }, [currentUser, deleted]);

  const handleDelete = (e) => {
    const larpId = e.target.id;
    larpEventService
      .delete(larpId)
      .then(() => {
        window.alert("刪除成功");
        setDeleted(true);
        setLarpData((prevData) =>
          prevData.filter((larp) => larp._id !== larpId)
        );
        navigate("/larpevent");
      })
      .catch((e) => {
        console.log(e);
        setMessage(e.response.data);
      });
  };

  return (
    <div className="larpevent-container" style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>您必須先登入才能看到劇本資訊</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleTakeToLogin}
          >
            返回登入頁面
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role === "主揪" && (
        <div>
          <h1>歡迎來到{currentUser.user.name}的頁面</h1>
        </div>
      )}
      {currentUser && currentUser.user.role === "玩家" && (
        <div>
          <h1>歡迎來到{currentUser.user.name}的頁面</h1>
        </div>
      )}
      {currentUser && larpData && larpData.length !== 0 && (
        <div className="larpevent-box">
          {[...larpData].reverse().map((larp) => {
            return (
              <div className="card larpevent-card">
                <div className="card-body">
                  <h3 className="card-title">劇本名稱:{larp.name}</h3>
                  {larp.type && <p>類型:{larp.type}</p>}
                  <p>時間:{larp.time}</p>
                  <p>地點:{larp.place}</p>
                  {larp.price !== 0 && <p>費用:{larp.price}元</p>}
                  <p>主揪:{larp.gamemaster ? larp.gamemaster.name : "不明"}</p>
                  {(larp.male - larp.maleplayer.length !== 0 ||
                    larp.female - larp.femaleplayer.length !== 0) && (
                    <span>缺</span>
                  )}

                  {larp.male - larp.maleplayer.length === 0 &&
                    larp.female - larp.femaleplayer.length === 0 && (
                      <span id="full">滿團</span>
                    )}

                  {larp.male - larp.maleplayer.length !== 0 && (
                    <span>{larp.male - larp.maleplayer.length}男</span>
                  )}
                  {larp.female - larp.femaleplayer.length !== 0 && (
                    <span>{larp.female - larp.femaleplayer.length}女</span>
                  )}
                  {currentUser.user.role === "玩家" && (
                    <p>主揪聯絡方式(line或電話):{larp.contact}</p>
                  )}
                  {currentUser.user.role === "主揪" && (
                    <p>
                      玩家們聯絡方式(line或電話):
                      {larp.playercontact.map((data) => {
                        return <span>{data + "、"}</span>;
                      })}
                    </p>
                  )}
                  {larp.note && <p>備註:{larp.note}</p>}
                  {currentUser.user.role === "主揪" && (
                    <a
                      href="#"
                      id={larp._id}
                      className="card-text btn btn-danger"
                      onClick={handleDelete}
                    >
                      刪除
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LarpEventcomponent;
