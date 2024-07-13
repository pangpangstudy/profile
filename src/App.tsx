import { lazy } from "react";
import "./App.css";
import ImageFollowMouse from "./components/ImageFollowMouse";
const EasterEgg = lazy(() => import("./components/EasterEgg"));
function App() {
  return (
    <main className="overflow-hidden w-full min-h-screen">
      <EasterEgg />
      <ImageFollowMouse />
    </main>
  );
}

export default App;
