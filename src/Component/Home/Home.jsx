import { Business } from "./Business";
import { Insights } from "./Insights";
import { SearchBar } from "./SearchBar";
import { Service } from "./Service";

export const Home = () => {
  return (
    <div className="w-full md:px-28 lg:px-44  px-2 py-4">
      <SearchBar />
      <Insights />
      <Service />
      <Business />
    </div>
  );
};
