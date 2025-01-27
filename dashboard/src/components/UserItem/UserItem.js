import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import "./UserItem.css";

const UserItem = (props) => {
  const { userDetails, onDeleteUser, onEditUser } = props;
  const { id, firstName, lastName, email, department } = userDetails;

  const handleDelete = () => {
    onDeleteUser(id);
  };

  const onEdit = () => {
    onEditUser(id);
  };
  return (
    <li className="user-item">
      <p>
        <span>ID: </span>
        {id}
      </p>
      <p>
        <span>First Name: </span>
        {firstName}
      </p>
      <p>
        <span>Last Name: </span>
        {lastName}
      </p>
      <p>
        <span>Email: </span>
        {email}
      </p>
      <p>
        <span>Department: </span>
        {department}
      </p>
      <div className="user-item-buttons">
        <button className="user-item-button" title="Edit User" onClick={onEdit}>
          <FaRegEdit className="icons" />
        </button>
        <button className="user-item-button" title="Delete User" onClick={handleDelete}>
          <MdDelete className="icons" />
        </button>
      </div>
    </li>
  );
};

export default UserItem;
