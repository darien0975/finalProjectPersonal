import React from "react";
import friends from "../pictures/friends.png";
import london from "../pictures/london.png";
import room from "../pictures/table1.png";
import book from "../pictures/book2.png";
import clothing from "../pictures/clothing2.png";
import larp from "../pictures/larps1.png";

const AboutComponent = () => {
  return (
    <main className="about-main mt-4 pt-3">
      <div className="container bg-warning rounded-3 introduce">
        <div className="row align-items-md-stretch introduce-box">
          <div className="col-md-7 fs-3">
            <div className="h-100 p-4 ">
              <h1>什麼是劇本殺?</h1>
              <p>
                “劇本殺”，一詞起源於西方宴會實況角色扮演“謀殺之謎”，是玩家到實景場館，體驗推理性質的項目。劇本殺的規則是，玩家先選擇人物，閱讀人物對應劇本，蒐集線索後找出活動裏隱藏的真兇。
                劇本殺不僅僅是一個遊戲，更是一個集知識屬性、心理博弈屬性、強社交屬性於一體的娛樂項目。
              </p>
            </div>
          </div>
          <div className="col-md-5 p-4 introduce-box-img">
            <img src={larp} alt="" />
          </div>
        </div>
      </div>

      <div className="row align-items-md-stretch mt-4 sop  rounded-3">
        <div className="col-md-12  mb-2 fs-5 text-left text-white">
          <h1 className="text-center text-white">劇本殺遊戲流程</h1>
          <div className="mx-5">
            <p className="text-white">
              1.
              玩家選擇好自己想要扮演的角色（或組織者直接分配），組織者發背景和人物介紹給玩家
            </p>
            <p className="text-white">2. 玩家獲得自己角色的劇本。</p>
            <p className="text-white">
              3. 玩家閱讀自己的角色劇本並掌握角色身份與任務目標。
            </p>
            <p className="text-white">
              4. 玩家將自己代入到劇本中的角色身份並做自我介紹來展開劇本內容。
            </p>
            <p className="text-white">
              5. 玩家間互動、取得線索、分析線索來探索劇本的全盤故事內容。
            </p>
            <p className="text-white">
              6. 玩家對劇本故事終局進行投票選擇，劇本結束。
            </p>
            <p className="text-white">
              7. 主持人公布劇本真相，引領玩家復盤、全覽劇本故事內容。
            </p>
          </div>
        </div>
      </div>

      <div className="feature mb-0 py-4">
        <h1 className="text-center">劇本殺特色</h1>
        <div className="row my-3 mx-5 p-3 fs-5 feature-box align-items-md-stretch justify-content-md-between">
          <div className="col-md-6  feature-box-img">
            <img src={friends} alt="" />
          </div>
          <div className="col-md-5 feature-box-text">
            <h2>增進社交</h2>
            <p>
              劇本殺是一個極佳的社交活動，讓人們在互動中建立更深層次的人際關係。透過討論和合作，參與者們可以共同解決謎團，培養團隊精神，並建立持久的友誼。
            </p>
          </div>
        </div>
        <div className="row my-3 mx-5 p-3 fs-5 feature-box align-items-md-stretch justify-content-md-between">
          <div className="col-md-5 feature-box-text">
            <h2>身歷其境</h2>
            <p>
              透過劇本殺，參與者們可以扮演各種不同的角色，從而深入體驗不同的生活和情境。這種身份轉換讓人們能夠更好地理解他人，拓展視野，並增進同理心。
            </p>
          </div>
          <div className="col-md-6 feature-box-img">
            <img src={london} alt="" />
          </div>
        </div>
        <div className="row my-3 mx-5 p-3 fs-5 feature-box align-items-md-stretch justify-content-md-between">
          <div className="col-md-6 feature-box-img">
            <img src={room} alt="" />
          </div>
          <div className="col-md-5 feature-box-text">
            <h2>沉浸式包廂</h2>
            <p>
              劇本殺提供沉浸式的場景設計和道具，讓參與者們仿佛置身於一部真實的影視劇中。這種環境可以增強參與者的參與感，讓他們更深度地融入遊戲中。
            </p>
          </div>
        </div>
        <div className="row my-3 mx-5 p-3 fs-5 feature-box align-items-md-stretch justify-content-md-between">
          <div className="col-md-5 feature-box-text">
            <h2>推理環節</h2>
            <p>
              劇本殺的遊戲充滿了謎團和懸疑情節，需要參與者們通過推理和分析來解開。這種推理過程不僅激發思維，提高邏輯能力，還增加了遊戲的挑戰性和趣味性。
            </p>
          </div>
          <div className="col-md-6 feature-box-img">
            <img src={book} alt="" />
          </div>
        </div>
        <div className="row my-3 mx-5 p-3 fs-5 feature-box align-items-md-stretch justify-content-md-between">
          <div className="col-md-6 feature-box-img">
            <img src={clothing} alt="" />
          </div>
          <div className="col-md-5 feature-box-text">
            <h2>換裝體驗</h2>
            <p>
              參與者們可以根據劇情要求穿著不同的服裝，完全融入自己所扮演的角色。這種換裝體驗不僅增添了遊戲的趣味性，還讓參與者們享受到角色扮演的樂趣。
            </p>
          </div>
        </div>
      </div>

      <footer className="p-3 text-muted bg-warning">
        &copy; 2024 Darien Design
      </footer>
    </main>
  );
};

export default AboutComponent;
