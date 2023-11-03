import React, { useContext, useEffect, useState } from "react";
import {navLinks, properties, quickLinks} from '../../data';
import logo from '../../assets/images/logo.png'
import {FaSearch} from 'react-icons/fa';
import { BiUser } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";
import { filterLinks as filters, properties as initailState} from './../../data';
import PriceToggler from "./PriceToggler";
import { AppContext } from "../../routes/SyetemRoutes";
import '../../styles/Navbar.css';


const Navbar = () => {
    const [topLinks, setTopLinks] = useState(quickLinks);
    const [navBars, setNavBars] = useState(navLinks);
    const [filterLinks, setFilterLinks] = useState(filters);
    const [isActive, setIsActive] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const {setProperties, properties} = useContext(AppContext);
    const [isWindowActive, setIsWindowActive] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const isScroll = window.scrollY > 25;
            setIsWindowActive(isScroll);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getHighestAndLowestPrices = () => {
        let highestPrice = -Infinity;
        let lowestPrice = Infinity;
      
        for (const property of properties) {
          if (property.price > highestPrice) {
            highestPrice = property.price;
          }
      
          if (property.price < lowestPrice) {
            lowestPrice = property.price;
          }
        }
      
        return { highestPrice, lowestPrice };
    };
    const{highestPrice, lowestPrice} = getHighestAndLowestPrices();

    // Handle Search
    const handleSearch = () => {
        const searchTerm = searchInput.toLowerCase();
        const filtered = properties.filter(property =>
          property.location.toLowerCase().includes(searchTerm) ||
          property.state.toLowerCase().includes(searchTerm) ||
          property.country.toLowerCase().includes(searchTerm)
        );
        setProperties(filtered);
      };

    // Handles Selected Dropdown
    const handleFilterToggle = (linkId) =>{
        const filters = filterLinks.map(filterLink => {
            if(filterLink.id === linkId){
                return {...filterLink, isDownActive: !filterLink.isDownActive}
            }
            else{
                return {...filterLink, isDownActive: false}
            }
        });

        setFilterLinks(filters);
    }

    // Handles Filtering
    const handleFiltering = (filterOption) => {
        const handleAscendindAndDescending =(ascending) => {
            const sortedProperties = [...properties].sort((a, b) => {
                return ascending ? a.price - b.price : b.price - a.price;
            });    
            setProperties(sortedProperties)
        }

        const sortByLocation = (location) => {
            const filteredProperties = initailState.filter(property => property.state === location);
            setProperties(filteredProperties);
        }

        const sortByCategory = (category) => {
            const filteredCategory = properties.filter(property => property.category === category);
            setProperties(filteredCategory);
        }

        const sortByType = (type) => {
            const filteredType = properties.filter(property => property.type === type);
            setProperties(filteredType);
        }


        switch (filterOption){
            case 'List Price':
                handleAscendindAndDescending(true); // Ascending order
                break;
            case 'High to Price':
                handleAscendindAndDescending(false); // Descending order
                break;
            case 'Enugu':
            case 'Lagos':
            case 'Abuja':
            case 'Owerri':
            case 'Portherhourt':
                sortByLocation(filterOption); // Sort by Location
                break  
            case 'Land':
            case 'House':
            case 'Apartment':
                sortByCategory(filterOption); // Sort by Category
                break 
            case 'Sell':
            case 'Rental':
                sortByType(filterOption); // Sort by Type
                break          
            default:
                break;
        }
        
    };


    return (
        <div className={`navbar ${isWindowActive ? 'window-active': ''}`}>
            <div className="top-menu">
                {topLinks.map((link) => (
                    <div className="link" key={link.id}>
                        {React.createElement(link.icon)}
                        <p key={link.id}>{link.label.toLocaleUpperCase()}</p>
                    </div>
                ))}
            </div>
            <div className="main-menu">
                <img src={logo} alt='' />

                <div className="search-container">
                    <div className="input-container">
                        {<FaSearch color="#adacac"/>}
                        <input 
                            type="search" 
                            placeholder="Search Location, City or Property"
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                        />
                    </div>
                    <button onClick={handleSearch}>SEARCH</button>
                </div>

                <div className="links">
                    {navBars.map(link => (
                        <div className="link" key={link.id}>
                            {React.createElement(link.icon, { style: { color: '#aab5aa' }})}
                            <p>{link.label}</p>
                        </div>
                    ))}
                    {isActive ? <div className="link"> <BiUser color="#aab5aa"/><p>Account</p></div> : <div className="link"><FiLogIn color="#aab5aa"/><p>Login</p></div>}
                </div>
            </div>

            <div className="filter-menu">
                {filterLinks.map(link => (
                <div className='link' key={link?.id} onClick={() => handleFilterToggle(link?.id)}>
                    {link?.icon && <link.icon/>}
                    <p>{link?.label}</p>
                    {link?.isDownActive ? <MdKeyboardArrowUp style={{ transform: "scale(1.2, 1)" }} />: <MdKeyboardArrowDown style={{ transform: "scale(1.2, 1)" }} />}
                    {link?.dropDown === 'priceToggler' ? (
                        <PriceToggler 
                            isActive={link?.isDownActive}
                            highestPrice={highestPrice}
                            lowestPrice={lowestPrice}

                        />
                        ) :
                    <div className={`dropDown-container ${link?.isDownActive && 'dropDown-active'}`}>
                        {Array.isArray(link?.dropDown) && link?.dropDown.map((dDown, index) => (
                            <p key={index} onClick={() => handleFiltering(dDown)}>{dDown}</p>
                        ))}
                    </div>
                    }
                </div>
                ))}
            </div>
            
        </div>
    );
}
 
export default Navbar;