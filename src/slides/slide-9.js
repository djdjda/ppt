window.slideDataMap.set(9, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0 opacity-15" style="background-image: linear-gradient(rgba(212,168,83,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.1) 1px, transparent 1px); background-size: 40px 40px;"></div>
    <div class="genshin-char" style="top:2%;right:5%;">
      <div class="genshin-char-label">
        <div class="genshin-char-icon element-electro">⚡</div>
        <span>雷电将军 · 永恒之理</span>
      </div>
    </div>
    <div class="genshin-corner genshin-corner-tl"></div>
    <div class="genshin-corner genshin-corner-tr"></div>
    <div class="genshin-corner genshin-corner-bl"></div>
    <div class="genshin-corner genshin-corner-br"></div>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col relative z-10">
      <div class="text-center mb-4">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-2" style="background: rgba(76,194,241,0.12);">
          <div class="w-2 h-2 rounded-full" style="background: #4cc2f1;"></div>
          <span class="font-mono text-[13px] tracking-wider" style="color: #4cc2f1;">SUMMARY</span>
        </div>
        <h2 class="text-[38px] font-bold" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif; background: linear-gradient(to right, #4cc2f1, #4cc2f1, #b07cd8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          核心收获
        </h2>
      </div>
      <!-- 中心辐射图 SVG -->
      <div class="flex-1 flex items-center justify-center">
        <svg width="1200" height="520" viewBox="0 0 1200 520">
          <!-- 中心：d/dx = D -->
          <circle cx="600" cy="260" r="70" fill="rgba(76,194,241,0.1)" stroke="rgba(76,194,241,0.6)" stroke-width="3"/>
          <text x="600" y="248" text-anchor="middle" fill="#4cc2f1" font-size="22" font-weight="bold" font-family="monospace">d/dx = D</text>
          <text x="600" y="275" text-anchor="middle" fill="#4cc2f1" font-size="12" font-family="sans-serif">微分 = 矩阵</text>

          <!-- 节点1：左上 - D的构造 -->
          <circle cx="200" cy="120" r="55" fill="rgba(76,194,241,0.08)" stroke="rgba(76,194,241,0.5)" stroke-width="2"/>
          <text x="200" y="112" text-anchor="middle" fill="#4cc2f1" font-size="28" font-weight="bold" font-family="monospace">D</text>
          <text x="200" y="135" text-anchor="middle" fill="#7ad6f5" font-size="11" font-family="sans-serif">无限维矩阵</text>
          <!-- 连线 -->
          <line x1="255" y1="140" x2="540" y2="230" stroke="rgba(76,194,241,0.3)" stroke-width="2"/>
          <text x="380" y="170" fill="#4cc2f1" font-size="11" font-family="monospace">D(i,i+1) = i</text>
          <!-- 详情卡片 -->
          <rect x="80" y="185" width="240" height="70" rx="8" fill="rgba(76,194,241,0.05)" stroke="rgba(76,194,241,0.3)" stroke-width="1"/>
          <text x="200" y="205" text-anchor="middle" fill="#7ad6f5" font-size="11" font-family="monospace">[[0,1,0,0,...],</text>
          <text x="200" y="220" text-anchor="middle" fill="#7ad6f5" font-size="11" font-family="monospace"> [0,0,2,0,...],</text>
          <text x="200" y="235" text-anchor="middle" fill="#7ad6f5" font-size="11" font-family="monospace"> [0,0,0,3,...],...]</text>
          <text x="200" y="250" text-anchor="middle" fill="#9a8e7a" font-size="10" font-family="sans-serif">作用于幂级数系数向量</text>

          <!-- 节点2：右上 - 关键转化 -->
          <circle cx="1000" cy="120" r="55" fill="rgba(165,200,59,0.08)" stroke="rgba(165,200,59,0.5)" stroke-width="2"/>
          <text x="1000" y="112" text-anchor="middle" fill="#a5c83b" font-size="24" font-weight="bold" font-family="monospace">f↔v</text>
          <text x="1000" y="135" text-anchor="middle" fill="#b8d66a" font-size="11" font-family="sans-serif">关键转化链</text>
          <line x1="945" y1="140" x2="660" y2="230" stroke="rgba(165,200,59,0.3)" stroke-width="2"/>
          <text x="810" y="170" fill="#a5c83b" font-size="11" font-family="monospace">线性性是桥梁</text>
          <rect x="880" y="185" width="240" height="70" rx="8" fill="rgba(165,200,59,0.05)" stroke="rgba(165,200,59,0.3)" stroke-width="1"/>
          <text x="1000" y="208" text-anchor="middle" fill="#b8d66a" font-size="12" font-family="monospace">多项式 → 系数向量</text>
          <text x="1000" y="225" text-anchor="middle" fill="#b8d66a" font-size="12" font-family="monospace">微分 → 矩阵乘法</text>
          <text x="1000" y="248" text-anchor="middle" fill="#9a8e7a" font-size="10" font-family="monospace">T(αu+βv) = αT(u)+βT(v)</text>

          <!-- 节点3：左下 - 深层本质 -->
          <circle cx="200" cy="420" r="55" fill="rgba(176,124,216,0.08)" stroke="rgba(176,124,216,0.5)" stroke-width="2"/>
          <text x="200" y="412" text-anchor="middle" fill="#b07cd8" font-size="24" font-weight="bold" font-family="monospace">∞</text>
          <text x="200" y="435" text-anchor="middle" fill="#c9a0e8" font-size="11" font-family="sans-serif">深层本质</text>
          <line x1="255" y1="400" x2="540" y2="290" stroke="rgba(176,124,216,0.3)" stroke-width="2"/>
          <text x="370" y="360" fill="#b07cd8" font-size="11" font-family="monospace">幂级数逐项微分</text>
          <rect x="80" y="345" width="240" height="70" rx="8" fill="rgba(176,124,216,0.05)" stroke="rgba(176,124,216,0.3)" stroke-width="1"/>
          <text x="200" y="350" text-anchor="middle" fill="#c9a0e8" font-size="12" font-family="sans-serif">可独立于极限定义微分</text>
          <text x="200" y="367" text-anchor="middle" fill="#c9a0e8" font-size="12" font-family="sans-serif">泛函分析：算子的矩阵表示</text>
          <text x="200" y="387" text-anchor="middle" fill="#9a8e7a" font-size="10" font-family="sans-serif">前提：函数在 x=0 处解析</text>

          <!-- 节点4：右下 - 运算同构 -->
          <circle cx="1000" cy="420" r="55" fill="rgba(245,183,35,0.08)" stroke="rgba(245,183,35,0.5)" stroke-width="2"/>
          <text x="1000" y="412" text-anchor="middle" fill="#f5b723" font-size="24" font-weight="bold" font-family="monospace">Dⁿ</text>
          <text x="1000" y="435" text-anchor="middle" fill="#f5b723" font-size="11" font-family="sans-serif">运算同构</text>
          <line x1="945" y1="400" x2="660" y2="290" stroke="rgba(245,183,35,0.3)" stroke-width="2"/>
          <text x="810" y="360" fill="#f5b723" font-size="11" font-family="monospace">幂运算 = 高阶微分</text>
          <rect x="880" y="345" width="240" height="70" rx="8" fill="rgba(245,183,35,0.05)" stroke="rgba(245,183,35,0.3)" stroke-width="1"/>
          <text x="1000" y="350" text-anchor="middle" fill="#f5b723" font-size="12" font-family="monospace">Dⁿ ↔ n 阶微分</text>
          <text x="1000" y="367" text-anchor="middle" fill="#f5b723" font-size="12" font-family="monospace">D 不可逆 ↔ 积分需 +C</text>
          <text x="1000" y="387" text-anchor="middle" fill="#9a8e7a" font-size="10" font-family="sans-serif">信息不可逆性的完美对应</text>
        </svg>
      </div>
      <!-- 底部延伸思考 -->
      <div class="text-center">
        <div class="inline-flex items-center gap-2 text-[14px]" style="color: #9a8e7a;">
          <span style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">延伸思考：傅里叶基/勒让德基下的微分矩阵 · 谱方法求解微分方程 · 量子力学算子代数</span>
        </div>
      </div>
    </div>
  </div>
`);
