(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();class n{constructor(){this.currentIndex=0,this.slides=[],this.totalSlides=0,this.viewport=document.getElementById("ppt-viewport"),this.prevBtn=document.getElementById("prevBtn"),this.nextBtn=document.getElementById("nextBtn"),this.progressBarFill=document.getElementById("progressBarFill"),this.pageIndicator=document.getElementById("pageIndicator"),this.init(),this.initWindowMessage()}init(){this.loadSlides(),this.bindEvents(),this.initializePage(),this.updateUI(),this.updateViewportScale()}initWindowMessage(){window.addEventListener("message",t=>{if(!t.data||typeof t.data!="object")return;const{type:i,data:r}=t.data;i==="childrenstart"?(this.prevBtn.style.visibility="hidden",this.nextBtn.style.visibility="hidden",this.progressBarFill.style.visibility="hidden",this.pageIndicator.style.visibility="hidden"):i==="childrenstop"&&(this.prevBtn.style.visibility="visible",this.nextBtn.style.visibility="visible",this.progressBarFill.style.visibility="visible",this.pageIndicator.style.visibility="visible")})}initializePage(){const t=new URLSearchParams(window.location.search);let i=t.get("page");if(!i){i="1",t.set("page","1");const o=`${window.location.pathname}?${t.toString()}`;window.history.replaceState({},"",o)}const r=parseInt(i,10),e=r-1;if(!isNaN(r)&&e>=0&&e<this.totalSlides)this.slides[0]&&this.slides[0].classList.remove("active"),this.currentIndex=e,this.slides[e]&&this.slides[e].classList.add("active");else{console.warn(`无效的页码参数: ${i}，将显示第 1 页`),t.set("page","1");const o=`${window.location.pathname}?${t.toString()}`;window.history.replaceState({},"",o)}}loadSlides(){if(typeof window.slideDataMap>"u"){console.error("未找到 slideDataMap");return}const t=Array.from(window.slideDataMap.keys()).sort((i,r)=>i-r);if(this.totalSlides=t.length,this.totalSlides===0){console.warn("slideDataMap 为空，没有幻灯片可加载");return}t.forEach((i,r)=>{const e=document.createElement("div");e.className="slide",r===0&&e.classList.add("active");const o=window.slideDataMap.get(i);if(!o||typeof o!="string"){this.totalSlides--,console.error(`未找到页码 ${i} 的内容, 或者页码 ${i} 的内容为空`);return}const l=document.createElement("div");l.innerHTML=o.trim(),e.appendChild(l),this.viewport.appendChild(e),this.slides.push(e)})}bindEvents(){this.prevBtn.addEventListener("click",()=>this.prevSlide()),this.nextBtn.addEventListener("click",()=>this.nextSlide()),document.addEventListener("keydown",i=>{i.key==="ArrowLeft"?this.prevSlide():i.key==="ArrowRight"||i.key===" "?(i.preventDefault(),this.nextSlide()):i.key==="Home"?this.goToSlide(0):i.key==="End"&&this.goToSlide(this.totalSlides-1)});let t=0;this.viewport.addEventListener("touchstart",i=>{t=i.touches[0].clientX}),this.viewport.addEventListener("touchend",i=>{const r=i.changedTouches[0].clientX,e=t-r;Math.abs(e)>50&&(e>0?this.nextSlide():this.prevSlide())}),window.addEventListener("resize",()=>this.updateViewportScale())}prevSlide(){this.currentIndex>0&&this.goToSlide(this.currentIndex-1)}nextSlide(){this.currentIndex<this.totalSlides-1&&this.goToSlide(this.currentIndex+1)}goToSlide(t){t<0||t>=this.totalSlides||(this.slides[this.currentIndex].classList.remove("active"),this.currentIndex=t,this.slides[this.currentIndex].classList.add("active"),this.updateUrlPage(t+1),this.updateUI())}updateUrlPage(t){const i=new URLSearchParams(window.location.search);i.set("page",t.toString());const r=`${window.location.pathname}?${i.toString()}`;window.history.replaceState({},"",r)}updateUI(){if(this.totalSlides===0){this.prevBtn.disabled=!0,this.nextBtn.disabled=!0,this.progressBarFill.style.width="0%",this.pageIndicator.textContent="制作中";return}this.prevBtn.disabled=this.currentIndex===0,this.nextBtn.disabled=this.currentIndex===this.totalSlides-1;const t=(this.currentIndex+1)/this.totalSlides*100;this.progressBarFill.style.width=`${t}%`,this.pageIndicator.textContent=`${this.currentIndex+1} / ${this.totalSlides}`}updateViewportScale(){const e=window.innerWidth-40,o=window.innerHeight-40,l=e/1440,d=o/810,s=Math.min(l,d,1);this.viewport.style.transform=`scale(${s})`,console.log(`窗口: ${window.innerWidth}x${window.innerHeight}, 缩放: ${s.toFixed(3)}`)}}class x{constructor(){this.validRoutes=["/","/index.html"],this.checkRoute()}checkRoute(){const t=window.location.pathname;if(t.includes("404.html")||window.location.protocol==="file:")return;this.validRoutes.some(r=>r==="/"?t==="/"||t==="/index.html":t===r)||(console.warn(`Invalid route detected: ${t}, redirecting to 404`),window.location.href="/404.html")}addRoute(t){this.validRoutes.includes(t)||this.validRoutes.push(t)}isValidRoute(t){return this.validRoutes.includes(t)}}window.addEventListener("DOMContentLoaded",()=>{new x,new n});window.slideDataMap.set(1,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0" style="background-image: linear-gradient(rgba(6, 182, 212, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.08) 1px, transparent 1px); background-size: 50px 50px;"></div>
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-[12%] left-[8%] w-[340px] h-[200px] border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm" style="background: rgba(6,182,212,0.03);">
        <div class="font-mono text-cyan-500/60 text-[13px] mb-3">/* 微分算子 */</div>
        <div class="text-white/80 text-[18px] font-mono leading-relaxed">d/dx f(x) = f'(x)</div>
        <div class="text-cyan-400/60 text-[13px] font-mono mt-3">→ 极限运算 · 无穷小</div>
      </div>
      <div class="absolute top-[12%] right-[8%] w-[340px] h-[200px] border border-blue-500/20 rounded-lg p-6 backdrop-blur-sm" style="background: rgba(30,58,138,0.05);">
        <div class="font-mono text-blue-500/60 text-[13px] mb-3">/* 矩阵 */</div>
        <div class="text-white/80 text-[18px] font-mono leading-relaxed">A · v = v'</div>
        <div class="text-blue-400/60 text-[13px] font-mono mt-3">→ 代数对象 · 线性变换</div>
      </div>
      <div class="absolute top-[18%] left-1/2 transform -translate-x-1/2 text-6xl text-cyan-400/30 animate-pulse">×</div>
    </div>
    <div class="relative z-10 flex flex-col items-center justify-center h-full">
      <div class="mb-2 font-mono text-cyan-400/70 text-sm tracking-[0.4em]">LINEAR ALGEBRA × CALCULUS</div>
      <h1 class="text-7xl font-bold text-white mb-4 tracking-tight" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">将 d/dx 表示为矩阵</h1>
      <div class="w-[200px] h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-4"></div>
      <div class="text-cyan-400 text-xl font-mono mb-8" style="font-family: 'Montserrat', sans-serif;">DIFFERENTIATION AS A MATRIX</div>
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2 px-5 py-2 border border-cyan-500/40 bg-cyan-500/10 rounded-full">
          <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
          <span class="text-cyan-300 font-mono text-[13px]">线性变换</span>
        </div>
        <div class="flex items-center gap-2 px-5 py-2 border border-blue-500/40 bg-blue-500/10 rounded-full">
          <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span class="text-blue-300 font-mono text-[13px]">无限维矩阵</span>
        </div>
        <div class="flex items-center gap-2 px-5 py-2 border border-purple-500/40 bg-purple-500/10 rounded-full">
          <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span class="text-purple-300 font-mono text-[13px]">幂级数</span>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(2,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px); background-size: 40px 40px;"></div>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col relative z-10">
      <div class="text-center mb-3">
        <div class="inline-flex items-center gap-2 bg-red-500/15 px-4 py-1.5 rounded-full mb-2">
          <div class="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          <span class="text-red-400 font-mono text-[13px] tracking-wider">CORE PARADOX</span>
        </div>
        <h2 class="text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-cyan-400 to-green-400" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">
          d/dx 与矩阵：两个世界的碰撞
        </h2>
      </div>
      <!-- 交换图：两个世界的桥梁 -->
      <div class="flex-1 grid grid-cols-6 gap-5">
        <!-- 左：矛盾可视化 -->
        <div class="col-span-2 flex flex-col gap-4">
          <div class="bg-gradient-to-br from-red-500/10 to-red-900/10 border border-red-500/30 rounded-xl p-4 flex-1 flex flex-col items-center justify-center">
            <svg width="320" height="200" viewBox="0 0 320 200">
              <!-- 左世界：微积分 -->
              <rect x="10" y="20" width="130" height="160" rx="12" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.4)" stroke-width="1.5"/>
              <text x="75" y="50" text-anchor="middle" fill="#f87171" font-size="13" font-family="monospace" font-weight="bold">微积分世界</text>
              <text x="75" y="78" text-anchor="middle" fill="#fca5a5" font-size="20" font-family="serif" font-style="italic">d/dx</text>
              <text x="75" y="105" text-anchor="middle" fill="#9ca3af" font-size="11" font-family="sans-serif">极限 · 无穷小</text>
              <text x="75" y="125" text-anchor="middle" fill="#6b7280" font-size="11" font-family="sans-serif">作用于函数 f(x)</text>
              <line x1="75" y1="138" x2="75" y2="158" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2"/>
              <text x="75" y="172" text-anchor="middle" fill="#fca5a5" font-size="11" font-family="serif" font-style="italic">f'(x) = lim Δf/Δx</text>

              <!-- 右世界：线性代数 -->
              <rect x="180" y="20" width="130" height="160" rx="12" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.4)" stroke-width="1.5"/>
              <text x="245" y="50" text-anchor="middle" fill="#60a5fa" font-size="13" font-family="monospace" font-weight="bold">线性代数世界</text>
              <text x="245" y="78" text-anchor="middle" fill="#93c5fd" font-size="20" font-family="monospace" font-weight="bold">A · v</text>
              <text x="245" y="105" text-anchor="middle" fill="#9ca3af" font-size="11" font-family="sans-serif">代数 · 排列</text>
              <text x="245" y="125" text-anchor="middle" fill="#6b7280" font-size="11" font-family="sans-serif">作用于向量 v</text>
              <line x1="245" y1="138" x2="245" y2="158" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,2"/>
              <text x="245" y="172" text-anchor="middle" fill="#93c5fd" font-size="11" font-family="monospace">v' = A · v</text>

              <!-- 中间裂痕 -->
              <line x1="145" y1="35" x2="175" y2="60" stroke="#ef4444" stroke-width="2.5"/>
              <line x1="175" y1="60" x2="145" y2="85" stroke="#3b82f6" stroke-width="2.5"/>
              <line x1="145" y1="85" x2="175" y2="110" stroke="#ef4444" stroke-width="2.5"/>
              <line x1="175" y1="110" x2="145" y2="135" stroke="#3b82f6" stroke-width="2.5"/>
              <text x="160" y="165" text-anchor="middle" fill="#f59e0b" font-size="22" font-weight="bold">≠</text>
            </svg>
          </div>
          <div class="bg-gradient-to-br from-cyan-500/10 to-blue-900/10 border border-cyan-500/30 rounded-xl p-4">
            <div class="text-cyan-400 font-bold text-[15px] mb-2" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">线性性 = 桥梁</div>
            <div class="grid grid-cols-2 gap-2">
              <div class="bg-black/30 rounded-lg p-2 border border-cyan-500/15 text-center">
                <div class="text-cyan-300 font-mono text-[12px]">T(αu+βv)</div>
                <div class="text-cyan-400 font-mono text-[12px]">= αT(u)+βT(v)</div>
              </div>
              <div class="bg-black/30 rounded-lg p-2 border border-cyan-500/15 text-center">
                <div class="text-cyan-300 font-mono text-[12px]">d/dx(af+bg)</div>
                <div class="text-cyan-400 font-mono text-[12px]">= a·f'+b·g'</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 中：交换图（核心数学建模） -->
        <div class="col-span-2 bg-slate-900/80 border border-purple-500/30 rounded-xl p-4 flex flex-col items-center justify-center">
          <div class="text-purple-400 font-bold text-[15px] mb-2" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">交换图：两种路径，同一结果</div>
          <svg width="340" height="340" viewBox="0 0 340 340">
            <!-- 节点 -->
            <rect x="100" y="10" width="140" height="50" rx="10" fill="rgba(6,182,212,0.12)" stroke="rgba(6,182,212,0.5)" stroke-width="2"/>
            <text x="170" y="42" text-anchor="middle" fill="#22d3ee" font-size="15" font-family="serif" font-style="italic" font-weight="bold">f(x)</text>

            <rect x="100" y="280" width="140" height="50" rx="10" fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.5)" stroke-width="2"/>
            <text x="170" y="312" text-anchor="middle" fill="#4ade80" font-size="15" font-family="serif" font-style="italic" font-weight="bold">f'(x)</text>

            <rect x="0" y="130" width="120" height="50" rx="10" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.5)" stroke-width="2"/>
            <text x="60" y="160" text-anchor="middle" fill="#60a5fa" font-size="14" font-family="monospace" font-weight="bold">[a₀,a₁,...]ᵀ</text>

            <rect x="220" y="130" width="120" height="50" rx="10" fill="rgba(168,85,247,0.12)" stroke="rgba(168,85,247,0.5)" stroke-width="2"/>
            <text x="280" y="160" text-anchor="middle" fill="#c084fc" font-size="14" font-family="monospace" font-weight="bold">[a₁,2a₂,...]ᵀ</text>

            <!-- 箭头：上→左（系数提取） -->
            <path d="M110 60 Q60 95 70 125" fill="none" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowBlue)"/>
            <text x="50" y="95" fill="#60a5fa" font-size="11" font-family="sans-serif">系数提取</text>

            <!-- 箭头：左→右（矩阵乘法） -->
            <line x1="120" y1="155" x2="218" y2="155" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrowAmber)"/>
            <text x="170" y="148" text-anchor="middle" fill="#f59e0b" font-size="14" font-family="monospace" font-weight="bold">D · v</text>

            <!-- 箭头：上→下（微分） -->
            <line x1="170" y1="60" x2="170" y2="278" stroke="#22d3ee" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arrowCyan)"/>
            <text x="200" y="175" fill="#22d3ee" font-size="13" font-family="serif" font-style="italic" font-weight="bold">d/dx</text>

            <!-- 箭头：右→下（还原系数） -->
            <path d="M280 180 Q290 240 230 290" fill="none" stroke="#c084fc" stroke-width="2" marker-end="url(#arrowPurple)"/>
            <text x="295" y="240" fill="#c084fc" font-size="11" font-family="sans-serif">还原</text>

            <!-- 标记：等价 -->
            <circle cx="170" cy="210" r="18" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.5)" stroke-width="1.5"/>
            <text x="170" y="215" text-anchor="middle" fill="#4ade80" font-size="18" font-weight="bold">=</text>

            <!-- 箭头定义 -->
            <defs>
              <marker id="arrowBlue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#60a5fa"/></marker>
              <marker id="arrowAmber" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f59e0b"/></marker>
              <marker id="arrowCyan" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#22d3ee"/></marker>
              <marker id="arrowPurple" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#c084fc"/></marker>
            </defs>
          </svg>
        </div>
        <!-- 右：研究路线图 -->
        <div class="col-span-2 flex flex-col gap-4">
          <div class="bg-gradient-to-br from-purple-500/10 to-purple-900/10 border border-purple-500/30 rounded-xl p-5 flex-1">
            <div class="text-purple-400 font-bold text-[17px] mb-3" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">研究路线图</div>
            <svg width="380" height="280" viewBox="0 0 380 280">
              <!-- Step 1 -->
              <circle cx="50" cy="50" r="22" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.6)" stroke-width="2"/>
              <text x="50" y="56" text-anchor="middle" fill="#22d3ee" font-size="16" font-weight="bold" font-family="monospace">1</text>
              <text x="85" y="44" fill="#e2e8f0" font-size="13" font-family="sans-serif">多项式 → 系数向量</text>
              <text x="85" y="62" fill="#94a3b8" font-size="11" font-family="monospace">f(x)=3+2x+5x² ↔ [3,2,5]ᵀ</text>
              <!-- 连线 -->
              <line x1="50" y1="72" x2="50" y2="110" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="4,2"/>
              <!-- Step 2 -->
              <circle cx="50" cy="132" r="22" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.6)" stroke-width="2"/>
              <text x="50" y="138" text-anchor="middle" fill="#60a5fa" font-size="16" font-weight="bold" font-family="monospace">2</text>
              <text x="85" y="126" fill="#e2e8f0" font-size="13" font-family="sans-serif">构造 D 使得 D·v = v'</text>
              <text x="85" y="144" fill="#94a3b8" font-size="11" font-family="monospace">D = [[0,1,0],[0,0,2],[0,0,0]]</text>
              <!-- 连线 -->
              <line x1="50" y1="154" x2="50" y2="192" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="4,2"/>
              <!-- Step 3 -->
              <circle cx="50" cy="214" r="22" fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.6)" stroke-width="2"/>
              <text x="50" y="220" text-anchor="middle" fill="#c084fc" font-size="16" font-weight="bold" font-family="monospace">3</text>
              <text x="85" y="208" fill="#e2e8f0" font-size="13" font-family="sans-serif">无限维 + 非多项式函数</text>
              <text x="85" y="226" fill="#94a3b8" font-size="11" font-family="monospace">sin,cos,eˣ → Maclaurin 展开</text>
              <!-- 目标箭头 -->
              <line x1="50" y1="236" x2="50" y2="260" stroke="#4ade80" stroke-width="2" marker-end="url(#arrG)"/>
              <rect x="85" y="248" width="200" height="28" rx="8" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.4)" stroke-width="1.5"/>
              <text x="185" y="267" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="bold" font-family="sans-serif">d/dx = 矩阵 D ！</text>
              <defs>
                <marker id="arrG" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#4ade80"/></marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(3,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0 opacity-8" style="background-image: linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px); background-size: 50px 50px;"></div>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col relative z-10">
      <div class="text-center mb-3">
        <div class="inline-flex items-center gap-2 bg-cyan-500/15 px-4 py-1.5 rounded-full mb-2">
          <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
          <span class="text-cyan-400 font-mono text-[13px] tracking-wider">BRIDGE CONSTRUCTION</span>
        </div>
        <h2 class="text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">
          构建桥梁：矩阵 = 线性变换 & 多项式 = 向量
        </h2>
      </div>
      <div class="flex-1 grid grid-cols-3 gap-5">
        <!-- 左：2D线性变换可视化 -->
        <div class="flex flex-col gap-4">
          <div class="bg-slate-900/80 backdrop-blur border border-cyan-500/30 rounded-xl p-4 flex-1 flex flex-col items-center justify-center">
            <div class="text-cyan-400 font-bold text-[16px] mb-2">矩阵 = 线性变换</div>
            <svg width="340" height="260" viewBox="0 0 340 260">
              <!-- 坐标轴 -->
              <line x1="30" y1="230" x2="160" y2="230" stroke="#475569" stroke-width="1"/>
              <line x1="30" y1="230" x2="30" y2="100" stroke="#475569" stroke-width="1"/>
              <text x="155" y="245" fill="#64748b" font-size="10">x</text>
              <text x="18" y="100" fill="#64748b" font-size="10">y</text>
              <!-- 原始向量 v -->
              <line x1="30" y1="230" x2="80" y2="130" stroke="#60a5fa" stroke-width="2.5"/>
              <circle cx="80" cy="130" r="4" fill="#60a5fa"/>
              <text x="60" y="120" fill="#60a5fa" font-size="11" font-family="monospace">v=[1,2]ᵀ</text>
              <!-- 原始基向量 -->
              <line x1="30" y1="230" x2="80" y2="230" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
              <line x1="30" y1="230" x2="30" y2="180" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
              <!-- 网格变形提示 -->
              <text x="90" y="250" fill="#64748b" font-size="10">变换前</text>

              <!-- 箭头连接 -->
              <line x1="165" y1="165" x2="175" y2="165" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrA3)"/>
              <text x="155" y="155" fill="#f59e0b" font-size="12" font-weight="bold" font-family="monospace">A</text>

              <!-- 变换后 -->
              <line x1="190" y1="230" x2="310" y2="230" stroke="#475569" stroke-width="1"/>
              <line x1="190" y1="230" x2="190" y2="100" stroke="#475569" stroke-width="1"/>
              <!-- 变换后向量 Av -->
              <line x1="190" y1="230" x2="290" y2="130" stroke="#4ade80" stroke-width="2.5"/>
              <circle cx="290" cy="130" r="4" fill="#4ade80"/>
              <text x="275" y="120" fill="#4ade80" font-size="11" font-family="monospace">Av=[4,7]ᵀ</text>
              <!-- 变换基 -->
              <line x1="190" y1="230" x2="290" y2="230" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="3,2"/>
              <line x1="190" y1="230" x2="190" y2="130" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="3,2"/>
              <text x="255" y="250" fill="#64748b" font-size="10">变换后</text>

              <!-- 矩阵标注 -->
              <rect x="135" y="185" width="60" height="35" rx="6" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.4)" stroke-width="1"/>
              <text x="165" y="200" text-anchor="middle" fill="#f59e0b" font-size="10" font-family="monospace">[[2,1]</text>
              <text x="165" y="214" text-anchor="middle" fill="#f59e0b" font-size="10" font-family="monospace"> [1,3]]</text>

              <defs>
                <marker id="arrA3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f59e0b"/></marker>
              </defs>
            </svg>
          </div>
          <div class="bg-gradient-to-br from-green-500/10 to-green-900/5 border border-green-500/30 rounded-xl p-3">
            <div class="text-green-400 font-bold text-[14px] mb-1" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">线性性保证</div>
            <div class="text-gray-300 text-[13px] font-mono">T(αu + βv) = αT(u) + βT(v)</div>
            <div class="text-gray-500 text-[11px] mt-1" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">矩阵和微分都满足 → 同构基础</div>
          </div>
        </div>
        <!-- 中：多项式→向量映射可视化 -->
        <div class="flex flex-col gap-4">
          <div class="bg-slate-900/80 backdrop-blur border border-blue-500/30 rounded-xl p-4 flex-1 flex flex-col items-center justify-center">
            <div class="text-blue-400 font-bold text-[16px] mb-2">多项式 = 系数向量</div>
            <svg width="340" height="260" viewBox="0 0 340 260">
              <!-- 多项式函数曲线 -->
              <rect x="10" y="10" width="150" height="130" rx="8" fill="rgba(59,130,246,0.05)" stroke="rgba(59,130,246,0.3)" stroke-width="1"/>
              <text x="85" y="28" text-anchor="middle" fill="#60a5fa" font-size="11" font-weight="bold">函数空间</text>
              <!-- 曲线 f(x)=3+2x+5x² -->
              <line x1="25" y1="120" x2="145" y2="120" stroke="#475569" stroke-width="0.5"/>
              <line x1="25" y1="120" x2="25" y2="40" stroke="#475569" stroke-width="0.5"/>
              <path d="M25 110 Q55 105 75 95 Q100 80 125 45 Q135 30 145 25" fill="none" stroke="#60a5fa" stroke-width="2.5"/>
              <text x="100" y="50" fill="#93c5fd" font-size="11" font-style="italic" font-family="serif">f(x)=3+2x+5x²</text>

              <!-- 映射箭头 -->
              <line x1="165" y1="85" x2="185" y2="85" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrMap)"/>
              <text x="165" y="75" fill="#f59e0b" font-size="9" font-family="sans-serif">提取系数</text>

              <!-- 向量空间 -->
              <rect x="190" y="10" width="140" height="130" rx="8" fill="rgba(168,85,247,0.05)" stroke="rgba(168,85,247,0.3)" stroke-width="1"/>
              <text x="260" y="28" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="bold">向量空间 R³</text>
              <!-- 向量柱状图 -->
              <rect x="215" y="100" width="25" height="30" rx="3" fill="rgba(6,182,212,0.25)" stroke="rgba(6,182,212,0.6)" stroke-width="1.5"/>
              <text x="227" y="95" text-anchor="middle" fill="#22d3ee" font-size="12" font-weight="bold" font-family="monospace">3</text>
              <text x="227" y="140" text-anchor="middle" fill="#64748b" font-size="9">a₀</text>

              <rect x="250" y="70" width="25" height="60" rx="3" fill="rgba(59,130,246,0.25)" stroke="rgba(59,130,246,0.6)" stroke-width="1.5"/>
              <text x="262" y="65" text-anchor="middle" fill="#60a5fa" font-size="12" font-weight="bold" font-family="monospace">2</text>
              <text x="262" y="140" text-anchor="middle" fill="#64748b" font-size="9">a₁</text>

              <rect x="285" y="40" width="25" height="90" rx="3" fill="rgba(168,85,247,0.25)" stroke="rgba(168,85,247,0.6)" stroke-width="1.5"/>
              <text x="297" y="35" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="bold" font-family="monospace">5</text>
              <text x="297" y="140" text-anchor="middle" fill="#64748b" font-size="9">a₂</text>

              <!-- 基底说明 -->
              <text x="170" y="168" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">基底: {1, x, x²}</text>

              <!-- 一般形式 -->
              <rect x="20" y="185" width="300" height="60" rx="8" fill="rgba(245,158,11,0.05)" stroke="rgba(245,158,11,0.3)" stroke-width="1"/>
              <text x="170" y="205" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold" font-family="sans-serif">一般形式</text>
              <text x="170" y="228" text-anchor="middle" fill="#d1d5db" font-size="12" font-family="monospace">a₀+a₁x+...+aₙxⁿ ↔ [a₀,a₁,...,aₙ]ᵀ</text>

              <defs>
                <marker id="arrMap" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f59e0b"/></marker>
              </defs>
            </svg>
          </div>
        </div>
        <!-- 右：完整转化链（垂直流程图） -->
        <div class="bg-slate-900/80 border border-purple-500/30 rounded-xl p-4 flex flex-col items-center justify-center">
          <div class="text-purple-400 font-bold text-[16px] mb-2">完整转化链</div>
          <svg width="340" height="520" viewBox="0 0 340 520">
            <!-- f(x) -->
            <rect x="70" y="10" width="200" height="55" rx="12" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.5)" stroke-width="2"/>
            <text x="170" y="32" text-anchor="middle" fill="#22d3ee" font-size="13" font-weight="bold" font-family="sans-serif">多项式</text>
            <text x="170" y="52" text-anchor="middle" fill="#67e8f9" font-size="15" font-style="italic" font-family="serif">f(x) = a₀+a₁x+a₂x²</text>

            <!-- 箭头 1 -->
            <line x1="170" y1="65" x2="170" y2="110" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrV3)"/>
            <text x="210" y="90" fill="#60a5fa" font-size="10" font-family="sans-serif">提取系数</text>

            <!-- v -->
            <rect x="70" y="115" width="200" height="55" rx="12" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.5)" stroke-width="2"/>
            <text x="170" y="137" text-anchor="middle" fill="#60a5fa" font-size="13" font-weight="bold" font-family="sans-serif">系数向量</text>
            <text x="170" y="157" text-anchor="middle" fill="#93c5fd" font-size="15" font-family="monospace">v = [a₀, a₁, a₂]ᵀ</text>

            <!-- 箭头 2 -->
            <line x1="170" y1="170" x2="170" y2="220" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrD3)"/>
            <text x="220" y="200" fill="#f59e0b" font-size="12" font-weight="bold" font-family="monospace">D · v</text>

            <!-- Dv -->
            <rect x="70" y="225" width="200" height="55" rx="12" fill="rgba(168,85,247,0.1)" stroke="rgba(168,85,247,0.5)" stroke-width="2"/>
            <text x="170" y="247" text-anchor="middle" fill="#c084fc" font-size="13" font-weight="bold" font-family="sans-serif">微分后向量</text>
            <text x="170" y="267" text-anchor="middle" fill="#d8b4fe" font-size="15" font-family="monospace">v' = [a₁, 2a₂, 0]ᵀ</text>

            <!-- 箭头 3 -->
            <line x1="170" y1="280" x2="170" y2="325" stroke="#4ade80" stroke-width="2" marker-end="url(#arrG3)"/>
            <text x="210" y="305" fill="#4ade80" font-size="10" font-family="sans-serif">还原系数</text>

            <!-- f'(x) -->
            <rect x="70" y="330" width="200" height="55" rx="12" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.5)" stroke-width="2"/>
            <text x="170" y="352" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="bold" font-family="sans-serif">微分结果</text>
            <text x="170" y="372" text-anchor="middle" fill="#86efac" font-size="15" font-style="italic" font-family="serif">f'(x) = a₁+2a₂x</text>

            <!-- 右侧等价标注 -->
            <line x1="275" y1="37" x2="275" y2="357" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5,3"/>
            <text x="280" y="200" fill="#fbbf24" font-size="11" font-weight="bold" font-family="serif" font-style="italic" writing-mode="tb">等价于 d/dx</text>

            <!-- 底部关键结论 -->
            <rect x="40" y="410" width="260" height="90" rx="12" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.4)" stroke-width="1.5"/>
            <text x="170" y="435" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold" font-family="sans-serif">核心意义</text>
            <text x="170" y="458" text-anchor="middle" fill="#d1d5db" font-size="12" font-family="sans-serif">多项式 ↔ 向量 一一对应</text>
            <text x="170" y="478" text-anchor="middle" fill="#d1d5db" font-size="12" font-family="sans-serif">微分 → 矩阵作用于系数向量</text>
            <text x="170" y="493" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="bold" font-family="sans-serif">矛盾迎刃而解！</text>

            <defs>
              <marker id="arrV3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#60a5fa"/></marker>
              <marker id="arrD3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f59e0b"/></marker>
              <marker id="arrG3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#4ade80"/></marker>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(4,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0 overflow-hidden opacity-10 font-mono text-cyan-400 text-[11px]">
      <div class="absolute left-[5%] top-0" style="animation: scroll 12s linear infinite;">0 1 0 0 0 0 ...<br/>0 0 2 0 0 0 ...<br/>0 0 0 3 0 0 ...<br/>0 0 0 0 4 0 ...<br/>...</div>
    </div>
    <style>@keyframes scroll { 0% { transform: translateY(-100%); } 100% { transform: translateY(100vh); } }</style>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col relative z-10">
      <div class="text-center mb-3">
        <div class="inline-flex items-center gap-2 bg-yellow-500/15 px-4 py-1.5 rounded-full mb-2">
          <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <span class="text-yellow-400 font-mono text-[13px] tracking-wider">CORE DERIVATION</span>
        </div>
        <h2 class="text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-cyan-400 to-green-400" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">
          推导：构造微分矩阵 D
        </h2>
      </div>
      <div class="flex-1 grid grid-cols-2 gap-6">
        <!-- 左：矩阵-向量乘法可视化 -->
        <div class="bg-slate-900/90 rounded-xl overflow-hidden border border-cyan-500/30 shadow-2xl flex flex-col">
          <div class="bg-slate-800 border-b border-cyan-500/30 px-5 py-2.5 flex items-center justify-between">
            <div class="flex items-center gap-2"><div class="w-2.5 h-2.5 bg-red-500 rounded-full"></div><div class="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div><div class="w-2.5 h-2.5 bg-green-500 rounded-full"></div><span class="text-cyan-400 font-mono text-[14px] ml-3">derivation.md</span></div>
            <div class="text-cyan-400 font-mono text-[13px]">3×3 MATRIX</div>
          </div>
          <div class="p-4 flex-1 flex flex-col items-center justify-center">
            <!-- 矩阵乘法 SVG -->
            <svg width="600" height="280" viewBox="0 0 600 280">
              <!-- D 矩阵 -->
              <text x="30" y="25" fill="#f59e0b" font-size="14" font-weight="bold" font-family="monospace">D =</text>
              <!-- 矩阵方括号左 -->
              <line x1="65" y1="35" x2="75" y2="35" stroke="#f59e0b" stroke-width="2.5"/>
              <line x1="65" y1="35" x2="65" y2="215" stroke="#f59e0b" stroke-width="2.5"/>
              <line x1="65" y1="215" x2="75" y2="215" stroke="#f59e0b" stroke-width="2.5"/>
              <!-- Row 0 -->
              <rect x="82" y="42" width="50" height="40" rx="4" fill="rgba(100,116,139,0.15)" stroke="rgba(100,116,139,0.3)"/>
              <text x="107" y="68" text-anchor="middle" fill="#64748b" font-size="18" font-family="monospace">0</text>
              <rect x="140" y="42" width="50" height="40" rx="4" fill="rgba(6,182,212,0.2)" stroke="rgba(6,182,212,0.6)" stroke-width="2"/>
              <text x="165" y="68" text-anchor="middle" fill="#22d3ee" font-size="18" font-weight="bold" font-family="monospace">1</text>
              <rect x="198" y="42" width="50" height="40" rx="4" fill="rgba(100,116,139,0.15)" stroke="rgba(100,116,139,0.3)"/>
              <text x="223" y="68" text-anchor="middle" fill="#64748b" font-size="18" font-family="monospace">0</text>
              <!-- Row 1 -->
              <rect x="82" y="90" width="50" height="40" rx="4" fill="rgba(100,116,139,0.15)" stroke="rgba(100,116,139,0.3)"/>
              <text x="107" y="116" text-anchor="middle" fill="#64748b" font-size="18" font-family="monospace">0</text>
              <rect x="140" y="90" width="50" height="40" rx="4" fill="rgba(100,116,139,0.15)" stroke="rgba(100,116,139,0.3)"/>
              <text x="165" y="116" text-anchor="middle" fill="#64748b" font-size="18" font-family="monospace">0</text>
              <rect x="198" y="90" width="50" height="40" rx="4" fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.6)" stroke-width="2"/>
              <text x="223" y="116" text-anchor="middle" fill="#60a5fa" font-size="18" font-weight="bold" font-family="monospace">2</text>
              <!-- Row 2 -->
              <rect x="82" y="138" width="50" height="40" rx="4" fill="rgba(100,116,139,0.15)" stroke="rgba(100,116,139,0.3)"/>
              <text x="107" y="164" text-anchor="middle" fill="#64748b" font-size="18" font-family="monospace">0</text>
              <rect x="140" y="138" width="50" height="40" rx="4" fill="rgba(100,116,139,0.15)" stroke="rgba(100,116,139,0.3)"/>
              <text x="165" y="164" text-anchor="middle" fill="#64748b" font-size="18" font-family="monospace">0</text>
              <rect x="198" y="138" width="50" height="40" rx="4" fill="rgba(100,116,139,0.15)" stroke="rgba(100,116,139,0.3)"/>
              <text x="223" y="164" text-anchor="middle" fill="#64748b" font-size="18" font-family="monospace">0</text>
              <!-- 矩阵方括号右 -->
              <line x1="255" y1="35" x2="245" y2="35" stroke="#f59e0b" stroke-width="2.5"/>
              <line x1="255" y1="35" x2="255" y2="215" stroke="#f59e0b" stroke-width="2.5"/>
              <line x1="255" y1="215" x2="245" y2="215" stroke="#f59e0b" stroke-width="2.5"/>
              <!-- 行标注 -->
              <text x="268" y="68" fill="#94a3b8" font-size="10" font-family="monospace">← 第0行取a₁</text>
              <text x="268" y="116" fill="#94a3b8" font-size="10" font-family="monospace">← 第1行取2a₂</text>
              <text x="268" y="164" fill="#94a3b8" font-size="10" font-family="monospace">← 第2行取0</text>

              <!-- 乘号 -->
              <text x="295" y="115" fill="#60a5fa" font-size="24" font-weight="bold" font-family="monospace">×</text>

              <!-- 向量 v -->
              <text x="325" y="25" fill="#60a5fa" font-size="14" font-weight="bold" font-family="monospace">v =</text>
              <line x1="348" y1="35" x2="358" y2="35" stroke="#60a5fa" stroke-width="2"/>
              <line x1="348" y1="35" x2="348" y2="215" stroke="#60a5fa" stroke-width="2"/>
              <line x1="348" y1="215" x2="358" y2="215" stroke="#60a5fa" stroke-width="2"/>
              <rect x="365" y="42" width="50" height="40" rx="4" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.4)"/>
              <text x="390" y="68" text-anchor="middle" fill="#22d3ee" font-size="18" font-family="monospace">3</text>
              <rect x="365" y="90" width="50" height="40" rx="4" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.4)"/>
              <text x="390" y="116" text-anchor="middle" fill="#60a5fa" font-size="18" font-family="monospace">2</text>
              <rect x="365" y="138" width="50" height="40" rx="4" fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.4)"/>
              <text x="390" y="164" text-anchor="middle" fill="#c084fc" font-size="18" font-family="monospace">5</text>
              <line x1="420" y1="35" x2="410" y2="35" stroke="#60a5fa" stroke-width="2"/>
              <line x1="420" y1="35" x2="420" y2="215" stroke="#60a5fa" stroke-width="2"/>
              <line x1="420" y1="215" x2="410" y2="215" stroke="#60a5fa" stroke-width="2"/>
              <!-- 向量标注 -->
              <text x="428" y="68" fill="#22d3ee" font-size="10" font-family="monospace">a₀=3</text>
              <text x="428" y="116" fill="#60a5fa" font-size="10" font-family="monospace">a₁=2</text>
              <text x="428" y="164" fill="#c084fc" font-size="10" font-family="monospace">a₂=5</text>

              <!-- 等号 -->
              <text x="465" y="115" fill="#9ca3af" font-size="24" font-weight="bold" font-family="monospace">=</text>

              <!-- 结果向量 -->
              <text x="495" y="25" fill="#4ade80" font-size="14" font-weight="bold" font-family="monospace">v' =</text>
              <line x1="528" y1="35" x2="538" y2="35" stroke="#4ade80" stroke-width="2"/>
              <line x1="528" y1="35" x2="528" y2="215" stroke="#4ade80" stroke-width="2"/>
              <line x1="528" y1="215" x2="538" y2="215" stroke="#4ade80" stroke-width="2"/>
              <rect x="545" y="42" width="50" height="40" rx="4" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.5)" stroke-width="1.5"/>
              <text x="570" y="68" text-anchor="middle" fill="#4ade80" font-size="18" font-weight="bold" font-family="monospace">2</text>
              <rect x="545" y="90" width="50" height="40" rx="4" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.5)" stroke-width="1.5"/>
              <text x="570" y="116" text-anchor="middle" fill="#4ade80" font-size="18" font-weight="bold" font-family="monospace">10</text>
              <rect x="545" y="138" width="50" height="40" rx="4" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.5)" stroke-width="1.5"/>
              <text x="570" y="164" text-anchor="middle" fill="#4ade80" font-size="18" font-weight="bold" font-family="monospace">0</text>
              <line x1="600" y1="35" x2="590" y2="35" stroke="#4ade80" stroke-width="2"/>
              <line x1="600" y1="35" x2="600" y2="215" stroke="#4ade80" stroke-width="2"/>
              <line x1="600" y1="215" x2="590" y2="215" stroke="#4ade80" stroke-width="2"/>

              <!-- 结果对照 -->
              <text x="30" y="250" fill="#94a3b8" font-size="12" font-family="monospace">验证: [2, 10, 0]ᵀ → f'(x) = 2 + 10x</text>
              <text x="370" y="250" fill="#4ade80" font-size="14" font-weight="bold" font-family="monospace">✓ 与 d/dx(3+2x+5x²) = 2+10x 完全一致！</text>
            </svg>
          </div>
        </div>
        <!-- 右：推导步骤 + D的结构 -->
        <div class="flex flex-col gap-4">
          <div class="bg-slate-900/80 border border-cyan-500/20 rounded-xl p-4">
            <div class="text-cyan-400 font-bold text-[15px] mb-2">推导过程</div>
            <div class="space-y-2">
              <div class="bg-black/30 rounded-lg p-3 border border-cyan-500/10">
                <div class="text-gray-400 text-[12px] mb-1">Step 1: 微分前后系数对比</div>
                <div class="font-mono text-[13px]">
                  <span class="text-cyan-300">f(x) = a₀+a₁x+a₂x²</span> → <span class="text-blue-300">[a₀, a₁, a₂]ᵀ</span>
                </div>
                <div class="font-mono text-[13px]">
                  <span class="text-cyan-300">f'(x) = a₁+2a₂x</span> → <span class="text-green-300">[a₁, 2a₂, 0]ᵀ</span>
                </div>
              </div>
              <div class="bg-black/30 rounded-lg p-3 border border-amber-500/10">
                <div class="text-amber-300 text-[12px] mb-1">Step 2: 反推 D 使得 D·v = v'</div>
                <div class="font-mono text-[13px] text-amber-300">
                  第0行: 0·a₀ + <span class="text-cyan-400 font-bold">1</span>·a₁ + 0·a₂ = a₁
                </div>
                <div class="font-mono text-[13px] text-amber-300">
                  第1行: 0·a₀ + 0·a₁ + <span class="text-blue-400 font-bold">2</span>·a₂ = 2a₂
                </div>
                <div class="font-mono text-[13px] text-amber-300">
                  第2行: 0·a₀ + 0·a₁ + 0·a₂ = 0
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-green-500/10 to-green-900/5 border border-green-500/30 rounded-xl p-4 flex-1 flex flex-col justify-center">
            <div class="text-green-400 font-bold text-[17px] mb-2">关键观察</div>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span class="text-gray-300 text-[14px]">D 的非零元素恰在<span class="text-cyan-400 font-bold">次对角线</span>上</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span class="text-gray-300 text-[14px]">第 i 行的值为 <span class="text-blue-400 font-bold font-mono">i</span>（对应幂次降 1 的系数）</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span class="text-gray-300 text-[14px]">第 0 列全为 0：微分<span class="text-amber-400 font-bold">消去常数项</span></span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <span class="text-gray-300 text-[14px]">最后一行全为 0：最高次项<span class="text-green-400 font-bold">导数为常数</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(5,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0 opacity-8" style="background: repeating-linear-gradient(0deg, transparent 0px, transparent 19px, rgba(0,255,255,0.03) 19px, rgba(0,255,255,0.03) 20px), repeating-linear-gradient(90deg, transparent 0px, transparent 19px, rgba(0,255,255,0.03) 19px, rgba(0,255,255,0.03) 20px);"></div>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col relative z-10">
      <div class="text-center mb-3">
        <div class="inline-flex items-center gap-2 bg-blue-500/15 px-4 py-1.5 rounded-full mb-2">
          <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span class="text-blue-400 font-mono text-[13px] tracking-wider">INFINITE EXTENSION</span>
        </div>
        <h2 class="text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">
          从 3×3 到 ∞×∞：无限维微分矩阵
        </h2>
      </div>
      <div class="flex-1 grid grid-cols-5 gap-5">
        <!-- 左：无限维矩阵 SVG -->
        <div class="col-span-2 bg-slate-900/90 border border-blue-500/30 rounded-xl p-4 flex flex-col">
          <div class="text-blue-400 font-bold text-[16px] mb-2">无限维矩阵 D</div>
          <svg width="420" height="380" viewBox="0 0 420 380" class="flex-1">
            <!-- 矩阵方括号 -->
            <line x1="15" y1="10" x2="25" y2="10" stroke="#60a5fa" stroke-width="2"/>
            <line x1="15" y1="10" x2="15" y2="350" stroke="#60a5fa" stroke-width="2"/>
            <line x1="15" y1="350" x2="25" y2="350" stroke="#60a5fa" stroke-width="2"/>
            <line x1="395" y1="10" x2="385" y2="10" stroke="#60a5fa" stroke-width="2"/>
            <line x1="395" y1="10" x2="395" y2="350" stroke="#60a5fa" stroke-width="2"/>
            <line x1="395" y1="350" x2="385" y2="350" stroke="#60a5fa" stroke-width="2"/>

            <!-- Row 0 -->
            <rect x="32" y="15" width="50" height="42" rx="4" fill="rgba(239,68,68,0.12)" stroke="rgba(239,68,68,0.3)"/>
            <text x="57" y="42" text-anchor="middle" fill="#f87171" font-size="16" font-family="monospace">0</text>
            <rect x="88" y="15" width="50" height="42" rx="4" fill="rgba(6,182,212,0.2)" stroke="rgba(6,182,212,0.6)" stroke-width="2"/>
            <text x="113" y="42" text-anchor="middle" fill="#22d3ee" font-size="16" font-weight="bold" font-family="monospace">1</text>
            <rect x="144" y="15" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="169" y="42" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="200" y="15" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="225" y="42" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="256" y="15" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="281" y="42" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <text x="325" y="42" fill="#4b5563" font-size="14" font-family="monospace">...</text>

            <!-- Row 1 -->
            <rect x="32" y="63" width="50" height="42" rx="4" fill="rgba(239,68,68,0.12)" stroke="rgba(239,68,68,0.3)"/>
            <text x="57" y="90" text-anchor="middle" fill="#f87171" font-size="16" font-family="monospace">0</text>
            <rect x="88" y="63" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="113" y="90" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="144" y="63" width="50" height="42" rx="4" fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.6)" stroke-width="2"/>
            <text x="169" y="90" text-anchor="middle" fill="#60a5fa" font-size="16" font-weight="bold" font-family="monospace">2</text>
            <rect x="200" y="63" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="225" y="90" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="256" y="63" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="281" y="90" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <text x="325" y="90" fill="#4b5563" font-size="14" font-family="monospace">...</text>

            <!-- Row 2 -->
            <rect x="32" y="111" width="50" height="42" rx="4" fill="rgba(239,68,68,0.12)" stroke="rgba(239,68,68,0.3)"/>
            <text x="57" y="138" text-anchor="middle" fill="#f87171" font-size="16" font-family="monospace">0</text>
            <rect x="88" y="111" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="113" y="138" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="144" y="111" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="169" y="138" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="200" y="111" width="50" height="42" rx="4" fill="rgba(168,85,247,0.2)" stroke="rgba(168,85,247,0.6)" stroke-width="2"/>
            <text x="225" y="138" text-anchor="middle" fill="#c084fc" font-size="16" font-weight="bold" font-family="monospace">3</text>
            <rect x="256" y="111" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="281" y="138" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <text x="325" y="138" fill="#4b5563" font-size="14" font-family="monospace">...</text>

            <!-- Row 3 -->
            <rect x="32" y="159" width="50" height="42" rx="4" fill="rgba(239,68,68,0.12)" stroke="rgba(239,68,68,0.3)"/>
            <text x="57" y="186" text-anchor="middle" fill="#f87171" font-size="16" font-family="monospace">0</text>
            <rect x="88" y="159" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="113" y="186" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="144" y="159" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="169" y="186" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="200" y="159" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="225" y="186" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="256" y="159" width="50" height="42" rx="4" fill="rgba(245,158,11,0.2)" stroke="rgba(245,158,11,0.6)" stroke-width="2"/>
            <text x="281" y="186" text-anchor="middle" fill="#fbbf24" font-size="16" font-weight="bold" font-family="monospace">4</text>
            <text x="325" y="186" fill="#4b5563" font-size="14" font-family="monospace">...</text>

            <!-- Row 4 -->
            <rect x="32" y="207" width="50" height="42" rx="4" fill="rgba(239,68,68,0.12)" stroke="rgba(239,68,68,0.3)"/>
            <text x="57" y="234" text-anchor="middle" fill="#f87171" font-size="16" font-family="monospace">0</text>
            <rect x="88" y="207" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="113" y="234" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="144" y="207" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="169" y="234" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="200" y="207" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="225" y="234" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="256" y="207" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="281" y="234" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="312" y="207" width="50" height="42" rx="4" fill="rgba(34,197,94,0.2)" stroke="rgba(34,197,94,0.6)" stroke-width="2"/>
            <text x="337" y="234" text-anchor="middle" fill="#4ade80" font-size="16" font-weight="bold" font-family="monospace">5</text>

            <!-- Ellipsis row -->
            <text x="57" y="280" text-anchor="middle" fill="#4b5563" font-size="14">⋮</text>
            <text x="113" y="280" text-anchor="middle" fill="#4b5563" font-size="14">⋮</text>
            <text x="169" y="280" text-anchor="middle" fill="#4b5563" font-size="14">⋮</text>
            <text x="225" y="280" text-anchor="middle" fill="#4b5563" font-size="14">⋮</text>
            <text x="281" y="280" text-anchor="middle" fill="#4b5563" font-size="14">⋮</text>
            <text x="337" y="280" text-anchor="middle" fill="#4b5563" font-size="14">⋱</text>

            <!-- 第0列红色高亮标注 -->
            <line x1="25" y1="5" x2="25" y2="260" stroke="#ef4444" stroke-width="3" opacity="0.4"/>
            <text x="20" y="300" text-anchor="middle" fill="#f87171" font-size="11" font-family="monospace">全0列</text>
            <text x="20" y="316" text-anchor="middle" fill="#f87171" font-size="10" font-family="sans-serif">← D⁻¹ 不存在</text>

            <!-- 次对角线高亮 -->
            <line x1="113" y1="15" x2="337" y2="234" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,3" opacity="0.5"/>
            <text x="370" y="130" fill="#fbbf24" font-size="11" font-weight="bold" font-family="monospace">D(i,i+1)=i</text>

            <!-- 规律总结 -->
            <rect x="30" y="320" width="360" height="45" rx="8" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.3)" stroke-width="1"/>
            <text x="210" y="340" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold" font-family="monospace">规律：次对角线元素 = 1, 2, 3, 4, 5, ...</text>
            <text x="210" y="356" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">D 的第 i 行第 i+1 列元素为 i，其余全为 0</text>
          </svg>
        </div>
        <!-- 右：验证 + 关键意义 -->
        <div class="col-span-3 flex flex-col gap-4">
          <div class="bg-slate-900/90 border border-green-500/30 rounded-xl p-4 flex-1">
            <div class="text-green-400 font-bold text-[16px] mb-2">验证示例</div>
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-black/30 rounded-lg p-3 border border-green-500/10">
                <div class="text-gray-300 font-mono text-[13px] mb-1">f(x) = 1+2x+3x²+4x³</div>
                <div class="text-gray-500 font-mono text-[12px]">v = [1, 2, 3, 4, 0, ...]ᵀ</div>
                <div class="text-green-300 font-mono text-[12px] mt-1">D·v = [2, 6, 12, 0, ...]ᵀ</div>
                <div class="text-green-400 font-mono text-[12px]">→ f'(x) = 2+6x+12x² ✓</div>
              </div>
              <div class="bg-black/30 rounded-lg p-3 border border-green-500/10">
                <div class="text-gray-300 font-mono text-[13px] mb-1">f(x) = x⁵</div>
                <div class="text-gray-500 font-mono text-[12px]">v = [0, 0, 0, 0, 0, 1, ...]ᵀ</div>
                <div class="text-green-300 font-mono text-[12px] mt-1">D·v = [0, 0, 0, 0, 5, 0, ...]ᵀ</div>
                <div class="text-green-400 font-mono text-[12px]">→ f'(x) = 5x⁴ ✓</div>
              </div>
            </div>
          </div>
          <!-- 3×3 vs ∞×∞ 对比 -->
          <div class="bg-slate-900/80 border border-amber-500/30 rounded-xl p-4">
            <div class="text-amber-400 font-bold text-[15px] mb-2">为什么需要无限维？</div>
            <svg width="530" height="100" viewBox="0 0 530 100">
              <!-- 3×3 -->
              <rect x="10" y="10" width="180" height="80" rx="8" fill="rgba(239,68,68,0.05)" stroke="rgba(239,68,68,0.3)" stroke-width="1"/>
              <text x="100" y="30" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold" font-family="monospace">3×3 矩阵</text>
              <text x="100" y="50" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">只能处理 ≤2次多项式</text>
              <text x="100" y="68" text-anchor="middle" fill="#f87171" font-size="11" font-family="monospace">f(x)=x⁴ → 截断！✗</text>
              <text x="100" y="83" text-anchor="middle" fill="#64748b" font-size="10" font-family="monospace">D·v 丢失高次项</text>

              <!-- 箭头 -->
              <line x1="200" y1="50" x2="240" y2="50" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrInf)"/>
              <text x="220" y="40" fill="#f59e0b" font-size="11" font-weight="bold" font-family="sans-serif">扩展</text>

              <!-- ∞×∞ -->
              <rect x="250" y="10" width="270" height="80" rx="8" fill="rgba(34,197,94,0.05)" stroke="rgba(34,197,94,0.3)" stroke-width="1"/>
              <text x="385" y="30" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="bold" font-family="monospace">∞×∞ 矩阵</text>
              <text x="385" y="50" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">任意次多项式均可正确求导</text>
              <text x="385" y="68" text-anchor="middle" fill="#4ade80" font-size="11" font-family="monospace">f(x)=x⁴ → [0,0,0,4,0,...]ᵀ ✓</text>
              <text x="385" y="83" text-anchor="middle" fill="#4ade80" font-size="10" font-family="monospace">f(x)=x¹⁰⁰ → 同样适用！</text>

              <defs>
                <marker id="arrInf" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f59e0b"/></marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(6,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0" style="background: repeating-linear-gradient(0deg, transparent 0px, transparent 19px, rgba(0,255,255,0.03) 19px, rgba(0,255,255,0.03) 20px), repeating-linear-gradient(90deg, transparent 0px, transparent 19px, rgba(0,255,255,0.03) 19px, rgba(0,255,255,0.03) 20px), radial-gradient(ellipse at 70% 50%, rgba(30,58,138,0.1) 0%, transparent 60%);"></div>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col relative z-10">
      <div class="text-center mb-3">
        <div class="inline-flex items-center gap-2 bg-purple-500/15 px-4 py-1.5 rounded-full mb-2">
          <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span class="text-purple-400 font-mono text-[13px] tracking-wider">BEYOND POLYNOMIALS</span>
        </div>
        <h2 class="text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">
          突破：非多项式函数的矩阵微分
        </h2>
      </div>
      <div class="flex-1 grid grid-cols-5 gap-4">
        <!-- 左：函数曲线 SVG -->
        <div class="col-span-2 bg-slate-900/80 border border-purple-500/30 rounded-xl p-4 flex flex-col">
          <div class="text-purple-400 font-bold text-[15px] mb-2">麦克劳林展开 + 矩阵 D</div>
          <svg width="380" height="350" viewBox="0 0 380 350">
            <!-- 坐标轴 -->
            <line x1="40" y1="170" x2="360" y2="170" stroke="#475569" stroke-width="1"/>
            <line x1="200" y1="10" x2="200" y2="330" stroke="#475569" stroke-width="1"/>
            <text x="355" y="185" fill="#64748b" font-size="10">x</text>
            <text x="205" y="20" fill="#64748b" font-size="10">y</text>
            <!-- 刻度 -->
            <line x1="80" y1="167" x2="80" y2="173" stroke="#475569" stroke-width="0.5"/>
            <line x1="120" y1="167" x2="120" y2="173" stroke="#475569" stroke-width="0.5"/>
            <line x1="160" y1="167" x2="160" y2="173" stroke="#475569" stroke-width="0.5"/>
            <line x1="240" y1="167" x2="240" y2="173" stroke="#475569" stroke-width="0.5"/>
            <line x1="280" y1="167" x2="280" y2="173" stroke="#475569" stroke-width="0.5"/>
            <line x1="320" y1="167" x2="320" y2="173" stroke="#475569" stroke-width="0.5"/>
            <line x1="197" y1="50" x2="203" y2="50" stroke="#475569" stroke-width="0.5"/>
            <line x1="197" y1="90" x2="203" y2="90" stroke="#475569" stroke-width="0.5"/>
            <line x1="197" y1="130" x2="203" y2="130" stroke="#475569" stroke-width="0.5"/>
            <line x1="197" y1="210" x2="203" y2="210" stroke="#475569" stroke-width="0.5"/>
            <line x1="197" y1="250" x2="203" y2="250" stroke="#475569" stroke-width="0.5"/>
            <line x1="197" y1="290" x2="203" y2="290" stroke="#475569" stroke-width="0.5"/>

            <!-- sin(x) 曲线 -->
            <path d="M60 170 Q90 100 120 90 Q150 80 170 110 Q190 140 200 170 Q210 200 230 230 Q250 260 280 250 Q310 240 340 170" fill="none" stroke="#22d3ee" stroke-width="2.5" opacity="0.9"/>
            <text x="345" y="165" fill="#22d3ee" font-size="12" font-style="italic" font-family="serif" font-weight="bold">sin x</text>

            <!-- cos(x) 曲线 -->
            <path d="M60 90 Q90 95 120 130 Q150 165 200 170 Q250 175 280 210 Q310 245 340 250" fill="none" stroke="#f59e0b" stroke-width="2.5" opacity="0.9"/>
            <text x="345" y="245" fill="#f59e0b" font-size="12" font-style="italic" font-family="serif" font-weight="bold">cos x</text>

            <!-- e^x 曲线 -->
            <path d="M60 168 Q120 165 160 155 Q180 148 200 130 Q220 105 240 70 Q260 30 280 10" fill="none" stroke="#4ade80" stroke-width="2.5" opacity="0.9"/>
            <text x="285" y="15" fill="#4ade80" font-size="12" font-style="italic" font-family="serif" font-weight="bold">eˣ</text>

            <!-- D 作用箭头 -->
            <path d="M350 130 C370 130 370 210 350 210" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrDeriv)"/>
            <text x="372" y="175" fill="#f59e0b" font-size="14" font-weight="bold" font-family="monospace">D</text>

            <!-- 底部：系数向量 -->
            <rect x="15" y="300" width="350" height="40" rx="6" fill="rgba(6,182,212,0.05)" stroke="rgba(6,182,212,0.2)" stroke-width="1"/>
            <text x="190" y="320" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">sin → [0,1,0,-1/6,0,1/120,...]ᵀ → D·v → cos ✓</text>
            <text x="190" y="336" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">eˣ → [1,1,1/2,1/6,...]ᵀ → D·v → [1,1,1/2,...]ᵀ = eˣ ✓</text>

            <defs>
              <marker id="arrDeriv" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f59e0b"/></marker>
            </defs>
          </svg>
        </div>
        <!-- 右上：三组验证 -->
        <div class="col-span-3 flex flex-col gap-3">
          <div class="bg-slate-900/80 border border-cyan-500/30 rounded-xl p-3">
            <div class="text-cyan-400 font-bold text-[14px] mb-1">sin(x) → cos(x)</div>
            <div class="grid grid-cols-3 gap-2 font-mono text-[12px]">
              <div class="bg-black/30 rounded p-2 border border-cyan-500/10">
                <div class="text-gray-500 text-[10px]">展开</div>
                <div class="text-gray-400">x - x³/3! + x⁵/5! - ...</div>
              </div>
              <div class="bg-black/30 rounded p-2 border border-cyan-500/10">
                <div class="text-gray-500 text-[10px]">系数向量 v</div>
                <div class="text-cyan-300">[0,1,0,-¹/₆,0,¹/₁₂₀,...]</div>
              </div>
              <div class="bg-black/30 rounded p-2 border border-green-500/10">
                <div class="text-gray-500 text-[10px]">D·v 结果</div>
                <div class="text-green-300">[1,0,-¹/₂,0,¹/₂₄,...] = cos(x) ✓</div>
              </div>
            </div>
          </div>
          <div class="bg-slate-900/80 border border-purple-500/30 rounded-xl p-3">
            <div class="text-purple-400 font-bold text-[14px] mb-1">cos(x) → -sin(x)</div>
            <div class="grid grid-cols-3 gap-2 font-mono text-[12px]">
              <div class="bg-black/30 rounded p-2 border border-purple-500/10">
                <div class="text-gray-500 text-[10px]">展开</div>
                <div class="text-gray-400">1 - x²/2! + x⁴/4! - ...</div>
              </div>
              <div class="bg-black/30 rounded p-2 border border-purple-500/10">
                <div class="text-gray-500 text-[10px]">系数向量 v</div>
                <div class="text-purple-300">[1,0,-¹/₂,0,¹/₂₄,...]</div>
              </div>
              <div class="bg-black/30 rounded p-2 border border-green-500/10">
                <div class="text-gray-500 text-[10px]">D·v 结果</div>
                <div class="text-green-300">[0,-1,0,¹/₆,0,...] = -sin(x) ✓</div>
              </div>
            </div>
          </div>
          <div class="bg-slate-900/80 border border-green-500/30 rounded-xl p-3">
            <div class="text-green-400 font-bold text-[14px] mb-1">eˣ → eˣ （自映射！）</div>
            <div class="grid grid-cols-3 gap-2 font-mono text-[12px]">
              <div class="bg-black/30 rounded p-2 border border-green-500/10">
                <div class="text-gray-500 text-[10px]">展开</div>
                <div class="text-gray-400">1 + x + x²/2! + x³/3! + ...</div>
              </div>
              <div class="bg-black/30 rounded p-2 border border-green-500/10">
                <div class="text-gray-500 text-[10px]">系数向量 v</div>
                <div class="text-green-300">[1,1,¹/₂,¹/₆,¹/₂₄,...]</div>
              </div>
              <div class="bg-black/30 rounded p-2 border border-green-500/10">
                <div class="text-gray-500 text-[10px]">D·v 结果</div>
                <div class="text-green-400 font-bold">[1,1,¹/₂,¹/₆,...] = eˣ ✓</div>
              </div>
            </div>
          </div>
          <!-- 本质揭示 -->
          <div class="bg-gradient-to-br from-cyan-500/10 to-blue-900/10 border border-cyan-500/30 rounded-xl p-4 flex-1">
            <div class="text-cyan-400 font-bold text-[17px] mb-2">本质揭示</div>
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-black/30 rounded-lg p-3 border border-cyan-500/10">
                <div class="text-gray-400 text-[12px] mb-1">微积分语言</div>
                <div class="text-cyan-300 font-mono text-[14px]">d/dx(Σaₙxⁿ) = Σnaₙxⁿ⁻¹</div>
              </div>
              <div class="bg-black/30 rounded-lg p-3 border border-cyan-500/10">
                <div class="text-gray-400 text-[12px] mb-1">矩阵语言</div>
                <div class="text-cyan-300 font-mono text-[14px]">D·[a₀,a₁,a₂,...]ᵀ = [a₁,2a₂,3a₃,...]ᵀ</div>
              </div>
              <div class="col-span-2 bg-black/30 rounded-lg p-3 border border-amber-500/10">
                <div class="text-amber-300 text-[13px]" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">
                  这是<span class="text-amber-400 font-bold">幂级数逐项微分</span>的矩阵形式表达。
                  核心意义：可<span class="text-cyan-400 font-bold">独立于极限</span>定义微分——只需代数操作。
                  前提：函数在 x=0 处<span class="text-purple-400">解析</span>。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(7,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(6, 182, 212, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.08) 1px, transparent 1px); background-size: 50px 50px;"></div>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col relative z-10">
      <div class="text-center mb-3">
        <div class="inline-flex items-center gap-2 bg-orange-500/15 px-4 py-1.5 rounded-full mb-2">
          <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
          <span class="text-orange-400 font-mono text-[13px] tracking-wider">HIGHER ORDER OPERATIONS</span>
        </div>
        <h2 class="text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-cyan-400 to-red-400" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">
          Dⁿ 与 D⁻¹：高阶微分与积分
        </h2>
      </div>
      <div class="flex-1 grid grid-cols-2 gap-6">
        <!-- 左：Dⁿ 高阶微分 + 矩阵结构 SVG -->
        <div class="bg-slate-900/80 border border-orange-500/30 rounded-xl p-4 flex flex-col">
          <div class="text-orange-400 font-bold text-[17px] mb-2">高阶微分：Dⁿ</div>
          <svg width="620" height="265" viewBox="0 0 620 265">
            <!-- D 矩阵 -->
            <text x="10" y="25" fill="#22d3ee" font-size="14" font-weight="bold" font-family="monospace">D =</text>
            <rect x="45" y="5" width="35" height="30" rx="3" fill="rgba(6,182,212,0.2)" stroke="rgba(6,182,212,0.5)" stroke-width="1.5"/>
            <text x="62" y="25" text-anchor="middle" fill="#22d3ee" font-size="13" font-weight="bold" font-family="monospace">1</text>
            <rect x="85" y="5" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="102" y="25" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="125" y="5" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="142" y="25" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="45" y="40" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="62" y="60" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="85" y="40" width="35" height="30" rx="3" fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.5)" stroke-width="1.5"/>
            <text x="102" y="60" text-anchor="middle" fill="#60a5fa" font-size="13" font-weight="bold" font-family="monospace">2</text>
            <rect x="125" y="40" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="142" y="60" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="45" y="75" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="62" y="95" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="85" y="75" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="102" y="95" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="125" y="75" width="35" height="30" rx="3" fill="rgba(168,85,247,0.2)" stroke="rgba(168,85,247,0.5)" stroke-width="1.5"/>
            <text x="142" y="95" text-anchor="middle" fill="#c084fc" font-size="13" font-weight="bold" font-family="monospace">3</text>
            <text x="170" y="38" fill="#94a3b8" font-size="10">一阶微分</text>

            <!-- 箭头 D→D² -->
            <line x1="195" y1="55" x2="225" y2="55" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrPow)"/>

            <!-- D² 矩阵 -->
            <text x="240" y="25" fill="#f59e0b" font-size="14" font-weight="bold" font-family="monospace">D² =</text>
            <rect x="285" y="5" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="302" y="25" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="325" y="5" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="342" y="25" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="365" y="5" width="35" height="30" rx="3" fill="rgba(245,158,11,0.2)" stroke="rgba(245,158,11,0.5)" stroke-width="1.5"/>
            <text x="382" y="25" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold" font-family="monospace">2</text>
            <rect x="285" y="40" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="302" y="60" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="325" y="40" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="342" y="60" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="365" y="40" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="382" y="60" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="285" y="75" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="302" y="95" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="325" y="75" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="342" y="95" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="365" y="75" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="382" y="95" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <text x="410" y="38" fill="#94a3b8" font-size="10">二阶微分</text>

            <!-- 箭头 D²→D³ (折线：向下再向左) -->
            <line x1="400" y1="110" x2="400" y2="150" stroke="#ef4444" stroke-width="2.5"/>
            <line x1="400" y1="150" x2="195" y2="150" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrPowR)"/>

            <!-- D³ 矩阵 - 在 D 正下方 -->
            <text x="10" y="140" fill="#ef4444" font-size="14" font-weight="bold" font-family="monospace">D³ =</text>
            <rect x="45" y="120" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="62" y="140" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="85" y="120" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="102" y="140" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="125" y="120" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="142" y="140" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="45" y="155" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="62" y="175" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="85" y="155" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="102" y="175" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="125" y="155" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="142" y="175" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="45" y="190" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="62" y="210" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="85" y="190" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="102" y="210" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="125" y="190" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="142" y="210" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <text x="45" y="235" fill="#ef4444" font-size="10" font-weight="bold">全零矩阵</text>
            <text x="45" y="248" fill="#94a3b8" font-size="9">(对二次多项式)</text>

            <defs>
              <marker id="arrPow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f59e0b"/></marker>
              <marker id="arrPowR" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#ef4444"/></marker>
            </defs>
          </svg>
          <!-- 验证示例 -->
          <div class="bg-black/30 rounded-lg p-3 border border-orange-500/10 flex-1 mt-6">
            <div class="text-gray-400 text-[12px] mb-2">验证：f(x) = x⁴</div>
            <div class="space-y-2.5 font-mono text-[13px]">
              <div class="flex items-center gap-2">
                <div class="text-gray-500 w-[90px]">v =</div>
                <div class="text-gray-300">[0,0,0,0,1,...]ᵀ</div>
              </div>
              <div class="flex items-center gap-2">
                <div class="text-orange-300 w-[90px]">D·v =</div>
                <div class="text-orange-300">[0,0,0,4,0,...]ᵀ</div>
                <div class="text-gray-500">→ f' = 4x³</div>
              </div>
              <div class="flex items-center gap-2">
                <div class="text-red-300 w-[90px]">D²·v =</div>
                <div class="text-red-300">[0,0,12,0,...]ᵀ</div>
                <div class="text-gray-500">→ f'' = 12x²</div>
              </div>
              <div class="flex items-center gap-2">
                <div class="text-red-400 w-[90px]">D³·v =</div>
                <div class="text-red-400">[0,24,0,...]ᵀ</div>
                <div class="text-gray-500">→ f''' = 24x</div>
              </div>
              <div class="flex items-center gap-2">
                <div class="text-purple-400 w-[90px]">D⁴·v =</div>
                <div class="text-purple-400">[24,0,...]ᵀ</div>
                <div class="text-gray-500">→ f⁽⁴⁾ = 24</div>
              </div>
            </div>
          </div>
          <div class="mt-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-2.5 border border-orange-500/20">
            <div class="text-orange-300 text-[13px]" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">
              <span class="font-bold">运算同构性：</span>矩阵的幂运算 ↔ 微分运算的重复
            </div>
          </div>
        </div>
        <!-- 右：D⁻¹ 失效可视化 -->
        <div class="bg-slate-900/80 border border-red-500/30 rounded-xl p-4 flex flex-col">
          <div class="text-red-400 font-bold text-[17px] mb-2">积分 = D⁻¹ ？</div>
          <!-- 信息损失图 -->
          <svg width="560" height="160" viewBox="0 0 560 160">
            <!-- 左：多个函数映射到同一导数 -->
            <rect x="10" y="15" width="110" height="130" rx="8" fill="rgba(6,182,212,0.05)" stroke="rgba(6,182,212,0.3)" stroke-width="1"/>
            <text x="65" y="35" text-anchor="middle" fill="#22d3ee" font-size="11" font-weight="bold">函数空间</text>
            <rect x="20" y="42" width="90" height="22" rx="4" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.3)"/>
            <text x="65" y="58" text-anchor="middle" fill="#67e8f9" font-size="11" font-style="italic" font-family="serif">f(x)</text>
            <rect x="20" y="70" width="90" height="22" rx="4" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.3)"/>
            <text x="65" y="86" text-anchor="middle" fill="#67e8f9" font-size="11" font-style="italic" font-family="serif">f(x)+1</text>
            <rect x="20" y="98" width="90" height="22" rx="4" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.3)"/>
            <text x="65" y="114" text-anchor="middle" fill="#67e8f9" font-size="11" font-style="italic" font-family="serif">f(x)+C</text>

            <!-- d/dx 箭头（多对一） -->
            <line x1="125" y1="53" x2="200" y2="80" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrInfo1)"/>
            <line x1="125" y1="81" x2="200" y2="80" stroke="#f59e0b" stroke-width="2"/>
            <line x1="125" y1="109" x2="200" y2="80" stroke="#f59e0b" stroke-width="2"/>
            <text x="162" y="65" fill="#f59e0b" font-size="11" font-weight="bold" font-family="monospace">d/dx</text>

            <!-- 右：同一导数 -->
            <rect x="210" y="55" width="110" height="50" rx="8" fill="rgba(34,197,94,0.05)" stroke="rgba(34,197,94,0.3)" stroke-width="1"/>
            <text x="265" y="75" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">导数空间</text>
            <rect x="220" y="82" width="90" height="22" rx="4" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.4)"/>
            <text x="265" y="98" text-anchor="middle" fill="#86efac" font-size="11" font-style="italic" font-family="serif">f'(x)</text>

            <!-- 不可逆标记 -->
            <line x1="265" y1="112" x2="265" y2="135" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2"/>
            <text x="265" y="150" text-anchor="middle" fill="#ef4444" font-size="11" font-weight="bold" font-family="monospace">? → 无法唯一恢复</text>

            <!-- 向量空间对照 -->
            <rect x="340" y="15" width="100" height="130" rx="8" fill="rgba(59,130,246,0.05)" stroke="rgba(59,130,246,0.3)" stroke-width="1"/>
            <text x="390" y="35" text-anchor="middle" fill="#60a5fa" font-size="11" font-weight="bold">向量空间</text>
            <rect x="350" y="42" width="80" height="22" rx="4" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.3)"/>
            <text x="390" y="58" text-anchor="middle" fill="#93c5fd" font-size="10" font-family="monospace">[3,2,5]ᵀ</text>
            <rect x="350" y="70" width="80" height="22" rx="4" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.3)"/>
            <text x="390" y="86" text-anchor="middle" fill="#93c5fd" font-size="10" font-family="monospace">[7,2,5]ᵀ</text>
            <rect x="350" y="98" width="80" height="22" rx="4" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.3)"/>
            <text x="390" y="114" text-anchor="middle" fill="#93c5fd" font-size="10" font-family="monospace">[C,2,5]ᵀ</text>

            <!-- D 箭头 -->
            <line x1="445" y1="53" x2="490" y2="80" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrInfo2)"/>
            <line x1="445" y1="81" x2="490" y2="80" stroke="#f59e0b" stroke-width="2"/>
            <line x1="445" y1="109" x2="490" y2="80" stroke="#f59e0b" stroke-width="2"/>
            <text x="467" y="65" fill="#f59e0b" font-size="11" font-weight="bold" font-family="monospace">D·</text>

            <!-- 结果 -->
            <rect x="500" y="55" width="50" height="50" rx="8" fill="rgba(34,197,94,0.05)" stroke="rgba(34,197,94,0.3)" stroke-width="1"/>
            <text x="525" y="78" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold" font-family="monospace">[2,10,0]ᵀ</text>
            <text x="525" y="98" text-anchor="middle" fill="#4ade80" font-size="9" font-family="monospace">同！</text>

            <defs>
              <marker id="arrInfo1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f59e0b"/></marker>
              <marker id="arrInfo2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f59e0b"/></marker>
            </defs>
          </svg>
          <!-- 三重原因 -->
          <div class="bg-red-500/10 border-2 border-red-500/40 rounded-xl p-4 mt-2">
            <div class="text-red-400 font-bold text-[16px] mb-2">关键结论：D 不存在严格逆矩阵！</div>
            <div class="space-y-2">
              <div class="flex items-start gap-2">
                <div class="text-amber-400 text-[14px] mt-0.5 font-bold">① 矩阵层面</div>
                <div class="text-gray-300 text-[13px]">D 第一列全为 0 → D'·D 第1列恒为 [0,0,...]ᵀ ≠ I</div>
              </div>
              <div class="flex items-start gap-2">
                <div class="text-purple-400 text-[14px] mt-0.5 font-bold">② 微积分本质</div>
                <div class="text-gray-300 text-[13px]">微分丢失常数项：f(x) 与 f(x)+C 的导数相同</div>
              </div>
              <div class="flex items-start gap-2">
                <div class="text-green-400 text-[14px] mt-0.5 font-bold">③ 推论</div>
                <div class="text-gray-300 text-[13px]">积分需额外初始条件（不定积分的 +C）</div>
              </div>
            </div>
          </div>
          <div class="mt-auto bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-2.5 border border-cyan-500/20">
            <div class="text-cyan-300 text-[13px]" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">
              <span class="font-bold">深层启示：</span>信息不可逆性在矩阵和微积分两个层面完美对应
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(8,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(6, 182, 212, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.08) 1px, transparent 1px); background-size: 50px 50px;"></div>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col relative z-10">
      <div class="text-center mb-3">
        <div class="inline-flex items-center gap-2 bg-indigo-500/15 px-4 py-1.5 rounded-full mb-2">
          <div class="w-2 h-2 bg-indigo-400 rounded-full"></div>
          <span class="text-indigo-400 font-mono text-[13px] tracking-wider">DIFFERENT BASES</span>
        </div>
        <h2 class="text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">
          不同基下的微分矩阵
        </h2>
      </div>
      <div class="flex-1 flex flex-col gap-4">
        <!-- 三种基的矩阵结构对比 SVG -->
        <div class="bg-slate-900/80 border border-indigo-500/30 rounded-xl p-4 flex-1">
          <div class="text-indigo-400 font-bold text-[16px] mb-2">三种基 → 三种矩阵结构</div>
          <svg width="1260" height="310" viewBox="0 0 1260 310">
            <!-- 幂级数基 -->
            <rect x="10" y="10" width="390" height="290" rx="12" fill="rgba(6,182,212,0.03)" stroke="rgba(6,182,212,0.3)" stroke-width="1.5"/>
            <text x="205" y="35" text-anchor="middle" fill="#22d3ee" font-size="14" font-weight="bold">幂级数基 {1, x, x², x³, ...}</text>
            <!-- 矩阵网格 6x6 -->
            <g transform="translate(45, 50)">
              <!-- 全0背景 -->
              <rect x="0" y="0" width="300" height="240" rx="4" fill="rgba(100,116,139,0.05)" stroke="rgba(100,116,139,0.15)"/>
              <!-- 0 cells -->
              <rect x="5" y="5" width="46" height="36" rx="3" fill="rgba(100,116,139,0.08)" stroke="rgba(100,116,139,0.15)"/>
              <text x="28" y="28" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
              <!-- 1 (superdiagonal) -->
              <rect x="55" y="5" width="46" height="36" rx="3" fill="rgba(6,182,212,0.25)" stroke="rgba(6,182,212,0.6)" stroke-width="2"/>
              <text x="78" y="28" text-anchor="middle" fill="#22d3ee" font-size="15" font-weight="bold" font-family="monospace">1</text>
              <rect x="115" y="45" width="46" height="36" rx="3" fill="rgba(59,130,246,0.25)" stroke="rgba(59,130,246,0.6)" stroke-width="2"/>
              <text x="138" y="68" text-anchor="middle" fill="#60a5fa" font-size="15" font-weight="bold" font-family="monospace">2</text>
              <rect x="175" y="85" width="46" height="36" rx="3" fill="rgba(168,85,247,0.25)" stroke="rgba(168,85,247,0.6)" stroke-width="2"/>
              <text x="198" y="108" text-anchor="middle" fill="#c084fc" font-size="15" font-weight="bold" font-family="monospace">3</text>
              <rect x="235" y="125" width="46" height="36" rx="3" fill="rgba(245,158,11,0.25)" stroke="rgba(245,158,11,0.6)" stroke-width="2"/>
              <text x="258" y="148" text-anchor="middle" fill="#fbbf24" font-size="15" font-weight="bold" font-family="monospace">4</text>
              <!-- 次对角线标注 -->
              <line x1="55" y1="20" x2="258" y2="143" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,3" opacity="0.6"/>
            </g>
            <text x="205" y="290" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="monospace">次对角线结构 · 稀疏 · D(i,i+1)=i</text>

            <!-- 傅里叶基 -->
            <rect x="420" y="10" width="400" height="290" rx="12" fill="rgba(168,85,247,0.03)" stroke="rgba(168,85,247,0.3)" stroke-width="1.5"/>
            <text x="620" y="35" text-anchor="middle" fill="#c084fc" font-size="14" font-weight="bold">傅里叶基 {1, sin x, cos x, sin 2x, ...}</text>
            <g transform="translate(470, 50)">
              <rect x="0" y="0" width="300" height="240" rx="4" fill="rgba(100,116,139,0.05)" stroke="rgba(100,116,139,0.15)"/>
              <!-- 第0行：常数项导数为0 -->
              <rect x="5" y="5" width="46" height="36" rx="3" fill="rgba(100,116,139,0.08)" stroke="rgba(100,116,139,0.15)"/>
              <text x="28" y="28" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
              <!-- 分块 [[0,-1],[1,0]] -->
              <rect x="55" y="45" width="46" height="36" rx="3" fill="rgba(100,116,139,0.08)" stroke="rgba(100,116,139,0.15)"/>
              <text x="78" y="68" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
              <rect x="105" y="45" width="46" height="36" rx="3" fill="rgba(168,85,247,0.2)" stroke="rgba(168,85,247,0.5)" stroke-width="1.5"/>
              <text x="128" y="68" text-anchor="middle" fill="#c084fc" font-size="13" font-weight="bold" font-family="monospace">-1</text>
              <rect x="55" y="85" width="46" height="36" rx="3" fill="rgba(168,85,247,0.2)" stroke="rgba(168,85,247,0.5)" stroke-width="1.5"/>
              <text x="78" y="108" text-anchor="middle" fill="#c084fc" font-size="13" font-weight="bold" font-family="monospace">1</text>
              <rect x="105" y="85" width="46" height="36" rx="3" fill="rgba(100,116,139,0.08)" stroke="rgba(100,116,139,0.15)"/>
              <text x="128" y="108" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
              <!-- 分块 2 -->
              <rect x="155" y="125" width="46" height="36" rx="3" fill="rgba(100,116,139,0.08)" stroke="rgba(100,116,139,0.15)"/>
              <text x="178" y="148" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
              <rect x="205" y="125" width="46" height="36" rx="3" fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.5)" stroke-width="1.5"/>
              <text x="228" y="148" text-anchor="middle" fill="#60a5fa" font-size="13" font-weight="bold" font-family="monospace">-2</text>
              <rect x="155" y="165" width="46" height="36" rx="3" fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.5)" stroke-width="1.5"/>
              <text x="178" y="188" text-anchor="middle" fill="#60a5fa" font-size="13" font-weight="bold" font-family="monospace">2</text>
              <rect x="205" y="165" width="46" height="36" rx="3" fill="rgba(100,116,139,0.08)" stroke="rgba(100,116,139,0.15)"/>
              <text x="228" y="188" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
              <!-- 分块虚线框 -->
              <rect x="50" y="40" width="106" height="86" rx="6" fill="none" stroke="#c084fc" stroke-width="1.5" stroke-dasharray="4,2"/>
              <text x="165" y="55" fill="#c084fc" font-size="10" font-family="monospace">n=1</text>
              <rect x="150" y="120" width="106" height="86" rx="6" fill="none" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="4,2"/>
              <text x="265" y="135" fill="#60a5fa" font-size="10" font-family="monospace">n=2</text>
            </g>
            <text x="620" y="290" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="monospace">分块对角结构 · [[0,-n],[n,0]]</text>

            <!-- 勒让德基 -->
            <rect x="840" y="10" width="410" height="290" rx="12" fill="rgba(245,158,11,0.03)" stroke="rgba(245,158,11,0.3)" stroke-width="1.5"/>
            <text x="1045" y="35" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="bold">勒让德基 {P₀, P₁, P₂, ...}</text>
            <g transform="translate(890, 50)">
              <rect x="0" y="0" width="300" height="240" rx="4" fill="rgba(100,116,139,0.05)" stroke="rgba(100,116,139,0.15)"/>
              <!-- 密集矩阵（很多非零元素） -->
              <rect x="5" y="5" width="46" height="36" rx="3" fill="rgba(100,116,139,0.08)" stroke="rgba(100,116,139,0.15)"/>
              <text x="28" y="28" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
              <rect x="55" y="5" width="46" height="36" rx="3" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.3)"/>
              <text x="78" y="28" text-anchor="middle" fill="#fbbf24" font-size="12" font-family="monospace">★</text>
              <rect x="155" y="5" width="46" height="36" rx="3" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.3)"/>
              <text x="178" y="28" text-anchor="middle" fill="#fbbf24" font-size="12" font-family="monospace">★</text>
              <rect x="5" y="45" width="46" height="36" rx="3" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.3)"/>
              <text x="28" y="68" text-anchor="middle" fill="#fbbf24" font-size="12" font-family="monospace">★</text>
              <rect x="55" y="45" width="46" height="36" rx="3" fill="rgba(100,116,139,0.08)" stroke="rgba(100,116,139,0.15)"/>
              <text x="78" y="68" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
              <rect x="105" y="45" width="46" height="36" rx="3" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.3)"/>
              <text x="128" y="68" text-anchor="middle" fill="#fbbf24" font-size="12" font-family="monospace">★</text>
              <rect x="205" y="45" width="46" height="36" rx="3" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.3)"/>
              <text x="228" y="68" text-anchor="middle" fill="#fbbf24" font-size="12" font-family="monospace">★</text>
              <rect x="5" y="85" width="46" height="36" rx="3" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.2)"/>
              <rect x="55" y="85" width="46" height="36" rx="3" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.2)"/>
              <rect x="105" y="85" width="46" height="36" rx="3" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.2)"/>
              <rect x="155" y="85" width="46" height="36" rx="3" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.2)"/>
              <rect x="205" y="85" width="46" height="36" rx="3" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.2)"/>
              <rect x="255" y="85" width="46" height="36" rx="3" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.2)"/>
              <text x="150" y="108" text-anchor="middle" fill="#fbbf24" font-size="12" font-family="monospace">★ · ★ · ★ · ★ · ★</text>
              <!-- 更多行省略 -->
              <text x="150" y="150" text-anchor="middle" fill="#64748b" font-size="24">⋮</text>
              <text x="150" y="180" text-anchor="middle" fill="#64748b" font-size="24">⋮</text>
              <!-- 密集标注 -->
              <rect x="10" y="195" width="280" height="35" rx="6" fill="rgba(245,158,11,0.05)" stroke="rgba(245,158,11,0.2)"/>
              <text x="150" y="217" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">★ = 非零元素（不再稀疏）</text>
            </g>
            <text x="1045" y="290" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="monospace">密集结构 · 不再是次对角形式</text>
          </svg>
        </div>
        <!-- 底部总结 -->
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 rounded-xl p-4">
            <div class="text-indigo-300 text-[14px]" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">
              <span class="font-bold">类比：</span>同一向量在不同坐标系下有不同的坐标表示，同一算子在不同基下有不同的矩阵。选择基 = 选择"视角"。
            </div>
          </div>
          <div class="bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/20 rounded-xl p-4">
            <div class="text-cyan-300 text-[14px]" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">
              <span class="font-bold">实用意义：</span>傅里叶基下的分块对角结构可用于<span class="text-cyan-400 font-bold">谱方法</span>求解微分方程，幂级数基适用于<span class="text-cyan-400 font-bold">解析函数</span>。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(9,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0 opacity-15" style="background-image: linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px); background-size: 40px 40px;"></div>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col relative z-10">
      <div class="text-center mb-4">
        <div class="inline-flex items-center gap-2 bg-cyan-500/15 px-4 py-1.5 rounded-full mb-2">
          <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
          <span class="text-cyan-400 font-mono text-[13px] tracking-wider">SUMMARY</span>
        </div>
        <h2 class="text-[38px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">
          核心收获
        </h2>
      </div>
      <!-- 中心辐射图 SVG -->
      <div class="flex-1 flex items-center justify-center">
        <svg width="1200" height="520" viewBox="0 0 1200 520">
          <!-- 中心：d/dx = D -->
          <circle cx="600" cy="260" r="70" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.6)" stroke-width="3"/>
          <text x="600" y="248" text-anchor="middle" fill="#22d3ee" font-size="22" font-weight="bold" font-family="monospace">d/dx = D</text>
          <text x="600" y="275" text-anchor="middle" fill="#67e8f9" font-size="12" font-family="sans-serif">微分 = 矩阵</text>

          <!-- 节点1：左上 - D的构造 -->
          <circle cx="200" cy="120" r="55" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.5)" stroke-width="2"/>
          <text x="200" y="112" text-anchor="middle" fill="#60a5fa" font-size="28" font-weight="bold" font-family="monospace">D</text>
          <text x="200" y="135" text-anchor="middle" fill="#93c5fd" font-size="11" font-family="sans-serif">无限维矩阵</text>
          <!-- 连线 -->
          <line x1="255" y1="140" x2="540" y2="230" stroke="rgba(59,130,246,0.3)" stroke-width="2"/>
          <text x="380" y="170" fill="#60a5fa" font-size="11" font-family="monospace">D(i,i+1) = i</text>
          <!-- 详情卡片 -->
          <rect x="80" y="185" width="240" height="70" rx="8" fill="rgba(59,130,246,0.05)" stroke="rgba(59,130,246,0.3)" stroke-width="1"/>
          <text x="200" y="205" text-anchor="middle" fill="#93c5fd" font-size="11" font-family="monospace">[[0,1,0,0,...],</text>
          <text x="200" y="220" text-anchor="middle" fill="#93c5fd" font-size="11" font-family="monospace"> [0,0,2,0,...],</text>
          <text x="200" y="235" text-anchor="middle" fill="#93c5fd" font-size="11" font-family="monospace"> [0,0,0,3,...],...]</text>
          <text x="200" y="250" text-anchor="middle" fill="#64748b" font-size="10" font-family="sans-serif">作用于幂级数系数向量</text>

          <!-- 节点2：右上 - 关键转化 -->
          <circle cx="1000" cy="120" r="55" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.5)" stroke-width="2"/>
          <text x="1000" y="112" text-anchor="middle" fill="#4ade80" font-size="24" font-weight="bold" font-family="monospace">f↔v</text>
          <text x="1000" y="135" text-anchor="middle" fill="#86efac" font-size="11" font-family="sans-serif">关键转化链</text>
          <line x1="945" y1="140" x2="660" y2="230" stroke="rgba(34,197,94,0.3)" stroke-width="2"/>
          <text x="810" y="170" fill="#4ade80" font-size="11" font-family="monospace">线性性是桥梁</text>
          <rect x="880" y="185" width="240" height="70" rx="8" fill="rgba(34,197,94,0.05)" stroke="rgba(34,197,94,0.3)" stroke-width="1"/>
          <text x="1000" y="208" text-anchor="middle" fill="#86efac" font-size="12" font-family="monospace">多项式 → 系数向量</text>
          <text x="1000" y="225" text-anchor="middle" fill="#86efac" font-size="12" font-family="monospace">微分 → 矩阵乘法</text>
          <text x="1000" y="248" text-anchor="middle" fill="#64748b" font-size="10" font-family="monospace">T(αu+βv) = αT(u)+βT(v)</text>

          <!-- 节点3：左下 - 深层本质 -->
          <circle cx="200" cy="420" r="55" fill="rgba(168,85,247,0.08)" stroke="rgba(168,85,247,0.5)" stroke-width="2"/>
          <text x="200" y="412" text-anchor="middle" fill="#c084fc" font-size="24" font-weight="bold" font-family="monospace">∞</text>
          <text x="200" y="435" text-anchor="middle" fill="#d8b4fe" font-size="11" font-family="sans-serif">深层本质</text>
          <line x1="255" y1="400" x2="540" y2="290" stroke="rgba(168,85,247,0.3)" stroke-width="2"/>
          <text x="370" y="360" fill="#c084fc" font-size="11" font-family="monospace">幂级数逐项微分</text>
          <rect x="80" y="345" width="240" height="70" rx="8" fill="rgba(168,85,247,0.05)" stroke="rgba(168,85,247,0.3)" stroke-width="1"/>
          <text x="200" y="350" text-anchor="middle" fill="#d8b4fe" font-size="12" font-family="sans-serif">可独立于极限定义微分</text>
          <text x="200" y="367" text-anchor="middle" fill="#d8b4fe" font-size="12" font-family="sans-serif">泛函分析：算子的矩阵表示</text>
          <text x="200" y="387" text-anchor="middle" fill="#64748b" font-size="10" font-family="sans-serif">前提：函数在 x=0 处解析</text>

          <!-- 节点4：右下 - 运算同构 -->
          <circle cx="1000" cy="420" r="55" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.5)" stroke-width="2"/>
          <text x="1000" y="412" text-anchor="middle" fill="#fbbf24" font-size="24" font-weight="bold" font-family="monospace">Dⁿ</text>
          <text x="1000" y="435" text-anchor="middle" fill="#fcd34d" font-size="11" font-family="sans-serif">运算同构</text>
          <line x1="945" y1="400" x2="660" y2="290" stroke="rgba(245,158,11,0.3)" stroke-width="2"/>
          <text x="810" y="360" fill="#fbbf24" font-size="11" font-family="monospace">幂运算 = 高阶微分</text>
          <rect x="880" y="345" width="240" height="70" rx="8" fill="rgba(245,158,11,0.05)" stroke="rgba(245,158,11,0.3)" stroke-width="1"/>
          <text x="1000" y="350" text-anchor="middle" fill="#fcd34d" font-size="12" font-family="monospace">Dⁿ ↔ n 阶微分</text>
          <text x="1000" y="367" text-anchor="middle" fill="#fcd34d" font-size="12" font-family="monospace">D 不可逆 ↔ 积分需 +C</text>
          <text x="1000" y="387" text-anchor="middle" fill="#64748b" font-size="10" font-family="sans-serif">信息不可逆性的完美对应</text>
        </svg>
      </div>
      <!-- 底部延伸思考 -->
      <div class="text-center">
        <div class="inline-flex items-center gap-2 text-gray-500 text-[14px]">
          <span style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">延伸思考：傅里叶基/勒让德基下的微分矩阵 · 谱方法求解微分方程 · 量子力学算子代数</span>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(10,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.08) 1px, transparent 1px); background-size: 40px 40px;"></div>
    <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <div class="absolute top-[15%] left-[15%] w-[180px] h-[100px] border border-cyan-500/15 rounded-lg p-4 backdrop-blur-sm opacity-40" style="background: rgba(6,182,212,0.02);">
        <div class="font-mono text-cyan-500/40 text-[12px]">D = [[0,1,0],[0,0,2],[0,0,0]]</div>
      </div>
      <div class="absolute top-[20%] right-[12%] w-[200px] h-[80px] border border-blue-500/15 rounded-lg p-4 backdrop-blur-sm opacity-40" style="background: rgba(30,58,138,0.02);">
        <div class="font-mono text-blue-500/40 text-[12px]">d/dx(Σaₙxⁿ) = Σnaₙxⁿ⁻¹</div>
      </div>
      <div class="absolute bottom-[18%] left-[20%] w-[160px] h-[60px] border border-purple-500/15 rounded-lg p-3 backdrop-blur-sm opacity-40" style="background: rgba(139,92,246,0.02);">
        <div class="font-mono text-purple-500/40 text-[12px]">Dⁿ ↔ n阶微分</div>
      </div>
      <div class="absolute bottom-[15%] right-[18%] w-[140px] h-[60px] border border-green-500/15 rounded-lg p-3 backdrop-blur-sm opacity-40" style="background: rgba(34,197,94,0.02);">
        <div class="font-mono text-green-500/40 text-[12px]">D⁻¹ ✗ 不存在</div>
      </div>
    </div>
    <div class="relative z-10 flex flex-col items-center justify-center h-full">
      <div class="font-mono text-4xl text-cyan-400/60 mb-4 tracking-widest">&lt;/ END &gt;</div>
      <h1 class="text-7xl font-bold text-white mb-4" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">谢谢</h1>
      <div class="w-[200px] h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-4"></div>
      <p class="text-xl text-cyan-400/80 mb-6" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">微分运算的代数之美</p>
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>
        <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
      </div>
    </div>
  </div>
`);
