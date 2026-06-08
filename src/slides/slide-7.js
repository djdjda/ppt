window.slideDataMap.set(7, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="genshin-char" style="top:2%;right:5%;">
      <div class="genshin-char-label">
        <div class="genshin-char-icon element-Geo">🪨</div>
        <span>钟离 · 契约即永恒</span>
      </div>
    </div>
    <div class="genshin-corner genshin-corner-tl"></div>
    <div class="genshin-corner genshin-corner-tr"></div>
    <div class="genshin-corner genshin-corner-bl"></div>
    <div class="genshin-corner genshin-corner-br"></div>
    <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(212,168,83,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.06) 1px, transparent 1px); background-size: 50px 50px;"></div>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col relative z-10">
      <div class="text-center mb-3">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-2" style="background: rgba(239,121,56,0.12);">
          <div class="w-2 h-2 rounded-full" style="background: #ef7938;"></div>
          <span class="font-mono text-[13px] tracking-wider" style="color: #ef7938;">HIGHER ORDER OPERATIONS</span>
        </div>
        <h2 class="text-[36px] font-bold" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif; background: linear-gradient(to right, #ef7938, #4cc2f1, #ef7938); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          Dⁿ 与 D⁻¹：高阶微分与积分
        </h2>
      </div>
      <div class="flex-1 grid grid-cols-2 gap-6">
        <!-- 左：Dⁿ 高阶微分 + 矩阵结构 SVG -->
        <div class="border rounded-xl p-4 flex flex-col" style="background: rgba(30,30,55,0.8); border-color: rgba(239,121,56,0.25);">
          <div class="font-bold text-[17px] mb-2" style="color: #ef7938;">高阶微分：Dⁿ</div>
          <svg width="620" height="265" viewBox="0 0 620 265">
            <!-- D 矩阵 -->
            <text x="10" y="25" fill="#4cc2f1" font-size="14" font-weight="bold" font-family="monospace">D =</text>
            <rect x="45" y="5" width="35" height="30" rx="3" fill="rgba(76,194,241,0.2)" stroke="rgba(76,194,241,0.5)" stroke-width="1.5"/>
            <text x="62" y="25" text-anchor="middle" fill="#4cc2f1" font-size="13" font-weight="bold" font-family="monospace">1</text>
            <rect x="85" y="5" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="102" y="25" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="125" y="5" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="142" y="25" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="45" y="40" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="62" y="60" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="85" y="40" width="35" height="30" rx="3" fill="rgba(76,194,241,0.2)" stroke="rgba(76,194,241,0.5)" stroke-width="1.5"/>
            <text x="102" y="60" text-anchor="middle" fill="#4cc2f1" font-size="13" font-weight="bold" font-family="monospace">2</text>
            <rect x="125" y="40" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="142" y="60" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="45" y="75" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="62" y="95" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="85" y="75" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="102" y="95" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="125" y="75" width="35" height="30" rx="3" fill="rgba(176,124,216,0.2)" stroke="rgba(176,124,216,0.5)" stroke-width="1.5"/>
            <text x="142" y="95" text-anchor="middle" fill="#b07cd8" font-size="13" font-weight="bold" font-family="monospace">3</text>
            <text x="170" y="38" fill="#94a3b8" font-size="10">一阶微分</text>

            <!-- 箭头 D→D² -->
            <line x1="195" y1="55" x2="225" y2="55" stroke="#f5b723" stroke-width="2.5" marker-end="url(#arrPow)"/>

            <!-- D² 矩阵 -->
            <text x="240" y="25" fill="#f5b723" font-size="14" font-weight="bold" font-family="monospace">D² =</text>
            <rect x="285" y="5" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="302" y="25" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="325" y="5" width="35" height="30" rx="3" fill="rgba(100,116,139,0.1)" stroke="rgba(100,116,139,0.2)"/>
            <text x="342" y="25" text-anchor="middle" fill="#4b5563" font-size="13" font-family="monospace">0</text>
            <rect x="365" y="5" width="35" height="30" rx="3" fill="rgba(245,183,35,0.2)" stroke="rgba(245,183,35,0.5)" stroke-width="1.5"/>
            <text x="382" y="25" text-anchor="middle" fill="#f5b723" font-size="12" font-weight="bold" font-family="monospace">2</text>
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
            <line x1="400" y1="110" x2="400" y2="150" stroke="#ef7938" stroke-width="2.5"/>
            <line x1="400" y1="150" x2="195" y2="150" stroke="#ef7938" stroke-width="2.5" marker-end="url(#arrPowR)"/>

            <!-- D³ 矩阵 - 在 D 正下方 -->
            <text x="10" y="140" fill="#ef7938" font-size="14" font-weight="bold" font-family="monospace">D³ =</text>
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
            <text x="45" y="235" fill="#ef7938" font-size="10" font-weight="bold">全零矩阵</text>
            <text x="45" y="248" fill="#94a3b8" font-size="9">(对二次多项式)</text>

            <defs>
              <marker id="arrPow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f5b723"/></marker>
              <marker id="arrPowR" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#ef7938"/></marker>
            </defs>
          </svg>
          <!-- 验证示例 -->
          <div class="rounded-lg p-3 border flex-1 mt-6" style="background: rgba(0,0,0,0.3); border-color: rgba(239,121,56,0.08);">
            <div class="text-[12px] mb-2" style="color: #e8e0d0;">验证：f(x) = x⁴</div>
            <div class="space-y-2.5 font-mono text-[13px]">
              <div class="flex items-center gap-2">
                <div class="w-[90px]" style="color: #9a8e7a;">v =</div>
                <div style="color: #e8e0d0;">[0,0,0,0,1,...]ᵀ</div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-[90px]" style="color: #ef7938;">D·v =</div>
                <div style="color: #ef7938;">[0,0,0,4,0,...]ᵀ</div>
                <div style="color: #9a8e7a;">→ f' = 4x³</div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-[90px]" style="color: #ef7938;">D²·v =</div>
                <div style="color: #ef7938;">[0,0,12,0,...]ᵀ</div>
                <div style="color: #9a8e7a;">→ f'' = 12x²</div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-[90px]" style="color: #ef7938;">D³·v =</div>
                <div style="color: #ef7938;">[0,24,0,...]ᵀ</div>
                <div style="color: #9a8e7a;">→ f''' = 24x</div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-[90px]" style="color: #b07cd8;">D⁴·v =</div>
                <div style="color: #b07cd8;">[24,0,...]ᵀ</div>
                <div style="color: #9a8e7a;">→ f⁽⁴⁾ = 24</div>
              </div>
            </div>
          </div>
          <div class="mt-2 rounded-lg p-2.5 border" style="background: linear-gradient(to right, rgba(239,121,56,0.1), rgba(239,121,56,0.1)); border-color: rgba(239,121,56,0.17);">
            <div class="text-[13px]" style="font-family: 'Inter', 'Noto Sans SC', sans-serif; color: #ef7938;">
              <span class="font-bold">运算同构性：</span>矩阵的幂运算 ↔ 微分运算的重复
            </div>
          </div>
        </div>
        <!-- 右：D⁻¹ 失效可视化 -->
        <div class="border rounded-xl p-4 flex flex-col" style="background: rgba(30,30,55,0.8); border-color: rgba(239,121,56,0.25);">
          <div class="font-bold text-[17px] mb-2" style="color: #ef7938;">积分 = D⁻¹ ？</div>
          <!-- 信息损失图 -->
          <svg width="560" height="160" viewBox="0 0 560 160">
            <!-- 左：多个函数映射到同一导数 -->
            <rect x="10" y="15" width="110" height="130" rx="8" fill="rgba(76,194,241,0.05)" stroke="rgba(76,194,241,0.3)" stroke-width="1"/>
            <text x="65" y="35" text-anchor="middle" fill="#4cc2f1" font-size="11" font-weight="bold">函数空间</text>
            <rect x="20" y="42" width="90" height="22" rx="4" fill="rgba(76,194,241,0.1)" stroke="rgba(76,194,241,0.3)"/>
            <text x="65" y="58" text-anchor="middle" fill="#4cc2f1" font-size="11" font-style="italic" font-family="serif">f(x)</text>
            <rect x="20" y="70" width="90" height="22" rx="4" fill="rgba(76,194,241,0.1)" stroke="rgba(76,194,241,0.3)"/>
            <text x="65" y="86" text-anchor="middle" fill="#4cc2f1" font-size="11" font-style="italic" font-family="serif">f(x)+1</text>
            <rect x="20" y="98" width="90" height="22" rx="4" fill="rgba(76,194,241,0.1)" stroke="rgba(76,194,241,0.3)"/>
            <text x="65" y="114" text-anchor="middle" fill="#4cc2f1" font-size="11" font-style="italic" font-family="serif">f(x)+C</text>

            <!-- d/dx 箭头（多对一） -->
            <line x1="125" y1="53" x2="200" y2="80" stroke="#f5b723" stroke-width="2" marker-end="url(#arrInfo1)"/>
            <line x1="125" y1="81" x2="200" y2="80" stroke="#f5b723" stroke-width="2"/>
            <line x1="125" y1="109" x2="200" y2="80" stroke="#f5b723" stroke-width="2"/>
            <text x="162" y="65" fill="#f5b723" font-size="11" font-weight="bold" font-family="monospace">d/dx</text>

            <!-- 右：同一导数 -->
            <rect x="210" y="55" width="110" height="50" rx="8" fill="rgba(165,200,59,0.05)" stroke="rgba(165,200,59,0.3)" stroke-width="1"/>
            <text x="265" y="75" text-anchor="middle" fill="#a5c83b" font-size="11" font-weight="bold">导数空间</text>
            <rect x="220" y="82" width="90" height="22" rx="4" fill="rgba(165,200,59,0.15)" stroke="rgba(165,200,59,0.4)"/>
            <text x="265" y="98" text-anchor="middle" fill="#b8d66a" font-size="11" font-style="italic" font-family="serif">f'(x)</text>

            <!-- 不可逆标记 -->
            <line x1="265" y1="112" x2="265" y2="135" stroke="#ef7938" stroke-width="2" stroke-dasharray="4,2"/>
            <text x="265" y="150" text-anchor="middle" fill="#ef7938" font-size="11" font-weight="bold" font-family="monospace">? → 无法唯一恢复</text>

            <!-- 向量空间对照 -->
            <rect x="340" y="15" width="100" height="130" rx="8" fill="rgba(76,194,241,0.05)" stroke="rgba(76,194,241,0.3)" stroke-width="1"/>
            <text x="390" y="35" text-anchor="middle" fill="#4cc2f1" font-size="11" font-weight="bold">向量空间</text>
            <rect x="350" y="42" width="80" height="22" rx="4" fill="rgba(76,194,241,0.1)" stroke="rgba(76,194,241,0.3)"/>
            <text x="390" y="58" text-anchor="middle" fill="#7ad6f5" font-size="10" font-family="monospace">[3,2,5]ᵀ</text>
            <rect x="350" y="70" width="80" height="22" rx="4" fill="rgba(76,194,241,0.1)" stroke="rgba(76,194,241,0.3)"/>
            <text x="390" y="86" text-anchor="middle" fill="#7ad6f5" font-size="10" font-family="monospace">[7,2,5]ᵀ</text>
            <rect x="350" y="98" width="80" height="22" rx="4" fill="rgba(76,194,241,0.1)" stroke="rgba(76,194,241,0.3)"/>
            <text x="390" y="114" text-anchor="middle" fill="#7ad6f5" font-size="10" font-family="monospace">[C,2,5]ᵀ</text>

            <!-- D 箭头 -->
            <line x1="445" y1="53" x2="490" y2="80" stroke="#f5b723" stroke-width="2" marker-end="url(#arrInfo2)"/>
            <line x1="445" y1="81" x2="490" y2="80" stroke="#f5b723" stroke-width="2"/>
            <line x1="445" y1="109" x2="490" y2="80" stroke="#f5b723" stroke-width="2"/>
            <text x="467" y="65" fill="#f5b723" font-size="11" font-weight="bold" font-family="monospace">D·</text>

            <!-- 结果 -->
            <rect x="500" y="55" width="50" height="50" rx="8" fill="rgba(165,200,59,0.05)" stroke="rgba(165,200,59,0.3)" stroke-width="1"/>
            <text x="525" y="78" text-anchor="middle" fill="#a5c83b" font-size="10" font-weight="bold" font-family="monospace">[2,10,0]ᵀ</text>
            <text x="525" y="98" text-anchor="middle" fill="#a5c83b" font-size="9" font-family="monospace">同！</text>

            <defs>
              <marker id="arrInfo1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f5b723"/></marker>
              <marker id="arrInfo2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f5b723"/></marker>
            </defs>
          </svg>
          <!-- 三重原因 -->
          <div class="border-2 rounded-xl p-4 mt-2" style="background: rgba(239,121,56,0.08); border-color: rgba(239,121,56,0.33);">
            <div class="font-bold text-[16px] mb-2" style="color: #ef7938;">关键结论：D 不存在严格逆矩阵！</div>
            <div class="space-y-2">
              <div class="flex items-start gap-2">
                <div class="text-[14px] mt-0.5 font-bold" style="color: #f5b723;">① 矩阵层面</div>
                <div class="text-[13px]" style="color: #e8e0d0;">D 第一列全为 0 → D'·D 第1列恒为 [0,0,...]ᵀ ≠ I</div>
              </div>
              <div class="flex items-start gap-2">
                <div class="text-[14px] mt-0.5 font-bold" style="color: #b07cd8;">② 微积分本质</div>
                <div class="text-[13px]" style="color: #e8e0d0;">微分丢失常数项：f(x) 与 f(x)+C 的导数相同</div>
              </div>
              <div class="flex items-start gap-2">
                <div class="text-[14px] mt-0.5 font-bold" style="color: #a5c83b;">③ 推论</div>
                <div class="text-[13px]" style="color: #e8e0d0;">积分需额外初始条件（不定积分的 +C）</div>
              </div>
            </div>
          </div>
          <div class="mt-auto rounded-lg p-2.5 border" style="background: linear-gradient(to right, rgba(76,194,241,0.1), rgba(176,124,216,0.1)); border-color: rgba(76,194,241,0.17);">
            <div class="text-[13px]" style="font-family: 'Inter', 'Noto Sans SC', sans-serif; color: #4cc2f1;">
              <span class="font-bold">深层启示：</span>信息不可逆性在矩阵和微积分两个层面完美对应
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- MyGO 角色 -->
    <div class="mygo-char" style="left:50%;bottom:15%;transform:translateX(-50%);"><img src="/characters/rana-excited.png" alt="rana"></div>
    <div class="mygo-char" style="right:1.5%;top:30%;"><img src="/characters/rana-smile.png" alt="rana"></div>
  </div>
`);
