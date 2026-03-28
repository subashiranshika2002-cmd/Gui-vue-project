<template>
  <div>
    <nav class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 shadow">
      <h1 class="text-3xl font-extrabold text-center">
        My Collection
      </h1>

      <p class="mt-2 text-center text-sm text-blue-100">
        Easy • Fast • Smart Shopping — Order Now 🛒
      </p>

      <div class="mt-3 text-center">
        <button class="rounded bg-white px-4 py-1 text-blue-700 hover:bg-gray-200">
          Shop Now
        </button>
      </div>
    </nav>

    <router-view />
  </div>
</template>