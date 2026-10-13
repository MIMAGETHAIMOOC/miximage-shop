/**
 * MIX-IMAGE Art & Audio — main.js
 * Website interactivity, Prompt Architecture, Audio Player, Brief Form & Line Dispatcher
 * miximage.shop
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initScrollSpy();
  initPromptTabs();
  initBriefForm();
  initAudioPlayer();
  initCopyButtons();
  initServiceSelection();
});

/* ==========================================================================
   1. Header Scroll Effect
   ========================================================================== */
function initHeader() {
  const header = document.getElementById('site-header');
  const headerCta = document.getElementById('header-cta');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
      if (headerCta) headerCta.style.display = 'inline-flex';
    } else {
      header.classList.remove('scrolled');
      if (headerCta) headerCta.style.display = 'none';
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   2. Mobile Navigation Modal
   ========================================================================== */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileClose = document.getElementById('mobile-close');
  if (!hamburger || !mobileNav) return;

  const openNav = () => {
    mobileNav.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (mobileClose) mobileClose.focus();
  };

  const closeNav = () => {
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    hamburger.focus();
  };

  hamburger.addEventListener('click', openNav);
  if (mobileClose) mobileClose.addEventListener('click', closeNav);

  mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) closeNav();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeNav();
    }
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });
}

/* ==========================================================================
   3. ScrollSpy / Active Link Tracking
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a, .mobile-panel a');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.setAttribute('aria-current', 'location');
            } else if (href && href.startsWith('#')) {
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    },
    { rootMargin: '-20% 0px -60% 0px' }
  );

  sections.forEach((sec) => observer.observe(sec));
}

/* ==========================================================================
   4. Prompt Architecture & Library Showcase
   ========================================================================== */
