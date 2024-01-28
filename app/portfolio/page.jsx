"use client";

import React from "react";
import Portfolio from "@/components/Portfolio";
import Head from "next/head";
import SideNav from "@/components/SideNav";
import Footer from "@/components/Footer";
import Image from "next/image";

const handleSubmit = async (e) => {
  e.preventDefault();

  // Get form input values
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  // Check if any field is empty
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return; // Exit early if any field is empty
  }

  // All fields are filled, proceed with form submission
  const data = { name, email, message };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      alert("Message Sent.");
      e.target.reset();
    } else {
      alert("Failed to send message. Please try again later.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again later.");
  }
};


function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio Page Zelisline</title>
        <meta name="description" content="Portfolio Page Zelisline" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min:h-screen relative md:flex-row md:overflow-hidden xl:px-40 md:px-10 bg-transparent">
        <div className="w-screen lg:w-44 md:border-r border-slate-50 justify-center align-middle">
          <div className="hidden md:flex"><SideNav /></div>
        </div>
        <div>
        </div>
        <div>
          <div className='container mx-auto flex flex-col-reverse sm:flex-row items-center'>
            <div className='md:w-2/5 flex flex-col items-start mt-8 sm:mt-10'>
              <h1 className='text-2xl lg:text-5xl leading-none mb-4'>
                Here are  <strong className='font-green'> a few samples</strong>  of our Work.
              </h1>
              <h2>                Websites We&lsquo;ve Built:
              </h2>
              <div className='lg:text-lg mb-4 sm:mb-12'>
                <ul className="flex flex-col space-y-4 mt-10 pl-10 list-disc">
                  <li className="hover:border-solid hover:border-var-secondary hover-border-solid hover:transforrm scale-105 pl-5 py-2 clip-angled-both bg-slate-200 font-bold hover:bg-cyan-600 hover:text-slate-100 border-transparent shadow-xl transition-colors border-e-slate-50">Jobs Lah: <div className="text-sm text-black bg-slate-300 inline px-3 py-1 font-medium clip-angled">https://www.jobslah.com/</div></li>
                  <li className="hover:border-2 pl-5 py-2 clip-angled-both bg-slate-200 font-bold  hover:bg-cyan-600 hover:text-slate-50">Hawai Family Dental: <div className="text-sm text-black bg-slate-300 shadow-xl inline px-3 py-1 font-medium clip-angled">https://www.hawaiifamilydental.com</div></li>
                  <li className="hover:border-2 pl-5 py-2 clip-angled-both bg-slate-200 font-bold hover:bg-cyan-600 hover:text-slate-50">Fit Fusion Fitness: <div className="text-sm text-black bg-slate-300 inline px-3 py-1 font-medium clip-angled">https://www.fitfusionfitness.com</div></li>
                  <li className="hover:border-2 pl-5 py-2 clip-angled-both bg-slate-200 font-bold hover:bg-cyan-600 hover:text-slate-50">Wanderlust Travel Co: <div className="text-sm text-black bg-slate-300 inline px-3 py-1 font-medium clip-angled">https://www.wanderlusttravelco.com/</div></li>
                  <li className="hover:border-2 pl-5 py-2 clip-angled-both bg-slate-200 font-bold hover:bg-cyan-600 hover:text-slate-50">Rustic Retreats: <div className="text-sm text-black bg-slate-300 inline px-3 py-1 font-medium clip-angled">https://www.rustic-retreats.uk</div></li>
                </ul>

              </div>
            </div>
            <div className='sm:w-2/5 mb-5 opacity-50'>
              <div className='m-3'>
                <Image
                  src='gra.gif'
                  alt='hero'
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <Portfolio />
          <div className="m-3 rounded-2xl">
            <div className='container mx-auto flex flex-col-reverse sm:flex-row items-center'>

            </div>
          </div>
          <div className="md:w-2/5 mx-auto mt-2">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="block">Name</label>
                <input type="text" className="form-control" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block">Email address</label>
                <input type="email" className="form-control" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="block">Message</label>
                <textarea className="form-control" id="message" name="message" rows={3} defaultValue={""} />
              </div>
              <button type="submit" className='font-semibold text-lg bg-green-400 hover:bg-green-500 text-white py-1 px-3 rounded'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default PortfolioPage;
