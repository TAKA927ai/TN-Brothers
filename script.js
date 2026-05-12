/* ============================================================
   TN BROTHERS - script.js
   ローディング・ナビ・アニメーション・フォーム処理
   ============================================================ */

/* ============================================================
   ローディング画面
   ============================================================ */
function initLoading() {
  const loading = document.getElementById('loading');
  if (!loading) return;

  /* 2.3秒後にローディングを非表示 */
  setTimeout(() => {
    loading.classList.add('hidden');
  }, 2300);
}

/* ============================================================
   ナビゲーション
   ============================================================ */
function initNav() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!navbar) return;

  /* スクロールでナビ背景変更 */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ハンバーガーメニュー開閉 */
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      const spans  = hamburger.querySelectorAll('span');

      if (isOpen) {
        /* ✕ 形に変形 */
        spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
      } else {
        /* 元に戻す */
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    /* メニュー内リンクをクリックで閉じる */
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      });
    });
  }

  /* 現在ページのナビリンクをアクティブ表示 */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   スクロールフェードイン
   IntersectionObserver で要素が画面に入ったらアニメーション
   ============================================================ */
function initScrollFade() {
  const targets = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        /* 少しずつ遅延させて順番に表示 */
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold:   0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  targets.forEach(el => observer.observe(el));
}

/* ============================================================
   カウンターアニメーション
   data-counter="数値" を持つ要素を0からカウントアップ
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el       = entry.target;
        const target   = parseInt(el.dataset.counter, 10);
        const suffix   = el.dataset.suffix || '';
        const duration = 2000; /* アニメーション時間(ms) */
        const start    = performance.now();

        function update(now) {
          const elapsed  = now - start;
          const progress = Math.min(elapsed / duration, 1);
          /* イーズアウト */
          const eased  = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);
          el.textContent = current.toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ============================================================
   世界地図エフェクト（Canvas）
   ノードと接続線を描画するシンプルなエフェクト
   ============================================================ */
function initWorldMap() {
  const canvas = document.getElementById('worldMapCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, nodes, animId;

  /* 主要都市の座標（0〜1 で正規化） */
  const CITIES = [
    { x: 0.76, y: 0.46 }, /* Hong Kong  */
    { x: 0.81, y: 0.37 }, /* Tokyo      */
    { x: 0.75, y: 0.53 }, /* Singapore  */
    { x: 0.27, y: 0.35 }, /* New York   */
    { x: 0.47, y: 0.27 }, /* London     */
    { x: 0.60, y: 0.43 }, /* Dubai      */
    { x: 0.84, y: 0.67 }, /* Sydney     */
    { x: 0.78, y: 0.39 }, /* Shanghai   */
    { x: 0.50, y: 0.27 }, /* Frankfurt  */
    { x: 0.32, y: 0.62 }, /* São Paulo  */
    { x: 0.24, y: 0.31 }, /* Toronto    */
    { x: 0.62, y: 0.35 }, /* Delhi      */
  ];

  /* リサイズ時に再計算 */
  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;

    nodes = CITIES.map(c => ({
      px:    c.x * W,
      py:    c.y * H,
      pulse: Math.random() * Math.PI * 2,
      speed: 0.018 + Math.random() * 0.012,
    }));
  }

  /* 動く粒子（ノード間を移動） */
  const particles = [];

  function spawnParticle() {
    if (!nodes || nodes.length < 2) return;
    const fromIdx = Math.floor(Math.random() * nodes.length);
    let toIdx;
    do { toIdx = Math.floor(Math.random() * nodes.length); }
    while (toIdx === fromIdx);

    particles.push({
      from:  nodes[fromIdx],
      to:    nodes[toIdx],
      t:     0,
      speed: 0.004 + Math.random() * 0.003,
    });
  }

  /* 描画ループ */
  function draw() {
    if (!nodes) return;
    ctx.clearRect(0, 0, W, H);

    /* ── 接続線（近いノード同士） ── */
    nodes.forEach((a, i) => {
      nodes.forEach((b, j) => {
        if (j <= i) return;
        const dx   = a.px - b.px;
        const dy   = a.py - b.py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > W * 0.34) return;

        const alpha = (1 - dist / (W * 0.34)) * 0.18;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(201,168,76,${alpha})`;
        ctx.lineWidth   = 0.6;
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(b.px, b.py);
        ctx.stroke();
      });
    });

    /* ── 移動粒子 ── */
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.t += p.speed;
      if (p.t >= 1) { particles.splice(i, 1); continue; }

      const x     = p.from.px + (p.to.px - p.from.px) * p.t;
      const y     = p.from.py + (p.to.py - p.from.py) * p.t;
      const alpha = Math.sin(p.t * Math.PI) * 0.85;

      ctx.beginPath();
      ctx.arc(x, y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(232,201,122,${alpha})`;
      ctx.fill();
    }

    /* ── ノード（都市点） ── */
    nodes.forEach(node => {
      node.pulse += node.speed;
      const size = 2.5 + Math.sin(node.pulse) * 1.2;
      const glow = 0.35 + Math.sin(node.pulse) * 0.25;

      /* グロー */
      const grad = ctx.createRadialGradient(
        node.px, node.py, 0,
        node.px, node.py, size * 5
      );
      grad.addColorStop(0, `rgba(201,168,76,${glow * 0.35})`);
      grad.addColorStop(1,  'rgba(201,168,76,0)');
      ctx.beginPath();
      ctx.arc(node.px, node.py, size * 5, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      /* 中心点 */
      ctx.beginPath();
      ctx.arc(node.px, node.py, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${glow})`;
      ctx.fill();

      /* リング */
      ctx.beginPath();
      ctx.arc(node.px, node.py, size + 5, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(201,168,76,${glow * 0.25})`;
      ctx.lineWidth   = 0.8;
      ctx.stroke();
    });

    /* ランダムに粒子を追加 */
    if (Math.random() < 0.05 && particles.length < 18) {
      spawnParticle();
    }

    animId = requestAnimationFrame(draw);
  }

  /* リサイズ対応 */
  window.addEventListener('resize', () => {
    resize();
  });
  resize();

  /* 画面内に入ったときだけ描画（パフォーマンス最適化） */
  const section = canvas.parentElement;
  const visObs  = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        if (!animId) draw();
      } else {
        cancelAnimationFrame(animId);
        animId = null;
      }
    });
  }, { threshold: 0.1 });

  visObs.observe(section);
}

