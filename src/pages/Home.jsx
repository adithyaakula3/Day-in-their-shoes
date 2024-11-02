import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">
        Experience a Day in Someone Else's Life
      </h1>
      
      <p className="text-xl text-gray-600 mb-8">
        Connect with professionals and experience their daily lives firsthand.
        Learn, grow, and discover new perspectives.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to="/experiences"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        >
          Browse Experiences
        </Link>
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50">
          Become a Host
        </button>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Discover</h3>
          <p className="text-gray-600">
            Find unique experiences from professionals across various fields
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Connect</h3>
          <p className="text-gray-600">
            Meet and learn directly from experienced professionals
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Experience</h3>
          <p className="text-gray-600">
            Live a day in their shoes and gain valuable insights
          </p>
        </div>
      </div>
    </div>
  );
}