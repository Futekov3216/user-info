import './App.css';
import Wrapper from './components/Wrapper'
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Wrapper />
      </div>
    </Provider>
  );
}

export default App;
