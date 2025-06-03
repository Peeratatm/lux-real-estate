import { Property } from '@/types/property';

// Mock property data for demonstration
const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa with Ocean View',
    type: 'villa',
    price: 1200000,
    address: '123 Coastal Drive, Malibu, CA 90210',
    description: 'This stunning villa offers breathtaking ocean views, spacious living areas, and luxurious finishes throughout. The property features a private pool, outdoor kitchen, and direct beach access.',
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    features: [
      'Private Pool',
      'Ocean View',
      'Smart Home System',
      'Wine Cellar',
      'Home Theater',
      'Outdoor Kitchen',
      'Heated Floors',
      'Beach Access'
    ],
    location: {
      lat: 34.025922,
      lng: -118.779757,
      city: 'Malibu',
      state: 'California',
      zipCode: '90210'
    },
    agent: {
      id: '1',
      name: 'Jennifer Walker',
      email: 'jennifer@luxestate.com',
      phone: '+1 (310) 555-1234',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    listedDate: '2023-09-15',
    yearBuilt: 2018,
    isFeatured: true
  },
  {
    id: '2',
    title: 'Modern Downtown Loft',
    type: 'apartment',
    price: 550000,
    address: '456 Urban Ave, Los Angeles, CA 90014',
    description: 'Located in the heart of downtown, this modern loft features high ceilings, exposed brick walls, and large windows offering city views. The open floor plan and updated kitchen make it perfect for entertaining.',
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    features: [
      'High Ceilings',
      'Exposed Brick',
      'City Views',
      'Hardwood Floors',
      'Stainless Steel Appliances',
      'Rooftop Access',
      'Gym',
      'Concierge Service'
    ],
    location: {
      lat: 34.044227,
      lng: -118.267251,
      city: 'Los Angeles',
      state: 'California',
      zipCode: '90014'
    },
    agent: {
      id: '2',
      name: 'Marcus Chen',
      email: 'marcus@luxestate.com',
      phone: '+1 (213) 555-5678',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    listedDate: '2023-10-05',
    yearBuilt: 2010,
    isFeatured: true
  },
  {
    id: '3',
    title: 'Spacious Family Home',
    type: 'house',
    price: 850000,
    address: '789 Suburban Lane, Pasadena, CA 91104',
    description: 'This beautiful family home offers plenty of space inside and out. With a large backyard, updated kitchen, and spacious bedrooms, it\'s perfect for families looking for comfort and convenience.',
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    features: [
      'Large Backyard',
      'Updated Kitchen',
      'Fireplace',
      'Two-Car Garage',
      'Patio',
      'Garden',
      'Central Air',
      'Walk-in Closets'
    ],
    location: {
      lat: 34.161693,
      lng: -118.138039,
      city: 'Pasadena',
      state: 'California',
      zipCode: '91104'
    },
    agent: {
      id: '3',
      name: 'Sarah Johnson',
      email: 'sarah@luxestate.com',
      phone: '+1 (626) 555-9012',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    listedDate: '2023-11-12',
    yearBuilt: 1998,
    isFeatured: true
  },
  {
    id: '4',
    title: 'Beachfront Condo',
    type: 'condo',
    price: 750000,
    address: '101 Ocean Blvd, Santa Monica, CA 90401',
    description: 'Wake up to stunning ocean views in this beachfront condo. Featuring a renovated interior, balcony, and access to building amenities including a pool and fitness center.',
    bedrooms: 2,
    bathrooms: 2,
    area: 110,
    images: [
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    features: [
      'Ocean View',
      'Balcony',
      'Pool',
      'Fitness Center',
      'Secured Building',
      'Parking Space',
      'Beach Access',
      'In-unit Laundry'
    ],
    location: {
      lat: 34.010023,
      lng: -118.496948,
      city: 'Santa Monica',
      state: 'California',
      zipCode: '90401'
    },
    agent: {
      id: '1',
      name: 'Jennifer Walker',
      email: 'jennifer@luxestate.com',
      phone: '+1 (310) 555-1234',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    listedDate: '2023-12-03',
    yearBuilt: 2005,
    isFeatured: false
  },
  {
    id: '5',
    title: 'Rustic Mountain Cabin',
    type: 'house',
    price: 420000,
    address: '543 Pine Ridge, Big Bear, CA 92315',
    description: 'Escape to this charming mountain cabin surrounded by nature. The property offers a cozy interior with a stone fireplace, wooden beams, and a spacious deck for enjoying the mountain views.',
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    images: [
      'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    features: [
      'Stone Fireplace',
      'Wooden Beams',
      'Deck',
      'Mountain Views',
      'Hot Tub',
      'Hiking Trails Nearby',
      'Wood Stove',
      'Storage Shed'
    ],
    location: {
      lat: 34.261024,
      lng: -116.894188,
      city: 'Big Bear',
      state: 'California',
      zipCode: '92315'
    },
    agent: {
      id: '2',
      name: 'Marcus Chen',
      email: 'marcus@luxestate.com',
      phone: '+1 (213) 555-5678',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    listedDate: '2024-01-15',
    yearBuilt: 1985,
    isFeatured: false
  },
  {
    id: '6',
    title: 'Luxury Highrise Penthouse',
    type: 'condo',
    price: 1800000,
    address: '888 Skyline Drive, Los Angeles, CA 90071',
    description: 'Experience luxury living in this stunning penthouse with panoramic city views. The property features high-end finishes, a gourmet kitchen, and access to premium building amenities.',
    bedrooms: 3,
    bathrooms: 3.5,
    area: 300,
    images: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    features: [
      'Panoramic Views',
      'Gourmet Kitchen',
      'Floor-to-Ceiling Windows',
      'Private Elevator',
      'Concierge Service',
      'Infinity Pool',
      'Spa',
      'Wine Room'
    ],
    location: {
      lat: 34.051596,
      lng: -118.254004,
      city: 'Los Angeles',
      state: 'California',
      zipCode: '90071'
    },
    agent: {
      id: '3',
      name: 'Sarah Johnson',
      email: 'sarah@luxestate.com',
      phone: '+1 (626) 555-9012',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    listedDate: '2024-02-20',
    yearBuilt: 2020,
    isFeatured: true
  }
];

// Simulate fetching properties with filters
export async function getProperties(filters: any = {}): Promise<Property[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filteredProperties = [...MOCK_PROPERTIES];
      
      // Apply filters if provided
      if (filters) {
        // Filter by featured
        if (filters.featured) {
          filteredProperties = filteredProperties.filter(p => p.isFeatured);
        }
        
        // Filter by property type
        if (filters.type) {
          filteredProperties = filteredProperties.filter(p => p.type === filters.type);
        }
        
        // Filter by location
        if (filters.location) {
          filteredProperties = filteredProperties.filter(p => 
            p.address.toLowerCase().includes(filters.location.toLowerCase()) ||
            p.location.city.toLowerCase().includes(filters.location.toLowerCase())
          );
        }
        
        // Filter by price range
        if (filters.priceRange) {
          const [minPrice, maxPrice] = filters.priceRange.split('-');
          if (minPrice && maxPrice) {
            filteredProperties = filteredProperties.filter(p => 
              p.price >= parseInt(minPrice) && p.price <= parseInt(maxPrice)
            );
          } else if (minPrice.endsWith('+')) {
            const min = parseInt(minPrice);
            filteredProperties = filteredProperties.filter(p => p.price >= min);
          }
        }
        
        // Filter by min/max bedrooms
        if (filters.minBedrooms) {
          filteredProperties = filteredProperties.filter(p => p.bedrooms >= parseInt(filters.minBedrooms));
        }
        if (filters.maxBedrooms) {
          filteredProperties = filteredProperties.filter(p => p.bedrooms <= parseInt(filters.maxBedrooms));
        }
        
        // Filter by min/max bathrooms
        if (filters.minBathrooms) {
          filteredProperties = filteredProperties.filter(p => p.bathrooms >= parseInt(filters.minBathrooms));
        }
        if (filters.maxBathrooms) {
          filteredProperties = filteredProperties.filter(p => p.bathrooms <= parseInt(filters.maxBathrooms));
        }
        
        // Filter by min/max area
        if (filters.minArea) {
          filteredProperties = filteredProperties.filter(p => p.area >= parseInt(filters.minArea));
        }
        if (filters.maxArea) {
          filteredProperties = filteredProperties.filter(p => p.area <= parseInt(filters.maxArea));
        }
        
        // Apply limit if provided
        if (filters.limit) {
          filteredProperties = filteredProperties.slice(0, parseInt(filters.limit));
        }
      }
      
      resolve(filteredProperties);
    }, 500);
  });
}

// Simulate fetching a property by ID
export async function getPropertyById(id: string): Promise<Property | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const property = MOCK_PROPERTIES.find(p => p.id === id) || null;
      resolve(property);
    }, 300);
  });
}

// Simulate fetching similar properties
export async function getSimilarProperties(currentId: string, propertyType: string, location: string, limit: number = 3): Promise<Property[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Filter properties by type and location, excluding the current property
      let similarProperties = MOCK_PROPERTIES.filter(p => 
        p.id !== currentId && 
        (p.type === propertyType || p.location.city === location)
      );
      
      // Sort by relevance (matching both type and location would be most relevant)
      similarProperties.sort((a, b) => {
        const aRelevance = (a.type === propertyType ? 1 : 0) + (a.location.city === location ? 1 : 0);
        const bRelevance = (b.type === propertyType ? 1 : 0) + (b.location.city === location ? 1 : 0);
        return bRelevance - aRelevance;
      });
      
      // Apply limit
      similarProperties = similarProperties.slice(0, limit);
      
      resolve(similarProperties);
    }, 500);
  });
}