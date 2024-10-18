import AnimationControls from "./components/AnimationControls";
import BasicsOfMotion from "./components/BasicsOfMotion";
import Gestures from "./components/Gestures";
import ViewBasedAnimations from "./components/ViewBaseAnimaions";

function App() {
  return (
    <>
      <h1 className="text-3xl mb-4 text-center font-bold">Framer motion</h1>
      <div className="container max-w-3xl mx-auto bg-slate-50 p-5 text-center">
        {/* <BasicsOfMotion /> */}
        {/* <Gestures /> */}
        {/* <AnimationControls /> */}
        <ViewBasedAnimations />
      </div>
    </>
  );
}

export default App;
