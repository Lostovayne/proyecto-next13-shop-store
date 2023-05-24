const Footer = () => {
  return (
    <div className="mt-10 py-6 bg-[#F7F7F7]">
      <div className="flex flex-col gap-4  px-5">
        <input
          type="email"
          placeholder="Email"
          className="outline-none border-b-2 border-gray-500 bg-transparent text-gray-500 py-1 px-2"
        />
        <button className="bg-black text-white font-medium py-3.5 rounded-md ">
          Sign Up!
        </button>
      </div>
    </div>
  );
};
export default Footer;
