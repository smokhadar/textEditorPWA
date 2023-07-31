const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // store triggered events
    window.deferredPrompt = event;

    //remove hidden class from button

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    //show prompt
    promptEvent.prompt();

    //reset deferred prompt var
    window.deferredPrompt = null;

    // butInstall.
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //clear prompt
    window.deferredPrompt = null;
});
