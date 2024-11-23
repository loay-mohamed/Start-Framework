import React from 'react'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">PORTFOLIO</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3].map((item) => (
            <div  className="group relative rounded-lg overflow-hidden">
              <img
              
                src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
                alt=""
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-main bg-opacity-0 group-hover:bg-opacity-90 flex items-center justify-center transition-all duration-300 text-7xl">
              <i className="text-white opacity-0 group-hover:opacity-100 w-16 h-16 transition-all duration-300 fa-solid fa-plus"></i>
                
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {[1,2,3].map((item) => (
            <div  className="group relative rounded-lg overflow-hidden">
              <img
              
                src="https://routeegy.github.io/startFramework/assets/images/port3.png"
                alt=""
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-main bg-opacity-0 group-hover:bg-opacity-90 flex items-center justify-center transition-all duration-300 text-7xl">
              <i className="text-white opacity-0 group-hover:opacity-100 w-16 h-16 transition-all duration-300 fa-solid fa-plus"></i>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
