<script lang="ts">
    import { onMount } from "svelte";
    import {page} from "$app/stores";
    export let data;
    const url = $page.url;
    const tag_name = url.searchParams.get("name");
    const tag_color = url.searchParams.get("color")

    let letters = [];

    onMount(async () => {
        letters = await data.letters_api.getLettersByTag({ tagId: `${tag_name}${tag_color}` });
        console.log(letters);
    });
</script>

<h1 style="border-color: {tag_color};" class="border-4 border-solid font-bold text-lg bg-themeAccent px-4 py-1 m-2 rounded-md" >{tag_name}</h1>
<ul>
    {#each letters as letter}
        <li>
            <button>
                {letter.body}
            </button>
        </li>
    {/each}
</ul>
