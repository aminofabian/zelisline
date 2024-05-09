'use client'
import React, { useState } from 'react';
import WebDesign from './WebDesign';
import DigitalMarketing from './DigitalMarketing';
import GraphicalDesign from './CustomDesignServices';


function Services() {
  const [selectedComponent, setSelectedComponent] = useState('Ecommerce Web Development');
  
  const renderComponent = (componentName: any) => {
    setSelectedComponent(componentName);
  };
  
  let currentComponent = null;
  
  if (selectedComponent === 'Custom Web Application') {
    currentComponent = <WebDesign />;
  } else if (selectedComponent === 'CMS Web Development') {
    currentComponent = <DigitalMarketing />;
  } else if (selectedComponent === 'Ecommerce Web Development') {
    currentComponent = <GraphicalDesign />;
  }
  
  return (
    <>
    <div className="text-2xl max-w-4xl font-semibold text-center mx-auto pt-10">
    <h1>
    From Simple Business Blogs to Super Complex SaaS applications and Casual Websites, We Got You Covered
    </h1>
    </div>
    <div className="bg-slate-300 h-12 flex justify-center mx-auto my-10 max-w-3xl clip-angled-both">
    <div className="flex justify-between items-center w-full max-w-screen-md mx-auto px-4 space-x-3">
    <div
    className={`flex-1 h-full clip-angled-both text-center flex items-center text-sky-600 justify-center font-bold text-lg md:text-xl hover:cursor-pointer ${
      selectedComponent === 'WebDesign' ? 'bg-slate-100 text-cyan-600' : 'bg-slate-300 text-white'
    }`}
    onClick={() => renderComponent('Custom Web Application')}
    >
    <button className="hover:cursor-pointer">Ecommerce</button>
    </div>
    <div
    className={`flex-1 h-full clip-angled text-center flex items-center justify-center font-bold text-lg text-sky-600 md:text-xl cursor-pointer ${
      selectedComponent === 'GraphicalDesign' ? 'bg-slate-200 text-cyan-500' : 'bg-slate-300 text-white'
    }`}
    onClick={() => renderComponent('CMS Web Development')}
    >
    <button className="hover:cursor-pointer">WordPress</button>
    </div>
    <div
    className={`flex-1 h-full clip-angled-both text-center flex items-center justify-center font-bold text-lg text-sky-600 md:text-xl cursor-pointer ${
      selectedComponent === 'DigitalMarketing' ? 'bg-slate-200 text-cyan-600' : 'bg-slate-300 text-white'
    }`}
    onClick={() => renderComponent('Ecommerce Web Development')}
    >
    <button className="hover:cursor-pointer">Custom</button>
    </div>
    </div>
    </div>
    <div className="bg-transparent h-[60dvh] md:h-[70dvh] flex justify-center mx-auto rounded-3xl my-10 max-w-7xl">
    {currentComponent}
    </div>
    </>
  );
}

export default Services;


