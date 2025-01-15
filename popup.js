const capslock = document.getElementById('capslock');
const comicSans = document.getElementById('comic-sans');

const updateState = async() => {
    document.querySelectorAll('button').forEach(button => {
        button.classList.remove('enabled');
    });
    const scripts = await chrome.scripting.getRegisteredContentScripts();
    scripts.forEach(script => {
        document.getElementById(script.id).classList.add('enabled');
    });
}

capslock.addEventListener('click', async () => {
    if (capslock.classList.contains('enabled')) {
        await chrome.scripting.unregisterContentScripts({ids: ['capslock']});
    } else {
        await chrome.scripting.registerContentScripts([{
            id: "capslock",
            js: ["scripts/samples/capslock.user.js"],
            matches: ["<all_urls>"],
            runAt: "document_end",
        }]);
    }
    await updateState();
});
comicSans.addEventListener('click', async () => {
    if (comicSans.classList.contains('enabled')) {
        await chrome.scripting.unregisterContentScripts({ids: ['comic-sans']});
    } else {
        await chrome.scripting.registerContentScripts([{
            id: "comic-sans",
            js: ["scripts/samples/comic-sans.user.js"],
            matches: ["<all_urls>"],
            runAt: "document_end",
        }]);
    }
    await updateState();
});

updateState().then(() => {console.log('ok');});