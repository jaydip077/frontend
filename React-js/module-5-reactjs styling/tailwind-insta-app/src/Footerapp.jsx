import React from 'react'

export default function Footerapp() {
  return (
    <>
        <footer className="bg-[#0b0f14] text-gray-400">
  <div className="w-full lg:max-w-7xl mx-auto px-6 py-16">
    {/* Top Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
      {/* Logo + Copyright */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-white text-2xl font-bold">
            <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_96/Logo_f5xzza" />
          </span>
        </div>
      </div>
      {/* Categories */}
      <div>
        <h3 className="text-white font-semibold mb-4">Categories</h3>
        <ul className="space-y-3 text-sm">
          <li>Office and Electricals in...</li>
          <li>Sauces and Spreads...</li>
          <li>Dairy, Bread and Eggs...</li>
          <li>Beauty and Grooming...</li>
          <li>Office and Electricals...</li>
        </ul>
      </div>
      {/* Cities */}
      <div>
        <h3 className="text-white font-semibold mb-4">We deliver to</h3>
        <ul className="space-y-3 text-sm">
          <li>Bangalore</li>
          <li>Delhi</li>
          <li>Jaipur</li>
          <li>Mumbai</li>
          <li>Pune</li>
        </ul>
      </div>
      {/* Company */}
      <div>
        <h3 className="text-white font-semibold mb-4">Company</h3>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="career.html">Careers</a>
          </li>
          <li>Team</li>
          <li>Swiggy One</li>
          <li>Swiggy Instamart</li>
        </ul>
      </div>
      {/* Legal + Contact */}
      <div>
        <h3 className="text-white font-semibold mb-4">Legal</h3>
        <ul className="space-y-3 text-sm mb-6">
          <li>Terms &amp; Conditions</li>
          <li>Cookie Policy</li>
          <li>Privacy Policy</li>
        </ul>
        <h3 className="text-white font-semibold mb-4">Contact us</h3>
        <ul className="space-y-3 text-sm">
          <li>Help &amp; Support</li>
          <li>Partner with us</li>
          <li>Ride with us</li>
        </ul>
      </div>
    </div>
    {/* Bottom Bar */}
    <div className="border-t border-gray-700 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-gray-500">© 2025 instamart</p>
      {/* Social Icons */}
      <div className="flex gap-6 text-white text-lg">
        <span className="cursor-pointer hover:text-gray-300">f</span>
        <span className="cursor-pointer hover:text-gray-300">P</span>
        <span className="cursor-pointer hover:text-gray-300">📸</span>
        <span className="cursor-pointer hover:text-gray-300">𝕏</span>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}
