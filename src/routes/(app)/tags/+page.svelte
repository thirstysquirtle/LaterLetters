<script lang="ts">
    import type { CreateLetterRequestTagListValue } from "$lib/openapi-fetch";
    import { onMount } from "svelte";

    export let data;
    let tags_array: CreateLetterRequestTagListValue = {};

    onMount(async ()=>{
        tags_array = await data.letters_api.getTags();
        console.log(tags_array);
    })

</script>


<ul>
    {#each Object.values(tags_array) as tag} 
        <li style="border-color: {tag.color};" class="border-2 border-dashed">{tag.name}</li>
    {/each}
</ul>