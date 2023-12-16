import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { store } from "./redux/store";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <Provider store={store}>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}

export default App;
