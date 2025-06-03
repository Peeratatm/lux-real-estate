'use client';

import { useEffect, useState } from 'react';
import { Property } from '@/types/property';
import { getSimilarProperties } from '@/lib/api/properties';
import { useTranslation } from '@/hooks/use-translation';
import PropertyCard from './property-card';
import Loading from '@/components/ui/loading';

interface SimilarPropertiesProps {
  currentPropertyId: string;
  propertyType: string;
  location: string;
}

export default function SimilarProperties({
  currentPropertyId,
  propertyType,
  location,
}: SimilarPropertiesProps) {
  const { t } = useTranslation();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const similarProperties = await getSimilarProperties(
          currentPropertyId,
          propertyType,
          location
        );
        setProperties(similarProperties);
      } catch (error) {
        console.error('Error fetching similar properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [currentPropertyId, propertyType, location]);

  if (loading) {
    return <Loading />;
  }

  if (properties.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{t('property.similarProperties')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}