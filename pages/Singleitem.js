import React, { useState } from "react";

const Singleitem = ({ title, element }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <div>
        <h5 className="menu_title">{title}</h5>
        <button
          className="show-more-btn"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? (
            <img src="/menu-up.svg" alt="" />
          ) : (
            <img src="/menu-down.svg" alt="" />
          )}
        </button>
      </div>
     {showInfo && <>{ element }</>}
     
    </article>
  );
};

export default Singleitem;
