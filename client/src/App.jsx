import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen max-w-screen-2xl mx-auto ">
        <Outlet />
      </main>
      <footer>Fooooooooooter</footer>
    </>
  );
}

export default App;
