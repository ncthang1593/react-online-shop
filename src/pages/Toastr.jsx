import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

function Toastr({ show, onClose, message, type }) {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast onClose={onClose} show={show} delay={2000} autohide>
        <Toast.Header
          closeButton={false}
          style={{
            backgroundColor: type === "success" ? "green" : "red",
            color: "white",
          }}
        >
          <strong className="me-auto">
            {type === "success" ? "Success" : "Error"}
          </strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Toastr;
