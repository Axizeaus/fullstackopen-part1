import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const votes = new Array(anecdotes.length).fill(0);
  const [vote, setVote] = useState(votes)

  const nextAnecdote = () =>{
    const next = Math.floor(Math.random() * anecdotes.length);
    if (next !== selected){
      setSelected(next);
    } else {
      nextAnecdote();
    }
    
  }
  const addVote = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy);
  }

  const getHighestVoteIndex = () => {
    let max = vote[0]
    let maxIndex = 0

    for (let i = 0; i < vote.length; i++){
      if (max < vote[i]){
        maxIndex = i;
        max = vote[i]
      }
    }
    return maxIndex
  }

  const highestVotedAnecdote = anecdotes[getHighestVoteIndex()]
  const highestVote = vote[getHighestVoteIndex()]

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <button onClick={nextAnecdote}>next anecdote</button>
      <button onClick={addVote}>vote</button>
      <div> vote : {vote[selected]}</div>
      <h1>Anecdote with the most vote</h1>
      <div>{highestVotedAnecdote}</div>
      <div>votes : {highestVote}</div>
      
    </>
  );
};

export default App;
