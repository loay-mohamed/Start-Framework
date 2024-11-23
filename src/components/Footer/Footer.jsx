import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">AROUND THE WEB</h3>
            <div className="flex justify-center gap-4">
              <i class=" text-2xl fa-brands fa-facebook"></i>
              <i class=" text-2xl fa-brands fa-twitter"></i>
              <i class=" text-2xl fa-brands fa-linkedin"></i>
              <i class=" text-2xl fa-solid fa-globe"></i>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1A252F] py-6 text-center text-sm">
        <p>Copyright © Your Website 2024</p>
      </div>
    </footer>
  )
}
