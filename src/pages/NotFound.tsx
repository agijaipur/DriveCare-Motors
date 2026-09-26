import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl w-full text-center space-y-8 p-10 bg-white rounded-3xl shadow-xl border border-gray-100">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-100 blur-3xl opacity-50 rounded-full"></div>
          <h1 className="relative text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            404
          </h1>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Oops! Wrong Turn
          </h2>
          <p className="text-gray-500 text-lg">
            We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps you typed the URL incorrectly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link 
            to="/" 
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Back to Home
          </Link>
          <Link 
            to="/vehicles" 
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-blue-600 border border-blue-200 rounded-full font-semibold shadow-sm hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
          >
            View Vehicles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
