import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex justify-center items-center gap-2 my-1">
      <Link href="/" className="rounded-lg px-4 py-1 bg-slate-200">
        Logo
      </Link>
      <p>I am the header</p>
      <Link href="/about" className="rounded-lg px-4 py-1 bg-slate-200">
        About
      </Link>
      <Link href="/services" className="rounded-lg px-4 py-1 bg-slate-200">
        Services
      </Link>
    </header>
  );
}

export default Header;
