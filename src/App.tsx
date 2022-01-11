import { Provider } from "react-redux";
import AppRouters from "./components/router/AppRouters";
import { store } from "./redux/store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouters />
      </Provider>
    </>
  );
}

export default App;
