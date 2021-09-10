import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import taxiV2 from "./img/taxiV2.png";
import dot from "./img/dot.png";
import zoomTool from "./img/zoomTool.png";
import collection from "./img/collection.png";
import starPoint from "./img/starPoint.png";
import axios from "axios";
import ModalClass from "./Callmodal";
function Home() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div>
            <ModalClass show={show} handleShow={handleShow} handleClose={handleClose}></ModalClass>
            <div className="container-fluid">
                <div className="d-flex justify-content-center my-4">
                    <div className="col-12 col-md-8 col-lg-8">
                        <div className="d-flex">
                            <img className="taxiLogo" src={taxiV2}></img>
                            <span className="taxiLogoWord">Taxi</span>
                        </div>
                        <div className="findWayWrap">
                            <p className="findWayWord" >호출하기</p>
                            <div className="d-flex">
                                <img className="dot" src={dot}></img>
                                <div className="d-flex row">
                                    <div className="findWaySearch">출발지(현재위치)</div>
                                    <img className="zoomTool" src={zoomTool} />
                                    <div className="findWaySearch">도착지(목적지)</div>
                                    <img className="zoomTool2" src={zoomTool} />
                                </div>
                            </div>
                        </div>
                        <div className="searchButton" onClick={handleShow}>Search</div>
                        <div className="mainBar my-4">
                            <img className="barLogo mx-3" src={collection}></img>
                            <span>컬렉션</span>
                        </div>
                        <div className="mainBar my-4">
                            <img className="barLogo mx-3" src={starPoint}></img>
                            <span>별점 및 피드백</span>
                        </div>
                        <p className="krFont fs"> # 탑승 시 지켜주세요</p>
                        <textarea className="my-3 infoBar"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;