import Navigation  from './Navigation';
import React from 'react';

const CompanyProfile = () => {
  return (
<div>
 <Navigation/>
    <section className="bg-white py-16 px-6 md:px-20 lg:px-32 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 border-b-2 border-blue-600 inline-block pb-2">
          Company Profile
        </h2>
        <div className="mt-8 text-justify text-lg leading-relaxed space-y-6">
          <p>
            <strong>Orvion IntelliAct Automation</strong> was founded by senior executives from a leading multinational company in the Industrial Automation sector. With over 25+ years of experience, they have led the delivery of large and complex automation projects across various industries globally.
          </p>
          <p>
            At <strong>Orvion IntelliAct Automation</strong>, we specialize in delivering cutting-edge automation technologies that empower businesses to enhance efficiency, reduce operational costs, and boost productivity. Our team of dedicated experts works collaboratively with clients to design, implement, and maintain custom automation systems tailored to meet each organization's unique needs.
          </p>
        </div>
      </div>
    </section>

</div>
  );
};

export default CompanyProfile;
