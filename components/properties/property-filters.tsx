'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useTranslation } from '@/hooks/use-translation';

export default function PropertyFilters() {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [type, setType] = useState(searchParams.get('type') || '');
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '');
  const [bedrooms, setBedrooms] = useState(searchParams.get('bedrooms') || '');
  const [bathrooms, setBathrooms] = useState(searchParams.get('bathrooms') || '');
  const [minArea, setMinArea] = useState(searchParams.get('minArea') || '');
  const [maxArea, setMaxArea] = useState(searchParams.get('maxArea') || '');

  const handleApplyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (type) params.set('type', type);
    else params.delete('type');
    
    if (minPrice) params.set('minPrice', minPrice);
    else params.delete('minPrice');
    
    if (maxPrice) params.set('maxPrice', maxPrice);
    else params.delete('maxPrice');
    
    if (bedrooms) params.set('bedrooms', bedrooms);
    else params.delete('bedrooms');
    
    if (bathrooms) params.set('bathrooms', bathrooms);
    else params.delete('bathrooms');
    
    if (minArea) params.set('minArea', minArea);
    else params.delete('minArea');
    
    if (maxArea) params.set('maxArea', maxArea);
    else params.delete('maxArea');
    
    router.push(`/properties?${params.toString()}`);
  };

  const handleClearFilters = () => {
    setType('');
    setMinPrice('');
    setMaxPrice('');
    setBedrooms('');
    setBathrooms('');
    setMinArea('');
    setMaxArea('');
    router.push('/properties');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('search.filters')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('search.propertyType')}</label>
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
        
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('search.priceRange')}</label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="number"
              placeholder={t('search.minPrice')}
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <Input
              type="number"
              placeholder={t('search.maxPrice')}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('search.bedrooms')}</label>
          <Select value={bedrooms} onValueChange={setBedrooms}>
            <SelectTrigger>
              <SelectValue placeholder={t('search.bedrooms')} />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}+
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('search.bathrooms')}</label>
          <Select value={bathrooms} onValueChange={setBathrooms}>
            <SelectTrigger>
              <SelectValue placeholder={t('search.bathrooms')} />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}+
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('search.area')}</label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="number"
              placeholder={t('search.minArea')}
              value={minArea}
              onChange={(e) => setMinArea(e.target.value)}
            />
            <Input
              type="number"
              placeholder={t('search.maxArea')}
              value={maxArea}
              onChange={(e) => setMaxArea(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <Button onClick={handleApplyFilters}>
            {t('search.applyFilters')}
          </Button>
          <Button variant="outline" onClick={handleClearFilters}>
            {t('search.clearAll')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}