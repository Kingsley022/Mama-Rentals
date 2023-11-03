import Navbar from "../components/common/Navbar";
import '../styles/home.css';
import house2 from '../assets/images/house2.webp';
import house3 from '../assets/images/interior2.jpg';
import { useContext, useEffect, useState } from "react";
import { carouselImages} from "../data";

import { AppContext } from "../routes/SyetemRoutes";
import PropertyCard from "../components/home/PropertyCard";

const Home = () => {
    const{properties, setProperties} = useContext(AppContext);
    const[carouselImgs, setCarouselImgs] = useState(carouselImages);
    const[currentIndex, setCurrentIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if(currentIndex < carouselImgs.length){
                setCurrentIndex(prev => prev + 1)
            }else{
                setCurrentIndex(1);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);



    // Handle Favorite
    const handleFavorite = id => {
        const newProperties = properties.map(property => {
            if(property.id === id){
                return {...property, isFav : !property.isFav}
            }else{
                return {...property, isFav : property.isFav}
            }
        });
        setProperties(newProperties);
    };

    // Handle Card Image nexting
    const handlePrevImg = (imgId) => {
        const newProperties = properties.map((property) => {
            if (property.id === imgId && property.currentImgIndex > 1) {
                const newIndex = property.currentImgIndex -1;
                return { ...property, currentImgIndex: newIndex };
            } else {
                return { ...property };
            }
        });
    
        setProperties(newProperties);
    }
   
    const handleNextImg = (imgId) => {
        const newProperties = properties.map((property) => {
            if (property.id === imgId && property.currentImgIndex < property.houseimages.length) {
                const newIndex = property.currentImgIndex + 1;
                return { ...property, currentImgIndex: newIndex };
            } else {
                return { ...property };
            }
        });
    
        setProperties(newProperties);
    };
    
    

    return (
       <>
        <Navbar/>
        <div className="carousel-container">
            <div className="house-carousel">
                {carouselImgs.map((img, index) => (
                    <img className={index+1 === currentIndex ? 'activeImg' : ''} src={img.imgage} alt='' key={img.id}/>
                ))}

                <div className="circles">
                    {carouselImgs.map((img, index) => (
                        <div className={`circle ${index+1 === currentIndex && 'activeCircle'}`} key={img.id}></div>
                    ))}
                </div>
            </div>

            <div className="single-houses">
                <div className="img-container">
                    <img src={house2} alt=''/>
                </div>
                <div className="img-container">
                    <img src={house3} alt=''/>
                </div>
            </div>
        </div>

        <div className="properties-container">
            <div className="subHead-container">
                <p className="sub-head"><i className="fa">~</i>  Find your dream home  <i className="fa">~</i></p>
                <p className="sub-txt">Discover elegance and comfort in our charming properties, with top-notch facilities</p>
            </div>
            <div className="properties">
                {properties?.map(property => (
                    <PropertyCard 
                        key={property?.id}
                        property={property}
                        handleNextImg={handleNextImg}
                        handlePrevImg={handlePrevImg}
                        handleFavorite={handleFavorite}
                    />
                ))}
            </div>
        </div>
       </>
    );
}
 
export default Home;