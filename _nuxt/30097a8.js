(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{348:function(t,e,n){"use strict";n.r(e);var r=n(6),l=(n(39),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("blog").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()}}),c=n(29),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-gray-601 body-font"},[n("div",{staticClass:"container px-6 py-12 mx-auto"},[t._m(0),t._v(" "),n("div",{staticClass:"flex flex-wrap -m-5"},t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"xl:w-2/4 md:w-1/2 p-4"},[n("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("div",{staticClass:"bg-gray-101 p-6 rounded-lg"},[n("NuxtImg",{staticClass:"h-41 rounded w-full object-cover object-center mb-6",attrs:{loading:"lazy",src:article.image,alt:"content"}}),t._v(" "),n("h2",{staticClass:"text-lg text-gray-900 font-medium title-font mb-4"},[t._v("\n              "+t._s(article.title)+"\n            ")]),t._v(" "),n("p",{staticClass:"leading-relaxed text-base"},[t._v("\n              "+t._s(article.description)+"\n            ")])],1)])],1)})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap w-full mb-21"},[n("div",{staticClass:"lg:w-2/2 w-full mb-6 lg:mb-0"},[n("h1",{staticClass:"sm:text-6xl text-6xl text-center font-bold title-font mb-2 text-gray-900"},[t._v("\n          BLOG\n        ")])]),t._v(" "),n("p",{staticClass:"lg:w-2/2 w-full leading-relaxed text-center text-gray-700 mb-6"},[t._v("\n        Ponte al tanto de nuestras noticias, tendencias e información\n        importante a traveś de nuestro blog.\n      ")])])}],!1,null,null,null);e.default=component.exports}}]);