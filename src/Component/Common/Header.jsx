import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
export const Header = () => {
  return (
    <div className="bg-blue-500 z-50 justify-between w-full md:px-28 lg:px-44  px-4 py-3 text-white-500 md:flex hidden  sticky top-0 ">
      <div className="text-sm flex items-center gap-1  tracking-wide">
        <LocationOnIcon />
        Hydreabad | Delhi | Mumbai | Bangalore
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm flex items-center gap-1 tracking-wide">
          <EmailIcon />
          info@taxbharo.in
        </div>
        <div className="text-sm flex items-center gap-1 tracking-wide">
          <CallIcon />
          +100020002000
        </div>
      </div>
    </div>
  );
};
