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
  <div class="p-6 max-w-4xl mx-auto">
    <div class="bg-white p-6 rounded-lg shadow">
      <img
        :src="product.images?.[0]"
        class="h-64 w-full object-contain mb-6"
      />

      <h1 class="text-2xl font-bold mb-2">
        {{ product.title }}
      </h1>

      <p class="text-gray-600 mb-4">
        {{ product.description }}
      </p>

      <p class="text-green-600 text-xl font-bold">
        ${{ product.price }}
      </p>

      <p class="text-sm text-gray-500 mt-2">
        Category: {{ product.category }}
      </p>
    </div>
  </div>
</template>