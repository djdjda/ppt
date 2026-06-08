
export class PPTController {
    constructor() {
        this.currentIndex = 0
        this.slides = []
        this.totalSlides = 0
        this.lastDirection = 1 // 1=forward, -1=backward
        
        this.viewport = document.getElementById('ppt-viewport')
        this.prevBtn = document.getElementById('prevBtn')
        this.nextBtn = document.getElementById('nextBtn')
        this.progressBarFill = document.getElementById('progressBarFill')
        this.pageIndicator = document.getElementById('pageIndicator')
        
        this.init()
        this.initWindowMessage();
        this.initTeyvatBackground();
    }
    
    init() {
        this.loadSlides()
        this.bindEvents()
        this.initializePage()
        this.updateUI()
        this.updateViewportScale()
    }

    initWindowMessage() {
        window.addEventListener('message', (event) => {
            if (!event.data || typeof event.data !== 'object') return;
            const { type } = event.data;
            if (type === 'childrenstart') {
                this.prevBtn.style.visibility = 'hidden'
                this.nextBtn.style.visibility = 'hidden'
                this.progressBarFill.style.visibility = 'hidden'
                this.pageIndicator.style.visibility = 'hidden'
            } else if (type === 'childrenstop') {
                this.prevBtn.style.visibility = 'visible'
                this.nextBtn.style.visibility = 'visible'
                this.progressBarFill.style.visibility = 'visible'
                this.pageIndicator.style.visibility = 'visible'
            }
        });
    }
    
