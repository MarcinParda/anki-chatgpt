import React from 'react';

export const Navbar = () => {
  return (
    <header
      x-data="
        {
          navbarOpen: false
        }
      "
      className="flex w-full items-center bg-slate-50 shadow-md"
    >
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <h1 className="block w-full py-5">Anki Generator</h1>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                type="button"
                title="Toggle Menu"
                id="navbarToggler"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              </button>
              <nav
                id="navbarCollapse"
                className="absolute right-4 top-full w-full max-w-[250px] rounded-lg py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none"
              >
                <ul className="block lg:flex">
                  <li>
                    <a
                      href="#"
                      className="flex text-base font-medium text-dark underline hover:text-primary lg:ml-12 lg:inline-flex"
                    >
                      Create card
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                    >
                      Settings
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="#"
                className="py-3 px-7 text-base font-medium text-dark hover:text-primary"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
