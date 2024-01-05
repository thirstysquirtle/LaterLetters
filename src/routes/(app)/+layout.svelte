<script lang="ts">
    import  { Tabs } from "$lib/types.ts";

    import "$lib/app.css";
    import SvgIcons from "$lib/components/SVGs/SVGIcons.svelte";
    import { onMount, setContext } from "svelte";
    import { page } from "$app/stores";
    import * as openapi from "$lib/openapi-fetch/index";
    import {PUBLIC_API_ENDPOINT} from "$env/static/public";
    let config = new openapi.Configuration({
        basePath: PUBLIC_API_ENDPOINT
    })


    setContext("LettersApi",new openapi.LettersApi(config));
    
    
    let activeTab: Tabs = $page.data.tab;
    const footerIconNames = Object.values(Tabs);

    onMount(() => {
        console.log(PUBLIC_API_ENDPOINT);
    });
</script>
<main class="grow flex items-center md:m-3 flex-col">
    <slot />
</main>


<footer class="md:mx-3 mt-2 md:rounded-md md:border-black md:border-2 bg-themeAccent text-txtSec sticky bottom-0 flex justify-evenly">
    {#each footerIconNames as name}
        {@const active = activeTab === name}
        <a on:click={() => {activeTab = name}} href="/{name.toLowerCase()}">
            <div class="transition-all stroke-txtPrim {active ? 'active' : ''} cursor-pointer flex flex-col justify-center items-center m-2 p-1">
                <figure class="w-[clamp(1.5rem_,12vw,_3rem)] {active ? 'scale-75' : ''}">
                    <SvgIcons iconName={name} />
                </figure>
                <h2 class=" {active ? 'block' : 'hidden'} flex justify-center text-txtPrim font-extrabold text-xs">{name}</h2>
            </div>
        </a>
    {/each}
</footer>

<style>
    .active {
        @apply bg-themeBG  rounded-lg scale-110;
    }
</style>
