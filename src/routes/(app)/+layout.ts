import { Configuration, LettersApi } from "$lib/openapi-fetch";
import { PUBLIC_API_ENDPOINT } from "$env/static/public";
import { getUsernameCookie } from "$lib/functions";
import { goto } from "$app/navigation";

export function load() {
    const username = getUsernameCookie();
    if (username === undefined) {
        goto("/login")
    }
    function getApiKey(name: string): string {
        const lookupTable: { [key: string]: string } = {
            'X-User-Email': username!
        }
        return lookupTable[name];
    }

    const letters_api = new LettersApi(new Configuration({ basePath: PUBLIC_API_ENDPOINT, apiKey: getApiKey }))
    return { letters_api }
}