import { b as __unplugin_components_2$1, _ as _export_sfc, k as __unplugin_components_1, l as __unplugin_components_2$3, f as __unplugin_components_0$1, g as __unplugin_components_0$2, h as _sfc_main$4 } from "../entry-server.mjs";
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
  __name: "ArtisanCategoryCard",
  __ssrInlineRender: true,
  props: {
    category: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_Title = __unplugin_components_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-card category-card light-bordered" }, _attrs))} data-v-5e7ba311><div class="card-body" data-v-5e7ba311>`);
      _push(ssrRenderComponent(_component_RouterLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="icon" data-v-5e7ba311${_scopeId}><i${ssrRenderAttr("data-icon", props.category.icon)} class="${ssrRenderClass([
              props.category.iconColor && `text-${props.category.iconColor}`,
              "iconify"
            ])}" data-v-5e7ba311${_scopeId}></i></div><div class="inner-content" data-v-5e7ba311${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Title, {
              tag: "h3",
              size: 4,
              weight: "thin",
              leading: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-5e7ba311${_scopeId2}>${ssrInterpolate(props.category.name)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(props.category.name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="inner-text" data-v-5e7ba311${_scopeId}><span data-v-5e7ba311${_scopeId}>${ssrInterpolate(props.category.text)}</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "icon" }, [
                createVNode("i", {
                  class: [
                    "iconify",
                    props.category.iconColor && `text-${props.category.iconColor}`
                  ],
                  "data-icon": props.category.icon
                }, null, 10, ["data-icon"])
              ]),
              createVNode("div", { class: "inner-content" }, [
                createVNode(_component_Title, {
                  tag: "h3",
                  size: 4,
                  weight: "thin",
                  leading: ""
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(props.category.name), 1)
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "inner-text" }, [
                  createVNode("span", null, toDisplayString(props.category.text), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const ArtisanCategoryCard_vue_vue_type_style_index_0_scoped_5e7ba311_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/workit/ArtisanCategoryCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5e7ba311"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ArtisanCategories",
  __ssrInlineRender: true,
  props: {
    categories: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArtisanCategoryCard = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-6" }, _attrs))} data-v-e3d6975a><div class="help-center-categories" data-v-e3d6975a><div class="columns is-multiline" data-v-e3d6975a><!--[-->`);
      ssrRenderList(props.categories, (category, index) => {
        _push(`<div class="column is-3" data-v-e3d6975a>`);
        _push(ssrRenderComponent(_component_ArtisanCategoryCard, { category }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const ArtisanCategories_vue_vue_type_style_index_0_scoped_e3d6975a_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/workit/ArtisanCategories.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e3d6975a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HelpCenterHeader",
  __ssrInlineRender: true,
  props: {
    title: null,
    subtitle: null,
    text: { default: void 0 },
    topics: { default: () => [] },
    compact: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageTitle = __unplugin_components_2$2;
      const _component_Control = __unplugin_components_1;
      const _component_VInput = __unplugin_components_2$3;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_Title = __unplugin_components_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-bdf3a391>`);
      _push(ssrRenderComponent(_component_PageTitle, {
        title: props.title,
        subtitle: props.subtitle,
        text: props.text
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Control, { icon: "feather:search" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VInput, { placeholder: "Search topics..." }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VInput, { placeholder: "Search topics..." })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Control, { icon: "feather:search" }, {
                default: withCtx(() => [
                  createVNode(_component_VInput, { placeholder: "Search topics..." })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!props.compact) {
        _push(`<div class="help-center-navigation" data-v-bdf3a391><div class="columns is-multiline b-columns-half-tablet-p" data-v-bdf3a391><!--[-->`);
        ssrRenderList(props.topics.slice(0, 4), (topic, index) => {
          _push(`<div class="column is-3" data-v-bdf3a391>`);
          _push(ssrRenderComponent(_component_RouterLink, {
            to: "/",
            class: "box"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i${ssrRenderAttr("data-icon", topic.icon)} class="${ssrRenderClass([topic.iconColor && `text-${topic.iconColor}`, "iconify"])}" data-v-bdf3a391${_scopeId}></i>`);
                _push2(ssrRenderComponent(_component_Title, {
                  tag: "h3",
                  size: 6,
                  weight: "semi",
                  narrow: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-bdf3a391${_scopeId2}>${ssrInterpolate(topic.title)}</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(topic.title), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<p class="paragraph rem-85" data-v-bdf3a391${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>`);
              } else {
                return [
                  createVNode("i", {
                    class: ["iconify", topic.iconColor && `text-${topic.iconColor}`],
                    "data-icon": topic.icon
                  }, null, 10, ["data-icon"]),
                  createVNode(_component_Title, {
                    tag: "h3",
                    size: 6,
                    weight: "semi",
                    narrow: ""
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(topic.title), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode("p", { class: "paragraph rem-85" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const HelpCenterHeader_vue_vue_type_style_index_0_scoped_bdf3a391_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/help/help-center-header/HelpCenterHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bdf3a391"]]);
const markdownObject = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.

#### Choose a plan first

Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

*   Discovery pricing
*   Business pricing

#### Activate your account

Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.

#### Perform initial setup

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.

*   Create a company
*   Add users to your team
*   Start working
`;
const helpCenterCategories = [
  {
    slug: "welcome-category",
    icon: "ph:hand-waving-duotone",
    iconColor: "yellow",
    name: "Welcome",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
    contributors: [
      {
        name: "Edwin Tyler",
        picture: "data:image/gif;base64,replace_with_your_image"
      },
      {
        name: "Helen Miller",
        picture: "data:image/gif;base64,replace_with_your_image"
      },
      {
        name: "Jake Rowland",
        picture: "data:image/gif;base64,replace_with_your_image"
      }
    ],
    articles: [
      {
        slug: "making-your-first-steps",
        title: "Getting started",
        subtitle: "Making your first steps with our application",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "one week ago",
        author: {
          name: "Jake Rowland",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "configuration-options",
        title: "Configuration options",
        subtitle: "Explore configuration options based on your requirements",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "about 2 days ago",
        author: {
          name: "Edwin Tyler",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "creating-an-account",
        title: "Creating an account",
        subtitle: "Create your account and fill in required info",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "about 3 weeks ago",
        author: {
          name: "Helen Miller",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "creating-a-company",
        title: "Creating a company",
        subtitle: "Setup your company account to start adding products",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "about 3 weeks ago",
        author: {
          name: "Helen Miller",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      }
    ]
  },
  {
    slug: "project-module-category",
    icon: "ph:folder-simple-dotted-duotone",
    iconColor: "success",
    name: "Projects Module",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
    contributors: [
      {
        name: "Jake Rowland",
        picture: "data:image/gif;base64,replace_with_your_image"
      },
      {
        name: "Helen Miller",
        picture: "data:image/gif;base64,replace_with_your_image"
      }
    ],
    articles: [
      {
        slug: "creating-a-project",
        title: "Creating a project",
        subtitle: "Create your first project and start adding tasks",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "one month ago",
        author: {
          name: "Jake Rowland",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "managing-tasks",
        title: "Managing tasks",
        subtitle: "Assign, revoke and manage your tasks",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "one week ago",
        author: {
          name: "Helen Miller",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "uploading-attachments",
        title: "Uploading attachments",
        subtitle: "Start uploading documents, images and videos",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "2 weeks ago",
        author: {
          name: "Helen Miller",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "managing-user-access",
        title: "Managing user access",
        subtitle: "Manage permissions and user rights",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "one week ago",
        author: {
          name: "Jake Rowland",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "configuring-a-gantt-view",
        title: "Configuring a Gantt view",
        subtitle: "Plan efficiently by using the built-in Gantt view",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "one week ago",
        author: {
          name: "Jake Rowland",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      }
    ]
  },
  {
    slug: "sales-module-category",
    icon: "ph:t-shirt-duotone",
    iconColor: "secondary",
    name: "Sales Module",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
    contributors: [
      {
        name: "Christina Chu",
        picture: "data:image/gif;base64,replace_with_your_image"
      },
      {
        name: "Ina Volkov",
        picture: "data:image/gif;base64,replace_with_your_image"
      },
      {
        name: "Pete Jackson",
        picture: "data:image/gif;base64,replace_with_your_image"
      }
    ],
    articles: [
      {
        slug: "setting-up-cutomer-payments",
        title: "Setting up customer payments",
        subtitle: "Learn how to enable payments on your storefront",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "3 weeks ago",
        author: {
          name: "Christina Chu",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "configuring-customer-registration",
        title: "Configuring customer registration",
        subtitle: "Configure how users are getting registered on the store",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "one week ago",
        author: {
          name: "Pete Jackson",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "adding-products",
        title: "Adding products",
        subtitle: "Add your first products to the catalogue",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "3 days ago",
        author: {
          name: "Christina Chu",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "creating-product-variants",
        title: "Creating product variants",
        subtitle: "Making your first steps",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "one week ago",
        author: {
          name: "Ina Volkov",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "managing-product-variants",
        title: "Managing product variants",
        subtitle: "Making your first steps",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "one week ago",
        author: {
          name: "Ina Volkov",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      }
    ]
  },
  {
    slug: "marketing-module-category",
    icon: "ph:megaphone-simple-duotone",
    iconColor: "info",
    name: "Marketing Module",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
    contributors: [
      {
        name: "Mike Wilson",
        picture: "data:image/gif;base64,replace_with_your_image"
      },
      {
        name: "Eddie Bricks",
        picture: "data:image/gif;base64,replace_with_your_image"
      },
      {
        name: "Jake Rowland",
        picture: "data:image/gif;base64,replace_with_your_image"
      }
    ],
    articles: [
      {
        slug: "collecting-campaign-audience",
        title: "Collecting campaign audience",
        subtitle: "Learn how to make people subscribe",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "one day ago",
        author: {
          name: "Mike Wilson",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "creating-customer-segments",
        title: "Creating customer segments",
        subtitle: "Learn more about customer segmentation",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "2 weeks ago",
        author: {
          name: "Mike Wilson",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "run-your-first-campaign",
        title: "Run your first campaign",
        subtitle: "Run your first mailing campaign",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "one week ago",
        author: {
          name: "Eddie Bricks",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "creating-a-custom-template",
        title: "Creating a custom template",
        subtitle: "Create a custom email template with your own elements",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "one week ago",
        author: {
          name: "Jake Rowland",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      }
    ]
  },
  {
    slug: "production-module-category",
    icon: "ph:factory-duotone",
    iconColor: "warning",
    name: "Production Module",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
    contributors: [
      {
        name: "Sara Gheller",
        picture: "data:image/gif;base64,replace_with_your_image"
      }
    ],
    articles: [
      {
        slug: "creating-a-production-unit",
        title: "Creating a production unit",
        subtitle: "Learn how to create and manage a production unit",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "one hour ago",
        author: {
          name: "Sara Gheller",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "creating-a-supply-chain",
        title: "Creating a supply chain",
        subtitle: "Learn how to create and manage a supply chain",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "one day ago",
        author: {
          name: "Sara Gheller",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      }
    ]
  },
  {
    slug: "delivery-module-category",
    icon: "ph:truck-duotone",
    iconColor: "purple",
    name: "Delivery Module",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
    contributors: [
      {
        name: "Jake Rowland",
        picture: "data:image/gif;base64,replace_with_your_image"
      },
      {
        name: "Edwin Tyler",
        picture: "data:image/gif;base64,replace_with_your_image"
      },
      {
        name: "Helen Miller",
        picture: "data:image/gif;base64,replace_with_your_image"
      }
    ],
    articles: [
      {
        slug: "creating-your-fleet",
        title: "Creating your fleet",
        subtitle: "Create your fleet and set global rules",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "5 days ago",
        author: {
          name: "Helen Miller",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "adding-vehicles",
        title: "Adding vehicles",
        subtitle: "Dive in fleet vehicle management",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "one week ago",
        author: {
          name: "Jake Rowland",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      },
      {
        slug: "track-your-fleet",
        title: "Track your fleet",
        subtitle: "Learn more on how to track your fleet's performance",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera prosunt, nocent altera. Restinguet citius, si ardentem acceperit inde igitur inquit.",
        updated: "8 hours ago",
        author: {
          name: "Edwin Tyler",
          picture: "data:image/gif;base64,replace_with_your_image"
        },
        content: markdownObject
      }
    ]
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Categories",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Section = __unplugin_components_0$1;
      const _component_Container = __unplugin_components_0$2;
      const _component_HelpCenterHeader = __unplugin_components_2;
      const _component_SectionTitle = _sfc_main$4;
      const _component_ArtisanCategories = __unplugin_components_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Section, { color: "grey" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_HelpCenterHeader, {
                    title: "Artisan Categories",
                    subtitle: "Our Resources",
                    text: "We only allow trustworthy artisans on our platform."
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_HelpCenterHeader, {
                      title: "Artisan Categories",
                      subtitle: "Our Resources",
                      text: "We only allow trustworthy artisans on our platform."
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Container, null, {
                default: withCtx(() => [
                  createVNode(_component_HelpCenterHeader, {
                    title: "Artisan Categories",
                    subtitle: "Our Resources",
                    text: "We only allow trustworthy artisans on our platform."
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, {
        color: "grey",
        large: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionTitle, {
              title: "Hire Trusted & Vetted Service Providers",
              subtitle: "Workit Ng"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ArtisanCategories, { categories: unref(helpCenterCategories) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SectionTitle, {
                title: "Hire Trusted & Vetted Service Providers",
                subtitle: "Workit Ng"
              }),
              createVNode(_component_ArtisanCategories, { categories: unref(helpCenterCategories) }, null, 8, ["categories"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Categories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
