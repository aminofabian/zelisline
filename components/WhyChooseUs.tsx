import React from 'react';
import { CheckCircle, Lightbulb, ThumbsUp } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="bg-[url('/new.gif')] bg-cover rounded-e-xl py-12 rounded-r-3xl shadow-zinc-800 clip-board opacity-70">
    <div className="container mx-auto px-4 rounded-2xl border-1 m-8">
    <h2 className="text-3xl font-bold mb-8 text-center border-r-8 border-l-8 border-lime-400 pt-8">Why Choose Us?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5">
    <div>
    <h3 className="text-xl font-semibold mb-4 flex items-center rounded-l-2xl">
    <CheckCircle size={48} className="text-green-500 mr-2 inline" /> Expertise
    </h3>
    <ul className="list-disc pl-4 border-lime-400 text-sm border-r-8 ml-7">
    <li>We Know How Not to Make Your Website Suck...</li>
    <li>We Keep Up with the Trends...</li>
    {/* Add other expertise bullet points */}
    </ul>
    </div>
    <div>
    <h3 className="text-xl font-semibold mb-4 flex items-center text-center">
    <Lightbulb size={48} className="text-yellow-500 mr-2 pl-7 inline" /> Trendsetters
    </h3>
    <ul className="list-outside text-sm ml-10">
    <li>We havve been doing this for ages...</li>
    <li>We are always learning something new...</li>
    {/* Add other trendsetters bullet points */}
    </ul>
    </div>
    {/* Add other sections */}
    </div>
    <div className="mt-8">
    <h3 className="text-lg text-slate-100 font-semibold mb-4 flex w-[20vh] mx-auto py-5 justify-center">
    <ThumbsUp size={36} className="text-cyan-400 mr-2 max-w-4xl align-center accent-lime-400 hover:animate-ping " /> Why Us?
    </h3>
    <p className="px-[7dvh] text-sm font-extralight space-y-4">Because we are cool, knowledgeable, always learning, focused on your needs, value quality, passionate about web design, have a great website ourselves, and are committed to making our clients happy. With us, you can trust that your website is in good hands. Contact us today and let us create something amazing together... <br />
    <br />
    So why wait? Let us get started on creating the perfect website for your brand today. </p>
    </div>
    </div>
    </section>
    );
  };
  
  export default WhyChooseUs;
  