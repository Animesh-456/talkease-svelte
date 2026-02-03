<script>
    import { Peer } from "peerjs";

    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";

    // Icons
    import CopyIcon from "@lucide/svelte/icons/copy";
    import CutCall from "@lucide/svelte/icons/phone-off";
    import Call from "@lucide/svelte/icons/phone";
    import Mute from "@lucide/svelte/icons/mic-off";
    import CameraOff from "@lucide/svelte/icons/camera-off";


    import MyVideo from "./MyVideo.svelte";
    import FriendVideo from "./FriendVideo.svelte";
    import { generateID } from "$lib/functions.js";


    const ME = new Peer(generateID());
    ME.on("call", incomingCall);

    let friendID = "";

    let myStream = null;
    let friendStream = null;

    function outgoingCall() {
        const call = ME.call(friendID, myStream);
        call.on("stream", (s) => (friendStream = s));
    }

    function incomingCall(call) {
        // answer the call & send mystream
        call.answer(myStream);

        // receive stream from friend & set in freindStream
        call.on("stream", (s) => (friendStream = s));
    }


    function copyID() {
        navigator.clipboard.writeText(ME.id);
    }

    function Cutcall() {
        window.location.reload();
    }
</script>

{#if !friendStream}
    <main
        class="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10"
    >
        <div class="w-full max-w-sm">
            <section class="flex flex-col gap-6">
                <h1 class="text-2xl font-bold text-center">
                    Welcome to TalkEase
                </h1>

                <div class="flex gap-3 items-center justify-center">
                    <h4 class="text-lg font-mono">My ID : <span class="font-bold">{ME.id}</span></h4>
                    <Button variant="outline" size="icon" class="cursor-copy" onclick={copyID}>
                        <CopyIcon />
                    </Button>
                </div>

                <Input type="text" placeholder="Type your friendID here..." bind:value={friendID} />
                <div class="flex items-center justify-center">
                    <button class="bg-green-500 text-white px-8 py-4 rounded-full cursor-pointer flex gap-2" onclick={outgoingCall}>
                        <Call /> Call
                    </button>
                </div>
            </section>
        </div>
    </main>
{/if}

{#if friendStream}
    <main class="w-full h-full p-4 space-y-4">
        <FriendVideo bind:friendStream />
    </main>
{/if}

{#if friendStream}
    <section id="controls" class="absolute bottom-0 w-full flex items-center justify-center gap-6 bg-black p-4">
        <button class="bg-zinc-500 text-white px-8 py-4 rounded-full cursor-pointer" onclick={() => {}}>
            <Mute />
        </button>
        <button class="bg-zinc-500 text-white px-8 py-4 rounded-full cursor-pointer" onclick={() => {}}>
            <CameraOff />
        </button>
        <button class="bg-red-500 text-white px-8 py-4 rounded-full cursor-pointer" onclick={Cutcall}>
            <CutCall onclick={Cutcall}/>
        </button>
    </section>
{/if}

<section class={friendStream ? "block" : "hidden"}>
    <div class="absolute z-10 bottom-[100px]! right-5! max-w-sm">
        <MyVideo bind:myStream />
    </div>
</section>