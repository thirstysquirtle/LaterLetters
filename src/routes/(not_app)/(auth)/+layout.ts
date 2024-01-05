import { Configuration, AuthApi } from "$lib/openapi-fetch";
import { PUBLIC_API_ENDPOINT } from "$env/static/public";

export function load() {
    const auth_api = new AuthApi(new Configuration({ basePath: PUBLIC_API_ENDPOINT }))
    return { auth_api }
}