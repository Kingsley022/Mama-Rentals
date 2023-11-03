import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import usePriceFormat from "../../hooks/usePriceFormat";
import '../../styles/PropertyCard.css';

const PropertyCard = ({property,handleNextImg, handlePrevImg, handleFavorite}) => {
    const{formatPrice} = usePriceFormat();

    return (
        <div className="property">
            <div className="img-area">
                {property?.houseimages?.map((houseImg, index) => (
                    <img src={houseImg} alt="" key={index} className={index+1 === property?.currentImgIndex ? 'active-img' : ''}/>
                ))}
                <div className="type-n-heart">
                    <p className="type">{property?.type}</p>
                    {property?.isFav ? <BsSuitHeartFill className="icon" onClick={() => handleFavorite(property?.id)}/> : <BsSuitHeart className="icon" onClick={() => handleFavorite(property.id)}/>}
                </div>

                <div className="arrows">
                    {property?.currentImgIndex > 1 ? <div className="arrow" onClick={() =>handlePrevImg(property?.id)}>
                        <IoIosArrowBack/>
                    </div> : <div> </div>}

                    {property?.currentImgIndex < property?.houseimages?.length ? <div className="arrow" onClick={() =>handleNextImg( property?.id)}>
                        <IoIosArrowForward/>
                    </div> : <div> </div>}
                </div>

                <div className="circles">
                    {property?.houseimages.map((img, index) => (
                        <div className={`circle ${index+1 === property?.currentImgIndex ? "activeCircle" : ''}`} key={index}></div>
                    ))}
                </div>
            </div>
            <div className="txt-area">
                <div className="prize-n-country">
                    <p>{property?.state},{property?.country}</p>
                    <p className="price">₦{formatPrice(property?.price )}</p>
                </div>
                <p className="location">{property?.location}</p>
            </div>
        </div>
    );
}
 
export default PropertyCard;