'use client';

import { Property } from '@/types/property';
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils/format';

interface PropertyDetailsProps {
  property: Property;
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  const { t, locale } = useTranslation();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('property.description')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            {formatCurrency(property.price, locale)}
          </h3>
          <p className="text-muted-foreground">{property.description}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">{t('property.bedrooms')}</p>
            <p className="font-medium">{property.bedrooms}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{t('property.bathrooms')}</p>
            <p className="font-medium">{property.bathrooms}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{t('property.area')}</p>
            <p className="font-medium">{property.area} m²</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{t('property.yearBuilt')}</p>
            <p className="font-medium">{property.yearBuilt}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}