const Card = ({ children }) => {
  return (
    <div className="w-2/4 p-1">
      {children}
      <div className="flex justify-between">
        <p className="w-3/4 text-sm font-medium text-gray-700">
          Flowe on Sleeves Dress
        </p>
        <p className="text-sm text-gray-600">$20.00</p>
      </div>
    </div>
  );
};
export default Card;
