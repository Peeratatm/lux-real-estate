'use client';

import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">LuxEstate</h3>
            <p className="text-gray-400">
              Find your perfect property with our expert guidance and comprehensive listings.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">{t('nav.properties')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/properties" className="text-gray-400 hover:text-white transition">
                  {t('propertyTypes.house')}
                </a>
              </li>
              <li>
                <a href="/properties" className="text-gray-400 hover:text-white transition">
                  {t('propertyTypes.apartment')}
                </a>
              </li>
              <li>
                <a href="/properties" className="text-gray-400 hover:text-white transition">
                  {t('propertyTypes.villa')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">{t('nav.about')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="/agents" className="text-gray-400 hover:text-white transition">
                  {t('nav.agents')}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2025 LuxEstate. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}