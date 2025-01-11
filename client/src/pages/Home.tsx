import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col text-white">
      {/* Header */}
      <header className="bg-white text-blue-600 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold">CodePlusMath</h1>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-purple-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="hover:text-purple-600 transition duration-300"
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="hover:text-purple-600 transition duration-300"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to CodePlusMath Website 🩷
        </h1>
        <p className="text-lg max-w-2xl mb-8">
          Experience the power of Vite and Tailwind CSS for creating fast and
          visually appealing websites. Your journey to beautiful web design
          starts here!
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:scale-105 transform transition duration-300"
          >
            Get Started
          </a>
          <a
            href="#"
            className="bg-transparent border border-white px-6 py-3 rounded-full shadow-lg hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-blue-600 py-6">
        <div className="container mx-auto flex flex-col items-center space-y-4">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-blue-600 hover:text-purple-600 transition duration-300"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-purple-600 transition duration-300"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-purple-600 transition duration-300"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-purple-600 transition duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm">
            © 2025 <span className="font-bold">YourName</span>. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
