<script>
    export let data;
</script>

<input type="text" bind:value={data.test}>

<h1>Test</h1>
<p>{JSON.stringify(data)}</p>
