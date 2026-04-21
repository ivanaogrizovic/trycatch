import { useState } from "react";
import "./accordion.css";

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="trycatch-accordion">
      {items.map((item) => (
        <div key={item.id} className="trycatch-card">
          <button className="accordion-header" onClick={() => toggle(item.id)}>
            {item.title}
          </button>

          {openId === item.id && (
            <div className="accordion-body">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
