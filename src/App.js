import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userAPI from './apis/user';
import './App.css';
import { userAction } from './redux/action/userAction';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const getUser = async () => {
      const result = await userAPI.getMe()
      console.log(result)
    }
    getUser()
  }, [])
  const state = useSelector(state => state);
  console.log(state)

  return (
    <div>
      <button onClick={() => dispatch({ type: userAction.FETCH_DATA_SAGA })}>
        Getdata
      </button>
    </div>
  );
}

export default App;
