// pages/about.js
import Link from 'next/link';
import Navbar from '@/components/navbar';
import PricingCards from '@/components/pricingCards';
import Footer from '@/components/footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <PricingCards />
      <Footer />
    </div>
  );
}
