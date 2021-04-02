declare module 'google.maps';

export {}

declare global {
    interface Window {
        google: any
    }
}
