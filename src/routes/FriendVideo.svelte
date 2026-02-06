<script>
    export let friendStream = null;
    let videoElement = null;

    $: if (friendStream && videoElement) {
        videoElement.srcObject = friendStream;
    }
</script>

<video 
    autoplay bind:this={videoElement} 
    class="w-full h-full object-cover ring-6 ring-red-400 rounded-3xl"
></video>
