import logo from './logo.svg';
import './App.css';
import { MainPage } from './UI/Main/MainPage';
import { Provider } from "react-redux";
import { store } from "./BLL/store";

function App() {
  return (
    <Provider store={store}>
    <div className="">
      <MainPage />
    </div>
    </Provider>
  );
}

export default App;
