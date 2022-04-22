<template>
  <div
    class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
  >
    <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
      <div class="sm:col-span-2">
        <a
          href="/"
          aria-label="Go home"
          title="Company"
          class="inline-flex items-center"
        >
          <span
            class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
            ><NuxtImg src="/logo.svg" class="w-32"
          /></span>
        </a>
        <div class="mt-6 lg:max-w-sm">
          <p class="text-sm text-gray-800">
            Estamos comprometidos con nuestro trabajo, pero principalmente con
            nuestros clientes.
          </p>
          <p class="mt-4 text-sm text-gray-800"></p>
        </div>
      </div>
      <div class="space-y-2 text-sm">
        <p class="text-base font-bold tracking-wide text-gray-900">Contacto</p>
        <div class="flex">
          <p class="mr-1 text-gray-800">Telefono:</p>
          <a
            href="tel:5628348062"
            aria-label="Teléfono"
            title="Teléfono"
            class="transition-colors duration-300 text-gray-900 hover:text-gray-400"
            >56-2834-8062</a
          >
        </div>
        <div class="flex">
          <p class="mr-1 text-gray-800">Email:</p>
          <a
            href="mailto:cintatic@protonmail.com"
            aria-label="email"
            title="email"
            class="transition-colors duration-300 text-gray-900 hover:text-gray-400"
            >cintatic@protonmail.com</a
          >
        </div>
        <div class="flex">
          <p class="mr-1 text-gray-800">Ubicación:</p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Our address"
            title="Our address"
            class="transition-colors duration-300 text-gray-900 hover:text-gray-400"
          >
            Querétaro, México.
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row"
    >
      <p class="text-sm text-gray-600">Cintatic 2021</p>
    </div>
  </div>
</template>
