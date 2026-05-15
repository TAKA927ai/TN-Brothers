/* ============================================================
   TN BROTHERS - script.js (Upgrade Version)
   多言語対応（EN/JP）+ 全エフェクト強化版
   ============================================================ */

const LANG = {
  en: {
    nav_company:'Company', nav_investment:'Investment', nav_contact:'Contact',
    hero_label:'Global Investment Company · Hong Kong',
    hero_title1:'Building Long-Term', hero_title2:'Value Beyond Borders',
    hero_sub:'Strategic Investments For The Future', hero_cta:'Get In Touch',
    stat1_label:'Investment Projects', stat2_label:'Strategic Partners',
    stat3_label:'International Networks', stat4_label:'Growth Opportunities',
    about_label:'About TN Brothers', about_title1:'A Vision', about_title2:'Beyond Borders',
    about_quote:'"We Invest In The Future Of Industries"',
    about_text1:'TN Brothers is a global investment company based in Hong Kong. We focus on strategic investments across multiple industries including real estate, healthcare, energy, hospitality, and food businesses.',
    about_text2:'Our mission is to create sustainable long-term value through innovative investment strategies that stand the test of time.',
    about_btn:'Learn More',
    data_label1:'Founded', data_val1:'TN Brothers', data_label2:'Location', data_val2:'Hong Kong',
    data_label3:'Focus', data_val3:'Multi-Sector', data_label4:'Strategy', data_val4:'Long-Term',
    map_label:'Global Reach', map_title1:'Investing Across', map_title2:'The World',
    map_sub:'From Hong Kong to the globe — our investments span continents, cultures, and industries.',
    fields_label:'Investment Fields', fields_title1:'Strategic', fields_title2:'Portfolios',
    field1_title:'Real Estate', field1_desc:'Premium commercial and residential properties across key global markets, focusing on long-term capital appreciation.',
    field2_title:'Healthcare', field2_desc:'Investments in cutting-edge medical technology, healthcare infrastructure, and pharmaceutical innovation.',
    field3_title:'Energy', field3_desc:'Sustainable energy projects and infrastructure that power the future of global economies.',
    field4_title:'Hospitality', field4_desc:'Luxury hotel and resort investments in premier destinations worldwide, delivering exceptional guest experiences.',
    field5_title:'Food & Beverage', field5_desc:'Strategic investments in innovative dining concepts and premium food & beverage enterprises.',
    field6_title:'Global Finance', field6_desc:'Cross-border financial instruments and opportunities designed for sustained institutional growth.',
    field_link:'Explore',
    cta_label:'TN Brothers', cta_title1:'Ready To', cta_title2:'Invest In The Future?',
    cta_sub:'Partner with TN Brothers and build lasting value across global markets.',
    cta_btn1:'Contact Us', cta_btn2:'Our Portfolio',
    footer_desc:'Global investment company based in Hong Kong. Building long-term value through strategic investments across multiple industries.',
    footer_col1:'Company', footer_col2:'Investment', footer_col3:'Legal',
    footer_privacy:'Privacy Policy', footer_terms:'Terms of Service',
    footer_copy:'© 2025 TN Brothers. All Rights Reserved. · Hong Kong',
    co_label:'Our Company', co_title:'Company',
    co_vis_label:'Our Vision', co_vis_t1:'Building Value', co_vis_t2:'For Generations',
    co_vis_text1:'TN Brothers was founded on the belief that strategic, long-term investment creates lasting value — not only for our stakeholders, but for the industries and communities we invest in.',
    co_vis_text2:'Based in Hong Kong, we are uniquely positioned at the crossroads of Eastern and Western capital markets, giving us unparalleled access to global opportunities.',
    co_mis_label:'Mission', co_mis_title:'Our Mission',
    co_mis_quote:'"To identify, develop, and manage transformative investment opportunities that generate sustainable returns while contributing to global economic growth."',
    co_val_label:'Core Values', co_val_title:'What We Stand For',
    val1_title:'Integrity', val1_desc:'We operate with the highest standards of transparency and trust in all our partnerships.',
    val2_title:'Innovation', val2_desc:'We seek forward-thinking opportunities at the intersection of industries and markets.',
    val3_title:'Long-Term Vision', val3_desc:'We invest with a generational perspective, prioritizing sustainable value over short-term gain.',
    val4_title:'Global Mindset', val4_desc:'Our Hong Kong base gives us unique access to both Eastern and Western capital markets.',
    co_cta_t1:'Ready To', co_cta_t2:'Work Together?', co_cta_sub:'Explore investment opportunities with TN Brothers.',
    inv_label:'Our Portfolio', inv_title:'Investment',
    inv_intro:'TN Brothers builds diversified portfolios across five core sectors, each selected for long-term growth potential and strategic significance in global markets.',
    inv_ph_label:'Our Approach', inv_ph_title:'Investment Philosophy',
    inv_ph_text:'We combine deep sector expertise with a global perspective to identify investments that offer asymmetric risk-adjusted returns.',
    ph1_title:'Research-Driven', ph1_desc:'Every investment is backed by rigorous research and thorough due diligence.',
    ph2_title:'Risk Management', ph2_desc:'Diversification across sectors, geographies, and asset classes.',
    ph3_title:'Value Creation', ph3_desc:'Active portfolio management to maximize sustainable long-term returns.',
    ct_label:'Get In Touch', ct_title:'Contact',
    ct_lead:"Let's Build the Future Together",
    ct_text:'We welcome inquiries from potential partners, investors, and collaborators. Please reach out through the form and our team will respond within 2 business days.',
    ct_loc_label:'Location', ct_loc_val:'Hong Kong',
    ct_mail_label:'Email', ct_mail_val:'contact@tnbrothers.com',
    ct_res_label:'Response Time', ct_res_val:'Within 2 Business Days',
    ct_disc:'TN Brothers is a private investment company. All inquiries are treated with the utmost confidentiality.',
    form_name:'Full Name', form_email:'Email Address', form_subject:'Subject',
    form_msg:'Message', form_submit:'Send Message',
    form_note:'※ Connect Formspree to enable actual email delivery.',
    form_ph_name:'Your full name', form_ph_email:'your@email.com',
    form_ph_subject:'Select a subject', form_ph_msg:'Please describe your inquiry in detail...',
    form_opt1:'Investment Inquiry', form_opt2:'Partnership Opportunity',
    form_opt3:'Media & Press', form_opt4:'General Inquiry', form_opt5:'Other',
    form_success_title:'Message Sent',
    form_success_text:'Thank you for reaching out. We will respond within 2 business days.',
  },
  jp: {
    nav_company:'会社概要', nav_investment:'投資分野', nav_contact:'お問い合わせ',
    hero_label:'グローバル投資会社 · 香港',
    hero_title1:'国境を越えた', hero_title2:'長期的価値の創造',
    hero_sub:'未来へ向けた戦略的投資', hero_cta:'お問い合わせ',
    stat1_label:'投資プロジェクト', stat2_label:'戦略的パートナー',
    stat3_label:'国際ネットワーク', stat4_label:'成長機会',
    about_label:'TN Brothersについて', about_title1:'私たちのビジョン', about_title2:'国境を超えて',
    about_quote:'「私たちは産業の未来へ投資します」',
    about_text1:'TN Brothersは香港を拠点とするグローバル投資会社です。不動産、医療、エネルギー、ホテル、飲食など多分野への戦略的投資を行っています。',
    about_text2:'革新的な投資戦略を通じて、時代を超えた持続可能な長期価値を創造することが私たちの使命です。',
    about_btn:'詳細を見る',
    data_label1:'会社名', data_val1:'TN Brothers', data_label2:'所在地', data_val2:'香港',
    data_label3:'投資分野', data_val3:'複数セクター', data_label4:'戦略', data_val4:'長期投資',
    map_label:'グローバルな展開', map_title1:'世界を舞台に', map_title2:'投資する',
    map_sub:'香港から世界へ — 私たちの投資は大陸、文化、産業をまたいで広がっています。',
    fields_label:'投資分野', fields_title1:'戦略的', fields_title2:'ポートフォリオ',
    field1_title:'不動産投資', field1_desc:'主要なグローバル市場における優良商業・住宅物件への投資。長期的な資本成長に焦点を当てています。',
    field2_title:'医療関連投資', field2_desc:'最先端の医療技術、ヘルスケアインフラ、製薬イノベーションへの投資。',
    field3_title:'エネルギー投資', field3_desc:'世界経済の未来を動かす持続可能なエネルギープロジェクトとインフラへの投資。',
    field4_title:'ホテル関連投資', field4_desc:'世界の主要な目的地における高級ホテル・リゾートへの投資。卓越したゲスト体験を提供します。',
    field5_title:'飲食事業投資', field5_desc:'革新的な飲食コンセプトとプレミアムな食品・飲料企業への戦略的投資。',
    field6_title:'グローバルファイナンス', field6_desc:'持続的な機関投資家の成長のために設計されたクロスボーダーの金融商品と機会。',
    field_link:'詳細',
    cta_label:'TN Brothers', cta_title1:'未来への投資を', cta_title2:'一緒に始めませんか？',
    cta_sub:'TN Brothersとパートナーを組み、グローバル市場で永続的な価値を構築しましょう。',
    cta_btn1:'お問い合わせ', cta_btn2:'ポートフォリオ',
    footer_desc:'香港を拠点とするグローバル投資会社。複数の産業分野にわたる戦略的投資を通じて長期的価値を構築します。',
    footer_col1:'会社情報', footer_col2:'投資分野', footer_col3:'法的情報',
    footer_privacy:'プライバシーポリシー', footer_terms:'利用規約',
    footer_copy:'© 2025 TN Brothers. All Rights Reserved. · 香港',
    co_label:'会社概要', co_title:'カンパニー',
    co_vis_label:'私たちのビジョン', co_vis_t1:'世代を超えた', co_vis_t2:'価値の構築',
    co_vis_text1:'TN Brothersは、戦略的な長期投資が永続的な価値を生み出すという信念のもとに設立されました。ステークホルダーだけでなく、投資先の産業やコミュニティのために。',
    co_vis_text2:'香港という基盤が、東西の資本市場への独自のアクセスを可能にし、世界的な機会への比類なきアクセスを提供しています。',
    co_mis_label:'ミッション', co_mis_title:'私たちのミッション',
    co_mis_quote:'「世界経済の成長に貢献しながら持続可能なリターンを生み出す、変革的な投資機会を特定・開発・管理すること。」',
    co_val_label:'コアバリュー', co_val_title:'私たちが大切にすること',
    val1_title:'誠実さ', val1_desc:'全てのパートナーシップにおいて、最高水準の透明性と信頼をもって行動します。',
    val2_title:'イノベーション', val2_desc:'産業と市場の交差点に存在する、先進的な機会を追求します。',
    val3_title:'長期的視点', val3_desc:'世代を見据えた投資を行い、短期的な利益よりも持続可能な価値を優先します。',
    val4_title:'グローバル思考', val4_desc:'香港という基盤が、東西の資本市場への独自のアクセスを可能にしています。',
    co_cta_t1:'一緒に', co_cta_t2:'未来を創りませんか？', co_cta_sub:'TN Brothersと投資機会を探求しましょう。',
    inv_label:'ポートフォリオ', inv_title:'投資分野',
    inv_intro:'TN Brothersは、長期成長ポテンシャルと戦略的重要性を基準に選択されたコアセクターにわたって分散ポートフォリオを構築します。',
    inv_ph_label:'投資アプローチ', inv_ph_title:'投資哲学',
    inv_ph_text:'深いセクター専門知識とグローバルな視点を組み合わせ、非対称なリスク調整済みリターンを提供する投資を特定します。',
    ph1_title:'調査主導', ph1_desc:'すべての投資は厳格な調査とデューデリジェンスに裏付けられています。',
    ph2_title:'リスク管理', ph2_desc:'セクター、地域、資産クラスにわたる分散投資。',
    ph3_title:'価値創造', ph3_desc:'長期的リターンを最大化するためのアクティブなポートフォリオ管理。',
    ct_label:'お問い合わせ', ct_title:'コンタクト',
    ct_lead:'一緒に未来を築きましょう',
    ct_text:'パートナー候補、投資家、協力者の方からのお問い合わせを歓迎します。以下のフォームよりご連絡ください。2営業日以内にご返信いたします。',
    ct_loc_label:'所在地', ct_loc_val:'香港',
    ct_mail_label:'メール', ct_mail_val:'contact@tnbrothers.com',
    ct_res_label:'返信時間', ct_res_val:'2営業日以内',
    ct_disc:'TN Brothersはプライベート投資会社です。全てのお問い合わせは厳重に取り扱われます。',
    form_name:'お名前', form_email:'メールアドレス', form_subject:'件名',
    form_msg:'メッセージ', form_submit:'送信する',
    form_note:'※ Formspreeを接続すると実際にメールが届きます。',
    form_ph_name:'お名前を入力', form_ph_email:'your@email.com',
    form_ph_subject:'件名を選択してください', form_ph_msg:'お問い合わせ内容を詳しくご記入ください...',
    form_opt1:'投資に関するお問い合わせ', form_opt2:'パートナーシップ',
    form_opt3:'メディア・取材', form_opt4:'一般的なお問い合わせ', form_opt5:'その他',
    form_success_title:'送信完了',
    form_success_text:'お問い合わせありがとうございます。2営業日以内にご連絡いたします。',
  }
};

