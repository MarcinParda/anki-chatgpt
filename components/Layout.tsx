import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col flex-1">{children}</main>
      <Footer />
    </div>
  );
};
