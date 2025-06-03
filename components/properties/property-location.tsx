'use client';

import { MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';
import { PropertyLocation } from '@/types/property';

interface PropertyLocationProps {
  location: PropertyLocation;
}

export default function PropertyLocation({ location }: PropertyLocationProps) {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('property.location')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-2">
          <MapPin className="h-5 w-5 text-primary mt-1" />
          <div>
            <p className="font-medium">{location.city}, {location.state}</p>
            <p className="text-muted-foreground">{location.zipCode}</p>
          </div>
        </div>
        
        <div className="mt-4 aspect-[16/9] rounded-lg overflow-hidden">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${location.lat},${location.lng}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </CardContent>
    </Card>
  );
}