import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { userAction } from './redux/action/userAction';

function App() {
  const dispatch = useDispatch()
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
