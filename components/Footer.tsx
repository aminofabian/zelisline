import React from 'react';
import { Mail, Phone, Twitter, Linkedin, Mailbox, MailCheck, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-500 py-8 mt-10 hover:animate-bounce-custom border-l-8 border-r-8 border-b-1 border-flourish-500 rounded-2xl pb-10">
    <div className="container mx-auto flex justify-between">
    <div className="w-1/3 ml-10">
    <h4 className="text-xs font-bold hover:animate-bounce">
    <Image
    src="/logo.png"
    width={100}
    height={20}
    alt="Picture of the author"
    />
    </h4 >
    <div className='mt-5'>
    <div><Link href='/digitalmarketing'>Digital Marketing Services</Link></div>
    <div><Link href='/webdesign'>Web Design Services</Link></div>
    <div><Link href='/contentmarketing'>Content Marketing</Link></div>
    <div><Link href='/logodesign'>Logo Design Services</Link></div>
    <div><Link href='/videodesign'>Video Production Services</Link></div>
    <div><Link href='/seo'>SEO Services</Link></div>
    <div><Link href='/socialmedia'>Social Media Services</Link></div>
    </div>
    
    </div>
    <div className="w-1/3">
    <h4 className="text-xl font-bold">Contact Us</h4>
    <p><Mail className="inline-block mr-2 text-lime-400 hover:animate-bounce text-sm" /> support@zelisline.co.ke</p>
    <p><MailCheck className="inline-block mr-2 text-lime-400 hover:animate-bounce text-sm" /> enquiries@zelisline.co.ke</p>
    <p><Mailbox className="inline-block mr-2 text-lime-400 hover:animate-bounce text-sm" /> P.O Box: 35393-00100,
    Nairobi Kenya</p>
    <p><Phone className="inline-block mr-2  text-orange-500 hover:animate-bounce text-sm" /> +254 714 28 28 74</p>
    </div>
    <div className="w-1/3">
    <h4 className="text-xl font-bold">Follow Us</h4>
    <p><a href="https://www.twitter.com/zelisline" target="_blank"> <Twitter className="inline-block mr-2 text-sm text-cyan-400 hover:animate-bounce" /> Twitter</a>
    </p>
    <p><a href="https://www.linkedin.com/company/zelisline-ltd" target="_blank"> <Linkedin className="inline-block mr-2 text-sm text-cyan-400 hover:animate-bounce" />LinkedIn </a></p>
    <p><a href="https://www.fscrbook.com/zelisline" target="_blank"> <Facebook className="inline-block mr-2 text-sm text-blue-400 hover:animate-bounce" /> Facebook</a>
    </p>
    <p><a href="https://www.instagram.com/zelisline" target="_blank"> <Instagram className="inline-block mr-2 text-sm text-orange-400 hover:animate-bounce" />Instagram </a></p>
    </div>
    </div>
    <div className="w-full h-1 mt-4 bg-gradient-to-r from-slate-200 to-cyan-200 animate-stretch hover:translate-y-5">
    <p className="text-center font-light text-sm p-5 ml-10 mb-10"> <span className="animate-bounce text-lime-500 pb-5"> Zelisline  </span>is a registered trademark of Zelisline, Inc. Copyright © 2024 Zelisline, Inc.</p>
    </div>
    </footer>
    );
  };
  
  export default Footer;
  