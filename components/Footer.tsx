import React, { ReactNode } from 'react';
import { FaGithub } from 'react-icons/fa';

interface FooterSection {
  title: string;
  links: { label: ReactNode; href: string }[];
}

const sections: FooterSection[] = [
  {
    title: 'Anki',
    links: [
      {
        label: 'Anki Page',
        href: '#',
      },
      {
        label: 'AnkiWeb',
        href: '#',
      },
    ],
  },
  {
    title: 'OpenAI',
    links: [
      {
        label: 'OpenAI Page',
        href: '#',
      },
      {
        label: 'OpenAI API',
        href: '#',
      },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      {
        label: 'Code',
        href: '#',
      },
      {
        label: 'Documentation',
        href: '#',
      },
    ],
  },
  {
    title: 'Author',
    links: [
      {
        label: (
          <a
            title="Github Profile"
            href="#"
            className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
          >
            <FaGithub />
          </a>
        ),
        href: '#',
      },
    ],
  },
];

const FooterSection = ({ title, links }: FooterSection) => (
  <div className="w-full sm:w-1/2 lg:w-3/12">
    <div className="w-full">
      <h4 className="mb-4 text-lg font-semibold text-dark">{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-20">
      <div className="container mx-auto flex flex-wrap justify-center px-0 lg:max-w-[768px]">
        {sections.map((section) => (
          <FooterSection
            key={section.title}
            title={section.title}
            links={section.links}
          />
        ))}
      </div>
      <FooterBackgroundCircles />
    </footer>
  );
};

const FooterBackgroundCircles = () => (
  <div>
    <span className="absolute left-0 bottom-0 z-[-1]">
      <svg
        width="217"
        height="229"
        viewBox="0 0 217 229"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
          fill="url(#paint0_linear_1179_5)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1179_5"
            x1="76.5"
            y1="281"
            x2="76.5"
            y2="1.22829e-05"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3056D3" stop-opacity="0.08" />
            <stop offset="1" stopColor="#C4C4C4" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span className="absolute top-10 right-10 z-[-1]">
      <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
          fill="url(#paint0_linear_1179_4)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1179_4"
            x1="-1.63917e-06"
            y1="37.5"
            x2="75"
            y2="37.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#13C296" stop-opacity="0.31" />
            <stop offset="1" stopColor="#C4C4C4" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  </div>
);
