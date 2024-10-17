import { motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start("flip").finally(() => controls.start("flipBack"));
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "80vh",
        gap: "0.8rem",
        backgroundColor: "#CCCFD3FF",
      }}
    >
      <button onClick={handleClick} className="example-button">
        Flip it!
      </button>
      <motion.div
        style={{
          width: 250,
          height: 250,
          //   background: "orangered",
          overflow: "hidden",
        }}
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
            transition: { duration: 5 },
          },
          flipBack: {
            rotate: "0deg",
            transition: { duration: 5 },
          },
        }}
        initial="initial"
        animate={controls}
      >
        <img
          src="https://picsum.photos/200/300"
          alt=""
          className="w-full object-cover object-center"
        />
      </motion.div>
    </div>
  );
};

export default AnimationControls;
