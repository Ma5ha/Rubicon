import React, { useState } from "react";
import ReactDOM from "react-dom";

import {
  CSSTransition,
  TransitionGroup,
  Transition,
} from "react-transition-group";
import uuid from "uuid";
import AnimationDelay from "../rotateAnimationWarp/animationWarp";

import "./styles.css";

function TodoList() {
  const [items, setItems] = useState([
    { text: "Buy eggs" },
    { text: "Pay bills" },
    { text: "Invite friends over" },
    { text: "Fix the TV" },
  ]);
  return (
    <div>
      {items
        ? items.map((x, i) => (
            <AnimationDelay delay={1000 * i}>
              <li className="rotate-in-center">{x.text}</li>
            </AnimationDelay>
          ))
        : null}

      <button
        onClick={() => {
          setItems([
            { text: "Buy eggs" },
            { text: "Pay bills" },
            { text: "Invite friends over" },
            { text: "Fix the TV" },
          ]);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setItems(null);
        }}
      >
        remove
      </button>
    </div>
  );
}

export default TodoList;
