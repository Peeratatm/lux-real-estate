'use client';

import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {t('home.callToActionTitle')}
        </h2>
        <Button
          size="lg"
          variant="secondary"
          className="group"
          asChild
        >
          <a href="/properties">
            {t('home.callToActionButton')}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </section>
  );
}