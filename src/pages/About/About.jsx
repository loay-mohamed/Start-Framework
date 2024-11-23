import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-main text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className='text-1xl md:text-4xl font-bold mb-4'>ABOUT COMPONENT</h2>
      <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-24 h-0.5 bg-white"></div>
          <i class="fa-solid fa-star"></i>
          <div className="w-24 h-0.5 bg-white"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 text-left">
          
          <p>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete
            source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for
            easy customization.
          </p>
          <p>
            You can create your own custom avatar for the masthead, change the icon in the dividers,
            and add your email address to the contact form to make it fully functional!
          </p>
        </div>
      </div>
    </section>
  )
}
