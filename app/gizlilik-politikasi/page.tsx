import { Metadata } from "next"
import { BASE_URL } from "@/lib/constants"
import { PrivacyPolicyClient } from "./privacy-policy-client"

export const metadata: Metadata = {
  title: "Gizlilik Politikası | MF Digital Studio",
  description: "MF Digital Studio gizlilik politikası; kişisel verilerin işlenmesi, çerez kullanımı, veri güvenliği ve kullanıcı hakları hakkında bilgi verir.",
  alternates: {
    canonical: `${BASE_URL}/gizlilik-politikasi`,
  },
}

export default function PrivacyPolicyPage() {
  const sections = [
    {
      num: "01",
      title: "Genel Bilgi",
      content: "MF Digital Studio olarak kişisel verilerinizin gizliliğini ciddiye alıyor ve kişisel verilerinizi yürürlükteki mevzuata, özellikle Kişisel Verilerin Korunması Kanunu'na (KVKK) uygun olarak işliyoruz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde veya hizmetlerimizden yararlandığınızda hangi verileri topladığımızı ve bunları nasıl kullandığımızı açıklamaktadır."
    },
    {
      num: "02",
      title: "Veri Sorumlusu",
      content: "MF Digital Studio\nİletişim: info@mfdigitalstudio.com"
    },
    {
      num: "03",
      title: "Toplanan Kişisel Veriler",
      content: "Süreçlerimize bağlı olarak aşağıdaki kişisel veri kategorilerini işleyebiliriz:\n- Ad soyad\n- E-posta adresi\n- Telefon numarası\n- Marka / işletme adı\n- Mesaj ve proje detayları\n- IP adresi\n- Tarayıcı ve cihaz bilgileri\n- Çerez ve kullanım verileri"
    },
    {
      num: "04",
      title: "Verilerin İşlenme Amaçları",
      content: "Kişisel verilerinizi şu amaçlarla işliyoruz:\n- İletişim taleplerine dönüş yapmak\n- Teklif ve proje süreçlerini yürütmek\n- Hizmetleri sunmak ve geliştirmek\n- Site performansını analiz etmek\n- Güvenliği sağlamak\n- Yasal yükümlülükleri yerine getirmek"
    },
    {
      num: "05",
      title: "Hukuki Sebepler",
      content: "Kişisel verileriniz, KVKK'da belirtilen şu hukuki sebeplere dayanılarak işlenebilir:\n- Sözleşmenin kurulması veya ifası\n- Meşru menfaat\n- Hukuki yükümlülük\n- Açık rıza (özellikle isteğe bağlı analitik ve pazarlama çerezleri için)"
    },
    {
      num: "06",
      title: "Çerezler",
      content: "Web sitemiz zorunlu ve analitik çerezler kullanabilir. Zorunlu çerezler sitenin temel işlevleri için gereklidir. Analitik çerezler ise kullanıcı deneyimini anlamamıza yardımcı olur ve yalnızca rızanıza bağlı olarak çalışır. Tarayıcı ayarlarınızdan veya sitemizdeki çerez tercihleri panelinden çerezleri kabul edebilir, reddedebilir veya tercihlerinizi yönetebilirsiniz."
    },
    {
      num: "07",
      title: "Üçüncü Taraf Hizmetler",
      content: "Web sitemiz ve hizmetlerimiz kapsamında barındırma (hosting), analitik ölçüm, e-posta iletişimi veya form yönetimi gibi konularda üçüncü taraf altyapı sağlayıcılarından destek alabiliriz (örneğin Google Analytics veya altyapı/sunucu servisleri)."
    },
    {
      num: "08",
      title: "Verilerin Aktarılması",
      content: "Kişisel verileriniz ticari amaçla satılmaz. Verileriniz yalnızca belirtilen amaçların gerçekleştirilmesi için gerektiğinde hizmet sağlayıcılarımız, teknik altyapı sağlayıcılarımız veya yasal zorunluluk halinde yetkili makamlarla paylaşılabilir."
    },
    {
      num: "09",
      title: "Yurt Dışına Aktarım",
      content: "Kullandığımız bazı teknik hizmet sağlayıcıları verileri Türkiye dışındaki sunucularda depolayabilir veya işleyebilir. Bu tür aktarımlar, yürürlükteki mevzuata uygun olarak ve gerektiğinde kullanıcı rızası alınarak gerçekleştirilir."
    },
    {
      num: "10",
      title: "Saklama Süresi",
      content: "Kişisel verileriniz, yalnızca işlenme amacı için gerekli olan süre boyunca veya ilgili yasal düzenlemelerde öngörülen kanuni saklama süreleri sonuna kadar muhafaza edilir."
    },
    {
      num: "11",
      title: "Veri Güvenliği",
      content: "Kişisel verilerinizi yetkisiz erişim, kayıp veya ifşa edilmeye karşı korumak amacıyla makul teknik ve idari güvenlik önlemlerini alıyoruz."
    },
    {
      num: "12",
      title: "KVKK Kapsamındaki Haklarınız",
      content: "KVKK uyarınca şu haklara sahipsiniz:\n- Kişisel verilerin işlenip işlenmediğini öğrenme\n- İşlenmişse bilgi talep etme\n- İşlenme amacını öğrenme\n- Aktarıldığı üçüncü kişileri bilme\n- Eksik veya yanlış işlenmişse düzeltilmesini isteme\n- Silinmesini veya yok edilmesini isteme\n- İşleme itiraz etme\n- Zarara uğraması halinde tazminat talep etme"
    },
    {
      num: "13",
      title: "İletişim",
      content: "Bu gizlilik politikasıyla ilgili talepleriniz için info@mfdigitalstudio.com adresinden bizimle iletişime geçebilirsiniz."
    }
  ]

  return <PrivacyPolicyClient sections={sections} />
}
