import React from 'react'

export const NortePlaceholder = () => (
  <div className="w-full h-full bg-[#fcfcfc] flex flex-col border border-black/5 overflow-hidden">
    <div className="h-10 border-b border-black/5 flex items-center px-4 gap-2 bg-white">
      <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
      <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
      <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
    </div>
    <div className="flex-1 p-8 md:p-12 flex flex-col relative">
      <div className="flex justify-between items-start mb-16">
        <div className="text-[10px] font-bold tracking-[0.2em] text-black/40">ATÖLYE NORTE</div>
        <div className="flex gap-2">
          <div className="w-8 h-0.5 bg-black/10" />
          <div className="w-8 h-0.5 bg-black/10" />
        </div>
      </div>
      <div className="w-3/4 h-12 md:h-16 bg-black/5 mb-6" />
      <div className="w-1/2 h-4 md:h-6 bg-black/5 mb-16" />
      <div className="grid grid-cols-2 gap-8 flex-1">
        <div className="bg-black/5 rounded-t-full h-full transform translate-y-8" />
        <div className="bg-black/10 rounded-t-full h-full" />
      </div>
    </div>
  </div>
)

export const ImediaffPlaceholder = () => (
  <div className="w-full h-full bg-[#0a0a0a] flex flex-col border border-white/10 overflow-hidden relative group">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center items-center relative z-10">
      <div className="absolute top-8 left-8 text-[10px] font-bold tracking-[0.2em] text-white/40">IMEDIAFF</div>
      <div className="w-4/5 h-16 md:h-24 bg-white/5 mb-6 backdrop-blur-sm" />
      <div className="w-3/5 h-16 md:h-24 bg-white/5 backdrop-blur-sm" />
    </div>
    <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-0" />
  </div>
)

export const NovaPlaceholder = () => (
  <div className="w-full h-full bg-white flex border border-black/5 overflow-hidden">
    <div className="w-12 md:w-16 h-full border-r border-black/5 flex flex-col items-center py-6 gap-6 bg-zinc-50/50">
      <div className="w-6 h-6 rounded bg-black/10 mb-2" />
      <div className="w-4 h-4 rounded-sm bg-black/5" />
      <div className="w-4 h-4 rounded-sm bg-black/5" />
      <div className="w-4 h-4 rounded-sm bg-black/5" />
    </div>
    <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 bg-white/50">
      <div className="h-6 w-1/3 bg-black/5 rounded-sm" />
      <div className="grid grid-cols-3 gap-4">
        <div className="h-16 md:h-20 bg-black/[0.02] rounded border border-black/5" />
        <div className="h-16 md:h-20 bg-black/[0.02] rounded border border-black/5" />
        <div className="h-16 md:h-20 bg-black/[0.02] rounded border border-black/5" />
      </div>
      <div className="flex-1 bg-black/[0.02] rounded border border-black/5 p-6 flex flex-col justify-end">
         <div className="w-full h-[1px] bg-black/5" />
         <div className="w-full h-[1px] bg-black/5 mt-8" />
         <div className="w-full h-[1px] bg-black/5 mt-8" />
      </div>
    </div>
  </div>
)

export const BloomPlaceholder = () => (
  <div className="w-full h-full bg-[#fcfcfc] flex flex-col border border-black/5 p-6 md:p-8 overflow-hidden">
    <div className="flex justify-between items-start mb-8">
      <div>
        <div className="w-8 h-2 bg-black/10 rounded-full mb-3" />
        <div className="w-32 h-8 bg-black/5 rounded-sm" />
      </div>
      <div className="w-16 h-8 bg-black/5 rounded-full" />
    </div>
    <div className="flex-1 relative mt-4">
      <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M0,100 L0,60 C20,60 30,80 50,40 C70,0 80,30 100,20 L100,100 Z" fill="rgba(0,0,0,0.02)" />
        <path d="M0,60 C20,60 30,80 50,40 C70,0 80,30 100,20" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
      {/* Nodes */}
      <div className="absolute top-[40%] left-[50%] w-3 h-3 bg-white border-2 border-black/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-[20%] left-[100%] w-3 h-3 bg-white border-2 border-black/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </div>
  </div>
)

export const KreaPlaceholder = () => (
  <div className="w-full h-full bg-white flex flex-col border border-black/5 p-4 md:p-6 gap-4 overflow-hidden">
    <div className="w-full flex-1 bg-black/[0.03] flex items-center justify-center relative overflow-hidden">
       <div className="absolute inset-0 flex items-center justify-center">
         <div className="w-[120%] h-[200%] bg-white/50 rotate-12 transform" />
       </div>
       <div className="w-24 h-24 rounded-full bg-black/10 mix-blend-multiply relative z-10" />
       <div className="w-16 h-16 rounded-full bg-black/20 mix-blend-multiply relative z-10 -ml-8" />
    </div>
    <div className="w-full h-1/3 flex gap-4">
       <div className="flex-1 bg-black/[0.03]" />
       <div className="w-1/3 bg-black" />
    </div>
  </div>
)

