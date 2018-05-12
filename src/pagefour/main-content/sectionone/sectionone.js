import React, { Component } from "react";
import "./sectionone.css";

class ContactSectionOne extends Component {
  render() {
    return (
      <div>
        <div class="contactOne">
          <div class="row">
            <div class="col-sm-12">
              <div class="contactHeader">
                <h1 class="text-center"> Contact Us </h1>
              </div>
            </div>
          </div>

          <form>
            <div class="form-row">
              <div class="col-4" />
              <div class="form-group col-sm-4">
                <label for="inputName">Name:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  placeholder="First Name"
                />
              </div>
              <div class="col-4" />
            </div>

            <div class="form-row">
              <div class="col-4" />
              <div class="form-group col-sm-4">
                <label for="inputEmail">Email:</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="example@gmail.com"
                />
              </div>
              <div class="col-4" />
            </div>

            <div class="form-row">
              <div class="col-3" />
              <div class="form-group col-sm-6">
                <label for="commentArea">Comments: </label>
                <textarea
                  class="form-control"
                  placeholder="Comments, Inquiries, or anything you would like to say!"
                  id="commentArea"
                  rows="6"
                />
              </div>
              <div class="col-3" />
            </div>

            <div class="form-row">
              <div class="form-group col-sm-12">
                <button
                  type="button"
                  class="btn btn-primary contactSubmit"
                  onClick={() => {
                    alert(
                      "Contact Page not set-up yet, important inquiries pleace email noahkreiger@gmail.com, Thanks!"
                    );
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactSectionOne;
