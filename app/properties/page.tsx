import { Suspense } from 'react';
import PropertiesGrid from '@/components/properties/properties-grid';
import PropertyFilters from '@/components/properties/property-filters';
import SearchBar from '@/components/properties/search-bar';
import { getProperties } from '@/lib/api/properties';
import Loading from '@/components/ui/loading';
import { PropertySearchParams } from '@/types/property';

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: PropertySearchParams;
}) {
  const properties = await getProperties(searchParams);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find Your Perfect Property</h1>
      <SearchBar />
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="w-full md:w-1/4">
          <PropertyFilters />
        </div>
        <div className="w-full md:w-3/4">
          <Suspense fallback={<Loading />}>
            <PropertiesGrid properties={properties} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}