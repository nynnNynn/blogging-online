<script>
    import { writable } from "svelte/store";
    import { marked } from "marked";
    import { categories } from "$lib/data";
  
    // 存储分类及其子项
    const filesStore = writable(categories);
  
    // 选中的分类和文件
    const selectedCategoryStore = writable(null);
    const selectedFileStore = writable(null);
    const markdownContentStore = writable("");
    const tocStore = writable([]);
  
    // 选择分类时，展开/折叠其子项
    function toggleCategory(category) {
      selectedCategoryStore.update((current) =>
        current === category ? null : category
      );
    }
  
    // 加载 Markdown 文件
    async function loadMarkdown(category, file) {
      try {
        // 这里调整路径，确保从 public 目录下获取
        const response = await fetch(`src/content/${category}/${file}`);
        if (!response.ok) throw new Error("Failed to fetch file");
  
        const content = await response.text();
        selectedFileStore.set(file); // 只存文件名
        markdownContentStore.set(marked(content));
        tocStore.set(generateTOC(content));
      } catch (error) {
        console.error("Error loading markdown file:", error);
      }
    }
  
    // 生成目录（TOC）
    function generateTOC(content) {
      const toc = [];
      const renderer = new marked.Renderer();
      renderer.heading = function (text, level) {
        const anchor = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        toc.push({ text, level, anchor });
        return `<h${level} id="${anchor}">${text}</h${level}>`;
      };
      marked(content, { renderer });
      return toc;
    }
  </script>
  
  <!-- 页面结构 -->
  <div class="header">
    <h1>Blog</h1>
  </div>
  
  <div class="container">
    <!-- 左侧 Sidebar -->
    <div class="sidebar">
      <h2>Categories</h2>
      <ul>
        {#each $filesStore as category}
          <li>
            <button
              class="category-btn"
              on:click={() => toggleCategory(category.name)}
            >
              {category.name}
              {#if $selectedCategoryStore === category.name}▲{:else}▼{/if}
            </button>
            {#if $selectedCategoryStore === category.name}
              <ul class="file-list">
                {#each category.files as file}
                  <li>
                    <button
                      class="file-btn"
                      on:click={() => loadMarkdown(category.name, file)}
                    >
                      {file}
                    </button>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  
    <!-- 中间 Content 区域 -->
    <div class="content">
      {#if $selectedFileStore}
        <h2>{$selectedFileStore}</h2>
  
        <!-- 目录 TOC -->
        <div class="toc">
          <h3>Table of Contents</h3>
          <ul>
            {#each $tocStore as item}
              <li><a href={`#${item.anchor}`}>{item.text}</a></li>
            {/each}
          </ul>
        </div>
  
        <!-- 渲染 Markdown 内容 -->
        <div class="markdown">
          {@html $markdownContentStore}
        </div>
      {:else}
        <p>Select a file to view its content.</p>
      {/if}
    </div>
  
    <!-- 右侧 TOC -->
    <div class="toc-sidebar">
      <h3>Table of Contents</h3>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>

      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>

      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>

      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>

      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      <p>滚</p>
      
      <ul>
        {#each $tocStore as item}
          <li><a href={`#${item.anchor}`}>{item.text}</a></li>
        {/each}
      </ul>
    </div>
  </div>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
    }
  
    .header {
      width: 100%;
      background: #0070f3;
      color: white;
      padding: 15px;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
    }
  
    .container {
      display: flex;
      max-width: 1200px;
      width: 100%;
      margin: 70px auto;
      background: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      overflow: hidden;
    }
  
    .sidebar {
      width: 280px;
      padding: 20px;
      border-right: 1px solid #ddd;
      background: #f4f4f4;
      overflow-y: auto;
      height: 80vh;
    }
  
    .content {
      flex-grow: 1;
      padding: 20px;
      overflow-y: auto;
      max-height: 80vh;
    }
  
    .toc-sidebar {
      width: 280px;
      padding: 20px;
      border-left: 1px solid #ddd;
      background: #f4f4f4;
      overflow-y: auto;
      height: 80vh;
    }
  
    .category-btn {
      width: 100%;
      padding: 10px;
      background: #0070f3;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      text-align: left;
    }
  
    .category-btn:hover {
      background: #005bb5;
    }
  
    .file-list {
      padding-left: 20px;
      margin-top: 5px;
    }
  
    .file-btn {
      width: 100%;
      padding: 8px;
      background: white;
      color: #0070f3;
      border: 1px solid #0070f3;
      cursor: pointer;
      border-radius: 5px;
      text-align: left;
    }
  
    .file-btn:hover {
      background: #e0e0e0;
    }
  
    .toc {
      margin-top: 20px;
      background: #fff;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
  
    .toc a {
      display: block;
      padding: 5px 0;
      text-decoration: none;
      color: #0070f3;
    }
  
    .markdown {
      max-width: 800px;
      line-height: 1.6;
      color: #333;
    }
  </style>
  