<script>
    import { onMount } from "svelte";

    let videoElement = null;
    export let myStream = null;

    $: if (myStream && videoElement) {
        videoElement.srcObject = myStream;
    }

    function init() {
        navigator.mediaDevices
            .getUserMedia({
                audio: true,
                video: { facingMode: "user", width: 1280, height: 1280 },
            })
            .then((stream) => {
                myStream = stream;
            });
    }

    onMount(() => {
        init();
    });
</script>

<video 
    autoplay muted bind:this={videoElement} 
    class="w-full h-full object-cover ring-6 ring-green-400 rounded-3xl"
></video>
