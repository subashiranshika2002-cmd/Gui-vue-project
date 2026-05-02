<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="mx-auto max-w-5xl">
      <RouterLink
        to="/products"
        class="mb-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        ← Back to Products
      </RouterLink>

      <div
        v-if="product"
        class="grid gap-8 rounded-2xl bg-white p-6 shadow md:grid-cols-2"
      >
        <div class="flex items-center justify-center rounded-2xl bg-gray-100 p-6">
          <img
            :src="product.images?.[0] || product.thumbnail"
            :alt="product.title"
            class="h-80 w-full object-contain"
          />
        </div>

        <div class="flex flex-col justify-center">
          <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
            {{ product.category }}
          </p>

          <h1 class="mb-4 text-3xl font-extrabold text-gray-800">
            {{ product.title }}
          </h1>

          <p class="mb-6 leading-7 text-gray-600">
            {{ product.description }}
          </p>

          <p class="mb-4 text-3xl font-bold text-green-600">
            ${{ product.price }}
          </p>

          <div class="mb-6 flex gap-3">
            <span class="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
              Rating: {{ product.rating ?? 'N/A' }}
            </span>

            <span class="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
              Stock: {{ product.stock ?? 'N/A' }}
            </span>
          </div>

          <RouterLink
  :to="`/payment/${product.id}`"
  class="w-fit rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
>
  Buy Now
</RouterLink>
        </div>
      </div>

      <div
        v-else
        class="rounded-2xl bg-white p-8 text-center text-gray-600 shadow"
      >
        Product not found.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

import tvImg from '../assets/product-extra/tv.jpg'
import fridgeImg from '../assets/product-extra/fridge.jpg'
import washingMachineImg from '../assets/product-extra/washing-machine.jpg'

const route = useRoute()
const product = ref(null)

// local extra products
const localProducts = [
  {
    id: 1001,
    title: 'Samsung Smart TV 55 Inch',
    category: 'tv',
    price: 899.99,
    thumbnail: tvImg,
    images: [tvImg],
    description:
      'A modern smart TV with clear display quality, entertainment features, and stylish design for your home.',
    rating: 4.7,
    stock: 12,
  },
  {
    id: 1002,
    title: 'LG Double Door Fridge',
    category: 'fridge',
    price: 1299.99,
    thumbnail: fridgeImg,
    images: [fridgeImg],
    description:
      'A spacious and energy-efficient refrigerator designed for modern families and everyday kitchen needs.',
    rating: 4.6,
    stock: 8,
  },
  {
    id: 1003,
    title: 'Samsung Washing Machine',
    category: 'washing machine',
    price: 799.99,
    thumbnail: washingMachineImg,
    images: [washingMachineImg],
    description:
      'An efficient washing machine built for convenience, clean results, and reliable household performance.',
    rating: 4.5,
    stock: 10,
  },
]

onMounted(async () => {
  const productId = Number(route.params.id)

  // first check local products
  const localProduct = localProducts.find(item => item.id === productId)

  if (localProduct) {
    product.value = localProduct
    return
  }

  // otherwise fetch from API
  const res = await fetch(`https://dummyjson.com/products/${productId}`)
  product.value = await res.json()
})
</script>