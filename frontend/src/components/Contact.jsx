import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        setStatus("Message Sent Successfully!");
        e.target.reset(); 
    }, (error) => {
        console.log(error.text);
        setStatus("Failed to send. Please try again.");
    });
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24 border-t border-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            Contact
          </h2>

          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Let's work together.
          </h3>

          <p className="text-gray-500 leading-relaxed max-w-sm mb-8">
            Reach out directly and the message will land in my Gmail inbox.
          </p>

          {/* PHONE & EMAIL */}
          <div className="space-y-5">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                Phone
              </p>
              <a
                href="tel:9087582702"
                className="text-lg font-semibold text-gray-900 hover:text-indigo-600 transition"
              >
                +91 9087582702
              </a>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                Email
              </p>
              <a
                href="mailto:suresh1805200023@gmail.com"
                className="text-lg font-semibold text-gray-900 hover:text-indigo-600 transition break-all"
              >
                suresh1805200023@gmail.com
              </a>
            </div>
          </div>

          {status && (
            <p className="mt-6 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg font-bold inline-block">
              {status}
            </p>
          )}
        </div>

        {/* RIGHT SIDE FORM */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              Name
            </label>

            <input 
              type="text" 
              name="name"
              required
              placeholder="Enter your name"
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              Email
            </label>

            <input 
              type="email" 
              name="email"
              required
              placeholder="email@example.com"
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              Message
            </label>

            <textarea 
              name="message"
              required
              rows="5" 
              placeholder="message"
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none resize-none"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all shadow-lg active:scale-95"
          >
            Send to my Gmail
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;