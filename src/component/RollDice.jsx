import React from 'react';
import { useState } from 'react';
import Die from './Die';
import Dice from './Die';
import  './RollDice.scss';

const RollDice = ({ sides }) => {
    const showDice = document.querySelectorAll(".showDice");
    const message = document.getElementById("message");
    const adding = document.getElementById("adding");
    const space = document.getElementById("space");
    const balloon1 = document.querySelector(".balloon1");
    const balloon2 = document.querySelector(".balloon2");
    const userOneScore = document.getElementById("userOneScore");
    const userTwoScore = document.getElementById("userTwoScore");
    const [state, setState] = useState({
        die1:'1',
        die2:'1',
        rolling : false,
        totalScore : "",
        totalScore1 : "0",
        totalScore2 : 0 ,
        showPlayerName : ' ....... ',
    });
    
    const {die1, die2, rolling, totalScore, totalScore1, totalScore2, showPlayerName} = state;
    const roll = () =>{
        const newDie1 = sides[Math.floor(Math.random() * sides.length)];
        const newDie2 = sides[Math.floor(Math.random() * sides.length)];
        const score1 = Object.values(newDie1);
        const score2 = Object.values(newDie2);
        
        if(totalScore1 == 0){
            setState({
                die1 : Object.keys(newDie1),
                die2 : Object.keys(newDie2),
                rolling : true,
                totalScore : score1[0] + score2[0],
                totalScore1 : score1[0] + score2[0],
                showPlayerName : ' One ',
            });
            setTimeout(() => {
                setState((prevState) => ({...prevState, rolling:false}))
            }, 1000);
        }else if(totalScore1 == totalScore1){
            setState({
                die1 : Object.keys(newDie1),
                die2 : Object.keys(newDie2),
                rolling : true,
                totalScore : score1[0] + score2[0],
                totalScore1 : totalScore1,
                totalScore2 : score1[0] + score2[0],
                showPlayerName : " Two ",
            });
            setTimeout(() => {
                setState((prevState) => ({...prevState, rolling:false}))
            }, 1000);
            
        }
    };
    setTimeout(() =>{
        if(totalScore1 > totalScore2){
            message.textContent= "Winner is Player One!";
            message.classList.add("animate__fadeInTopLeft");
            adding.style = "display: none";
            space.style = "display:none";
            balloon1.style = "display : block";
            balloon1.classList.add("animate__backOutUp");
            userOneScore.classList.add("animate__bounce");
            userOneScore.classList.add("animate__infinite");
        }else if(totalScore1 < totalScore2){
            message.textContent = "Winner is Player Two !";
            message.classList.add("animate__fadeInTopRight");
            adding.style = "display:none";
            space.style = "display:none";
            balloon2.style = "display : block";
            balloon2.classList.add("animate__backOutUp");
            userTwoScore.classList.add("animate__bounce");
            userTwoScore.classList.add("animate__infinite");
        }else if(totalScore2 === totalScore1){
            message.textContent = "Roll Again Player Two";
            message.classList.add("animate__fadeInTopRight");
        }
    },2000)
    //restart
    const restart = () =>{
        window.location.reload();
    }
    return (
        <>
            <section className='container mt-3 dice-card rounded-5 shadow'>
                <small className='mt-5 mb-3 pt-2 text-black-50 fontSmall'>@createx by <a href="https://github.com/yelynnpaing" className='text-black-50 fw-bold'>YeLynn Paing</a> </small>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-lg-6'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h1 className='text-primary fw-bold animate__animated' id='message'></h1>
                        <div className='mt-2 d-flex'>
                            <Die  face = {String(die1)} rolling = {rolling} />
                            <Die face = {String(die2)} rolling = {rolling} />
                        </div>
                        </div>
                    </div>
                </div> 
                <div className="row justify-content-center">
                    <div className="col-lg-5 mb-3">
                        <h5 className='text-center'>
                            Player 
                                <span id='ShowPlayerName' className='fw-bold text-primary h2'>{showPlayerName}</span> 
                                    Score is : {totalScore}
                        </h5>
                    </div>
                </div>
                <div className="row pb-5 justify-content-center align-items-center">
                    <div className="col-lg-3 card cardOne border-0 shadow pt-2 rounded-2">
                        <div className="d-flex align-items-center justify-content-center">
                           <div className="d-flex flex-column justify-content-center align-items-center">
                                <h4 className='text-secondary'>
                                    Total Scores : 
                                    <span className='shadow text-secondary fw-bold animate__animated' id='userOneScore'>{totalScore1}</span>
                                </h4>
                                <h2 className='fw-bold text-secondary'>Player One</h2>
                                <i className='bi bi-person-circle text-secondary person'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <i className='bi bi-balloon text-secondary balloon1 animate__animated'></i>
                    </div>
                    <div className="col-lg-2">
                        <div className="my-4 d-flex flex-column align-items-center justify-content-center">
                            <button className='btn btn-primary shadow text-white ' id='adding'
                            onClick={roll} disabled={rolling}
                            >
                            {rolling ? "Rolling..." : "Roll Dice"}
                            </button>
                            <div className='my-4' id='space'></div>
                            <button className='btn btn-warning shadow'
                            onClick={restart}
                            >
                                Restart
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-1"> 
                        <i className='bi bi-balloon text-success balloon2 animate__animated'></i>
                    </div>
                    <div className="col-lg-3 cardOne border-0 shadow pt-2 rounded-2">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <h4 className='text-success'>
                                    Total Scores : 
                                    <span className='bg-light text-success fw-bold shadow animate__animated' id='userTwoScore'>{totalScore2}</span>
                                </h4>
                                <h2 className='fw-bold text-success'>Player Two</h2>
                                <i className='bi bi-person-circle text-success person'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
    
};
RollDice.defaultProps = {
    sides:[
        {1 : 1},
        {2 : 2},
        {3 : 3},
        {4 : 4},
        {5 : 5},
        {6 : 6}
    ],
};
export default RollDice;