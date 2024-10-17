import { Business } from "./Business";
import { DownloadApp } from "./DownloadApp";
import { Insights } from "./Insights";
import { SearchBar } from "./SearchBar";
import { Service } from "./Service";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // Initial state (slide from the right)
      animate={{ opacity: 1, x: 0 }} // Animate to visible
      exit={{ opacity: 0, x: -100 }} // Exit with a slide to the left
      transition={{ duration: 0.5 }} // Transition time (same as the Home page)
      className="w-full md:px-28 lg:px-44  px-2 py-4"
    >
      <SearchBar />
      <Insights />
      <Service />
      <Business />
      <DownloadApp />
    </motion.div>
  );
};
