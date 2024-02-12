import { Configuration, AuthApi } from "$lib/openapi-fetch/index";
import { PUBLIC_API_ENDPOINT } from "$env/static/public";
import { getUsernameCookie } from "$lib/functions";
import { goto } from "$app/navigation";
import { browser } from '$app/environment';
export function load() {
    if (browser) {
        if (getUsernameCookie() !== undefined) {
            goto("/write");
        }


        const auth_api = new AuthApi(new Configuration({ basePath: PUBLIC_API_ENDPOINT }))
        return { auth_api }
    }
}