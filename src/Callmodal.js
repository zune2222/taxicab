import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './App.css';
function ModalClass({ show, handleShow, handleClose }) {
    return (
        <>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header >
                    <Modal.Title>
                        <div className="loading loader loader-black loader-1"></div>
                     </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center row">
                        <div className="text-center my-2">선호도에 맞는 택시를 찾기 위해 시간이 최대 30초까지 소요됩니다.</div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Button variant="primary" >
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalClass;