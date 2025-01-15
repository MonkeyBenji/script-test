self.addEventListener('activate', async () => {
    console.log('Registering Comic Sans');
    await chrome.scripting.registerContentScripts([{
        id: "comic-sans",
        js: ["scripts/samples/comic-sans.user.js"],
        matches: ["<all_urls>"],
        runAt: "document_end",
    }]);
    const scripts = await chrome.scripting.getRegisteredContentScripts();
    console.log({scripts});
})