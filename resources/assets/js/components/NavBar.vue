<template>
    <!-- Navbar -->

    <nav class="px-2 py-4 fixed ">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://ivcdenhelder.nl/" class="flex items-center">
                <img src="../../../assets/images/ivc_logo_roze2.gif" class="h-14 mr-3" alt="IVC Logo" />
            </a>
            <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li>
                        <a href="https://ivcdenhelder.nl/" class="block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:underline" aria-current="page">Home</a>
                    </li>
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium md:hover:bg-transparent md:border-0 md:p-0 md:w-auto">
                            Wie zijn wij <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                        <!-- Dropdown menu -->
                        <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-300 shadow w-44">
                            <ul class="px-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                <li class="border border-gray-200 border-t-0 border-l-0 border-r-0 border-b-1">
                                    <a href="#" class="block px-4 py-2 hover:bg-[#00000008]">Over het IVC</a>
                                </li>
                                <li class="border border-gray-200 border-t-0 border-l-0 border-r-0 border-b-1">
                                    <a href="#" class="block px-4 py-2 hover:bg-[#00000008]">Bestuur een directie</a>
                                </li>
                                <li class="border border-gray-200 border-t-0 border-l-0 border-r-0 border-b-1">
                                    <a href="#" class="block px-4 py-2 hover:bg-[#00000008]">Projecten</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-[#00000008]">Vacatures</a>
                                </li>
                            </ul>
                            <div class="py-1">
                                <a href="#" class="block px-4 py-2 text-sm hover:bg-[#00000008]">Sign in</a>
                            </div>
                        </div>
                        <!-- Dropdown menu -->
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:underline">Activiteiten</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:underline">Actueel</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Navbar -->
</template>

<script>
export default {
    name: "NavBar",
}
</script>

<style lang="scss">
    nav {
        background-color: #fafafa;
        z-index: 9;
        width: 100%;
        font-family: "Public Sans", Sans-serif;
        color: #595959;
    }
</style>

