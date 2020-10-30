import React from "react";
import { ReactElement } from "react";
import "./card.css";

interface props {
  klass: string;
  children: ReactElement[];
}
const Card = ({ klass, children }: props) => {
  const className = `card ${klass}`;
  return <div className={className}>{children}</div>;
};

export default Card;
