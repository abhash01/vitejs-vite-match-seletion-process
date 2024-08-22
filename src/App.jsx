import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [player, setPlayer] = useState([]);
  const [finalplayer, setFinalPlayer] = useState([]);

  const handleSubmit = () => {
    setPlayer((prev) => {
      return [...prev, name];
    });
    setName('');
  };
  const handleChanged = (e) => {
    setName(e.target.value);
  };
  const handleAddplayer = (value) => {
    //const players = [...player];
    setFinalPlayer((prev) => {
      return [...prev, value];
    });
  };
  const handleDelplayer = (value) => {
    const players = [...finalplayer];
    const select = players.filter((item) => item !== value);
    setFinalPlayer(select);
  };
  return (
    <>
      <h1>Match Selection</h1>
      <input
        type="text"
        value={name}
        placeholder="Add Name"
        onChange={handleChanged}
      />
      <button onClick={handleSubmit}>Submit</button>
      <h1>Match Selection Prohable</h1>
      <div>
        {' '}
        {player.map((item, idx) => {
          return (
            <div key={idx}>
              {item}{' '}
              <span>
                <button onClick={() => handleAddplayer(item)}>Add</button>
              </span>
              <span>
                <button onClick={() => handleDelplayer(item)}>Del</button>
              </span>
            </div>
          );
        })}
      </div>
      <h1>Final Selected Player</h1>
      <div>
        {' '}
        {finalplayer.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </>
  );
}

export default App;
