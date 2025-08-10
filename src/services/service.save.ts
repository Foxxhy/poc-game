export const serviceSave = {
    save: (key: string, value: unknown): void => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    load: (key: string): unknown | null => {
        const item = localStorage.getItem(key);
        if (!item) return null;
        return JSON.parse(item);
    },
    formater: (key: string): string => key.toUpperCase(),
}