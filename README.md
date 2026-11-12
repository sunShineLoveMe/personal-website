# Chris 个人网站

纯静态网站，没有构建步骤、没有依赖。首页支持中英文切换，默认跟随浏览器语言，也可以用 `?lang=en` / `?lang=zh` 指定。

## 本地预览

直接双击 `index.html` 就能打开。更接近线上的方式是起一个本地服务：

```sh
cd 个人站点
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 目录

```
index.html              页面结构
css/style.css           样式与动画，强调色在 :root 的 --accent
js/main.js              中英文文案（I18N）、列表渲染、首屏轨道动画
assets/keysuit/         Keysuit 宣传影片（720p）、封面、App 截图
```

## 怎么改内容

- **文案**：全部在 `js/main.js` 顶部的 `I18N`，分 `zh` 和 `en` 两份，改完刷新即可。
- **项目卡片**：`I18N.zh.projects` / `I18N.en.projects`，链接自动指向 `https://github.com/sunShineLoveMe/<项目名>`。
- **文章列表**：`I18N.*.articles`，文章页面在 `articles/`，中英文各一份。
- **强调色**：`css/style.css` 和 `js/main.js` 里各有一处 `#FF6A2B`（CSS 变量 `--accent` 和 JS 常量 `ACCENT`），一起改。
- **Keysuit 素材**：从 `AI声装/website/public` 复制而来，原文件没有动。官网更新了影片或截图，需要手动替换 `assets/keysuit/` 里的同名文件。

## 还需要补的内容

- "两种视角""从想法到上线""知识地图"里的文案是按你的定位写的初稿，请按真实做法修改。

## 部署

线上地址：<https://chris.zhiyunllm.com/>。

源码仓库：<https://github.com/sunShineLoveMe/personal-website>。

使用 GitHub Pages 从 `main` 分支的根目录发布，无需构建。`CNAME` 保存自定义域名，`.nojekyll` 禁用 Jekyll 处理。

Cloudflare DNS：`CNAME`，名称 `chris`，目标 `sunshineloveme.github.io`，使用“仅 DNS”。GitHub Pages 启用 HTTPS。

更新网站后，在本目录提交并推送，GitHub Pages 会自动发布：

```sh
git add index.html js css articles assets
git commit -m "Update website content"
git push origin main
```

页面用了 Google Fonts。如果主要访客在国内，建议之后把 Space Grotesk、Noto Sans SC、JetBrains Mono 下载到 `assets/fonts/` 自行托管，避免字体加载慢。