export const projectsData = [
  {
    id: 1,
    slug: 'atolye-norte',
    title: 'Atölye Norte',
    category: 'Web Tasarım',
    type: 'Butik Kafe / Premium Marka',
    summary: 'Butik ve lüks bir kafe deneyimini dijitalde yalın, şık ve güven veren bir web sitesiyle yansıttık.',
    description: 'Butik ve lüks bir kafe deneyimini dijitalde yalın, şık ve güven veren bir web sitesiyle yansıttık.',
    services: ['Web Tasarım', 'UI/UX', 'Marka Deneyimi', 'Responsive'],
    year: '2024',
    platform: 'Web',
    process: ['Strateji', 'Tasarım', 'Geliştirme'],
    clientType: 'Butik Kafe',
    projectType: 'Kurumsal Marka Sitesi',
    liveUrl: '#',
    tags: ['Web Tasarım', 'UI/UX', 'Marka Deneyimi'],
    Placeholder: NortePlaceholder,
    featured: true,
    sections: {
      ozet: 'Atölye Norte için dijital dünyada fiziksel mekanın sıcaklığını ve premium hissini yansıtan bir web deneyimi tasarladık. Amacımız, misafirlerin kahve kalitesini ve atmosferi siteye girdikleri an hissetmelerini sağlamaktı.',
      hedef: 'Mevcut hedef kitleyi genişletmek ve dijital kanallar üzerinden marka bilinirliğini artırırken, rezervasyon ve iletişim süreçlerini daha kurumsal bir yapıya kavuşturmak.',
      cozum: 'Yalın ve modern bir tasarım dili oluşturduk. Geniş tipografi kullanımı, soft renk paletleri ve yüksek kaliteli görsellerle marka kimliğini destekledik. Menü ve lokasyon bilgilerini kullanıcı odaklı bir mimariyle sunduk.',
      sonuc: 'Yeni web sitesi yayına alındıktan sonra mobil trafik %45 artış gösterdi. Kullanıcıların sitede kalma süresi uzarken, marka imajı premium segmente daha güçlü bir şekilde konumlandırıldı.'
    }
  },
  {
    id: 2,
    slug: 'imediaff',
    title: 'imediaff',
    category: 'Global Web Sitesi',
    type: 'Influencer Marketing Agency',
    summary: 'Influencer marketing alanında global ölçekte hizmet veren bir ajans için modern, net ve uluslararası algısı güçlü bir web deneyimi oluşturduk.',
    description: 'Influencer marketing alanında global ölçekte hizmet veren bir ajans için modern, net ve uluslararası algısı güçlü bir web deneyimi oluşturduk.',
    services: ['Web Geliştirme', 'Kurumsal Site', 'Global Marka', 'UI Design'],
    year: '2024',
    platform: 'Web',
    process: ['Strateji', 'UI Design', 'Frontend'],
    clientType: 'Influencer Marketing Agency',
    projectType: 'Global Kurumsal Web Sitesi',
    liveUrl: '#',
    tags: ['Web Geliştirme', 'Kurumsal Site', 'Global Marka'],
    Placeholder: ImediaffPlaceholder,
    featured: true,
    sections: {
      ozet: 'Global pazarda influencer ve markaları bir araya getiren imediaff için güven veren, kurumsal yapıyı yansıtan uluslararası bir dijital yüz tasarladık.',
      hedef: 'Ajansın global arenadaki profesyonel duruşunu yansıtmak, dünya çapındaki markalar ve influencerlar için modern, anlaşılır ve güven verici bir iletişim noktası oluşturmak.',
      cozum: 'Koyu renklerin hakim olduğu, keskin ve modern bir kurumsal kimlik uyguladık. Başarı hikayelerini öne çıkaran asimetrik grid yapıları ve net tipografi kullandık.',
      sonuc: 'Yenilenen yüzüyle imediaff, uluslararası markalarla olan etkileşimini dijitalde %60 oranında artırdı. B2B iletişimde güçlü bir marka prestiji sağlandı.'
    }
  },
  {
    id: 3,
    slug: 'nova-panel',
    title: 'Nova Panel',
    category: 'Dashboard',
    type: 'Dashboard / Web App',
    summary: 'Veri odaklı süreçleri daha anlaşılır ve yönetilebilir hale getiren modern bir panel arayüzü tasarladık.',
    description: 'Veri odaklı süreçleri daha anlaşılır ve yönetilebilir hale getiren modern bir panel arayüzü tasarladık.',
    services: ['Dashboard', 'UI/UX', 'Web App', 'Frontend'],
    year: '2024',
    platform: 'Web App',
    process: ['UX', 'Arayüz Tasarımı', 'Frontend'],
    clientType: 'SaaS / Panel',
    projectType: 'Yönetim Paneli',
    liveUrl: '#',
    tags: ['Dashboard', 'UI/UX', 'Web App'],
    Placeholder: NovaPlaceholder,
    featured: false,
    sections: {
      ozet: 'Karmaşık veri kümelerini kullanıcı dostu ve temiz bir arayüzle sunmak amacıyla Nova Panel için yeni bir dashboard ve web app deneyimi kurguladık.',
      hedef: 'Kullanıcıların günlük metrikleri, raporları ve analizleri tek ekrandan daha hızlı okumasını sağlayacak, operasyonel yükü azaltacak bir UX mimarisi kurmak.',
      cozum: 'Açık gri tonlar ve temiz bileşen yapıları tercih edildi. Veri görselleştirmesinde netliği artırmak için minimalist kartlar ve belirgin hiyerarşiye sahip grafikler kullanıldı.',
      sonuc: 'Kullanıcıların panel içinde aradıkları bilgiye ulaşma süresi yarı yarıya azaldı. Modern arayüz sayesinde SaaS ürününün müşteri memnuniyeti puanında önemli artış gözlemlendi.'
    }
  },
  {
    id: 4,
    slug: 'bloom-seo-kampanyasi',
    title: 'Bloom SEO Kampanyası',
    category: 'SEO',
    type: 'Growth / Search Visibility',
    summary: 'Arama görünürlüğünü artırmaya yönelik teknik SEO, içerik mimarisi ve performans odaklı iyileştirme süreci yürüttük.',
    description: 'Arama görünürlüğünü artırmaya yönelik teknik SEO, içerik mimarisi ve performans odaklı iyileştirme süreci yürüttük.',
    services: ['SEO', 'Growth', 'Teknik Analiz', 'İçerik Stratejisi'],
    year: '2024',
    platform: 'Search / Web',
    process: ['Analiz', 'Strateji', 'Optimizasyon'],
    clientType: 'Büyüme Odaklı Marka',
    projectType: 'SEO Kampanyası',
    liveUrl: '#',
    tags: ['SEO', 'Teknik Analiz', 'Growth'],
    Placeholder: BloomPlaceholder,
    featured: false,
    sections: {
      ozet: 'Bloom markasının arama motorlarındaki organik görünürlüğünü artırmak için uçtan uca teknik, içerik ve performans odaklı bir SEO büyüme kampanyası yürüttük.',
      hedef: 'Organik trafiği ölçeklenebilir şekilde artırmak, teknik hataları minimize ederek site sağlığını yükseltmek ve arama sonuçlarında lider konuma yerleşmek.',
      cozum: 'Geniş çaplı anahtar kelime analizleri ve içerik mimarisi optimizasyonları yapıldı. Site hızı artırıldı ve mobil öncelikli indexleme kriterlerine tam uyum sağlandı.',
      sonuc: 'Kampanya sürecinin sonunda organik trafik hacminde %120 artış elde edildi. Kritik anahtar kelimelerde ilk sayfa pozisyonları kazanılarak marka güvenilirliği perçinlendi.'
    }
  },
  {
    id: 5,
    slug: 'krea-ajans-sitesi',
    title: 'Krea Ajans Sitesi',
    category: 'Web Tasarım',
    type: 'Creative Agency',
    summary: 'Yaratıcı ajans kimliğini güçlü tipografi, sade arayüz ve premium etkileşimlerle dijitale taşıyan bir site deneyimi oluşturduk.',
    description: 'Yaratıcı ajans kimliğini güçlü tipografi, sade arayüz ve premium etkileşimlerle dijitale taşıyan bir site deneyimi oluşturduk.',
    services: ['Web Tasarım', 'Creative Direction', 'UI Design', 'Responsive'],
    year: '2024',
    platform: 'Web',
    process: ['Konsept', 'Tasarım', 'Geliştirme'],
    clientType: 'Creative Agency',
    projectType: 'Ajans Web Sitesi',
    liveUrl: '#',
    tags: ['Web Tasarım', 'Creative Direction', 'UI'],
    Placeholder: KreaPlaceholder,
    featured: false,
    sections: {
      ozet: 'Krea Ajans’ın yenilikçi ve sınırları zorlayan vizyonunu dijitale aktaran, yaratıcılığı ön planda tutan bir portfolio web sitesi deneyimi hazırladık.',
      hedef: 'Ajansın dinamik yapısını yansıtırken aynı zamanda portfolio projelerini dikkat dağıtmadan, en etkili ve şık şekilde sunacak bir platform inşa etmek.',
      cozum: 'Sıra dışı layout asimetrileri, büyük cesur tipografi kullanımı ve projeleri ön plana alan geniş whitespace alanları ile sanatsal ve modern bir yapı kuruldu.',
      sonuc: 'Ajansın sektördeki farklılaşma vizyonu dijitale başarılı şekilde entegre edildi. Kullanıcı etkileşimi artarak potansiyel müşterilerde unutulmaz bir ilk izlenim bırakıldı.'
    }
  }
]
