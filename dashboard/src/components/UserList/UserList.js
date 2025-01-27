import { Component } from "react";
import { IoClose } from "react-icons/io5";
import UserItem from "../UserItem/UserItem";
import UserForm from "../UserForm/UserForm";
import Pagination from "../Pagination/Pagination";
import "./UserList.css";

class UserList extends Component {
  state = {
    userData: [],
    formData: null,
    showForm: false,
    error: null,
    currentPage: 1,
    usersPerPage: 5,
    totalUsers: 10,
  };

  generateApiUrl = (path = "", params = "") => {
    const baseUrl = "https://jsonplaceholder.typicode.com/users";
    return `${baseUrl}${path}${params}`;
  };

  fetchApi = async (url, method, body = null) => {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        this.setState({ error: data.error });
      }
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  componentDidMount() {
    this.getUsers();
  }

  convertData = (resObj) => {
    const convertedUserDataObject = resObj.map((user) => ({
      id: user.id,
      firstName: user.name.split(" ")[0],
      lastName: user.name.split(" ")[1],
      email: user.email,
      department: user.company.name,
    }));

    this.setState({ userData: convertedUserDataObject });
  };

  getUsers = async () => {
    const { currentPage, usersPerPage } = this.state;
    const apiUrl = this.generateApiUrl(
      `?_page=${currentPage}&_limit=${usersPerPage}`
    );
    try {
      const data = await this.fetchApi(apiUrl, "GET");
      this.convertData(data);
    } catch (error) {
      this.setState({ error });
    }
  };

  // Delete user Api call
  handleDeleteUser = async (id) => {
    const { userData } = this.state;
    const updatedUserData = userData.filter((user) => user.id !== id);
    this.setState({ userData: updatedUserData });
    const apiUrl = this.generateApiUrl(`/${id}`);

    try {
      await this.fetchApi(apiUrl, "DELETE");
      console.log("User deleted successfully");
    } catch (error) {
      this.setState({ error });
    }
  };

  // Fetch user data by id
  fetchUserData = async (id) => {
    const apiUrl = this.generateApiUrl(`/${id}`);
    try {
      const data = await this.fetchApi(apiUrl, "GET");
      const userObject = {
        id: data.id,
        firstName: data.name.split(" ")[0],
        lastName: data.name.split(" ")[1],
        email: data.email,
        department: data.company.name,
      };
      this.setState({ formData: userObject });
    } catch (error) {
      this.setState({ error });
    }
  };

  // Edit user Api call
  handleEditUser = (id) => {
    this.fetchUserData(id);
    this.setState({ showForm: true });
  };

  // Update user Api
  handleUpdateUser = async (user) => {
    const apiUrl = this.generateApiUrl(`/${user.id}`);
    try {
      const data = await this.fetchApi(apiUrl, "PUT", user);
      this.setState((prevState) => {
        const userData = [...prevState.userData];
        const existingUserIndex = userData.findIndex((u) => u.id === data.id);

        if (existingUserIndex !== -1) {
          userData[existingUserIndex] = { ...user };
        }
        return { userData };
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  // Add user Api
  handleAddUser = async (user) => {
    const apiUrl = this.generateApiUrl();
    try {
      const data = await this.fetchApi(apiUrl, "POST", user);

      const newUser = {
        ...user,
        id: this.state.userData.length
          ? this.state.userData[this.state.userData.length - 1].id + 1
          : 1,
      };

      this.setState((prevState) => ({
        userData: [...prevState.userData, newUser],
      }));
    } catch (error) {
      this.setState({ error });
    }
  };

  handleShowFormToggle = () => {
    this.setState((prevState) => ({ showForm: !prevState.showForm }));
  };

  handlePageChange = (newPage) => {
    this.setState({ currentPage: newPage }, this.getUsers);
  };

  handleCloseErrorAlert = () => {
    this.setState({ error: null });
  };

  render() {
    const {
      userData,
      showForm,
      formData,
      currentPage,
      usersPerPage,
      totalUsers,
      error,
    } = this.state;

    const totalPages = Math.ceil(totalUsers / usersPerPage);

    return (
      <div className="user-list-container">
        <div className="user-dashboard-header-container">
          <h1>User Dashboard</h1>
          <button
            className="add-user-button"
            onClick={this.handleShowFormToggle}
          >
            Add User
          </button>
        </div>

        {error && (
          <div className="error-alert">
            <p>{error}</p>
            <button onClick={this.handleCloseErrorAlert}>
              <IoClose className="user-list-close-icon" />
            </button>
          </div>
        )}

        {showForm && (
          <UserForm
            onClose={this.handleShowFormToggle}
            onSubmit={formData ? this.handleUpdateUser : this.handleAddUser}
            user={formData}
          />
        )}

        <ul className="user-list-header">
          <li>ID</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Email</li>
          <li>Department</li>
        </ul>

        <ul className="user-list">
          {userData.map((user) => (
            <UserItem
              key={user.id}
              userDetails={user}
              onDeleteUser={this.handleDeleteUser}
              onEditUser={this.handleEditUser}
            />
          ))}
        </ul>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default UserList;
