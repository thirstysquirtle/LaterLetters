<script>
    import ErrorBox from "$lib/components/ErrorBox.svelte";
    import { goto } from "$app/navigation";
    let showPassword = false;
    let showConfirm = false;

    let password = "";
    let confirmPass = "";
    let email = "";
    export let data;

    let error_code = 0;

    async function register() {
        if (password === confirmPass) {
            try {
                await data.auth_api.registerUser({ loginUserRequest: { email, password } });
                await goto("/write");
            } catch (error) {
                // @ts-ignore
                error_code = error.response.status;
                email = "";
                password = "";
                confirmPass = "";
            }
        }
    }
</script>

<div class="w-[min(500px,100%)] p-2 sm:p-0 flex flex-col gap-4 mt-[clamp(0.5rem,4vw,8rem)]">
    <h1 class="text-3xl">Create an Account</h1>
    <form on:submit|preventDefault={register} class="flex flex-col text-2xl gap-4 justify-center">
        <input required placeholder="Email/Username" class="w-full rounded-sm p-1 text-black" id="email" name="email" type="text" bind:value={email} />

        <div class="flex items-center bg-white rounded-sm px-2 py-1">
            <input
                required
                placeholder="Password"
                class="w-full bg-transparent
             flex-grow text-black"
                value={password}
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

        <div class="flex items-center bg-white rounded-sm px-2 py-1">
            <input
                required
                placeholder="Confirm Password"
                class="w-full bg-transparent peer
             flex-grow text-black"
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPass}
                on:input={(e) => (confirmPass = e.currentTarget.value)}
            />
            <label class="{confirmPass.length == 0 ? 'opacity-0' : 'opacity-50'} cursor-pointer aspect-square h-[1.5em] hover:opacity-75" for="showConfirm">
                <input class="hidden peer" type="checkbox" bind:checked={showConfirm} name="showConfirm" id="showConfirm" />
                <img class="block peer-checked:hidden" src="/show-pass.png" alt="show password button" />
                <img class="hidden peer-checked:block" src="/hide-pass.png" alt="hide password button" />
            </label>
        </div>

        {#if error_code === 413}
            <ErrorBox heading={"Email too long"} body={"Please use a shorter email address"} />
        {:else if error_code === 500}
            <ErrorBox heading={"Error"} body={"Either this email already exists, or our server is having issues."} />
        {/if}
        <div class="text-[1rem] pr-1 flex items-center gap-1">
            <label for="acceptTerms">By creating an account, you agree to our <a href="/terms">Terms</a></label>
            <input required type="checkbox" name="acceptTerms" id="acceptTerms" />
        </div>
        <button class="rounded-sm text-txtSec bg-themeAccent hover:outline p-2" type="submit">Register</button>
    </form>
    <div class="text-left text-lg">
        <h2>Already have an account? <a href="/login">Click Here to Login</a></h2>
    </div>
    <ErrorBox heading={"Usernames"} body={"If you use a username instead of an email, you won't be able to reset your password. However, usernames are recommended as they are better for your privacy."} />
</div>

<style>
    a {
        font-weight: 700;
        white-space: nowrap;
        color: rgb(159, 194, 237);
    }
</style>
