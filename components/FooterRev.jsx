
import React from 'react'

function FooterRev() {
  return (
    <div>
      <footer className="p-6 bg-sky-100 border-l-8 border-r-8 border-b-1 border-flourish-500 rounded-2xl pb-10 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold text-cyan-500">Services</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <a rel="noopener noreferrer" href="#">Digital Marketing</a>
              <a rel="noopener noreferrer" href="#">Search Engine Optimization (SEO)</a>
              <a rel="noopener noreferrer" href="#">Website Design & Developement</a>
              <a rel="noopener noreferrer" href="#">Content Marketing</a>
              <a rel="noopener noreferrer" href="#">Video Production</a>
              <a rel="noopener noreferrer" href="#">Social Media Services</a>
              <a rel="noopener noreferrer" href="#">Graphic Design/Logo Design</a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold text-cyan-500">Company</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <a rel="noopener noreferrer" href="#">Who We Are</a>
              <a rel="noopener noreferrer" href="#">Client Reviews</a>
              <a rel="noopener noreferrer" href="#">Hover, Focus, &amp; Other States</a>
              <a rel="noopener noreferrer" href="#"> Our Portfilio</a>
              <a rel="noopener noreferrer" href="#">Partner with Us</a>
              <a rel="noopener noreferrer" href="#">Blog</a>
              <a rel="noopener noreferrer" href="#">Contact Us</a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold text-cyan-500">Helpful Links</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <a rel="noopener noreferrer" href="#">Privacy Policy</a>
              <a rel="noopener noreferrer" href="#">Terms of Use</a>
              <a rel="noopener noreferrer" href="#">Your Privacy Choices</a>
              <a rel="noopener noreferrer" href="#">FAQs</a>
              <a rel="noopener noreferrer" href="#">Topics and Insights</a>
              <a rel="noopener noreferrer" href="#">Testimonials</a>
              <a rel="noopener noreferrer" href="#">Tell Us About Your Project</a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold text-cyan-500">Find Us</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              
              <a rel="noopener noreferrer" href="#">GitHub</a>
              <a rel="noopener noreferrer" href="#">Discord</a>
              <a rel="noopener noreferrer" href="#">Twitter</a>
              <a rel="noopener noreferrer" href="#">YouTube</a>
            </div>
          </div>
        </div>
        <div className="w-full h-1 mt-4 bg-gradient-to-r from-slate-200 to-cyan-200 animate-stretch hover:translate-y-5">
          <p className="text-center font-light text-sm p-5 ml-10 mb-10"> <span className="animate-bounce text-lime-500 pb-5"> Zelisline  </span>is a registered trademark of Zelisline, Inc. Copyright © 2024 Zelisline, Inc.</p>
        </div>
      </footer>

    </div>
  )
}

export default FooterRev;