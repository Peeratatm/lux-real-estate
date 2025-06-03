export interface PropertyLocation {
  lat: number;
  lng: number;
  city: string;
  state: string;
  zipCode: string;
}

export interface PropertyAgent {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface Property {
  id: string;
  title: string;
  type: string;
  price: number;
  address: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  features: string[];
  location: PropertyLocation;
  agent: PropertyAgent;
  listedDate: string;
  yearBuilt: number;
  isFeatured?: boolean;
}

export interface PropertySearchParams {
  type?: string;
  location?: string;
  priceRange?: string;
  minBedrooms?: string;
  maxBedrooms?: string;
  minBathrooms?: string;
  maxBathrooms?: string;
  minArea?: string;
  maxArea?: string;
  featured?: boolean;
  limit?: number;
}