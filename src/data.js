import {RiFileList3Line} from 'react-icons/ri';
import {AiOutlinePropertySafety} from 'react-icons/ai';
import {BsFillHouseCheckFill} from 'react-icons/bs';
import {BiHelpCircle, BiLandscape, BiShareAlt} from 'react-icons/bi';
import { HiMenuAlt2 } from 'react-icons/hi';
import house1 from './assets/images/house4.jpg';
import house2 from './assets/images/house3.jpg';
import house3 from './assets/images/house8.png';
import house4 from './assets/images/interior4.jpg';
import house5 from './assets/images/house1.jpg';
import house6 from './assets/images/house2.webp';
import house7 from './assets/images/house5.jpg';
import house8 from './assets/images/interior2.jpg';








export const quickLinks = [
    {id:1, label:"List your property", icon: RiFileList3Line},
    {id:2, label:"Properties", icon: AiOutlinePropertySafety},
    {id:3, label:"Apartments", icon: BsFillHouseCheckFill},
    {id:4, label:"Lands", icon: BiLandscape}
];

export const navLinks = [
    // {id:1, label:"Accomodation", icon: SiHomeadvisor},
    {id:2, label:"Refer a friend", icon: BiShareAlt},
    {id:3, label:"Help", icon: BiHelpCircle},
];

export const filterLinks = [
    { 
        id: 1, 
        label: "More Filters", 
        icon: HiMenuAlt2, 
        dropDown: ['List Price', 'High to Price'],
        isDownActive: false,
    },
    { 
        id: 3, 
        label: "Location", 
        dropDown: ['Lagos', 'Owerri', 'Enugu', 'Abuja', 'Portherhourt'],
        isDownActive: false,
    },
    { 
        id: 2, 
        label: "Price", 
        dropDown: 'priceToggler',
        isDownActive: false,
    },
    { 
        id: 4, 
        label: "Category", 
        dropDown: ['Apartment', 'House', 'Land'],
        isDownActive: false,
    },
    { 
        id: 5, 
        label: "Type", 
        dropDown: ['Rental', 'Sell'],
        isDownActive: false,
    }
];

export const carouselImages =[
    {id:1, imgage: house1},
    {id:2, imgage: house2},
    {id:3, imgage: house3},
    {id:4, imgage: house4},
    {id:5, imgage: house5}
]

export const properties = [
    {
        id:1, 
        type:'Rental', 
        price: 550000,
        state: 'Enugu',
        country: 'Nigeria',
        location: 'Biks Estate Independence layout, Enugu',
        isFurnished: true,
        selfContained: true,
        basicFeatures: ['2-bed room', 'toilet', 'bathroom', 'kitchen'],
        houseimages:[house5, house6, house4, house5, house8],
        currentImgIndex: 1,
        isFav: false,
        category: 'Apartment'
    },
    {
        id:2, 
        type:'Sell', 
        price: 115000000,
        state: 'Owerri',
        country: 'Nigeria',
        location: 'Biks Estate, Independence layout',
        isFurnished: true,
        selfContained: true,
        basicFeatures: ['2-bed room', 'toilet', 'bathroom', 'kitchen'],
        houseimages:[house5, house6, house4, house5, house8],
        currentImgIndex: 1,
        isFav: false,
        category: 'House'
    },
    {
        id:3, 
        type:'Rental', 
        price: 330000,
        state: 'Lagos',
        country: 'Nigeria',
        location: 'Biks Estate, Independence layout',
        isFurnished: true,
        selfContained: true,
        basicFeatures: ['2-bed room', 'toilet', 'bathroom', 'kitchen'],
        houseimages:[house5, house6, house4, house5, house8],
        currentImgIndex: 1,
        isFav: false,
        category: 'Land'
    },
    {
        id:4, 
        type:'Rental', 
        price: 300000,
        state: 'Enugu',
        country: 'Nigeria',
        location: 'Biks Estate, Independence layout',
        isFurnished: true,
        selfContained: true,
        basicFeatures: ['2-bed room', 'toilet', 'bathroom', 'kitchen'],
        houseimages:[house5, house6, house4, house5, house8],
        currentImgIndex: 1,
        isFav: false,
        category: 'Land'
    },
    {
        id:5, 
        type:'Rental', 
        price: 300000,
        state: 'Enugu',
        country: 'Nigeria',
        location: 'Biks Estate, Independence layout',
        isFurnished: true,
        selfContained: true,
        basicFeatures: ['2-bed room', 'toilet', 'bathroom', 'kitchen'],
        houseimages:[house5, house6, house4, house5, house8],
        currentImgIndex: 1,
        isFav: false,
        category: 'Apartment'
    },
    {
        id:6, 
        type:'Rental', 
        price: 300000,
        state: 'Abuja',
        country: 'Nigeria',
        location: 'Biks Estate, Independence layout',
        isFurnished: true,
        selfContained: true,
        basicFeatures: ['2-bed room', 'toilet', 'bathroom', 'kitchen'],
        houseimages:[house5, house6, house4, house5, house8],
        currentImgIndex: 1,
        isFav: false,
        category: 'Apartment'
    },
    {
        id:7, 
        type:'Rental', 
        price: 300000,
        state: 'Enugu',
        country: 'Nigeria',
        location: 'Biks Estate, Independence layout',
        isFurnished: true,
        selfContained: true,
        basicFeatures: ['2-bed room', 'toilet', 'bathroom', 'kitchen'],
        houseimages:[house5, house6, house4, house5, house8],
        currentImgIndex: 1,
        isFav: false,
        category: 'House'
    },
    {
        id:8, 
        type:'Rental', 
        price: 300000,
        state: 'Lagos',
        country: 'Nigeria',
        location: 'Biks Estate, Independence layout',
        isFurnished: true,
        selfContained: true,
        basicFeatures: ['2-bed room', 'toilet', 'bathroom', 'kitchen'],
        houseimages:[house5, house6, house4, house5, house8],
        currentImgIndex: 1,
        isFav: false,
        category: 'House'
    }

]