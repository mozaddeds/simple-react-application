import { useEffect, useState } from 'react';
import './App.css';
import Player from './components/Player/Player';
import playerInfo from './data/playerinfo.json';
import Header from './components/Header/Header';
import Selection from './components/Selection/Selection';
import Totalsalary from './components/Totalsalary/Totalsalary';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [player, setPlayer] = useState([])
  const [list, setList] = useState([])

  const addPlayer = (player) => {

    const playerInfo = list.includes(player);
    if(playerInfo===false)
    {
      const newList = [...list, player];
      setList(newList);
    }   
  }

  useEffect(() => {
    fetch(playerInfo)
    .then(playerInfo => setPlayer(playerInfo));
  }, [])

  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>
      <div className="bodyPart">
        <div>
          <h2>Total player = {playerInfo.length}</h2>
          {
            playerInfo.map(player => <Player players={player} addPlayer={addPlayer} key={player.id}></Player>)
          }
        </div>
        <div className="selectSection">
          <h2>Selected Players : {list.length}</h2>
          <div className="totalSection">
            <Totalsalary list={list}></Totalsalary>
          </div>
          <div className="playerList">
            {
            list.map(list => <Selection list={list}></Selection>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
