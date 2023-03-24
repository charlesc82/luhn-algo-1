import { useEffect, useState } from "react";

function Form() {
  let [card, setCard] = useState("");
  let [log, setLog] = useState("");
  let [double, setDouble] = useState("");
  let [toetoe, setToeToe] = useState(""); // toetoe= sum :D
  let [valid, setValid] = useState("check cc");
  useEffect(validate, [card]); //useEffect takes one function and one variable. everytime there is a new change in the variable, it reruns the function.

  function handleChange(e) {
    setCard(e.target.value);
  }

  function validate() {
    let reverse = card.split("").reverse().join("");
    let str = "";
    let total = 0;
    setLog(reverse);
    if (reverse.length > 0) {
      for (let i = 0; i < reverse.length; i++) {
        i % 2 === 0 ? (str += reverse[i]) : (str += reverse[i] * 2);
      }
    }
    setDouble(str);
    for (let char in str) {
      total += Number(str[char]);
    }
    setToeToe(total);
    total === 0
      ? setValid("Enter Credit Card")
      : total % 10 === 0 && total > 20
      ? setValid("Card is valid")
      : setValid("Card is invalid");
  } // close validate

  return (
    <form>
      <h1>My Luhn Algorithm</h1>
      <input value={card} onChange={handleChange}></input>
      <div>Reverse #: {log}</div>
      <div>Doubled: {double}</div>
      <div>Total: {toetoe}</div>
      <div>{valid}</div>
    </form>
  );
} //close form

export default Form;
