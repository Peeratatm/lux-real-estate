/**
 * Format a number as currency based on locale
 */
export function formatCurrency(amount: number, locale: string = 'en') {
  const currencyCode = locale === 'th' ? 'THB' : 'USD';
  const formatter = new Intl.NumberFormat(locale === 'th' ? 'th-TH' : 'en-US', {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 0,
  });
  
  return formatter.format(amount);
}

/**
 * Format a date string to a readable format
 */
export function formatDate(dateString: string, locale: string = 'en'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === 'th' ? 'th-TH' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}