// Mock favorites data for demonstration
let MOCK_FAVORITES: { userId: string; propertyId: string }[] = [
  { userId: '1', propertyId: '1' },
  { userId: '1', propertyId: '3' }
];

// Simulate adding/removing a property from favorites
export async function toggleFavorite(propertyId: string, userId: string = '1'): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const existingIndex = MOCK_FAVORITES.findIndex(
        f => f.userId === userId && f.propertyId === propertyId
      );
      
      if (existingIndex !== -1) {
        // Remove from favorites
        MOCK_FAVORITES.splice(existingIndex, 1);
        resolve(false); // Not a favorite anymore
      } else {
        // Add to favorites
        MOCK_FAVORITES.push({ userId, propertyId });
        resolve(true); // Is now a favorite
      }
    }, 300);
  });
}

// Simulate checking if a property is in favorites
export async function isFavorite(propertyId: string, userId: string = '1'): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isFav = MOCK_FAVORITES.some(
        f => f.userId === userId && f.propertyId === propertyId
      );
      resolve(isFav);
    }, 200);
  });
}

// Simulate getting all favorite properties for a user
export async function getFavoritePropertyIds(userId: string = '1'): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const favoriteIds = MOCK_FAVORITES
        .filter(f => f.userId === userId)
        .map(f => f.propertyId);
      resolve(favoriteIds);
    }, 300);
  });
}