window.slideDataMap.set(6, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="genshin-char" style="top:2%;right:5%;">
      <div class="genshin-char-label">
        <div class="genshin-char-icon element-Electro">⚡</div>
        <span>八重神子 · 鸣神的挚友</span>
      </div>
    </div>
    <div class="genshin-corner genshin-corner-tl"></div>
    <div class="genshin-corner genshin-corner-tr"></div>
    <div class="genshin-corner genshin-corner-bl"></div>
    <div class="genshin-corner genshin-corner-br"></div>
    <div class="absolute inset-0" style="background: repeating-linear-gradient(0deg, transparent 0px, transparent 19px, rgba(212,168,83,0.06) 19px, rgba(212,168,83,0.06) 20px), repeating-linear-gradient(90deg, transparent 0px, transparent 19px, rgba(212,168,83,0.06) 19px, rgba(212,168,83,0.06) 20px), radial-gradient(ellipse at 70% 50%, rgba(30,58,138,0.1) 0%, transparent 60%);"></div>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col relative z-10">
      <div class="text-center mb-3">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-2" style="background: rgba(176,124,216,0.12);">
          <div class="w-2 h-2 rounded-full" style="background: #b07cd8;"></div>
          <span class="font-mono text-[13px] tracking-wider" style="color: #b07cd8;">BEYOND POLYNOMIALS</span>
        </div>
        <h2 class="text-[36px] font-bold" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif; background: linear-gradient(to right, #b07cd8, #4cc2f1, #a5c83b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          突破：非多项式函数的矩阵微分
        </h2>
      </div>
      <div class="flex-1 grid grid-cols-5 gap-4">
        <!-- 左：函数曲线 SVG -->
        <div class="col-span-2 border rounded-xl p-4 flex flex-col" style="background: rgba(30,30,55,0.8); border-color: rgba(176,124,216,0.25);">
          <div class="font-bold text-[15px] mb-2" style="color: #b07cd8;">麦克劳林展开 + 矩阵 D</div>
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
            <path d="M60 170 Q90 100 120 90 Q150 80 170 110 Q190 140 200 170 Q210 200 230 230 Q250 260 280 250 Q310 240 340 170" fill="none" stroke="#4cc2f1" stroke-width="2.5" opacity="0.9"/>
            <text x="345" y="165" fill="#4cc2f1" font-size="12" font-style="italic" font-family="serif" font-weight="bold">sin x</text>

            <!-- cos(x) 曲线 -->
            <path d="M60 90 Q90 95 120 130 Q150 165 200 170 Q250 175 280 210 Q310 245 340 250" fill="none" stroke="#f5b723" stroke-width="2.5" opacity="0.9"/>
            <text x="345" y="245" fill="#f5b723" font-size="12" font-style="italic" font-family="serif" font-weight="bold">cos x</text>

            <!-- e^x 曲线 -->
            <path d="M60 168 Q120 165 160 155 Q180 148 200 130 Q220 105 240 70 Q260 30 280 10" fill="none" stroke="#a5c83b" stroke-width="2.5" opacity="0.9"/>
            <text x="285" y="15" fill="#a5c83b" font-size="12" font-style="italic" font-family="serif" font-weight="bold">eˣ</text>

            <!-- D 作用箭头 -->
            <path d="M350 130 C370 130 370 210 350 210" fill="none" stroke="#f5b723" stroke-width="2" marker-end="url(#arrDeriv)"/>
            <text x="372" y="175" fill="#f5b723" font-size="14" font-weight="bold" font-family="monospace">D</text>

            <!-- 底部：系数向量 -->
            <rect x="15" y="300" width="350" height="40" rx="6" fill="rgba(76,194,241,0.05)" stroke="rgba(76,194,241,0.2)" stroke-width="1"/>
            <text x="190" y="320" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">sin → [0,1,0,-1/6,0,1/120,...]ᵀ → D·v → cos ✓</text>
            <text x="190" y="336" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">eˣ → [1,1,1/2,1/6,...]ᵀ → D·v → [1,1,1/2,...]ᵀ = eˣ ✓</text>

            <defs>
              <marker id="arrDeriv" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f5b723"/></marker>
            </defs>
          </svg>
        </div>
        <!-- 右上：三组验证 -->
        <div class="col-span-3 flex flex-col gap-3">
          <div class="border rounded-xl p-3" style="background: rgba(30,30,55,0.8); border-color: rgba(76,194,241,0.25);">
            <div class="font-bold text-[14px] mb-1" style="color: #4cc2f1;">sin(x) → cos(x)</div>
            <div class="grid grid-cols-3 gap-2 font-mono text-[12px]">
              <div class="rounded p-2 border" style="background: rgba(0,0,0,0.3); border-color: rgba(76,194,241,0.08);">
                <div class="text-[10px]" style="color: #9a8e7a;">展开</div>
                <div style="color: #e8e0d0;">x - x³/3! + x⁵/5! - ...</div>
              </div>
              <div class="rounded p-2 border" style="background: rgba(0,0,0,0.3); border-color: rgba(76,194,241,0.08);">
                <div class="text-[10px]" style="color: #9a8e7a;">系数向量 v</div>
                <div style="color: #4cc2f1;">[0,1,0,-¹/₆,0,¹/₁₂₀,...]</div>
              </div>
              <div class="rounded p-2 border" style="background: rgba(0,0,0,0.3); border-color: rgba(165,200,59,0.08);">
                <div class="text-[10px]" style="color: #9a8e7a;">D·v 结果</div>
                <div style="color: #a5c83b;">[1,0,-¹/₂,0,¹/₂₄,...] = cos(x) ✓</div>
              </div>
            </div>
          </div>
          <div class="border rounded-xl p-3" style="background: rgba(30,30,55,0.8); border-color: rgba(176,124,216,0.25);">
            <div class="font-bold text-[14px] mb-1" style="color: #b07cd8;">cos(x) → -sin(x)</div>
            <div class="grid grid-cols-3 gap-2 font-mono text-[12px]">
              <div class="rounded p-2 border" style="background: rgba(0,0,0,0.3); border-color: rgba(176,124,216,0.08);">
                <div class="text-[10px]" style="color: #9a8e7a;">展开</div>
                <div style="color: #e8e0d0;">1 - x²/2! + x⁴/4! - ...</div>
              </div>
              <div class="rounded p-2 border" style="background: rgba(0,0,0,0.3); border-color: rgba(176,124,216,0.08);">
                <div class="text-[10px]" style="color: #9a8e7a;">系数向量 v</div>
                <div style="color: #b07cd8;">[1,0,-¹/₂,0,¹/₂₄,...]</div>
              </div>
              <div class="rounded p-2 border" style="background: rgba(0,0,0,0.3); border-color: rgba(165,200,59,0.08);">
                <div class="text-[10px]" style="color: #9a8e7a;">D·v 结果</div>
                <div style="color: #a5c83b;">[0,-1,0,¹/₆,0,...] = -sin(x) ✓</div>
              </div>
            </div>
          </div>
          <div class="border rounded-xl p-3" style="background: rgba(30,30,55,0.8); border-color: rgba(165,200,59,0.25);">
            <div class="font-bold text-[14px] mb-1" style="color: #a5c83b;">eˣ → eˣ （自映射！）</div>
            <div class="grid grid-cols-3 gap-2 font-mono text-[12px]">
              <div class="rounded p-2 border" style="background: rgba(0,0,0,0.3); border-color: rgba(165,200,59,0.08);">
                <div class="text-[10px]" style="color: #9a8e7a;">展开</div>
                <div style="color: #e8e0d0;">1 + x + x²/2! + x³/3! + ...</div>
              </div>
              <div class="rounded p-2 border" style="background: rgba(0,0,0,0.3); border-color: rgba(165,200,59,0.08);">
                <div class="text-[10px]" style="color: #9a8e7a;">系数向量 v</div>
                <div style="color: #a5c83b;">[1,1,¹/₂,¹/₆,¹/₂₄,...]</div>
              </div>
              <div class="rounded p-2 border" style="background: rgba(0,0,0,0.3); border-color: rgba(165,200,59,0.08);">
                <div class="text-[10px]" style="color: #9a8e7a;">D·v 结果</div>
                <div class="font-bold" style="color: #a5c83b;">[1,1,¹/₂,¹/₆,...] = eˣ ✓</div>
              </div>
            </div>
          </div>
          <!-- 本质揭示 -->
          <div class="border rounded-xl p-4 flex-1" style="background: linear-gradient(to bottom right, rgba(76,194,241,0.1), rgba(20,20,50,0.1)); border-color: rgba(76,194,241,0.25);">
            <div class="font-bold text-[17px] mb-2" style="color: #4cc2f1;">本质揭示</div>
            <div class="grid grid-cols-2 gap-3">
              <div class="rounded-lg p-3 border" style="background: rgba(0,0,0,0.3); border-color: rgba(76,194,241,0.08);">
                <div class="text-[12px] mb-1" style="color: #e8e0d0;">微积分语言</div>
                <div class="font-mono text-[14px]" style="color: #4cc2f1;">d/dx(Σaₙxⁿ) = Σnaₙxⁿ⁻¹</div>
              </div>
              <div class="rounded-lg p-3 border" style="background: rgba(0,0,0,0.3); border-color: rgba(76,194,241,0.08);">
                <div class="text-[12px] mb-1" style="color: #e8e0d0;">矩阵语言</div>
                <div class="font-mono text-[14px]" style="color: #4cc2f1;">D·[a₀,a₁,a₂,...]ᵀ = [a₁,2a₂,3a₃,...]ᵀ</div>
              </div>
              <div class="col-span-2 rounded-lg p-3 border" style="background: rgba(0,0,0,0.3); border-color: rgba(245,183,35,0.08);">
                <div class="text-[13px]" style="font-family: 'Inter', 'Noto Sans SC', sans-serif; color: #f5b723;">
                  这是<span class="font-bold" style="color: #f5b723;">幂级数逐项微分</span>的矩阵形式表达。
                  核心意义：可<span class="font-bold" style="color: #4cc2f1;">独立于极限</span>定义微分——只需代数操作。
                  前提：函数在 x=0 处<span style="color: #b07cd8;">解析</span>。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);
