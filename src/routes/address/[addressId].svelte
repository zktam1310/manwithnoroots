<script>
import { user } from '/src/stores';
import { onMount, afterUpdate, onDestroy } from 'svelte'
import { goto } from '$app/navigation'
import { page } from '$app/stores';

let addressId = $page.params.addressId

// saved address data
let selected_address = {}
let address_owner

// form toggler
let use_form = false

// form data
let username = $user.username
let result
let type = 'create'
let product
let description
let receiverName
let receiverPhone
let receiverAddress

onMount(() => {

    console.log(addressId)
    fetchAddress()

})

async function fetchAddress () {

    await fetch(`http://localhost:2000/addresses/0/${addressId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => result = data);

    console.log(result)

    if (result['status'] == 'ok') {
        selected_address = result['data']['address']
        address_owner = selected_address.owner[0].username
    } else {
        goto('/error')
    }

    console.log(selected_address)

}

function appendAddressForm () {

    if (username == undefined)
        return goto('/login')

    if (use_form == false) {
        use_form = true
    } else {
        use_form = false
    }
}

async function submitFavour () {
    const formData = {
        username,
        addressId,
        address_owner,
        product,
        description,
        receiverName,
        receiverPhone,
        receiverAddress,
        type
    }

    await fetch('http://localhost:2000/favours', {
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
        alert('Uses Address Successfully.')
        goto('/dashboard')
    } else {
        alert(result.msg)
    }

}

</script>



<div class="flex flex-wrap items-center mt-5">
    <button on:click={appendAddressForm}>Use This Address</button>
</div>



<div class='address_section'>


    {#if selected_address}

    <div class='address_card_wrapper px-0'>
        <div class='address_card'>
            <div class="w-4/5">
                <div>{selected_address.street}</div>
                <div>{selected_address.city}</div>
                <div>{selected_address.state}</div>
                <div>{selected_address.zip_code}</div>
                <div>{selected_address.country}</div>
                <div>{selected_address.name}</div>
                <div>{selected_address.phone}</div>
                <div class='mt-3 font-medium'>@{address_owner}</div>
            </div>
            <!-- <div class='w-1/5 text-right'>
                <div>
                    <button>🕹️</button>
                </div>
                <div class='mt-2'>
                    <button>✏️</button>
                </div>
                <div class='mt-2'>
                    <button>🗑️</button>
                </div>
            </div> -->
        </div>
    </div>
    {/if}

    {#if use_form == true}

    <div class="w-1/3 mt-5 ml-12">

        <div class='text-right'>
            <button on:click={appendAddressForm}>❌</button>
        </div>

        <h1 class="mb-5">Your Info</h1>

        <div class="form_group">
            <div>
                <label for='product'>Product</label>
            </div>
            <div>
                <input type="text" id='product' bind:value={product}/>
            </div>
        </div>
        <div class="form_group">
            <div>
                <label for='description'>Description</label>
            </div>
            <div>
                <input type="text" id='description' bind:value={description}/>
            </div>
        </div>
        <div class="form_group">
            <div>
                <label for='receiverName'>Receiver Full Name</label>
            </div>
            <div>
                <input type="text" id='receiverName' bind:value={receiverName}/>
            </div>
        </div>
        <div class="form_group">
            <div>
                <label for='receiverPhone'>Receiver Contact No.</label>
            </div>
            <div>
                <input type="text" id='receiverPhone' bind:value={receiverPhone}/>
            </div>
        </div>
        <div class="form_group">
            <div>
                <label for='receiverAddress'>Receiver Address</label>
            </div>
            <div>
                <textarea type="text" id='receiverAddress' bind:value={receiverAddress}/>
            </div>
        </div>
        <div class="mt-10 text-center">
            <button on:click={submitFavour}>Confirm</button>
        </div>

    </div>

    {/if}

</div>







