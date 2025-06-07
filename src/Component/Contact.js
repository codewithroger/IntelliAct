import { useState } from "react";
import { Paperclip } from "lucide-react";
import Navigation from "./Navigation";
export default function Contact() {
  const [resume, setResume] = useState(null);

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <div>
        <Navigation/>
         <div className="bg-gradient-to-br from-white via-blue-50 to-white py-16 px-6"  id="careers">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h2 className="text-center text-3xl font-bold text-blue-800">Contact Us!</h2>
       
        <form className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="input" required />
            <input type="tel" placeholder="Phone Number" className="input" />
          </div>
          <input type="email" placeholder="Email Address*" className="input" required />
          <textarea placeholder="Your Message" className="input h-28 resize-none" />

       

          

          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
    </div>
   
  );
}