let currentLang = localStorage.getItem('tnb_lang') || 'en';

/* ── 言語切替 ── */
function setLanguage(lang, animate) {
  if (animate === undefined) animate = true;
  currentLang = lang;
  localStorage.setItem('tnb_lang', lang);
  const data = LANG[lang];

  function applyLang() {
    document.querySelectorAll('[data-lang]').forEach(function(el) {
      var key = el.getAttribute('data-lang');
      if (data[key] !== undefined) el.textContent = data[key];
    });
    document.querySelectorAll('[data-lang-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-lang-placeholder');
      if (data[key] !== undefined) el.placeholder = data[key];
    });
    document.querySelectorAll('[data-lang-select]').forEach(function(sel) {
      sel.querySelectorAll('option[data-opt]').forEach(function(opt) {
        var key = opt.getAttribute('data-opt');
        if (data[key] !== undefined) opt.textContent = data[key];
      });
      var ph = sel.querySelector('option[data-lang-placeholder]');
      if (ph) {
        var phKey = ph.getAttribute('data-lang-placeholder');
        if (data[phKey] !== undefined) ph.textContent = data[phKey];
      }
    });
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.documentElement.lang = lang === 'jp' ? 'ja' : 'en';
  }

  if (animate) {
    document.body.style.transition = 'opacity 0.2s ease';
    document.body.style.opacity = '0';
    setTimeout(function() { applyLang(); document.body.style.opacity = '1'; }, 200);
  } else {
    applyLang();
  }
}

