import { create } from "zustand";
import package1 from '../assets/packages/pack1.jpg'
import package2 from '../assets/packages/pack2.jpg'
import package3 from '../assets/packages/pack3.jfif'
import package4 from '../assets/packages/pack4.jpg'
import package5 from '../assets/packages/pack5.jfif'
import package6 from '../assets/packages/pack6.jfif'
import package7 from '../assets/packages/pack7.jfif'
import package8 from '../assets/packages/pack8.jfif'
import package9 from '../assets/packages/pack9.jpg'
import package10 from '../assets/packages/pack10.jpg'
import package11 from '../assets/packages/pack11.jpg'
import package12 from '../assets/packages/pack12.jpg'
import package13 from '../assets/packages/pack13.jpg'
import package14 from '../assets/packages/pack14.jpg'
import package15 from '../assets/packages/pack15.jpeg'
import package16 from '../assets/packages/pack16.jpg'
import package17 from '../assets/packages/pack17.jpg'
import package18 from '../assets/packages/pack18.jpg'
import package19 from '../assets/packages/pack19.jpg'
import package20 from '../assets/packages/pack20.jfif'
import package21 from '../assets/packages/pack21.jpg'
import package22 from '../assets/packages/pack22.jpg'
import package23 from '../assets/packages/pack23.jpg'
import package24 from '../assets/packages/pack24.jpg'
// Product store
interface Product {
    id: number;
    title: string;
    price: number;
    Detail: string;
    Description: string;
    image?: string; 
  }
  
  interface ProductData {
    product: Product[];
  }
  type State = {
    firstName: string
    email: string
    Destination:string
    // count:number
  }
  
  type Action = {
    updateFirstName: (firstName: State['firstName']) => void
    updateEmail: (email: State['email']) => void
    updateDestination: (Destination: State['Destination']) => void
  }
  export const usePersonStore = create<State & Action>((set) => ({
    firstName: '',
    email: '',
    Destination:'',
    // count:'',
    updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
    updateEmail: (email) => set(() => ({ email: email })),
    updateDestination: (Destination) => set(() => ({ Destination: Destination })),
    
  }))
  export const ProductStore = create<ProductData>((set) => ({
    product: [
      {
        id: 0,
        image: package1,
        title: 'Kashmir, India',
        price: 12000,
        Detail: '3 nights and 4 days. Including Stay, travel, and food.',
        Description:
          'Enjoy the breathtaking beauty of Kashmir with this 4-day, 3-night package. The package includes a stay in luxury hotels, guided tours of Srinagar, Gulmarg, and Pahalgam, and all meals. Experience the serene Dal Lake, stunning Mughal gardens, and snow-capped mountains. The package also covers transportation, including a houseboat stay and shikara rides on Dal Lake.',
      },
      {
        id: 1,
        image: package2,
        title: 'Munnar, India',
        price: 10000,
        Detail: '2 nights and 3 days. Including Stay, travel, and food.',
        Description:
          'Explore the lush green tea gardens and rolling hills of Munnar with this 3-day, 2-night package. The package includes accommodation in a hill resort, guided tours of the tea plantations, and visits to the Eravikulam National Park and Mattupetty Dam. All meals are included, along with transportation from Cochin to Munnar and back.',
      },
      {
        id: 2,
        image: package3,
        title: 'Taj Mahal, India',
        price: 27000,
        Detail: '2 nights and 3 days - Including Stay, travel and food.',
        Description:
          'Discover the wonder of the Taj Mahal with this 3-day, 2-night package. Stay in a 5-star hotel in Agra and enjoy guided tours of the Taj Mahal, Agra Fort, and Fatehpur Sikri. The package includes all meals, entrance fees, and transportation from Delhi to Agra and back.',
      },
      {
        id: 3,
        image: package4,
        title: 'Mysore, India',
        price: 20000,
        Detail: '2 nights, 3 days - Includes stay and travel.',
        Description:
          'Dive into the cultural heritage of Mysore with this 3-day, 2-night package. Stay in a heritage hotel and enjoy guided tours of Mysore Palace, Chamundi Hill, and Brindavan Gardens. The package includes breakfast and dinner, as well as transportation from Bangalore to Mysore and back.',
      },
      {
        id: 4,
        image: package5,
        title: 'Ooty&Kodaikonal, India',
        price: 15000,
        Detail: '3 nights, 4 days - Includes stay and travel.',
        Description:
          'Experience the charm of Ooty and Kodaikanal with this 4-day, 3-night package. Stay in colonial-style hill resorts, enjoy scenic drives through tea plantations, and visit the famous Botanical Gardens and Kodaikanal Lake. The package includes all meals, transportation, and sightseeing tours.',
      },
      {
        id: 5,
        image: package6,
        title: 'Manali, India',
        price: 37000,
        Detail: '4 nights, 5 days - Includes stay, travel, and meals.',
        Description: 'Escape to the mountains with this 5-day, 4-night package in Manali. Stay in a cozy mountain resort, explore the Rohtang Pass, Solang Valley, and Hadimba Temple. Enjoy adventure activities like paragliding and river rafting. The package includes all meals, transportation, and guided tours.'
    },
    {
        id: 6,
        image: package7,
        title: 'Ladakh, India',
        price: 17000,
        Detail: '3 nights, 4 days - Includes stay, travel, and meals.',
        Description: 'Embark on an adventurous journey to Ladakh with this 4-day, 3-night package. Stay in Leh and explore the stunning landscapes of Nubra Valley, Pangong Lake, and monasteries like Hemis and Thiksey. The package includes all meals, transportation, and permits for restricted areas.'
    },
    {
        id: 7,
        image: package8,
        title: 'Megalaya, India',
        price: 24000,
        Detail: '4 nights, 5 days - Includes stay, travel, and meals.',
        Description: 'Discover the natural wonders of Meghalaya with this 5-day, 4-night package. Stay in Shillong and Cherrapunjee, explore the living root bridges, visit the Seven Sisters Falls, and enjoy a boat ride on the crystal-clear waters of Dawki. The package includes all meals, transportation, and guided tours.'
    },  
   {
        id: 8,
        image: package9,
        title: 'Sicily, Italy',
        price: 50000,
        Detail: '5 nights, 6 days - Includes stay, travel, and meals.',
        Description: 'Immerse yourself in the rich culture and history of Sicily with this 6-day, 5-night package. Explore the ancient ruins of Agrigento, the stunning beaches of Taormina, and the lively markets of Palermo. Stay in boutique hotels, enjoy authentic Sicilian cuisine, and experience guided tours and wine tastings. The package includes all meals, transportation, and entrance fees.'
    }, 
    {
       id: 9,
       image: package10,
       title: 'Rome, Italy',
       price: 65000,
       Detail: '4 nights, 5 days - Includes stay, travel, and meals.',
        Description: "Explore the eternal city of Rome with this 5-day, 4-night package. Stay in a central hotel and enjoy guided tours of the Colosseum, Vatican City, and the Roman Forum. Experience the city's vibrant culinary scene with included meals at traditional Roman trattorias. The package also includes transportation and skip-the-line tickets to major attractions."
   }, 
   {
       id: 10,
       image: package11,
       title: 'Amalfi Coast, Italy',
       price: 75000,
       Detail: '5 nights, 6 days - Includes stay, travel, and meals.',
       Description: 'Experience the breathtaking beauty of the Amalfi Coast with this 6-day, 5-night package. Stay in a luxury hotel overlooking the Mediterranean, visit picturesque towns like Positano and Ravello, and enjoy a boat trip to Capri. The package includes all meals, transportation, and guided tours.'
    },
   {
    id: 11,
    image: package12,
    title: 'Tuscany, Italy',
    price: 25000,
    Detail: '3 nights, 4 days - Includes stay and travel.',
    Description: 'Explore the rolling hills and vineyards of Tuscany with this 4-day, 3-night package. Stay in a charming countryside villa, visit the historic towns of Florence and Siena, and enjoy wine tastings in the Chianti region. The package includes all meals, transportation, and guided tours.'
   },
   {
    id: 12,
    image: package13,
    title: 'Effile Tower, Paris',
    price: 45000,
    Detail: '4 nights, 5 days - Includes stay, travel, and meals.',
    Description: 'Discover the romantic city of Paris with this 5-day, 4-night package. Stay in a boutique hotel near the Eiffel Tower, enjoy guided tours of the Louvre, Notre-Dame, and Montmartre, and dine in charming French bistros. The package includes all meals, transportation, and skip-the-line access to major attractions.'
   },
   {
    id: 13,
    image: package14,
    title: 'Louvre Museum, paris',
    price: 50000,
    Detail: '4 nights, 5 days - Includes stay, travel, and meals.',
    Description: 'Delve into the art and history of Paris with this 5-day, 4-night package. Stay in a stylish hotel in the heart of the city, enjoy guided tours of the Louvre, Orsay Museum, and Versailles Palace, and savor gourmet French cuisine. The package includes all meals, transportation, and entrance fees.'
   },
     {
      id: 14,
      image: package15,
      title: 'Chichen itza,Mexico',
      price: 35000,
      Detail: '3 nights, 4 days - Includes stay, travel, and meals.',
      Description: 'Explore the ancient Mayan ruins of Chichén Itzá with this 4-day, 3-night package. Stay in a luxury resort near the site, enjoy guided tours of the pyramids and temples, and relax in the nearby cenotes. The package includes all meals, transportation, and entrance fees.'
     },
     {
      id: 15,
      image: package16,
      title: 'Rio secreto, Mexico',
      price: 30000,
      Detail: '3 nights, 4 days - Includes stay, travel, and meals.',
      Description: 'Discover the underground river and caves of Rio Secreto with this 4-day, 3-night package. Stay in a beachfront resort, enjoy guided tours of the caves, and relax on the pristine beaches of Playa del Carmen. The package includes all meals, transportation, and guided tours.'
     },
     {
      id: 16,
      image: package17,
      title: 'Bankok city, Tailand',
      price: 38000,
      Detail: '4 nights, 5 days - Includes stay, travel, and meals.',
      Description: 'Immerse yourself in the vibrant city of Bangkok with this 5-day, 4-night package. Stay in a luxury hotel, explore the Grand Palace, Wat Arun, and floating markets, and enjoy Thai culinary delights. The package includes all meals, transportation, and guided tours.'
     },
     {
      id: 17,
      image: package18,
      title: 'Phuket, Tailand',
      price: 37000,
      Detail: '4 nights, 5 days - Includes stay, travel, and meals.',
      Description: 'Experience the tropical paradise of Phuket with this 5-day, 4-night package. Stay in a beachfront resort, explore the Phi Phi Islands, and enjoy water activities like snorkeling and kayaking. The package includes all meals, transportation, and guided tours.'
     },
     {
      id: 18,
      image: package19,
      title: 'Kyoto, Japan',
      price: 34000,
      Detail: '3 nights, 4 days - Includes stay, travel, and meals.',
      Description: 'Discover the cultural heritage of Kyoto with this 4-day, 3-night package. Stay in a traditional ryokan, explore ancient temples and gardens, and experience a traditional tea ceremony. The package includes all meals, transportation, and guided tours.'
     },
     {
      id: 19,
      image: package20,
      title: 'Mount Fuji,Japan',
      price: 42000,
      Detail: '4 nights, 5 days - Includes stay, travel, and meals.',
      Description: 'Experience the iconic Mount Fuji with this 5-day, 4-night package. Stay in a lakeside resort, enjoy guided hikes around the mountain, and visit the nearby Hakone hot springs. The package includes all meals, transportation, and guided tours.'
     },
     {
      id: 20,
      image: package21,
      title: 'Gardens by the bay, Singapore',
      price: 28000,
      Detail: '3 nights, 4 days - Includes stay and travel.',
      Description: 'Explore the futuristic landscapes of Gardens by the Bay with this 4-day, 3-night package. Stay in a luxury hotel in Marina Bay, enjoy guided tours of the Supertree Grove and Cloud Forest, and experience the vibrant city life of Singapore. The package includes all meals, transportation, and entrance fees.'
     },
     {
      id: 21,
      image: package22,
      title: 'Singapore Flyer, Singapore',
      price: 17000,
      Detail: '2 nights, 3 days - Includes stay and travel.',
      Description: 'Take in the stunning cityscape of Singapore with this 3-day, 2-night package. Stay in a boutique hotel, enjoy a ride on the Singapore Flyer, and explore the nearby attractions of Marina Bay Sands and Merlion Park. The package includes all meals, transportation, and entrance fees.'
     },
     {
      id: 22,
      image: package23,
      title: 'Gyeongbokgung Palace, Korea',
      price: 44000,
      Detail: '3 nights, 4 days - Includes stay, travel, and meals.',
      Description: 'Discover the history and culture of Seoul with this 4-day, 3-night package. Stay in a luxury hotel, explore the Gyeongbokgung Palace and Bukchon Hanok Village, and enjoy traditional Korean cuisine. The package includes all meals, transportation, and guided tours.'
     },
     {
      id: 23,
      image: package24,
      title: 'Busan, Korea',
      price: 22000,
      Detail: '3 nights, 4 days - Includes stay, travel, and meals.',
      Description: 'Experience the coastal city of Busan with this 4-day, 3-night package. Stay in a beachfront hotel, explore Haeundae Beach, Jagalchi Fish Market, and Gamcheon Culture Village. The package includes all meals, transportation, and guided tours.'
     }
  
    ],
  }));