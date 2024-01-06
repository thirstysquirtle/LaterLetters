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


<footer class="md:mx-3 sm:mt-2 md:rounded-md md:border-black md:border-2 bg-themeAccent text-txtSec sticky bottom-0 flex justify-evenly items-center h-[max(10vh,2.5rem)]">
    {#each footerIconNames as name}
        {@const active = activeTab === name}
        <a on:click={() => {activeTab = name}} href="/{name.toLowerCase()}">
            <div class="transition-all stroke-txtPrim {active ? 'active' : ''} cursor-pointer flex flex-col justify-center items-center m-1 p-0.5 sm:m-2 sm:p-1 grow">
                <figure class="h-[max(7vh,1.75rem)] aspect-square {active ? 'scale-75' : ''}">
                    <SvgIcons iconName={name} />
                </figure>
                <!-- {#if window.innerHeight > 700}
                <h2 class=" {active ? 'block' : 'hidden'} flex justify-center text-txtPrim font-extrabold text-xs">{name}</h2>
                {/if} -->
            </div>
        </a>
    {/each}
</footer>

<style>
    .active {
        @apply bg-themeBG  rounded-lg scale-110;
    }
</style>
