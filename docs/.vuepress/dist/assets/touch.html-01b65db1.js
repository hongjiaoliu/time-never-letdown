import{_ as e,V as d,W as a,$ as i}from"./framework-2197e39d.js";const n={},t=i(`<h1 id="基本-touch" tabindex="-1"><a class="header-anchor" href="#基本-touch" aria-hidden="true">#</a> 基本 | touch</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><code>touch</code> 命令是一个常用的Linux工具，用于创建新的空文件或者更新已有文件的时间戳。它有多种选项，包括 <code>-a</code>、<code>-c</code>、<code>-d</code>、<code>-r</code>、<code>-m</code> 和 <code>-t</code>，可以帮助你在不同场景下灵活使用。</p><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2><h3 id="创建新文件" tabindex="-1"><a class="header-anchor" href="#创建新文件" aria-hidden="true">#</a> 创建新文件</h3><p>要创建一个新文件，只需指定文件名作为 <code>touch</code> 命令的参数，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
touch filename.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新文件时间戳" tabindex="-1"><a class="header-anchor" href="#更新文件时间戳" aria-hidden="true">#</a> 更新文件时间戳</h3><p>如果要更新已有文件的访问和修改时间戳，可以使用 <code>touch</code> 命令，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
touch existing_file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法" aria-hidden="true">#</a> 高级用法</h2><h3 id="使用-a-选项" tabindex="-1"><a class="header-anchor" href="#使用-a-选项" aria-hidden="true">#</a> 使用 <code>-a</code> 选项</h3><p><code>-a</code> 选项用于更新访问时间戳（atime）。以下是示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
touch -a existing_file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-c-选项" tabindex="-1"><a class="header-anchor" href="#使用-c-选项" aria-hidden="true">#</a> 使用 <code>-c</code> 选项</h3><p><code>-c</code> 选项用于仅在文件不存在时才创建文件。如果文件已经存在，<code>touch</code> 不会进行任何操作。示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
touch -c new_file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-d-选项" tabindex="-1"><a class="header-anchor" href="#使用-d-选项" aria-hidden="true">#</a> 使用 <code>-d</code> 选项</h3><p><code>-d</code> 选项用于指定日期时间以及文件名，以创建或更新文件的时间戳。示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
touch -d &quot;2023-09-13 15:30:00&quot; existing_file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-r-选项" tabindex="-1"><a class="header-anchor" href="#使用-r-选项" aria-hidden="true">#</a> 使用 <code>-r</code> 选项</h3><p><code>-r</code> 选项用于从另一个文件复制时间戳。以下示例将 <code>existing_file.txt</code> 的时间戳复制到 <code>new_file.txt</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
touch -r existing_file.txt new_file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-m-选项" tabindex="-1"><a class="header-anchor" href="#使用-m-选项" aria-hidden="true">#</a> 使用 <code>-m</code> 选项</h3><p><code>-m</code> 选项用于更新修改时间戳（mtime）。示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
touch -m existing_file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-t-选项" tabindex="-1"><a class="header-anchor" href="#使用-t-选项" aria-hidden="true">#</a> 使用 <code>-t</code> 选项</h3><p><code>-t</code> 选项允许你指定一个自定义的时间戳，格式为 <code>[CC]YY]MMDDhhmm[.ss]</code>。示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
touch -t 202309131530.00 existing_file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见用例" tabindex="-1"><a class="header-anchor" href="#常见用例" aria-hidden="true">#</a> 常见用例</h2><h3 id="创建一个新的日志文件" tabindex="-1"><a class="header-anchor" href="#创建一个新的日志文件" aria-hidden="true">#</a> 创建一个新的日志文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
touch new_log.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新配置文件的访问时间" tabindex="-1"><a class="header-anchor" href="#更新配置文件的访问时间" aria-hidden="true">#</a> 更新配置文件的访问时间</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
touch -a config.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复制一个文件的时间戳到另一个文件" tabindex="-1"><a class="header-anchor" href="#复制一个文件的时间戳到另一个文件" aria-hidden="true">#</a> 复制一个文件的时间戳到另一个文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
touch -r template.txt new_document.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定特定的日期和时间来更新文件时间戳" tabindex="-1"><a class="header-anchor" href="#指定特定的日期和时间来更新文件时间戳" aria-hidden="true">#</a> 指定特定的日期和时间来更新文件时间戳</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
touch -d &quot;2023-09-13 15:30:00&quot; important_file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个关于 <code>touch</code> 命令的基本教程，它涵盖了常见的选项和用法。你可以根据自己的需求进一步探索该命令的其他选项和功能。</p>`,39),c=[t];function r(s,l){return d(),a("div",null,c)}const h=e(n,[["render",r],["__file","touch.html.vue"]]);export{h as default};