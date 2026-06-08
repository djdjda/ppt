window.slideDataMap.set(3, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="genshin-char" style="top:2%;right:5%;">
      <div class="genshin-char-label">
        <div class="genshin-char-icon element-electro">💜</div>
        <span>丽莎 · 知识的守护者</span>
      </div>
    </div>
    <div class="genshin-corner genshin-corner-tl"></div>
    <div class="genshin-corner genshin-corner-tr"></div>
    <div class="genshin-corner genshin-corner-bl"></div>
    <div class="genshin-corner genshin-corner-br"></div>
    <div class="absolute inset-0 opacity-8" style="background-image: linear-gradient(rgba(212,168,83,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.06) 1px, transparent 1px); background-size: 50px 50px;"></div>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col relative z-10">
      <div class="text-center mb-3">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-2" style="background: rgba(76,194,241,0.12);">
          <div class="w-2 h-2 rounded-full" style="background: #4cc2f1;"></div>
          <span class="font-mono text-[13px] tracking-wider" style="color: #4cc2f1;">BRIDGE CONSTRUCTION</span>
        </div>
        <h2 class="text-[36px] font-bold" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif; background: linear-gradient(to right, #4cc2f1, #4cc2f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          构建桥梁：矩阵 = 线性变换 & 多项式 = 向量
        </h2>
      </div>
      <div class="flex-1 grid grid-cols-3 gap-5">
        <!-- 左：2D线性变换可视化 -->
        <div class="flex flex-col gap-4">
          <div class="backdrop-blur border rounded-xl p-4 flex-1 flex flex-col items-center justify-center" style="background: rgba(30,30,55,0.8); border-color: rgba(76,194,241,0.25);">
            <div class="font-bold text-[16px] mb-2" style="color: #4cc2f1;">矩阵 = 线性变换</div>
            <svg width="340" height="260" viewBox="0 0 340 260">
              <!-- 坐标轴 -->
              <line x1="30" y1="230" x2="160" y2="230" stroke="#475569" stroke-width="1"/>
              <line x1="30" y1="230" x2="30" y2="100" stroke="#475569" stroke-width="1"/>
              <text x="155" y="245" fill="#64748b" font-size="10">x</text>
              <text x="18" y="100" fill="#64748b" font-size="10">y</text>
              <!-- 原始向量 v -->
              <line x1="30" y1="230" x2="80" y2="130" stroke="#4cc2f1" stroke-width="2.5"/>
              <circle cx="80" cy="130" r="4" fill="#4cc2f1"/>
              <text x="60" y="120" fill="#4cc2f1" font-size="11" font-family="monospace">v=[1,2]ᵀ</text>
              <!-- 原始基向量 -->
              <line x1="30" y1="230" x2="80" y2="230" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
              <line x1="30" y1="230" x2="30" y2="180" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
              <!-- 网格变形提示 -->
              <text x="90" y="250" fill="#64748b" font-size="10">变换前</text>

              <!-- 箭头连接 -->
              <line x1="165" y1="165" x2="175" y2="165" stroke="#f5b723" stroke-width="3" marker-end="url(#arrA3)"/>
              <text x="155" y="155" fill="#f5b723" font-size="12" font-weight="bold" font-family="monospace">A</text>

              <!-- 变换后 -->
              <line x1="190" y1="230" x2="310" y2="230" stroke="#475569" stroke-width="1"/>
              <line x1="190" y1="230" x2="190" y2="100" stroke="#475569" stroke-width="1"/>
              <!-- 变换后向量 Av -->
              <line x1="190" y1="230" x2="290" y2="130" stroke="#a5c83b" stroke-width="2.5"/>
              <circle cx="290" cy="130" r="4" fill="#a5c83b"/>
              <text x="275" y="120" fill="#a5c83b" font-size="11" font-family="monospace">Av=[4,7]ᵀ</text>
              <!-- 变换基 -->
              <line x1="190" y1="230" x2="290" y2="230" stroke="#f5b723" stroke-width="1.2" stroke-dasharray="3,2"/>
              <line x1="190" y1="230" x2="190" y2="130" stroke="#f5b723" stroke-width="1.2" stroke-dasharray="3,2"/>
              <text x="255" y="250" fill="#64748b" font-size="10">变换后</text>

              <!-- 矩阵标注 -->
              <rect x="135" y="185" width="60" height="35" rx="6" fill="rgba(245,183,35,0.1)" stroke="rgba(245,183,35,0.4)" stroke-width="1"/>
              <text x="165" y="200" text-anchor="middle" fill="#f5b723" font-size="10" font-family="monospace">[[2,1]</text>
              <text x="165" y="214" text-anchor="middle" fill="#f5b723" font-size="10" font-family="monospace"> [1,3]]</text>

              <defs>
                <marker id="arrA3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f5b723"/></marker>
              </defs>
            </svg>
          </div>
          <div class="border rounded-xl p-3" style="background: linear-gradient(to bottom right, rgba(165,200,59,0.1), rgba(20,30,10,0.05)); border-color: rgba(165,200,59,0.25);">
            <div class="font-bold text-[14px] mb-1" style="color: #a5c83b; font-family: 'Inter', 'Noto Sans SC', sans-serif;">线性性保证</div>
            <div class="text-[13px] font-mono" style="color: #e8e0d0;">T(αu + βv) = αT(u) + βT(v)</div>
            <div class="text-[11px] mt-1" style="color: #9a8e7a; font-family: 'Inter', 'Noto Sans SC', sans-serif;">矩阵和微分都满足 → 同构基础</div>
          </div>
        </div>
        <!-- 中：多项式→向量映射可视化 -->
        <div class="flex flex-col gap-4">
          <div class="backdrop-blur border rounded-xl p-4 flex-1 flex flex-col items-center justify-center" style="background: rgba(30,30,55,0.8); border-color: rgba(76,194,241,0.25);">
            <div class="font-bold text-[16px] mb-2" style="color: #4cc2f1;">多项式 = 系数向量</div>
            <svg width="340" height="260" viewBox="0 0 340 260">
              <!-- 多项式函数曲线 -->
              <rect x="10" y="10" width="150" height="130" rx="8" fill="rgba(76,194,241,0.05)" stroke="rgba(76,194,241,0.3)" stroke-width="1"/>
              <text x="85" y="28" text-anchor="middle" fill="#4cc2f1" font-size="11" font-weight="bold">函数空间</text>
              <!-- 曲线 f(x)=3+2x+5x² -->
              <line x1="25" y1="120" x2="145" y2="120" stroke="#475569" stroke-width="0.5"/>
              <line x1="25" y1="120" x2="25" y2="40" stroke="#475569" stroke-width="0.5"/>
              <path d="M25 110 Q55 105 75 95 Q100 80 125 45 Q135 30 145 25" fill="none" stroke="#4cc2f1" stroke-width="2.5"/>
              <text x="100" y="50" fill="#4cc2f1" font-size="11" font-style="italic" font-family="serif">f(x)=3+2x+5x²</text>

              <!-- 映射箭头 -->
              <line x1="165" y1="85" x2="185" y2="85" stroke="#f5b723" stroke-width="2.5" marker-end="url(#arrMap)"/>
              <text x="165" y="75" fill="#f5b723" font-size="9" font-family="sans-serif">提取系数</text>

              <!-- 向量空间 -->
              <rect x="190" y="10" width="140" height="130" rx="8" fill="rgba(176,124,216,0.05)" stroke="rgba(176,124,216,0.3)" stroke-width="1"/>
              <text x="260" y="28" text-anchor="middle" fill="#b07cd8" font-size="11" font-weight="bold">向量空间 R³</text>
              <!-- 向量柱状图 -->
              <rect x="215" y="100" width="25" height="30" rx="3" fill="rgba(76,194,241,0.25)" stroke="rgba(76,194,241,0.6)" stroke-width="1.5"/>
              <text x="227" y="95" text-anchor="middle" fill="#4cc2f1" font-size="12" font-weight="bold" font-family="monospace">3</text>
              <text x="227" y="140" text-anchor="middle" fill="#64748b" font-size="9">a₀</text>

              <rect x="250" y="70" width="25" height="60" rx="3" fill="rgba(76,194,241,0.25)" stroke="rgba(76,194,241,0.6)" stroke-width="1.5"/>
              <text x="262" y="65" text-anchor="middle" fill="#4cc2f1" font-size="12" font-weight="bold" font-family="monospace">2</text>
              <text x="262" y="140" text-anchor="middle" fill="#64748b" font-size="9">a₁</text>

              <rect x="285" y="40" width="25" height="90" rx="3" fill="rgba(176,124,216,0.25)" stroke="rgba(176,124,216,0.6)" stroke-width="1.5"/>
              <text x="297" y="35" text-anchor="middle" fill="#b07cd8" font-size="12" font-weight="bold" font-family="monospace">5</text>
              <text x="297" y="140" text-anchor="middle" fill="#64748b" font-size="9">a₂</text>

              <!-- 基底说明 -->
              <text x="170" y="168" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">基底: {1, x, x²}</text>

              <!-- 一般形式 -->
              <rect x="20" y="185" width="300" height="60" rx="8" fill="rgba(245,183,35,0.05)" stroke="rgba(245,183,35,0.3)" stroke-width="1"/>
              <text x="170" y="205" text-anchor="middle" fill="#f5b723" font-size="12" font-weight="bold" font-family="sans-serif">一般形式</text>
              <text x="170" y="228" text-anchor="middle" fill="#e8e0d0" font-size="12" font-family="monospace">a₀+a₁x+...+aₙxⁿ ↔ [a₀,a₁,...,aₙ]ᵀ</text>

              <defs>
                <marker id="arrMap" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f5b723"/></marker>
              </defs>
            </svg>
          </div>
        </div>
        <!-- 右：完整转化链（垂直流程图） -->
        <div class="border rounded-xl p-4 flex flex-col items-center justify-center" style="background: rgba(30,30,55,0.8); border-color: rgba(176,124,216,0.25);">
          <div class="font-bold text-[16px] mb-2" style="color: #b07cd8;">完整转化链</div>
          <svg width="340" height="520" viewBox="0 0 340 520">
            <!-- f(x) -->
            <rect x="70" y="10" width="200" height="55" rx="12" fill="rgba(76,194,241,0.1)" stroke="rgba(76,194,241,0.5)" stroke-width="2"/>
            <text x="170" y="32" text-anchor="middle" fill="#4cc2f1" font-size="13" font-weight="bold" font-family="sans-serif">多项式</text>
            <text x="170" y="52" text-anchor="middle" fill="#4cc2f1" font-size="15" font-style="italic" font-family="serif">f(x) = a₀+a₁x+a₂x²</text>

            <!-- 箭头 1 -->
            <line x1="170" y1="65" x2="170" y2="110" stroke="#4cc2f1" stroke-width="2" marker-end="url(#arrV3)"/>
            <text x="210" y="90" fill="#4cc2f1" font-size="10" font-family="sans-serif">提取系数</text>

            <!-- v -->
            <rect x="70" y="115" width="200" height="55" rx="12" fill="rgba(76,194,241,0.1)" stroke="rgba(76,194,241,0.5)" stroke-width="2"/>
            <text x="170" y="137" text-anchor="middle" fill="#4cc2f1" font-size="13" font-weight="bold" font-family="sans-serif">系数向量</text>
            <text x="170" y="157" text-anchor="middle" fill="#4cc2f1" font-size="15" font-family="monospace">v = [a₀, a₁, a₂]ᵀ</text>

            <!-- 箭头 2 -->
            <line x1="170" y1="170" x2="170" y2="220" stroke="#f5b723" stroke-width="2.5" marker-end="url(#arrD3)"/>
            <text x="220" y="200" fill="#f5b723" font-size="12" font-weight="bold" font-family="monospace">D · v</text>

            <!-- Dv -->
            <rect x="70" y="225" width="200" height="55" rx="12" fill="rgba(176,124,216,0.1)" stroke="rgba(176,124,216,0.5)" stroke-width="2"/>
            <text x="170" y="247" text-anchor="middle" fill="#b07cd8" font-size="13" font-weight="bold" font-family="sans-serif">微分后向量</text>
            <text x="170" y="267" text-anchor="middle" fill="#b07cd8" font-size="15" font-family="monospace">v' = [a₁, 2a₂, 0]ᵀ</text>

            <!-- 箭头 3 -->
            <line x1="170" y1="280" x2="170" y2="325" stroke="#a5c83b" stroke-width="2" marker-end="url(#arrG3)"/>
            <text x="210" y="305" fill="#a5c83b" font-size="10" font-family="sans-serif">还原系数</text>

            <!-- f'(x) -->
            <rect x="70" y="330" width="200" height="55" rx="12" fill="rgba(165,200,59,0.1)" stroke="rgba(165,200,59,0.5)" stroke-width="2"/>
            <text x="170" y="352" text-anchor="middle" fill="#a5c83b" font-size="13" font-weight="bold" font-family="sans-serif">微分结果</text>
            <text x="170" y="372" text-anchor="middle" fill="#a5c83b" font-size="15" font-style="italic" font-family="serif">f'(x) = a₁+2a₂x</text>

            <!-- 右侧等价标注 -->
            <line x1="275" y1="37" x2="275" y2="357" stroke="#f5b723" stroke-width="1.5" stroke-dasharray="5,3"/>
            <text x="280" y="200" fill="#f5b723" font-size="11" font-weight="bold" font-family="serif" font-style="italic" writing-mode="tb">等价于 d/dx</text>

            <!-- 底部关键结论 -->
            <rect x="40" y="410" width="260" height="90" rx="12" fill="rgba(245,183,35,0.08)" stroke="rgba(245,183,35,0.4)" stroke-width="1.5"/>
            <text x="170" y="435" text-anchor="middle" fill="#f5b723" font-size="13" font-weight="bold" font-family="sans-serif">核心意义</text>
            <text x="170" y="458" text-anchor="middle" fill="#e8e0d0" font-size="12" font-family="sans-serif">多项式 ↔ 向量 一一对应</text>
            <text x="170" y="478" text-anchor="middle" fill="#e8e0d0" font-size="12" font-family="sans-serif">微分 → 矩阵作用于系数向量</text>
            <text x="170" y="493" text-anchor="middle" fill="#a5c83b" font-size="12" font-weight="bold" font-family="sans-serif">矛盾迎刃而解！</text>

            <defs>
              <marker id="arrV3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#4cc2f1"/></marker>
              <marker id="arrD3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f5b723"/></marker>
              <marker id="arrG3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#a5c83b"/></marker>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    <!-- MyGO 角色 -->
    <div class="mygo-char" style="right:1.5%;top:28%;"><img src="/characters/uika-pout.png" alt="uika"></div>
  </div>
`);
