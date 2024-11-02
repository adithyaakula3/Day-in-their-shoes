import { useState } from 'react';
import ExperienceCard from '../components/ExperienceCard';

export default function Experiences() {
  const [experiences] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      host: 'Sarah Chen',
      date: '2023-12-15',
      location: 'San Francisco, CA',
      rating: 4.9,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    },
    {
      id: 2,
      title: 'Chef',
      host: 'Marco Rodriguez',
      date: '2023-12-18',
      location: 'New York, NY',
      rating: 4.8,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d'
    },
    {
      id: 3,
      title: 'Photographer',
      host: 'Emma Wilson',
      date: '2023-12-20',
      location: 'Los Angeles, CA',
      rating: 4.7,
      reviews: 83,
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d'
    }
  ]);

  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Available Experiences</h1>
        <div className="flex items-center gap-4 mb-6">
          <input
            type="search"
            placeholder="Search experiences..."
            className="flex-1 max-w-xl px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Categories</option>
            <option value="tech">Technology</option>
            <option value="culinary">Culinary</option>
            <option value="creative">Creative</option>
          </select>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map(experience => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}