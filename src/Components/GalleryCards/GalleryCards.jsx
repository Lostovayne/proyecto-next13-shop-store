import Cards from "../common/Card";

const GalleryCards = () => {
  return (
    <div className="border-t mt-10 px-5 ">
      <h2 className="text-center text-gray-800 font-medium uppercase py-3">
        Featured
      </h2>
      <div className="flex flex-wrap w-full ">
        <Cards>
          <img
            src="https://i.ibb.co/YLx3JF0/image.png"
            alt=""
            className="h-56 w-full object-cover"
          />
        </Cards>
        <Cards>
          <img
            src="https://i.ibb.co/FX18Fd0/person2.png"
            alt=""
            className="h-56 w-full object-cover"
          />
        </Cards>
        <Cards>
          <img
            src="https://i.ibb.co/TRBc3P8/person3.png"
            alt=""
            className="h-56 w-full object-cover"
          />
        </Cards>
        <Cards>
          <img
            src="https://i.ibb.co/M5NLKhD/person4.png"
            alt=""
            className="h-56 w-full object-cover"
          />
        </Cards>
      </div>
    </div>
  );
};
export default GalleryCards;
