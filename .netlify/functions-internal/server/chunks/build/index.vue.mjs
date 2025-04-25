import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$b } from './Button.vue.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext, useSlots, computed, unref, createBlock, createCommentVNode, openBlock, renderSlot, toDisplayString, createVNode, Fragment, renderList } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { Primitive, useForwardPropsEmits, ProgressRoot, ProgressIndicator } from 'reka-ui';
import { t as tv } from './tv.mjs';
import { a as useAppConfig } from './server.mjs';
import { _ as _sfc_main$e } from './Badge.vue.mjs';
import { _ as _sfc_main$c } from './Avatar.vue.mjs';
import { _ as _sfc_main$d } from './Icon.vue.mjs';
import { reactivePick } from '@vueuse/core';
import { u as useLocale } from './useLocale.mjs';
import '../_/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import './useButtonGroup.mjs';
import './index.mjs';
import './Link.vue.mjs';
import './nuxt-link.mjs';
import '../_/ohash.BvSMZzli.mjs';
import 'tailwind-variants';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import '@iconify/vue';
import './NuxtImg.vue2.mjs';
import './index2.mjs';
import '@iconify/utils/lib/css/icon';
import './asyncData.mjs';

const _sfc_main$a = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_UImage = resolveComponent("UImage");
  const _component_UButton = _sfc_main$b;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen flex items-center hidden lg:flex" }, _attrs))}><div class="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90 z-0">`);
  _push(ssrRenderComponent(_component_UImage, {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    class: "absolute inset-0 object-cover w-full h-full mix-blend-overlay",
    width: "1920",
    height: "1080",
    loading: "eager"
  }, null, _parent));
  _push(`</div><div class="container mx-auto px-4 relative z-10 mt-20"><div class="max-w-2xl"><h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6"><span class="text-accent-400">Sua Fantasia,</span><br> Suas Regras </h1><p class="text-xl text-gray-300 mb-8 max-w-lg"> A plataforma onde modelos profissionais criam experiências premium, e você pode fazer parte. </p><div class="flex flex-wrap gap-4">`);
  _push(ssrRenderComponent(_component_UButton, {
    color: "accent",
    size: "xl",
    variant: "solid",
    class: "font-medium",
    ui: { rounded: "rounded-full" },
    "trailing-icon": "i-heroicons-arrow-right"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Criar Experiência `);
      } else {
        return [
          createTextVNode(" Criar Experiência ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UButton, {
    color: "white",
    size: "xl",
    variant: "outline",
    class: "font-medium",
    ui: { rounded: "rounded-full" },
    "trailing-icon": "i-heroicons-arrow-right"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Explorar `);
      } else {
        return [
          createTextVNode(" Explorar ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/HeroDesktop.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const HeroDesktop = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main$9 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UImage = resolveComponent("UImage");
  const _component_UButton = _sfc_main$b;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative min-h-[90vh] flex items-center lg:hidden" }, _attrs))}><div class="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90 z-0">`);
  _push(ssrRenderComponent(_component_UImage, {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    class: "absolute inset-0 object-cover w-full h-full mix-blend-overlay",
    width: "1920",
    height: "1080",
    loading: "eager"
  }, null, _parent));
  _push(`</div><div class="container mx-auto px-4 relative z-10 mt-16"><div class="text-center"><h1 class="text-4xl font-bold leading-tight mb-6"><span class="text-accent-400">Sua Fantasia,</span><br> Suas Regras </h1><p class="text-lg text-gray-300 mb-8 mx-auto max-w-md"> A plataforma onde modelos profissionais criam experiências premium, e você pode fazer parte. </p><div class="flex flex-col gap-4 max-w-xs mx-auto">`);
  _push(ssrRenderComponent(_component_UButton, {
    color: "accent",
    size: "lg",
    variant: "solid",
    class: "font-medium",
    ui: { rounded: "rounded-full" },
    "trailing-icon": "i-heroicons-arrow-right",
    block: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Criar Experiência `);
      } else {
        return [
          createTextVNode(" Criar Experiência ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UButton, {
    color: "white",
    size: "lg",
    variant: "outline",
    class: "font-medium",
    ui: { rounded: "rounded-full" },
    "trailing-icon": "i-heroicons-arrow-right",
    block: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Explorar `);
      } else {
        return [
          createTextVNode(" Explorar ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/HeroMobile.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const HeroMobile = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender]]);

const _sfc_main$8 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(HeroDesktop, null, null, _parent));
      _push(ssrRenderComponent(HeroMobile, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};

const theme$1 = {
  "slots": {
    "root": "rounded-lg",
    "header": "p-4 sm:px-6",
    "body": "p-4 sm:p-6",
    "footer": "p-4 sm:px-6"
  },
  "variants": {
    "variant": {
      "solid": {
        "root": "bg-inverted text-inverted"
      },
      "outline": {
        "root": "bg-default ring ring-default divide-y divide-default"
      },
      "soft": {
        "root": "bg-elevated/50 divide-y divide-default"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default divide-y divide-default"
      }
    }
  },
  "defaultVariants": {
    "variant": "outline"
  }
};

const _sfc_main$7 = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    variant: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.card) || {} })({
        variant: props.variant
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            if (!!slots.header) {
              _push2(`<div class="${ssrRenderClass(ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.default) {
              _push2(`<div class="${ssrRenderClass(ui.value.body({ class: (_b = props.ui) == null ? void 0 : _b.body }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.footer) {
              _push2(`<div class="${ssrRenderClass(ui.value.footer({ class: (_c = props.ui) == null ? void 0 : _c.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !!slots.header ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.header({ class: (_d = props.ui) == null ? void 0 : _d.header })
              }, [
                renderSlot(_ctx.$slots, "header")
              ], 2)) : createCommentVNode("", true),
              !!slots.default ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.body({ class: (_e = props.ui) == null ? void 0 : _e.body })
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)) : createCommentVNode("", true),
              !!slots.footer ? (openBlock(), createBlock("div", {
                key: 2,
                class: ui.value.footer({ class: (_f = props.ui) == null ? void 0 : _f.footer })
              }, [
                renderSlot(_ctx.$slots, "footer")
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Card.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};

const _sfc_main$6 = {
  __name: "ExperienceCard",
  __ssrInlineRender: true,
  props: {
    experience: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$7;
      const _component_UImage = resolveComponent("UImage");
      const _component_UBadge = _sfc_main$e;
      const _component_UButton = _sfc_main$b;
      const _component_UAvatar = _sfc_main$c;
      const _component_UIcon = _sfc_main$d;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        ui: {
          background: "bg-gray-900/60",
          border: "border border-gray-800",
          ring: "",
          divide: "divide-gray-800",
          body: { base: "h-full flex flex-col" }
        },
        class: "transition-all duration-300 hover:border-gray-700 h-full"
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative overflow-hidden rounded-t-lg aspect-[3/2]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UImage, {
              src: __props.experience.image,
              alt: __props.experience.title,
              class: "object-cover w-full h-full transition-transform duration-300 hover:scale-105",
              width: "400",
              height: "300"
            }, null, _parent2, _scopeId));
            _push2(`<div class="absolute top-0 right-0 p-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UBadge, {
              color: "accent",
              variant: "solid",
              class: "font-medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` R$ ${ssrInterpolate(__props.experience.price)}`);
                } else {
                  return [
                    createTextVNode(" R$ " + toDisplayString(__props.experience.price), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative overflow-hidden rounded-t-lg aspect-[3/2]" }, [
                createVNode(_component_UImage, {
                  src: __props.experience.image,
                  alt: __props.experience.title,
                  class: "object-cover w-full h-full transition-transform duration-300 hover:scale-105",
                  width: "400",
                  height: "300"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "absolute top-0 right-0 p-2" }, [
                  createVNode(_component_UBadge, {
                    color: "accent",
                    variant: "solid",
                    class: "font-medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" R$ " + toDisplayString(__props.experience.price), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              to: `/experiencia/${__props.experience.id}`,
              color: "white",
              variant: "link",
              class: "text-lg font-semibold hover:text-accent-400 mt-4 mb-2 text-left"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.experience.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.experience.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-gray-400 text-sm mb-4"${_scopeId}>${ssrInterpolate(__props.experience.description)}</p><div class="mt-auto"${_scopeId}><div class="flex items-center justify-between pt-4 border-t border-gray-800"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: __props.experience.model.avatar,
              alt: __props.experience.model.name,
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-300"${_scopeId}>${ssrInterpolate(__props.experience.model.name)}</span></div><div class="flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-star",
              class: "text-yellow-500 w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-300"${_scopeId}>${ssrInterpolate(__props.experience.rating)} (${ssrInterpolate(__props.experience.reviewCount)})</span></div></div></div>`);
          } else {
            return [
              createVNode(_component_UButton, {
                to: `/experiencia/${__props.experience.id}`,
                color: "white",
                variant: "link",
                class: "text-lg font-semibold hover:text-accent-400 mt-4 mb-2 text-left"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.experience.title), 1)
                ]),
                _: 1
              }, 8, ["to"]),
              createVNode("p", { class: "text-gray-400 text-sm mb-4" }, toDisplayString(__props.experience.description), 1),
              createVNode("div", { class: "mt-auto" }, [
                createVNode("div", { class: "flex items-center justify-between pt-4 border-t border-gray-800" }, [
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    createVNode(_component_UAvatar, {
                      src: __props.experience.model.avatar,
                      alt: __props.experience.model.name,
                      size: "sm"
                    }, null, 8, ["src", "alt"]),
                    createVNode("span", { class: "text-sm text-gray-300" }, toDisplayString(__props.experience.model.name), 1)
                  ]),
                  createVNode("div", { class: "flex items-center gap-1" }, [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-star",
                      class: "text-yellow-500 w-4 h-4"
                    }),
                    createVNode("span", { class: "text-sm text-gray-300" }, toDisplayString(__props.experience.rating) + " (" + toDisplayString(__props.experience.reviewCount) + ")", 1)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExperienceCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};

const _sfc_main$5 = {
  __name: "FeaturedExperiences",
  __ssrInlineRender: true,
  setup(__props) {
    const featuredExperiences = [
      {
        id: 1,
        title: "Encontro Virtual Íntimo",
        description: "Uma conversa exclusiva e personalizada para suas fantasias.",
        image: "/images/models/model1.jpg",
        price: "199,90",
        model: {
          name: "Julia Silva",
          avatar: "/images/models/model1.jpg"
        },
        rating: 4.9,
        reviewCount: 127
      },
      {
        id: 2,
        title: "Ensaio Fotográfico Premium",
        description: "Fotos exclusivas com temas e fantasias personalizadas.",
        image: "/images/models/model2.jpg",
        price: "349,90",
        model: {
          name: "Amanda Costa",
          avatar: "/images/models/model2.jpg"
        },
        rating: 4.8,
        reviewCount: 95
      },
      {
        id: 3,
        title: "Chat de Áudio Sensual",
        description: "Conversa de áudio imersiva com sua modelo favorita.",
        image: "/images/models/model3.jpg",
        price: "149,90",
        model: {
          name: "Renata Lima",
          avatar: "/images/models/model3.jpg"
        },
        rating: 4.7,
        reviewCount: 83
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$b;
      const _component_ExperienceCard = _sfc_main$6;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 bg-gray-950" }, _attrs))}><div class="container mx-auto px-4"><div class="flex justify-between items-end mb-12"><div><h2 class="text-3xl md:text-4xl font-bold mb-4">Experiências em Destaque</h2><p class="text-gray-400 max-w-xl"> Explore experiências exclusivas criadas pelos modelos mais requisitados da plataforma. </p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/experiencias",
        variant: "outline",
        color: "white",
        class: "hidden md:flex",
        "trailing-icon": "i-heroicons-arrow-right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver Todas `);
          } else {
            return [
              createTextVNode(" Ver Todas ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(featuredExperiences, (experience) => {
        _push(ssrRenderComponent(_component_ExperienceCard, {
          key: experience.id,
          experience
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="mt-12 text-center md:hidden">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/experiencias",
        variant: "outline",
        color: "white",
        "trailing-icon": "i-heroicons-arrow-right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver Todas `);
          } else {
            return [
              createTextVNode(" Ver Todas ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturedExperiences.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};

const _sfc_main$4 = {
  __name: "ValuesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const values = [
      {
        title: "Segurança",
        icon: "i-heroicons-shield-check",
        description: "Verificação rigorosa de perfis, pagamentos seguros e proteção de dados confidenciais."
      },
      {
        title: "Discrição",
        icon: "i-heroicons-lock-closed",
        description: "Política de privacidade rígida, interações discretas e ambiente seguro para todos os usuários."
      },
      {
        title: "Qualidade",
        icon: "i-heroicons-star",
        description: "Curadoria de conteúdo, modelos verificados e experiências premium cuidadosamente selecionadas."
      },
      {
        title: "Controle",
        icon: "i-heroicons-adjustments-horizontal",
        description: "Os modelos têm controle total sobre seus serviços, preços e disponibilidade."
      },
      {
        title: "Personalização",
        icon: "i-heroicons-sparkles",
        description: "Experiências personalizadas para atender às suas fantasias e desejos específicos."
      },
      {
        title: "Suporte",
        icon: "i-heroicons-chat-bubble-left-right",
        description: "Atendimento ao cliente 24/7 para resolver quaisquer problemas ou dúvidas rapidamente."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$7;
      const _component_UIcon = _sfc_main$d;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 bg-gray-900" }, _attrs))}><div class="container mx-auto px-4"><div class="text-center max-w-3xl mx-auto mb-16"><h2 class="text-3xl md:text-4xl font-bold mb-6">Por Que Escolher a Dreamly</h2><p class="text-gray-400"> Na Dreamly, transformamos fantasias em experiências reais. Nossa plataforma foi construída com base em valores que priorizam segurança, qualidade e discrição. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(values, (value, index) => {
        _push(ssrRenderComponent(_component_UCard, {
          key: index,
          ui: {
            base: "transition-all duration-300",
            background: "bg-gray-800/50",
            border: "border border-gray-700",
            ring: "",
            body: { padding: "p-6" }
          },
          class: "hover:border-accent-400 hover:translate-y-[-5px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex gap-4"${_scopeId}><div class="rounded-full p-3 bg-accent-500/10 text-accent-400"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: value.icon,
                class: "w-6 h-6"
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><h3 class="text-xl font-bold mb-3"${_scopeId}>${ssrInterpolate(value.title)}</h3><p class="text-gray-400"${_scopeId}>${ssrInterpolate(value.description)}</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex gap-4" }, [
                  createVNode("div", { class: "rounded-full p-3 bg-accent-500/10 text-accent-400" }, [
                    createVNode(_component_UIcon, {
                      name: value.icon,
                      class: "w-6 h-6"
                    }, null, 8, ["name"])
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-xl font-bold mb-3" }, toDisplayString(value.title), 1),
                    createVNode("p", { class: "text-gray-400" }, toDisplayString(value.description), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ValuesSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

const _sfc_main$3 = {
  __name: "CTASection",
  __ssrInlineRender: true,
  setup(__props) {
    const highlights = [
      {
        icon: "i-heroicons-banknotes",
        text: "Ganhos de até R$10.000 mensais para modelos"
      },
      {
        icon: "i-heroicons-lock-closed",
        text: "Ambiente 100% seguro e discreto"
      },
      {
        icon: "i-heroicons-sparkles",
        text: "Experiências personalizadas e exclusivas"
      },
      {
        icon: "i-heroicons-user-group",
        text: "Mais de 5.000 usuários satisfeitos"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UImage = resolveComponent("UImage");
      const _component_UButton = _sfc_main$b;
      const _component_UCard = _sfc_main$7;
      const _component_UIcon = _sfc_main$d;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 relative overflow-hidden" }, _attrs))}><div class="absolute inset-0 bg-gradient-to-r from-accent-900 to-accent-600 opacity-90">`);
      _push(ssrRenderComponent(_component_UImage, {
        src: "https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        class: "absolute inset-0 w-full h-full object-cover mix-blend-overlay",
        width: "1920",
        height: "1080"
      }, null, _parent));
      _push(`</div><div class="container mx-auto px-4 relative z-10"><div class="flex flex-col md:flex-row items-center justify-between gap-8"><div class="max-w-2xl"><h2 class="text-3xl md:text-4xl font-bold mb-6 text-white"> Pronto para Criar sua Própria Experiência? </h2><p class="text-white/80 text-lg mb-8"> Seja você um modelo profissional ou um cliente em busca de experiências premium, a Dreamly oferece a plataforma ideal para conectar desejos e realidade. </p><div class="flex flex-wrap gap-4">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/cadastro-modelo",
        color: "white",
        size: "lg",
        variant: "solid",
        "trailing-icon": "i-heroicons-arrow-right",
        ui: { rounded: "rounded-full" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cadastrar como Modelo `);
          } else {
            return [
              createTextVNode(" Cadastrar como Modelo ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        to: "/explorar",
        color: "white",
        size: "lg",
        variant: "outline",
        "trailing-icon": "i-heroicons-arrow-right",
        ui: { rounded: "rounded-full" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explorar Experiências `);
          } else {
            return [
              createTextVNode(" Explorar Experiências ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-full md:w-auto">`);
      _push(ssrRenderComponent(_component_UCard, {
        ui: {
          background: "bg-white/10 backdrop-blur-sm",
          border: "border border-white/20",
          ring: "",
          body: { padding: "p-8" }
        },
        class: "w-full md:w-80"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-xl font-bold mb-4 text-white"${_scopeId}>Destaques Dreamly</h3><ul class="space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(highlights, (highlight, index) => {
              _push2(`<li class="flex gap-3 items-start"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: highlight.icon,
                class: "text-white mt-0.5 flex-shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-white/80"${_scopeId}>${ssrInterpolate(highlight.text)}</span></li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              createVNode("h3", { class: "text-xl font-bold mb-4 text-white" }, "Destaques Dreamly"),
              createVNode("ul", { class: "space-y-4" }, [
                (openBlock(), createBlock(Fragment, null, renderList(highlights, (highlight, index) => {
                  return createVNode("li", {
                    key: index,
                    class: "flex gap-3 items-start"
                  }, [
                    createVNode(_component_UIcon, {
                      name: highlight.icon,
                      class: "text-white mt-0.5 flex-shrink-0"
                    }, null, 8, ["name"]),
                    createVNode("span", { class: "text-white/80" }, toDisplayString(highlight.text), 1)
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CTASection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const theme = {
  "slots": {
    "root": "gap-2",
    "base": "relative overflow-hidden rounded-full bg-accented",
    "indicator": "rounded-full size-full transition-transform duration-200 ease-out",
    "status": "flex justify-end text-dimmed transition-[width] duration-200",
    "steps": "grid items-end",
    "step": "truncate text-end row-start-1 col-start-1 transition-opacity"
  },
  "variants": {
    "animation": {
      "carousel": "",
      "carousel-inverse": "",
      "swing": "",
      "elastic": ""
    },
    "color": {
      "primary": {
        "indicator": "bg-primary",
        "steps": "text-primary"
      },
      "secondary": {
        "indicator": "bg-secondary",
        "steps": "text-secondary"
      },
      "success": {
        "indicator": "bg-success",
        "steps": "text-success"
      },
      "info": {
        "indicator": "bg-info",
        "steps": "text-info"
      },
      "warning": {
        "indicator": "bg-warning",
        "steps": "text-warning"
      },
      "error": {
        "indicator": "bg-error",
        "steps": "text-error"
      },
      "neutral": {
        "indicator": "bg-inverted",
        "steps": "text-inverted"
      }
    },
    "size": {
      "2xs": {
        "status": "text-xs",
        "steps": "text-xs"
      },
      "xs": {
        "status": "text-xs",
        "steps": "text-xs"
      },
      "sm": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "md": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "lg": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "xl": {
        "status": "text-base",
        "steps": "text-base"
      },
      "2xl": {
        "status": "text-base",
        "steps": "text-base"
      }
    },
    "step": {
      "active": {
        "step": "opacity-100"
      },
      "first": {
        "step": "opacity-100 text-muted"
      },
      "other": {
        "step": "opacity-0"
      },
      "last": {
        "step": ""
      }
    },
    "orientation": {
      "horizontal": {
        "root": "w-full flex flex-col",
        "base": "w-full",
        "status": "flex-row"
      },
      "vertical": {
        "root": "h-full flex flex-row-reverse",
        "base": "h-full",
        "status": "flex-col"
      }
    },
    "inverted": {
      "true": {
        "status": "self-end"
      }
    }
  },
  "compoundVariants": [
    {
      "inverted": true,
      "orientation": "horizontal",
      "class": {
        "step": "text-start",
        "status": "flex-row-reverse"
      }
    },
    {
      "inverted": true,
      "orientation": "vertical",
      "class": {
        "steps": "items-start",
        "status": "flex-col-reverse"
      }
    },
    {
      "orientation": "horizontal",
      "size": "2xs",
      "class": "h-px"
    },
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": "h-0.5"
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": "h-1"
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": "h-2"
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": "h-3"
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": "h-4"
    },
    {
      "orientation": "horizontal",
      "size": "2xl",
      "class": "h-5"
    },
    {
      "orientation": "vertical",
      "size": "2xs",
      "class": "w-px"
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": "w-0.5"
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": "w-1"
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": "w-2"
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": "w-3"
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": "w-4"
    },
    {
      "orientation": "vertical",
      "size": "2xl",
      "class": "w-5"
    },
    {
      "orientation": "horizontal",
      "animation": "carousel",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "carousel",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "carousel-inverse",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel-inverse_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "carousel-inverse",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "swing",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[swing_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "swing",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[swing-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "elastic",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[elastic_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "elastic",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[elastic-vertical_2s_ease-in-out_infinite]"
      }
    }
  ],
  "defaultVariants": {
    "animation": "carousel",
    "color": "primary",
    "size": "md"
  }
};

const _sfc_main$2 = {
  __name: "Progress",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    max: { type: [Number, Array], required: false },
    status: { type: Boolean, required: false },
    inverted: { type: Boolean, required: false, default: false },
    size: { type: null, required: false },
    color: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    animation: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    getValueLabel: { type: Function, required: false },
    modelValue: { type: [Number, null], required: false, default: null }
  },
  emits: ["update:modelValue", "update:max"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { dir } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "getValueLabel", "modelValue"), emits);
    const isIndeterminate = computed(() => rootProps.value.modelValue === null);
    const hasSteps = computed(() => Array.isArray(props.max));
    const realMax = computed(() => {
      if (isIndeterminate.value || !props.max) {
        return void 0;
      }
      if (Array.isArray(props.max)) {
        return props.max.length - 1;
      }
      return Number(props.max);
    });
    const percent = computed(() => {
      if (isIndeterminate.value) {
        return void 0;
      }
      switch (true) {
        case rootProps.value.modelValue < 0:
          return 0;
        case rootProps.value.modelValue > (realMax.value ?? 100):
          return 100;
        default:
          return Math.round(rootProps.value.modelValue / (realMax.value ?? 100) * 100);
      }
    });
    const indicatorStyle = computed(() => {
      if (percent.value === void 0) {
        return;
      }
      if (props.orientation === "vertical") {
        return {
          transform: `translateY(${props.inverted ? "" : "-"}${100 - percent.value}%)`
        };
      } else {
        if (dir.value === "rtl") {
          return {
            transform: `translateX(${props.inverted ? "-" : ""}${100 - percent.value}%)`
          };
        } else {
          return {
            transform: `translateX(${props.inverted ? "" : "-"}${100 - percent.value}%)`
          };
        }
      }
    });
    const statusStyle = computed(() => {
      return {
        [props.orientation === "vertical" ? "height" : "width"]: percent.value ? `${percent.value}%` : "fit-content"
      };
    });
    function isActive(index) {
      return index === Number(props.modelValue);
    }
    function isFirst(index) {
      return index === 0;
    }
    function isLast(index) {
      return index === realMax.value;
    }
    function stepVariant(index) {
      index = Number(index);
      if (isActive(index) && !isFirst(index)) {
        return "active";
      }
      if (isFirst(index) && isActive(index)) {
        return "first";
      }
      if (isLast(index) && isActive(index)) {
        return "last";
      }
      return "other";
    }
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.progress) || {} })({
        animation: props.animation,
        size: props.size,
        color: props.color,
        orientation: props.orientation,
        inverted: props.inverted
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            if (!isIndeterminate.value && (__props.status || !!slots.status)) {
              _push2(`<div class="${ssrRenderClass(ui.value.status({ class: (_a2 = props.ui) == null ? void 0 : _a2.status }))}" style="${ssrRenderStyle(statusStyle.value)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "status", { percent: percent.value }, () => {
                _push2(`${ssrInterpolate(percent.value)}% `);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(ProgressRoot), mergeProps(unref(rootProps), {
              max: realMax.value,
              class: ui.value.base({ class: (_b = props.ui) == null ? void 0 : _b.base }),
              style: { "transform": "translateZ(0)" }
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ProgressIndicator), {
                    class: ui.value.indicator({ class: (_a3 = props.ui) == null ? void 0 : _a3.indicator }),
                    style: indicatorStyle.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ProgressIndicator), {
                      class: ui.value.indicator({ class: (_b2 = props.ui) == null ? void 0 : _b2.indicator }),
                      style: indicatorStyle.value
                    }, null, 8, ["class", "style"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (hasSteps.value) {
              _push2(`<div class="${ssrRenderClass(ui.value.steps({ class: (_c = props.ui) == null ? void 0 : _c.steps }))}"${_scopeId}><!--[-->`);
              ssrRenderList(__props.max, (step, index) => {
                var _a3;
                _push2(`<div class="${ssrRenderClass(ui.value.step({ class: (_a3 = props.ui) == null ? void 0 : _a3.step, step: stepVariant(index) }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, `step-${index}`, { step }, () => {
                  _push2(`${ssrInterpolate(step)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !isIndeterminate.value && (__props.status || !!slots.status) ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.status({ class: (_d = props.ui) == null ? void 0 : _d.status }),
                style: statusStyle.value
              }, [
                renderSlot(_ctx.$slots, "status", { percent: percent.value }, () => [
                  createTextVNode(toDisplayString(percent.value) + "% ", 1)
                ])
              ], 6)) : createCommentVNode("", true),
              createVNode(unref(ProgressRoot), mergeProps(unref(rootProps), {
                max: realMax.value,
                class: ui.value.base({ class: (_e = props.ui) == null ? void 0 : _e.base }),
                style: { "transform": "translateZ(0)" }
              }), {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode(unref(ProgressIndicator), {
                      class: ui.value.indicator({ class: (_a3 = props.ui) == null ? void 0 : _a3.indicator }),
                      style: indicatorStyle.value
                    }, null, 8, ["class", "style"])
                  ];
                }),
                _: 1
              }, 16, ["max", "class"]),
              hasSteps.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.steps({ class: (_f = props.ui) == null ? void 0 : _f.steps })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.max, (step, index) => {
                  var _a3;
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: ui.value.step({ class: (_a3 = props.ui) == null ? void 0 : _a3.step, step: stepVariant(index) })
                  }, [
                    renderSlot(_ctx.$slots, `step-${index}`, { step }, () => [
                      createTextVNode(toDisplayString(step), 1)
                    ])
                  ], 2);
                }), 128))
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Progress.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "PremiumRaffles",
  __ssrInlineRender: true,
  setup(__props) {
    const raffles = [
      {
        id: 1,
        title: "Encontro Exclusivo com Juliana Mendes",
        description: "Ganhe um encontro virtual privado de 2 horas com a modelo mais requisitada da plataforma.",
        image: "/images/models/model4.jpg",
        model: "Juliana Mendes",
        drawDate: "30/05/2025",
        ticketPrice: "49,90",
        ticketsLeft: 32,
        totalTickets: 100
      },
      {
        id: 2,
        title: "Pacote Premium de Fotos da Luiza Costa",
        description: "O vencedor receberá um pacote com 50 fotos exclusivas da Luiza, um dos rostos mais populares do Dreamly.",
        image: "/images/models/model5.jpg",
        model: "Luiza Costa",
        drawDate: "15/06/2025",
        ticketPrice: "29,90",
        ticketsLeft: 78,
        totalTickets: 200
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$b;
      const _component_UCard = _sfc_main$7;
      const _component_UImage = resolveComponent("UImage");
      const _component_UBadge = _sfc_main$e;
      const _component_UProgress = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 bg-gray-950" }, _attrs))}><div class="container mx-auto px-4"><div class="flex justify-between items-end mb-12"><div><h2 class="text-3xl md:text-4xl font-bold mb-4">Sorteios Premium</h2><p class="text-gray-400 max-w-xl"> Participe dos nossos sorteios exclusivos e tenha a chance de ganhar experiências premium com os modelos mais desejados. </p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/sorteios",
        variant: "outline",
        color: "white",
        class: "hidden md:flex",
        "trailing-icon": "i-heroicons-arrow-right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver Todos `);
          } else {
            return [
              createTextVNode(" Ver Todos ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><!--[-->`);
      ssrRenderList(raffles, (raffle) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UCard, {
          ui: {
            background: "bg-gray-900/60",
            border: "border border-gray-800",
            ring: "",
            body: { padding: "p-6" }
          },
          class: "transition-all duration-300 hover:border-accent-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col md:flex-row gap-6"${_scopeId}><div class="w-full md:w-1/3"${_scopeId}><div class="relative aspect-square rounded-lg overflow-hidden"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UImage, {
                src: raffle.image,
                alt: raffle.title,
                class: "object-cover w-full h-full",
                width: "300",
                height: "300"
              }, null, _parent2, _scopeId));
              _push2(`<div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"${_scopeId}></div><div class="absolute bottom-0 left-0 p-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "accent",
                variant: "solid",
                class: "font-medium",
                size: "lg"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` R$ ${ssrInterpolate(raffle.ticketPrice)}`);
                  } else {
                    return [
                      createTextVNode(" R$ " + toDisplayString(raffle.ticketPrice), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div></div><div class="flex-1"${_scopeId}><h3 class="text-xl font-bold mb-3"${_scopeId}>${ssrInterpolate(raffle.title)}</h3><p class="text-gray-400 mb-4"${_scopeId}>${ssrInterpolate(raffle.description)}</p><div class="space-y-4"${_scopeId}><div class="flex justify-between"${_scopeId}><span class="text-gray-400"${_scopeId}>Modelo:</span><span class="font-medium"${_scopeId}>${ssrInterpolate(raffle.model)}</span></div><div class="flex justify-between"${_scopeId}><span class="text-gray-400"${_scopeId}>Data do Sorteio:</span><span class="font-medium"${_scopeId}>${ssrInterpolate(raffle.drawDate)}</span></div><div class="flex justify-between"${_scopeId}><span class="text-gray-400"${_scopeId}>Tickets Disponíveis:</span><span class="font-medium"${_scopeId}>${ssrInterpolate(raffle.ticketsLeft)}/${ssrInterpolate(raffle.totalTickets)}</span></div>`);
              _push2(ssrRenderComponent(_component_UProgress, {
                "model-value": (raffle.totalTickets - raffle.ticketsLeft) / raffle.totalTickets * 100,
                color: "accent",
                ui: { track: { background: "bg-gray-700" } }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                to: `/sorteio/${raffle.id}`,
                block: "",
                color: "accent",
                class: "mt-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Comprar Ticket `);
                  } else {
                    return [
                      createTextVNode(" Comprar Ticket ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col md:flex-row gap-6" }, [
                  createVNode("div", { class: "w-full md:w-1/3" }, [
                    createVNode("div", { class: "relative aspect-square rounded-lg overflow-hidden" }, [
                      createVNode(_component_UImage, {
                        src: raffle.image,
                        alt: raffle.title,
                        class: "object-cover w-full h-full",
                        width: "300",
                        height: "300"
                      }, null, 8, ["src", "alt"]),
                      createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" }),
                      createVNode("div", { class: "absolute bottom-0 left-0 p-3" }, [
                        createVNode(_component_UBadge, {
                          color: "accent",
                          variant: "solid",
                          class: "font-medium",
                          size: "lg"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" R$ " + toDisplayString(raffle.ticketPrice), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("h3", { class: "text-xl font-bold mb-3" }, toDisplayString(raffle.title), 1),
                    createVNode("p", { class: "text-gray-400 mb-4" }, toDisplayString(raffle.description), 1),
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "flex justify-between" }, [
                        createVNode("span", { class: "text-gray-400" }, "Modelo:"),
                        createVNode("span", { class: "font-medium" }, toDisplayString(raffle.model), 1)
                      ]),
                      createVNode("div", { class: "flex justify-between" }, [
                        createVNode("span", { class: "text-gray-400" }, "Data do Sorteio:"),
                        createVNode("span", { class: "font-medium" }, toDisplayString(raffle.drawDate), 1)
                      ]),
                      createVNode("div", { class: "flex justify-between" }, [
                        createVNode("span", { class: "text-gray-400" }, "Tickets Disponíveis:"),
                        createVNode("span", { class: "font-medium" }, toDisplayString(raffle.ticketsLeft) + "/" + toDisplayString(raffle.totalTickets), 1)
                      ]),
                      createVNode(_component_UProgress, {
                        "model-value": (raffle.totalTickets - raffle.ticketsLeft) / raffle.totalTickets * 100,
                        color: "accent",
                        ui: { track: { background: "bg-gray-700" } }
                      }, null, 8, ["model-value"]),
                      createVNode(_component_UButton, {
                        to: `/sorteio/${raffle.id}`,
                        block: "",
                        color: "accent",
                        class: "mt-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Comprar Ticket ")
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="mt-12 text-center md:hidden">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/sorteios",
        variant: "outline",
        color: "white",
        "trailing-icon": "i-heroicons-arrow-right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver Todos `);
          } else {
            return [
              createTextVNode(" Ver Todos ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PremiumRaffles.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = _sfc_main$8;
      const _component_FeaturedExperiences = _sfc_main$5;
      const _component_ValuesSection = _sfc_main$4;
      const _component_CTASection = _sfc_main$3;
      const _component_PremiumRaffles = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Hero, null, null, _parent));
      _push(ssrRenderComponent(_component_FeaturedExperiences, null, null, _parent));
      _push(ssrRenderComponent(_component_ValuesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_CTASection, null, null, _parent));
      _push(ssrRenderComponent(_component_PremiumRaffles, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
