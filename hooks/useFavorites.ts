
import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'ui-ux-tips-favorites';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<Set<string>>(() => {
        try {
            const item = window.localStorage.getItem(FAVORITES_KEY);
            return item ? new Set(JSON.parse(item)) : new Set();
        } catch (error) {
            console.error('Error reading from localStorage', error);
            return new Set();
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(favorites)));
        } catch (error) {
            console.error('Error writing to localStorage', error);
        }
    }, [favorites]);

    const toggleFavorite = useCallback((tipId: string) => {
        setFavorites(prevFavorites => {
            const newFavorites = new Set(prevFavorites);
            if (newFavorites.has(tipId)) {
                newFavorites.delete(tipId);
            } else {
                newFavorites.add(tipId);
            }
            return newFavorites;
        });
    }, []);

    return { favorites, toggleFavorite };
};
