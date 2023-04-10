import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const postive = (good / all) * 100;
  const average = (good - bad) / all

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} name="good" />
      <br />
      <Button handleClick={() => setNeutral(neutral + 1)} name="neutral" />
      <br />
      <Button handleClick={() => setBad(bad + 1)} name="bad" />
      <br />
      <div>good : {good}</div>
      <div>neutral : {neutral}</div>
      <div>bad : {bad}</div>
      <div>positive : {postive}%</div>
      <div>all : {all}</div>
      <div>average : {average}</div>
    </>
  );
};

const Button = ({handleClick, name}) => {
  return (
    <>
      <button onClick={handleClick}>{name}</button>
    </>
  );
}

export default App;
