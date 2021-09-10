import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import signupBackground from "./img/signupBackground.png";
import signupLogo from "./img/signupLogo.png";
import axios from "axios";
function SignUp() {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [sex, setSex] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const onId = (e) => {
    setId(e.target.value);
  };
  const onPwd = (e) => {
    setPwd(e.target.value);
  };
  const onName = (e) => {
    setName(e.target.value);
  };
  const onBirth = (e) => {
    setBirth(e.target.value);
  };
  const onSex = (e) => {
    setSex(e.target.value);
  };
  const onUserInfo = (e) => {
    setUserInfo(e.target.value);
  };
  const send = () => {
    axios.post('http://3.35.119.12:3000/API/register', {
      id: id,
      pwd: pwd,
      name: name,
      birth: birth,
      male_female: sex,
      type: userInfo
    })
      .then(function (data) {
        console.log(12345);
        alert("!234");
        window.location.href = "/favoriteTaxi";
      })
      .catch(function (data) {
        console.log(1234);
      })
  }
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center my-4">
          <div className="col-12 col-md-8 col-lg-8">
            <img className="signupTopImg" src={signupBackground}></img>
            <div className="taxiCab"><img src={signupLogo} className="taxiCabLogo"></img></div>
            <div className="signupWrap">
              <div className="signupFont">ID</div>
              <input onChange={onId} value={id}></input>
              <div className="signupFont">PASSWORD</div>
              <input onChange={onPwd} value={pwd} type="password"></input>
              <div className="signupFont">이름</div>
              <input onChange={onName} value={name}></input>
              <div className="signupFont">성별</div>
              <input onChange={onSex} value={sex}></input>
              <div className="signupFont">생년월일</div>
              <input onChange={onBirth} value={birth}></input>
              <div className="signupFont">운전자/사용자 여부</div>
              <input onChange={onUserInfo} value={userInfo}></input>
            </div>
            <div onClick={send} className="signupBotton">
              <p className="enFont signupBottonWord">SIGN UP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;