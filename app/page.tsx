import Hero from '@/components/home/hero';
import FeaturedProperties from '@/components/home/featured-properties';
import HowItWorks from '@/components/home/how-it-works';
import Testimonials from '@/components/home/testimonials';
import CallToAction from '@/components/home/call-to-action';
import { getProperties } from '@/lib/api/properties';

export default async function Home() {
  const properties = await getProperties({ featured: true, limit: 6 });
  
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProperties properties={properties} />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </div>
  );
}