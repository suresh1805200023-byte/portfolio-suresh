import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCertificateByRouteParam } from '../data/certificatesData';

const CertificateDetail = () => {
  const { certName } = useParams();
  const [showFullImage, setShowFullImage] = useState(false);

  const match = getCertificateByRouteParam(certName);
  const certificate = match?.certificate;

  if (!certificate) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-10 pt-32 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Certificate Not Found</h2>
        <Link to="/" className="text-indigo-600 font-medium hover:underline">
          ← Back to Portfolio Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6 md:p-10 pt-28 max-w-5xl mx-auto">
      <Link
        to="/#certificates"
        className="text-indigo-600 font-medium hover:underline flex items-center gap-2"
      >
        ← Back to Certificates
      </Link>

      <div className="mt-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-8 border-b border-gray-100">
          <div>
            <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">
              {certificate.institution}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              {certificate.title}
            </h1>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8 md:text-right">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Institution
              </p>
              <p className="text-sm font-bold text-gray-700">{certificate.institution}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Date
              </p>
              <p className="text-sm font-bold text-gray-700">{certificate.date}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Duration
              </p>
              <p className="text-sm font-bold text-gray-700">{certificate.duration}</p>
            </div>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">{certificate.description}</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {certificate.skills?.map((skill) => (
            <span
              key={skill}
              className="text-xs font-medium bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg border border-indigo-100"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="rounded-3xl border border-gray-100 bg-gray-50 overflow-hidden shadow-inner">
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            className="w-full max-h-[70vh] object-contain bg-white"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() => setShowFullImage(true)}
            className="px-6 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-900 hover:bg-indigo-50 hover:border-indigo-200 transition-all"
          >
            View Full Resolution
          </button>
          {certificate.verifyUrl && (
            <a
              href={certificate.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-bold hover:bg-indigo-700 transition-all"
            >
              Verify Credential ↗
            </a>
          )}
        </div>
      </div>

      {showFullImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowFullImage(false)}
        >
          <button
            type="button"
            onClick={() => setShowFullImage(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white text-lg hover:bg-white/20"
          >
            ✕
          </button>
          <img
            src={certificate.image}
            alt={`${certificate.title} full view`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default CertificateDetail;
