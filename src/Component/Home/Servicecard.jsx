export const ServiceCard = ({ item }) => {
  return (
    <div className="bg-blue-100 shadow-lg p-4 cursor-pointer  rounded-lg  boxshadow md:flex  justify-between  ">
      <div className="md:w-1/2">
        <h3 className="font-semibold text-xl mb-2 text-black-500">
          {item?.title}
        </h3>
        <p className="text-black-400 leading-5">{item?.description}</p>
      </div>
      <div className="md:w-1/2 h-28 md:h-52 md:flex align-bottom   ">
        <img
          className="w-full h-full  rounded-md bg-transparent "
          src={item?.img}
          alt="Service"
        />
      </div>
    </div>
  );
};
