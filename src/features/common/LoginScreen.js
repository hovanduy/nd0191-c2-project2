import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  login,
} from '../../app/store/rootSlice';
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, path } = useSelector((state) => state.root);
  let usersList = [];
  Object.keys(users).forEach(function (key) {
    usersList.push(users[key]);
  });

  const handleChangeBook = (value) => {
    dispatch(login({ id: value }));
    navigate(path || "/home");
  }

  return (
    <div className='login-contents'>
      <label data-testid='user-label' >Select user to login: </label>
      <select onChange={e => { handleChangeBook(e.target.value); }} value={''}>
        <option value="" disabled>
          Select ...
        </option>
        {usersList.map((user) => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}

      </select>
    </div>
  )
}
export default LoginScreen