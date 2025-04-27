// app/page.js
'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Responsive Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo + Brand */}
            <div className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 relative mr-2">
                <Image
                  src="/logo.png"
                  alt="Nexcent Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl md:text-2xl font-bold">Nexcent</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              {['Home', 'Features', 'Community', 'Blog', 'Pricing'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition-colors text-sm lg:text-base"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Register Button */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition text-sm lg:text-base">
                Register Now
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-gray-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white py-4 px-4 shadow-md">
              <div className="flex flex-col space-y-4">
                {['Home', 'Features', 'Community', 'Blog', 'Pricing'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-600 hover:text-green-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="flex items-center text-green-600 mt-2">
                  Register Now
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6 md:px-10 lg:px-25 lg:py-25">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-[33px] lg:text-5xl font-bold leading-tight">
                Lessons and insights <span className="text-green-600">from 8 years</span>
              </h1>
              <p className="text-lg text-gray-600">
                Where to grow your business as a photographer: site or social media?
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition flex items-center">
                Register
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className=" mt-8 md:mt-0">
              <div className="">
                <Image
                  src="/Illustration.png"
                  alt="Hero Illustration" 
                  width={272}
                  height={283}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold mb-6">Our Clients</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We have been working with some Fortune 500+ clients.
          </p>
          <div className="relative h-16 md:h-20 w-full max-w-4xl mx-auto">
            <Image
              src="/Clients Logos.png"
              alt="Client Logos"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Manage your entire community in a single system</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Who is Nexcent suitable for?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "/icon1.png",
                title: "Membership Organizations",
                desc: "Our membership management software provides full automation of membership renewals and payments."
              },
              {
                icon: "/icon2.png",
                title: "National Associations",
                desc: "Automate national chapter management with our powerful association tools."
              },
              {
                icon: "/icon3.png",
                title: "Clubs And Groups",
                desc: "Perfect for local clubs and interest groups with simple member management."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-16 h-16 mx-auto mb-6 relative">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="space-y-12 md:space-y-20">
        {/* Part 1 */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
              <div className="md:w-1/2">
                <div className="relative aspect-square md:aspect-video w-full">
                  <Image
                    src="/Frame 35.png"
                    alt="Business Growth"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">The unseen of spending three years at Pixelgrade</h3>
                <p className="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed 
                  ac molestie lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Part 2 */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                  Helping a local <br className="hidden md:block" />
                  <span className="text-green-600">business reinvent itself</span>
                </h3>
                <p className="text-gray-600">
                  We reached here with our hard work and dedication to helping our clients succeed.
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: "/icon1.png", value: "2,245,341", label: "Members" },
                    { icon: "/icon3.png", value: "46,328", label: "Clubs" },
                    { icon: "/Vector.png", value: "828,867", label: "Event Bookings" },
                    { icon: "/icon.png", value: "1,926,436", label: "Payments" }
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 relative">
                        <Image
                          src={stat.icon}
                          alt={stat.label}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-2xl md:text-3xl font-bold text-green-600">{stat.value}</div>
                        <p className="text-gray-600">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Design Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            <div className="md:w-1/2">
              <div className="relative aspect-square md:aspect-video w-full">
                <Image
                  src="/unlock.png"
                  alt="Footer Design"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">How to design your site footer like we did</h2>
              <p className="text-gray-600 mb-8">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempo, augue nec tincidunt molestie, 
                masa nunc varius arcu, at esclerisque elit erat a magna. Donec mis erat at libero ultrices mollis. 
                In nec habitans platea dictum vel. Vivamus vehicula leo diai, at porta nisi facilisis finibus. 
                In euismod augue vitae nisi ultricies, non aliquet urna tincidunt.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition flex items-center gap-2">
                Learn More
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            <div className="md:w-1/2">
              <div className="relative aspect-square md:aspect-video w-full">
                <Image
                  src="/image 9.png"
                  alt="Testimonial"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="bg-gray-50 p-8 md:p-12 rounded-xl">
                <p className="text-lg md:text-xl italic text-gray-700 mb-8 leading-relaxed">
                  "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit."
                </p>
                <div className="mb-8">
                  <h4 className="text-xl font-semibold">Tim Smith</h4>
                  <p className="text-gray-600">British Dragon Boat Racing Association</p>
                </div>
                <div className="relative h-12 w-full">
                  <Image
                    src="/Frame 14.png"
                    alt="Client Logos"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Caring is the new marketing</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                image: "/image 18.png",
                title: "Creating Streamlined Safeguarding Processes with OneRen"
              },
              {
                image: "/image 19.png",
                title: "What are your safeguarding responsibilities and how can you manage them?"
              },
              {
                image: "/image 20.png",
                title: "Revamping the Membership Model with Triathlon Australia"
              }
            ].map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative aspect-video w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-4">{post.title}</h3>
                  <a href="#" className="text-green-600 font-medium inline-flex items-center">
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started with Nexcent?</h2>
          <p className="text-gray-600 mb-8">
            Pellentesque suscipit fringilla libero eu. Start your journey with us today.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 md:py-4 rounded-md font-medium hover:bg-green-700 transition">
            Get a Demo →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 relative mr-3">
                  <Image
                    src="/logo.png"
                    alt="Nexcent"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-bold">Nexcent</span>
              </div>
              <p className="text-gray-400 mb-4">Copyright © 2023 Nexcent Ltd.</p>
              <p className="text-gray-400">All rights reserved</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-2">
                {['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Support</h4>
              <ul className="space-y-2">
                {['Help center', 'Terms of service', 'Legal', 'Privacy policy', 'Status'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Stay up to date</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-white px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                />
                <button className="bg-green-600 px-4 rounded-r-md hover:bg-green-700 transition flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-2">Sign up for our newsletter</p>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}