const PROMPT_DATABASE = {
  identity: {
    title: "1. โครงสร้าง Identity Lock (ล็อกใบหน้าไม่ให้เพี้ยน 100%)",
    category: "Identity Lock & Protection",
    desc: "ชุดคำสั่งความสำคัญสูงสุด ใช้หัวหรือท้ายพรอมต์เพื่อบังคับ AI ไม่ให้รีเจนใบหน้าใหม่ ไม่เกลี่ยผิวจนเป็นวุ้น และรักษาสัดส่วนหัวกะโหลก",
    code: `IDENTITY LOCK - highest priority:
The supplied customer photo is the sole identity source. Keep exactly the same person: facial proportions, skull and jaw shape, eye spacing, eyelids, eyebrows, nose, lips, ears, hairline, skin tone, scars, moles, wrinkles and apparent age. Do not average, idealize, beautify, symmetrize, slim, whiten, smooth or regenerate the face. Add no makeup and remove no natural marks. If exact identity cannot be preserved, return no usable result rather than inventing a different face.

NEGATIVE PROMPT:
No identity change, face reconstruction, face swap, beautification, skin whitening, skin smoothing, age change, gender change, ethnicity change, jaw reshaping, eye enlargement, nose reshaping, lip reshaping, symmetry correction, makeup enhancement, fake hairline, invented insignia, fake badges, blurred edges, distorted ears, uncanny plastic skin.`
  },
  idphoto: {
    title: "2. พรอมต์รูปติดบัตรไทย / ชุดสูทสากล (Studio Lighting)",
    category: "Thai ID & Professional Suit",
    desc: "สูตรภาพติดบัตรทางการ จัดแสง 3 จุด (Key, Fill, Rim) ล็อกฉากหลังสีฟ้า/ขาวมาตรฐาน คมชัดระดับพิมพ์โฟโต้ 300 DPI",
    code: `Professional studio Thai ID photo of the exact subject from reference photo.
Subject wearing modern formal tailored dark navy blue business suit jacket, crisp white collared dress shirt, neatly pressed, centered composition, front-facing bust shot, eye level, neutral pleasant professional expression, mouth closed, direct eye contact with camera.
Studio three-point lighting setup, soft diffuse key light, gentle shadow under chin, clean solid studio background (#F0F4F8 soft off-white or #0066CC diplomatic cyan blue), perfectly balanced exposure, 8k resolution, razor-sharp focus on iris and hair strands, realistic micro-skin pores texture preserved, photorealistic Nikon D850 85mm f/8 portrait quality.
[Include IDENTITY LOCK block]`
  },
  prewedding: {
    title: "3. พรอมต์พรีเวดดิ้ง Sunset Veil (แสง Golden Hour 8 ระดับ)",
    category: "AI Pre-Wedding & Cinematic",
    desc: "เปลี่ยนรูปหน้าตรง 2 ท่าน สู่ภาพคู่พรีเวดดิ้งสุดโรแมนติก คุมแสงและมิติความลึกตามหลักฟิสิกส์",
    code: `Ultra-high-end romantic pre-wedding editorial portrait of the exact couple from reference photographs.
The bride wearing an exquisite ivory lace wedding gown with a delicate translucent cathedral veil catching warm breeze; the groom in a sharp bespoke charcoal tuxedo with crisp satin lapels.
Setting: scenic twilight lake shore during Golden Hour, soft warm atmospheric sunlight skimming across silhouettes, natural volumetric sun rays, soft bokeh background of distant mountain reflections, depth of field f/1.4.
Cinematic color grading, Hasselblad H6D-100c medium format texture, authentic skin tones under 3200K sunset light, natural fabric micro-wrinkles, photorealistic perfection.
[Include IDENTITY LOCK block for both subjects]`
  },
  sacred: {
    title: "4. พรอมต์ภาพมงคลพุทธศิลป์ & เทพเทวา (Fine Art Canvas)",
    category: "Sacred Art & Auspicious Decor",
    desc: "สร้างภาพท้าวเวสสุวรรณ พระพิฆเนศ มังกรทอง ปลาคราฟ เพื่อพิมพ์ลงผ้าแคนวาสและใส่กรอบหลุยส์ คมชัดลึก",
    code: `Masterpiece Thai contemporary sacred art painting of Thao Wessuwan (Lord of Wealth and Protection), divine celestial guardian posture, adorned with intricate golden royal armor inlaid with luminous rubies and jade ornaments, holding the celestial crystal mace (Gadha) radiating protective golden aura.
Background: majestic misty ethereal Himalayan peaks enveloped in swirling auspicious golden clouds, floating sacred lotus petals, glowing sacred geometry mandalas.
Artistic style: high-detail classical Thai mural art fused with modern digital fine art realism, rich 24k gold leaf accents, deep ultramarine blue and crimson lacquer texture, ultra-fine brushwork, gallery art exhibition grade, 16k UHD resolution.`
  },
  music_suno: {
    title: "5. พรอมต์สถาปัตยกรรมเพลง Suno v6 Pro (Full Production)",
    category: "Suno AI Music Production",
    desc: "โครงสร้างพร้อมวางสำหรับสร้างเพลงฮิต ควบคุมจังหวะ BPM, เครื่องดนตรี, การมิกซ์ และป้องกันการลอกเลียนแบบ",
    code: `Style Prompt:
Modern energetic Thai pop hip-hop, bright melodic synth plucks, warm punchy 808 bassline, crisp trap hi-hats, uplifting rhythm guitar, confident youthful pop vocals, dynamic hook, radio mix, high energy, hopeful, clear master

Suno Style (Short <120 chars):
Upbeat Pop Hip-hop, bright melodic synth, punchy 808, uplifting modern vocal hook

Production Parameters:
Tempo: 104 BPM | Key: E Major | Target Loudness: -11 to -9 LUFS (TikTok/Reels)
Vocal: Confident Youthful Pop Vocals with layered stereo backing
Mastering Chain: ZeroDay DSP Multi-AI, True Peak -1.0 dBTP, 48kHz / 24-bit WAV`
  }
};

function initPromptTabs() {
  const tabBtns = document.querySelectorAll('.prompt-tab-btn');
  const titleEl = document.getElementById('prompt-title');
  const descEl = document.getElementById('prompt-desc');
  const codeEl = document.getElementById('prompt-code');
  const copyBtn = document.getElementById('prompt-copy-btn');
  if (!tabBtns.length || !codeEl) return;

  const setPrompt = (key) => {
    const data = PROMPT_DATABASE[key];
    if (!data) return;

    tabBtns.forEach((b) => {
      b.classList.toggle('active', b.dataset.promptKey === key);
    });

    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;
    codeEl.textContent = data.code;

    if (copyBtn) {
      copyBtn.onclick = () => {
        copyToClipboard(data.code, copyBtn, 'คัดลอกพรอมต์ชุดนี้แล้ว');
      };
    }
  };

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      setPrompt(btn.dataset.promptKey);
    });
  });

  // Default
  setPrompt('identity');
}

/* ==========================================================================
   5. Interactive Brief Form & LINE Dispatcher
   ========================================================================== */
