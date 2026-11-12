/* Chris 个人网站 · 交互与内容
 * 所有中英文文案都在下面的 I18N 里，改文案只需要改这里。
 * 页面结构在 ../index.html，样式在 ../css/style.css。
 */
(function () {
'use strict';

var ACCENT = '#FF6A2B';
var GH = 'https://github.com/sunShineLoveMe/';
var I18N = {
  zh: {
    t: {
      nav_label: '主导航', nav_lens: '视角', nav_map: '知识', nav_projects: '项目', nav_articles: '文章',
      role: 'AI 产品思考者',
      h1a: '想清楚，', h1pre: '再', h1mark: '做出来', h1post: '。',
      iam: '我是 Chris，', r1: 'AI 产品思考者', r2: '产品经理', r3: '技术开发者',
      intro: '用产品经理的眼光判断什么值得做，用开发者的双手把它做出来。这里收录我关于 LLM、RAG、Agent 和 Voice AI 的思考、项目与方法。',
      see: '看看我做过什么', read: '读我的文章',
      lens_h: '两种视角，一个人',
      v_a: '产品', v_b: '技术', v_c: 'AI 产品',
      pl_k: '产品视角', pl_h: '先问该不该做', pl_1: '这个问题真的存在吗？', pl_2: '谁会为它付出时间或钱？', pl_3: 'AI 在这里是必需，还是装饰？',
      el_k: '技术视角', el_h: '再问怎么做成', el_1: '现有模型能稳定做到吗？', el_2: '数据、成本和延迟撑得住吗？', el_3: '能不能先做出一个可用的最小版本？',
      method_h: '从想法到上线',
      map_h: '知识地图', map_p: '按主题整理的文章、项目和笔记。',
      proj_h: '精选项目', proj_all: 'GitHub 全部项目',
      ks_k: '代表作品', ks_tag: '给你的 Mac 换一身声音。', ks_d: 'Keysuit（声装）是我做的一款 macOS 菜单栏 App：给键盘配上打字音，在本机统计打字量，连续打字太久时提醒你休息。', ks_d2: '从需求文档、技术方案、界面设计到官网和这支影片，我完整走了一遍。', ks_site: '访问 keysuit.app', ks_meta: '免费公开测试版 0.5.3 · macOS 13+', ks_video: 'Keysuit 0.5 产品影片 · 50 秒',
      also: '其他作品', also_q: 'YouTube Shorts 频道',
      art_h: '最新文章', art_all: '全部文章', date: '[日期]',
      contact_h: '保持联系', contact_p: '想交流想法，或者聊聊合作，发邮件给我就行。',
      foot: '想清楚，再做出来。'
    },
    ksFeatures: [
      { title: '十套声音主题', desc: '四套模拟真实键盘轴体，六套原创，音量可调，可临时静音。' },
      { title: '只数按键，不读内容', desc: '不记录具体字符，无账号、不联网，数据只留在你的 Mac 上。' },
      { title: '打字统计与休息提醒', desc: '今日敲击、称号、26 周活跃度，还有一张可以保存的今日战报。' }
    ],
    labels: ['产品', '技术', '文章', '方法', '项目'],
    steps: [
      { no: '01', title: '想清楚', desc: '定义问题和用户，写下判断依据。' },
      { no: '02', title: '快验证', desc: '用最小的原型检验假设。' },
      { no: '03', title: '做出来', desc: '把验证过的方案做成可用的产品。' },
      { no: '04', title: '写下来', desc: '复盘过程，沉淀成文章和方法。' }
    ],
    topics: [
      { title: 'LLM 应用', desc: '把大模型接进真实业务的做法。' },
      { title: 'RAG 知识库', desc: '检索、切分、评估，以及本地部署。' },
      { title: 'Agent 与工作流', desc: 'LangGraph、n8n 和多步任务编排。' },
      { title: 'Voice AI', desc: '语音合成与声音产品。' },
      { title: 'AI 算力', desc: '异构算力的管理与调度。' },
      { title: '产品方法', desc: '需求判断、原型验证和复盘。' }
    ],
    projects: [
      { name: 'ai_bidding_power_grid', glyph: 'gly g-dots', tags: 'Python · RAG', desc: '电力行业 AI 投标工作台：标书解析、RAG 知识库、AI 辅助写作、合规检查，支持私有化部署。' },
      { name: 'local-rag-bge3-chroma-dify', glyph: 'gly g-dots', tags: 'Python · RAG', desc: '本地 RAG 知识库示例：Ollama / BGE-M3、Chroma 与 FastAPI，可作为 Dify 外部知识库。' },
      { name: 'Voicerly', glyph: 'gly g-bars', tags: 'TypeScript · Voice AI', desc: '基于 VoxCPM 的语音合成应用：上传音色样本，文本转语音，在线播放。' },
      { name: 'heterogeneous-ai-compute', glyph: 'gly g-ring', tags: 'TypeScript · AI 算力', desc: '异构 AI 算力管理与调度演示：资源管理、推理路由、可观测与故障恢复。' },
      { name: 'order-monitor-panel', glyph: 'gly g-bars', tags: 'TypeScript · Next.js', desc: 'Argus AI 订单监控与分析：n8n 工作流加 Supabase 实时数据。' },
      { name: 'anyllm-fullstack-langgraph-quickstart', glyph: 'gly g-ring', tags: 'LangGraph · Agent', desc: 'LangGraph 搜索助手：接入 OpenAI 兼容模型，支持多轮研究。' }
    ],
    articles: [
      { title: 'AI 时代的产品方法论：设计一个会出错的产品，并验证它', tag: '产品方法', date: '2026-11', url: 'articles/ai-product-method.html' },
      { title: '让大模型参与招投标：一个电力行业标书工作台的产品拆解', tag: '项目拆解', date: '2026-11', url: 'articles/ai-bidding-grid.html' },
      { title: 'AI 产品的定价与成本账', tag: '产品经济', date: '2026-11', url: 'articles/ai-pricing-cost.html' }
    ]
  },
  en: {
    t: {
      nav_label: 'Main', nav_lens: 'Lenses', nav_map: 'Topics', nav_projects: 'Projects', nav_articles: 'Articles',
      role: 'AI PRODUCT THINKER',
      h1a: 'Think it through,', h1pre: 'then ', h1mark: 'build it', h1post: '.',
      iam: 'I am Chris,', r1: 'AI product thinker', r2: 'product manager', r3: 'developer',
      intro: 'I use a product manager’s eye to decide what is worth building, and a developer’s hands to build it. This is where I keep my thinking, projects and methods on LLM, RAG, Agent and Voice AI.',
      see: 'See my work', read: 'Read my articles',
      lens_h: 'Two lenses, one person',
      v_a: 'Product', v_b: 'Engineering', v_c: 'AI products',
      pl_k: 'PRODUCT LENS', pl_h: 'First: should it exist?', pl_1: 'Is the problem real?', pl_2: 'Who will spend time or money on it?', pl_3: 'Is AI essential here, or decoration?',
      el_k: 'ENGINEERING LENS', el_h: 'Then: how to build it', el_1: 'Can today’s models do it reliably?', el_2: 'Do data, cost and latency hold up?', el_3: 'Can a usable first version ship quickly?',
      method_h: 'From idea to launch',
      map_h: 'Knowledge map', map_p: 'Articles, projects and notes, organized by topic.',
      proj_h: 'Selected projects', proj_all: 'All projects on GitHub',
      ks_k: 'FEATURED WORK', ks_tag: 'Dress your Mac in sound.', ks_d: 'Keysuit is a macOS menu bar app I made. It gives your keyboard typing sounds, keeps typing stats on your Mac, and suggests a break after a long stretch of typing.', ks_d2: 'I took it the whole way: requirements, technical design, interface, the website and this film.', ks_site: 'Visit keysuit.app', ks_meta: 'Free public beta 0.5.3 · macOS 13+', ks_video: 'Keysuit 0.5 product film · 50 seconds',
      also: 'Also', also_q: 'YouTube Shorts channel',
      art_h: 'Latest articles', art_all: 'All articles', date: '[Date]',
      contact_h: 'Stay in touch', contact_p: 'To trade ideas or talk about working together, send me an email.',
      foot: 'Think it through, then build it.'
    },
    ksFeatures: [
      { title: 'Ten sound themes', desc: 'Four modeled on real keyboard switches and six originals, with volume control and a temporary mute.' },
      { title: 'Counts keys, never reads them', desc: 'No characters recorded, no account and no network access. The data stays on your Mac.' },
      { title: 'Typing stats and break reminders', desc: 'Today’s count, titles, a 26-week activity calendar and a daily recap card you can save.' }
    ],
    labels: ['Product', 'Engineering', 'Articles', 'Methods', 'Projects'],
    steps: [
      { no: '01', title: 'Think', desc: 'Define the problem and the user, and write down the reasoning.' },
      { no: '02', title: 'Validate', desc: 'Test the assumption with the smallest prototype.' },
      { no: '03', title: 'Build', desc: 'Turn what held up into a product people can use.' },
      { no: '04', title: 'Write', desc: 'Review the work and turn it into articles and methods.' }
    ],
    topics: [
      { title: 'LLM applications', desc: 'Putting large models to work in real business.' },
      { title: 'RAG', desc: 'Retrieval, chunking, evaluation and local deployment.' },
      { title: 'Agents and workflows', desc: 'LangGraph, n8n and multi-step orchestration.' },
      { title: 'Voice AI', desc: 'Speech synthesis and voice products.' },
      { title: 'AI compute', desc: 'Managing and scheduling heterogeneous compute.' },
      { title: 'Product method', desc: 'Judging demand, prototyping and retrospectives.' }
    ],
    projects: [
      { name: 'ai_bidding_power_grid', glyph: 'gly g-dots', tags: 'Python · RAG', desc: 'An AI bidding workbench for the power industry: tender parsing, a RAG knowledge base, assisted writing and compliance checks. Deployable on private infrastructure.' },
      { name: 'local-rag-bge3-chroma-dify', glyph: 'gly g-dots', tags: 'Python · RAG', desc: 'A local RAG knowledge base example with Ollama / BGE-M3, Chroma and FastAPI, usable as an external knowledge base for Dify.' },
      { name: 'Voicerly', glyph: 'gly g-bars', tags: 'TypeScript · Voice AI', desc: 'A speech synthesis app built on VoxCPM: upload a voice sample, turn text into speech, play it back.' },
      { name: 'heterogeneous-ai-compute', glyph: 'gly g-ring', tags: 'TypeScript · AI compute', desc: 'A demo of managing and scheduling heterogeneous AI compute: resources, inference routing, observability and fault recovery.' },
      { name: 'order-monitor-panel', glyph: 'gly g-bars', tags: 'TypeScript · Next.js', desc: 'Argus AI, order monitoring and analysis with n8n workflows and Supabase real-time data.' },
      { name: 'anyllm-fullstack-langgraph-quickstart', glyph: 'gly g-ring', tags: 'LangGraph · Agent', desc: 'A LangGraph search assistant that works with OpenAI-compatible models and runs multi-round research.' }
    ],
    articles: [
      { title: 'Product Method for the AI Era: Designing a Product That Fails, and Validating It', tag: 'Method', date: '2026-11', url: 'articles/ai-product-method.en.html' },
      { title: 'Putting an LLM into Bidding: A Product Teardown of a Power-Industry Bid Workbench', tag: 'Teardown', date: '2026-11', url: 'articles/ai-bidding-grid.en.html' },
      { title: 'The Pricing and Cost Ledger of AI Products', tag: 'Economics', date: '2026-11', url: 'articles/ai-pricing-cost.en.html' }
    ]
  }
};

var META = {
  "zh": {
    "title": "Chris · AI 产品思考者",
    "desc": "Chris，AI 产品思考者：产品经理，也是技术开发者。这里收录我关于 LLM、RAG、Agent 和 Voice AI 的思考、项目与文章。"
  },
  "en": {
    "title": "Chris · AI product thinker",
    "desc": "Chris, an AI product thinker: a product manager who also builds. Thinking, projects and articles on LLM, RAG, Agent and Voice AI."
  }
};

function esc(v) {
  return String(v).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

/* 列表区块的模板：项目、文章、知识地图、方法步骤、Keysuit 卖点 */
var LISTS = {
  ksFeatures: function (f, t) {
    return `<li class="cap" style="border-top: 1px solid rgba(242,240,234,.2); padding: 28px 0; display: flex; flex-wrap: wrap; gap: 8px 32px; align-items: baseline">
            <h3 style="flex: 1 1 220px; margin: 0; font-size: 24px; font-weight: 700">${esc(f.title)}</h3>
            <p style="flex: 1.4 1 280px; margin: 0; font-size: 16px; line-height: 1.8; color: #9A9CA6">${esc(f.desc)}</p>
          </li>`;
  },
  steps: function (s, t) {
    return `<li class="step" style="display: flex; flex-direction: column; gap: 14px">
            <span class="dot" aria-hidden="true" style="position: relative; width: 11px; height: 11px; border-radius: 50%; background: #F2F0EA; box-shadow: 0 0 0 6px #0A0B0F"></span>
            <span style="margin-top: 14px; font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--accent)">${esc(s.no)}</span>
            <h3 style="margin: 0; font-size: 24px; font-weight: 700">${esc(s.title)}</h3>
            <p style="margin: 0; font-size: 16px; line-height: 1.8; color: #9A9CA6">${esc(s.desc)}</p>
          </li>`;
  },
  topics: function (k, t) {
    return `<a class="glow" href="#articles" style="display: flex; flex-direction: column; gap: 12px; padding: 28px; min-height: 150px; box-sizing: border-box; border: 1px solid rgba(242,240,234,.12); border-radius: 18px; background: #101218">
          <div style="position: relative; display: flex; align-items: center; justify-content: space-between; gap: 12px">
            <h3 style="margin: 0; font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif; font-size: 22px; font-weight: 700">${esc(k.title)}</h3>
            <svg class="go" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 15L15 5M7 5h8v8"></path></svg>
          </div>
          <p style="position: relative; margin: 0; font-size: 15px; line-height: 1.8; color: #9A9CA6">${esc(k.desc)}</p>
        </a>`;
  },
  projects: function (p, t) {
    return `<a class="glow" href="${esc(p.url)}" style="display: flex; flex-direction: column; gap: 18px; padding: 28px; min-height: 250px; box-sizing: border-box; border: 1px solid rgba(242,240,234,.12); border-radius: 20px; background: #101218">
          <div style="position: relative; display: flex; align-items: flex-start; justify-content: space-between; gap: 12px">
            <div class="${esc(p.glyph)}" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
            <svg class="go" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 15L15 5M7 5h8v8"></path></svg>
          </div>
          <h3 style="position: relative; margin: 0; font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif; font-size: 22px; font-weight: 700; overflow-wrap: anywhere">${esc(p.name)}</h3>
          <p style="position: relative; margin: 0; flex: 1 1 auto; font-size: 15px; line-height: 1.8; color: #9A9CA6">${esc(p.desc)}</p>
          <p style="position: relative; margin: 0; font-family: 'JetBrains Mono', 'Noto Sans SC', monospace; font-size: 13px; color: var(--accent)">${esc(p.tags)}</p>
        </a>`;
  },
  articles: function (a, t) {
    return `<a class="row" href="${esc(a.url || '#articles')}" style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px 32px; padding: 28px 8px; border-bottom: 1px solid rgba(242,240,234,.12)">
          <span style="flex: 0 0 120px; font-family: 'JetBrains Mono', 'Noto Sans SC', monospace; font-size: 13px; color: #9A9CA6">${esc(a.date || t.date)}</span>
          <span style="flex: 1 1 320px; min-width: 0; font-size: 21px; font-weight: 500">${esc(a.title)}</span>
          <span style="font-family: 'JetBrains Mono', 'Noto Sans SC', monospace; font-size: 13px; color: #9A9CA6; border: 1px solid rgba(242,240,234,.2); border-radius: 999px; padding: 5px 12px">${esc(a.tag)}</span>
          <svg class="arr" aria-hidden="true" width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9h12M10 4l5 5-5 5"></path></svg>
        </a>`;
  }
};

/* 首屏轨道动画（canvas） */
class Orbit {
  init() {
    this._mx = this._mx || 0; this._my = this._my || 0;
    this._ex = 0; this._ey = 0; this._t = 0; this._last = 0; this._dead = false;
    var seed = 7;
    var rnd = function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    this._rings = [ { r: 0.30, sp: 0.26 }, { r: 0.52, sp: 0.18 }, { r: 0.76, sp: 0.12 }, { r: 1.0, sp: 0.08 } ];
    this._nodes = [ { ring: 0, a0: 0.6 }, { ring: 1, a0: 2.6 }, { ring: 2, a0: 4.4 }, { ring: 2, a0: 1.3 }, { ring: 3, a0: 5.7 } ];
    this._dust = [];
    for (var i = 0; i < this._rings.length; i++) {
      var n = 46 + i * 34;
      for (var j = 0; j < n; j++) {
        this._dust.push({ ring: i, a: rnd() * Math.PI * 2, jr: (rnd() - 0.5) * 0.07, s: 0.6 + rnd() * 1.3, tw: rnd() * 6.28, kind: (j % 9 === 0) ? 1 : ((j % 13 === 0) ? 2 : 0) });
      }
    }
    this._stars = [];
    for (var s = 0; s < 150; s++) this._stars.push({ x: rnd(), y: rnd(), s: 0.4 + rnd() * 1.1, d: 0.2 + rnd() * 0.8, tw: rnd() * 6.28 });
    this._reduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    var self = this;
    this._loop = function (now) {
      if (self._dead) return;
      var dt = self._last ? Math.min(0.05, (now - self._last) / 1000) : 0;
      self._last = now;
      if (!self._reduced) self._t += dt;
      try { self._draw(); } catch (err) {}
      self._raf = requestAnimationFrame(self._loop);
    };
    this._raf = requestAnimationFrame(this._loop);
  }


  destroy() {
    this._dead = true;
    if (this._raf) cancelAnimationFrame(this._raf);
  }


  _draw() {
    var cv = document.getElementById('orbit-canvas');
    if (!cv) return;
    var w = cv.clientWidth, h = cv.clientHeight;
    if (!w || !h) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var pw = Math.round(w * dpr), ph = Math.round(h * dpr);
    if (cv.width !== pw || cv.height !== ph) { cv.width = pw; cv.height = ph; }
    var ctx = cv.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    var wide = w >= 900;
    var dim = wide ? 1 : 0.35;
    this._ex += ((this._mx || 0) - this._ex) * 0.05;
    this._ey += ((this._my || 0) - this._ey) * 0.05;
    var accent = ACCENT;
    var ink = '#F2F0EA';
    var cx = wide ? w * 0.74 : w * 0.5, cy = h * 0.5;
    var R = wide ? Math.min(h * 0.46, w * 0.25) : Math.min(w, h) * 0.44;
    var k = 0.38 + this._ey * 0.10;
    var phi = -0.34 + this._ex * 0.14;
    var cp = Math.cos(phi), sp = Math.sin(phi);
    var t = this._t;
    var pt = function (r, a) {
      var x = r * Math.cos(a), y = r * Math.sin(a) * k;
      return [cx + x * cp - y * sp, cy + x * sp + y * cp];
    };
    var i, j, ring;

    for (i = 0; i < this._stars.length; i++) {
      var st = this._stars[i];
      ctx.globalAlpha = dim * (0.15 + 0.35 * st.d) * (0.6 + 0.4 * Math.sin(t * 0.9 + st.tw));
      ctx.fillStyle = ink;
      ctx.beginPath();
      ctx.arc(st.x * w - this._ex * 14 * st.d, st.y * h - this._ey * 10 * st.d, st.s, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.lineWidth = 1;
    for (i = 0; i < this._rings.length; i++) {
      ring = this._rings[i];
      ctx.globalAlpha = dim;
      ctx.strokeStyle = 'rgba(242,240,234,' + (0.20 - i * 0.03) + ')';
      ctx.beginPath();
      ctx.ellipse(cx, cy, ring.r * R, Math.abs(ring.r * R * k), phi, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.lineCap = 'round';
    for (i = 0; i < this._rings.length; i++) {
      ring = this._rings[i];
      var head = t * ring.sp * 3.2 + i * 1.7;
      var segs = 22;
      for (j = 0; j < segs; j++) {
        var a1 = head - j * 0.045, a2 = head - (j + 1) * 0.045;
        var p1 = pt(ring.r * R, a1), p2 = pt(ring.r * R, a2);
        ctx.globalAlpha = dim * (1 - j / segs) * 0.9;
        ctx.strokeStyle = (i % 2 === 0) ? accent : ink;
        ctx.lineWidth = 2.2 * (1 - j / segs) + 0.4;
        ctx.beginPath(); ctx.moveTo(p1[0], p1[1]); ctx.lineTo(p2[0], p2[1]); ctx.stroke();
      }
    }
    ctx.lineWidth = 1;

    var items = [];
    for (i = 0; i < this._dust.length; i++) {
      var d = this._dust[i];
      ring = this._rings[d.ring];
      var a = d.a + t * ring.sp;
      items.push({ z: Math.sin(a), p: pt((ring.r + d.jr) * R, a), d: d });
    }
    for (i = 0; i < this._nodes.length; i++) {
      var nd = this._nodes[i];
      ring = this._rings[nd.ring];
      var an = nd.a0 + t * ring.sp;
      var np = pt(ring.r * R, an);
      items.push({ z: Math.sin(an), p: np, node: true, idx: i });
      ctx.globalAlpha = dim * 0.14;
      ctx.strokeStyle = ink;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(np[0], np[1]); ctx.stroke();
      var f = (t * 0.35 + i * 0.21) % 1;
      ctx.globalAlpha = dim * (1 - f) * 0.9;
      ctx.fillStyle = accent;
      ctx.beginPath(); ctx.arc(cx + (np[0] - cx) * f, cy + (np[1] - cy) * f, 1.8, 0, Math.PI * 2); ctx.fill();
    }
    items.sort(function (m, n) { return m.z - n.z; });

    var self = this;
    var coreDrawn = false;
    var drawCore = function () {
      var pulse = 1 + Math.sin(t * 1.6) * 0.06;
      var g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.34 * pulse);
      g.addColorStop(0, 'rgba(255,255,255,0.16)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.globalAlpha = dim;
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(cx, cy, R * 0.34 * pulse, 0, Math.PI * 2); ctx.fill();
      var cr = Math.max(16, R * 0.085);
      ctx.fillStyle = accent;
      ctx.shadowColor = accent; ctx.shadowBlur = 28;
      ctx.beginPath(); ctx.arc(cx, cy, cr, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#0A0B0F';
      ctx.font = '700 ' + Math.round(cr * 0.95) + 'px "Space Grotesk", system-ui, sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('AI', cx, cy + 1);
      ctx.textAlign = 'left';
    };

    for (i = 0; i < items.length; i++) {
      var it = items[i];
      if (!coreDrawn && it.z >= 0) { drawCore(); coreDrawn = true; }
      var depth = (it.z + 1) / 2;
      if (it.node) {
        var hot = it.idx % 2 === 0;
        ctx.globalAlpha = dim * (0.45 + 0.55 * depth);
        ctx.fillStyle = hot ? accent : ink;
        ctx.beginPath(); ctx.arc(it.p[0], it.p[1], 4 + depth * 2, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = hot ? accent : ink;
        ctx.globalAlpha = dim * (0.45 + 0.55 * depth) * 0.45;
        ctx.beginPath(); ctx.arc(it.p[0], it.p[1], 11 + depth * 3 + Math.sin(t * 2 + it.idx) * 1.5, 0, Math.PI * 2); ctx.stroke();
        if (wide) {
          ctx.globalAlpha = 0.55 + 0.45 * depth;
          ctx.fillStyle = ink;
          ctx.font = '500 ' + Math.round(13 + depth * 2) + 'px "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif';
          ctx.textBaseline = 'middle';
          ctx.fillText((self._labels && self._labels[it.idx]) || '', it.p[0] + 20, it.p[1]);
        }
      } else {
        var dd = it.d;
        ctx.globalAlpha = dim * (0.18 + 0.6 * depth) * (0.7 + 0.3 * Math.sin(t * 1.4 + dd.tw));
        ctx.fillStyle = dd.kind === 1 ? accent : (dd.kind === 2 ? '#7DB8FF' : ink);
        ctx.beginPath(); ctx.arc(it.p[0], it.p[1], dd.s * (0.7 + 0.6 * depth), 0, Math.PI * 2); ctx.fill();
      }
    }
    if (!coreDrawn) drawCore();
    ctx.globalAlpha = 1;
  }
}

var root = document.getElementById('root');
var orbit = new Orbit();

function detectLang() {
  var m = /[?&]lang=(zh|en)\b/.exec(location.search);
  if (m) return m[1];
  try {
    var saved = localStorage.getItem('lang');
    if (saved === 'zh' || saved === 'en') return saved;
  } catch (e) {}
  return /^zh/i.test(navigator.language || '') ? 'zh' : 'en';
}

function render(lang) {
  var d = I18N[lang], t = d.t;
  root.className = lang;
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  document.title = META[lang].title;
  var md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', META[lang].desc);

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var k = el.getAttribute('data-i18n');
    if (t[k] != null) el.textContent = t[k];
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
    var p = el.getAttribute('data-i18n-attr').split(':');
    if (t[p[1]] != null) el.setAttribute(p[0], t[p[1]]);
  });
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    var on = b.getAttribute('data-lang') === lang;
    b.classList.toggle('on', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  document.querySelectorAll('[data-only]').forEach(function (el) {
    el.hidden = el.getAttribute('data-only') !== lang;
  });

  var data = {
    ksFeatures: d.ksFeatures, steps: d.steps, topics: d.topics, articles: d.articles,
    projects: d.projects.map(function (p) {
      return { name: p.name, glyph: p.glyph, tags: p.tags, desc: p.desc, url: GH + p.name };
    })
  };
  document.querySelectorAll('[data-list]').forEach(function (el) {
    var name = el.getAttribute('data-list');
    el.innerHTML = data[name].map(function (item) { return LISTS[name](item, t); }).join('');
  });
  orbit._labels = d.labels;
}

document.querySelectorAll('[data-lang]').forEach(function (b) {
  b.addEventListener('click', function () {
    var lang = b.getAttribute('data-lang');
    try { localStorage.setItem('lang', lang); } catch (e) {}
    render(lang);
  });
});

/* 首屏：鼠标光晕与轨道视差 */
var hero = document.getElementById('top');
hero.addEventListener('mousemove', function (e) {
  var r = hero.getBoundingClientRect();
  if (!r.width || !r.height) return;
  orbit._mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
  orbit._my = ((e.clientY - r.top) / r.height - 0.5) * 2;
  hero.style.setProperty('--mx', (e.clientX - r.left) + 'px');
  hero.style.setProperty('--my', (e.clientY - r.top) + 'px');
});

/* 卡片：跟随鼠标的光晕 */
document.querySelectorAll('[data-glow]').forEach(function (box) {
  box.addEventListener('mousemove', function (e) {
    var el = e.target.closest ? e.target.closest('.glow') : null;
    if (!el) return;
    var r = el.getBoundingClientRect();
    el.style.setProperty('--tx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--ty', (e.clientY - r.top) + 'px');
  });
});

render(detectLang());
orbit.init();
})();
