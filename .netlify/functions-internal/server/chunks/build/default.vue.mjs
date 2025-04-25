import { computed, unref, mergeProps, withCtx, renderSlot, useSSRContext, inject, provide, useSlots, toRef, toHandlers, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, createVNode, mergeModels, useModel, watch, resolveComponent, ref, isRef, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$d } from './Button.vue.mjs';
import { _ as _sfc_main$e } from './Link.vue.mjs';
import { Primitive, useForwardPropsEmits, DialogRoot, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, VisuallyHidden, DialogTitle, DialogDescription, DialogClose } from 'reka-ui';
import { t as tv } from './tv.mjs';
import { a as useAppConfig, b as useRoute } from './server.mjs';
import { y as defu } from '../_/nitro.mjs';
import { reactivePick, createSharedComposable, createReusableTemplate } from '@vueuse/core';
import { u as useLocale, d as defineLocale, e as en$1, l as localeContextInjectionKey, b as buildLocaleContext } from './useLocale.mjs';
import { DrawerRoot, DrawerTrigger, DrawerPortal, DrawerOverlay, DrawerContent, DrawerHandle, DrawerTitle, DrawerDescription } from 'vaul-vue';
import { g as getSlotChildrenText } from './index3.mjs';
import { t as tv$1 } from './tv2.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { _ as _sfc_main$f } from './Icon.vue.mjs';
import './useButtonGroup.mjs';
import './index.mjs';
import './Avatar.vue.mjs';
import './NuxtImg.vue2.mjs';
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
import './index2.mjs';
import '@iconify/utils/lib/css/icon';
import './asyncData.mjs';

const theme$5 = {
  "base": "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
};

const _sfc_main$c = {
  __name: "Container",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$5), ...((_a = appConfig.ui) == null ? void 0 : _a.container) || {} });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Container.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};

const portalTargetInjectionKey = Symbol("nuxt-ui.portal-target");
function usePortal(portal) {
  const portalTarget = inject(portalTargetInjectionKey, void 0);
  const to = computed(() => {
    if (typeof portal.value === "boolean" || portal.value === void 0) {
      return (portalTarget == null ? void 0 : portalTarget.value) ?? "body";
    }
    return portal.value;
  });
  const disabled = computed(() => typeof portal.value === "boolean" ? !portal.value : false);
  provide(portalTargetInjectionKey, computed(() => to.value));
  return computed(() => ({
    to: to.value,
    disabled: disabled.value
  }));
}

const theme$4 = {
  "slots": {
    "overlay": "fixed inset-0 bg-elevated/75",
    "content": "fixed bg-default divide-y divide-default sm:ring ring-default sm:shadow-lg flex flex-col focus:outline-none",
    "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
    "wrapper": "",
    "body": "flex-1 overflow-y-auto p-4 sm:p-6",
    "footer": "flex items-center gap-1.5 p-4 sm:px-6",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "close": "absolute top-4 end-4"
  },
  "variants": {
    "side": {
      "top": {
        "content": "inset-x-0 top-0 max-h-full"
      },
      "right": {
        "content": "right-0 inset-y-0 w-full max-w-md"
      },
      "bottom": {
        "content": "inset-x-0 bottom-0 max-h-full"
      },
      "left": {
        "content": "left-0 inset-y-0 w-full max-w-md"
      }
    },
    "transition": {
      "true": {
        "overlay": "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]"
      }
    }
  },
  "compoundVariants": [
    {
      "transition": true,
      "side": "top",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-top_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "right",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-right_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-right_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "bottom",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-bottom_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "left",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-left_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-left_200ms_ease-in-out]"
      }
    }
  ]
};

