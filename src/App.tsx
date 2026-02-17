import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

export default function App(): JSX.Element {
  const [page, setPage] = useState<string>("home");

  return (
    <>
      <header className="header">
        <h1>Organización del Framework - React</h1>
      </header>

      <Navbar setPage={setPage} />

      <main className="container">
        {page === "home" && <Home />}
        {page === "about" && <About />}
      </main>
    </>
  );
}