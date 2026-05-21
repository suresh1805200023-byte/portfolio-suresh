import { href, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    {name: 'Education', href: '#Education'},
    { name: 'Skills', href: '#skills' },
    {name: 'Experience',href:'#Experience'},
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo links back to Home */}
        <Link to="/" className="font-bold text-xl tracking-tighter italic hover:text-indigo-600 transition-colors">
          PORTFOLIO
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            isHomePage ? (
              // If on Home Page, use standard hash anchors for smooth scroll
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ) : (
              // If on a Detail Page, link back to home first
              <Link 
                key={link.name} 
                to={`/${link.href}`} 
                className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;