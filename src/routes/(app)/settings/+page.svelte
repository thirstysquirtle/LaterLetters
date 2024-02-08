<script>
    import { goto } from "$app/navigation";
    import { PUBLIC_API_ENDPOINT } from "$env/static/public";
    import { setCookie } from "$lib/functions";

    function logout_button_handler() {
        fetch(`${PUBLIC_API_ENDPOINT}/user/logout`, {
            method: "PUT",
        })
            .then((response) => {
                if (!response.ok) {
                    console.error("Response was not OK!");
                }
                setCookie("user_email", "", -10);
                goto("/login");
            })
            .catch((error) => {
                // Handle any errors that occurred during the fetch
                setCookie("user_email", "", -10);
                goto("/login");
                console.error("Fetch error:", error);
            });
    }
</script>

<ul class="border border-white border-dashed rounded-md w-full h-full flex flex-col items-center justify-center">
    <li class="p-2 m-2 border-white border bg-themeAccent rounded-md text-lg"><button on:click={logout_button_handler}>Log Out →</button></li>
</ul>
