// pages/index.js
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import CTA1 from '@/components/CTA1';
import Footer from '@/components/footer';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CTA1 />
      <Footer />
    </div>
  );
}
