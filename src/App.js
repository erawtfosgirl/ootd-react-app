import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}

export default App;
