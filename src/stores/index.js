import { writable } from "svelte/store"
import { browser } from "$app/env"

const storedUser = browser && JSON.parse(localStorage.getItem("user")) || {
    guest: true
};

export let user = writable(browser && storedUser)
export let showModal = writable(false)