function initBriefForm() {
  const form = document.getElementById('music-brief-form');
  const lineBtn = document.getElementById('brief-line-btn');
  if (!form) return;

  // Realtime summary generator
  const getFormData = () => {
    const customerName = document.getElementById('brief-name')?.value.trim() || 'ไม่ระบุ';
    const phone = document.getElementById('brief-phone')?.value.trim() || 'ไม่ระบุ';
    const contactMethod = document.getElementById('brief-contact')?.value.trim() || 'LINE';
    const serviceType = document.getElementById('brief-service-type')?.value || 'เพลง AI เชิงพาณิชย์ 100%';

    // Purposes
    const purposes = Array.from(form.querySelectorAll('input[name="purpose"]:checked'))
      .map((cb) => cb.value);

    // Genre & Style
    const genre = document.getElementById('brief-genre')?.value.trim() || 'ให้โปรดิวเซอร์ช่วยแนะนำ';
    const refSong = document.getElementById('brief-ref')?.value.trim() || 'ไม่มี';

    // Mood
    const moods = Array.from(form.querySelectorAll('input[name="mood"]:checked'))
      .map((cb) => cb.value);

    // Vocal
    const vocal = document.querySelector('input[name="vocal"]:checked')?.value || 'ตามความเหมาะสมของแนวเพลง';

    // Target Platform
    const platform = document.getElementById('brief-platform')?.value || 'TikTok / Reels & Facebook';

    // Keywords / Lyrics
    const keywords = document.getElementById('brief-keywords')?.value.trim() || 'ไม่มีระบุเป็นพิเศษ';

    return {
      customerName,
      phone,
      contactMethod,
      serviceType,
      purposes: purposes.length ? purposes.join(', ') : 'โปรโมตธุรกิจ/สินค้า',
      genre,
      refSong,
      moods: moods.length ? moods.join(', ') : 'สนุกสนาน ติดหู',
      vocal,
      platform,
      keywords
    };
  };

  const generateLineMessage = (data) => {
    return `🎵 [บรีฟงานเพลง/สตูดิโอ MIX-IMAGE]
━━━━━━━━━━━━━━━━━━
👤 ผู้ติดต่อ: ${data.customerName}
📞 เบอร์โทร: ${data.phone}
💬 ช่องทางติดต่อ: ${data.contactMethod}
📦 บริการที่สนใจ: ${data.serviceType}
🎯 วัตถุประสงค์: ${data.purposes}
🎼 แนวเพลงที่ต้องการ: ${data.genre}
🔗 เพลงอ้างอิง: ${data.refSong}
✨ อารมณ์เพลง: ${data.moods}
🎤 เสียงร้อง: ${data.vocal}
📱 แพลตฟอร์มปลายทาง: ${data.platform}
📝 คีย์เวิร์ด/เรื่องราวที่ต้องใส่:
"${data.keywords}"
━━━━━━━━━━━━━━━━━━
(ส่งจากระบบบรีฟหน้าเว็บ miximage.shop)`;
  };

  if (lineBtn) {
    lineBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      const msg = generateLineMessage(data);
      const encoded = encodeURIComponent(msg);
      const lineUrl = `https://line.me/ti/p/~miximage`;

      // Copy text to clipboard for convenience
      navigator.clipboard.writeText(msg).then(() => {
        showToast('✓ คัดลอกบรีฟแล้ว กำลังเปิด LINE เพื่อส่งข้อความ...');
      }).catch(() => {});

      setTimeout(() => {
        window.open(lineUrl, '_blank');
      }, 500);
    });
  }

  // Handle direct web form submit if configured with Web3Forms
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = getFormData();
    const msgEl = document.getElementById('form-feedback');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'กำลังส่งข้อมูล...';
    }

    try {
      // If Web3Forms Access Key is provided
      const formData = new FormData(form);
      formData.append('formatted_brief', generateLineMessage(data));

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        if (msgEl) {
          msgEl.className = 'form-msg success';
          msgEl.textContent = '🎉 ส่งบรีฟเรียบร้อยแล้ว! เจ้าหน้าที่จะติดต่อกลับและส่งใบประเมินงานภายใน 24 ชม.';
          msgEl.style.display = 'block';
        }
        showToast('✓ ส่งบรีฟเรียบร้อยแล้ว!');
        form.reset();
      } else {
        throw new Error('Submit failed');
      }
    } catch (err) {
      // Fallback: Copy to LINE
      const msg = generateLineMessage(data);
      copyToClipboard(msg, null, 'คัดลอกบรีฟแล้ว กำลังเปิด LINE...');
      if (msgEl) {
        msgEl.className = 'form-msg success';
        msgEl.textContent = 'ระบบได้คัดลอกบรีฟของคุณแล้ว กรุณากดเปิด LINE: miximage เพื่อส่งข้อความได้ทันที';
        msgEl.style.display = 'block';
      }
      setTimeout(() => {
        window.open('https://line.me/ti/p/~miximage', '_blank');
      }, 600);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = '🚀 ยืนยันและส่งบรีฟงาน';
      }
    }
  });
}

