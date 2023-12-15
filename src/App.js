import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Search } from "./layout/Search";
import { SearchProvider } from "./context/SearchContext";
import { store } from "./redux/store";

function App() {
  return (
    <SearchProvider>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Search />
        <Footer />
      </Provider>
    </SearchProvider>
  );
}

export default App;
