'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTranslation } from '@/hooks/use-translation';

export default function Hero() {
  const { t } = useTranslation();
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set('location', location);
    if (type) params.set('type', type);
    if (priceRange) params.set('priceRange', priceRange);
    
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Luxury home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {t('home.heroTitle')}
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {t('home.heroSubtitle')}
        </p>
        
        <div className="bg-white/95 dark:bg-gray-900/95 rounded-lg p-4 shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1">
              <Input
                placeholder={t('search.location')}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="col-span-1">
              <Select value={type} onValueChange={setType}>
                <SelectTrigger>
                  <SelectValue placeholder={t('search.propertyType')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">{t('propertyTypes.house')}</SelectItem>
                  <SelectItem value="apartment">{t('propertyTypes.apartment')}</SelectItem>
                  <SelectItem value="condo">{t('propertyTypes.condo')}</SelectItem>
                  <SelectItem value="villa">{t('propertyTypes.villa')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-1">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder={t('search.priceRange')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-100000">{t('priceRanges.under100k')}</SelectItem>
                  <SelectItem value="100000-300000">{t('priceRanges.100kTo300k')}</SelectItem>
                  <SelectItem value="300000-500000">{t('priceRanges.300kTo500k')}</SelectItem>
                  <SelectItem value="500000-1000000">{t('priceRanges.500kTo1m')}</SelectItem>
                  <SelectItem value="1000000+">{t('priceRanges.above1m')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-1">
              <Button onClick={handleSearch} className="w-full">
                <Search className="mr-2 h-4 w-4" />
                {t('search.findProperties')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}