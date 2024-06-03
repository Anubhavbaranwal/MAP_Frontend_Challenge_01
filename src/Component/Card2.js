const Card = ({ image, title, location, date, price }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 w-64 relative group">
        <img src={image} alt={title} className="w-full h-auto object-cover transform group-hover:scale-110 transition duration-500 ease-in-out" style={{ aspectRatio: '4/5' }} />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-gray-200 mb-2">{location}</p>        
          </div>
        </div>
      </div>
      
    );
  };
  
  export default Card;