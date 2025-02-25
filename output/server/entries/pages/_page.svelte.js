import { clsx as clsx$1 } from "clsx";
import { Y as ensure_array_like, Z as store_get, _ as unsubscribe_stores, V as pop, S as push } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
import "marked";
import { e as escape_html } from "../../chunks/escaping.js";
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
function clsx(value) {
  if (typeof value === "object") {
    return clsx$1(value);
  } else {
    return value ?? "";
  }
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
  const each_array_2 = ensure_array_like(store_get($$store_subs ??= {}, "$tocStore", tocStore));
  $$payload.out += `<div class="header svelte-vdptf4">`;
  if (store_get($$store_subs ??= {}, "$selectedFileStore", selectedFileStore)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h1 class="svelte-vdptf4">${escape_html(store_get($$store_subs ??= {}, "$selectedFileStore", selectedFileStore).split(".")[0])}</h1>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<h1 class="svelte-vdptf4">Blog</h1>`;
  }
  $$payload.out += `<!--]--></div> <div class="container svelte-vdptf4"><div class="sidebar svelte-vdptf4"><h2 class="margin-small svelte-vdptf4">选择</h2> <ul class="svelte-vdptf4"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let category = each_array[$$index_1];
    $$payload.out += `<li class="svelte-vdptf4"><button class="category-btn svelte-vdptf4">${escape_html(category.name)} `;
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
      $$payload.out += `<ul class="file-list svelte-vdptf4"><!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let file = each_array_1[$$index];
        $$payload.out += `<li class="svelte-vdptf4"><button class="file-btn svelte-vdptf4">${escape_html(file)}</button></li>`;
      }
      $$payload.out += `<!--]--></ul>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div class="content svelte-vdptf4">`;
  if (store_get($$store_subs ??= {}, "$selectedFileStore", selectedFileStore)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="markdown svelte-vdptf4">${html(store_get($$store_subs ??= {}, "$markdownContentStore", markdownContentStore))}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p class="svelte-vdptf4">Select a file to view its content.</p>`;
  }
  $$payload.out += `<!--]--></div> <div class="toc-sidebar svelte-vdptf4"><h3 class="svelte-vdptf4">目录</h3> <ul class="svelte-vdptf4"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let item = each_array_2[$$index_2];
    $$payload.out += `<div${attr("class", clsx(item.level === 1 ? "primary" : item.level === 2 ? "secondary" : item.level === 3 ? "warning" : item.level === 4 ? "info" : item.level === 5 ? "success" : "danger") + " svelte-vdptf4")}><a${attr("href", `#${item.anchor}`)} class="svelte-vdptf4">${escape_html(item.text)}</a></div>`;
  }
  $$payload.out += `<!--]--></ul></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  Blog($$payload);
}
export {
  _page as default
};
