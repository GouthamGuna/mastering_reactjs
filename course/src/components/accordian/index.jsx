import React, { useState } from "react";
import data from "./data";
import './styles.css'

// Single Select,
// MultiSelect

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentQuestionId) {
    setSelected(getCurrentQuestionId === selected ? null : getCurrentQuestionId);
  }
  console.log(selected);
  return (
    <div className="wrapper">
        <button>Enable Multi Selection</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found.!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
