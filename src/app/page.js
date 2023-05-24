import Carrousel from "@/Components/Carrousel/Carrousel";
import CardsCategoria from "@/Components/Categorias_Principal/CardsCategoria";
import Footer from "@/Components/Footer/Footer";
import GalleryCards from "@/Components/GalleryCards/GalleryCards";
import Header from "@/Components/Header/Header";

const page = () => {
  return (
    <div className="">
      <main className="container mx-auto ">
        <Header />
        <Carrousel />
        <h2 className="text-center text-gray-600 font-medium uppercase pt-3">
          parks and recreation
        </h2>
        <p className="underline text-gray-400 font-medium text-xs text-center py-2">
          SHOP NEW
        </p>
        <CardsCategoria />
        <GalleryCards />
        <Footer />
      </main>
    </div>
  );
};
export default page;
