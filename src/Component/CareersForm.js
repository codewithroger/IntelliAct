import { useState } from "react";
import { Paperclip } from "lucide-react";
import Navigation from "./Navigation";
export default function CareersForm() {
  const [resume, setResume] = useState(null);

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <div>
        <Navigation/>
         <div className="bg-gradient-to-br from-white via-blue-50 to-white py-16 px-6"  id="careers">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h2 className="text-center text-3xl font-bold text-blue-800">We're Hiring!</h2>
        <p className="text-center text-gray-600 text-sm">
          Interested in one of our open positions? Apply below and attach your resume. Let’s build the future together.
        </p>

        <form className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="input" required />
            <input type="tel" placeholder="Phone Number" className="input" />
          </div>
          <input type="email" placeholder="Email Address*" className="input" required />
          <textarea placeholder="Your Message or Cover Letter" className="input h-28 resize-none" />

          <div className="flex items-center space-x-4">
            <label className="flex items-center gap-2 cursor-pointer text-sm text-blue-700 hover:underline">
              <Paperclip className="w-4 h-4" />
              <span>Attach Resume</span>
              <input type="file" onChange={handleResumeUpload} className="hidden" />
            </label>
            {resume && <span className="text-sm text-gray-500 truncate">{resume.name}</span>}
          </div>

          <p className="text-xs text-gray-400 mt-2">
            This form is protected by Google reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
    </div>
   
  );
}
