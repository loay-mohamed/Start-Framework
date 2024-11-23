import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">CONTACT ME</h1>
      <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-24 h-0.5 bg-primary"></div>
          <i class="text-primary fa-solid fa-star"></i>
          <div className="w-24 h-0.5 bg-primary"></div>
        </div>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="USER EMAIL"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-main outline-none transition-colors"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="USER AGE"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-main outline-none transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="USER EMAIL"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-main outline-none transition-colors"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="USER PASSWORD"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-main outline-none transition-colors"
            />
          </div>
          
          <button
            type="submit"
            className="bg-main text-white px-6 py-3 rounded-md hover:bg-main transition-colors mr-96"
          >
            Send MESSAGE
          </button>
        </form>
      </div>
    </section>
  )
}
