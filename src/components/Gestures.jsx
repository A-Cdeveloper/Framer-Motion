import { MotionConfig, motion } from "framer-motion";

const Gestures = () => {
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
      <MotionConfig transition={{ duration: 0.125, ease: "easeInOut" }}>
        <motion.button
          className="example-button"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.4, rotate: "2.5deg" }}
        >
          Click me
        </motion.button>

        <motion.button
          className="example-button"
          style={{ backgroundColor: "red" }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.4, rotate: "-2.5deg" }}
        >
          Click me
        </motion.button>
      </MotionConfig>
    </div>
  );
};
export default Gestures;
