window.slideDataMap.set(4, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="genshin-char" style="top:2%;right:5%;">
      <div class="genshin-char-label">
        <div class="genshin-char-icon element-geo">🟡</div>
        <span>阿贝多 · 追求真理之人</span>
      </div>
    </div>
    <div class="genshin-corner genshin-corner-tl"></div>
    <div class="genshin-corner genshin-corner-tr"></div>
    <div class="genshin-corner genshin-corner-bl"></div>
    <div class="genshin-corner genshin-corner-br"></div>
    <div class="absolute inset-0 overflow-hidden opacity-10 font-mono text-[11px]" style="color: #4cc2f1;">
      <div class="absolute left-[5%] top-0" style="animation: scroll 12s linear infinite;">0 1 0 0 0 0 ...<br/>0 0 2 0 0 0 ...<br/>0 0 0 3 0 0 ...<br/>0 0 0 0 4 0 ...<br/>...</div>
    </div>
    <style>@keyframes scroll { 0% { transform: translateY(-100%); } 100% { transform: translateY(100vh); } }</style>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col relative z-10">
      <div class="text-center mb-3">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-2" style="background: rgba(245,183,35,0.12);">
          <div class="w-2 h-2 rounded-full" style="background: #f5b723;"></div>
          <span class="font-mono text-[13px] tracking-wider" style="color: #f5b723;">CORE DERIVATION</span>
        </div>
        <h2 class="text-[36px] font-bold" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif; background: linear-gradient(to right, #f5b723, #4cc2f1, #a5c83b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          推导：构造微分矩阵 D
        </h2>
      </div>
      <div class="flex-1 grid grid-cols-2 gap-6">
        <!-- 左：矩阵-向量乘法可视化 -->
        <div class="rounded-xl overflow-hidden border shadow-2xl flex flex-col" style="background: rgba(30,30,55,0.9); border-color: rgba(76,194,241,0.25);">
          <div class="border-b px-5 py-2.5 flex items-center justify-between" style="background: rgba(20,20,45,0.95); border-color: rgba(76,194,241,0.25);">
            <div class="flex items-center gap-2"><div class="w-2.5 h-2.5 bg-red-500 rounded-full"></div><div class="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div><div class="w-2.5 h-2.5 bg-green-500 rounded-full"></div><span class="font-mono text-[14px] ml-3" style="color: #4cc2f1;">derivation.md</span></div>
            <div class="font-mono text-[13px]" style="color: #4cc2f1;">3×3 MATRIX</div>
          </div>
          <div class="p-4 flex-1 flex flex-col items-center justify-center">
            <!-- 矩阵乘法 SVG -->
            <svg width="600" height="280" viewBox="0 0 600 280">
              <!-- D 矩阵 -->
              <text x="30" y="25" fill="#f5b723" font-size="14" font-weight="bold" font-family="monospace">D =</text>
              <!-- 矩阵方括号左 -->
              <line x1="65" y1="35" x2="75" y2="35" stroke="#f5b723" stroke-width="2.5"/>
              <line x1="65" y1="35" x2="65" y2="215" stroke="#f5b723" stroke-width="2.5"/>
              <line x1="65" y1="215" x2="75" y2="215" stroke="#f5b723" stroke-width="2.5"/>
              <!-- Row 0 -->
              <rect x="82" y="42" width="50" height="40" rx="4" fill="rgba(100,116,139,0.15)" stroke="rgba(100,116,139,0.3)"/>
              <text x="107" y="68" text-anchor="middle" fill="#64748b" font-size="18" font-family="monospace">0</text>
              <rect x="140" y="42" width="50" height="40" rx="4" fill="rgba(76,194,241,0.2)" stroke="rgba(76,194,241,0.6)" stroke-width="2"/>
              <text x="165" y="68" text-anchor="middle" fill="#4cc2f1" font-size="18" font-weight="bold" font-family="monospace">1</text>
              <rect x="198" y="42" width="50" height="40" rx="4" fill="rgba(100,116,139,0.15)" stroke="rgba(100,116,139,0.3)"/>
              <text x="223" y="68" text-anchor="middle" fill="#64748b" font-size="18" font-family="monospace">0</text>
              <!-- Row 1 -->
              <rect x="82" y="90" width="50" height="40" rx="4" fill="rgba(100,116,139,0.15)" stroke="rgba(100,116,139,0.3)"/>
              <text x="107" y="116" text-anchor="middle" fill="#64748b" font-size="18" font-family="monospace">0</text>
              <rect x="140" y="90" width="50" height="40" rx="4" fill="rgba(100,116,139,0.15)" stroke="rgba(100,116,139,0.3)"/>
              <text x="165" y="116" text-anchor="middle" fill="#64748b" font-size="18" font-family="monospace">0</text>
              <rect x="198" y="90" width="50" height="40" rx="4" fill="rgba(76,194,241,0.2)" stroke="rgba(76,194,241,0.6)" stroke-width="2"/>
              <text x="223" y="116" text-anchor="middle" fill="#4cc2f1" font-size="18" font-weight="bold" font-family="monospace">2</text>
              <!-- Row 2 -->
              <rect x="82" y="138" width="50" height="40" rx="4" fill="rgba(100,116,139,0.15)" stroke="rgba(100,116,139,0.3)"/>
              <text x="107" y="164" text-anchor="middle" fill="#64748b" font-size="18" font-family="monospace">0</text>
              <rect x="140" y="138" width="50" height="40" rx="4" fill="rgba(100,116,139,0.15)" stroke="rgba(100,116,139,0.3)"/>
              <text x="165" y="164" text-anchor="middle" fill="#64748b" font-size="18" font-family="monospace">0</text>
              <rect x="198" y="138" width="50" height="40" rx="4" fill="rgba(100,116,139,0.15)" stroke="rgba(100,116,139,0.3)"/>
              <text x="223" y="164" text-anchor="middle" fill="#64748b" font-size="18" font-family="monospace">0</text>
              <!-- 矩阵方括号右 -->
              <line x1="255" y1="35" x2="245" y2="35" stroke="#f5b723" stroke-width="2.5"/>
              <line x1="255" y1="35" x2="255" y2="215" stroke="#f5b723" stroke-width="2.5"/>
              <line x1="255" y1="215" x2="245" y2="215" stroke="#f5b723" stroke-width="2.5"/>
              <!-- 行标注 -->
              <text x="268" y="68" fill="#94a3b8" font-size="10" font-family="monospace">← 第0行取a₁</text>
              <text x="268" y="116" fill="#94a3b8" font-size="10" font-family="monospace">← 第1行取2a₂</text>
              <text x="268" y="164" fill="#94a3b8" font-size="10" font-family="monospace">← 第2行取0</text>

              <!-- 乘号 -->
              <text x="295" y="115" fill="#4cc2f1" font-size="24" font-weight="bold" font-family="monospace">×</text>

              <!-- 向量 v -->
              <text x="325" y="25" fill="#4cc2f1" font-size="14" font-weight="bold" font-family="monospace">v =</text>
              <line x1="348" y1="35" x2="358" y2="35" stroke="#4cc2f1" stroke-width="2"/>
              <line x1="348" y1="35" x2="348" y2="215" stroke="#4cc2f1" stroke-width="2"/>
              <line x1="348" y1="215" x2="358" y2="215" stroke="#4cc2f1" stroke-width="2"/>
              <rect x="365" y="42" width="50" height="40" rx="4" fill="rgba(76,194,241,0.15)" stroke="rgba(76,194,241,0.4)"/>
              <text x="390" y="68" text-anchor="middle" fill="#4cc2f1" font-size="18" font-family="monospace">3</text>
              <rect x="365" y="90" width="50" height="40" rx="4" fill="rgba(76,194,241,0.15)" stroke="rgba(76,194,241,0.4)"/>
              <text x="390" y="116" text-anchor="middle" fill="#4cc2f1" font-size="18" font-family="monospace">2</text>
              <rect x="365" y="138" width="50" height="40" rx="4" fill="rgba(176,124,216,0.15)" stroke="rgba(176,124,216,0.4)"/>
              <text x="390" y="164" text-anchor="middle" fill="#b07cd8" font-size="18" font-family="monospace">5</text>
              <line x1="420" y1="35" x2="410" y2="35" stroke="#4cc2f1" stroke-width="2"/>
              <line x1="420" y1="35" x2="420" y2="215" stroke="#4cc2f1" stroke-width="2"/>
              <line x1="420" y1="215" x2="410" y2="215" stroke="#4cc2f1" stroke-width="2"/>
              <!-- 向量标注 -->
              <text x="428" y="68" fill="#4cc2f1" font-size="10" font-family="monospace">a₀=3</text>
              <text x="428" y="116" fill="#4cc2f1" font-size="10" font-family="monospace">a₁=2</text>
              <text x="428" y="164" fill="#b07cd8" font-size="10" font-family="monospace">a₂=5</text>

              <!-- 等号 -->
              <text x="465" y="115" fill="#9ca3af" font-size="24" font-weight="bold" font-family="monospace">=</text>

              <!-- 结果向量 -->
              <text x="495" y="25" fill="#a5c83b" font-size="14" font-weight="bold" font-family="monospace">v' =</text>
              <line x1="528" y1="35" x2="538" y2="35" stroke="#a5c83b" stroke-width="2"/>
              <line x1="528" y1="35" x2="528" y2="215" stroke="#a5c83b" stroke-width="2"/>
              <line x1="528" y1="215" x2="538" y2="215" stroke="#a5c83b" stroke-width="2"/>
              <rect x="545" y="42" width="50" height="40" rx="4" fill="rgba(165,200,59,0.15)" stroke="rgba(165,200,59,0.5)" stroke-width="1.5"/>
              <text x="570" y="68" text-anchor="middle" fill="#a5c83b" font-size="18" font-weight="bold" font-family="monospace">2</text>
              <rect x="545" y="90" width="50" height="40" rx="4" fill="rgba(165,200,59,0.15)" stroke="rgba(165,200,59,0.5)" stroke-width="1.5"/>
              <text x="570" y="116" text-anchor="middle" fill="#a5c83b" font-size="18" font-weight="bold" font-family="monospace">10</text>
              <rect x="545" y="138" width="50" height="40" rx="4" fill="rgba(165,200,59,0.15)" stroke="rgba(165,200,59,0.5)" stroke-width="1.5"/>
              <text x="570" y="164" text-anchor="middle" fill="#a5c83b" font-size="18" font-weight="bold" font-family="monospace">0</text>
              <line x1="600" y1="35" x2="590" y2="35" stroke="#a5c83b" stroke-width="2"/>
              <line x1="600" y1="35" x2="600" y2="215" stroke="#a5c83b" stroke-width="2"/>
              <line x1="600" y1="215" x2="590" y2="215" stroke="#a5c83b" stroke-width="2"/>

              <!-- 结果对照 -->
              <text x="30" y="250" fill="#94a3b8" font-size="12" font-family="monospace">验证: [2, 10, 0]ᵀ → f'(x) = 2 + 10x</text>
              <text x="370" y="250" fill="#a5c83b" font-size="14" font-weight="bold" font-family="monospace">✓ 与 d/dx(3+2x+5x²) = 2+10x 完全一致！</text>
            </svg>
          </div>
        </div>
        <!-- 右：推导步骤 + D的结构 -->
        <div class="flex flex-col gap-4">
          <div class="border rounded-xl p-4" style="background: rgba(30,30,55,0.8); border-color: rgba(76,194,241,0.2);">
            <div class="font-bold text-[15px] mb-2" style="color: #4cc2f1;">推导过程</div>
            <div class="space-y-2">
              <div class="rounded-lg p-3 border" style="background: rgba(0,0,0,0.3); border-color: rgba(76,194,241,0.1);">
                <div class="text-[12px] mb-1" style="color: #9a8e7a;">Step 1: 微分前后系数对比</div>
                <div class="font-mono text-[13px]">
                  <span style="color: #4cc2f1;">f(x) = a₀+a₁x+a₂x²</span> → <span style="color: #4cc2f1;">[a₀, a₁, a₂]ᵀ</span>
                </div>
                <div class="font-mono text-[13px]">
                  <span style="color: #4cc2f1;">f'(x) = a₁+2a₂x</span> → <span style="color: #a5c83b;">[a₁, 2a₂, 0]ᵀ</span>
                </div>
              </div>
              <div class="rounded-lg p-3 border" style="background: rgba(0,0,0,0.3); border-color: rgba(245,183,35,0.1);">
                <div class="text-[12px] mb-1" style="color: #f5b723;">Step 2: 反推 D 使得 D·v = v'</div>
                <div class="font-mono text-[13px]" style="color: #f5b723;">
                  第0行: 0·a₀ + <span style="color: #4cc2f1;" class="font-bold">1</span>·a₁ + 0·a₂ = a₁
                </div>
                <div class="font-mono text-[13px]" style="color: #f5b723;">
                  第1行: 0·a₀ + 0·a₁ + <span style="color: #4cc2f1;" class="font-bold">2</span>·a₂ = 2a₂
                </div>
                <div class="font-mono text-[13px]" style="color: #f5b723;">
                  第2行: 0·a₀ + 0·a₁ + 0·a₂ = 0
                </div>
              </div>
            </div>
          </div>
          <div class="border rounded-xl p-4 flex-1 flex flex-col justify-center" style="background: linear-gradient(to bottom right, rgba(165,200,59,0.1), rgba(20,30,10,0.05)); border-color: rgba(165,200,59,0.25);">
            <div class="font-bold text-[17px] mb-2" style="color: #a5c83b;">关键观察</div>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full" style="background: #4cc2f1;"></div>
                <span class="text-[14px]" style="color: #e8e0d0;">D 的非零元素恰在<span class="font-bold" style="color: #4cc2f1;">次对角线</span>上</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full" style="background: #4cc2f1;"></div>
                <span class="text-[14px]" style="color: #e8e0d0;">第 i 行的值为 <span class="font-bold font-mono" style="color: #4cc2f1;">i</span>（对应幂次降 1 的系数）</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full" style="background: #f5b723;"></div>
                <span class="text-[14px]" style="color: #e8e0d0;">第 0 列全为 0：微分<span class="font-bold" style="color: #f5b723;">消去常数项</span></span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full" style="background: #a5c83b;"></div>
                <span class="text-[14px]" style="color: #e8e0d0;">最后一行全为 0：最高次项<span class="font-bold" style="color: #a5c83b;">导数为常数</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);
