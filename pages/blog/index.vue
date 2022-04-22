<template>
  <section class="text-gray-601 body-font">
    <div class="container px-6 py-12 mx-auto">
      <div class="flex flex-wrap w-full mb-21">
        <div class="lg:w-2/2 w-full mb-6 lg:mb-0">
          <h1
            class="sm:text-6xl text-6xl text-center font-bold title-font mb-2 text-gray-900"
          >
            BLOG
          </h1>
        </div>
        <p
          class="lg:w-2/2 w-full leading-relaxed text-center text-gray-700 mb-6"
        >
          Ponte al tanto de nuestras noticias, tendencias e información
          importante a traveś de nuestro blog.
        </p>
      </div>
      <div class="flex flex-wrap -m-5">
        <div
          v-for="article in articles"
          :key="article.slug"
          class="xl:w-2/4 md:w-1/2 p-4"
        >
          <NuxtLink
            :to="{
              name: 'blog-slug',
              params: { slug: article.slug },
            }"
          >
            <div class="bg-gray-101 p-6 rounded-lg">
              <NuxtImg
                loading="lazy"
                class="h-41 rounded w-full object-cover object-center mb-6"
                :src="article.image"
                alt="content"
              />

              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                {{ article.title }}
              </h2>
              <p class="leading-relaxed text-base">
                {{ article.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("blog").fetch();
    return {
      articles,
    };
  },
};
</script>
