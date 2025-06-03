import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Suspense } from 'react';
import { getPropertyById } from '@/lib/api/properties';
import PropertyGallery from '@/components/properties/property-gallery';
import PropertyDetails from '@/components/properties/property-details';
import PropertyFeatures from '@/components/properties/property-features';
import PropertyLocation from '@/components/properties/property-location';
import AgentContact from '@/components/properties/agent-contact';
import BookingForm from '@/components/booking/booking-form';
import SimilarProperties from '@/components/properties/similar-properties';
import Loading from '@/components/ui/loading';

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const property = await getPropertyById(params.id);
  
  if (!property) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <p className="text-muted-foreground">{property.address}</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Suspense fallback={<Loading />}>
            <PropertyGallery images={property.images} />
          </Suspense>
          
          <div className="mt-8">
            <PropertyDetails property={property} />
          </div>
          
          <div className="mt-8">
            <PropertyFeatures features={property.features} />
          </div>
          
          <div className="mt-8">
            <PropertyLocation location={property.location} />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg shadow-md p-6 sticky top-24">
            <AgentContact agent={property.agent} />
            <div className="mt-6">
              <BookingForm propertyId={property.id} agentId={property.agent.id} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <SimilarProperties 
          currentPropertyId={property.id} 
          propertyType={property.type} 
          location={property.location.city} 
        />
      </div>
    </div>
  );
}