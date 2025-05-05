
import { ListingProps } from '../components/ListingCard';

export const mockListings: ListingProps[] = [
  {
    id: "1",
    title: "2018 Honda Accord EX-L - Well Maintained",
    price: 18995,
    year: 2018,
    make: "Honda",
    model: "Accord",
    mileage: 42500,
    location: "Portland, OR",
    postedTime: "2 days ago",
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: "2",
    title: "2020 Toyota RAV4 XLE Premium AWD",
    price: 27500,
    year: 2020,
    make: "Toyota",
    model: "RAV4",
    mileage: 32000,
    location: "Seattle, WA",
    postedTime: "5 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1568844293986-ca3c5c1894fb?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: "3",
    title: "2017 Ford F-150 XLT SuperCrew 4WD",
    price: 25900,
    year: 2017,
    make: "Ford",
    model: "F-150",
    mileage: 58900,
    location: "Denver, CO",
    postedTime: "Just now",
    imageUrl: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: "4",
    title: "2019 Tesla Model 3 Long Range - Like New",
    price: 38800,
    year: 2019,
    make: "Tesla",
    model: "Model 3",
    mileage: 28500,
    location: "San Francisco, CA",
    postedTime: "Yesterday",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: "5",
    title: "2016 Jeep Wrangler Unlimited Sahara 4x4",
    price: 27995,
    year: 2016,
    make: "Jeep",
    model: "Wrangler",
    mileage: 62000,
    location: "Austin, TX",
    postedTime: "3 days ago",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: "6",
    title: "2021 Mazda CX-5 Grand Touring - Low Miles",
    price: 29500,
    year: 2021,
    make: "Mazda",
    model: "CX-5",
    mileage: 18000,
    location: "Chicago, IL",
    postedTime: "12 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b9?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: "7",
    title: "2015 BMW 3 Series 328i - Sport Package",
    price: 17900,
    year: 2015,
    make: "BMW",
    model: "3 Series",
    mileage: 71200,
    location: "Miami, FL",
    postedTime: "4 days ago",
    imageUrl: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    id: "8",
    title: "2019 Subaru Outback 2.5i Limited - AWD",
    price: 24950,
    year: 2019,
    make: "Subaru",
    model: "Outback",
    mileage: 45600,
    location: "Boston, MA",
    postedTime: "1 week ago",
    imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  }
];

export const getListingById = (id: string): ListingProps | undefined => {
  return mockListings.find(listing => listing.id === id);
};
