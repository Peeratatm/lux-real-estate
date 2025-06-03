'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, MapPin } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { useAuth } from '@/hooks/use-auth';
import { formatCurrency } from '@/lib/utils/format';
import { Property } from '@/types/property';
import { toggleFavorite } from '@/lib/api/favorites';

interface PropertyCardProps {
  property: Property;
  isFavorite?: boolean;
}

export default function PropertyCard({ property, isFavorite = false }: PropertyCardProps) {
  const { t, locale } = useTranslation();
  const { user, isAuthenticated } = useAuth();
  const [favorite, setFavorite] = useState(isFavorite);
  const [isLoading, setIsLoading] = useState(false);

  const handleFavoriteClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      // Redirect to login or show toast
      return;
    }
    
    setIsLoading(true);
    try {
      await toggleFavorite(property.id);
      setFavorite(!favorite);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
      <Link href={`/properties/${property.id}`}>
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
          <Button
            size="icon"
            variant="ghost"
            className={`absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 ${
              favorite ? 'text-red-500' : 'text-gray-500'
            }`}
            onClick={handleFavoriteClick}
            disabled={isLoading}
          >
            <Heart className={`h-4 w-4 ${favorite ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </Link>
      
      <CardContent className="pt-4">
        <Link href={`/properties/${property.id}`}>
          <h3 className="text-lg font-semibold line-clamp-1 hover:text-primary transition-colors">
            {property.title}
          </h3>
        </Link>
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
  );
}