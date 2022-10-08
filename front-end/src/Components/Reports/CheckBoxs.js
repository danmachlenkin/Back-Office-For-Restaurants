import React, { useState } from "react";

//JS imports

//CSS imports


const options = ["Today", "Yesterday", "Last 7 Days", "Last 30 Days"];

const CheckBoxs = (props) => {
  const [checkedState, setCheckedState] = useState(
    new Array(options.length).fill(false)
  );

  const onChangeHandler = (position) => {
    let updatedCheckedState = checkedState.map((item,index) => {
       return position === index ? !item : false;
    })
    props.selectedTime(options[position])
    setCheckedState(updatedCheckedState);
  }

  
  return (
    <div>
      {options.map((option, index) => {
        return (
          <div>
            <input type="checkbox"  checked={checkedState[index]} onChange={ ()=> onChangeHandler(index)}/>
            <label>{option}</label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckBoxs;
