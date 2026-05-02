import { useState } from "react";
import Card from "../card/card";
import "./accordion.css";

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="trycatch-accordion" key={items.id}>
      {items.map((item) => (
        <Card key={item.id}>
          <button className="accordion-header" onClick={() => toggle(item.id)}>
            {item.title}
          </button>

          {openId === item.id && (
            <div className="accordion-body">{item.content}</div>
          )}
        </Card>
      ))}
    </div>
  );
}
