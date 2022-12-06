import { n as __unplugin_components_0$1, b as __unplugin_components_2, _ as _export_sfc, j as __unplugin_components_0$2, k as __unplugin_components_1, l as __unplugin_components_2$1, m as __unplugin_components_3$1, f as __unplugin_components_0$3, g as __unplugin_components_0$4 } from "../entry-server.mjs";
import { defineComponent, computed, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as __unplugin_components_2$2 } from "./PageTitle.11e34768.mjs";
import "@nuxt/devalue";
import "@vueuse/head";
import "pinia";
import "vue-router";
import "@vueuse/core";
import "@vueuse/integrations/useCookies";
import "h3";
import "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import "@iconify/iconify";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BlogListItem",
  __ssrInlineRender: true,
  props: {
    post: null,
    upsideDown: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const blockClasses = computed(() => [props.upsideDown ? "is-upside-down" : ""]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AvatarSimple = __unplugin_components_0$1;
      const _component_Title = __unplugin_components_2;
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["post-list-item", unref(blockClasses)]
      }, _attrs))} data-v-26c227af>`);
      if (!props.upsideDown) {
        _push(`<div class="featured-post-image" data-v-26c227af><img${ssrRenderAttr("src", props.post.image)} alt="Featured image" width="360" height="200" data-v-26c227af><div class="post-date" data-v-26c227af><div class="post-date-inner" data-v-26c227af><span data-v-26c227af>${ssrInterpolate(props.post.date)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="featured-post-body" data-v-26c227af><div class="featured-post-title" data-v-26c227af><div class="title-avatar" data-v-26c227af>`);
      _push(ssrRenderComponent(_component_AvatarSimple, {
        picture: props.post.author.photo,
        size: "medium"
      }, null, _parent));
      _push(`</div><div class="title-meta" data-v-26c227af>`);
      _push(ssrRenderComponent(_component_Title, {
        tag: "h3",
        size: 5,
        weight: "semi",
        narrow: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-26c227af${_scopeId}>${ssrInterpolate(props.post.title)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.post.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h4 class="post-subtitle" data-v-26c227af><span data-v-26c227af> by <a class="author-name" href="#" data-v-26c227af>${ssrInterpolate(props.post.author.name)}</a></span><span class="px-2" data-v-26c227af>\xB7</span><span data-v-26c227af> Posted in <a href="#" data-v-26c227af>${ssrInterpolate(props.post.category)}</a></span></h4></div></div><p data-v-26c227af>${ssrInterpolate(props.post.abstract)}</p><div class="post-action" data-v-26c227af>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/blog",
        class: "read-more-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Read More <span data-v-26c227af${_scopeId}>\u27F6</span>`);
          } else {
            return [
              createTextVNode(" Read More "),
              createVNode("span", null, "\u27F6")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="post-stats is-flex is-align-items-center" data-v-26c227af><div class="is-flex is-align-items-center" data-v-26c227af><i class="iconify" data-icon="feather:eye" data-v-26c227af></i><span class="ml-1" data-v-26c227af>${ssrInterpolate(props.post.views)}</span></div></div></div></div>`);
      if (props.upsideDown) {
        _push(`<div class="featured-post-image" data-v-26c227af><img${ssrRenderAttr("src", props.post.image)} alt="Featured image" width="758" height="421" data-v-26c227af><div class="post-date" data-v-26c227af><div class="post-date-inner" data-v-26c227af><span data-v-26c227af>${ssrInterpolate(props.post.date)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const BlogListItem_vue_vue_type_style_index_0_scoped_26c227af_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/blog/blog-list-item/BlogListItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-26c227af"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BlogList",
  __ssrInlineRender: true,
  props: {
    posts: { default: () => [] },
    upsideDown: { type: Boolean, default: false },
    limit: { default: 20 },
    singleList: { type: Boolean, default: false },
    sideList: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const blockClasses = computed(() => [
      props.singleList && !props.sideList && "max-w-7"
    ]);
    const columnClasses = computed(() => [props.singleList ? "is-12" : "is-6"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogListItem = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["blog-grid mx-auto", unref(blockClasses)]
      }, _attrs))} data-v-9010d847><div class="columns b-columns-half-tablet-p is-multiline" data-v-9010d847><!--[-->`);
      ssrRenderList(props.posts.slice(0, props.limit), (post, index) => {
        _push(`<div class="${ssrRenderClass([unref(columnClasses), "column"])}" data-v-9010d847>`);
        _push(ssrRenderComponent(_component_BlogListItem, {
          post,
          "upside-down": props.upsideDown
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const BlogList_vue_vue_type_style_index_0_scoped_9010d847_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/blog/blog-list/BlogList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9010d847"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SubscriptionCompact",
  __ssrInlineRender: true,
  props: {
    label: null,
    placeholder: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Field = __unplugin_components_0$2;
      const _component_Control = __unplugin_components_1;
      const _component_VInput = __unplugin_components_2$1;
      const _component_Button = __unplugin_components_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "subscribe-compact" }, _attrs))} data-v-f1f839e6><form data-v-f1f839e6>`);
      _push(ssrRenderComponent(_component_Field, { grouped: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Control, { expanded: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VInput, {
                    placeholder: props.placeholder
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VInput, {
                      placeholder: props.placeholder
                    }, null, 8, ["placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Control, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    size: "form",
                    color: "primary",
                    long: 1,
                    raised: "",
                    bold: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.label)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.label), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      size: "form",
                      color: "primary",
                      long: 1,
                      raised: "",
                      bold: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.label), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Control, { expanded: "" }, {
                default: withCtx(() => [
                  createVNode(_component_VInput, {
                    placeholder: props.placeholder
                  }, null, 8, ["placeholder"])
                ]),
                _: 1
              }),
              createVNode(_component_Control, null, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    size: "form",
                    color: "primary",
                    long: 1,
                    raised: "",
                    bold: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.label), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
});
const SubscriptionCompact_vue_vue_type_style_index_0_scoped_f1f839e6_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/misc/subscription/SubscriptionCompact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f1f839e6"]]);
const posts = [
  {
    id: 0,
    image: "/assets/posts/post-1.svg",
    title: "How 3D and augmented reality are changing our world",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit placet delorum relopus...",
    views: "1.1k",
    category: "Technology",
    date: "March 17th, 2022",
    duration: 2,
    author: {
      photo: "data:image/gif;base64,replace_with_your_image",
      role: "Author",
      name: "Mike Wilson"
    },
    content: '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>'
  },
  {
    id: 1,
    image: "/assets/posts/post-2.svg",
    title: "Fighting stress when preparing yourself for an interview",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit placet delorum relopus...",
    views: "1.1k",
    category: "jobs",
    date: "March 17th, 2022",
    duration: 2,
    author: {
      photo: "data:image/gif;base64,replace_with_your_image",
      role: "Author",
      name: "Helen Miller"
    },
    content: '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>'
  },
  {
    id: 2,
    image: "/assets/posts/post-3.svg",
    title: "3 tips that will help you grow your eco-responsability",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit placet delorum relopus...",
    views: "1.2k",
    category: "ecology",
    date: "March 17th, 2022",
    duration: 2,
    author: {
      photo: "data:image/gif;base64,replace_with_your_image",
      role: "Author",
      name: "Melanie Growls"
    },
    content: '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>'
  },
  {
    id: 3,
    image: "/assets/posts/post-4.svg",
    title: "5 pro tips and strategies to make more working less",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit placet delorum relopus...",
    views: "1.4k",
    category: "business",
    date: "March 17th, 2022",
    duration: 2,
    author: {
      photo: "data:image/gif;base64,replace_with_your_image",
      role: "Author",
      name: "Esperanza Paraisio"
    },
    content: '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>'
  },
  {
    id: 4,
    image: "/assets/posts/post-5.svg",
    title: "How does content marketing improve your sales?",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit placet delorum relopus...",
    views: "1.6k",
    category: "Marketing",
    date: "March 17th, 2022",
    duration: 2,
    author: {
      photo: "data:image/gif;base64,replace_with_your_image",
      role: "Author",
      name: "Sarah Stokes"
    },
    content: '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>'
  },
  {
    id: 5,
    image: "/assets/posts/post-6.svg",
    title: "5 great apps to manage your online meetings",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit placet delorum relopus...",
    views: "2.1k",
    category: "Technology",
    date: "March 17th, 2022",
    duration: 2,
    author: {
      photo: "data:image/gif;base64,replace_with_your_image",
      role: "Author",
      name: "Tisha Jackson"
    },
    content: '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>'
  },
  {
    id: 6,
    image: "/assets/posts/post-7.svg",
    title: "How I went from newbie to expert project manager",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit placet delorum relopus...",
    views: "2.1k",
    category: "management",
    date: "March 17th, 2022",
    duration: 2,
    author: {
      photo: "data:image/gif;base64,replace_with_your_image",
      role: "Author",
      name: "Ron Greizmann"
    },
    content: '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>'
  },
  {
    id: 7,
    image: "/assets/posts/post-8.svg",
    title: "Preparing your own 2022 investement strategy",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit placet delorum relopus...",
    views: "2.4k",
    category: "finance",
    date: "March 17th, 2022",
    duration: 2,
    author: {
      photo: "data:image/gif;base64,replace_with_your_image",
      role: "Author",
      name: "Kurt Rowens"
    },
    content: '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>'
  },
  {
    id: 8,
    image: "/assets/posts/post-9.svg",
    title: "Is it worth investing in cryptocurrencies?",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit placet delorum relopus...",
    views: "3.2k",
    category: "finance",
    date: "March 17th, 2022",
    duration: 2,
    author: {
      photo: "data:image/gif;base64,replace_with_your_image",
      role: "Author",
      name: "Peter Weyland"
    },
    content: '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>'
  },
  {
    id: 9,
    image: "/assets/posts/post-10.svg",
    title: "How to maximize ROI with our new tracking tools",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit placet delorum relopus...",
    views: "3.7k",
    category: "finance",
    date: "March 17th, 2022",
    duration: 2,
    author: {
      photo: "data:image/gif;base64,replace_with_your_image",
      role: "Author",
      name: "Katarina Kropova"
    },
    content: '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>'
  },
  {
    id: 10,
    image: "/assets/posts/post-11.svg",
    title: "Life is so not about making a bunch of money",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit placet delorum relopus....",
    views: "4.1k",
    category: "business",
    date: "March 17th, 2022",
    duration: 2,
    author: {
      photo: "data:image/gif;base64,replace_with_your_image",
      role: "Author",
      name: "Nancy Smith"
    },
    content: '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>'
  },
  {
    id: 11,
    image: "/assets/posts/post-12.svg",
    title: "10 years have brought collaboration to the pinacle",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit placet delorum relopus...",
    views: "5.6k",
    category: "management",
    date: "March 17th, 2022",
    duration: 2,
    author: {
      photo: "data:image/gif;base64,replace_with_your_image",
      role: "Author",
      name: "Samuel Willings"
    },
    content: '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>'
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Section = __unplugin_components_0$3;
      const _component_Container = __unplugin_components_0$4;
      const _component_PageTitle = __unplugin_components_2$2;
      const _component_SubscriptionCompact = __unplugin_components_3;
      const _component_BlogList = __unplugin_components_4;
      const _component_Button = __unplugin_components_3$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Section, { color: "grey" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mx-auto max-w-9"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_PageTitle, {
                    title: "Our Latest News",
                    subtitle: "Company Blog"
                  }, {
                    content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mx-auto max-w-6 mt-2"${_scopeId3}><p class="paragraph rem-115"${_scopeId3}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit, placet agi subtilius et, ut ipse. </p></div><div class="mx-auto max-w-4 mt-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_SubscriptionCompact, {
                          label: "Subscribe",
                          placeholder: "Enter your email"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mx-auto max-w-6 mt-2" }, [
                            createVNode("p", { class: "paragraph rem-115" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit, placet agi subtilius et, ut ipse. ")
                          ]),
                          createVNode("div", { class: "mx-auto max-w-4 mt-4" }, [
                            createVNode(_component_SubscriptionCompact, {
                              label: "Subscribe",
                              placeholder: "Enter your email"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_BlogList, {
                    posts: unref(posts),
                    "upside-down": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="load-more py-6"${_scopeId2}><div class="buttons is-centered"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    color: "primary",
                    long: 3,
                    raised: "",
                    bold: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Load More`);
                      } else {
                        return [
                          createTextVNode("Load More")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "mx-auto max-w-9" }, [
                      createVNode(_component_PageTitle, {
                        title: "Our Latest News",
                        subtitle: "Company Blog"
                      }, {
                        content: withCtx(() => [
                          createVNode("div", { class: "mx-auto max-w-6 mt-2" }, [
                            createVNode("p", { class: "paragraph rem-115" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit, placet agi subtilius et, ut ipse. ")
                          ]),
                          createVNode("div", { class: "mx-auto max-w-4 mt-4" }, [
                            createVNode(_component_SubscriptionCompact, {
                              label: "Subscribe",
                              placeholder: "Enter your email"
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_BlogList, {
                      posts: unref(posts),
                      "upside-down": ""
                    }, null, 8, ["posts"]),
                    createVNode("div", { class: "load-more py-6" }, [
                      createVNode("div", { class: "buttons is-centered" }, [
                        createVNode(_component_Button, {
                          color: "primary",
                          long: 3,
                          raised: "",
                          bold: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Load More")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Container, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "mx-auto max-w-9" }, [
                    createVNode(_component_PageTitle, {
                      title: "Our Latest News",
                      subtitle: "Company Blog"
                    }, {
                      content: withCtx(() => [
                        createVNode("div", { class: "mx-auto max-w-6 mt-2" }, [
                          createVNode("p", { class: "paragraph rem-115" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit, placet agi subtilius et, ut ipse. ")
                        ]),
                        createVNode("div", { class: "mx-auto max-w-4 mt-4" }, [
                          createVNode(_component_SubscriptionCompact, {
                            label: "Subscribe",
                            placeholder: "Enter your email"
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_BlogList, {
                    posts: unref(posts),
                    "upside-down": ""
                  }, null, 8, ["posts"]),
                  createVNode("div", { class: "load-more py-6" }, [
                    createVNode("div", { class: "buttons is-centered" }, [
                      createVNode(_component_Button, {
                        color: "primary",
                        long: 3,
                        raised: "",
                        bold: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Load More")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
