import { _ as _sfc_main$1 } from './Button.vue.mjs';
import { mergeModels, useModel, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { t as tv } from './tv2.mjs';
import { a as useAppConfig } from './server.mjs';
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
import 'reka-ui';
import './useButtonGroup.mjs';
import './index.mjs';
import './tv.mjs';
import 'tailwind-variants';
import '@vueuse/core';
import './Icon.vue.mjs';
import './index2.mjs';
import '@iconify/utils/lib/css/icon';
import '@iconify/vue';
import './asyncData.mjs';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import './Avatar.vue.mjs';
import './NuxtImg.vue2.mjs';
import './Link.vue.mjs';
import './nuxt-link.mjs';
import '../_/ohash.BvSMZzli.mjs';

const theme = {
  "slots": {
    "root": "relative [&_pre]:h-[200px]",
    "footer": "h-16 absolute inset-x-px bottom-px rounded-b-md flex items-center justify-center",
    "trigger": "group",
    "triggerIcon": "group-data-[state=open]:rotate-180"
  },
  "variants": {
    "open": {
      "true": {
        "root": "[&_pre]:h-auto [&_pre]:min-h-[200px] [&_pre]:max-h-[80vh] [&_pre]:pb-12"
      },
      "false": {
        "root": "[&_pre]:overflow-hidden",
        "footer": "bg-gradient-to-t from-muted"
      }
    }
  }
};

const _sfc_main = {
  __name: "CodeCollapse",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    icon: { type: String, required: false },
    name: { type: String, required: false, default: "code" },
    openText: { type: String, required: false, default: "Expand" },
    closeText: { type: String, required: false, default: "Collapse" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    const props = __props;
    const open = useModel(__props, "open", { type: Boolean, ...{ default: false } });
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a, _b;
      return tv({ extend: tv(theme), ...((_b = (_a = appConfig.uiPro) == null ? void 0 : _a.prose) == null ? void 0 : _b.codeCollapse) || {} })({
        open: open.value
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_UButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ui.value.root({ class: [props.class, (_a = props.ui) == null ? void 0 : _a.root] })
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div class="${ssrRenderClass(ui.value.footer({ class: (_b = props.ui) == null ? void 0 : _b.footer }))}">`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: __props.icon || unref(appConfig).ui.icons.chevronDown,
        color: "neutral",
        variant: "outline",
        "data-state": open.value ? "open" : "closed",
        label: `${open.value ? __props.closeText : __props.openText} ${__props.name}`,
        class: ui.value.trigger({ class: (_c = props.ui) == null ? void 0 : _c.trigger }),
        ui: { leadingIcon: ui.value.triggerIcon({ class: (_d = props.ui) == null ? void 0 : _d.triggerIcon }) },
        onClick: ($event) => open.value = !open.value
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-pro/dist/runtime/components/prose/CodeCollapse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CodeCollapse.vue2.mjs.map
