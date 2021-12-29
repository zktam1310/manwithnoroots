<script>
import '../css/app.css'
import { onMount, afterUpdate, beforeUpdate, onDestroy } from 'svelte';
import { goto } from '$app/navigation'
import { user } from '../stores/index'
var isHorizontal


onMount(() => {

    // const scrollContainer = document.querySelector("man_content_wrapper");

    // scrollContainer.addEventListener("wheel", (evt) => {
    //     evt.preventDefault();
    //     scrollContainer.scrollLeft += evt.deltaY;
    // });

})

afterUpdate(() => {
    checkCurrentPage()
})

function handleWheel (e) {

    if (e.deltaY != 0)
    window.scroll(window.scrollX + e.deltaY * 3, window.scrollY)

    e.preventDefault()

}

function horizontalScroll () {

}


function checkCurrentPage () {
    const current_page = location.pathname

    // var nav_btn = document.getElementsByClassName("nav_btn");

    // for (var i = 0; i < nav_btn.length; i++) {
    //     nav_btn[i].classList.remove('active')
    //     if (nav_btn[i].getAttribute('href') == current_page) {
    //         nav_btn[i].classList.add('active')
    //     }
    // }

    if (location.pathname == "/yohankrugger") {
        isHorizontal = true
    } else {
        isHorizontal = false
    }
}

function logout () {
    user.set({
        guest: true
    })
    localStorage.removeItem('user')
    alert('Signed Out Successfully.')
    console.log(location.pathname)
    if (location.pathname == '/') {
        location.reload()
    } else {
        goto('/')
    }
}

</script>


{#if !isHorizontal}

<div class="page_wrapper">

    <!-- <nav>
        <a class="nav_btn" href="/">Home</a>
        {#if $user.username}
            <a class="nav_btn" href="/dashboard">Dashboard</a>
        {/if}
        <a class="nav_btn" href="/about">About</a>
        {#if $user.username}
        <button on:click={logout} class="ml-auto">Logout</button>
        {/if}
    </nav> -->

    <div class="content_wrapper">
        <slot/>
    </div>

    <footer>
        &copy; Man with no roots - 2021 - All rights reserved
    </footer>

</div>

{:else}

<div class="man_page_wrapper">

    <!-- <nav>
        <a class="nav_btn" href="/">Home</a>
        {#if $user.username}
            <a class="nav_btn" href="/dashboard">Dashboard</a>
        {/if}
        <a class="nav_btn" href="/about">About</a>
        {#if $user.username}
        <button on:click={logout} class="ml-auto">Logout</button>
        {/if}
    </nav> -->

    <div class="man_content_wrapper">
        <slot/>
    </div>

    <footer>
        &copy; Man with no roots - 2021 - All rights reserved
    </footer>

</div>

{/if}

<svelte:window on:wheel={handleWheel} />

