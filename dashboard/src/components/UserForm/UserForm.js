import React, { Component } from "react";
import { IoClose } from "react-icons/io5";
import "./UserForm.css";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        department: "",
      },
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.setState({ user: this.props.user });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  validateForm = () => {
    const { user } = this.state;
    const { firstName, lastName, email, department } = user;

    return (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      department.trim() !== "" &&
      /\S+@\S+\.\S+/.test(email)
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.validateForm()) {
      return;
    }

    const { onSubmit, onClose } = this.props;
    const { user } = this.state;

    onSubmit(user);

    this.setState({
      user: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        department: "",
      },
    });

    onClose();
  };

  render() {
    const { user } = this.state;
    const { id, firstName, lastName, email, department } = user;
    const { onClose } = this.props;
    return (
      <div className="user-form-container">
        <form onSubmit={this.handleSubmit} className="user-form">
          <label htmlFor="id">ID</label>
          <input
            id="id"
            type="text"
            name="id"
            placeholder="ID"
            onChange={this.handleChange}
            value={id}
            disabled
          />
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={this.handleChange}
            value={firstName}
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={this.handleChange}
            value={lastName}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={email}
            required
          />
          <label htmlFor="department">Department</label>
          <input
            id="department"
            name="department"
            type="text"
            placeholder="Department"
            onChange={this.handleChange}
            value={department}
            required
          />
          <button type="submit">Submit</button>
          <button
            type="button"
            className="close-button"
            onClick={() => onClose()}
          >
            <IoClose className="close-icon" />
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm;
