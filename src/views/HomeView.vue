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
  class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
>
  <img
    :src="product.thumbnail"
    class="h-40 w-full object-contain mb-4 bg-gray-100 p-2 rounded"
  />

  <h2 class="font-semibold text-lg">{{ product.title }}</h2>
  <p class="text-green-600 font-bold">${{ product.price }}</p>

  <RouterLink
    :to="`/product/${product.id}`"
    class="block mt-3 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
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