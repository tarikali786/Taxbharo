import { BusinessData } from "../../data/data";

export const Business = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 my-14 ">
      {BusinessData?.map((item, index) => (
        <div key={index} className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-blue-500 ">{item?.value}</h1>
          <h3 className="text-xl font-semibold text-black-500 my-2">{item?.title}</h3>
          <p className="text-black-300" >{item?.description}</p>
        </div>
      ))}
    </div>
  );
};
