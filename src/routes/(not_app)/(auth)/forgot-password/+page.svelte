<script>
    let email = "";
    import ErrorBox from "$lib/components/ErrorBox.svelte";
</script>

<div class="w-[min(500px,100%)] p-2 sm:p-0 flex flex-col gap-4">
    <h1 class="text-3xl">Receive a Link to Reset your Password</h1>
    <form on:submit|preventDefault class="flex flex-col text-2xl gap-4 justify-center">
        <input required placeholder="Email" class="w-full rounded-sm p-1 text-black" id="email" name="email" type="text" bind:value={email} />

        <button class="rounded-sm text-txtSec bg-themeAccent hover:outline p-2" type="submit">Confirm</button>
    </form>
    <div class="text-left text-xl">
        <h2>Looking for the login form? <a class="font-bold" href="/login">Click Here to Login</a></h2>
        <h2>Do you not have an Account? <a class="font-bold" href="/register">Click Here to Register</a></h2>
    </div>
    <ErrorBox heading={"Most Likely Doesn't Work"} body={"There was a time where this form worked, but probably not anymore by the time that you are reading this."}></ErrorBox>
</div>

<style>
    a {
        font-weight: 700;
        white-space: nowrap;
        color: rgb(159, 194, 237);
    }
</style>
