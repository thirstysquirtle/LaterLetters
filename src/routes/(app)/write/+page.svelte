<script lang="ts">
    import { slide, fade } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import LoadingCheckmark from "$lib/components/LoadingCheckmark.svelte";
    export let data;

    let tagsList: { [key: string]: Tag } = {};
    let tagName: string = "";
    let tagColor = "#86b8df";
    function addTag() {
        if (tagName != "" && tagColor != "") {
            const tagId = tagName + tagColor;
            tagsList[tagId] = { name: tagName, color: tagColor };
        }
    }
    let letterBody: HTMLTextAreaElement;
    let loading = false;
    let spinnerIsSpinning = true;
    async function saveLetter() {
        console.log("wut");
        console.log(letterBody.value);
        try {
            loading = true;
            spinnerIsSpinning = true;
            await data.letters_api.createLetter({ createLetterRequest: { body: letterBody.value, tagList: tagsList } });

            setTimeout(() => {
                letterBody.value = "";
                tagName = "";
                spinnerIsSpinning = false;
                
            }, 500);
            setTimeout(() => {
                    loading = false;
                }, 950);
        } catch (error) {
            console.log(error);
        }

        // loading = true;
        // const letter: Letter = {
        //     dateCreated: new Date(),
        //     body: letterBody.value,
        //     tagIds: [...tagsList.map((t) => t.id)],
        //     tags: tagsList,
        // };
        // loading = false;
    }
</script>

<form
    id="addLetter"
    on:submit|preventDefault={saveLetter}
    class="{loading
        ? 'pointer-events-none'
        : ''} relative flex flex-col justify-start bg-themeAccent p-3 rounded-lg text-txtPrim gap-3 w-full h-[100%] md:h-full border-2 border-black"
>
    <h1 class="font-bold">Create Letter</h1>
    <textarea
        bind:this={letterBody}
        placeholder="Write here..."
        class="textInput resize-y h-full border-black border-[1.5px] rounded-md"
        name="laterLetter"
        id="laterLetter"
        cols="30"
    />

    <label class="w-full flex items-center flex-wrap gap-1" for="tag">
        <h2 class="font-bold py-[2px]">Add Tags <span class="italic">(optional)</span>:</h2>
        {#each Object.entries(tagsList) as [tagId, tag] (tagId)}
            <button
                transition:fade={{ duration: 200, easing: cubicOut }}
                on:click|preventDefault={() => {
                    delete tagsList[tagId];
                    tagsList = tagsList;
                }}
                style="border-color: {tag.color};"
                class="hover:translate-y-[0.25ch] hover:opacity-80 cursor-pointer transition-all border-2 bg-themeBG px-1 rounded-md">{tag.name}</button
            >
        {/each}
    </label>

    <!-- <div class="flex flex-col gap-2 border-2 border-black p-2 bg-slate-500"> -->
    <form class="hidden" autocomplete="off" id="addTag" on:submit|preventDefault={addTag} />
    <div class="w-full flex gap-1 sm:gap-2">
        <input form="addTag" bind:value={tagName} placeholder="Enter tag..." class="grow textInput" type="text" name="tag" id="tag" />
        <input form="addTag" bind:value={tagColor} type="color" name="tagColor" id="tagColor" class="p-1 h-full rounded-md bg-themeBG" />
        <button form="addTag" class="bg-themeBG p-1 rounded-md">Add</button>
    </div>

    <button form="addLetter" class="rounded-sm bg-themeBG p-2 font-semibold" type="submit">Save Letter</button>
    <!-- </div> -->

    {#if loading}
        <aside class="absolute grid place-items-center inset-0 top-0 h-full bg-black bg-opacity-15">
            <LoadingCheckmark {spinnerIsSpinning} />
        </aside>
    {/if}
</form>

<style>
    .textInput {
        @apply text-txtPrim p-1 bg-themeBG placeholder-slate-400;
    }

    button:hover {
        outline: 2px solid;
    }
</style>
