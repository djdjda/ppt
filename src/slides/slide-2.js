window.slideDataMap.set(2, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(76,194,241,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(76,194,241,0.12) 1px, transparent 1px); background-size: 40px 40px;"></div>
    <div class="genshin-corner genshin-corner-tl"></div>
    <div class="genshin-corner genshin-corner-tr"></div>
    <div class="genshin-corner genshin-corner-bl"></div>
    <div class="genshin-corner genshin-corner-br"></div>
    <!-- 角色装饰 - 莫娜 -->
    <div class="genshin-char" style="top:2%;right:5%;">
      <div class="genshin-char-label">
        <div class="genshin-char-icon element-hydro">💧</div>
        <span>莫娜 · 星辰揭示命运</span>
      </div>
    </div>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col relative z-10">
      <div class="text-center mb-3">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-2" style="background: rgba(239,68,68,0.12);">
          <div class="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          <span class="font-mono text-[13px] tracking-wider" style="color: #ef7938;">CORE PARADOX</span>
        </div>
        <h2 class="text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-green-400" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">
          d/dx 与矩阵：两个世界的碰撞
        </h2>
      </div>
      <div class="flex-1 grid grid-cols-6 gap-5">
        <div class="col-span-2 flex flex-col gap-4" style="--card-delay:1">
          <div class="border rounded-xl p-4 flex-1 flex flex-col items-center justify-center" style="background: rgba(239,68,68,0.04); border-color: rgba(239,121,56,0.25);">
            <svg width="320" height="200" viewBox="0 0 320 200">
              <rect x="10" y="20" width="130" height="160" rx="12" fill="rgba(239,68,68,0.06)" stroke="rgba(239,121,56,0.4)" stroke-width="1.5"/>
              <text x="75" y="50" text-anchor="middle" fill="#ef7938" font-size="13" font-family="monospace" font-weight="bold">微积分世界</text>
              <text x="75" y="78" text-anchor="middle" fill="#f0d48a" font-size="20" font-family="serif" font-style="italic">d/dx</text>
              <text x="75" y="105" text-anchor="middle" fill="#9a8e7a" font-size="11" font-family="sans-serif">极限 · 无穷小</text>
              <text x="75" y="125" text-anchor="middle" fill="#7a6e5a" font-size="11" font-family="sans-serif">作用于函数 f(x)</text>
              <line x1="75" y1="138" x2="75" y2="158" stroke="#ef7938" stroke-width="1" stroke-dasharray="3,2"/>
              <text x="75" y="172" text-anchor="middle" fill="#f0d48a" font-size="11" font-family="serif" font-style="italic">f'(x) = lim Δf/Δx</text>
              <rect x="180" y="20" width="130" height="160" rx="12" fill="rgba(76,194,241,0.06)" stroke="rgba(76,194,241,0.4)" stroke-width="1.5"/>
              <text x="245" y="50" text-anchor="middle" fill="#4cc2f1" font-size="13" font-family="monospace" font-weight="bold">线性代数世界</text>
              <text x="245" y="78" text-anchor="middle" fill="#f0d48a" font-size="20" font-family="monospace" font-weight="bold">A · v</text>
              <text x="245" y="105" text-anchor="middle" fill="#9a8e7a" font-size="11" font-family="sans-serif">代数 · 排列</text>
              <text x="245" y="125" text-anchor="middle" fill="#7a6e5a" font-size="11" font-family="sans-serif">作用于向量 v</text>
              <line x1="245" y1="138" x2="245" y2="158" stroke="#4cc2f1" stroke-width="1" stroke-dasharray="3,2"/>
              <text x="245" y="172" text-anchor="middle" fill="#f0d48a" font-size="11" font-family="monospace">v' = A · v</text>
              <line x1="145" y1="35" x2="175" y2="60" stroke="#ef7938" stroke-width="2.5"/>
              <line x1="175" y1="60" x2="145" y2="85" stroke="#4cc2f1" stroke-width="2.5"/>
              <line x1="145" y1="85" x2="175" y2="110" stroke="#ef7938" stroke-width="2.5"/>
              <line x1="175" y1="110" x2="145" y2="135" stroke="#4cc2f1" stroke-width="2.5"/>
              <text x="160" y="165" text-anchor="middle" fill="#f5b723" font-size="22" font-weight="bold">≠</text>
            </svg>
          </div>
          <div class="border rounded-xl p-4" style="background: rgba(76,194,241,0.04); border-color: rgba(76,194,241,0.25);">
            <div class="font-bold text-[15px] mb-2" style="color: #4cc2f1; font-family: 'Inter', 'Noto Sans SC', sans-serif;">线性性 = 桥梁</div>
            <div class="grid grid-cols-2 gap-2">
              <div class="rounded-lg p-2 text-center" style="background: rgba(0,0,0,0.3); border: 1px solid rgba(76,194,241,0.15);">
                <div class="font-mono text-[12px]" style="color: #4cc2f1;">T(αu+βv)</div>
                <div class="font-mono text-[12px]" style="color: #74c2a8;">= αT(u)+βT(v)</div>
              </div>
              <div class="rounded-lg p-2 text-center" style="background: rgba(0,0,0,0.3); border: 1px solid rgba(76,194,241,0.15);">
                <div class="font-mono text-[12px]" style="color: #4cc2f1;">d/dx(af+bg)</div>
                <div class="font-mono text-[12px]" style="color: #74c2a8;">= a·f'+b·g'</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2 border rounded-xl p-4 flex flex-col items-center justify-center" style="background: rgba(30,30,55,0.8); border-color: rgba(176,124,216,0.25); --card-delay:2">
          <div class="font-bold text-[15px] mb-2" style="color: #b07cd8; font-family: 'Inter', 'Noto Sans SC', sans-serif;">交换图：两种路径，同一结果</div>
          <svg width="340" height="340" viewBox="0 0 340 340">
            <rect x="100" y="10" width="140" height="50" rx="10" fill="rgba(76,194,241,0.1)" stroke="rgba(76,194,241,0.5)" stroke-width="2"/>
            <text x="170" y="42" text-anchor="middle" fill="#4cc2f1" font-size="15" font-family="serif" font-style="italic" font-weight="bold">f(x)</text>
            <rect x="100" y="280" width="140" height="50" rx="10" fill="rgba(165,200,59,0.1)" stroke="rgba(165,200,59,0.5)" stroke-width="2"/>
            <text x="170" y="312" text-anchor="middle" fill="#a5c83b" font-size="15" font-family="serif" font-style="italic" font-weight="bold">f'(x)</text>
            <rect x="0" y="130" width="120" height="50" rx="10" fill="rgba(76,194,241,0.1)" stroke="rgba(76,194,241,0.5)" stroke-width="2"/>
            <text x="60" y="160" text-anchor="middle" fill="#4cc2f1" font-size="14" font-family="monospace" font-weight="bold">[a₀,a₁,...]ᵀ</text>
            <rect x="220" y="130" width="120" height="50" rx="10" fill="rgba(176,124,216,0.1)" stroke="rgba(176,124,216,0.5)" stroke-width="2"/>
            <text x="280" y="160" text-anchor="middle" fill="#b07cd8" font-size="14" font-family="monospace" font-weight="bold">[a₁,2a₂,...]ᵀ</text>
            <path d="M110 60 Q60 95 70 125" fill="none" stroke="#4cc2f1" stroke-width="2" marker-end="url(#arrowBlue)"/>
            <text x="50" y="95" fill="#4cc2f1" font-size="11" font-family="sans-serif">系数提取</text>
            <line x1="120" y1="155" x2="218" y2="155" stroke="#f5b723" stroke-width="2.5" marker-end="url(#arrowAmber)"/>
            <text x="170" y="148" text-anchor="middle" fill="#f5b723" font-size="14" font-family="monospace" font-weight="bold">D · v</text>
            <line x1="170" y1="60" x2="170" y2="278" stroke="#4cc2f1" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arrowCyan)"/>
            <text x="200" y="175" fill="#4cc2f1" font-size="13" font-family="serif" font-style="italic" font-weight="bold">d/dx</text>
            <path d="M280 180 Q290 240 230 290" fill="none" stroke="#b07cd8" stroke-width="2" marker-end="url(#arrowPurple)"/>
            <text x="295" y="240" fill="#b07cd8" font-size="11" font-family="sans-serif">还原</text>
            <circle cx="170" cy="210" r="18" fill="rgba(165,200,59,0.12)" stroke="rgba(165,200,59,0.5)" stroke-width="1.5"/>
            <text x="170" y="215" text-anchor="middle" fill="#a5c83b" font-size="18" font-weight="bold">=</text>
            <defs>
              <marker id="arrowBlue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#4cc2f1"/></marker>
              <marker id="arrowAmber" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f5b723"/></marker>
              <marker id="arrowCyan" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#4cc2f1"/></marker>
              <marker id="arrowPurple" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#b07cd8"/></marker>
            </defs>
          </svg>
        </div>
        <div class="col-span-2 flex flex-col gap-4" style="--card-delay:3">
          <div class="border rounded-xl p-5 flex-1" style="background: rgba(176,124,216,0.04); border-color: rgba(176,124,216,0.25);">
            <div class="font-bold text-[17px] mb-3" style="color: #b07cd8; font-family: 'Inter', 'Noto Sans SC', sans-serif;">研究路线图</div>
            <svg width="380" height="280" viewBox="0 0 380 280">
              <circle cx="50" cy="50" r="22" fill="rgba(76,194,241,0.12)" stroke="rgba(76,194,241,0.6)" stroke-width="2"/>
              <text x="50" y="56" text-anchor="middle" fill="#4cc2f1" font-size="16" font-weight="bold" font-family="monospace">1</text>
              <text x="85" y="44" fill="#e8e0d0" font-size="13" font-family="sans-serif">多项式 → 系数向量</text>
              <text x="85" y="62" fill="#9a8e7a" font-size="11" font-family="monospace">f(x)=3+2x+5x² ↔ [3,2,5]ᵀ</text>
              <line x1="50" y1="72" x2="50" y2="110" stroke="#b07cd8" stroke-width="1.5" stroke-dasharray="4,2"/>
              <circle cx="50" cy="132" r="22" fill="rgba(76,194,241,0.12)" stroke="rgba(76,194,241,0.6)" stroke-width="2"/>
              <text x="50" y="138" text-anchor="middle" fill="#4cc2f1" font-size="16" font-weight="bold" font-family="monospace">2</text>
              <text x="85" y="126" fill="#e8e0d0" font-size="13" font-family="sans-serif">构造 D 使得 D·v = v'</text>
              <text x="85" y="144" fill="#9a8e7a" font-size="11" font-family="monospace">D = [[0,1,0],[0,0,2],[0,0,0]]</text>
              <line x1="50" y1="154" x2="50" y2="192" stroke="#b07cd8" stroke-width="1.5" stroke-dasharray="4,2"/>
              <circle cx="50" cy="214" r="22" fill="rgba(176,124,216,0.12)" stroke="rgba(176,124,216,0.6)" stroke-width="2"/>
              <text x="50" y="220" text-anchor="middle" fill="#b07cd8" font-size="16" font-weight="bold" font-family="monospace">3</text>
              <text x="85" y="208" fill="#e8e0d0" font-size="13" font-family="sans-serif">无限维 + 非多项式函数</text>
              <text x="85" y="226" fill="#9a8e7a" font-size="11" font-family="monospace">sin,cos,eˣ → Maclaurin 展开</text>
              <line x1="50" y1="236" x2="50" y2="260" stroke="#a5c83b" stroke-width="2" marker-end="url(#arrG)"/>
              <rect x="85" y="248" width="200" height="28" rx="8" fill="rgba(165,200,59,0.08)" stroke="rgba(165,200,59,0.4)" stroke-width="1.5"/>
              <text x="185" y="267" text-anchor="middle" fill="#a5c83b" font-size="12" font-weight="bold" font-family="sans-serif">d/dx = 矩阵 D ！</text>
              <defs><marker id="arrG" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#a5c83b"/></marker></defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- MyGO 角色 -->
    <div class="mygo-char" style="right:1.5%;top:35%;"><img src="/characters/nyamu-smile.png" alt="nyamu"></div>
  </div>
`);
