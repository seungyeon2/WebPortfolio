document.addEventListener('DOMContentLoaded', () => {
  // KSA data with category arrays (supports multi-category items)
  // categories: 'plan' (기획), 'data' (데이터), 'mkt' (마케팅)
  const K = [
    {label:'서비스기획', cats:['plan']},
    {label:'UX/UI 설계', cats:['plan']},
    {label:'데이터분석', cats:['data']},
    {label:'Power BI', cats:['data']},
    {label:'GA4', cats:['data','mkt']}
  ];
  const S = [
    {label:'문제정의', cats:['plan']},
    {label:'가설설정', cats:['plan','data']},
    {label:'리서치설계', cats:['plan','data']},
    {label:'유저인터뷰', cats:['plan','mkt']}
  ];
  const A = [
    {label:'논리적사고', cats:['plan']},
    {label:'분석적사고', cats:['data']},
    {label:'사용자중심사고', cats:['plan','mkt']}
  ];

  const ksaWrap = document.getElementById('ksaWrap');
  let ksaFilter = 'all';

  function renderKSA(){
    if(!ksaWrap) return;
    ksaWrap.innerHTML = '';
    const groups = [
      {title:'Knowledge', items:K},
      {title:'Skills', items:S},
      {title:'Abilities', items:A}
    ];
    groups.forEach(g=>{
      const head = document.createElement('div');
      head.className = 'w-full mt-4 mb-2 text-sm font-semibold text-gray-500';
      head.textContent = g.title;
      ksaWrap.appendChild(head);
      g.items.forEach(x=>{
        const matches = (ksaFilter === 'all') || (Array.isArray(x.cats) && x.cats.includes(ksaFilter));
        if(matches){
          const span = document.createElement('span');
          span.className = 'chip';
          span.textContent = x.label;
          ksaWrap.appendChild(span);
        }
      });
    });
  }
  renderKSA();

  document.querySelectorAll('.filter-btn').forEach(b=>{
    b.addEventListener('click', e=>{
      ksaFilter = e.currentTarget.dataset.filter;
      renderKSA();
    });
  });

  // Projects
  const projects = [
    {
      title:'Sttock · 생활용품 재고관리',
      tags:['plan','data','ux'],
      role:'기획/UI 100%',
      period:'2023.03–2024.03',
      tools:'Figma, Excel',
      problem:'생활용품 재고·재구매 시점 불확실',
      action:'소비패턴 기반 재고·알림 로직 설계, UX 플로우 설계',
      impact:'SoftCon 최우수상, 로컬 배포 완료',
      image:'스똑.png',
      url:'https://leeseungyeon.super.site/web-app-%ec%84%9c%eb%b9%84%ec%8a%a4-%ea%b8%b0%ed%9a%8d/%ec%8a%a4%eb%98%91'
    },
    {
      title:'What is your name? · 영어이름 추천',
      tags:['plan','data','ai'],
      role:'기획/UI 100%',
      period:'2025.01–2025.07',
      tools:'Excel, Figma',
      problem:'개인화된 영어이름 추천 부재',
      action:'데이터 기반 추천 로직 및 온보딩 설계',
      impact:'MVP 배포 후 운영종료, GA4 연결 및 분석 진행',
      image:'WYN.png',
      url:'https://leeseungyeon.super.site/web-app-%ec%84%9c%eb%b9%84%ec%8a%a4-%ea%b8%b0%ed%9a%8d/what-is-your-name'
    },
    {
      title:'SSG Note',
      tags:['ux'],
      role:'UX/UI 50%',
      period:'2024.12–2025.01',
      tools:'Figma, Powerpoint',
      problem:'메모/노트 기능의 초기 진입·핵심 니즈 파악 필요',
      action:'경쟁 분석, 핵심 플로우 정의, 와이어프레임 설계',
      impact:'신규 기능 제안서 완성 및 사용성 피드백 획득',
      image:'쓱노트.png',
      url:'https://flat-pantry-778.notion.site/SSG-Note-1a5eaa61c1b68019811ff81407ee4c7f'
    },
    {
      title:'Tryit · 여행일정 생성 서비스',
      tags:['ux'],
      role:'UX/UI 50%',
      period:'2023.03–2023.06',
      tools:'Adobe XD, AdobeIllustrator',
      problem:'복잡한 여행 일정 수립 시간 소모',
      action:'모바일 시나리오 설계',
      impact:'프로토타입 제작 및 사용자 리서치 진행',
      image:'트라잇.png',
      url:'https://flat-pantry-778.notion.site/TryIt-18ceaa61c1b6808bb71cd86b22f50e74?pvs=74'
    },
    {
      title:'굿즈스토어 관련 디자인',
      tags:['plan','ux'],
      role:'기획 100% | 디자인 100%',
      period:'2024.03–2024.06',
      tools:'Adobe Illustrator, Adobe XD',
      problem:'상세페이지 정보 전달력 개선 필요',
      action:'카피/구성 체계 재설계, 시각 계층 강화 디자인',
      impact:'시즌굿즈 출시 및 완판',
      image:'굿즈스토어.png',
      url:'https://leeseungyeon.super.site/others/%ea%b5%bf%ec%a6%88%ec%8a%a4%ed%86%a0%ec%96%b4-%ea%b4%80%eb%a0%a8-%eb%94%94%ec%9e%90%ec%9d%b8'
    },
    {
      title:'프로모션 기획 “홍삼, 빨개졌삼!”',
      tags:['plan','mkt'],
      role:'UI디자인 100% | 프로모션기획 50% | 영상제작 80%',
      period:'2024.03–2024.04',
      tools:'Adobe PremierePro, Adobe Illustrator, Adobe XD',
      problem:'2030대상 홍삼인식 재고',
      action:'콘셉트 및 UI 설계, 제작물 디자인/영상 제작',
      impact:'프로토타입 제작 및 사용자 리서치 진행',
      image:'홍삼.png',
      url:'https://leeseungyeon.super.site/others/%ed%94%84%eb%a1%9c%eb%aa%a8%ec%85%98-%ea%b8%b0%ed%9a%8d-%ed%99%8d%ec%82%bc-%eb%b9%a8%ea%b0%9c%ec%a1%8c%ec%82%bc'
    }
  ];

  const grid = document.getElementById('projectGrid');
  if(grid){
    projects.forEach(p => {
      const el = document.createElement('article');
      el.className = 'project-card rounded-2xl border hover:shadow-sm transition flex flex-col overflow-hidden';
      // Ensure images reference the moved assets/ folder
      const imgSrc = (p.image && !/^https?:\/\//i.test(p.image))
        ? (p.image.startsWith('assets/') ? p.image : `assets/${p.image}`)
        : p.image;
      const imgHtml = p.image ? `<img src="${imgSrc}" alt="${p.title}" loading="lazy" class="w-full h-44 object-cover"/>` : '';
      el.innerHTML = `
        <a href="${p.url || '#'}" target="_blank" rel="noopener" class="block focus:outline-none">
        ${imgHtml}
        <div class="p-5">
          <div class="flex flex-wrap gap-1 mb-2">${p.tags.map(t=>`<span class='tag'>${t}</span>`).join('')}</div>
          <h3 class="font-semibold text-lg">${p.title}</h3>
          <div class="mt-1 text-xs text-gray-500">역할 ${p.role} · ${p.period}</div>
          <div class="mt-2 text-xs text-gray-500">도구 ${p.tools}</div>
          <div class="mt-4 text-sm">
            <div><span class="font-medium">Problem</span> — ${p.problem}</div>
            <div class="mt-1"><span class="font-medium">Action</span> — ${p.action}</div>
            <div class="mt-1"><span class="font-medium">Impact</span> — ${p.impact}</div>
          </div>
        </div>
        </a>`;
      grid.appendChild(el);
    });
  }

  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Smart hide/reveal header on scroll
  const header = document.getElementById('siteHeader');
  if(header){
    // Ensure visible on load
    header.classList.remove('hide');
    let lastY = window.scrollY;
    let ticking = false;
    const threshold = 6; // small jitter guard for hiding only
    function onScroll(){
      const yNow = window.scrollY;
      const delta = yNow - lastY;
      const scrollingDown = delta > 0;
      // Always show when near top
      if (yNow <= 8){
        header.classList.remove('hide');
        header.classList.remove('compact');
        lastY = yNow;
        ticking = false;
        return;
      }
      // Hide only when clearly scrolling down beyond threshold
      if (scrollingDown && delta > threshold){
        header.classList.add('hide');
      }
      // Reveal on any upward scroll
      if (!scrollingDown){
        header.classList.remove('hide');
      }
      header.classList.toggle('compact', yNow > 8);
      lastY = yNow;
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if(!ticking){
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, {passive:true});
  }
  // Responsive: container-aware subtitle resizing and hero compact mode
  const hero = document.getElementById('hero');
  const subtitleEl = hero ? hero.querySelector('.subtitle') : null;
  const rightCol = hero ? hero.querySelector('.hero-right') : null;

  function applySubtitleSize(width){
    if(!subtitleEl) return;
    // scale between ~2.2rem and 3rem based on available width
    const min = 2.2, max = 3.0;
    const scaled = Math.max(min, Math.min(max, (width - 560) / 240 * (max - min) + min));
    subtitleEl.style.fontSize = scaled + 'rem';
  }

  function toggleHeroCompact(width){
    if(!hero) return;
    const shouldCompact = width < 860; // tighten when hero is narrow
    hero.classList.toggle('hero-compact', shouldCompact);
    if(rightCol && shouldCompact){
      rightCol.style.marginLeft = '12px';
    } else if(rightCol){
      rightCol.style.marginLeft = '';
    }
  }

  if(hero){
    const ro = new ResizeObserver(entries => {
      for(const entry of entries){
        const w = entry.contentRect.width;
        applySubtitleSize(w);
        toggleHeroCompact(w);
      }
    });
    ro.observe(hero);
    // initial
    const initialWidth = hero.getBoundingClientRect().width;
    applySubtitleSize(initialWidth);
    toggleHeroCompact(initialWidth);
  }

  // AI Research modal
  const aiUrls = [
    {t:'OpenAI, 기업용 AI (AI in the Enterprise)', u:'https://cdn.openai.com/business-guides-and-resources/ai-in-the-enterprise.pdf'},
    {t:'OpenAI, 에이전트 구축 실용 가이드', u:'https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf'},
    {t:'구글, Gemini 프롬프트 가이드 101 (2024-10)', u:'https://workspace.google.com/learning/content/gemini-prompt-guide'},
    {t:'구글, 프롬프트 엔지니어링', u:'https://www.innopreneur.io/wp-content/uploads/2025/04/22365_3_Prompt-Engineering_v7-1.pdf'},
    {t:'OpenAI, AI 사용 사례 식별 및 확장', u:'https://cdn.openai.com/business-guides-and-resources/identifying-and-scaling-ai-use-cases.pdf'},
    {t:'Anthropic, 효과적인 에이전트 구축', u:'https://www.anthropic.com/engineering/building-effective-agents'},
    {t:'Google Cloud, 601가지 실제 AI 사용 사례', u:'https://www.marktechpost.com/2025/04/26/google-ai-unveils-601-real-world-generative-ai-use-cases-across-industries/'},
    {t:'Anthropic, 프롬프트 엔지니어링 개요', u:'https://www.scribd.com/document/859440347/Prompt-engineering-overview-Anthropic'},
    {t:'Google, Agents Companion', u:'https://www.kaggle.com/whitepaper-agent-companion'}
  ];

  const openBtn = document.getElementById('openAiModal');
  const modal = document.getElementById('aiModal');
  const closeBtn = document.getElementById('closeAiModal');
  const listEl = document.getElementById('aiLinks');
  let lastFocus = null;

  function populateLinks(){
    if(!listEl) return;
    listEl.innerHTML = '';
    aiUrls.forEach((x, i) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = x.u; a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.innerHTML = `<span class="num">${String(i+1).padStart(2,'0')}</span><span>${x.t}</span>`;
      li.appendChild(a); listEl.appendChild(li);
    });
  }

  function openModal(){
    if(!modal) return;
    populateLinks();
    lastFocus = document.activeElement;
    modal.classList.remove('hidden');
    // allow CSS transition: set open on next frame
    requestAnimationFrame(() => modal.classList.add('open'));
    modal.setAttribute('aria-hidden','false');
    // focus first link if exists
    const firstLink = modal.querySelector('#aiLinks a');
    if(firstLink) firstLink.focus(); else closeBtn && closeBtn.focus();
  }

  function closeModal(){
    if(!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    // end transition before hide
    setTimeout(() => { modal.classList.add('hidden'); }, 220);
    if(lastFocus && lastFocus.focus) lastFocus.focus();
  }

  openBtn && openBtn.addEventListener('click', openModal);
  closeBtn && closeBtn.addEventListener('click', closeModal);
  modal && modal.addEventListener('click', (e)=>{
    if(e.target && (e.target.dataset.close === 'backdrop')) closeModal();
  });
  window.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && modal && !modal.classList.contains('hidden')) closeModal();
  });
});
