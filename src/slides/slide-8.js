window.slideDataMap.set(8, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="genshin-char" style="top:2%;right:5%;">
      <div class="genshin-char-label">
        <div class="genshin-char-icon element-Hydro">🎭</div>
        <span>芙宁娜 · 百态之相</span>
      </div>
    </div>
    <div class="genshin-corner genshin-corner-tl"></div>
    <div class="genshin-corner genshin-corner-tr"></div>
    <div class="genshin-corner genshin-corner-bl"></div>
    <div class="genshin-corner genshin-corner-br"></div>
    <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(212,168,83,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.06) 1px, transparent 1px); background-size: 50px 50px;"></div>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col relative z-10">
      <div class="text-center mb-3">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-2" style="background: rgba(176,124,216,0.12);">
          <div class="w-2 h-2 rounded-full" style="background: #b07cd8;"></div>
          <span class="font-mono text-[13px] tracking-wider" style="color: #b07cd8;">DIFFERENT BASES</span>
        </div>
        <h2 class="text-[36px] font-bold" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif; background: linear-gradient(to right, #b07cd8, #4cc2f1, #a5c83b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          不同基下的微分矩阵
        </h2>
      </div>
      <div class="flex-1 flex flex-col gap-4">
        <!-- 三种基的矩阵结构对比 SVG -->
        <div class="border rounded-xl p-4 flex-1" style="background: rgba(30,30,55,0.8); border-color: rgba(176,124,216,0.25);">
          <div class="font-bold text-[16px] mb-2" style="color: #b07cd8;">三种基 → 三种矩阵结构</div>
          <svg width="1260" height="310" viewBox="0 0 1260 310">
            <!-- 幂级数基 -->
            <rect x="10" y="10" width="390" height="290" rx="12" fill="rgba(76,194,241,0.03)" stroke="rgba(76,194,241,0.3)" stroke-width="1.5"/>
            <text x="205" y="35" text-anchor="middle" fill="#4cc2f1" font-size="14" font-weight="bold">幂级数基 {1, x, x², x³, ...}</text>
            <!-- 矩阵网格 6x6 -->
            <g transform="translate(45, 50)">
              <!-- 全0背景 -->
              <rect x="0" y="0" width="300" height="240" rx="4" fill="rgba(100,116,139,0.05)" stroke="rgba(100,116,139,0.15)"/>
              <!-- 0 cells -->
              <rect x="5" y="5" width="46" height="36" rx="3" fill="rgba(100,116,139,0.08)" stroke="rgba(100,116,139,0.15)"/>
              <text x="28" y="28" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
              <!-- 1 (superdiagonal) -->
              <rect x="55" y="5" width="46" height="36" rx="3" fill="rgba(76,194,241,0.25)" stroke="rgba(76,194,241,0.6)" stroke-width="2"/>
              <text x="78" y="28" text-anchor="middle" fill="#4cc2f1" font-size="15" font-weight="bold" font-family="monospace">1</text>
              <rect x="115" y="45" width="46" height="36" rx="3" fill="rgba(76,194,241,0.25)" stroke="rgba(76,194,241,0.6)" stroke-width="2"/>
              <text x="138" y="68" text-anchor="middle" fill="#4cc2f1" font-size="15" font-weight="bold" font-family="monospace">2</text>
              <rect x="175" y="85" width="46" height="36" rx="3" fill="rgba(176,124,216,0.25)" stroke="rgba(176,124,216,0.6)" stroke-width="2"/>
              <text x="198" y="108" text-anchor="middle" fill="#b07cd8" font-size="15" font-weight="bold" font-family="monospace">3</text>
              <rect x="235" y="125" width="46" height="36" rx="3" fill="rgba(245,183,35,0.25)" stroke="rgba(245,183,35,0.6)" stroke-width="2"/>
              <text x="258" y="148" text-anchor="middle" fill="#f5b723" font-size="15" font-weight="bold" font-family="monospace">4</text>
              <!-- 次对角线标注 -->
              <line x1="55" y1="20" x2="258" y2="143" stroke="#f5b723" stroke-width="2" stroke-dasharray="6,3" opacity="0.6"/>
            </g>
            <text x="205" y="290" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="monospace">次对角线结构 · 稀疏 · D(i,i+1)=i</text>

            <!-- 傅里叶基 -->
            <rect x="420" y="10" width="400" height="290" rx="12" fill="rgba(176,124,216,0.03)" stroke="rgba(176,124,216,0.3)" stroke-width="1.5"/>
            <text x="620" y="35" text-anchor="middle" fill="#b07cd8" font-size="14" font-weight="bold">傅里叶基 {1, sin x, cos x, sin 2x, ...}</text>
            <g transform="translate(470, 50)">
              <rect x="0" y="0" width="300" height="240" rx="4" fill="rgba(100,116,139,0.05)" stroke="rgba(100,116,139,0.15)"/>
              <!-- 第0行：常数项导数为0 -->
              <rect x="5" y="5" width="46" height="36" rx="3" fill="rgba(100,116,139,0.08)" stroke="rgba(100,116,139,0.15)"/>
              <text x="28" y="28" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
              <!-- 分块 [[0,-1],[1,0]] -->
              <rect x="55" y="45" width="46" height="36" rx="3" fill="rgba(100,116,139,0.08)" stroke="rgba(100,116,139,0.15)"/>
              <text x="78" y="68" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
              <rect x="105" y="45" width="46" height="36" rx="3" fill="rgba(176,124,216,0.2)" stroke="rgba(176,124,216,0.5)" stroke-width="1.5"/>
              <text x="128" y="68" text-anchor="middle" fill="#b07cd8" font-size="13" font-weight="bold" font-family="monospace">-1</text>
              <rect x="55" y="85" width="46" height="36" rx="3" fill="rgba(176,124,216,0.2)" stroke="rgba(176,124,216,0.5)" stroke-width="1.5"/>
              <text x="78" y="108" text-anchor="middle" fill="#b07cd8" font-size="13" font-weight="bold" font-family="monospace">1</text>
              <rect x="105" y="85" width="46" height="36" rx="3" fill="rgba(100,116,139,0.08)" stroke="rgba(100,116,139,0.15)"/>
              <text x="128" y="108" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
              <!-- 分块 2 -->
              <rect x="155" y="125" width="46" height="36" rx="3" fill="rgba(100,116,139,0.08)" stroke="rgba(100,116,139,0.15)"/>
              <text x="178" y="148" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
              <rect x="205" y="125" width="46" height="36" rx="3" fill="rgba(76,194,241,0.2)" stroke="rgba(76,194,241,0.5)" stroke-width="1.5"/>
              <text x="228" y="148" text-anchor="middle" fill="#4cc2f1" font-size="13" font-weight="bold" font-family="monospace">-2</text>
              <rect x="155" y="165" width="46" height="36" rx="3" fill="rgba(76,194,241,0.2)" stroke="rgba(76,194,241,0.5)" stroke-width="1.5"/>
              <text x="178" y="188" text-anchor="middle" fill="#4cc2f1" font-size="13" font-weight="bold" font-family="monospace">2</text>
              <rect x="205" y="165" width="46" height="36" rx="3" fill="rgba(100,116,139,0.08)" stroke="rgba(100,116,139,0.15)"/>
              <text x="228" y="188" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
              <!-- 分块虚线框 -->
              <rect x="50" y="40" width="106" height="86" rx="6" fill="none" stroke="#b07cd8" stroke-width="1.5" stroke-dasharray="4,2"/>
              <text x="165" y="55" fill="#b07cd8" font-size="10" font-family="monospace">n=1</text>
              <rect x="150" y="120" width="106" height="86" rx="6" fill="none" stroke="#4cc2f1" stroke-width="1.5" stroke-dasharray="4,2"/>
              <text x="265" y="135" fill="#4cc2f1" font-size="10" font-family="monospace">n=2</text>
            </g>
            <text x="620" y="290" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="monospace">分块对角结构 · [[0,-n],[n,0]]</text>

            <!-- 勒让德基 -->
            <rect x="840" y="10" width="410" height="290" rx="12" fill="rgba(245,183,35,0.03)" stroke="rgba(245,183,35,0.3)" stroke-width="1.5"/>
            <text x="1045" y="35" text-anchor="middle" fill="#f5b723" font-size="14" font-weight="bold">勒让德基 {P₀, P₁, P₂, ...}</text>
            <g transform="translate(890, 50)">
              <rect x="0" y="0" width="300" height="240" rx="4" fill="rgba(100,116,139,0.05)" stroke="rgba(100,116,139,0.15)"/>
              <!-- 密集矩阵（很多非零元素） -->
              <rect x="5" y="5" width="46" height="36" rx="3" fill="rgba(100,116,139,0.08)" stroke="rgba(100,116,139,0.15)"/>
              <text x="28" y="28" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
              <rect x="55" y="5" width="46" height="36" rx="3" fill="rgba(245,183,35,0.15)" stroke="rgba(245,183,35,0.3)"/>
              <text x="78" y="28" text-anchor="middle" fill="#f5b723" font-size="12" font-family="monospace">★</text>
              <rect x="155" y="5" width="46" height="36" rx="3" fill="rgba(245,183,35,0.15)" stroke="rgba(245,183,35,0.3)"/>
              <text x="178" y="28" text-anchor="middle" fill="#f5b723" font-size="12" font-family="monospace">★</text>
              <rect x="5" y="45" width="46" height="36" rx="3" fill="rgba(245,183,35,0.15)" stroke="rgba(245,183,35,0.3)"/>
              <text x="28" y="68" text-anchor="middle" fill="#f5b723" font-size="12" font-family="monospace">★</text>
              <rect x="55" y="45" width="46" height="36" rx="3" fill="rgba(100,116,139,0.08)" stroke="rgba(100,116,139,0.15)"/>
              <text x="78" y="68" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
              <rect x="105" y="45" width="46" height="36" rx="3" fill="rgba(245,183,35,0.15)" stroke="rgba(245,183,35,0.3)"/>
              <text x="128" y="68" text-anchor="middle" fill="#f5b723" font-size="12" font-family="monospace">★</text>
              <rect x="205" y="45" width="46" height="36" rx="3" fill="rgba(245,183,35,0.15)" stroke="rgba(245,183,35,0.3)"/>
              <text x="228" y="68" text-anchor="middle" fill="#f5b723" font-size="12" font-family="monospace">★</text>
              <rect x="5" y="85" width="46" height="36" rx="3" fill="rgba(245,183,35,0.1)" stroke="rgba(245,183,35,0.2)"/>
              <rect x="55" y="85" width="46" height="36" rx="3" fill="rgba(245,183,35,0.1)" stroke="rgba(245,183,35,0.2)"/>
              <rect x="105" y="85" width="46" height="36" rx="3" fill="rgba(245,183,35,0.1)" stroke="rgba(245,183,35,0.2)"/>
              <rect x="155" y="85" width="46" height="36" rx="3" fill="rgba(245,183,35,0.1)" stroke="rgba(245,183,35,0.2)"/>
              <rect x="205" y="85" width="46" height="36" rx="3" fill="rgba(245,183,35,0.1)" stroke="rgba(245,183,35,0.2)"/>
              <rect x="255" y="85" width="46" height="36" rx="3" fill="rgba(245,183,35,0.1)" stroke="rgba(245,183,35,0.2)"/>
              <text x="150" y="108" text-anchor="middle" fill="#f5b723" font-size="12" font-family="monospace">★ · ★ · ★ · ★ · ★</text>
              <!-- 更多行省略 -->
              <text x="150" y="150" text-anchor="middle" fill="#64748b" font-size="24">⋮</text>
              <text x="150" y="180" text-anchor="middle" fill="#64748b" font-size="24">⋮</text>
              <!-- 密集标注 -->
              <rect x="10" y="195" width="280" height="35" rx="6" fill="rgba(245,183,35,0.05)" stroke="rgba(245,183,35,0.2)"/>
              <text x="150" y="217" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">★ = 非零元素（不再稀疏）</text>
            </g>
            <text x="1045" y="290" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="monospace">密集结构 · 不再是次对角形式</text>
          </svg>
        </div>
        <!-- 底部总结 -->
        <div class="grid grid-cols-2 gap-4">
          <div class="border rounded-xl p-4" style="background: linear-gradient(to right, rgba(176,124,216,0.1), rgba(76,194,241,0.1)); border-color: rgba(176,124,216,0.17);">
            <div class="text-[14px]" style="font-family: 'Inter', 'Noto Sans SC', sans-serif; color: #b07cd8;">
              <span class="font-bold">类比：</span>同一向量在不同坐标系下有不同的坐标表示，同一算子在不同基下有不同的矩阵。选择基 = 选择"视角"。
            </div>
          </div>
          <div class="border rounded-xl p-4" style="background: linear-gradient(to right, rgba(76,194,241,0.1), rgba(165,200,59,0.1)); border-color: rgba(76,194,241,0.17);">
            <div class="text-[14px]" style="font-family: 'Inter', 'Noto Sans SC', sans-serif; color: #4cc2f1;">
              <span class="font-bold">实用意义：</span>傅里叶基下的分块对角结构可用于<span class="font-bold" style="color: #4cc2f1;">谱方法</span>求解微分方程，幂级数基适用于<span class="font-bold" style="color: #4cc2f1;">解析函数</span>。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);
