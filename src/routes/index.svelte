<script>
import { user } from '../stores/index'
import { onMount, afterUpdate, onDestroy } from 'svelte'
import { goto } from '$app/navigation'
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
    <title>Man with no roots</title>
</svelte:head>

<div class="home_wrapper">
    <div class="logo">Man with no roots</div>
    <div class="home_nav">
        <a class="logo_yohankrugger" href="/yohankrugger">Yohan Krugger</a>
    </div>
</div>








