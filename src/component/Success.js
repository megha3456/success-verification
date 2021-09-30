import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.json"

export default class Success extends Component {
  render() {
    return (
      <div className="cont">
        <div className="position-absolute top-0 start-0" style={{
            color: "#43EFD7",
            fontFamily: "Sofia pro (bold)",
            fontSize: "35px",
            marginLeft:"25px"
            
          }}>
        <i class="bi bi-arrow-left"></i>
        </div>
        <h1
          className="text-center"
          style={{
            color: "#3CAB35",
            fontFamily: "Sofia pro (bold)",
            fontSize: "20px",
            marginTop: "70px",
            letterSpacing:"1px"
          }}
        >
          VERIFICATION SUCCESSFUL!
        </h1>
        <div class="text-center">
          <img
            src="https://esse.co.in/wp-content/uploads/2020/12/new-logo.jpeg"
            class="rounded"
            style={{
              height: "120px",
              width: "150px",
            }}
            
          />
        </div>
        <h1
          className="text-center"
          style={{
            color: "#4B6319",
            fontFamily: "Sofia pro (bold)",
            fontSize: "40px",
            marginTop: "2px",
            letterSpacing:"2px"
          }}
        >
          WELCOME TO ESSE
        </h1>
        <div className="text-center">
          <a
            href="#"
            class="btn btn-primary btn-sm mt-3"
            style={{
              borderRadius: "50px",
              background: "#3d0c02",
              border: "#ffff",
              width:"120px",
              

            }}
          >
            Continue
          </a>
        </div>
      </div>
    );
  }
}
