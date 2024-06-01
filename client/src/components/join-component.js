import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import larpEventService from "../services/larpevent.service";

const JoinComponent = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [allLarps, setAllLarps] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getLarps();
  }, []);

  const getLarps = () => {
    larpEventService
      .getLarps()
      .then((data) => {
        setAllLarps(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleTakeToLogin = () => {
    navigate("/login");
  };

  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    const filteredLarps = allLarps.filter((larp) =>
      larp.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResult(filteredLarps);
  };

  const handleJoin = (e) => {
    const larpId = e.target.id;
    larpEventService
      .join(larpId)
      .then(() => {
        window.alert("報名成功");
        navigate("/larpevent");
      })
      .catch((e) => {
        console.log(e);
        setMessage(e.response.data);
      });
  };

  return (
    <div className="join-container">
      {message && <div className="alert alert-danger">{message}</div>}
      {!currentUser && (
        <div>
          <p>您必須先登入才能參加劇本團</p>
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
          <h1>只有玩家才能參加劇本團</h1>
        </div>
      )}
      {currentUser && currentUser.user.role === "玩家" && (
        <div className="search input-group mb-3">
          <input
            type="text"
            className="form-control"
            onChange={handleChangeInput}
          />
          <button onClick={handleSearch} className="btn btn-primary">
            搜尋劇本
          </button>
        </div>
      )}

      {currentUser && (searchResult || allLarps) && (
        <div className="join-box">
          {[...(searchResult || allLarps)].reverse().map((larp) => {
            return (
              <div key={larp._id} className="card join-card">
                <div className="card-body">
                  <h3 className="card-title">劇本名稱:{larp.name}</h3>
                  <p>類型:{larp.type}</p>
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
                  <p>聯絡方式(line或電話):{larp.contact}</p>
                  {larp.note && <p>備註:{larp.note}</p>}
                  {(larp.male - larp.maleplayer.length !== 0 ||
                    larp.female - larp.femaleplayer.length !== 0) && (
                    <a
                      href="#"
                      id={larp._id}
                      className="card-text btn btn-primary"
                      onClick={handleJoin}
                    >
                      參加
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

export default JoinComponent;
