'use client'

import Head from "next/head";
import SideNav from "@/components/SideNav";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from 'react'; 
import 'reactjs-popup/dist/index.css';
import { toast, useToast } from "@/components/ui/use-toast"


const handleSubmit = async (e: any) => {
  
  e.preventDefault();
  
  // Get form input values
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;
  
  
  // Check if any field is empty
  if (!name || !email || !message) {
    alert("You didn't fill in all the fields. Please do and try again.");
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
      toast({
        title: "Message Successfully sent",
        description: "We've received your message, and we'll get back to you as soon as possible, probably within 24 hours. Thanks for contacting us.",
        variant: "default"
      })
      e.target.reset();
    } else {
      toast({
        title: "Message Not sent",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      })
    }
  } catch (error) {
    toast({
      title: "Message Not sent",
      description: "An error occurred. Please try again later.",
      variant: "destructive"
    })
  }
};

function Contact() {
  return (
    <>
    <Head>
    <title>Page Slug</title>
    <link rel="canonical" href='/contact' />
    </Head>
    <div className="flex min:h-screen relative md:flex-row md:overflow-hidden xl:px-40 md:px-10 bg-transparent">
    <div className="w-screen lg:w-44 md:border-r border-slate-50 justify-center align-middle">
    <div className="hidden md:flex"><SideNav /></div>
    </div>  
    <div> 
    </div>
    <div>
    <div className="m-3 rounded-2xl">
    <section className="min-w-7xl">
    <div className='container mx-auto flex flex-col-reverse sm:flex-row items-center'>
    <div className='md:w-2/5 flex flex-col items-start mt-8 sm:mt-0'>
    <h1 className='text-2xl lg:text-5xl leading-none mb-4'>
    You Know <strong className='font-green'> You Can </strong> Always Count On Us.
    </h1>
    <p className='lg:text-lg mb-4 sm:mb-12'>
    Email us today and we will get back to you as soon as possible. We always do our best to respond to all inquiries within 24 hours.
    </p>
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
    </section>
    </div>
    </div>
    </div> 
    <div>
    <Footer />
    
    </div>
    </>
    )
  }
  
  export default Contact;
  
  