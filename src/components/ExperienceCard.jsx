import { Link } from 'react-router-dom';
import { StarIcon, MapPinIcon } from '@heroicons/react/24/solid';

export default function ExperienceCard({ experience }) {
  return (
    <Link to={`/experiences/${experience.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img 
          src={experience.image} 
          alt={experience.title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">
            Step into a Day as a {experience.title}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <MapPinIcon className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <span className="font-medium ml-1">{experience.rating}</span>
            </div>
            <span className="text-sm text-gray-500">
              ({experience.reviews} reviews)
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}