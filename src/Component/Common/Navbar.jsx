import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { NavbarData } from "../../data/data";

export const Navbar = () => {
  return (
    <div className="  sticky  top-0  md:top-12   z-50  flex flex-wrap w-full md:px-28 lg:px-44 px-2  py-5 shadow-sm items-center justify-between gap-2  bg-white-500">
      <div className=" md:w-32 md:h-10 w-28 h-8  ">
        <img
          src="https://www.taxbharo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-blue.f73a0aaf.png&w=1920&q=75"
          alt=""
        />
      </div>
      <div className=" gap-8 hidden md:flex">
        {NavbarData.map((item, index) => (
          <p
            className=" cursor-pointer hover:text-blue-500  font-medium text-black-600"
            key={index}
          >
            {item?.name}
          </p>
        ))}
      </div>

      <div className=" gap-4 items-center hidden md:flex">
        <Link
          to="#"
          className=" bg-blue-500 rounded-full text-white-500 px-4 pt-2 pb-3 "
        >
          Sign-up
        </Link>
        <Link className="text-black-600 font-medium ">Login</Link>
      </div>
      <div className="md:hidden block">
        <MenuIcon className="text-black-500" style={{ fontSize: "34px" }} />
      </div>
    </div>
  );
};
