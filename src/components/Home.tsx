import React from 'react';

const Home: React.FC = () => (
  <div className='p-10 text-white'>
    <h1 className='text-4xl font-bold mb-4'>Welcome to Orion Labs</h1>
    <p className='text-lg'>We are developing a next-generation logistics system that:
      <ul className='list-disc pl-5 mt-2'>
        <li>Provides predictive capabilities for logistics planning.</li>
        <li>Enables the creation and visualization of ad hoc logistics networks.</li>
        <li>Automatically predicts and pre-fills required paperwork for organizations and partners.</li>
      </ul>
    </p>
  </div>
);

export default Home;