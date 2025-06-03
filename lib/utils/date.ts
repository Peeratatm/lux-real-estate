import { format, parse } from 'date-fns';
import { th, enUS } from 'date-fns/locale';

/**
 * Format a date and time into a readable string
 */
export function formatDateTime(
  dateStr: string, 
  timeStr: string, 
  locale: string = 'en'
): string {
  try {
    // Parse the date string
    const date = new Date(dateStr);
    
    // Parse the time string
    const [hours, minutes] = timeStr.split(':').map(num => parseInt(num));
    date.setHours(hours, minutes);
    
    // Format the date and time
    return format(date, 'PPP p', {
      locale: locale === 'th' ? th : enUS
    });
  } catch (error) {
    console.error('Error formatting date time:', error);
    return `${dateStr} ${timeStr}`;
  }
}