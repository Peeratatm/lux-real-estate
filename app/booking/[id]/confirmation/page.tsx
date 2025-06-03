'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, CheckCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { getBookingById } from '@/lib/api/bookings';
import { getPropertyById } from '@/lib/api/properties';
import { formatDateTime } from '@/lib/utils/date';
import { useTranslation } from '@/hooks/use-translation';
import { Booking } from '@/types/booking';
import { Property } from '@/types/property';
import Loading from '@/components/ui/loading';

export default function BookingConfirmationPage({ params }: { params: { id: string } }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingData = await getBookingById(params.id);
        setBooking(bookingData);
        
        if (bookingData) {
          const propertyData = await getPropertyById(bookingData.propertyId);
          setProperty(propertyData);
        }
      } catch (error) {
        console.error('Error fetching booking data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (loading) {
    return <Loading />;
  }

  if (!booking || !property) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">{t('booking.notFound')}</h1>
        <p className="mb-6">{t('booking.invalidBooking')}</p>
        <Button onClick={() => router.push('/properties')}>
          {t('common.browseProperties')}
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">{t('booking.confirmed')}</h1>
          <p className="text-muted-foreground mt-2">{t('booking.confirmationMessage')}</p>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-xl font-semibold">{t('booking.details')}</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">{t('booking.appointmentTime')}</p>
                <p className="text-muted-foreground">
                  {formatDateTime(booking.date, booking.time)}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">{t('booking.propertyAddress')}</p>
                <p className="text-muted-foreground">{property.address}</p>
              </div>
            </div>
            
            <div className="p-4 bg-muted rounded-lg mt-4">
              <p className="text-sm">{t('booking.reminderText')}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-xl font-semibold">{t('booking.contactAgent')}</h2>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <img
                src={property.agent.avatar}
                alt={property.agent.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="font-medium">{property.agent.name}</p>
              <p className="text-muted-foreground">{property.agent.phone}</p>
              <p className="text-muted-foreground">{property.agent.email}</p>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={() => router.push('/dashboard/bookings')}
            className="flex-1"
          >
            {t('booking.viewAllBookings')}
          </Button>
          <Button 
            onClick={() => router.push(`/properties/${property.id}`)}
            variant="outline"
            className="flex-1"
          >
            {t('booking.backToProperty')}
          </Button>
        </div>
      </div>
    </div>
  );
}