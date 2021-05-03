import React from 'react';
import { Button } from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const { name, salary, img, email } = props.players;
    const addPlayer = props.addPlayer;
    return (
        <div className="check">
            <div className="try">
                <img src={img}></img>
                <h4> Name : {name} </h4>
                <p>email : {email} </p>
                <p>Salary : {salary} </p>
                <button onClick={() => addPlayer(props.players)} className="btn btn-success bt-lg"> <FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
            </div>
        </div>
    );
};

export default Player;