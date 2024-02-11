<script lang="ts">
    import { onMount } from "svelte";
    import type { ArrayOfLettersInner } from "$lib/openapi-fetch/models/ArrayOfLettersInner.js";
    import LoadingCheckmark from "$lib/components/LoadingCheckmark.svelte";
    export let data;
    let letters: ArrayOfLettersInner[] = [];
    let loading = false;

    onMount(async () => {
        setTimeout(() => {
            loading = true;
        }, 300);
        letters = await data.letters_api.queryLetters();
        loading = false;
        console.log(letters);
    });

    let currentLetterIndex = 0;
</script>

<div class="relative h-full w-full flex justify-between px-2 items-center gap-3">
    {#if letters.length > 0}
        <button
            on:click={() => {
                if (currentLetterIndex != 0) currentLetterIndex--;
            }}
        >
            ←
        </button>
        <div class="flex flex-col items-center gap-2 h-full flex-grow">
            <p class="flex-grow flex items-center justify-center border-white border-solid border rounded-md w-full my-2">{letters[currentLetterIndex].body}</p>
            <div class="flex-grow-0 my-1 px-1 w-full">
                <h2>Tags:</h2>
                <ul class="flex gap-1 my-1">
                    {#each letters[currentLetterIndex].tagIds as tagId}
                        {@const tag = letters[currentLetterIndex].tagList[tagId]}
                        <li style="border-color: {tag.color};" class="px-1 w-fit rounded-sm bg-themeAccent border border-solid flex justify-center">{tag.name}</li>
                    {/each}
                </ul>
            </div>
        </div>

        <button
            on:click={() => {
                if (currentLetterIndex + 1 != letters.length) currentLetterIndex++;
            }}>→</button
        >
    {:else if loading == true}
    <aside class="absolute grid place-items-center inset-0 h-full">
        <LoadingCheckmark spinnerIsSpinning={true}></LoadingCheckmark>
    </aside>
    {/if}
</div>
