import { motion } from "framer-motion";

const Square = ({ color }) => {
  return (
    <motion.li
      className={`aspect-square bg-neutral-300 dark:bg-neutral-800`}
      style={{
        backgroundColor: `${color}`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: Math.random() * (0.5 - 0.1 + 0.5) + 0.1 }}
    ></motion.li>
  );
};

export default Square;
