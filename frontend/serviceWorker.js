addEventListener('install', (event) => {
    console.log('Service worker is installing', event);
});

addEventListener('activate', (event) => {
    console.log('Service worker is activated', event);
});

/**
 * ________________________
 */
const handleFetch = (event) => {
    const request = event.request;

    console.log('intercepted fetch!', request)
}

addEventListener('fetch', handleFetch);
