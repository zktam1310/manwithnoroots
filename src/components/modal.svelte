<script>
  import { showModal } from '../stores/index'
  import { onMount } from 'svelte'
  export let title
  export let formType

  //Declare Form Data Variable

  //1. Add Address
  let type = 'create'
  let name
  let phone
  let street
  let city
  let state
  let zip_code
  let country


  onMount(() => {
    console.log(formType)
  })



  function appendModal () {
    if ($showModal == false) {
      $showModal = true
    } else {
      $showModal = false
    }
  }

  function submitForm () {
    if (formType == 'addAddress') {

    }
  }

</script>

<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:px-4 sm:items-start w-full">
            <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                {title}
              </h3>
              <div class="form_group">
                  <div>
                      <label for='name'>Full Name</label>
                  </div>
                  <div>
                      <input type="text" id='name' bind:value={name}/>
                  </div>
              </div>
              <div class="form_group">
                  <div>
                      <label for='phone'>Contact No.</label>
                  </div>
                  <div>
                      <input type="text" id='phone' bind:value={phone}/>
                  </div>
              </div>
              <div class="form_group">
                  <div>
                      <label for='street'>Street</label>
                  </div>
                  <div>
                      <input type="text" id='street' bind:value={street}/>
                  </div>
              </div>
              <div class="form_group">
                  <div>
                      <label for='city'>City</label>
                  </div>
                  <div>
                      <input type="text" id='city' bind:value={city}/>
                  </div>
              </div>
              <div class="form_group">
                  <div>
                      <label for='username'>State</label>
                  </div>
                  <div>
                      <input type="text" id='state' bind:value={state}/>
                  </div>
              </div>
              <div class="form_group">
                  <div>
                      <label for='zip_code'>Zip Code</label>
                  </div>
                  <div>
                      <input type="text" id='zip_code' bind:value={zip_code}/>
                  </div>
              </div>
              <div class="form_group">
                  <div>
                      <label for='country'>Country</label>
                  </div>
                  <div>
                      <input type="text" id='country' bind:value={country}/>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-center">
          <button on:click={submitForm} class="m-3">Confirm</button>
          <button on:click={appendModal} class="m-3">Cancel</button>
        </div>
      </div>
    </div>
  </div>