import Image from "next/image";

const CardsCategoria = () => {
  return (
    <>
      <div className="mt-4">
        <Image
          src="https://i.ibb.co/19jjjDj/persona1.png"
          alt="persona1"
          width={600}
          height={600}
          className="w-full px-4 rounded"
        />
        <p className="text-center text-gray-600 font-medium uppercase py-2">
          leaning in{" "}
        </p>
        <p className="text-center text-gray-300 underline uppercase text-sm">
          shop dresses
        </p>
      </div>
      <div className="mt-4">
        <Image
          src="https://i.ibb.co/tHsYHC4/persona2.png"
          alt="persona1"
          width={600}
          height={600}
          className="w-full px-4 rounded"
        />
        <p className="text-center text-gray-600 font-medium uppercase py-2">
          all over velvet
        </p>
        <p className="text-center text-gray-300 underline uppercase text-sm">
          shop back-in-stock
        </p>
      </div>
    </>
  );
};
export default CardsCategoria;
