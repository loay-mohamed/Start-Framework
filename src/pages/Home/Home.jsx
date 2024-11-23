import React from 'react'

export default function Home() {
  return (
    <section className="min-h-screen bg-main flex items-center justify-center text-white pt-16">
      <div className="container mx-auto px-4 text-center">
        <img
          src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
        />
        <h1 className="text-5xl md:text-6xl font-bold mb-4">START FRAMEWORK</h1>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-24 h-0.5 bg-white"></div>
          <i class="fa-solid fa-star"></i>
          <div className="w-24 h-0.5 bg-white"></div>
        </div>
        <p className="text-xl">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  )
}
