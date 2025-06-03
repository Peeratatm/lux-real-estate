import { User } from '@/types/user';

// Mock user data for demonstration
const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    phone: '+1234567890',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    phone: '+1987654321',
  }
];

// Simulated user authentication - In a real app, this would use a backend service
let currentUser: User | null = null;

// Simulate login
export async function loginUser(email: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = MOCK_USERS.find(u => u.email === email);
      
      if (user) {
        currentUser = user;
        localStorage.setItem('user', JSON.stringify(user));
        resolve(user);
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 800);
  });
}

// Simulate registration
export async function registerUser(name: string, email: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingUser = MOCK_USERS.find(u => u.email === email);
      
      if (existingUser) {
        reject(new Error('Email already registered'));
        return;
      }
      
      const newUser: User = {
        id: `${MOCK_USERS.length + 1}`,
        name,
        email,
        avatar: `https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
        phone: '',
      };
      
      MOCK_USERS.push(newUser);
      currentUser = newUser;
      localStorage.setItem('user', JSON.stringify(newUser));
      resolve(newUser);
    }, 800);
  });
}

// Simulate logout
export async function logoutUser(): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      currentUser = null;
      localStorage.removeItem('user');
      resolve();
    }, 300);
  });
}

// Simulate getting current user
export async function getCurrentUser(): Promise<User | null> {
  return new Promise(resolve => {
    setTimeout(() => {
      // Check localStorage first
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        currentUser = JSON.parse(savedUser);
      }
      
      resolve(currentUser);
    }, 300);
  });
}