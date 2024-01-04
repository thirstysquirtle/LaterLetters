<script>
    let showPassword = false;
    let showConfirm = false;

    let password = "";
    let confirmPass = "";
    let email = "";
</script>


<div class="w-[min(500px,100%)] p-2 sm:p-0 flex flex-col gap-4 mt-28">
    <h1 class="text-3xl">Create an Account</h1>
    <form on:submit|preventDefault class="flex flex-col text-2xl gap-4 justify-center">
        <input required placeholder="Email" class="w-full rounded-sm p-1 text-black" id="email" name="email" type="text" bind:value={email} />

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

        <div class="flex items-center bg-white rounded-sm px-2 py-1">
            <input
                required
                placeholder="Confirm Password"
                class="w-full bg-transparent peer
             flex-grow text-black"
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                on:input={(e) => (confirmPass = e.currentTarget.value)}
            />
            <label class="{confirmPass.length == 0 ? 'opacity-0' : 'opacity-50'} cursor-pointer aspect-square h-[1.5em] hover:opacity-75" for="showConfirm">
                <input class="hidden peer" type="checkbox" bind:checked={showConfirm} name="showConfirm" id="showConfirm" />
                <img class="block peer-checked:hidden" src="/show-pass.png" alt="show password button" />
                <img class="hidden peer-checked:block" src="/hide-pass.png" alt="hide password button" />
            </label>
        </div>

        <button class="rounded-sm text-txtSec bg-themeAccent hover:outline p-2" type="submit">Register</button>
    </form>
    <div class="text-left text-lg">
        <h2>Already have an account? <a class="font-bold" href="/login">Click Here to Login</a></h2>
    </div>
</div>
