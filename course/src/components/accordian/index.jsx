import React, { useState } from "react";
import data from "./data";
import "./styles.css";

// Single Select,
// MultiSelect

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleItem, setMultipleItem] = useState([]);

  function handleSingleSelection(getCurrentQuestionId) {
    setSelected(
      getCurrentQuestionId === selected ? null : getCurrentQuestionId
    );
  }

  function handleMultiSelection(getCurrentQuestionId) {
    let cpyMutiple = [...multipleItem];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentQuestionId);

    // console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentQuestionId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultipleItem(cpyMutiple);
  }

  // console.log(selected, multipleItem);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multipleItem.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
              {/*  {selected === dataItem.id || multipleItem.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
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