/* ============================================================
   パララックス（ヒーローのみ）
   ============================================================ */
function initParallax() {
  const heroContent = document.querySelector('.hero-content');
  if (!heroContent) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const vh      = window.innerHeight;
    if (scrollY < vh) {
      heroContent.style.transform = `translateY(${scrollY * 0.28}px)`;
      heroContent.style.opacity   = String(1 - scrollY / (vh * 0.65));
    }
  });
}

/* ============================================================
   お問い合わせフォーム
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  /* フォーカス時のラベル色変化 */
  form.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(input => {
    const group = input.closest('.form-group');
    if (!group) return;

    input.addEventListener('focus', () => {
      group.classList.add('focused');
    });
    input.addEventListener('blur', () => {
      group.classList.remove('focused');
    });
  });

  /* 送信処理（ダミー）
     実際にメールを送りたい場合は Formspree を使ってください。
     form の action 属性に Formspree の URL を設定してください。
     例: <form id="contactForm" action="https://formspree.io/f/xxxxxxxx" method="POST">
  */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn          = form.querySelector('.form-submit');
    const originalText = btn.textContent;
    const successBox   = document.getElementById('formSuccess');

    /* ボタンを送信中状態に */
    btn.textContent = 'Sending...';
    btn.disabled    = true;

    /* 1.5秒後に完了 */
    setTimeout(() => {
      /* フォームを非表示、成功メッセージを表示 */
      form.style.display = 'none';
      if (successBox) successBox.style.display = 'block';

      /* 3秒後にリセット */
      setTimeout(() => {
        form.style.display = '';
        form.reset();
        btn.textContent    = originalText;
        btn.disabled       = false;
        if (successBox) successBox.style.display = 'none';
      }, 3000);
    }, 1500);
  });
}

/* ============================================================
   スムーズスクロール（アンカーリンク用）
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ============================================================
   初期化（DOM読み込み完了後に実行）
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initNav();
  initScrollFade();
  initCounters();
  initWorldMap();
  initParallax();
  initContactForm();
  initSmoothScroll();
});
