'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';
import { formatCurrency } from '@/lib/utils/format';
import { Property } from '@/types/property';

interface FeaturedPropertiesProps {
  properties: Property[];
}

export default function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  const { t, locale } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const propertiesPerPage = 3;
  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  
  const displayedProperties = properties.slice(
    currentPage * propertiesPerPage, 
    (currentPage + 1) * propertiesPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Automatically switch pages every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextPage();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentPage]);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold">{t('home.featuredProperties')}</h2>
            <p className="text-muted-foreground mt-2">{t('home.featuredDescription')}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPage}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextPage}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProperties.map((property) => (
            <Link href={`/properties/${property.id}`} key={property.id}>
              <Card className="overflow-hidden h-full transition-transform duration-300 hover:translate-y-[-8px] hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <Badge className="absolute top-3 left-3">
                    {t(`propertyTypes.${property.type}`)}
                  </Badge>
                  <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-md font-semibold">
                    {formatCurrency(property.price, locale)}
                  </div>
                </div>
                
                <CardContent className="pt-4">
                  <h3 className="text-lg font-semibold line-clamp-1">{property.title}</h3>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="text-sm line-clamp-1">{property.address}</span>
                  </div>
                  
                  <div className="flex justify-between mt-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">{t('property.bedrooms')}</p>
                      <p className="font-medium">{property.bedrooms}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">{t('property.bathrooms')}</p>
                      <p className="font-medium">{property.bathrooms}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">{t('property.area')}</p>
                      <p className="font-medium">{property.area} m²</p>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <div className="flex items-center w-full justify-between">
                    <div className="flex items-center">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                        <img
                          src={property.agent.avatar}
                          alt={property.agent.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <span className="text-sm">{property.agent.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(property.listedDate).toLocaleDateString()}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild>
            <Link href="/properties">
              {t('home.viewAllProperties')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}