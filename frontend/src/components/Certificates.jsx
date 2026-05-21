import { Link } from 'react-router-dom';
import { CERTIFICATES_DATABASE } from '../data/certificatesData';

const Certificates = () => {
  const certificateEntries = Object.entries(CERTIFICATES_DATABASE);

  return (
    <section id="certificates" className="max-w-5xl mx-auto px-6 py-24 border-t border-gray-50">
      <div className="mb-10">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
          Certifications
        </h2>
        <p className="text-gray-500 text-sm">
          Edit certificates in <code className="text-indigo-600">src/data/certificatesData.js</code>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificateEntries.map(([key, cert]) => {
          const routeSlug = cert.slug || key;

          return (
            <Link
              key={key}
              to={`/certificate/${routeSlug}`}
              className="group block bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={cert.image}
                  alt={`${cert.title} thumbnail`}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex justify-between items-start gap-4">
                <div>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1">
                    {cert.institution}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm">
                    {cert.date} · {cert.duration}
                  </p>
                  <p className="text-indigo-600 text-sm font-semibold mt-3">
                    View certificate →
                  </p>
                </div>
                <div className="text-2xl grayscale group-hover:grayscale-0 transition shrink-0">
                  🎓
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Certificates;
