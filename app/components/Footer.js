import React from 'react'
import Image from 'next/image'

function Footer() {
        
  return (
    <div className="z-0">
      <footer className="py-24 h-full w-full flex flex-col justiy-center items-center">
        <Image
          src="/images/laws-logo.png"
          alt="logo"
          width={100}
          height={100}
        />
        <p className="text-xs text-gray-500">
          A108 Adam Street New York, NY 535022 United States
        </p>
        <p>Phone: +1 5509 55488 55</p>
        <p>Email: info@info.com</p>
        <p className="text-xs text-gray-500">© 2021 All rights reserved</p>
      </footer>
    </div>
  );
}

export default Footer