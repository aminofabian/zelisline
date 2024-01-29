'use client'
import React, { useState } from 'react';
import WebDesign from './WebDesign';
import DigitalMarketing from './DigitalMarketing';
import GraphicalDesign from './GraphicalDesign';


function Services() {
  const [selectedComponent, setSelectedComponent] = useState('WebDesign');
  
  const renderComponent = (componentName: any) => {
    setSelectedComponent(componentName);
  };
  
  let currentComponent = null;
  
  if (selectedComponent === 'WebDesign') {
    currentComponent = <WebDesign />;
  } else if (selectedComponent === 'DigitalMarketing') {
    currentComponent = <DigitalMarketing />;
  } else if (selectedComponent === 'GraphicalDesign') {
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
    className={`flex-1 h-full clip-angled-both text-center flex items-center text-green-600 justify-center font-bold text-lg md:text-xl hover:cursor-pointer ${
      selectedComponent === 'WebDesign' ? 'bg-slate-100 text-green-600' : 'bg-slate-300 text-white'
    }`}
    onClick={() => renderComponent('WebDesign')}
    >
    <button className="hover:cursor-pointer">WebDesign</button>
    </div>
    <div
    className={`flex-1 h-full clip-angled text-center flex items-center justify-center font-bold text-lg text-green-600 md:text-xl cursor-pointer ${
      selectedComponent === 'GraphicalDesign' ? 'bg-slate-200 text-lime-500' : 'bg-slate-300 text-white'
    }`}
    onClick={() => renderComponent('GraphicalDesign')}
    >
    <button className="hover:cursor-pointer">GraphicalDesign</button>
    </div>
    <div
    className={`flex-1 h-full clip-angled-both text-center flex items-center justify-center font-bold text-lg text-green-600 md:text-xl cursor-pointer ${
      selectedComponent === 'DigitalMarketing' ? 'bg-slate-200 text-green-600' : 'bg-slate-300 text-white'
    }`}
    onClick={() => renderComponent('DigitalMarketing')}
    >
    <button className="hover:cursor-pointer">DigitalMarketing</button>
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
  
  
  