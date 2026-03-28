<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="mb-6 text-center text-4xl font-bold text-blue-700">
      Product Store
    </h1>

    <div class="mb-6 flex justify-center">
      <input
        v-model="search"
        type="text"
        placeholder="Search products..."
        class="w-full max-w-md rounded-lg border p-3 shadow"
      />
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="rounded-lg bg-white p-4 shadow"
      >
        <img
  :src="product.thumbnail"
  :alt="product.title"
  class="mb-4 h-56 w-full rounded-lg bg-gray-100 object-contain p-4"
/>

        <h2 class="text-lg font-semibold">{{ product.title }}</h2>
        <p class="mb-3 text-gray-600">${{ product.price }}</p>

        <RouterLink
          :to="`/product/${product.id}`"
          class="mt-2 inline-block rounded bg-blue-600 px-4 py-2 text-white"
        >
          View Details
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const products = ref([])
const search = ref('')

onMounted(async () => {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  products.value = data.products
})

const filteredProducts = computed(() => {
  return products.value.filter(product =>
    product.title.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>