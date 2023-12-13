import { Outlet } from "react-router-dom";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";

import { SearchProvider } from "./context/SearchContext";
import { Search } from "./layout/Search";

function App() {
  return (
    <SearchProvider>
      <Header />
      <Outlet />
      <Search />
      <Footer />
    </SearchProvider>
  );
}

export default App;
