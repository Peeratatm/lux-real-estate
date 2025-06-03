export interface Booking {
  id: string;
  propertyId: string;
  agentId: string;
  userId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface BookingCreateData {
  propertyId: string;
  agentId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
}