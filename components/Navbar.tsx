import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <header className="bg-slate-50 shadow-md">
      <div className="container mx-auto p-0 lg:max-w-[768px]">
        <div className="flex items-center justify-between py-5">
          <h1>Anki Generator</h1>
          <nav id="navbarCollapse" className="rounded-lg">
            <ul className="block lg:flex">
              <li>
                <Link
                  href="/create-card"
                  className="flex text-base font-medium text-dark underline hover:text-primary"
                >
                  Create card
                </Link>
              </li>
              <li>
                <Link
                  href="/settings"
                  className="flex text-base font-medium text-dark hover:text-primary lg:ml-8"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