/* ==========================================================================
   6. Audio Player Demo
   ========================================================================== */
function initAudioPlayer() {
  const playBtn = document.getElementById('demo-audio-play');
  const audio = document.getElementById('demo-audio-element');
  const progress = document.getElementById('demo-audio-progress');
  const timeCurrent = document.getElementById('demo-audio-current');
  const timeTotal = document.getElementById('demo-audio-total');
  const playIcon = document.getElementById('demo-play-icon');
  if (!playBtn) return;

  let isPlaying = false;
  let simulatedTimer = null;
  let simulatedSeconds = 0;
  const simulatedDuration = 188; // 3:08

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const togglePlay = () => {
    if (audio && audio.src) {
      if (audio.paused) {
        audio.play().then(() => {
          isPlaying = true;
          updateUI(true);
        }).catch(() => runSimulated());
      } else {
        audio.pause();
        isPlaying = false;
        updateUI(false);
      }
    } else {
      runSimulated();
    }
  };

  const runSimulated = () => {
    isPlaying = !isPlaying;
    updateUI(isPlaying);

    if (isPlaying) {
      simulatedTimer = setInterval(() => {
        simulatedSeconds++;
        if (simulatedSeconds >= simulatedDuration) {
          simulatedSeconds = 0;
          isPlaying = false;
          clearInterval(simulatedTimer);
          updateUI(false);
        }
        if (progress) progress.style.width = `${(simulatedSeconds / simulatedDuration) * 100}%`;
        if (timeCurrent) timeCurrent.textContent = formatTime(simulatedSeconds);
      }, 1000);
    } else {
      clearInterval(simulatedTimer);
    }
  };

  const updateUI = (playing) => {
    if (playIcon) playIcon.textContent = playing ? '⏸' : '▶';
    playBtn.setAttribute('aria-label', playing ? 'หยุดเล่นตัวอย่าง' : 'เล่นตัวอย่างเพลง');
  };

  playBtn.addEventListener('click', togglePlay);

  if (audio) {
    audio.addEventListener('timeupdate', () => {
      if (progress && audio.duration) {
        progress.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
      }
      if (timeCurrent) timeCurrent.textContent = formatTime(audio.currentTime);
    });
    audio.addEventListener('loadedmetadata', () => {
      if (timeTotal && audio.duration) timeTotal.textContent = formatTime(audio.duration);
    });
    audio.addEventListener('ended', () => {
      isPlaying = false;
      updateUI(false);
    });
  }
}

/* ==========================================================================
   7. Copy Helper & Toast
   ========================================================================== */
function copyToClipboard(text, btnElement, successMsg = '✓ คัดลอกสำเร็จ') {
  navigator.clipboard.writeText(text).then(() => {
    if (btnElement) {
      const origText = btnElement.textContent;
      btnElement.textContent = '✓ คัดลอกแล้ว';
      btnElement.classList.add('copied');
      setTimeout(() => {
        btnElement.textContent = origText;
        btnElement.classList.remove('copied');
      }, 2200);
    }
    showToast(successMsg);
  }).catch(() => {
    // Fallback prompt
    window.prompt('กด Ctrl+C เพื่อคัดลอก:', text);
  });
}

function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function initCopyButtons() {
  document.querySelectorAll('[data-copy-target]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.copyTarget;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const text = targetEl.value || targetEl.textContent;
        copyToClipboard(text.trim(), btn);
      }
    });
  });
}

/* ==========================================================================
   8. Pre-select Service on CTA click
   ========================================================================== */
function initServiceSelection() {
  document.querySelectorAll('[data-select-service]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const serviceName = btn.dataset.selectService;
      const selectEl = document.getElementById('brief-service-type');
      if (selectEl) {
        selectEl.value = serviceName;
      }
    });
  });
}

// Global functions for inline HTML calls
window.copyText = (text, btnId) => {
  const btn = document.getElementById(btnId);
  copyToClipboard(text, btn);
};

window.loadMap = () => {
  const placeholder = document.getElementById('map-placeholder');
  const btn = document.getElementById('map-load-btn');
  if (placeholder) {
    placeholder.innerHTML = `
      <iframe 
        src="https://maps.google.com/maps?q=16.041440440179915,103.11919167575981&hl=th&z=16&output=embed"
        width="100%" 
        height="220" 
        style="border:0;border-radius:12px;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        title="แผนที่ร้านสร้างภาพ MIX-IMAGE Art & Audio บรบือ มหาสารคาม">
      </iframe>
    `;
    if (btn) btn.style.display = 'none';
  }
};
