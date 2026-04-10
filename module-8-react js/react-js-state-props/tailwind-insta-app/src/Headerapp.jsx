import React, {useState} from 'react'

export default function Headerapp() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
   <>
 <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto h-16 sm:h-20 flex items-center justify-between gap-4">
    {/* Logo & Location */}
    <div className="flex items-center gap-4 sm:gap-8">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 group select-none ">
        <div className="flex items-center gap-2">
              <img
                src="https://th-i.thgim.com/public/news/national/yg2emr/article69624821.ece/alternates/FREE_1200/instamart%20logo.jpg"
                className="w-8 sm:w-10 rounded-full group-hover:scale-110 transition-transform"
                alt="logo"
              />
              {/* <span className="text-lg sm:text-2xl font-bold text-blue-700">
                instamart
              </span> */}
            </div>
 
      </a>
     
      {/* Location Selector */}
      <div className="hidden md:flex flex-col border-l pl-4 cursor-pointer">
        
        <div className="flex items-center gap-1 mt-1">
          <button
                onClick={() => setIsModalOpen(true)}
                className="text-xs sm:text-sm text-gray-400 hover:text-blue-600"
              >
                <div className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 transition-colors">
          <span className="font-semibold text-sm sm:text-base underline text-blue-600">
                Add your location
              </span>
        </div>
                To see items in your area
              </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={14}
            height={14}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down text-blue-600"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
    {/* Search Bar */}
    <div className="flex-1 max-w-3xl ">
      <div className="relative group">
        <input
          type="text"
          placeholder="Search for"
          className="w-full h-12 bg-gray-100/80 border border-transparent rounded-xl pl-5 pr-12 text-base outline-none focus:bg-white focus:border-gray-200 focus:ring-2 focus:ring-gray-50/50 transition-all placeholder:text-gray-400 font-medium text-gray-700"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search"
          >
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </span>
      </div>
    </div>
    {/* Right Actions */}
    <div className="flex items-center gap-3 sm:gap-6">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={22}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="block sm:hidden"
        >
          <circle cx={12} cy={12} r={10} />
          <circle cx={12} cy={10} r={3} />
          <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
        </svg>
        <span className=' sm:hidden md:block lg:block' >Sign in</span>
      </button>
      <button
           onClick={() => setIsCartOpen(true)}
        className="flex items-center gap-3 sm:gap-6 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="block sm:hidden"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <span className=" sm:hidden md:block lg:block">My Cart</span>
      </button>
    </div>
     <div className='flex justify-center md:hidden lg:hidden xl:hidden w-6 h-6 cursor-pointer'>
        <button onClick={() => setOpen(!open)}>
           <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
        </button>
      </div>
  </div>
</header>

{/* logon modal */}

    

  
    

      {/* MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-3"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Box */}
          <div
            className="bg-white w-full max-w-lg rounded-3xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ✅ CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              ✕
            </button>

            {/* CONTENT */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
              Create An Account
            </h3>

            <form className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter your password"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Confirm password"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      )}
    
    
  {/* cart modal */}
  {/* MODAL */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
          onClick={() => setIsCartOpen(false)} // outside click
        >
          {/* Modal Box */}
          <div
            className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ✅ CLOSE BUTTON */}
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
            >
              ✕
            </button>

            {/* CONTENT */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              Cart Items
            </h3>

            <p className="text-gray-500 mb-4">
              Your cart is currently empty.
            </p>

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
                alt="empty cart"
                className="w-48 sm:w-64"
              />
            </div>
          </div>
        </div>
      )}
    
  {/* JS */}
  
  


  
       {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-3"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Box */}
          <div
            className="bg-white w-full max-w-3xl rounded-2xl p-4 sm:p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 bg-gray-100 rounded-full"
            >
              ✕
            </button>

            {/* Content */}
            <div className="flex flex-col md:flex-row gap-6">

              {/* LEFT */}
              <div className="flex-1">
                <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">
                  Share location to find <br />
                  the closest Instamart store
                </h2>

                {/* Input */}
                <div className="flex flex-col sm:flex-row gap-3 mb-5">
                  <input
                    type="text"
                    placeholder="Search area or address"
                    className="w-full border rounded-xl px-4 py-3 text-sm sm:text-base"
                  />

                  <button className="bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-xl text-sm sm:text-base">
                    📍 Share
                  </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 my-4 sm:my-6">
                  <hr className="flex-1 border-dashed" />
                  <span className="text-gray-400 text-sm">OR</span>
                  <hr className="flex-1 border-dashed" />
                </div>

                {/* Login */}
                <p className="text-center text-gray-600 text-sm sm:text-base">
                  <span className="text-blue-600 underline cursor-pointer">
                    Login
                  </span>{" "}
                  to see your saved addresses
                </p>
              </div>

              {/* RIGHT IMAGE (hide on small screens) */}
              <div className="hidden md:flex w-40 items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                  className="w-28 sm:w-32"
                  alt="map"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* mobile toggler */}
      <nav className="bg-white shadow-md px-4 py-3">
      <div className="flex justify-between items-center md:hidden lg:hidden xl:hidden">

        {/* Left - Toggler + Logo */}
        <div className="flex items-center gap-3">
          
         
        </div>

        {/* Right - Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          {/* Location */}
          <div className="flex items-center gap-1 cursor-pointer">
            📍 <span>Rajkot</span>
          </div>

          {/* Sign In */}
          <button className="hover:text-blue-500" >Sign In</button>

          {/* Cart */}
          <div className="relative cursor-pointer">
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              2
            </span>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-gray-100 p-4 rounded-lg">

         <button onClick={() => setIsModalOpen(true)} className="cursor-pointer text-left">📍 Select Location</button>

          <button className="text-left" onClick={() => setIsOpen(true)}>👤 Sign In</button>

          <button className="cursor-pointer text-left" onClick={() => setIsCartOpen(true)}>🛒 Cart </button>

        </div>
      )}
    </nav>
    </>
  

  
  )
}
