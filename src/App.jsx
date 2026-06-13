import Home from "./pages/Home";

import GradientOrbs from "./components/background/GradientOrbs";

import GridBackground from "./components/background/GridBackground";

import NoiseTexture from "./components/background/NoiseTexture";

import MouseSpotlight from "./components/background/MouseSpotlight";

import ScrollProgress from "./components/ui/ScrollProgress";

function App() {
  return (
    <div
      className="
      bg-[#0B0F19]
      min-h-screen
      text-white
      overflow-hidden
      relative
      "
    >
      {/* PROGRESS BAR */}

      <ScrollProgress />

      {/* BACKGROUND EFFECTS */}

      <GridBackground />

      <NoiseTexture />

      <GradientOrbs />

      <MouseSpotlight />

      {/* PAGE */}

      <Home />
    </div>
  );
}

export default App;