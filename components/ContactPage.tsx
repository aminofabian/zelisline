"use client"
import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';

const formHandler = async (e: any) => {
  e.preventDefault();
  
  // Get form input values
  const firstName = e.target['first-name'].value;
  const lastName = e.target['last-name'].value;
  const company = e.target.company.value;
  const email = e.target.email.value;
  const phoneNumber = e.target['phone-number'].value;
  const message = e.target.message.value;
  
  // Check if any field is empty
  if (!firstName || !lastName || !company || !email || !phoneNumber || !message) {
    alert("Please fill in all fields.");
    return; // Exit early if any field is empty
  }
  
  // All fields are filled, proceed with form submission
  const formData = {
    firstName,
    lastName,
    company,
    email,
    phoneNumber,
    message,
  };
  
  try {
    const response = await fetch("/api/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    
    if (response.status === 200) {
      alert("Your Message Was Sent. We'll Respond Within 24 Hours.");
      e.target.reset();
      console.log(formData);
    } else {
      alert("Failed to send message. Please try again later.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again later.");
  }
};

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false);
  
  const handleCheckboxChange = () => {
    setAgreed(!agreed);
  };
  
  return (
    <div className="flex items-center justify-center lg:mx-48">
    <div className="text-center space-y-1">
    <h3 className="text-2xl font-thin">
    Welcome Our Esteemed Visitor. We See You as a Potential Client, Talk to Us
    </h3>
    <p className="text-xl font-extralight">Drop us an email. We are no snobs</p>
    <div className="flex gap-2 justify-center">
    <div className="isolate bg-white px-6 py-5 lg:px-8 ">
    <div
    className="absolute inset-x-0 top-[-5rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
    aria-hidden="true"
    >
    <div
    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
    style={{
      clipPath:
      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    }}
    />
    </div>
    <div className="mx-auto md:max-w-4xl text-center">
    <h2 className="text-3xl font-extralight tracking-tight text-gray-600 sm:text-4xl"></h2>
    <p className="mt-2 text-sm font-thin leading-2 text-slate-500">
    This will show up in our email inbox. And we do read our emails, and respond to every single one of them... 
    </p>
    </div>
    <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={formHandler}>
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 max-w-screen-2xl">
    <div>
    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
    First name
    </label>
    <div className="mt-2.5">
    <input
    type="text"
    name="first-name"
    id="first-name"
    autoComplete="given-name"
    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    </div>
    </div>
    <div>
    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
    Last name
    </label>
    <div className="mt-2.5">
    <input
    type="text"
    name="last-name"
    id="last-name"
    autoComplete="family-name"
    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    </div>
    </div>
    <div className="sm:col-span-2">
    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
    Company
    </label>
    <div className="mt-2.5">
    <input
    type="text"
    name="company"
    id="company"
    autoComplete="organization"
    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    </div>
    </div>
    <div className="sm:col-span-2">
    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
    Email
    </label>
    <div className="mt-2.5">
    <input
    type="email"
    name="email"
    id="email"
    autoComplete="email"
    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    </div>
    </div>
    <div className="sm:col-span-2">
    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
    Phone number
    </label>
    <div className="relative mt-2.5">
    <div className="absolute inset-y-0 left-0 flex items-center">
    <label htmlFor="country" className="sr-only">
    Country
    </label>
    <select
    id="country"
    name="country"
    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
    >
    <option>KE</option>
    <option>US</option>
    <option>CA</option>
    <option>SG</option>
    <option>TZ</option>
    <option>UG</option>
    </select>
    </div>
    <input
    type="tel"
    name="phone-number"
    id="phone-number"
    autoComplete="tel"
    className="block w-full rounded-md border-0 px-5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    </div>
    </div>
    <div className="sm:col-span-2">
    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
    Message
    </label>
    <div className="mt-2.5">
    <textarea
    name="message"
    id="message"
    rows={4}
    className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    defaultValue={''}
    />
    </div>
    </div>
    <div className="flex gap-x-4 sm:col-span-2">
    <div className="flex items-center">
    <input
    type="checkbox"
    id="agreed"
    name="agreed"
    checked={agreed}
    onChange={handleCheckboxChange}
    className="w-4 h-4 text-cyan-400 focus:ring-cyan-500 border-cyan-300 focus:outline-none focus:ring focus:border-cyan-300 rounded-2xl"
    />
    <label htmlFor="agreed" className="ml-2 text-sm text-slate-600">
    By selecting this, you agree to our{' '}
    <a href="#" className="font-semibold text-orange-500">
    privacy policy
    </a>
    .
    </label>
    </div>
    </div>
    <div className="mt-5 mx-auto justify-center">
    <div className="generate-text-box flex">
    <button
    type="submit"
    className="inline bg-cyan-400 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 clip-angled generate-text-box"
    >
    Let Us talk
    </button>
    <div className="text-box-container clip-angled-both mt-2 mb-10 text-sm">
    <p>You can send us an email. We&apos;ll respond within 24 hours.</p>
    <p>Alternatively, you can email us directly at (support@zelisline.co.ke)</p>
    </div>
    </div>
    </div>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    );
  }
  
  
  