    // ===== 原神提瓦特背景渲染 =====
    initTeyvatBackground() {
        const canvas = document.getElementById('teyvat-bg');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        
        // 高分辨率支持
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        let W, H;
        
        const resize = () => {
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = W * dpr;
            canvas.height = H * dpr;
            canvas.style.width = W + 'px';
            canvas.style.height = H + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        resize();
        window.addEventListener('resize', resize);
        
        // 星星
        const stars = [];
        for (let i = 0; i < 200; i++) {
            stars.push({
                x: Math.random() * 2000,
                y: Math.random() * 1200,
                r: Math.random() * 1.8 + 0.3,
                alpha: Math.random() * 0.6 + 0.2,
                twinkleSpeed: Math.random() * 0.01 + 0.0025,
                twinkleOffset: Math.random() * Math.PI * 2,
                color: ['#ffffff', '#f0d48a', '#b07cd8', '#4cc2f1', '#74c2a8'][Math.floor(Math.random() * 5)]
            });
        }
        
        // 流星
        const meteors = [];
        const spawnMeteor = () => {
            if (meteors.length < 2 && Math.random() < 0.0025) {
                meteors.push({
                    x: Math.random() * W * 0.8 + W * 0.1,
                    y: Math.random() * H * 0.2,
                    vx: (Math.random() * 1.5 + 1) * (Math.random() > 0.5 ? 1 : -1),
                    vy: Math.random() * 1 + 0.75,
                    life: 1,
                    decay: Math.random() * 0.0075 + 0.004,
                    length: Math.random() * 80 + 40
                });
            }
        };
        
        // 云朵
        const clouds = [];
        for (let i = 0; i < 6; i++) {
            clouds.push({
                x: Math.random() * 2200 - 200,
                y: H * 0.55 + Math.random() * H * 0.2,
                width: Math.random() * 400 + 200,
                height: Math.random() * 40 + 20,
                speed: Math.random() * 0.075 + 0.015,
                alpha: Math.random() * 0.08 + 0.03
            });
        }
        
        // 浮空岛
        const floatingIslands = [
            { x: W * 0.12, y: H * 0.18, size: 60, floatSpeed: 0.0015, floatOffset: 0 },
            { x: W * 0.85, y: H * 0.12, size: 45, floatSpeed: 0.002, floatOffset: Math.PI },
            { x: W * 0.65, y: H * 0.08, size: 30, floatSpeed: 0.0025, floatOffset: Math.PI * 0.5 }
        ];
        
        // 绘制远山剪影
        const drawMountains = (time) => {
            // 远景山层1 - 最远，最淡
            ctx.beginPath();
            ctx.moveTo(0, H);
            const pts1 = [
                [0, H*0.72], [W*0.05, H*0.68], [W*0.12, H*0.62], [W*0.18, H*0.65],
                [W*0.25, H*0.58], [W*0.32, H*0.61], [W*0.38, H*0.55], [W*0.45, H*0.59],
                [W*0.52, H*0.53], [W*0.58, H*0.57], [W*0.65, H*0.51], [W*0.72, H*0.56],
                [W*0.78, H*0.52], [W*0.85, H*0.58], [W*0.92, H*0.55], [W, H*0.6]
            ];
            ctx.moveTo(0, H);
            ctx.lineTo(pts1[0][0], pts1[0][1]);
            for (let i = 1; i < pts1.length; i++) {
                const xc = (pts1[i-1][0] + pts1[i][0]) / 2;
                const yc = (pts1[i-1][1] + pts1[i][1]) / 2;
                ctx.quadraticCurveTo(pts1[i-1][0], pts1[i-1][1], xc, yc);
            }
            ctx.lineTo(W, pts1[pts1.length-1][1]);
            ctx.lineTo(W, H);
            ctx.closePath();
            const grad1 = ctx.createLinearGradient(0, H*0.5, 0, H);
            grad1.addColorStop(0, 'rgba(15, 25, 55, 0.7)');
            grad1.addColorStop(1, 'rgba(10, 14, 26, 0.9)');
            ctx.fillStyle = grad1;
            ctx.fill();
            
            // 远景山层2 - 中距离
            ctx.beginPath();
            const pts2 = [
                [0, H*0.78], [W*0.08, H*0.73], [W*0.15, H*0.76], [W*0.22, H*0.7],
                [W*0.3, H*0.74], [W*0.38, H*0.68], [W*0.48, H*0.72], [W*0.55, H*0.67],
                [W*0.62, H*0.71], [W*0.7, H*0.66], [W*0.78, H*0.7], [W*0.88, H*0.65],
                [W*0.95, H*0.69], [W, H*0.72]
            ];
            ctx.moveTo(0, H);
            ctx.lineTo(pts2[0][0], pts2[0][1]);
            for (let i = 1; i < pts2.length; i++) {
                const xc = (pts2[i-1][0] + pts2[i][0]) / 2;
                const yc = (pts2[i-1][1] + pts2[i][1]) / 2;
                ctx.quadraticCurveTo(pts2[i-1][0], pts2[i-1][1], xc, yc);
            }
            ctx.lineTo(W, pts2[pts2.length-1][1]);
            ctx.lineTo(W, H);
            ctx.closePath();
            const grad2 = ctx.createLinearGradient(0, H*0.6, 0, H);
            grad2.addColorStop(0, 'rgba(18, 30, 60, 0.8)');
            grad2.addColorStop(1, 'rgba(10, 14, 26, 0.95)');
            ctx.fillStyle = grad2;
            ctx.fill();
            
            // 近景山层 - 最近，最暗
            ctx.beginPath();
            const pts3 = [
                [0, H*0.85], [W*0.06, H*0.82], [W*0.12, H*0.84], [W*0.2, H*0.79],
                [W*0.28, H*0.82], [W*0.35, H*0.78], [W*0.42, H*0.8], [W*0.5, H*0.76],
                [W*0.58, H*0.79], [W*0.65, H*0.75], [W*0.73, H*0.78], [W*0.8, H*0.74],
                [W*0.88, H*0.77], [W*0.95, H*0.73], [W, H*0.76]
            ];
            ctx.moveTo(0, H);
            ctx.lineTo(pts3[0][0], pts3[0][1]);
            for (let i = 1; i < pts3.length; i++) {
                const xc = (pts3[i-1][0] + pts3[i][0]) / 2;
                const yc = (pts3[i-1][1] + pts3[i][1]) / 2;
                ctx.quadraticCurveTo(pts3[i-1][0], pts3[i-1][1], xc, yc);
            }
            ctx.lineTo(W, pts3[pts3.length-1][1]);
            ctx.lineTo(W, H);
            ctx.closePath();
            const grad3 = ctx.createLinearGradient(0, H*0.7, 0, H);
            grad3.addColorStop(0, 'rgba(12, 18, 40, 0.9)');
            grad3.addColorStop(1, 'rgba(8, 10, 22, 1)');
            ctx.fillStyle = grad3;
            ctx.fill();
        };
        
        // 绘制月亮
        const drawMoon = (time) => {
            const mx = W * 0.78;
            const my = H * 0.12;
            const mr = 35;
            
            // 月光光晕
            const moonGlow = ctx.createRadialGradient(mx, my, mr * 0.5, mx, my, mr * 5);
            moonGlow.addColorStop(0, 'rgba(240, 212, 138, 0.15)');
            moonGlow.addColorStop(0.3, 'rgba(240, 212, 138, 0.06)');
            moonGlow.addColorStop(0.7, 'rgba(176, 124, 216, 0.02)');
            moonGlow.addColorStop(1, 'transparent');
            ctx.fillStyle = moonGlow;
            ctx.fillRect(mx - mr * 5, my - mr * 5, mr * 10, mr * 10);
            
            // 月亮本体
            ctx.beginPath();
            ctx.arc(mx, my, mr, 0, Math.PI * 2);
            const moonBody = ctx.createRadialGradient(mx - mr * 0.2, my - mr * 0.2, 0, mx, my, mr);
            moonBody.addColorStop(0, 'rgba(255, 245, 215, 0.95)');
            moonBody.addColorStop(0.5, 'rgba(240, 212, 138, 0.85)');
            moonBody.addColorStop(1, 'rgba(212, 168, 83, 0.7)');
            ctx.fillStyle = moonBody;
            ctx.fill();
            
            // 月亮表面纹理（阴影斑）
            ctx.beginPath();
            ctx.arc(mx - 8, my - 5, 8, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(180, 150, 100, 0.15)';
            ctx.fill();
            ctx.beginPath();
            ctx.arc(mx + 10, my + 8, 5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(180, 150, 100, 0.12)';
            ctx.fill();
            ctx.beginPath();
            ctx.arc(mx + 3, my - 12, 4, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(180, 150, 100, 0.1)';
            ctx.fill();
        };
        
        // 绘制浮空岛
        const drawFloatingIsland = (island, time) => {
            const floatY = Math.sin(time * island.floatSpeed + island.floatOffset) * 8;
            const x = island.x;
            const y = island.y + floatY;
            const s = island.size;
            
            // 岛体底部（倒锥形岩石）
            ctx.beginPath();
            ctx.moveTo(x - s * 0.5, y);
            ctx.lineTo(x - s * 0.15, y + s * 1.2);
            ctx.lineTo(x + s * 0.15, y + s * 1.2);
            ctx.lineTo(x + s * 0.5, y);
            ctx.closePath();
            const rockGrad = ctx.createLinearGradient(x, y, x, y + s * 1.2);
            rockGrad.addColorStop(0, 'rgba(40, 50, 80, 0.8)');
            rockGrad.addColorStop(1, 'rgba(20, 25, 50, 0.6)');
            ctx.fillStyle = rockGrad;
            ctx.fill();
            
            // 岛顶部（草地/平台）
            ctx.beginPath();
            ctx.ellipse(x, y, s * 0.55, s * 0.15, 0, 0, Math.PI * 2);
            const topGrad = ctx.createLinearGradient(x - s * 0.5, y - s * 0.1, x + s * 0.5, y + s * 0.1);
            topGrad.addColorStop(0, 'rgba(60, 90, 50, 0.7)');
            topGrad.addColorStop(0.5, 'rgba(80, 120, 60, 0.8)');
            topGrad.addColorStop(1, 'rgba(50, 80, 45, 0.7)');
            ctx.fillStyle = topGrad;
            ctx.fill();
            
            // 小树
            if (s > 40) {
                const tx = x - s * 0.15;
                const ty = y - s * 0.15;
                // 树干
                ctx.beginPath();
                ctx.moveTo(tx - 2, ty + 5);
                ctx.lineTo(tx + 2, ty + 5);
                ctx.lineTo(tx + 1, ty - 8);
                ctx.lineTo(tx - 1, ty - 8);
                ctx.closePath();
                ctx.fillStyle = 'rgba(80, 55, 30, 0.8)';
                ctx.fill();
                // 树冠
                ctx.beginPath();
                ctx.arc(tx, ty - 10, 8, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(50, 100, 40, 0.7)';
                ctx.fill();
                ctx.beginPath();
                ctx.arc(tx - 4, ty - 7, 6, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(60, 110, 45, 0.65)';
                ctx.fill();
                ctx.beginPath();
                ctx.arc(tx + 5, ty - 6, 5, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(55, 105, 42, 0.6)';
                ctx.fill();
            }
            
            // 发光粒子效果
            for (let i = 0; i < 3; i++) {
                const px = x + Math.sin(time * 0.001 + i * 2) * s * 0.6;
                const py = y + Math.cos(time * 0.0015 + i * 1.5) * s * 0.4 - 10;
                const pa = (Math.sin(time * 0.0025 + i) + 1) * 0.3 + 0.1;
                ctx.beginPath();
                ctx.arc(px, py, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(116, 194, 168, ${pa})`;
                ctx.fill();
            }
        };
        
        // 主渲染循环
        let animId;
        const render = (timestamp) => {
            const time = timestamp || 0;
            
            // 清除画布
            ctx.clearRect(0, 0, W, H);
            
            // 天空渐变（提瓦特夜空）
            const skyGrad = ctx.createLinearGradient(0, 0, 0, H);
            skyGrad.addColorStop(0, '#050810');
            skyGrad.addColorStop(0.15, '#0a1025');
            skyGrad.addColorStop(0.35, '#0f1a3a');
            skyGrad.addColorStop(0.55, '#152248');
            skyGrad.addColorStop(0.75, '#1a2a52');
            skyGrad.addColorStop(1, '#0a0e1a');
            ctx.fillStyle = skyGrad;
            ctx.fillRect(0, 0, W, H);
            
            // 极光效果
            const auroraY = H * 0.15;
            const auroraGrad = ctx.createRadialGradient(
                W * 0.4 + Math.sin(time * 0.00015) * W * 0.1, 
                auroraY + Math.cos(time * 0.0002) * 30,
                10,
                W * 0.4, auroraY, W * 0.5
            );
            auroraGrad.addColorStop(0, 'rgba(176, 124, 216, 0.08)');
            auroraGrad.addColorStop(0.3, 'rgba(76, 194, 241, 0.04)');
            auroraGrad.addColorStop(0.6, 'rgba(116, 194, 168, 0.02)');
            auroraGrad.addColorStop(1, 'transparent');
            ctx.fillStyle = auroraGrad;
            ctx.fillRect(0, 0, W, H * 0.5);
            
            // 月亮
            drawMoon(time);
            
            // 星星
            for (const star of stars) {
                const sx = star.x % W;
                const sy = star.y % (H * 0.7);
                const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
                const alpha = star.alpha * (0.5 + twinkle * 0.5);
                
                ctx.beginPath();
                ctx.arc(sx, sy, star.r, 0, Math.PI * 2);
                ctx.fillStyle = star.color;
                ctx.globalAlpha = Math.max(0, alpha);
                ctx.fill();
                
                // 较亮的星星加十字光芒
                if (star.r > 1.2 && alpha > 0.4) {
                    ctx.globalAlpha = alpha * 0.3;
                    ctx.strokeStyle = star.color;
                    ctx.lineWidth = 0.5;
                    const sparkLen = star.r * 3;
                    ctx.beginPath();
                    ctx.moveTo(sx - sparkLen, sy);
                    ctx.lineTo(sx + sparkLen, sy);
                    ctx.moveTo(sx, sy - sparkLen);
                    ctx.lineTo(sx, sy + sparkLen);
                    ctx.stroke();
                }
            }
            ctx.globalAlpha = 1;
            
            // 流星
            spawnMeteor();
            for (let i = meteors.length - 1; i >= 0; i--) {
                const m = meteors[i];
                m.x += m.vx;
                m.y += m.vy;
                m.life -= m.decay;
                
                if (m.life <= 0) {
                    meteors.splice(i, 1);
                    continue;
                }
                
                const tailX = m.x - m.vx * m.length / 3;
                const tailY = m.y - m.vy * m.length / 3;
                
                const meteorGrad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
                meteorGrad.addColorStop(0, 'transparent');
                meteorGrad.addColorStop(0.7, `rgba(240, 212, 138, ${m.life * 0.5})`);
                meteorGrad.addColorStop(1, `rgba(255, 255, 255, ${m.life * 0.8})`);
                
                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(m.x, m.y);
                ctx.strokeStyle = meteorGrad;
                ctx.lineWidth = 1.5;
                ctx.stroke();
                
                // 流星头部亮点
                ctx.beginPath();
                ctx.arc(m.x, m.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 240, ${m.life * 0.9})`;
                ctx.fill();
            }
            
            // 浮空岛
            for (const island of floatingIslands) {
                drawFloatingIsland(island, time);
            }
            
            // 远山
            drawMountains(time);
            
            // 云海
            for (const cloud of clouds) {
                cloud.x += cloud.speed;
                if (cloud.x > W + 300) cloud.x = -cloud.width - 100;
                
                const cloudGrad = ctx.createRadialGradient(
                    cloud.x + cloud.width * 0.5, cloud.y,
                    cloud.width * 0.1,
                    cloud.x + cloud.width * 0.5, cloud.y,
                    cloud.width * 0.5
                );
                cloudGrad.addColorStop(0, `rgba(180, 200, 230, ${cloud.alpha})`);
                cloudGrad.addColorStop(0.5, `rgba(140, 170, 210, ${cloud.alpha * 0.5})`);
                cloudGrad.addColorStop(1, 'transparent');
                ctx.fillStyle = cloudGrad;
                ctx.fillRect(cloud.x, cloud.y - cloud.height, cloud.width, cloud.height * 2);
            }
            
            // 底部渐变暗角
            const vignette = ctx.createRadialGradient(
                W * 0.5, H * 0.5, Math.min(W, H) * 0.3,
                W * 0.5, H * 0.5, Math.max(W, H) * 0.8
            );
            vignette.addColorStop(0, 'transparent');
            vignette.addColorStop(1, 'rgba(5, 8, 16, 0.5)');
            ctx.fillStyle = vignette;
            ctx.fillRect(0, 0, W, H);
            
            animId = requestAnimationFrame(render);
        };
        
        animId = requestAnimationFrame(render);
        
        // 清理
        window.addEventListener('beforeunload', () => {
            cancelAnimationFrame(animId);
        });
    }
    
    initializePage() {
        const urlParams = new URLSearchParams(window.location.search)
        let pageParam = urlParams.get('page')
        
        if (!pageParam) {
            pageParam = '1'
            urlParams.set('page', '1')
            const newUrl = `${window.location.pathname}?${urlParams.toString()}`
            window.history.replaceState({}, '', newUrl)
        }
        
        const pageNum = parseInt(pageParam, 10)
        const targetIndex = pageNum - 1
        
        if (!isNaN(pageNum) && targetIndex >= 0 && targetIndex < this.totalSlides) {
            if (this.slides[0]) {
                this.slides[0].classList.remove('active')
            }
            this.currentIndex = targetIndex
            if (this.slides[targetIndex]) {
                this.slides[targetIndex].classList.add('active')
            }
        } else {
            console.warn(`无效的页码参数: ${pageParam}，将显示第 1 页`)
            urlParams.set('page', '1')
            const newUrl = `${window.location.pathname}?${urlParams.toString()}`
            window.history.replaceState({}, '', newUrl)
        }
    }
    
    loadSlides() {
        if (typeof window.slideDataMap === 'undefined') {
            console.error('未找到 slideDataMap')
            return
        }
        
        const pageNumbers = Array.from(window.slideDataMap.keys()).sort((a, b) => a - b)
        this.totalSlides = pageNumbers.length
        
        if (this.totalSlides === 0) {
            console.warn('slideDataMap 为空，没有幻灯片可加载')
            return
        }
        
        pageNumbers.forEach((pageNum, idx) => {
            const slideDiv = document.createElement('div')
            slideDiv.className = 'slide'
            slideDiv.dataset.slideIndex = pageNum
            if (idx === 0) slideDiv.classList.add('active')
            
            const htmlContent = window.slideDataMap.get(pageNum)
            if (!htmlContent || typeof htmlContent !== 'string') {
                this.totalSlides--;
                console.error(`未找到页码 ${pageNum} 的内容, 或者页码 ${pageNum} 的内容为空`)
                return;
            }
            const contentEl = document.createElement('div')
            contentEl.innerHTML = htmlContent.trim()
            slideDiv.appendChild(contentEl)
            this.viewport.appendChild(slideDiv)
            this.slides.push(slideDiv)
        })
    }
    
    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.prevSlide())
        this.nextBtn.addEventListener('click', () => this.nextSlide())
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide()
            } else if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault()
                this.nextSlide()
            } else if (e.key === 'Home') {
                this.goToSlide(0)
            } else if (e.key === 'End') {
                this.goToSlide(this.totalSlides - 1)
            }
        })
        
        let touchStartX = 0
        this.viewport.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX
        })
        
        this.viewport.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX
            const diff = touchStartX - touchEndX
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.nextSlide()
                } else {
                    this.prevSlide()
                }
            }
        })
        
        window.addEventListener('resize', () => this.updateViewportScale())
    }
    
    prevSlide() {
        if (this.currentIndex > 0) {
            this.lastDirection = -1
            this.goToSlide(this.currentIndex - 1)
        }
    }
    
    nextSlide() {
        if (this.currentIndex < this.totalSlides - 1) {
            this.lastDirection = 1
            this.goToSlide(this.currentIndex + 1)
        }
    }
    
    goToSlide(index) {
        if (index < 0 || index >= this.totalSlides || index === this.currentIndex) return
        
        const oldSlide = this.slides[this.currentIndex]
        const newSlide = this.slides[index]
        
        // 移除旧的动画状态
        oldSlide.classList.remove('active', 'slide-prev')
        
        // 根据方向设置离场方向
        if (this.lastDirection === -1) {
            oldSlide.classList.add('slide-prev')
        }
        
        // 激活新幻灯片
        this.currentIndex = index
        newSlide.classList.add('active')
        
        // 延迟清理旧幻灯片的 slide-prev 类
        setTimeout(() => {
            oldSlide.classList.remove('slide-prev')
        }, 600)
        
        this.updateUrlPage(index + 1)
        this.updateUI()
    }
    
    updateUrlPage(pageNum) {
        const urlParams = new URLSearchParams(window.location.search)
        urlParams.set('page', pageNum.toString())
        const newUrl = `${window.location.pathname}?${urlParams.toString()}`
        window.history.replaceState({}, '', newUrl)
    }
    
    updateUI() {
        if (this.totalSlides === 0) {
            this.prevBtn.disabled = true
            this.nextBtn.disabled = true
            this.progressBarFill.style.width = '0%'
            this.pageIndicator.textContent = '制作中'
            return
        }
        
        this.prevBtn.disabled = this.currentIndex === 0
        this.nextBtn.disabled = this.currentIndex === this.totalSlides - 1
        
        const progress = ((this.currentIndex + 1) / this.totalSlides) * 100
        this.progressBarFill.style.width = `${progress}%`
        
        this.pageIndicator.textContent = `${this.currentIndex + 1} / ${this.totalSlides}`
    }
    
    updateViewportScale() {
        const baseWidth = 1440
        const baseHeight = 810
        
        const padding = 20
        const windowWidth = window.innerWidth - padding * 2
        const windowHeight = window.innerHeight - padding * 2
        
        const scaleX = windowWidth / baseWidth
        const scaleY = windowHeight / baseHeight
        const scale = Math.min(scaleX, scaleY, 1)
        
        this.viewport.style.transform = `scale(${scale})`
        
        console.log(`窗口: ${window.innerWidth}x${window.innerHeight}, 缩放: ${scale.toFixed(3)}`)
    }
}
