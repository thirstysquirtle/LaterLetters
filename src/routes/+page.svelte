<script lang="ts">
    import { slide, fade } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import { flip } from "svelte/animate";
    type Tag = {
        id: string;
        name: string;
        color: string;
    };
    let tagsList: Tag[] = [];
    let tagName: string = "";
    let tagColor = "#86b8df";
    function addTag() {
        const tagId = tagName + tagColor;
        if (tagsList.filter((tag) => tag.id == tagId).length === 0) {
            tagsList = [...tagsList, { id: tagId, name: tagName, color: tagColor }];
            console.log(tagsList);
        }
    }

    let loading = false;
    function saveLetter() {
        loading = true;
        setTimeout(()=>{loading =false}, 600)
    }
</script>

<form
    id="addLetter"
    on:submit|preventDefault={saveLetter}
    class="flex flex-col justify-start bg-themeAccent p-3 rounded-lg text-txtPrim gap-3 w-full h-full"
>
    <h1 class="font-bold">Create LaterLetter</h1>
    <textarea placeholder="Write here..." class="textInput resize-y h-full" name="laterLetter" id="laterLetter" cols="30" />

    <label class="w-full flex items-center flex-wrap gap-1" for="tag">
        <h2 class="font-bold py-[2px]">Add Tags <span class="italic">(optional)</span>:</h2>
        {#each tagsList as tag (tag.id)}
                <button
                    transition:fade={{ duration: 200, easing: cubicOut }}
                    on:click={() => (tagsList = tagsList.filter((t) => t.id != tag.id))}
                    style="border-color: {tag.color};"
                    class="hover:translate-y-[0.25ch] hover:opacity-80 cursor-pointer transition-all border-2 bg-themeBG px-1 rounded-md"
                    >{tag.name}</button
                >
        {/each}
    </label>

    <form class="hidden" autocomplete="off" id="addTag" on:submit|preventDefault={addTag} />
    <div class="w-full flex gap-2">
        <input form="addTag" bind:value={tagName} placeholder="enter tag..." class="grow textInput" type="text" name="tag" id="tag" />
        <input form="addTag" bind:value={tagColor} type="color" name="tagColor" id="tagColor" class="p-1 h-full rounded-md" />
        <button form="addTag" class="bg-themeBG p-1 rounded-md">Add</button>
    </div>

    <button class="rounded-sm bg-themeBG p-2 font-semibold" type="submit">Save Letter</button>
</form>

<style>
    .textInput {
        @apply text-[rgb(22_0_22)] p-1 bg-themeBG rounded-md;
    }
</style>
