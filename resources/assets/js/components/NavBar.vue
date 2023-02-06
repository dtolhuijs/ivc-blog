<template>
    <!-- Navbar -->
    <nav class="flex items-center justify-between flex-wrap bg-gray-100 p-4">
        <div class="flex items-center flex-shrink-0 text-white">
            <a href="https://ivcdenhelder.nl/" target="_blank">
                <img src="../../../assets/images/ivc_logo_roze2.gif" width="50%" alt="logo">
            </a>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-black hover:border-black">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow flex">
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-dark hover:text-black mr-4">
                    Home
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-dark hover:text-black mr-4">
                    Wie zijn wij
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-dark hover:text-black mr-4">
                    Activiteiten
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-dark hover:text-black mr-4">
                    Actueel
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-dark hover:text-black">
                    Contact
                </a>
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

