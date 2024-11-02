import { useParams } from 'react-router-dom';
import { StarIcon, CalendarIcon, MapPinIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function ExperienceDetails() {
  const { id } = useParams();

  // This would normally fetch data from an API
  const experience = {
    id: 1,
    title: 'Software Engineer',
    host: 'Sarah Chen',
    date: '2023-12-15',
    location: 'San Francisco, CA',
    rating: 4.9,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    description: 'Experience a day in the life of a Silicon Valley software engineer. Learn about coding, team collaboration, and the latest tech trends.',
    schedule: [
      { time: '9:00 AM', activity: 'Morning Stand-up Meeting' },
      { time: '10:00 AM', activity: 'Coding Session' },
      { time: '12:00 PM', activity: 'Lunch & Tech Talk' },
      { time: '2:00 PM', activity: 'Code Review' },
      { time: '4:00 PM', activity: 'Team Planning' }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto">
      <img 
        src={experience.image} 
        alt={experience.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">
            A Day as a {experience.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <span className="font-medium">{experience.rating}</span>
              <span className="text-gray-500">({experience.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <MapPinIcon className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-8">{experience.description}</p>

          <h2 className="text-xl font-semibold mb-4">Daily Schedule</h2>
          <div className="space-y-4">
            {experience.schedule.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <span className="font-medium min-w-[80px]">{item.time}</span>
                <span>{item.activity}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
            <div className="flex items-center gap-3 mb-6">
              <UserCircleIcon className="w-12 h-12 text-gray-400" />
              <div>
                <h3 className="font-medium">Hosted by</h3>
                <p className="text-gray-600">{experience.host}</p>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4">
              Request to Book
            </button>

            <button className="w-full border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">
              Contact Host
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}