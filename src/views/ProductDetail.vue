<script setup lang="ts">
import{ ref, onMounted} from 'vue'
import { useRoute } from  'vue-router'
import { d } from 'vue-router/dist/index-DFCq6eJK.js'

const route = useRoute()
const product = ref<any>(null)

onMounted(async () =>{
    const res = await fetch(`https://dummyjson.com/products/${route.params.id}`)
  product.value = await res.json()

})
</script>
<template>
    <div class="p-6">
        <RouterLink to="/" class="mb-4 inline-block text-blue-600 underline">
      Back to Product List
    </RouterLink>
   <div v-if="product" class="rounded-lg border p-6 shadow">
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="mb-4 h-64 w-full rounded object-cover"
      />
      <h1 class="text-3xl font-bold">{{ product.title }}</h1>
      <p class="mt-4 text-gray-700">{{ product.description }}</p>
      <p class="mt-4 text-xl font-semibold text-green-600">
        ${{ product.price }}
      </p>
      <p class="mt-2">Category: {{ product.category }}</p>
    </div>
    </div>
</template>