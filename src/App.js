import Home from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./store/index.js"
import "./App.css";


function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
