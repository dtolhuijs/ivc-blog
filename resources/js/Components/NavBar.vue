<template>
    <!-- Navbar -->

    <nav class="px-2 py-4 fixed ">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://ivcdenhelder.nl/" class="flex items-center">
                <img src="../../images/ivc_logo_roze2.gif" class="h-14 mr-3" alt="IVC Logo" />
            </a>
            <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li>
                        <a href="/" class="block py-2 pl-3 pr-4 md:border-0 md:p-0" aria-current="page">Home</a>
                    </li>
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium md:hover:bg-transparent md:border-0 md:p-0 md:w-auto">
                            <a href="/wie-zijn-wij">Wie zijn wij</a> <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                        <!-- Dropdown menu -->
                        <dropdown :items="dropdownItems"/>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 md:border-0 md:p-0">Activiteiten</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 md:border-0 md:p-0">Actueel</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 md:border-0 md:p-0">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Navbar -->
</template>

<script>
import Dropdown from "./Dropdown.vue";

export default {
    name: "NavBar",

    components: {
        Dropdown
    },

    data() {
        return {
            dropdownItems: [
                {
                    href: '/wie-zijn-wij' ,
                    label: 'Over het IVC'
                },
                {
                    href: '/bestuur-en-directie' ,
                    label: 'Bestuur een directie'
                },
                {
                    href: '#' ,
                    label: 'Projecten'
                },
                {
                    href: '#' ,
                    label: 'Vacatures'
                },
                {
                    href: '#' ,
                    label: 'Sign in'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    nav {
        background-color: #fafafa;
        z-index: 9;
        width: 100%;
        font-family: "Public Sans", Sans-serif, sans-serif;
        color: #595959;

        #navbar-dropdown {

            a, button {

                position: relative;
                color: #595959;
                text-decoration: none;

                &:hover {
                    color: #595959;
                }

                &::before {
                    content: "";
                    position: absolute;
                    display: block;
                    width: 100%;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #595959;
                    transform: scaleX(0);
                    transition: transform 0.3s ease;
                }

                &:hover::before {
                    transform: scaleX(1);
                }
            }
        }
    }
</style>

