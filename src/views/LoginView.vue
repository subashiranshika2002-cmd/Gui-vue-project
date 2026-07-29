<template>
  <div class="relative min-h-screen bg-black">

    
<img
:src="loginCover"
class="absolute inset-0 h-full w-full object-contain md:object-cover"
alt="background"/>

   
<div class="absolute inset-0 bg-black/60"></div>

   
<div class="relative z-10 flex min-h-screen items-center px-6">

<div class="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2">

        
<div class="text-white">
<h1 class="text-4xl font-extrabold md:text-5xl">
 Welcome to <span class="text-yellow-300">VoltEdge</span>
</h1>

<p class="mt-4 text-lg text-gray-200">
Enter your details to continue </p>

         
<form class="mt-8 max-w-md space-y-5" @submit.prevent="handleLogin">
<div>
<label class="mb-2 block text-sm font-semibold">
Email
</label>
<input
v-model="email"
type="email"
placeholder="Enter your email"
class="w-full rounded-xl border border-white/30 bg-white/20 p-3 text-white placeholder-white/70 backdrop-blur-md outline-none focus:border-white"/>
</div>

<div>
<label class="mb-2 block text-sm font-semibold">
Phone Number
</label>
<input
v-model="phone"
type="tel"
placeholder="Enter your phone number"
class="w-full rounded-xl border border-white/30 bg-white/20 p-3 text-white placeholder-white/70 backdrop-blur-md outline-none focus:border-white"/>
</div>
<p v-if="errorMsg" class="text-sm text-red-400">
{{ errorMsg }}
</p>

<button
type="submit"
:disabled="loading"
class="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold transition hover:bg-blue-700 disabled:opacity-50">
{{ loading ? 'Logging in...' : 'Login' }}
</button>
</form>
</div>
<div></div></div>
</div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import loginCover from '../assets/picture/homecover.jpg'

const router = useRouter()

const email = ref('')
const phone = ref('')
const errorMsg = ref('')
const loading = ref(false)

function handleLogin() {
  errorMsg.value = ''

  if (!email.value || !phone.value) {
    errorMsg.value = 'Please fill in both fields'
    return
  }

loading.value = true
setTimeout(() => {
localStorage.setItem('user', JSON.stringify({ email: email.value, phone: phone.value }))
loading.value = false
router.push({ name: 'landing' })
}, 500)
}
</script>