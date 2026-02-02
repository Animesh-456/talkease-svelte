<script>
    let { children } = $props();
</script>

<div class="p-4 h-screen w-full">

    <!-- Header -->
    <header class="">
        <h1 class="font-bold text-2xl tracking-wide">TalkEase</h1>
    </header>



    <!-- Main -->
    <main class="min-h-[80vh]">
        {@render children()}
    </main>


    <!-- Footer -->
    <footer class="bg-pink-50">

    </footer>


</div>





