"use client";

import React from "react";
import Portfolio from "@/components/Portfolio";
import Head from "next/head";
import SideNav from "@/components/SideNav";
import Footer from "@/components/Footer";

const handleSubmit = async (e: any) => {
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
    <title>Page Slug</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex min:h-screen relative md:flex-row md:overflow-hidden xl:px-40 md:px-10 bg-transparent">
    <div className="w-screen lg:w-44 md:border-r border-slate-50 justify-center align-middle">
    <div className="hidden md:flex"><SideNav /></div>
    </div>  
    <div> 
    </div>
    <div>
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
