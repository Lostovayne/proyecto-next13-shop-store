import Menu from "./icons/Menu";

const Navbar = () => {
  return (
    <div>
      <Menu />
      <ul className="text-base hidden font-medium text-gray-800">
        <li>New Arrivals</li>
        <li>Shop</li>
        <li>About us</li>
      </ul>
    </div>
  );
};
export default Navbar;
