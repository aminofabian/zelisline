"use client";
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';



function Portfolio() {
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const testimonials = [
    {
      "client": "Jobslah",
      "websiteLink": "https://www.jobslah.com/",
      "screenshot": "jobslah.png",
      "review": "Fabian and the Team really exceeded our expectations. They're a small team, but their dedication and attention to detail are second to none. They took the time to understand our business, our goals and our target audience - something other agencies we've worked with didn't bother doing. The end result was a visually stunning website that not only represents our brand perfectly, but also drives results. We couldn't be happier with Jobslah's new website!"
    },
    {
      "client": "Hawaii Family Dental",
      "websiteLink": "https://hawaiifamilydental.com/",
      "screenshot": "hfd.png",
      "review": "Zelisline isn't just a web design agency, they're true partners. We've been working with them for years and every project has been a success. They have an incredible eye for design and their technical skills are top-notch. But what sets them apart is their commitment to customer satisfaction. They truly care about our business and always go above and beyond to make sure we're happy with the final product. Hawaii Family Dental's website is a testament to their expertise and dedication."
    },
    {
      "client": "Wanderlust Travel Co.",
      "websiteLink": "https://www.wanderlusttravelco.com/",
      "screenshot": "wander.png",
      "review": "Working with Fabian and the team at Zelisline was an absolute pleasure. They're not just web designers, they're storytellers. They were able to capture the essence of our travel company and create a website that truly speaks to our audience. From the stunning visuals to the user-friendly interface, everything was executed flawlessly. We've received so many compliments on our new site and it's all thanks to Zelisline!"
    },
    {
      "client": "Rustic Retreats",
      "websiteLink": "https://www.rustic-retreats.uk/",
      "screenshot": "rustic.png",
      "review": "Slow but steady wins the race and that's exactly how we felt working with Zelisline. They were patient, methodical, and thorough in their approach to designing our website. We appreciated their attention to detail and open communication throughout the entire process. The end result was a beautiful website that perfectly captures the rustic and cozy feel of our retreats. We highly recommend Zelisline to any business looking for a top-notch web design team."
    },
    {
      "client": "FitFusion Fitness",
      "websiteLink": "https://www.fitfusionfitness.com/",
      "screenshot": "fitness.png",
      "review": "As a fitness studio, it was important for us to have a website that not only looked great but also functioned seamlessly. Zelisline delivered on both accounts and more. They incorporated our branding into the design effortlessly and created a user-friendly platform for our clients to navigate. We've seen an increase in website traffic and inquiries since launching our new site."
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Change to the next testimonial after 6 seconds
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    
    
    return () => clearInterval(interval);
  }, [testimonials]);
  
  const handleNext = () => {
    // Change to the next testimonial on button click
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <div>
    
    <div className="w-2xl h-[40vh] overflow-hidden flow-col items-center justify-center transition-transform duration-500 ease-in-out transform translate-x-0 mt-15 mx-10 rounded-2xl space-x-10 border-emerald-400 clip-angled-both">
    <div className="w-[70dvw] h-full flex mt-10 rounded-2xl">
    <div className="w-1/2 h-[80vh] bg-slate-100 relative hover:animate-bounce-custom clip-angled">
    <Image
    src={currentTestimonial.screenshot}
    width="0"
    height="0"
    sizes="15vw"
    style={{ width: '100%', height: 'auto' }}
    placeholder="empty"
    loading='lazy'
    alt={`${currentTestimonial.client} Screenshot`}
    />
    </div>
    <div className="w-1/2 h-full p-8 bg-slate-100 clip-angled-both">
    <p className="absolute t-1/2 r-4 slate-500 w-[25dvw] text-md font-extralight mx-auto text-center inline-block"> &quot;
    {currentTestimonial.review} &quot;
    </p>
    </div>
    <button className="absolute px-3 py-2 transform -translate-y-2/3 bg-orange-500 text-white clip-arrow"
    onClick={handleNext}
    >
    Go Next
    </button>
    <button
    className="absolute px-3 py-2 transform -translate-y-2/3 bg-slate-400 text-slate-100 mt-10 rounded"
    >
    <a href={currentTestimonial.websiteLink}
    target="_blank"
    rel="noopener noreferrer"
    >{currentTestimonial.websiteLink} </a> </button>
    </div>
    
    </div>
    
    
    </div>
    )
  }
  
  export default Portfolio;