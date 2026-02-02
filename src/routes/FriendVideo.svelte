<script>
    export let friendStream = null;
    let videoElement = null;

    $: if (friendStream && videoElement) {
        videoElement.srcObject = friendStream;
    }
</script>

<video autoplay bind:this={videoElement} class="rounded-lg w-full ring-2 ring-red-400"></video>
