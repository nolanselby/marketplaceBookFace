import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import type { Listing } from "@/lib/supabase";
import { formatDistanceToNow } from "date-fns";

export type ListingCardProps = Listing;

const ListingCard = ({
  id,
  title,
  price,
  year,
  make,
  model,
  mileage,
  location,
  created_at,
  image_url,
}: ListingCardProps) => {
  const postedTime = formatDistanceToNow(new Date(created_at), { addSuffix: true });

  return (
    <Link to={`/listing/${id}`}>
      <div className="listing-card overflow-hidden">
        <div className="relative">
          <img
            src={image_url}
            alt={`${year} ${make} ${model}`}
            className="h-48 w-full object-cover"
          />
          <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full">
            <Heart className="h-5 w-5 text-gray-700" />
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-marketplace-text-dark truncate">
              {title}
            </h3>
            <span className="text-lg font-bold text-marketplace-green">
              ${price.toLocaleString()}
            </span>
          </div>
          <div className="text-sm text-marketplace-text-grey mt-1">
            {year} • {numberWithCommas(mileage)} miles
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-sm text-marketplace-text-grey">
              {location}
            </span>
            <span className="text-xs text-marketplace-text-grey">
              {postedTime}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Helper function to format numbers with commas
const numberWithCommas = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default ListingCard;
