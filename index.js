export function initDarkmode(cssVarName = "darkmode", localStorageKeyName = cssVarName) {
    if (globalThis.localStorage.getItem(localStorageKeyName)) {
        !(globalThis.localStorage.getItem(localStorageKeyName) === 'true')
            ? document.documentElement.classList.remove(cssVarName)
            : document.documentElement.classList.add(cssVarName);
    }
    else if (globalThis.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add(cssVarName);
        globalThis.localStorage.setItem(localStorageKeyName, 'true');
    }
    else
        globalThis.localStorage.setItem(localStorageKeyName, 'false');
}
export function switchDarkmode(cssVarName = "darkmode", localStorageKeyName = cssVarName) {
    document.documentElement.classList.toggle(cssVarName);
    !(globalThis.localStorage.getItem(localStorageKeyName) === 'true')
        ? globalThis.localStorage.setItem(localStorageKeyName, 'true')
        : globalThis.localStorage.setItem(localStorageKeyName, 'false');
}
