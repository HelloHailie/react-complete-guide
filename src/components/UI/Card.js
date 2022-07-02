import React from "react";

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; // 이제 밖에서 className으로 받는 것들은 문자열로 추가된다.

  return <div className={classes}>{props.children}</div>; // 그런 다음 동적으로 이 클래스의 상수를 가리킬 수 있다.
};

export default Card;
