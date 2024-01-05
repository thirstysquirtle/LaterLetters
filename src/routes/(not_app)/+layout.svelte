<script>
    import "$lib/app.css";
</script>



<main class="grow flex items-center md:m-3 flex-col">
    <slot />
</main>

<footer class="font-semibold text-blue-50 flex w-full justify-center gap-4 p-4 border-t border-dashed">
    <a href="/login">
        <div>Login</div>
    </a>
    <a href="/terms">
        <div>Terms of Service</div>
    </a>

</footer>
