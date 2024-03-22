import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "h1.svelte-1uil7r7{color:#2b2f38;text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  return `<h1 class="svelte-1uil7r7" data-svelte-h="svelte-yvt4wj">VONCASA</h1>`;
});
export {
  Page as default
};
