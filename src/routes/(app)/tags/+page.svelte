<script lang="ts">
    import { goto } from "$app/navigation";
    import type { CreateLetterRequestTagListValue } from "$lib/openapi-fetch";
    import { onMount } from "svelte";

    export let data;
    let tags_object: CreateLetterRequestTagListValue = {};
    onMount(async () => {
        tags_object = await data.letters_api.getTags();
        delete tags_object._id;
        delete tags_object.total_count;
    });

    async function handle_tag_click(name, color) {
        goto(`/tags/tag?name=${name}&color=%23${color.substring(1)}`);
    }
</script>

<div class="h-full flex items-center w-full">
    <div class="flex flex-col justify-center items-center border-white border-dashed border rounded-md p-2 m-2 w-full min-h-[75%]">
        <h1 class="text-2xl ">Tags</h1>
        <ul class="flex-grow flex flex-wrap gap-2 justify-around w-full p-2 text-xl font-bold">
            {#each Object.entries(tags_object) as [id, tag]}
                <li style="border-color: {tag.color};" class="flex-grow w-[29%] border-2 border-dashed flex justify-center p-1 bg-themeAccent">
                    <button
                        on:click={() => {
                            handle_tag_click(tag.name, tag.color);
                        }}
                        class="w-full">{tag.name}</button
                    >
                </li>
            {/each}
        </ul>
    </div>
</div>
