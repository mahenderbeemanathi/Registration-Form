// Write your JS code here

import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameErr: '',
    lastNameErr: '',
    isSubmit: false,
  }

  onFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstNameErr: 'Required'})
    } else {
      this.setState({firstName: event.target.value, firstNameErr: ''})
    }
  }

  onLastName = event => {
    if (event.target.value === '') {
      this.setState({lastNameErr: 'Required'})
    } else {
      this.setState({lastName: event.target.value, lastNameErr: ''})
    }
  }

  onClickSubmit = () => {
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmit: true})
    }
    if (firstName === '') {
      this.setState({firstNameErr: 'Required'})
    }
    if (lastName === '') {
      this.setState({lastNameErr: 'Required'})
    }
  }

  onClickAnotherResponse = () => {
    this.setState({isSubmit: false})
  }

  render() {
    const {isSubmit, firstNameErr, lastNameErr} = this.state
    return (
      <div className="container">
        <h1>Registration</h1>
        {isSubmit ? (
          <div className="submitted-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button
              type="button"
              onClick={this.onClickAnotherResponse}
              className="button"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <div className="card">
            <label htmlFor="firstName">FIRST NAME</label>
            <br />
            <input
              onBlur={this.onFirstName}
              id="firstName"
              placeholder="First name"
              className={`${firstNameErr} input`}
            />
            <p className="err">{firstNameErr}</p>
            <label htmlFor="lastName">LAST NAME</label>
            <br />
            <input
              onBlur={this.onLastName}
              id="lastName"
              placeholder="Last name"
              className={`${lastNameErr} input`}
            />
            <p className="err">{lastNameErr}</p>
            <div className="button-container">
              <button
                className="button"
                type="button"
                onClick={this.onClickSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
