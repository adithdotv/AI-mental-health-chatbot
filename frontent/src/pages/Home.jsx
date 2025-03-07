import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to the Mental Health Chatbot</h1>
      <p className="mt-2 text-gray-600 max-w-lg">
        Your safe space to express yourself and get support. Start your journey towards better mental health today!
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link to="/chat" className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-purple-700 transition">
          Start Chat
        </Link>
        <Link to="/login" className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Login
        </Link>
        <Link to="/register" className="bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
