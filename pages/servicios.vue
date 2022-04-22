<template>
  <div
    data-aos="fade-up"
    data-aos-duration="3000"
    aos-delay="1000"
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="mx-auto md:w-1/2 space-y-4 font-sans mb-8 text-center">
      <h2 class="text-4xl font-bold">Empacado con lo necesario</h2>
      <p>
        Nuestros sitios cuentan con todo lo indispensable para llevar tu negocio
        al siguiente nivel
      </p>
    </div>
    <div class="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
      <div class="p-8 border-b sm:border-r">
        <div class="max-w-md text-center">
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16"
          >
            <NuxtImg
              loading="lazy"
              class="text-4xl w-8"
              src="/icons/google-brands.svg"
            />
          </div>
          <h6 class="mb-2 font-semibold leading-5">SEO</h6>
          <p class="mb-3 text-sm text-gray-900">
            Es importante que encuentren tu página a través de los motores de
            búsqueda como Google, nosotros te posicionamos.
          </p>
        </div>
      </div>
      <div class="p-8 border-b lg:border-r">
        <div class="max-w-md text-center">
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16"
          >
            <NuxtImg
              loading="lazy"
              class="text-4xl w-12"
              src="/icons/facebook-brands.svg"
            />
          </div>
          <h6 class="mb-2 font-semibold leading-5">Redes sociales</h6>
          <p class="mb-3 text-sm text-gray-900">
            Agregamos los enlaces a tus redes sociales para que disfrutes de la
            conexión con tus usuarios.
          </p>
        </div>
      </div>
      <div class="p-8 border-b sm:border-r lg:border-r-0">
        <div class="max-w-md text-center">
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16"
          >
            <NuxtImg
              loading="lazy"
              class="text-4xl w-8"
              src="/icons/lock-solid.svg"
            />
          </div>
          <h6 class="mb-2 font-semibold leading-5">SSL ilimtado</h6>
          Tenemos tu sitio asegurado con un certificado SSL gratis, para
          siempre.
          <p class="mb-3 text-sm text-gray-900"></p>
        </div>
      </div>
      <div class="p-8 border-b lg:border-b-0 lg:border-r">
        <div class="max-w-md text-center">
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16"
          >
            <NuxtImg
              loading="lazy"
              class="text-4xl w-6"
              src="/icons/play-solid.svg"
            />
          </div>
          <h6 class="mb-2 font-semibold leading-5">Animaciones</h6>
          <p class="mb-3 text-sm text-gray-900">
            Agregamos un toque para que tu sitio se vea atractivo y moderno con
            animaciones.
          </p>
        </div>
      </div>
      <div class="p-8 border-b sm:border-b-0 sm:border-r">
        <div class="max-w-md text-center">
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16"
          >
            <NuxtImg
              loading="lazy"
              class="text-4xl w-8"
              src="/icons/bolt-solid.svg"
            />
          </div>
          <h6 class="mb-2 font-semibold leading-5">Velocidad</h6>
          <p class="mb-3 text-sm text-gray-900">
            Con la tecnología y prácticas que usamos garantizamos cargas rápidas
            de tu sitio.
          </p>
        </div>
      </div>
      <div class="p-8">
        <div class="max-w-md text-center">
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16"
          >
            <NuxtImg
              loading="lazy"
              class="text-4xl w-8"
              src="/icons/globe-solid.svg"
            />
          </div>
          <h6 class="mb-2 font-semibold leading-5">Año de dominio</h6>
          <p class="mb-3 text-sm text-gray-900">
            Para que empieces de inmediato te ofrecemos un dominio provisional
            gratis por un año
          </p>
        </div>
      </div>
    </div>
    <SocialBanner class="mt-12 md:mt-24" />
  </div>
</template>
