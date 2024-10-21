import HighlightOffIcon from "@mui/icons-material/HighlightOff";
export const Disclaimer = ({ onClick }) => {
  return (
    <div className=" absolute  md:w-[80%]  w-[98%] md:h-[80vh] h-[60vh] md:pt-0  overflow-auto flex flex-col z-50 items-center justify-center  bg-white-500 shadow-lg  rounded-2xl py-10 px-10">
      <h1 className="text-2xl font-bold text-black-500 mb-8 md:mt-0 mt-[810px]">Disclaimer </h1>
      <HighlightOffIcon
        onClick={onClick}
        className=" absolute  top-2 right-2 md:top-6 md:right-16 cursor-pointer transform transition-transform  duration-100 animate-bounce  hover:shadow-lg  rounded-full  "
        style={{ width: "36px", height: "36px" }}
      />

      <p className="text-lg text-black-400">
        The information contained in this website is for general information
        purposes only. The information is provided by www.taxbharo.in, a
        property of Taxbharo. While we endeavour to keep the information up to
        date and correct, we make no representations or warranties of any kind,
        express or implied, about the completeness, accuracy, reliability,
        suitability or availability with respect to the website or the
        information, products, services, or related graphics contained on the
        website for any purpose. Any reliance you place on such information is
        therefore strictly at your own risk.
      </p>
      <br />
      <p className="text-lg text-black-400">
        In no event will we be liable for any loss or damage including without
        limitation, indirect or consequential loss or damage, or any loss or
        damage whatsoever arising from loss of data or profits arising out of,
        or in connection with, the use of this website.
      </p>
      <br />
      <p className="text-lg text-black-400">
        Through this website you are able to link to other websites which are
        not under the control of Taxbharo. We have no control over the nature,
        content and availability of those sites. The inclusion of any links does
        not necessarily imply a recommendation or endorse the views expressed
        within them.
      </p>
      <br />
      <p className="text-lg text-black-400">
        Every effort is made to keep the website up and running smoothly.
        However, Taxbharo takes no responsibility for, and will not be liable
        for, the website being temporarily unavailable due to technical issues
        beyond our control.
      </p>
    </div>
  );
};