import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BasicsOfMotion = () => {
  const [isVisable, setIsVisable] = useState(false);

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
      <motion.button
        className="example-button"
        onClick={() => {
          setIsVisable(!isVisable);
        }}
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisable && (
          <motion.div
            initial={{ rotate: "0deg", scale: 0, y: 0 }}
            animate={{ rotate: "180deg", scale: 1, y: [0, 150, -50, -50, 0] }}
            exit={{ rotate: "0deg", scale: 0, y: 0 }}
            transition={{
              duration: 3,
              ease: "backInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              //repeat: 3,
              // repeat: Infinity,
            }}
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "black",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
