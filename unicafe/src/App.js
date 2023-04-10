import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} name="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} name="neutral" />
      <Button handleClick={() => setBad(bad + 1)} name="bad" />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const positive = (((good / all) * 100) || 0).toFixed(2);
  const average = (((good - bad) / all) || 0).toFixed(2);

  if (all === 0){
    return <h2>No Feedback Given</h2>
  } else {
    return (
      <>
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={all} />
            <StatisticsLine text="average" value={average} />
            <StatisticsLine text="positive" value={positive} />
          </tbody>
        </table>
      </>
    );
  }
}

const StatisticsLine = ({text, value}) => {
  if (text === 'positive') {
    value = String(value) + '%'
  }
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
}

const Button = ({handleClick, name}) => {
  return (
    <>
      <button onClick={handleClick}>{name}</button>
    </>
  );
}

export default App;
