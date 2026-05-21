import { useParams, Link } from 'react-router-dom';

const CertificateDetail = () => {
  const { certId } = useParams();

  // Simple helper to clean up the ID for display
  const displayName = certId ? certId.replace(/-/g, ' ') : "Certificate";

  return (
    <div className="min-h-screen bg-white p-6 md:p-10 pt-32 max-w-5xl mx-auto">
      <Link to="/" className="text-indigo-600 font-medium hover:underline flex items-center gap-2">
        ← Back to Portfolio
      </Link>
      
      <div className="mt-12">
        {/* Header Row: Title on Left, Info on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-8 border-b border-gray-100">
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 capitalize tracking-tight">
            {displayName}
          </h1>

          {/* Right Aligned Info (The "Red Line" area) */}
          <div className="flex gap-8 text-right">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Institution</p>
              <p className="text-sm font-bold text-gray-700 capitalize">
                {certId?.split('-')[0] || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date</p>
              <p className="text-sm font-bold text-gray-700">May 2026</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Duration</p>
              <p className="text-sm font-bold text-gray-700">4 Weeks</p>
            </div>
          </div>
        </div>
        
        {/* Certificate Display Area */}
        <div className="mt-12 aspect-[4/3] md:aspect-video bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-gray-400 shadow-inner">
           <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl mb-4">
             📜
           </div>
           <p className="font-medium text-gray-500 italic">Certificate Image: {certId}</p>
           <button className="mt-6 px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-900 hover:bg-indigo-50 hover:border-indigo-200 transition-all">
             View Full Resolution
           </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateDetail;