import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import taxiDriver from "./img/taxiDriver.png";
import race from "./img/race.png";
import momandKids from "./img/money.png";
import rank1 from "./img/rank1.png";
import rank2 from "./img/rank2.png";
import rank3 from "./img/rank3.png";
import axios from "axios";
function FavoriteTaxi() {
    const [fav1, setFav1] = useState('');
    const [fav2, setFav2] = useState('');
    const [fav3, setFav3] = useState('');
    var userIdx=localStorage.getItem("userIdx");
    const send = () => {
        axios.post('https://zuun-e.com/API/evaluate', {
            userIdx: userIdx,
            driverIdx: 0,
            money: fav3,
            talk: fav1,
            speed: fav2,
            matching: 1
        })
            .then(function (data) {
                window.location.href = "/home";
            })
            .catch(function (data) {
                alert("fail");
            })
    }
    const addCollection1 = (data,data2) => {
        let div = document.createElement('div');
        div.classList.add('taxiSelectBlock');
        div.innerHTML = data;
        document.getElementById('taxiSelectSpace').append(div);
        setFav1(data2);
    }
    const addCollection2 = (data,data2) => {
        let div = document.createElement('div');
        div.classList.add('taxiSelectBlock');
        div.innerHTML = data;
        document.getElementById('taxiSelectSpace').append(div);
        setFav2(data2);
    }
    const addCollection3 = (data,data2) => {
        let div = document.createElement('div');
        div.classList.add('taxiSelectBlock');
        div.innerHTML = data;
        document.getElementById('taxiSelectSpace').append(div);
        setFav3(data2);
    }
    var imgCnt = 0;
    const img1 = () => {
        if (imgCnt == 0) {
            imgCnt += 1;
            document.getElementById("img1").src = taxiDriver;
        }
        else if (imgCnt == 1) {
            imgCnt += 1;
            document.getElementById("img2").src = taxiDriver;
        }
        else if (imgCnt == 2) {
            document.getElementById("img3").src = taxiDriver;
        }
    }
    const img2 = () => {
        if (imgCnt == 0) {
            imgCnt += 1;
            document.getElementById("img1").src = race;
        }
        else if (imgCnt == 1) {
            imgCnt += 1;
            document.getElementById("img2").src = race;
        }
        else if (imgCnt == 2) {
            document.getElementById("img3").src = race;
        }

    }
    const img3 = () => {
        if (imgCnt == 0) {
            imgCnt += 1;
            document.getElementById("img1").src = momandKids;
        }
        else if (imgCnt == 1) {
            imgCnt += 1;
            document.getElementById("img2").src = momandKids;
        }
        else if (imgCnt == 2) {
            document.getElementById("img3").src = momandKids;
        }

    }
    return (
        <div className="taxiBg">
            <div className="container">
                <div className="d-flex justify-content-center my-4">
                    <div className="col-12 col-md-8 col-lg-8">
                        <div className="taxiSelect">
                            <span className="orange">?????? </span><span>?????????</span>
                        </div>
                        <div className="taxiSelectWrap">
                            <div id="taxiSelectSpace">
                            </div>
                        </div>
                        <div className="row px-2 my-3">
                            <img className="taxiImg" src={taxiDriver}>
                            </img>
                            <div className="taxiWrap2">
                                <span className="taxiColWord">?????? ??????????????? ??????</span>
                                <hr />
                                <div className="row">
                                    <div onClick={() => { addCollection1("???????????? ??????",0) }} className="taxiCol">???????????? ??????</div>
                                    <div onClick={() => { addCollection1("?????????",1) }} className="taxiCol">?????????</div>
                                    <div onClick={() => { addCollection1("???????????????",2) }} className="taxiCol">???????????????</div>
                                </div>
                            </div>
                        </div>
                        <div className="row px-2 my-3">
                            <img className="taxiImg" src={race}>
                            </img>
                            <div className="taxiWrap2">
                                <span className="taxiColWord">?????????????????? ??????</span>
                                <hr />
                                <div className="row">
                                    <div onClick={() => { addCollection2("????????? ?????????",0) }} className="taxiCol">????????? ?????????</div>
                                    <div onClick={() => { addCollection2("????????????",1) }} className="taxiCol">????????????</div>
                                    <div onClick={() => { addCollection2("????????????",2) }} className="taxiCol">????????????</div>
                                </div>
                            </div>
                        </div>
                        <div className="row px-2 my-3">
                            <img className="taxiImg" src={momandKids}>
                            </img>
                            <div className="taxiWrap2">
                                <span className="taxiColWord">??????</span>
                                <hr />
                                <div className="row">
                                    <div onClick={() => { addCollection3("?????? ?????? ????????? ?????????",0) }} className="taxiCol">?????? ?????? ????????? ?????????</div>
                                    <div onClick={() => { addCollection3("????????? ?????? ?????? ??????",1) }} className="taxiCol">????????? ?????? ?????? ??????</div>
                                    <div onClick={() => { addCollection3("?????? ????????? ????????????",2) }} className="taxiCol">?????? ????????? ????????????</div>
                                </div>
                            </div>
                        </div>
                        <div className="taxiRankWrap"><p>?????? 3?????? ??? ?????? ??????????????? ????????? ???????????????</p></div>
                        <div className="d-flex justify-content-center my-5">
                            <div className="">
                                <div id="taxi1" className="taxiImg"><img className="taxiImg" id="img1"></img></div>
                                <div className="my-3" ><img className="taxiImg" src={rank1}></img></div>
                            </div>
                            <div className="">
                                <div id="taxi2" className="taxiImg"><img className="taxiImg" id="img2"></img></div>
                                <div className="my-3" ><img className="taxiImg" src={rank2}></img></div>
                            </div>
                            <div className="">
                                <div id="taxi3" className="taxiImg"><img className="taxiImg" id="img3"></img></div>
                                <div className="my-3" ><img className="taxiImg" src={rank3}></img></div>
                            </div>
                        </div>
                        <div className="row mx-auto py-3 px-3 taxiSelectWrap2">
                            <img className="taxiImg" onClick={img1} src={taxiDriver}></img>
                            <img className="taxiImg" onClick={img2} src={race}></img>
                            <img className="taxiImg" onClick={img3} src={momandKids}></img>
                        </div>
                        <div className="collectionSave" onClick={send}>????????? ??????</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FavoriteTaxi;