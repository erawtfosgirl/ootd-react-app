import { Outlet } from "react-router-dom";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
