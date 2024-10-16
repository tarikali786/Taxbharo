export const Footer = () => {
  return (
    <div className="w-full md:px-28 lg:px-44  px-4 py-12 bg-blue-500 flex justify-between gap-2 md:items-center flex-wrap flex-col md:flex-row">
      <div className=" w-44 md:h-14  ">
        <img
          src="https://www.taxbharo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.6272d145.png&w=1920&q=75"
          alt=""
        />
      </div>
      <div>
        <p className="text-white-500 text-md py-1">Home</p>
        <p className="text-white-500 text-md py-1">About Taxbharo</p>
        <p className="text-white-500 text-md py-1">Get in touch</p>
        <p className="text-white-500 text-md py-1">FAQs</p>
      </div>
      <div>
        <p className="text-white-500 text-md py-1">Services</p>
        <p className="text-white-500 text-md py-1">Testimonials</p>
        <p className="text-white-500 text-md py-1">How it works</p>
        <p className="text-white-500 text-md py-1">Member Discounts</p>
      </div>
      <div className="flex items-center  mt-4 md:mt-0 rounded-sm overflow-hidden ">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your email Address"
          className="border-none outline-none py-2 px-2"
        />
        <p className="bg-black-100 px-2 text-black-500 py-2">Subscribe</p>
      </div>
    </div>
  );
};
