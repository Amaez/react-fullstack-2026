import "./App.css";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { TopBar } from "./components/TopBar";

function App() {
  return (
    <>
      <div className="app-background">
        <TopBar />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}

export default App;
