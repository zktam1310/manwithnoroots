<script>
import { user } from '../stores/index'
import { onMount, afterUpdate, onDestroy } from 'svelte'
import { goto } from '$app/navigation'
import { fade } from 'svelte/transition'
let username
let result
let browse_addresses = []


if ($user.username) {
    username = $user.username
}

onMount(() => {

    // fetchAddresses()

})

async function fetchAddresses () {

    let type = 'browse'

    const formData = {
        username,
        type
    }

    await fetch(`http://localhost:2000/addresses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => result = data);

    console.log(result)

    if (result['status'] == 'ok') {
        browse_addresses = result['data']['addresses']
        browse_addresses = browse_addresses.reverse()
    }
}

function viewAddress (addressId) {
    goto(`/address/${addressId}`)
}

</script>

<svelte:head>
    <title>Yohan Krugger</title>
</svelte:head>


<div class="logo_frame">
    <a href="/" class="logo">Man with no roots</a>
    <div class="logo_yohankrugger hide" in:fade={{ duration: 2000 }}>
        Yohan Krugger
    </div>
</div>

<div class="frame" in:fade={{ duration: 2000 }}>
    <img src="/img/yohankrugger/1.jpg" alt="Yohan Krugger">
</div>

<div class="frame" in:fade={{ duration: 2000 }}>
    <p>Yohan... <br>Yohan..<br>Yohan...</p>
</div>








