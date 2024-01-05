<script lang="ts">
    import { goto } from "$app/navigation";
    import ErrorBox from "$lib/components/ErrorBox.svelte";
    import { error } from "@sveltejs/kit";

    let showPassword = false;

    let password = "";
    let email = "";
    let error_code = 0;
    export let data;

    async function handleLogin() {
        try {
            await data.auth_api.loginUser({ loginUserRequest: { email, password } });
            await goto("/write");
        } catch (error) {
            error_code = error.response.status;
        }
    }
</script>

<div class="w-[min(500px,100%)] p-2 sm:p-0 flex flex-col gap-4 mt-[clamp(0.5rem,4vw,8rem)]">
    <h1 class="text-3xl">Login</h1>
    <form on:submit|preventDefault={handleLogin} class="flex flex-col text-2xl gap-4 justify-center">
        <input required placeholder="Email/Username" class="w-full rounded-sm p-1 text-black" id="email" name="email" type="text" bind:value={email} />

        <div class="flex items-center bg-white rounded-sm px-2 py-1">
            <input
                required
                placeholder="Password"
                class="w-full bg-transparent
             flex-grow text-black"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                on:input={(e) => (password = e.currentTarget.value)}
            />
            <label class="{password.length == 0 ? 'opacity-0' : 'opacity-50'} cursor-pointer aspect-square h-[1.5em] hover:opacity-75" for="showPassword">
                <input class="hidden peer" type="checkbox" bind:checked={showPassword} name="showPassword" id="showPassword" />
                <img class="block peer-checked:hidden" src="/show-pass.png" alt="show password button" />
                <img class="hidden peer-checked:block" src="/hide-pass.png" alt="hide password button" />
            </label>
        </div>

        {#if error_code === 401 || error_code === 413}
            <ErrorBox heading={"Invalid Credentials"} body={"You might not have an account"} />
        {:else if error_code === 500}
            <ErrorBox heading={"Server Error"} body={"Something went wrong on our end ¯\\_(ツ)_/¯"} />
        {/if}
        <button class="rounded-sm text-txtSec bg-themeAccent hover:outline p-2" type="submit">Login</button>
    </form>
    <hr>
    <h2 class="text-lg w-full text-center">Or</h2>
    <hr>
    <button class="text-2xl rounded-sm text-txtSec bg-themeAccent hover:outline p-2" type="submit">Use Test Account</button>

    <div class="text-left text-xl">
        <h2>Need to Create an Account? <a href="/register">Click Here to Register</a></h2>

        <h2>Did you forget your password? <a href="/forgot-password">Click Here to Reset</a></h2>
    </div>
</div>

<style>
    a {
        font-weight: 700;
        white-space: nowrap;
        color: rgb(159, 194, 237);
    }
</style>
