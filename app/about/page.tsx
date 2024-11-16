'use client';

import React from 'react';
import { OurTeam } from '@/components/myComponents/ourTeam';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Building2, Code, Database, Globe2, Laptop, Layout, LineChart, Rocket, Server, Users2 } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Years of Experience', value: '5+' },
  { label: 'Projects Completed', value: '100+' },
  { label: 'Team Members', value: '4' },
  { label: 'Client Satisfaction', value: '99%' },
];

const values = [
  {
    icon: Code,
    title: 'Technical Excellence',
    description: 'We maintain high coding standards and stay updated with the latest technologies.'
  },
  {
    icon: Users2,
    title: 'Client Partnership',
    description: 'We build long-term relationships based on trust and mutual success.'
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'We constantly explore new solutions to drive better results.'
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'We never compromise on the quality of our deliverables.'
  }
];

const timeline = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'Started with a vision to provide top-tier web development services in Kenya.'
  },
  {
    year: '2019',
    title: 'Team Expansion',
    description: 'Grew our team and expanded our service offerings.'
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Helped businesses adapt to the digital landscape during global changes.'
  },
  {
    year: '2021-Present',
    title: 'Innovation & Growth',
    description: 'Continuing to innovate and deliver exceptional digital solutions.'
  }
];

const techStack = {
  frontend: [
    { name: 'React', icon: '/tech/react.svg', description: 'Modern UI Development' },
    { name: 'Next.js', icon: '/tech/next.svg', description: 'Full-stack React Framework' },
    { name: 'Vue.js', icon: '/tech/vue.svg', description: 'Progressive Framework' },
    { name: 'Nuxt.js', icon: '/tech/nuxt.svg', description: 'Vue Framework' },
    { name: 'Svelte', icon: '/tech/svelte.svg', description: 'Compiled Framework' },
    { name: 'SvelteKit', icon: '/tech/sveltekit.svg', description: 'Full-stack Svelte' },
    { name: 'HTML5/CSS3', icon: '/tech/html5.svg', description: 'Web Fundamentals' },
    { name: 'JavaScript', icon: '/tech/javascript.svg', description: 'Core Language' },
  ],
  backend: [
    { name: 'Node.js', icon: '/tech/nodejs.svg', description: 'JavaScript Runtime' },
    { name: 'Express', icon: '/tech/express.svg', description: 'Web Framework' },
    { name: 'Golang', icon: '/tech/golang.svg', description: 'High-performance Systems' },
    { name: 'Python', icon: '/tech/python.svg', description: 'Versatile Backend' },
    { name: 'Elixir', icon: '/tech/elixir.svg', description: 'Scalable Applications' },
    { name: 'NestJS', icon: '/tech/nest.svg', description: 'Enterprise Node.js' },
    { name: 'PHP', icon: '/tech/php.svg', description: 'Web Development' },
  ],
  cms: [
    { name: 'WordPress', icon: '/tech/wordpress.svg', description: 'CMS Platform' },
    { name: 'Joomla', icon: '/tech/joomla.svg', description: 'CMS System' },
    { name: 'Webflow', icon: '/tech/webflow.svg', description: 'Visual Development' },
  ],
  database: [
    { name: 'PostgreSQL', icon: '/tech/postgresql.svg', description: 'Relational Database' },
    { name: 'MySQL', icon: '/tech/mysql.svg', description: 'Open Source DB' },
    { name: 'MongoDB', icon: '/tech/mongodb.svg', description: 'NoSQL Database' },
  ],
  api: [
    { name: 'GraphQL', icon: '/tech/graphql.svg', description: 'API Query Language' },
    { name: 'REST', icon: '/tech/rest.svg', description: 'API Architecture' },
  ],
  game: [
    { name: 'Unity', icon: '/tech/unity.svg', description: 'Game Development' },
  ]
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-white to-orange-50/50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Crafting Digital Excellence in{' '}
              <span className="text-orange-600">Kenya</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We are a team of passionate developers dedicated to transforming businesses through innovative web solutions and digital marketing strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-medium transition-colors duration-200"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3 border-2 border-orange-600 text-orange-600 hover:bg-orange-50 rounded-full font-medium transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6">
                At Zelisline, we're committed to empowering businesses in Kenya and beyond with cutting-edge digital solutions. Our mission is to bridge the gap between traditional businesses and the digital world, ensuring our clients stay competitive in today's fast-paced market.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Globe2 className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Global Reach, Local Understanding</h3>
                    <p className="text-gray-600">We combine international best practices with deep local market knowledge.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Laptop className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Technical Innovation</h3>
                    <p className="text-gray-600">We leverage the latest technologies to deliver superior solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <LineChart className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Results-Driven Approach</h3>
                    <p className="text-gray-600">We focus on delivering measurable business outcomes for our clients.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/mission-image.jpg"
                alt="Our Mission"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-2xl shadow-lg">
                <Building2 className="h-8 w-8 mb-2" />
                <div className="text-2xl font-bold">Based in</div>
                <div className="text-lg">Nairobi, Kenya</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and help us deliver exceptional results for our clients.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-orange-50 p-6 rounded-2xl hover:bg-orange-100 transition-colors duration-200"
              >
                <value.icon className="h-10 w-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build scalable, efficient, and modern solutions for our clients.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Frontend Technologies */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center mb-8"
              >
                <Layout className="h-8 w-8 text-orange-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Frontend Development</h3>
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {techStack.frontend.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group p-6 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors duration-200"
                  >
                    <img src={tech.icon} alt={tech.name} className="h-12 w-12 mb-4 mx-auto" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h4>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backend Technologies */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center mb-8"
              >
                <Server className="h-8 w-8 text-orange-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Backend Development</h3>
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {techStack.backend.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group p-6 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors duration-200"
                  >
                    <img src={tech.icon} alt={tech.name} className="h-12 w-12 mb-4 mx-auto" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h4>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CMS Platforms */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center mb-8"
              >
                <Code className="h-8 w-8 text-orange-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">CMS Platforms</h3>
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {techStack.cms.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group p-6 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors duration-200"
                  >
                    <img src={tech.icon} alt={tech.name} className="h-12 w-12 mb-4 mx-auto" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h4>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Databases & APIs */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center mb-8"
              >
                <Database className="h-8 w-8 text-orange-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Databases & APIs</h3>
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[...techStack.database, ...techStack.api].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group p-6 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors duration-200"
                  >
                    <img src={tech.icon} alt={tech.name} className="h-12 w-12 mb-4 mx-auto" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h4>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Game Development */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center mb-8"
              >
                <Rocket className="h-8 w-8 text-orange-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Game Development</h3>
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {techStack.game.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group p-6 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors duration-200"
                  >
                    <img src={tech.icon} alt={tech.name} className="h-12 w-12 mb-4 mx-auto" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h4>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-to-br from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our humble beginnings to where we are today, every step has been focused on delivering excellence.
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-orange-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  <div className="flex-1 md:w-1/2"></div>
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full border-4 border-white shadow"></div>
                  <div className="flex-1 md:w-1/2 p-6 bg-white rounded-2xl shadow-lg ml-4 md:ml-0 md:mx-4">
                    <div className="text-orange-600 font-bold mb-1">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <OurTeam />

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Let's work together to bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-orange-600 rounded-full font-medium hover:bg-orange-50 transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}