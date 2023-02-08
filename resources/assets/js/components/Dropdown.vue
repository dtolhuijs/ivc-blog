<template>
    <section class="dropdown-section">
        <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-300 shadow w-44">
            <ul class="px-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                <li v-for="item in items" class="border border-gray-200 border-t-0 border-l-0 border-r-0 border-b-1">
                    <a :href="item.href" class="block px-4 py-2 hover:bg-[#00000008]">{{ item.label }}</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "Dropdown",

    props: {
        items: {
            type: Array,
            required: true
        }
    },
}

</script>
