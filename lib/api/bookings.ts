import { Booking, BookingCreateData } from '@/types/booking';

// Mock bookings data for demonstration
let MOCK_BOOKINGS: Booking[] = [
  {
    id: '1',
    propertyId: '1',
    agentId: '1',
    userId: '1',
    date: '2024-05-15',
    time: '10:00',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    message: 'I would like to see this property as soon as possible.',
    status: 'confirmed',
    createdAt: '2024-05-10T08:30:00Z'
  },
  {
    id: '2',
    propertyId: '3',
    agentId: '3',
    userId: '1',
    date: '2024-05-20',
    time: '14:00',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    message: 'I\'m interested in the backyard space.',
    status: 'confirmed',
    createdAt: '2024-05-11T14:45:00Z'
  }
];

// Simulate creating a booking
export async function createBooking(data: BookingCreateData): Promise<Booking> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newBooking: Booking = {
        id: `${MOCK_BOOKINGS.length + 1}`,
        ...data,
        userId: '1', // In a real app, this would come from the authenticated user
        status: 'confirmed',
        createdAt: new Date().toISOString()
      };
      
      MOCK_BOOKINGS.push(newBooking);
      resolve(newBooking);
    }, 800);
  });
}

// Simulate fetching all bookings for a user
export async function getUserBookings(userId: string): Promise<Booking[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const bookings = MOCK_BOOKINGS.filter(b => b.userId === userId);
      resolve(bookings);
    }, 500);
  });
}

// Simulate fetching a booking by ID
export async function getBookingById(id: string): Promise<Booking | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const booking = MOCK_BOOKINGS.find(b => b.id === id) || null;
      resolve(booking);
    }, 300);
  });
}

// Simulate cancelling a booking
export async function cancelBooking(id: string): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const bookingIndex = MOCK_BOOKINGS.findIndex(b => b.id === id);
      
      if (bookingIndex !== -1) {
        MOCK_BOOKINGS[bookingIndex].status = 'cancelled';
        resolve(true);
      } else {
        resolve(false);
      }
    }, 500);
  });
}