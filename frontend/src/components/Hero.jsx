import { BsLinkedin } from "react-icons/bs";
import { FaBehance, FaGithubSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="relative pt-16">
      {/* Banner */}
      <div className="w-full h-60 md:h-72 bg-gray-200">
        <img 
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2000" 
          alt="Landscape Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Profile Pic */}
        <div className="relative -mt-16 md:-mt-20 inline-block">
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-[6px] border-white overflow-hidden bg-white shadow-sm">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Active Status Indicator */}
          <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
        </div>

        {/* Name and Socials Row */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-start gap-4">
          {/* Left Side: Name and Title */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight">SURESHKUMAR A</h1>
            <p className="text-indigo-600 font-semibold mt-1">Full-Stack MERN Developer</p>
            <p className="text-gray-500 text-sm mt-2 flex items-center gap-1 font-medium">
              <span>📍</span> Madurai, Tamil Nadu
            </p>
          </div>

          {/* Right Side: Action Buttons */}
          <div className="flex items-center gap-3">
            {/* LinkedIn Button */}
            <a 
              href="https://www.linkedin.com/in/suresh-kumar-650607408/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-full hover:bg-gray-50 hover:text-blue-600 transition-all shadow-sm text-sm font-bold text-gray-700"
            >
              <BsLinkedin size={18} />
              LinkedIn
            </a>

            {/* GitHub Button */}
            <a 
              href="https://github.com/suresh1805200023-byte/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-full hover:bg-gray-50 hover:text-gray-900 transition-all shadow-sm text-sm font-bold text-gray-700"
            >
              <FaGithubSquare size={18} />
              GitHub
            </a>

          
          </div>
        </div>
      </div>
      
      <hr className="max-w-5xl mx-auto mt-12 border-gray-100" />
    </section>
  );
};

export default Hero;