import '../../styles/PriceToggler.css';
import { useContext, useState } from 'react';
import usePriceFormat from '../../hooks/usePriceFormat';
import { AppContext } from '../../routes/SyetemRoutes';

const PriceToggler = ({ isActive, highestPrice, lowestPrice}) => {

  const {setProperties, properties} = useContext(AppContext);
  const{formatPrice} = usePriceFormat();
  const[selectedPrice, setSelectedPrice] = useState(lowestPrice);

  // Handle price Change
  const handleSliderChange = (event) => {
    const selectedValue = parseInt(event.target.value);
    const newValue = Math.min(selectedValue + 50, highestPrice);
    setSelectedPrice(newValue);
    const newProperty = properties.filter(property => property.price <= selectedPrice);
    setProperties(newProperty);
  };


  return (
    <div className={`price-toggler-container ${isActive && 'togglerActive'}`}>
        {/* <p>₦{formatPrice(selectedPrice)}</p> */}
      <p>₦{formatPrice(lowestPrice)}</p>
      <input
        type="range"
        id="vol"
        name="vol"
        min={lowestPrice}
        max={highestPrice}
        value={selectedPrice}
        onChange={handleSliderChange}
      />
      <p>₦{formatPrice(highestPrice)}</p>
    </div>
  );
};

export default PriceToggler;
