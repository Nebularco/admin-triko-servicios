import Box from "@mui/material/Box/Box";
import { Provider } from "react-redux";
import AppRouters from "./components/router/AppRouters";
import { store } from "./redux/store/store";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Provider store={store}>
        <AppRouters />
      </Provider>
    </Box>
  );
}

export default App;
