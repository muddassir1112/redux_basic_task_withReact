import { Provider } from 'react-redux';
import './App.css';
import { Display } from './Display';
import store from './Store';

function App() {
  return (
    //store used to access the state
    <Provider store = {store}>
      <div className='App'>
      <Display/>
      </div>
      
    </Provider>
  );
}

export default App;
