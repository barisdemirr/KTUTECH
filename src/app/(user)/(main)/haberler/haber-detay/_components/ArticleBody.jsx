const ArticleBody = () => {
    return (
        <div className="prose max-w-none text-slate-700 dark:text-slate-300 text-lg md:text-xl font-light">
            <p className="font-normal text-slate-900 dark:text-white text-xl md:text-2xl leading-relaxed mb-8 italic border-l-4 border-primary pl-6">
                Yapay zeka ve kuantum bilişim alanındaki son gelişmeler, endüstriyel standartları kökten değiştiriyor. Araştırmacılar, enerji verimliliğini %40 artıran yeni bir mimari üzerinde çalışıyorlar.
            </p>
            <p>
                Teknoloji dünyası, Silikon Vadisi'nden yükselen yeni bir dalga ile sarsılıyor. Yapılan son araştırmalar, kuantum işlemcilerin geleneksel süper bilgisayarları hız ve verimlilik açısından katbekat geride bıraktığını gösteriyor. Bu değişim sadece laboratuvarlarla sınırlı kalmıyor, aynı zamanda finans, lojistik ve sağlık sektörlerinde de devrim niteliğinde uygulamaların kapısını aralıyor.
            </p>
            <p>
                Özellikle sürdürülebilir enerji yönetimi konusunda geliştirilen yeni algoritmalar, akıllı şehirlerin enerji tüketimini gerçek zamanlı olarak optimize edebiliyor. Bu teknoloji, sürdürülebilir bir gelecek inşa etmek adına kritik bir rol oynuyor. Çalışmanın detayları, küresel iş birliklerinin önemini bir kez daha ortaya koyuyor.
            </p>
            <div className="my-10 rounded-xl bg-slate-50 dark:bg-slate-900/50 p-8 border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Öne Çıkan Gelişmeler</h3>
                <ul className="space-y-4 text-base md:text-lg">
                    <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                        <span>Enerji verimliliğinde %40'a varan artış sağlayan yeni mimari tasarım.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                        <span>Kuantum hata düzeltme protokollerinde ilk başarılı saha testi.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                        <span>Sürdürülebilir üretim süreçleri için yapay zeka entegrasyonu.</span>
                    </li>
                </ul>
            </div>
            <p>
                Gelecek on yılda, bugün imkansız gördüğümüz pek çok hesaplama işlemi saniyeler içinde tamamlanacak. Bu durumun etik ve güvenlik boyutları tartışılmaya devam etse de, insanlığın teknolojik sıçramasının önündeki engeller birer birer kalkıyor.
            </p>
        </div>
    );
};

export default ArticleBody;