/* ── ローディング ── */
function initLoading() {
  var loading = document.getElementById('loading');
  if (!loading) return;
  setTimeout(function() { loading.classList.add('hidden'); }, 2300);
}

/* ── ナビ ── */
function initNav() {
  var navbar     = document.getElementById('navbar');
  var hamburger  = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (!navbar) return;

  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      var isOpen = mobileMenu.classList.toggle('open');
      var spans  = hamburger.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
      } else {
        spans.forEach(function(s) { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
    mobileMenu.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        hamburger.querySelectorAll('span').forEach(function(s) {
          s.style.transform = ''; s.style.opacity = '';
        });
      });
    });
  }

  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu-links a').forEach(function(a) {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
}

/* ── スクロールフェードイン ── */
function initScrollFade() {
  var els = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  if (!els.length) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function() { entry.target.classList.add('visible'); }, i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  els.forEach(function(el) { obs.observe(el); });
}

/* ── カウンター ── */
function initCounters() {
  var counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var el       = entry.target;
      var target   = parseInt(el.dataset.counter, 10);
      var suffix   = el.dataset.suffix || '';
      var duration = 2200;
      var start    = performance.now();
      function update(now) {
        var elapsed  = now - start;
        var progress = Math.min(elapsed / duration, 1);
        var eased    = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(function(el) { obs.observe(el); });
}

/* ── 世界地図Canvas ── */
function initWorldMap() {
  var canvas = document.getElementById('worldMapCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var W, H, nodes, animId;
  var CITIES = [
    {x:0.76,y:0.46},{x:0.81,y:0.37},{x:0.75,y:0.53},{x:0.27,y:0.35},
    {x:0.47,y:0.27},{x:0.60,y:0.43},{x:0.84,y:0.67},{x:0.78,y:0.39},
    {x:0.50,y:0.27},{x:0.32,y:0.62},{x:0.24,y:0.31},{x:0.62,y:0.35},
  ];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    nodes = CITIES.map(function(c) {
      return { px:c.x*W, py:c.y*H, pulse:Math.random()*Math.PI*2, speed:0.018+Math.random()*0.012 };
    });
  }

  var particles = [];
  function spawnParticle() {
    if (!nodes || nodes.length < 2) return;
    var fi = Math.floor(Math.random()*nodes.length), ti;
    do { ti = Math.floor(Math.random()*nodes.length); } while (ti === fi);
    particles.push({ from:nodes[fi], to:nodes[ti], t:0, speed:0.004+Math.random()*0.003 });
  }

  function draw() {
    if (!nodes) return;
    ctx.clearRect(0,0,W,H);
    nodes.forEach(function(a,i) {
      nodes.forEach(function(b,j) {
        if (j<=i) return;
        var dx=a.px-b.px, dy=a.py-b.py, dist=Math.sqrt(dx*dx+dy*dy);
        if (dist > W*0.34) return;
        var alpha = (1-dist/(W*0.34))*0.18;
        ctx.beginPath(); ctx.strokeStyle='rgba(201,168,76,'+alpha+')'; ctx.lineWidth=0.6;
        ctx.moveTo(a.px,a.py); ctx.lineTo(b.px,b.py); ctx.stroke();
      });
    });
    for (var i=particles.length-1;i>=0;i--) {
      var p=particles[i]; p.t+=p.speed;
      if (p.t>=1) { particles.splice(i,1); continue; }
      var x=p.from.px+(p.to.px-p.from.px)*p.t;
      var y=p.from.py+(p.to.py-p.from.py)*p.t;
      var a=Math.sin(p.t*Math.PI)*0.85;
      ctx.beginPath(); ctx.arc(x,y,1.8,0,Math.PI*2); ctx.fillStyle='rgba(232,201,122,'+a+')'; ctx.fill();
    }
    nodes.forEach(function(node) {
      node.pulse += node.speed;
      var size=2.5+Math.sin(node.pulse)*1.2, glow=0.35+Math.sin(node.pulse)*0.25;
      var grad=ctx.createRadialGradient(node.px,node.py,0,node.px,node.py,size*5);
      grad.addColorStop(0,'rgba(201,168,76,'+(glow*0.35)+')');
      grad.addColorStop(1,'rgba(201,168,76,0)');
      ctx.beginPath(); ctx.arc(node.px,node.py,size*5,0,Math.PI*2); ctx.fillStyle=grad; ctx.fill();
      ctx.beginPath(); ctx.arc(node.px,node.py,size,0,Math.PI*2); ctx.fillStyle='rgba(201,168,76,'+glow+')'; ctx.fill();
      ctx.beginPath(); ctx.arc(node.px,node.py,size+5,0,Math.PI*2);
      ctx.strokeStyle='rgba(201,168,76,'+(glow*0.25)+')'; ctx.lineWidth=0.8; ctx.stroke();
    });
    if (Math.random()<0.05 && particles.length<18) spawnParticle();
    animId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize, { passive:true });
  resize();
  new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { if (!animId) draw(); }
      else { cancelAnimationFrame(animId); animId=null; }
    });
  }, {threshold:0.1}).observe(canvas.parentElement);
}

