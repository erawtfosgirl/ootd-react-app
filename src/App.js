import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { UserProvider } from "./context/UserProvider";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { store } from "./redux/store";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <UserProvider>
      <Provider store={store}>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </UserProvider>

  );
}

export default App;
