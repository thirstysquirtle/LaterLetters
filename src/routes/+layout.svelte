<script lang="ts">
    import "$lib/app.css";
    import SvgIcons from "$lib/components/SVGs/SVGIcons.svelte";
    import { onMount } from "svelte";
    enum Tabs {
        Write = "Write",
        View = "View",
        Swipe = "Swipe",
    }
    let activeTab: Tabs = Tabs.Write;
    const footerIconNames = Object.values(Tabs);

    onMount(() => {
        console.log(footerIconNames);
    });
</script>

<main class="grow flex items-center md:m-3  flex-col">
    <slot />
</main>

<footer class="md:mx-3 mt-3 md:rounded-md bg-themeAccent text-txtSec sticky bottom-0 flex justify-evenly">
    {#each footerIconNames as name}
        {@const active = activeTab === name}
        <div class="transition-all stroke-txtSec {active ? 'active' : ''} cursor-pointer flex flex-col justify-center items-center m-2 p-1">
            <figure class="w-[clamp(1.5rem_,12vw,_3rem)] {active ? 'scale-75' : ''}">
                <SvgIcons iconName={name} />
            </figure>
            <h2 class=" {active ? 'block' : 'hidden'} flex justify-center text-txtPrim font-extrabold text-xs">{name}</h2>
        </div>
    {/each}
</footer>

<style>
    .active {
        @apply bg-themeBG stroke-txtPrim rounded-lg scale-110;
    }
</style>
