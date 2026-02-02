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

<video autoplay muted bind:this={videoElement} class="rounded-lg w-full ring-2 ring-green-400"></video>
