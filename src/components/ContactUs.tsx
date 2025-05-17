import React from 'react';

const ContactUs: React.FC = () => (
  <div className='p-10 text-white'>
    <h1 className='text-4xl font-bold mb-4'>Contact Us</h1>
    <p className='text-lg'>Reach out to us for inquiries, partnerships, or further information:
      <ul className='list-disc pl-5 mt-2'>
        <li>Email: <a href='mailto:contact@orionlabs.com' className='text-blue-500'>contact@orionlabs.com</a></li>
        <li>Phone: (123) 456-7890</li>
        <li>Address: 1234 Orion Labs Street, Austin, TX 78701</li>
      </ul>
    </p>
  </div>
);

export default ContactUs;