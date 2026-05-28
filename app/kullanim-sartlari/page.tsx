import { Metadata } from "next"
import { BASE_URL } from "@/lib/constants"
import { TermsOfServiceClient } from "./terms-of-service-client"

export const metadata: Metadata = {
  title: "Kullanım Şartları | MF Digital Studio",
  description: "MF Digital Studio web sitesinin kullanımına, fikri mülkiyet haklarına, hizmet kapsamına ve kullanıcı sorumluluklarına ilişkin şartları inceleyin.",
  alternates: {
    canonical: `${BASE_URL}/kullanim-sartlari`,
  },
}

export default function TermsOfServicePage() {
  const sections = [
    {
      num: "01",
      title: "Kabul",
      content: "Bu web sitesini kullanarak aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. Şartları kabul etmiyorsanız siteyi kullanmayı bırakmanızı öneririz. MF Digital Studio, bu şartları önceden haber vermeksizin güncelleme hakkını saklı tutar."
    },
    {
      num: "02",
      title: "Kapsam",
      content: "Bu şartlar yalnızca mfdigitalstudio.com web sitesinin kullanımını kapsar. Sunulan hizmetlere ilişkin fiyat, kapsam, teslimat, revizyon ve ödeme gibi detaylar proje teklifi, sözleşme veya yazılı iletişim yoluyla ayrıca belirlenir."
    },
    {
      num: "03",
      title: "Hizmetler",
      content: "MF Digital Studio aşağıdaki hizmetleri sunmaktadır:\n- Web tasarım ve geliştirme\n- E-ticaret sistemleri\n- SEO ve içerik stratejisi\n- Sosyal medya yönetimi\n- Yönetim paneli geliştirme"
    },
    {
      num: "04",
      title: "Teklif ve Proje Süreci",
      content: "Proje detayları müşteri ihtiyaçlarına göre belirlenir. Web sitesini ziyaret etmek tek başına bir proje başlatmaz. Kapsam ve sorumluluklar çalışmalara başlamadan önce netleştirilir."
    },
    {
      num: "05",
      title: "Fikri Mülkiyet",
      content: "Aksi belirtilmedikçe web sitesindeki tasarım, metin, görsel öğeler, logo, marka varlıkları, kod ve içerikler MF Digital Studio'ya aittir. İzinsiz kopyalama, çoğaltma, dağıtım veya ticari kullanım yasaktır. Müşteri tarafından sağlanan materyaller, aksi kararlaştırılmadıkça müşterinin sorumluluğundadır ve mülkiyetindedir."
    },
    {
      num: "06",
      title: "Kullanıcı Sorumlulukları",
      content: "Kullanıcılar şunları yapmamayı kabul eder:\n- Web sitesini yasa dışı kullanmak\n- Yetkisiz erişim sağlamaya çalışmak\n- İzinsiz içerik kopyalamak\n- Formlar aracılığıyla yanıltıcı veya zararlı bilgiler göndermek"
    },
    {
      num: "07",
      title: "Müşteri Tarafından Sağlanan İçerikler",
      content: "Müşteriler; logo, görsel, metin, ürün verisi ve diğer sağladıkları materyallerin doğruluğundan, yasallığından ve kullanım haklarından sorumludur."
    },
    {
      num: "08",
      title: "Üçüncü Taraf Bağlantılar ve Hizmetler",
      content: "Web sitemiz üçüncü taraf bağlantılar içerebilir. MF Digital Studio, üçüncü taraf web sitelerinin içerikleri, gizlilik politikaları veya hizmet kesintilerinden sorumlu değildir."
    },
    {
      num: "09",
      title: "Sorumluluk Sınırlaması",
      content: "MF Digital Studio, web sitesi içeriğini doğru ve güncel tutmak için çaba gösterir ancak kesintisiz veya hatasız erişim garantisi vermez. Yasaların izin verdiği ölçüde, web sitesinin kullanımından kaynaklanan dolaylı zararlardan sorumlu tutulamaz."
    },
    {
      num: "10",
      title: "Portfolyo Kullanımı",
      content: "Müşteriyle aksi kararlaştırılmadığı sürece, MF Digital Studio tarafından tamamlanan projeler portfolyomuzda sergilenebilir."
    },
    {
      num: "11",
      title: "Değişiklikler",
      content: "MF Digital Studio bu şartları zaman zaman güncelleyebilir. Güncel sürüm web sitesinde yayınlandığında yürürlüğe girer."
    },
    {
      num: "12",
      title: "Uygulanacak Hukuk",
      content: "Bu şartlar Türkiye Cumhuriyeti kanunlarına tabidir. Emredici hukuk kuralları aksini gerektirmedikçe, uyuşmazlıklarda İstanbul mahkemeleri ve icra daireleri yetkili olabilir."
    },
    {
      num: "13",
      title: "İletişim",
      content: "Kullanım şartlarıyla ilgili sorularınız için info@mfdigitalstudio.com adresinden bizimle iletişime geçebilirsiniz."
    }
  ]

  return <TermsOfServiceClient sections={sections} />
}
