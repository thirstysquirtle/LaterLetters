<script>
    let showPassword = false;

</script>

<div class="w-[min(500px,100%)] p-2 sm:p-0 flex flex-col gap-4 mt-28">
    <form on:submit|preventDefault class="flex flex-col text-2xl gap-2 justify-center">
        <div class="flex-col flex w-full gap-1">
            <label for="email">Email</label>
            <input class="rounded-sm px-1 text-black" id="email" name="email" type="text" />
        </div>
        <div class="flex-col flex w-full gap-1">
            <label for="password">Password</label>
            <input class="rounded-sm px-1 text-black" type="{showPassword? 'text': 'password'}" name="password" id="password" />
            <div class= "text-xl flex justify-end gap-2">
                <label for="show-pass">Show Password</label>
                <input type="checkbox" bind:checked={showPassword} name="show-pass" id="show-pass" />
            </div>
        </div>
        <button class="rounded-sm text-txtSec bg-themeAccent hover:outline  p-2" type="submit">Login</button>
    </form>
    <div class="text-left text-lg">
        <h2>Don't remember your password? <a class="font-bold" href="/forgot-password">Click Here</a></h2>
        <h2>Want to create an account? <a class="font-bold" href="/register">Click Here</a></h2>
    </div>
</div>
