export const InsightsCard = () => {
  return (
    <div className="bg-white shadow-lg p-4 cursor-pointer  rounded-lg  boxshadow">
      <div className="w-full h-44 md:h-52">
        <img
          className="w-full h-full object-fill rounded-md"
          src="https://www.taxbharo.in/_next/image?url=https%3A%2F%2Ftaxbharo-images.s3.us-east-1.amazonaws.com%2Fblogs%2F1716353749919.png&w=1920&q=75"
          alt="Service"
        />
      </div>
      <div className="mt-2 ">
        <span className="font-normal text-sm ">Service Title</span>
        <h3 className="font-bold text-md my-2">
          Why Startups need to follow compliance
        </h3>
        <p>
          In purus at morbi magna in in maecenas. Nunc nulla magna elit, varius
          phasellus blandit convallis.
        </p>
      </div>
    </div>
  );
};
