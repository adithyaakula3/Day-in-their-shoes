import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

export default function Profile() {
  const [user] = useState({
    name: 'John Doe',
    location: 'New York, NY',
    bio: 'Passionate about learning new skills and experiencing different professions.',
    joinedDate: 'January 2023',
    rating: 4.8,
    reviews: 12,
    upcomingExperiences: [
      {
        id: 1,
        title: 'Software Engineer',
        date: '2023-12-15',
        host: 'Sarah Chen'
      }
    ],
    pastExperiences: [
      {
        id: 2,
        title: 'Chef',
        date: '2023-11-10',
        host: 'Marco Rodriguez',
        rating: 5
      }
    ]
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-2xl text-gray-600">
              {user.name.charAt(0)}
            </span>
          </div>
          
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
            <p className="text-gray-600 mb-4">{user.location}</p>
            <p className="mb-4">{user.bio}</p>
            
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <span>{user.rating} ({user.reviews} reviews)</span>
              </div>
              <span>Joined {user.joinedDate}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Upcoming Experiences</h2>
          {user.upcomingExperiences.map(exp => (
            <div key={exp.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-medium mb-2">{exp.title}</h3>
              <p className="text-gray-600">Hosted by {exp.host}</p>
              <p className="text-sm text-gray-500">{exp.date}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Past Experiences</h2>
          {user.pastExperiences.map(exp => (
            <div key={exp.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-medium mb-2">{exp.title}</h3>
              <p className="text-gray-600">Hosted by {exp.host}</p>
              <p className="text-sm text-gray-500">{exp.date}</p>
              <div className="flex items-center gap-1 mt-2">
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">{exp.rating}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}