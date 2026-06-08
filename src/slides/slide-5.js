window.slideDataMap.set(5, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="genshin-char" style="top:2%;right:5%;">
      <div class="genshin-char-label">
        <div class="genshin-char-icon element-dendro">🌿</div>
        <span>纳西妲 · 世界之树</span>
      </div>
    </div>
    <div class="genshin-corner genshin-corner-tl"></div>
    <div class="genshin-corner genshin-corner-tr"></div>
    <div class="genshin-corner genshin-corner-bl"></div>
    <div class="genshin-corner genshin-corner-br"></div>
    <div class="absolute inset-0 opacity-8" style="background: repeating-linear-gradient(0deg, transparent 0px, transparent 19px, rgba(212,168,83,0.06) 19px, rgba(212,168,83,0.06) 20px), repeating-linear-gradient(90deg, transparent 0px, transparent 19px, rgba(212,168,83,0.06) 19px, rgba(212,168,83,0.06) 20px);"></div>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col relative z-10">
      <div class="text-center mb-3">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-2" style="background: rgba(76,194,241,0.12);">
          <div class="w-2 h-2 rounded-full" style="background: #4cc2f1;"></div>
          <span class="font-mono text-[13px] tracking-wider" style="color: #4cc2f1;">INFINITE EXTENSION</span>
        </div>
        <h2 class="text-[36px] font-bold" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif; background: linear-gradient(to right, #4cc2f1, #4cc2f1, #a5c83b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          从 3×3 到 ∞×∞：无限维微分矩阵
        </h2>
      </div>
      <div class="flex-1 grid grid-cols-5 gap-5">
        <!-- 左：无限维矩阵 SVG -->
        <div class="col-span-2 border rounded-xl p-4 flex flex-col" style="background: rgba(30,30,55,0.9); border-color: rgba(76,194,241,0.25);">
          <div class="font-bold text-[16px] mb-2" style="color: #4cc2f1;">无限维矩阵 D</div>
          <svg width="420" height="380" viewBox="0 0 420 380" class="flex-1">
            <!-- 矩阵方括号 -->
            <line x1="15" y1="10" x2="25" y2="10" stroke="#4cc2f1" stroke-width="2"/>
            <line x1="15" y1="10" x2="15" y2="350" stroke="#4cc2f1" stroke-width="2"/>
            <line x1="15" y1="350" x2="25" y2="350" stroke="#4cc2f1" stroke-width="2"/>
            <line x1="395" y1="10" x2="385" y2="10" stroke="#4cc2f1" stroke-width="2"/>
            <line x1="395" y1="10" x2="395" y2="350" stroke="#4cc2f1" stroke-width="2"/>
            <line x1="395" y1="350" x2="385" y2="350" stroke="#4cc2f1" stroke-width="2"/>

            <!-- Row 0 -->
            <rect x="32" y="15" width="50" height="42" rx="4" fill="rgba(239,121,56,0.12)" stroke="rgba(239,121,56,0.3)"/>
            <text x="57" y="42" text-anchor="middle" fill="#ef7938" font-size="16" font-family="monospace">0</text>
            <rect x="88" y="15" width="50" height="42" rx="4" fill="rgba(76,194,241,0.2)" stroke="rgba(76,194,241,0.6)" stroke-width="2"/>
            <text x="113" y="42" text-anchor="middle" fill="#4cc2f1" font-size="16" font-weight="bold" font-family="monospace">1</text>
            <rect x="144" y="15" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="169" y="42" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="200" y="15" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="225" y="42" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="256" y="15" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="281" y="42" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <text x="325" y="42" fill="#4b5563" font-size="14" font-family="monospace">...</text>

            <!-- Row 1 -->
            <rect x="32" y="63" width="50" height="42" rx="4" fill="rgba(239,121,56,0.12)" stroke="rgba(239,121,56,0.3)"/>
            <text x="57" y="90" text-anchor="middle" fill="#ef7938" font-size="16" font-family="monospace">0</text>
            <rect x="88" y="63" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="113" y="90" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="144" y="63" width="50" height="42" rx="4" fill="rgba(76,194,241,0.2)" stroke="rgba(76,194,241,0.6)" stroke-width="2"/>
            <text x="169" y="90" text-anchor="middle" fill="#4cc2f1" font-size="16" font-weight="bold" font-family="monospace">2</text>
            <rect x="200" y="63" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="225" y="90" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="256" y="63" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="281" y="90" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <text x="325" y="90" fill="#4b5563" font-size="14" font-family="monospace">...</text>

            <!-- Row 2 -->
            <rect x="32" y="111" width="50" height="42" rx="4" fill="rgba(239,121,56,0.12)" stroke="rgba(239,121,56,0.3)"/>
            <text x="57" y="138" text-anchor="middle" fill="#ef7938" font-size="16" font-family="monospace">0</text>
            <rect x="88" y="111" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="113" y="138" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="144" y="111" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="169" y="138" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="200" y="111" width="50" height="42" rx="4" fill="rgba(176,124,216,0.2)" stroke="rgba(176,124,216,0.6)" stroke-width="2"/>
            <text x="225" y="138" text-anchor="middle" fill="#b07cd8" font-size="16" font-weight="bold" font-family="monospace">3</text>
            <rect x="256" y="111" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="281" y="138" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <text x="325" y="138" fill="#4b5563" font-size="14" font-family="monospace">...</text>

            <!-- Row 3 -->
            <rect x="32" y="159" width="50" height="42" rx="4" fill="rgba(239,121,56,0.12)" stroke="rgba(239,121,56,0.3)"/>
            <text x="57" y="186" text-anchor="middle" fill="#ef7938" font-size="16" font-family="monospace">0</text>
            <rect x="88" y="159" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="113" y="186" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="144" y="159" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="169" y="186" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="200" y="159" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="225" y="186" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="256" y="159" width="50" height="42" rx="4" fill="rgba(245,183,35,0.2)" stroke="rgba(245,183,35,0.6)" stroke-width="2"/>
            <text x="281" y="186" text-anchor="middle" fill="#f5b723" font-size="16" font-weight="bold" font-family="monospace">4</text>
            <text x="325" y="186" fill="#4b5563" font-size="14" font-family="monospace">...</text>

            <!-- Row 4 -->
            <rect x="32" y="207" width="50" height="42" rx="4" fill="rgba(239,121,56,0.12)" stroke="rgba(239,121,56,0.3)"/>
            <text x="57" y="234" text-anchor="middle" fill="#ef7938" font-size="16" font-family="monospace">0</text>
            <rect x="88" y="207" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="113" y="234" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="144" y="207" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="169" y="234" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="200" y="207" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="225" y="234" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="256" y="207" width="50" height="42" rx="4" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="281" y="234" text-anchor="middle" fill="#4b5563" font-size="16" font-family="monospace">0</text>
            <rect x="312" y="207" width="50" height="42" rx="4" fill="rgba(165,200,59,0.2)" stroke="rgba(165,200,59,0.6)" stroke-width="2"/>
            <text x="337" y="234" text-anchor="middle" fill="#a5c83b" font-size="16" font-weight="bold" font-family="monospace">5</text>

            <!-- Ellipsis row -->
            <text x="57" y="280" text-anchor="middle" fill="#4b5563" font-size="14">⋮</text>
            <text x="113" y="280" text-anchor="middle" fill="#4b5563" font-size="14">⋮</text>
            <text x="169" y="280" text-anchor="middle" fill="#4b5563" font-size="14">⋮</text>
            <text x="225" y="280" text-anchor="middle" fill="#4b5563" font-size="14">⋮</text>
            <text x="281" y="280" text-anchor="middle" fill="#4b5563" font-size="14">⋮</text>
            <text x="337" y="280" text-anchor="middle" fill="#4b5563" font-size="14">⋱</text>

            <!-- 第0列红色高亮标注 -->
            <line x1="25" y1="5" x2="25" y2="260" stroke="#ef7938" stroke-width="3" opacity="0.4"/>
            <text x="20" y="300" text-anchor="middle" fill="#ef7938" font-size="11" font-family="monospace">全0列</text>
            <text x="20" y="316" text-anchor="middle" fill="#ef7938" font-size="10" font-family="sans-serif">← D⁻¹ 不存在</text>

            <!-- 次对角线高亮 -->
            <line x1="113" y1="15" x2="337" y2="234" stroke="#f5b723" stroke-width="2" stroke-dasharray="6,3" opacity="0.5"/>
            <text x="370" y="130" fill="#f5b723" font-size="11" font-weight="bold" font-family="monospace">D(i,i+1)=i</text>

            <!-- 规律总结 -->
            <rect x="30" y="320" width="360" height="45" rx="8" fill="rgba(245,183,35,0.08)" stroke="rgba(245,183,35,0.3)" stroke-width="1"/>
            <text x="210" y="340" text-anchor="middle" fill="#f5b723" font-size="12" font-weight="bold" font-family="monospace">规律：次对角线元素 = 1, 2, 3, 4, 5, ...</text>
            <text x="210" y="356" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">D 的第 i 行第 i+1 列元素为 i，其余全为 0</text>
          </svg>
        </div>
        <!-- 右：验证 + 关键意义 -->
        <div class="col-span-3 flex flex-col gap-4">
          <div class="border rounded-xl p-4 flex-1" style="background: rgba(30,30,55,0.9); border-color: rgba(165,200,59,0.25);">
            <div class="font-bold text-[16px] mb-2" style="color: #a5c83b;">验证示例</div>
            <div class="grid grid-cols-2 gap-3">
              <div class="rounded-lg p-3 border" style="background: rgba(0,0,0,0.3); border-color: rgba(165,200,59,0.1);">
                <div class="font-mono text-[13px] mb-1" style="color: #e8e0d0;">f(x) = 1+2x+3x²+4x³</div>
                <div class="font-mono text-[12px]" style="color: #9a8e7a;">v = [1, 2, 3, 4, 0, ...]ᵀ</div>
                <div class="font-mono text-[12px] mt-1" style="color: #a5c83b;">D·v = [2, 6, 12, 0, ...]ᵀ</div>
                <div class="font-mono text-[12px]" style="color: #a5c83b;">→ f'(x) = 2+6x+12x² ✓</div>
              </div>
              <div class="rounded-lg p-3 border" style="background: rgba(0,0,0,0.3); border-color: rgba(165,200,59,0.1);">
                <div class="font-mono text-[13px] mb-1" style="color: #e8e0d0;">f(x) = x⁵</div>
                <div class="font-mono text-[12px]" style="color: #9a8e7a;">v = [0, 0, 0, 0, 0, 1, ...]ᵀ</div>
                <div class="font-mono text-[12px] mt-1" style="color: #a5c83b;">D·v = [0, 0, 0, 0, 5, 0, ...]ᵀ</div>
                <div class="font-mono text-[12px]" style="color: #a5c83b;">→ f'(x) = 5x⁴ ✓</div>
              </div>
            </div>
          </div>
          <!-- 3×3 vs ∞×∞ 对比 -->
          <div class="border rounded-xl p-4" style="background: rgba(30,30,55,0.8); border-color: rgba(245,183,35,0.25);">
            <div class="font-bold text-[15px] mb-2" style="color: #f5b723;">为什么需要无限维？</div>
            <svg width="530" height="100" viewBox="0 0 530 100">
              <!-- 3×3 -->
              <rect x="10" y="10" width="180" height="80" rx="8" fill="rgba(239,121,56,0.05)" stroke="rgba(239,121,56,0.3)" stroke-width="1"/>
              <text x="100" y="30" text-anchor="middle" fill="#ef7938" font-size="12" font-weight="bold" font-family="monospace">3×3 矩阵</text>
              <text x="100" y="50" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">只能处理 ≤2次多项式</text>
              <text x="100" y="68" text-anchor="middle" fill="#ef7938" font-size="11" font-family="monospace">f(x)=x⁴ → 截断！✗</text>
              <text x="100" y="83" text-anchor="middle" fill="#64748b" font-size="10" font-family="monospace">D·v 丢失高次项</text>

              <!-- 箭头 -->
              <line x1="200" y1="50" x2="240" y2="50" stroke="#f5b723" stroke-width="3" marker-end="url(#arrInf)"/>
              <text x="220" y="40" fill="#f5b723" font-size="11" font-weight="bold" font-family="sans-serif">扩展</text>

              <!-- ∞×∞ -->
              <rect x="250" y="10" width="270" height="80" rx="8" fill="rgba(165,200,59,0.05)" stroke="rgba(165,200,59,0.3)" stroke-width="1"/>
              <text x="385" y="30" text-anchor="middle" fill="#a5c83b" font-size="12" font-weight="bold" font-family="monospace">∞×∞ 矩阵</text>
              <text x="385" y="50" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">任意次多项式均可正确求导</text>
              <text x="385" y="68" text-anchor="middle" fill="#a5c83b" font-size="11" font-family="monospace">f(x)=x⁴ → [0,0,0,4,0,...]ᵀ ✓</text>
              <text x="385" y="83" text-anchor="middle" fill="#a5c83b" font-size="10" font-family="monospace">f(x)=x¹⁰⁰ → 同样适用！</text>

              <defs>
                <marker id="arrInf" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f5b723"/></marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
`);
