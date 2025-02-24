import { N as push, _ as ensure_array_like, $ as store_get, a0 as unsubscribe_stores, P as pop, X as writable } from './index2-Bb66HTum.js';
import 'marked';
import { e as escape_html } from './escaping-CqgfEcN3.js';

const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
const categories = [
  {
    name: "frontend",
    files: ["React.md", "express.md"]
  },
  {
    name: "backend",
    files: ["Node.js.md", "Express.md"]
  },
  {
    name: "前端",
    files: ["小东西.md", "2.md", "3.md", "4.md", "5.md", "6.md", "7.md", "8.md", "9.md", "10.md", "11.md", "1.md", "16.md", "19.md", "1.md"]
  }
];
function Blog($$payload, $$props) {
  push();
  var $$store_subs;
  const filesStore = writable(categories);
  const selectedCategoryStore = writable(null);
  const selectedFileStore = writable(null);
  const markdownContentStore = writable("");
  const tocStore = writable([]);
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$filesStore", filesStore));
  const each_array_3 = ensure_array_like(store_get($$store_subs ??= {}, "$tocStore", tocStore));
  $$payload.out += `<div class="header svelte-o9lgzs"><h1 class="svelte-o9lgzs">Blog</h1></div> <div class="container svelte-o9lgzs"><div class="sidebar svelte-o9lgzs"><h2 class="svelte-o9lgzs">Categories</h2> <ul class="svelte-o9lgzs"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let category = each_array[$$index_1];
    $$payload.out += `<li class="svelte-o9lgzs"><button class="category-btn svelte-o9lgzs">${escape_html(category.name)} `;
    if (store_get($$store_subs ??= {}, "$selectedCategoryStore", selectedCategoryStore) === category.name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `▲`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `▼`;
    }
    $$payload.out += `<!--]--></button> `;
    if (store_get($$store_subs ??= {}, "$selectedCategoryStore", selectedCategoryStore) === category.name) {
      $$payload.out += "<!--[-->";
      const each_array_1 = ensure_array_like(category.files);
      $$payload.out += `<ul class="file-list svelte-o9lgzs"><!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let file = each_array_1[$$index];
        $$payload.out += `<li class="svelte-o9lgzs"><button class="file-btn svelte-o9lgzs">${escape_html(file)}</button></li>`;
      }
      $$payload.out += `<!--]--></ul>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div class="content svelte-o9lgzs">`;
  if (store_get($$store_subs ??= {}, "$selectedFileStore", selectedFileStore)) {
    $$payload.out += "<!--[-->";
    const each_array_2 = ensure_array_like(store_get($$store_subs ??= {}, "$tocStore", tocStore));
    $$payload.out += `<h2 class="svelte-o9lgzs">${escape_html(store_get($$store_subs ??= {}, "$selectedFileStore", selectedFileStore))}</h2> <div class="toc svelte-o9lgzs"><h3 class="svelte-o9lgzs">Table of Contents</h3> <ul class="svelte-o9lgzs"><!--[-->`;
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let item = each_array_2[$$index_2];
      $$payload.out += `<li class="svelte-o9lgzs"><a${attr("href", `#${item.anchor}`)} class="svelte-o9lgzs">${escape_html(item.text)}</a></li>`;
    }
    $$payload.out += `<!--]--></ul></div> <div class="markdown svelte-o9lgzs">${html(store_get($$store_subs ??= {}, "$markdownContentStore", markdownContentStore))}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p class="svelte-o9lgzs">Select a file to view its content.</p>`;
  }
  $$payload.out += `<!--]--></div> <div class="toc-sidebar svelte-o9lgzs"><h3 class="svelte-o9lgzs">Table of Contents</h3> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <p class="svelte-o9lgzs">滚</p> <ul class="svelte-o9lgzs"><!--[-->`;
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let item = each_array_3[$$index_3];
    $$payload.out += `<li class="svelte-o9lgzs"><a${attr("href", `#${item.anchor}`)} class="svelte-o9lgzs">${escape_html(item.text)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  $$payload.out += `<!---->export const prerender = true; `;
  Blog($$payload);
  $$payload.out += `<!---->`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Ud3Oeq26.js.map
