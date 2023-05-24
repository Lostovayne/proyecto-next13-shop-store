import Image from "next/image";
import Navbar from "./Navbar";
import SobreNavbar from "./SobreNavbar";
import Iconos from "./Iconos";

const Header = () => {
  return (
    <>
      <div>
        <SobreNavbar />
      </div>
      <div className="flex items-center justify-between px-4 py-2 ">
        <Navbar />
        <Image src="/logo.png" alt="logo" width={150} height={150} />
        <Iconos />
      </div>
      <hr className="border border-gray-200/50 mt-3" />
    </>
  );
};
export default Header;