const _sfc_main$b = {
  __name: "Slideover",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: false },
    description: { type: String, required: false },
    content: { type: Object, required: false },
    overlay: { type: Boolean, required: false, default: true },
    transition: { type: Boolean, required: false, default: true },
    side: { type: null, required: false, default: "right" },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    close: { type: [Boolean, Object], required: false, default: true },
    closeIcon: { type: String, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    modal: { type: Boolean, required: false, default: true }
  },
  emits: ["after:leave", "close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "modal"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      const defaultEvents = {
        closeAutoFocus: (e) => e.preventDefault()
      };
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown", "closeAutoFocus"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, {});
      }
      return defaultEvents;
    });
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$4), ...((_a = appConfig.ui) == null ? void 0 : _a.slideover) || {} })({
        transition: props.transition,
        side: props.side
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DialogTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DialogPortal), unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  if (__props.overlay) {
                    _push3(ssrRenderComponent(unref(DialogOverlay), {
                      class: ui.value.overlay({ class: (_a = props.ui) == null ? void 0 : _a.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    "data-side": __props.side,
                    class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                  }, contentProps.value, {
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DialogTitle), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(__props.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (__props.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DialogDescription), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(__props.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                          var _a2, _b2, _c2;
                          if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (__props.close || !!slots.close)) {
                            _push4(`<div class="${ssrRenderClass(ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                              var _a3, _b3, _c3;
                              _push4(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper }))}"${_scopeId3}>`);
                              if (__props.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DialogTitle), {
                                  class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(__props.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (__props.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DialogDescription), {
                                  class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(__props.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                              if (__props.close || !!slots.close) {
                                _push4(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a4;
                                        if (__props.close) {
                                          _push5(ssrRenderComponent(_sfc_main$d, mergeProps({
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            size: "md",
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("slideover.close")
                                          }, typeof __props.close === "object" ? __props.close : {}, {
                                            class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                          }), null, _parent5, _scopeId4));
                                        } else {
                                          _push5(`<!---->`);
                                        }
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                          var _a4;
                                          return [
                                            __props.close ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                                              key: 0,
                                              icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                              size: "md",
                                              color: "neutral",
                                              variant: "ghost",
                                              "aria-label": unref(t)("slideover.close")
                                            }, typeof __props.close === "object" ? __props.close : {}, {
                                              class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                            }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                          ];
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<div class="${ssrRenderClass(ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body }))}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "body", {}, null, _push4, _parent4, _scopeId3);
                          _push4(`</div>`);
                          if (!!slots.footer) {
                            _push4(`<div class="${ssrRenderClass(ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a2, _b2, _c2;
                            return [
                              !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (__props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                              }, [
                                renderSlot(_ctx.$slots, "header", {}, () => {
                                  var _a3, _b3, _c3;
                                  return [
                                    createVNode("div", {
                                      class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                                    }, [
                                      __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                        key: 0,
                                        class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true),
                                      __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                        key: 1,
                                        class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ], 2),
                                    __props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                      key: 0,
                                      "as-child": ""
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                          var _a4;
                                          return [
                                            __props.close ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                                              key: 0,
                                              icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                              size: "md",
                                              color: "neutral",
                                              variant: "ghost",
                                              "aria-label": unref(t)("slideover.close")
                                            }, typeof __props.close === "object" ? __props.close : {}, {
                                              class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                            }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                          ];
                                        })
                                      ]),
                                      _: 3
                                    })) : createCommentVNode("", true)
                                  ];
                                })
                              ], 2)) : createCommentVNode("", true),
                              createVNode("div", {
                                class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                              }, [
                                renderSlot(_ctx.$slots, "body")
                              ], 2),
                              !!slots.footer ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer })
                              }, [
                                renderSlot(_ctx.$slots, "footer")
                              ], 2)) : createCommentVNode("", true)
                            ];
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_c = props.ui) == null ? void 0 : _c.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      "data-side": __props.side,
                      class: ui.value.content({ class: [!slots.default && props.class, (_d = props.ui) == null ? void 0 : _d.content] })
                    }, contentProps.value, {
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", {}, () => {
                          var _a2, _b2, _c2;
                          return [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (__props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", {}, () => {
                                var _a3, _b3, _c3;
                                return [
                                  createVNode("div", {
                                    class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                                  }, [
                                    __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 2),
                                  __props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                    key: 0,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a4;
                                        return [
                                          __props.close ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                                            key: 0,
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            size: "md",
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("slideover.close")
                                          }, typeof __props.close === "object" ? __props.close : {}, {
                                            class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              })
                            ], 2)) : createCommentVNode("", true),
                            createVNode("div", {
                              class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                            }, [
                              renderSlot(_ctx.$slots, "body")
                            ], 2),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer")
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 3
                    }, 16, ["data-side", "class", "onAfterLeave"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DialogTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DialogPortal), unref(portalProps), {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_a = props.ui) == null ? void 0 : _a.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      "data-side": __props.side,
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }, contentProps.value, {
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", {}, () => {
                          var _a2, _b2, _c;
                          return [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (__props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", {}, () => {
                                var _a3, _b3, _c2;
                                return [
                                  createVNode("div", {
                                    class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                                  }, [
                                    __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 2),
                                  __props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                    key: 0,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a4;
                                        return [
                                          __props.close ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                                            key: 0,
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            size: "md",
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("slideover.close")
                                          }, typeof __props.close === "object" ? __props.close : {}, {
                                            class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              })
                            ], 2)) : createCommentVNode("", true),
                            createVNode("div", {
                              class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                            }, [
                              renderSlot(_ctx.$slots, "body")
                            ], 2),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.footer({ class: (_c = props.ui) == null ? void 0 : _c.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer")
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 3
                    }, 16, ["data-side", "class", "onAfterLeave"])
                  ];
                }),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};

const theme$3 = {
  "slots": {
    "overlay": "fixed inset-0 bg-elevated/75",
    "content": "fixed bg-default divide-y divide-default flex flex-col focus:outline-none",
    "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
    "wrapper": "",
    "body": "flex-1 overflow-y-auto p-4 sm:p-6",
    "footer": "flex items-center gap-1.5 p-4 sm:px-6",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "close": "absolute top-4 end-4"
  },
  "variants": {
    "transition": {
      "true": {
        "overlay": "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]",
        "content": "data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]"
      }
    },
    "fullscreen": {
      "true": {
        "content": "inset-0"
      },
      "false": {
        "content": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-lg shadow-lg ring ring-default"
      }
    }
  }
};

const _sfc_main$a = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: false },
    description: { type: String, required: false },
    content: { type: Object, required: false },
    overlay: { type: Boolean, required: false, default: true },
    transition: { type: Boolean, required: false, default: true },
    fullscreen: { type: Boolean, required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    close: { type: [Boolean, Object], required: false, default: true },
    closeIcon: { type: String, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    modal: { type: Boolean, required: false, default: true }
  },
  emits: ["after:leave", "close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "modal"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      const defaultEvents = {
        closeAutoFocus: (e) => e.preventDefault()
      };
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown", "closeAutoFocus"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, {});
      }
      return defaultEvents;
    });
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$3), ...((_a = appConfig.ui) == null ? void 0 : _a.modal) || {} })({
        transition: props.transition,
        fullscreen: props.fullscreen
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DialogTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DialogPortal), unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  if (__props.overlay) {
                    _push3(ssrRenderComponent(unref(DialogOverlay), {
                      class: ui.value.overlay({ class: (_a = props.ui) == null ? void 0 : _a.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                  }, contentProps.value, {
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DialogTitle), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(__props.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (__props.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DialogDescription), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(__props.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                          var _a2, _b2, _c2;
                          if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (__props.close || !!slots.close)) {
                            _push4(`<div class="${ssrRenderClass(ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                              var _a3, _b3, _c3;
                              _push4(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper }))}"${_scopeId3}>`);
                              if (__props.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DialogTitle), {
                                  class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(__props.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (__props.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DialogDescription), {
                                  class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(__props.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                              if (__props.close || !!slots.close) {
                                _push4(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a4;
                                        if (__props.close) {
                                          _push5(ssrRenderComponent(_sfc_main$d, mergeProps({
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            size: "md",
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof __props.close === "object" ? __props.close : {}, {
                                            class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                          }), null, _parent5, _scopeId4));
                                        } else {
                                          _push5(`<!---->`);
                                        }
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                          var _a4;
                                          return [
                                            __props.close ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                                              key: 0,
                                              icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                              size: "md",
                                              color: "neutral",
                                              variant: "ghost",
                                              "aria-label": unref(t)("modal.close")
                                            }, typeof __props.close === "object" ? __props.close : {}, {
                                              class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                            }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                          ];
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.body) {
                            _push4(`<div class="${ssrRenderClass(ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "body", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.footer) {
                            _push4(`<div class="${ssrRenderClass(ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a2, _b2, _c2;
                            return [
                              !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (__props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                              }, [
                                renderSlot(_ctx.$slots, "header", {}, () => {
                                  var _a3, _b3, _c3;
                                  return [
                                    createVNode("div", {
                                      class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                                    }, [
                                      __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                        key: 0,
                                        class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true),
                                      __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                        key: 1,
                                        class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ], 2),
                                    __props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                      key: 0,
                                      "as-child": ""
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                          var _a4;
                                          return [
                                            __props.close ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                                              key: 0,
                                              icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                              size: "md",
                                              color: "neutral",
                                              variant: "ghost",
                                              "aria-label": unref(t)("modal.close")
                                            }, typeof __props.close === "object" ? __props.close : {}, {
                                              class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                            }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                          ];
                                        })
                                      ]),
                                      _: 3
                                    })) : createCommentVNode("", true)
                                  ];
                                })
                              ], 2)) : createCommentVNode("", true),
                              !!slots.body ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                              }, [
                                renderSlot(_ctx.$slots, "body")
                              ], 2)) : createCommentVNode("", true),
                              !!slots.footer ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer })
                              }, [
                                renderSlot(_ctx.$slots, "footer")
                              ], 2)) : createCommentVNode("", true)
                            ];
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_c = props.ui) == null ? void 0 : _c.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, (_d = props.ui) == null ? void 0 : _d.content] })
                    }, contentProps.value, {
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", {}, () => {
                          var _a2, _b2, _c2;
                          return [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (__props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", {}, () => {
                                var _a3, _b3, _c3;
                                return [
                                  createVNode("div", {
                                    class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                                  }, [
                                    __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 2),
                                  __props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                    key: 0,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a4;
                                        return [
                                          __props.close ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                                            key: 0,
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            size: "md",
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof __props.close === "object" ? __props.close : {}, {
                                            class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              })
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                            }, [
                              renderSlot(_ctx.$slots, "body")
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer")
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 3
                    }, 16, ["class", "onAfterLeave"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DialogTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DialogPortal), unref(portalProps), {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_a = props.ui) == null ? void 0 : _a.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }, contentProps.value, {
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", {}, () => {
                          var _a2, _b2, _c;
                          return [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (__props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", {}, () => {
                                var _a3, _b3, _c2;
                                return [
                                  createVNode("div", {
                                    class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                                  }, [
                                    __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 2),
                                  __props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                    key: 0,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a4;
                                        return [
                                          __props.close ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                                            key: 0,
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            size: "md",
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof __props.close === "object" ? __props.close : {}, {
                                            class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              })
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                            }, [
                              renderSlot(_ctx.$slots, "body")
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: ui.value.footer({ class: (_c = props.ui) == null ? void 0 : _c.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer")
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 3
                    }, 16, ["class", "onAfterLeave"])
                  ];
                }),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Modal.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};

const theme$2 = {
  "slots": {
    "overlay": "fixed inset-0 bg-elevated/75",
    "content": "fixed bg-default ring ring-default flex focus:outline-none",
    "handle": [
      "shrink-0 !bg-accented",
      "transition-opacity"
    ],
    "container": "w-full flex flex-col gap-4 p-4 overflow-y-auto",
    "header": "",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "body": "flex-1",
    "footer": "flex flex-col gap-1.5"
  },
  "variants": {
    "direction": {
      "top": {
        "content": "mb-24 flex-col-reverse",
        "handle": "mb-4"
      },
      "right": {
        "content": "flex-row",
        "handle": "!ml-4"
      },
      "bottom": {
        "content": "mt-24 flex-col",
        "handle": "mt-4"
      },
      "left": {
        "content": "flex-row-reverse",
        "handle": "!mr-4"
      }
    },
    "inset": {
      "true": {
        "content": "rounded-lg after:hidden"
      }
    }
  },
  "compoundVariants": [
    {
      "direction": [
        "top",
        "bottom"
      ],
      "class": {
        "content": "h-auto max-h-[96%]",
        "handle": "!w-12 !h-1.5 mx-auto"
      }
    },
    {
      "direction": [
        "right",
        "left"
      ],
      "class": {
        "content": "w-auto max-w-[calc(100%-2rem)]",
        "handle": "!h-12 !w-1.5 mt-auto mb-auto"
      }
    },
    {
      "direction": "top",
      "inset": true,
      "class": {
        "content": "inset-x-4 top-4"
      }
    },
    {
      "direction": "top",
      "inset": false,
      "class": {
        "content": "inset-x-0 top-0 rounded-b-lg"
      }
    },
    {
      "direction": "bottom",
      "inset": true,
      "class": {
        "content": "inset-x-4 bottom-4"
      }
    },
    {
      "direction": "bottom",
      "inset": false,
      "class": {
        "content": "inset-x-0 bottom-0 rounded-t-lg"
      }
    },
    {
      "direction": "left",
      "inset": true,
      "class": {
        "content": "inset-y-4 left-4"
      }
    },
    {
      "direction": "left",
      "inset": false,
      "class": {
        "content": "inset-y-0 left-0 rounded-r-lg"
      }
    },
    {
      "direction": "right",
      "inset": true,
      "class": {
        "content": "inset-y-4 right-4"
      }
    },
    {
      "direction": "right",
      "inset": false,
      "class": {
        "content": "inset-y-0 right-0 rounded-l-lg"
      }
    }
  ]
};

const _sfc_main$9 = {
  __name: "Drawer",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    inset: { type: Boolean, required: false },
    content: { type: Object, required: false },
    overlay: { type: Boolean, required: false, default: true },
    handle: { type: Boolean, required: false, default: true },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    activeSnapPoint: { type: [Number, String, null], required: false },
    closeThreshold: { type: Number, required: false },
    shouldScaleBackground: { type: Boolean, required: false },
    setBackgroundColorOnScale: { type: Boolean, required: false },
    scrollLockTimeout: { type: Number, required: false },
    fixed: { type: Boolean, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    modal: { type: Boolean, required: false, default: true },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    nested: { type: Boolean, required: false },
    direction: { type: String, required: false, default: "bottom" },
    noBodyStyles: { type: Boolean, required: false },
    handleOnly: { type: Boolean, required: false },
    preventScrollRestoration: { type: Boolean, required: false },
    snapPoints: { type: Array, required: false }
  },
  emits: ["drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "activeSnapPoint", "closeThreshold", "shouldScaleBackground", "setBackgroundColorOnScale", "scrollLockTimeout", "fixed", "dismissible", "modal", "open", "defaultOpen", "nested", "direction", "noBodyStyles", "handleOnly", "preventScrollRestoration", "snapPoints"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = {
      closeAutoFocus: (e) => e.preventDefault()
    };
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$2), ...((_a = appConfig.ui) == null ? void 0 : _a.drawer) || {} })({
        direction: props.direction,
        inset: props.inset
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DrawerTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default")
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DrawerPortal), unref(portalProps), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  if (__props.overlay) {
                    _push3(ssrRenderComponent(unref(DrawerOverlay), {
                      class: ui.value.overlay({ class: (_a = props.ui) == null ? void 0 : _a.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DrawerContent), mergeProps({
                    class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                  }, contentProps.value, toHandlers(contentEvents)), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2;
                      if (_push4) {
                        if (__props.handle) {
                          _push4(ssrRenderComponent(unref(DrawerHandle), {
                            class: ui.value.handle({ class: (_a2 = props.ui) == null ? void 0 : _a2.handle })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                          var _a3, _b3, _c2, _d2;
                          _push4(`<div class="${ssrRenderClass(ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container }))}"${_scopeId3}>`);
                          if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description)) {
                            _push4(`<div class="${ssrRenderClass(ui.value.header({ class: (_b3 = props.ui) == null ? void 0 : _b3.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                              var _a4, _b4;
                              if (__props.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DrawerTitle), {
                                  class: ui.value.title({ class: (_a4 = props.ui) == null ? void 0 : _a4.title })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(__props.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 3
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (__props.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DrawerDescription), {
                                  class: ui.value.description({ class: (_b4 = props.ui) == null ? void 0 : _b4.description })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(__props.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 3
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.body) {
                            _push4(`<div class="${ssrRenderClass(ui.value.body({ class: (_c2 = props.ui) == null ? void 0 : _c2.body }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "body", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.footer) {
                            _push4(`<div class="${ssrRenderClass(ui.value.footer({ class: (_d2 = props.ui) == null ? void 0 : _d2.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          __props.handle ? (openBlock(), createBlock(unref(DrawerHandle), {
                            key: 0,
                            class: ui.value.handle({ class: (_b2 = props.ui) == null ? void 0 : _b2.handle })
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a3, _b3, _c2, _d2;
                            return [
                              createVNode("div", {
                                class: ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container })
                              }, [
                                !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: ui.value.header({ class: (_b3 = props.ui) == null ? void 0 : _b3.header })
                                }, [
                                  renderSlot(_ctx.$slots, "header", {}, () => {
                                    var _a4, _b4;
                                    return [
                                      __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                        key: 0,
                                        class: ui.value.title({ class: (_a4 = props.ui) == null ? void 0 : _a4.title })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true),
                                      __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                        key: 1,
                                        class: ui.value.description({ class: (_b4 = props.ui) == null ? void 0 : _b4.description })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ];
                                  })
                                ], 2)) : createCommentVNode("", true),
                                !!slots.body ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: ui.value.body({ class: (_c2 = props.ui) == null ? void 0 : _c2.body })
                                }, [
                                  renderSlot(_ctx.$slots, "body")
                                ], 2)) : createCommentVNode("", true),
                                !!slots.footer ? (openBlock(), createBlock("div", {
                                  key: 2,
                                  class: ui.value.footer({ class: (_d2 = props.ui) == null ? void 0 : _d2.footer })
                                }, [
                                  renderSlot(_ctx.$slots, "footer")
                                ], 2)) : createCommentVNode("", true)
                              ], 2)
                            ];
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DrawerOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_c = props.ui) == null ? void 0 : _c.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DrawerContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, (_d = props.ui) == null ? void 0 : _d.content] })
                    }, contentProps.value, toHandlers(contentEvents)), {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          __props.handle ? (openBlock(), createBlock(unref(DrawerHandle), {
                            key: 0,
                            class: ui.value.handle({ class: (_a2 = props.ui) == null ? void 0 : _a2.handle })
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a3, _b2, _c2, _d2;
                            return [
                              createVNode("div", {
                                class: ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container })
                              }, [
                                !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: ui.value.header({ class: (_b2 = props.ui) == null ? void 0 : _b2.header })
                                }, [
                                  renderSlot(_ctx.$slots, "header", {}, () => {
                                    var _a4, _b3;
                                    return [
                                      __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                        key: 0,
                                        class: ui.value.title({ class: (_a4 = props.ui) == null ? void 0 : _a4.title })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true),
                                      __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                        key: 1,
                                        class: ui.value.description({ class: (_b3 = props.ui) == null ? void 0 : _b3.description })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ];
                                  })
                                ], 2)) : createCommentVNode("", true),
                                !!slots.body ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: ui.value.body({ class: (_c2 = props.ui) == null ? void 0 : _c2.body })
                                }, [
                                  renderSlot(_ctx.$slots, "body")
                                ], 2)) : createCommentVNode("", true),
                                !!slots.footer ? (openBlock(), createBlock("div", {
                                  key: 2,
                                  class: ui.value.footer({ class: (_d2 = props.ui) == null ? void 0 : _d2.footer })
                                }, [
                                  renderSlot(_ctx.$slots, "footer")
                                ], 2)) : createCommentVNode("", true)
                              ], 2)
                            ];
                          })
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DrawerTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DrawerPortal), unref(portalProps), {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DrawerOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_a = props.ui) == null ? void 0 : _a.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DrawerContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }, contentProps.value, toHandlers(contentEvents)), {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          __props.handle ? (openBlock(), createBlock(unref(DrawerHandle), {
                            key: 0,
                            class: ui.value.handle({ class: (_a2 = props.ui) == null ? void 0 : _a2.handle })
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a3, _b2, _c, _d;
                            return [
                              createVNode("div", {
                                class: ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container })
                              }, [
                                !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: ui.value.header({ class: (_b2 = props.ui) == null ? void 0 : _b2.header })
                                }, [
                                  renderSlot(_ctx.$slots, "header", {}, () => {
                                    var _a4, _b3;
                                    return [
                                      __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                        key: 0,
                                        class: ui.value.title({ class: (_a4 = props.ui) == null ? void 0 : _a4.title })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true),
                                      __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                        key: 1,
                                        class: ui.value.description({ class: (_b3 = props.ui) == null ? void 0 : _b3.description })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ];
                                  })
                                ], 2)) : createCommentVNode("", true),
                                !!slots.body ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: ui.value.body({ class: (_c = props.ui) == null ? void 0 : _c.body })
                                }, [
                                  renderSlot(_ctx.$slots, "body")
                                ], 2)) : createCommentVNode("", true),
                                !!slots.footer ? (openBlock(), createBlock("div", {
                                  key: 2,
                                  class: ui.value.footer({ class: (_d = props.ui) == null ? void 0 : _d.footer })
                                }, [
                                  renderSlot(_ctx.$slots, "footer")
                                ], 2)) : createCommentVNode("", true)
                              ], 2)
                            ];
                          })
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};

const en = defineLocale({
  ...en$1,
  messages: {
    ...en$1.messages,
    authForm: {
      submit: "Continue",
      hidePassword: "Hide password",
      showPassword: "Show password"
    },
    banner: {
      close: "Close"
    },
    chatPrompt: {
      placeholder: "Type your message here..."
    },
    chatPromptSubmit: {
      label: "Send prompt"
    },
    colorMode: {
      system: "System",
      light: "Light",
      dark: "Dark",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode"
    },
    contentSearch: {
      links: "Links",
      theme: "Theme"
    },
    contentSearchButton: {
      label: "Search..."
    },
    contentToc: {
      title: "On this page"
    },
    dashboardSearch: {
      theme: "Theme"
    },
    dashboardSearchButton: {
      label: "Search..."
    },
    dashboardSidebarCollapse: {
      expand: "Expand sidebar",
      collapse: "Collapse sidebar"
    },
    dashboardSidebarToggle: {
      close: "Close sidebar",
      open: "Open sidebar"
    },
    error: {
      clear: "Back to home"
    },
    header: {
      close: "Close menu",
      open: "Open menu"
    },
    pricingTable: {
      caption: "Pricing plan comparison"
    },
    prose: {
      pre: {
        copy: "Copy code to clipboard"
      }
    }
  }
});

const _useLocalePro = (localeOverrides) => {
  const locale = localeOverrides || toRef(inject(localeContextInjectionKey));
  return buildLocaleContext(computed(() => locale.value || en));
};
const useLocalePro = /* @__PURE__ */ createSharedComposable(_useLocalePro);

const theme$1 = {
  "slots": {
    "root": "bg-default/75 backdrop-blur border-b border-default h-(--ui-header-height) sticky top-0 z-50",
    "container": "flex items-center justify-between gap-3 h-full",
    "left": "lg:flex-1 flex items-center gap-1.5",
    "center": "hidden lg:flex",
    "right": "flex items-center justify-end lg:flex-1 gap-1.5",
    "title": "shrink-0 font-bold text-xl text-highlighted flex items-end gap-1.5",
    "toggle": "lg:hidden",
    "content": "lg:hidden",
    "overlay": "lg:hidden",
    "header": "px-4 sm:px-6 h-(--ui-header-height) shrink-0 flex items-center justify-between gap-3",
    "body": "p-4 sm:p-6 overflow-y-auto"
  },
  "variants": {
    "toggleSide": {
      "left": {
        "toggle": "-ms-1.5"
      },
      "right": {
        "toggle": "-me-1.5"
      }
    }
  }
};

const _sfc_main$8 = {
  __name: "Header",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false, default: "header" },
    title: { type: String, required: false, default: "Nuxt UI Pro" },
    to: { type: String, required: false, default: "/" },
    mode: { type: null, required: false, default: "modal" },
    menu: { type: null, required: false },
    toggle: { type: [Boolean, Object], required: false, default: true },
    toggleSide: { type: String, required: false, default: "right" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const open = useModel(__props, "open", { type: Boolean, ...{ default: false } });
    const route = useRoute();
    const { t } = useLocalePro();
    const appConfig = useAppConfig();
    const [DefineLeftTemplate, ReuseLeftTemplate] = createReusableTemplate();
    const [DefineRightTemplate, ReuseRightTemplate] = createReusableTemplate();
    const [DefineToggleTemplate, ReuseToggleTemplate] = createReusableTemplate();
    const ariaLabel = computed(() => {
      const slotText = slots.title && getSlotChildrenText(slots.title());
      return (slotText || props.title || "Nuxt UI Pro").trim();
    });
    watch(() => route.fullPath, () => {
      open.value = false;
    });
    const ui = computed(() => {
      var _a;
      return tv$1({ extend: tv$1(theme$1), ...((_a = appConfig.uiPro) == null ? void 0 : _a.header) || {} })();
    });
    const Menu = computed(() => ({
      slideover: _sfc_main$b,
      modal: _sfc_main$a,
      drawer: _sfc_main$9
    })[props.mode]);
    const menuProps = toRef(() => defu(props.menu, {
      content: {
        onOpenAutoFocus: (e) => e.preventDefault()
      }
    }, props.mode === "modal" ? { fullscreen: true, transition: false } : {}));
    function toggleOpen() {
      open.value = !open.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_UButton = _sfc_main$d;
      const _component_ULink = _sfc_main$e;
      const _component_UContainer = _sfc_main$c;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineToggleTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "toggle", {
              open: open.value,
              toggle: toggleOpen
            }, () => {
              var _a2;
              if (__props.toggle) {
                _push2(ssrRenderComponent(_component_UButton, mergeProps({
                  color: "neutral",
                  variant: "ghost",
                  "aria-label": open.value ? unref(t)("header.close") : unref(t)("header.open"),
                  icon: open.value ? unref(appConfig).ui.icons.close : unref(appConfig).ui.icons.menu
                }, typeof __props.toggle === "object" ? __props.toggle : {}, {
                  class: ui.value.toggle({ class: (_a2 = props.ui) == null ? void 0 : _a2.toggle, toggleSide: __props.toggleSide }),
                  onClick: toggleOpen
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "toggle", {
                open: open.value,
                toggle: toggleOpen
              }, () => {
                var _a2;
                return [
                  __props.toggle ? (openBlock(), createBlock(_component_UButton, mergeProps({
                    key: 0,
                    color: "neutral",
                    variant: "ghost",
                    "aria-label": open.value ? unref(t)("header.close") : unref(t)("header.open"),
                    icon: open.value ? unref(appConfig).ui.icons.close : unref(appConfig).ui.icons.menu
                  }, typeof __props.toggle === "object" ? __props.toggle : {}, {
                    class: ui.value.toggle({ class: (_a2 = props.ui) == null ? void 0 : _a2.toggle, toggleSide: __props.toggleSide }),
                    onClick: toggleOpen
                  }), null, 16, ["aria-label", "icon", "class"])) : createCommentVNode("", true)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineLeftTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.left({ class: (_a2 = props.ui) == null ? void 0 : _a2.left }))}"${_scopeId}>`);
            if (__props.toggleSide === "left") {
              _push2(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "left", {}, () => {
              var _a3;
              _push2(ssrRenderComponent(_component_ULink, {
                to: __props.to,
                "aria-label": ariaLabel.value,
                class: ui.value.title({ class: (_a3 = props.ui) == null ? void 0 : _a3.title })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                      _push3(`${ssrInterpolate(__props.title)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(__props.title), 1)
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ui.value.left({ class: (_b2 = props.ui) == null ? void 0 : _b2.left })
              }, [
                __props.toggleSide === "left" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "left", {}, () => {
                  var _a3;
                  return [
                    createVNode(_component_ULink, {
                      to: __props.to,
                      "aria-label": ariaLabel.value,
                      class: ui.value.title({ class: (_a3 = props.ui) == null ? void 0 : _a3.title })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(__props.title), 1)
                        ])
                      ]),
                      _: 3
                    }, 8, ["to", "aria-label", "class"])
                  ];
                })
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineRightTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.right({ class: (_a2 = props.ui) == null ? void 0 : _a2.right }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "right", {}, null, _push2, _parent2, _scopeId);
            if (__props.toggleSide === "right") {
              _push2(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ui.value.right({ class: (_b2 = props.ui) == null ? void 0 : _b2.right })
              }, [
                renderSlot(_ctx.$slots, "right"),
                __props.toggleSide === "right" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Primitive), {
        as: __props.as,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_component_UContainer, {
              class: ui.value.container({ class: (_a2 = props.ui) == null ? void 0 : _a2.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b3;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ReuseLeftTemplate), null, null, _parent3, _scopeId2));
                  _push3(`<div class="${ssrRenderClass(ui.value.center({ class: (_a3 = props.ui) == null ? void 0 : _a3.center }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(ReuseRightTemplate), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ReuseLeftTemplate)),
                    createVNode("div", {
                      class: ui.value.center({ class: (_b3 = props.ui) == null ? void 0 : _b3.center })
                    }, [
                      renderSlot(_ctx.$slots, "default")
                    ], 2),
                    createVNode(unref(ReuseRightTemplate))
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "top"),
              createVNode(_component_UContainer, {
                class: ui.value.container({ class: (_b2 = props.ui) == null ? void 0 : _b2.container })
              }, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode(unref(ReuseLeftTemplate)),
                    createVNode("div", {
                      class: ui.value.center({ class: (_a3 = props.ui) == null ? void 0 : _a3.center })
                    }, [
                      renderSlot(_ctx.$slots, "default")
                    ], 2),
                    createVNode(unref(ReuseRightTemplate))
                  ];
                }),
                _: 3
              }, 8, ["class"]),
              renderSlot(_ctx.$slots, "bottom")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Menu), mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, menuProps.value, {
        ui: {
          overlay: ui.value.overlay({ class: (_b = props.ui) == null ? void 0 : _b.overlay }),
          content: ui.value.content({ class: (_c = props.ui) == null ? void 0 : _c.content })
        }
      }), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "content", {}, () => {
              var _a2, _b2;
              if (__props.mode !== "drawer") {
                _push2(`<div class="${ssrRenderClass(ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(ReuseLeftTemplate), null, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(ReuseRightTemplate), null, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="${ssrRenderClass(ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "body", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "content", {}, () => {
                var _a2, _b2;
                return [
                  __props.mode !== "drawer" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                  }, [
                    createVNode(unref(ReuseLeftTemplate)),
                    createVNode(unref(ReuseRightTemplate))
                  ], 2)) : createCommentVNode("", true),
                  createVNode("div", {
                    class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                  }, [
                    renderSlot(_ctx.$slots, "body")
                  ], 2)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-pro/dist/runtime/components/Header.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};

const _sfc_main$7 = {
  __name: "HeaderDesktop",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UHeader = _sfc_main$8;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UButton = _sfc_main$d;
      const _component_UDivider = resolveComponent("UDivider");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden lg:block" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UHeader, { class: "bg-gray-900/80 backdrop-blur-sm border-gray-800 sticky top-0 z-50" }, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "font-bold text-xl text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Dreamly `);
                } else {
                  return [
                    createTextVNode(" Dreamly ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/",
                class: "font-bold text-xl text-white"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Dreamly ")
                ]),
                _: 1
              })
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/experiencias",
              variant: "ghost",
              color: "white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Experiências `);
                } else {
                  return [
                    createTextVNode(" Experiências ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/sorteios",
              variant: "ghost",
              color: "white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sorteios Premium `);
                } else {
                  return [
                    createTextVNode(" Sorteios Premium ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/como-funciona",
              variant: "ghost",
              color: "white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Como Funciona `);
                } else {
                  return [
                    createTextVNode(" Como Funciona ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UDivider, { vertical: "" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/login",
              variant: "ghost",
              color: "white",
              icon: "i-heroicons-user-circle"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Login `);
                } else {
                  return [
                    createTextVNode(" Login ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/registro",
              color: "accent",
              ui: { rounded: "rounded-full" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cadastrar `);
                } else {
                  return [
                    createTextVNode(" Cadastrar ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-6" }, [
                createVNode(_component_UButton, {
                  to: "/experiencias",
                  variant: "ghost",
                  color: "white"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Experiências ")
                  ]),
                  _: 1
                }),
                createVNode(_component_UButton, {
                  to: "/sorteios",
                  variant: "ghost",
                  color: "white"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Sorteios Premium ")
                  ]),
                  _: 1
                }),
                createVNode(_component_UButton, {
                  to: "/como-funciona",
                  variant: "ghost",
                  color: "white"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Como Funciona ")
                  ]),
                  _: 1
                }),
                createVNode(_component_UDivider, { vertical: "" }),
                createVNode(_component_UButton, {
                  to: "/login",
                  variant: "ghost",
                  color: "white",
                  icon: "i-heroicons-user-circle"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Login ")
                  ]),
                  _: 1
                }),
                createVNode(_component_UButton, {
                  to: "/registro",
                  color: "accent",
                  ui: { rounded: "rounded-full" }
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Cadastrar ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/HeaderDesktop.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};

const _sfc_main$6 = {
  __name: "HeaderMobile",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    const menuItems = [
      {
        label: "Experiências",
        to: "/experiencias",
        icon: "i-heroicons-fire"
      },
      {
        label: "Sorteios Premium",
        to: "/sorteios",
        icon: "i-heroicons-ticket"
      },
      {
        label: "Como Funciona",
        to: "/como-funciona",
        icon: "i-heroicons-question-mark-circle"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UHeader = _sfc_main$8;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UButton = _sfc_main$d;
      const _component_USlideover = _sfc_main$b;
      const _component_UIcon = _sfc_main$f;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UHeader, { class: "bg-gray-900/80 backdrop-blur-sm border-gray-800 sticky top-0 z-50" }, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "font-bold text-xl text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Dreamly `);
                } else {
                  return [
                    createTextVNode(" Dreamly ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/",
                class: "font-bold text-xl text-white"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Dreamly ")
                ]),
                _: 1
              })
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "white",
              variant: "ghost",
              icon: "i-heroicons-bars-3",
              onClick: ($event) => isMenuOpen.value = !unref(isMenuOpen)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "white",
                variant: "ghost",
                icon: "i-heroicons-bars-3",
                onClick: ($event) => isMenuOpen.value = !unref(isMenuOpen)
              }, null, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(isMenuOpen),
        "onUpdate:modelValue": ($event) => isRef(isMenuOpen) ? isMenuOpen.value = $event : null,
        ui: { background: "bg-gray-900" },
        side: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4"${_scopeId}><div class="flex justify-between items-center mb-6"${_scopeId}><h2 class="font-bold text-xl"${_scopeId}>Menu</h2>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-x-mark",
              color: "white",
              variant: "ghost",
              onClick: ($event) => isMenuOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div><nav class="space-y-1"${_scopeId}><!--[-->`);
            ssrRenderList(menuItems, (item) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: item.to,
                to: item.to,
                class: "flex items-center py-3 px-4 hover:bg-gray-800 rounded-lg text-white transition-colors",
                onClick: ($event) => isMenuOpen.value = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: item.icon,
                      class: "mr-3"
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(item.label)}`);
                  } else {
                    return [
                      createVNode(_component_UIcon, {
                        name: item.icon,
                        class: "mr-3"
                      }, null, 8, ["name"]),
                      createTextVNode(" " + toDisplayString(item.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></nav><div class="mt-8 space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/login",
              block: "",
              variant: "outline",
              color: "white",
              class: "justify-start",
              icon: "i-heroicons-user-circle"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Login `);
                } else {
                  return [
                    createTextVNode(" Login ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/registro",
              block: "",
              color: "accent",
              class: "justify-start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cadastrar `);
                } else {
                  return [
                    createTextVNode(" Cadastrar ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4" }, [
                createVNode("div", { class: "flex justify-between items-center mb-6" }, [
                  createVNode("h2", { class: "font-bold text-xl" }, "Menu"),
                  createVNode(_component_UButton, {
                    icon: "i-heroicons-x-mark",
                    color: "white",
                    variant: "ghost",
                    onClick: ($event) => isMenuOpen.value = false
                  }, null, 8, ["onClick"])
                ]),
                createVNode("nav", { class: "space-y-1" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item) => {
                    return createVNode(_component_NuxtLink, {
                      key: item.to,
                      to: item.to,
                      class: "flex items-center py-3 px-4 hover:bg-gray-800 rounded-lg text-white transition-colors",
                      onClick: ($event) => isMenuOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: item.icon,
                          class: "mr-3"
                        }, null, 8, ["name"]),
                        createTextVNode(" " + toDisplayString(item.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["to", "onClick"]);
                  }), 64))
                ]),
                createVNode("div", { class: "mt-8 space-y-4" }, [
                  createVNode(_component_UButton, {
                    to: "/login",
                    block: "",
                    variant: "outline",
                    color: "white",
                    class: "justify-start",
                    icon: "i-heroicons-user-circle"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Login ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    to: "/registro",
                    block: "",
                    color: "accent",
                    class: "justify-start"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Cadastrar ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/HeaderMobile.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};

const _sfc_main$5 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};

const theme = {
  "slots": {
    "root": "",
    "top": "py-8 lg:py-12",
    "bottom": "py-8 lg:py-12",
    "container": "py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3",
    "left": "flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1",
    "center": "mt-3 lg:mt-0 lg:order-2 flex items-center justify-center",
    "right": "lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3"
  }
};

const _sfc_main$4 = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "footer" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv$1({ extend: tv$1(theme), ...((_a = appConfig.uiPro) == null ? void 0 : _a.footer) || {} })();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UContainer = _sfc_main$c;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            if (!!slots.top) {
              _push2(`<div class="${ssrRenderClass(ui.value.top({ class: (_a2 = props.ui) == null ? void 0 : _a2.top }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UContainer, {
              class: ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2, _c2, _d2, _e2, _f2;
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass(ui.value.right({ class: (_a3 = props.ui) == null ? void 0 : _a3.right }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "right", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div><div class="${ssrRenderClass(ui.value.center({ class: (_b2 = props.ui) == null ? void 0 : _b2.center }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div><div class="${ssrRenderClass(ui.value.left({ class: (_c2 = props.ui) == null ? void 0 : _c2.left }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "left", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: ui.value.right({ class: (_d2 = props.ui) == null ? void 0 : _d2.right })
                    }, [
                      renderSlot(_ctx.$slots, "right")
                    ], 2),
                    createVNode("div", {
                      class: ui.value.center({ class: (_e2 = props.ui) == null ? void 0 : _e2.center })
                    }, [
                      renderSlot(_ctx.$slots, "default")
                    ], 2),
                    createVNode("div", {
                      class: ui.value.left({ class: (_f2 = props.ui) == null ? void 0 : _f2.left })
                    }, [
                      renderSlot(_ctx.$slots, "left")
                    ], 2)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (!!slots.bottom) {
              _push2(`<div class="${ssrRenderClass(ui.value.bottom({ class: (_c = props.ui) == null ? void 0 : _c.bottom }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !!slots.top ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.top({ class: (_d = props.ui) == null ? void 0 : _d.top })
              }, [
                renderSlot(_ctx.$slots, "top")
              ], 2)) : createCommentVNode("", true),
              createVNode(_component_UContainer, {
                class: ui.value.container({ class: (_e = props.ui) == null ? void 0 : _e.container })
              }, {
                default: withCtx(() => {
                  var _a3, _b2, _c2;
                  return [
                    createVNode("div", {
                      class: ui.value.right({ class: (_a3 = props.ui) == null ? void 0 : _a3.right })
                    }, [
                      renderSlot(_ctx.$slots, "right")
                    ], 2),
                    createVNode("div", {
                      class: ui.value.center({ class: (_b2 = props.ui) == null ? void 0 : _b2.center })
                    }, [
                      renderSlot(_ctx.$slots, "default")
                    ], 2),
                    createVNode("div", {
                      class: ui.value.left({ class: (_c2 = props.ui) == null ? void 0 : _c2.left })
                    }, [
                      renderSlot(_ctx.$slots, "left")
                    ], 2)
                  ];
                }),
                _: 3
              }, 8, ["class"]),
              !!slots.bottom ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.bottom({ class: (_f = props.ui) == null ? void 0 : _f.bottom })
              }, [
                renderSlot(_ctx.$slots, "bottom")
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-pro/dist/runtime/components/Footer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

const _sfc_main$3 = {
  __name: "FooterDesktop",
  __ssrInlineRender: true,
  setup(__props) {
    const platformLinks = [
      { label: "Experiências", to: "/experiencias" },
      { label: "Sorteios Premium", to: "/sorteios" },
      { label: "Como Funciona", to: "/como-funciona" },
      { label: "Blog", to: "/blog" }
    ];
    const legalLinks = [
      { label: "Termos de Uso", to: "/termos" },
      { label: "Política de Privacidade", to: "/privacidade" },
      { label: "Cookies", to: "/cookies" }
    ];
    const contactLinks = [
      { label: "Suporte", to: "/suporte" },
      { label: "Contato", to: "/contato" },
      { label: "FAQ", to: "/faq" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFooter = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UButton = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden lg:block" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UFooter, { class: "bg-gray-900 border-t border-gray-800" }, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "font-bold text-xl text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Dreamly `);
                } else {
                  return [
                    createTextVNode(" Dreamly ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-gray-400 max-w-md"${_scopeId}> A plataforma onde modelos profissionais criam experiências premium, e você pode fazer parte. </p><div class="flex gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              color: "white",
              icon: "i-simple-icons-instagram",
              class: "rounded-full h-10 w-10 p-0",
              "aria-label": "Instagram"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              color: "white",
              icon: "i-simple-icons-twitter",
              class: "rounded-full h-10 w-10 p-0",
              "aria-label": "Twitter"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              color: "white",
              icon: "i-simple-icons-tiktok",
              class: "rounded-full h-10 w-10 p-0",
              "aria-label": "TikTok"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-6" }, [
                createVNode(_component_NuxtLink, {
                  to: "/",
                  class: "font-bold text-xl text-white"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Dreamly ")
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "text-gray-400 max-w-md" }, " A plataforma onde modelos profissionais criam experiências premium, e você pode fazer parte. "),
                createVNode("div", { class: "flex gap-4" }, [
                  createVNode(_component_UButton, {
                    variant: "ghost",
                    color: "white",
                    icon: "i-simple-icons-instagram",
                    class: "rounded-full h-10 w-10 p-0",
                    "aria-label": "Instagram"
                  }),
                  createVNode(_component_UButton, {
                    variant: "ghost",
                    color: "white",
                    icon: "i-simple-icons-twitter",
                    class: "rounded-full h-10 w-10 p-0",
                    "aria-label": "Twitter"
                  }),
                  createVNode(_component_UButton, {
                    variant: "ghost",
                    color: "white",
                    icon: "i-simple-icons-tiktok",
                    class: "rounded-full h-10 w-10 p-0",
                    "aria-label": "TikTok"
                  })
                ])
              ])
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-3 gap-8"${_scopeId}><div class="space-y-4"${_scopeId}><h3 class="font-medium text-white"${_scopeId}>Plataforma</h3><ul class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(platformLinks, (link) => {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: link.to,
                class: "text-gray-400 hover:text-white transition"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(link.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul></div><div class="space-y-4"${_scopeId}><h3 class="font-medium text-white"${_scopeId}>Legal</h3><ul class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(legalLinks, (link) => {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: link.to,
                class: "text-gray-400 hover:text-white transition"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(link.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul></div><div class="space-y-4"${_scopeId}><h3 class="font-medium text-white"${_scopeId}>Contato</h3><ul class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(contactLinks, (link) => {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: link.to,
                class: "text-gray-400 hover:text-white transition"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(link.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-3 gap-8" }, [
                createVNode("div", { class: "space-y-4" }, [
                  createVNode("h3", { class: "font-medium text-white" }, "Plataforma"),
                  createVNode("ul", { class: "space-y-2" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(platformLinks, (link) => {
                      return createVNode("li", {
                        key: link.to
                      }, [
                        createVNode(_component_NuxtLink, {
                          to: link.to,
                          class: "text-gray-400 hover:text-white transition"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(link.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "space-y-4" }, [
                  createVNode("h3", { class: "font-medium text-white" }, "Legal"),
                  createVNode("ul", { class: "space-y-2" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(legalLinks, (link) => {
                      return createVNode("li", {
                        key: link.to
                      }, [
                        createVNode(_component_NuxtLink, {
                          to: link.to,
                          class: "text-gray-400 hover:text-white transition"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(link.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "space-y-4" }, [
                  createVNode("h3", { class: "font-medium text-white" }, "Contato"),
                  createVNode("ul", { class: "space-y-2" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(contactLinks, (link) => {
                      return createVNode("li", {
                        key: link.to
                      }, [
                        createVNode(_component_NuxtLink, {
                          to: link.to,
                          class: "text-gray-400 hover:text-white transition"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(link.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]);
                    }), 64))
                  ])
                ])
              ])
            ];
          }
        }),
        bottom: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-t border-gray-800 pt-6 mt-12 w-full flex flex-row justify-between items-center gap-4"${_scopeId}><p class="text-sm text-gray-400"${_scopeId}> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Dreamly. Todos os direitos reservados. </p><div class="flex gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/termos",
              class: "text-sm text-gray-400 hover:text-white transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Termos de Uso `);
                } else {
                  return [
                    createTextVNode(" Termos de Uso ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/privacidade",
              class: "text-sm text-gray-400 hover:text-white transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Política de Privacidade `);
                } else {
                  return [
                    createTextVNode(" Política de Privacidade ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "border-t border-gray-800 pt-6 mt-12 w-full flex flex-row justify-between items-center gap-4" }, [
                createVNode("p", { class: "text-sm text-gray-400" }, " © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " Dreamly. Todos os direitos reservados. ", 1),
                createVNode("div", { class: "flex gap-6" }, [
                  createVNode(_component_NuxtLink, {
                    to: "/termos",
                    class: "text-sm text-gray-400 hover:text-white transition"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Termos de Uso ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, {
                    to: "/privacidade",
                    class: "text-sm text-gray-400 hover:text-white transition"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Política de Privacidade ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/FooterDesktop.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const _sfc_main$2 = {
  __name: "FooterMobile",
  __ssrInlineRender: true,
  setup(__props) {
    const platformLinks = [
      { label: "Experiências", to: "/experiencias" },
      { label: "Sorteios Premium", to: "/sorteios" },
      { label: "Como Funciona", to: "/como-funciona" },
      { label: "Blog", to: "/blog" }
    ];
    const legalLinks = [
      { label: "Termos de Uso", to: "/termos" },
      { label: "Política de Privacidade", to: "/privacidade" },
      { label: "Cookies", to: "/cookies" }
    ];
    const contactLinks = [
      { label: "Suporte", to: "/suporte" },
      { label: "Contato", to: "/contato" },
      { label: "FAQ", to: "/faq" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFooter = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UButton = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UFooter, { class: "bg-gray-900 border-t border-gray-800" }, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex flex-col items-center gap-6 mb-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "font-bold text-xl text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Dreamly `);
                } else {
                  return [
                    createTextVNode(" Dreamly ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-gray-400 text-center max-w-sm"${_scopeId}> A plataforma onde modelos profissionais criam experiências premium, e você pode fazer parte. </p><div class="flex gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              color: "white",
              icon: "i-simple-icons-instagram",
              class: "rounded-full h-10 w-10 p-0",
              "aria-label": "Instagram"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              color: "white",
              icon: "i-simple-icons-twitter",
              class: "rounded-full h-10 w-10 p-0",
              "aria-label": "Twitter"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              color: "white",
              icon: "i-simple-icons-tiktok",
              class: "rounded-full h-10 w-10 p-0",
              "aria-label": "TikTok"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex flex-col items-center gap-6 mb-8" }, [
                createVNode(_component_NuxtLink, {
                  to: "/",
                  class: "font-bold text-xl text-white"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Dreamly ")
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "text-gray-400 text-center max-w-sm" }, " A plataforma onde modelos profissionais criam experiências premium, e você pode fazer parte. "),
                createVNode("div", { class: "flex gap-4" }, [
                  createVNode(_component_UButton, {
                    variant: "ghost",
                    color: "white",
                    icon: "i-simple-icons-instagram",
                    class: "rounded-full h-10 w-10 p-0",
                    "aria-label": "Instagram"
                  }),
                  createVNode(_component_UButton, {
                    variant: "ghost",
                    color: "white",
                    icon: "i-simple-icons-twitter",
                    class: "rounded-full h-10 w-10 p-0",
                    "aria-label": "Twitter"
                  }),
                  createVNode(_component_UButton, {
                    variant: "ghost",
                    color: "white",
                    icon: "i-simple-icons-tiktok",
                    class: "rounded-full h-10 w-10 p-0",
                    "aria-label": "TikTok"
                  })
                ])
              ])
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-2 gap-6 w-full"${_scopeId}><div class="space-y-4"${_scopeId}><h3 class="font-medium text-white"${_scopeId}>Plataforma</h3><ul class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(platformLinks, (link) => {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: link.to,
                class: "text-gray-400 hover:text-white transition"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(link.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul></div><div class="space-y-4"${_scopeId}><h3 class="font-medium text-white"${_scopeId}>Legal</h3><ul class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(legalLinks, (link) => {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: link.to,
                class: "text-gray-400 hover:text-white transition"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(link.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul></div><div class="space-y-4 col-span-2 mt-4"${_scopeId}><h3 class="font-medium text-white"${_scopeId}>Contato</h3><ul class="space-y-2 grid grid-cols-2"${_scopeId}><!--[-->`);
            ssrRenderList(contactLinks, (link) => {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: link.to,
                class: "text-gray-400 hover:text-white transition"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(link.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-2 gap-6 w-full" }, [
                createVNode("div", { class: "space-y-4" }, [
                  createVNode("h3", { class: "font-medium text-white" }, "Plataforma"),
                  createVNode("ul", { class: "space-y-2" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(platformLinks, (link) => {
                      return createVNode("li", {
                        key: link.to
                      }, [
                        createVNode(_component_NuxtLink, {
                          to: link.to,
                          class: "text-gray-400 hover:text-white transition"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(link.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "space-y-4" }, [
                  createVNode("h3", { class: "font-medium text-white" }, "Legal"),
                  createVNode("ul", { class: "space-y-2" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(legalLinks, (link) => {
                      return createVNode("li", {
                        key: link.to
                      }, [
                        createVNode(_component_NuxtLink, {
                          to: link.to,
                          class: "text-gray-400 hover:text-white transition"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(link.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "space-y-4 col-span-2 mt-4" }, [
                  createVNode("h3", { class: "font-medium text-white" }, "Contato"),
                  createVNode("ul", { class: "space-y-2 grid grid-cols-2" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(contactLinks, (link) => {
                      return createVNode("li", {
                        key: link.to
                      }, [
                        createVNode(_component_NuxtLink, {
                          to: link.to,
                          class: "text-gray-400 hover:text-white transition"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(link.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]);
                    }), 64))
                  ])
                ])
              ])
            ];
          }
        }),
        bottom: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-t border-gray-800 pt-6 mt-12 w-full flex flex-col items-center gap-4"${_scopeId}><p class="text-sm text-gray-400 text-center"${_scopeId}> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Dreamly. Todos os direitos reservados. </p><div class="flex gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/termos",
              class: "text-sm text-gray-400 hover:text-white transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Termos de Uso `);
                } else {
                  return [
                    createTextVNode(" Termos de Uso ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/privacidade",
              class: "text-sm text-gray-400 hover:text-white transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Política de Privacidade `);
                } else {
                  return [
                    createTextVNode(" Política de Privacidade ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "border-t border-gray-800 pt-6 mt-12 w-full flex flex-col items-center gap-4" }, [
                createVNode("p", { class: "text-sm text-gray-400 text-center" }, " © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " Dreamly. Todos os direitos reservados. ", 1),
                createVNode("div", { class: "flex gap-6" }, [
                  createVNode(_component_NuxtLink, {
                    to: "/termos",
                    class: "text-sm text-gray-400 hover:text-white transition"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Termos de Uso ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, {
                    to: "/privacidade",
                    class: "text-sm text-gray-400 hover:text-white transition"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Política de Privacidade ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/FooterMobile.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<main class="flex-grow">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.vue.mjs.map