/* ── パララックス ── */
function initParallax() {
  var heroContent = document.querySelector('.hero-content');
  var heroBg = document.querySelector('.hero-bg-parallax');
  if (!heroContent && !heroBg) return;
  window.addEventListener('scroll', function() {
    var sy=window.scrollY, vh=window.innerHeight;
    if (sy < vh) {
      if (heroContent) {
        heroContent.style.transform='translateY('+(sy*0.25)+'px)';
        heroContent.style.opacity=String(1-sy/(vh*0.65));
      }
      if (heroBg) heroBg.style.transform='translateY('+(sy*0.15)+'px)';
    }
  }, {passive:true});
}

/* ── ゴールド光演出 ── */
function initGoldGlow() {
  var glow = document.createElement('div');
  glow.style.cssText='position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:0;background:radial-gradient(circle,rgba(201,168,76,0.04) 0%,transparent 70%);transform:translate(-50%,-50%);left:-9999px;top:-9999px;';
  document.body.appendChild(glow);
  var mx=0,my=0,gx=0,gy=0;
  document.addEventListener('mousemove', function(e) { mx=e.clientX; my=e.clientY; });
  function animate() {
    gx+=(mx-gx)*0.08; gy+=(my-gy)*0.08;
    glow.style.left=gx+'px'; glow.style.top=gy+'px';
    requestAnimationFrame(animate);
  }
  animate();
}

/* ── フォーム（Formspree直接送信） ── */
function initContactForm() {
  var form = document.getElementById('contactForm');
  if (!form) return;

  /* フォーカス演出のみ（送信はFormspreeに直接） */
  form.querySelectorAll('.form-input,.form-textarea,.form-select').forEach(function(input) {
    var group = input.closest('.form-group');
    if (!group) return;
    input.addEventListener('focus', function() { group.classList.add('focused'); });
    input.addEventListener('blur',  function() { group.classList.remove('focused'); });
  });

  /* e.preventDefault() を使わない → Formspreeに直接POST送信される */
}

/* ── スムーズスクロール ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
    });
  });
}

/* ── DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { setLanguage(btn.dataset.lang); });
  });
  setLanguage(currentLang, false);
  initLoading();
  initNav();
  initScrollFade();
  initCounters();
  initWorldMap();
  initParallax();
  initGoldGlow();
  initContactForm();
  initSmoothScroll();
});
