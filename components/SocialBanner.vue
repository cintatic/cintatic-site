<template>
  <div class="flex">
    <div class="mx-auto">
      <a href="tel:5628348062">
        <NuxtImg
          width="100"
          height="100"
          alt="Llámanos"
          loading="lazy"
          class="inline-block align-middle w-14 mx-3"
          src="/icons/phone-solid.svg"
        />
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=525628348062&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios."
      >
        <NuxtImg
          width="100"
          height="100"
          alt="Envíanos Whatsapp"
          loading="lazy"
          class="inline-block w-14 mx-3"
          src="/icons/whatsapp-brands.svg"
        />
      </a>

      <a v-if="ios" href="fb://profile/106070931823082">
        <NuxtImg
          width="100"
          height="100"
          alt="Encuéntranos en Facebook"
          loading="lazy"
          class="inline-block align-middle w-14 mx-3"
          src="/icons/facebook-brands.svg"
        />
      </a>
      <a v-else-if="android" href="fb://page/106070931823082">
        <NuxtImg
          width="100"
          height="100"
          alt="Encuéntranos en Facebook"
          loading="lazy"
          class="inline-block align-middle w-14 mx-3"
          src="/icons/facebook-brands.svg"
        />
      </a>
      <a v-else href="https://facebook.com/cintaticmx">
        <NuxtImg
          width="100"
          height="100"
          alt="Encuéntranos en Facebook"
          loading="lazy"
          class="inline-block align-middle w-14 mx-3"
          src="/icons/facebook-brands.svg"
        />
      </a>

      <a href="https://instagram.com/cintaticmx">
        <NuxtImg
          width="100"
          height="100"
          alt="Encuéntranos en Instagram"
          loading="lazy"
          class="inline-block align-middle w-14 mx-3"
          src="/icons/instagram-brands.svg"
        />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ios: null,
      android: null,
    };
  },
  mounted() {
    if (navigator.userAgent.toLowerCase().includes("iphone")) this.ios = true;
    if (navigator.userAgent.toLowerCase().includes("android"))
      this.android = true;
  },
};
</script>
