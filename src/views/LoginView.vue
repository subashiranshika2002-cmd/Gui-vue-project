<template>
  <div class="relative min-h-screen bg-black">
    
    <!-- BACKGROUND IMAGE -->
    <img
      :src="loginCover"
      class="absolute inset-0 h-full w-full object-contain md:object-cover"
      alt="background"
    />

    <!-- DARK OVERLAY -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- CONTENT -->
    <div class="relative z-10 flex min-h-screen items-center px-6">
      
      <div class="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2">

        <!-- LEFT SIDE (TEXT + FORM) -->
        <div class="text-white">
          <h1 class="text-4xl font-extrabold md:text-5xl">
            Welcome to <span class="text-yellow-300">VoltEdge</span>
          </h1>

          <p class="mt-4 text-lg text-gray-200">
            Enter your details to continue
          </p>

          <!-- FORM -->
          <form class="mt-8 max-w-md space-y-5">
            <div>
              <label class="mb-2 block text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full rounded-xl border border-white/30 bg-white/20 p-3 text-white placeholder-white/70 backdrop-blur-md outline-none focus:border-white"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                class="w-full rounded-xl border border-white/30 bg-white/20 p-3 text-white placeholder-white/70 backdrop-blur-md outline-none focus:border-white"
              />
            </div>

            <button
              class="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold transition hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>

        <!-- RIGHT SIDE (EMPTY for spacing / image focus) -->
        <div></div>

      </div>
    </div>
  </div>
</template>

<script setup>
import loginCover from '../assets/picture/homecover.jpg'
</script>