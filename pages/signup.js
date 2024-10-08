// pages/about.js
import Navbar from '@/components/navbar';
import PricingCards from '@/components/pricingCards';
import Footer from '@/components/footer';
import SignupForm from '@/components/signupForm';

export default function About() {
  return (
    <div className='dark:bg-gray-900'>
      <Navbar />
      <SignupForm />
    </div>
  );
}
