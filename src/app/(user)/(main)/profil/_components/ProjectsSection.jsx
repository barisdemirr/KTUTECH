import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
                title="E-Ticaret Platformu"
                description="React ve Node.js ile geliştirilen tam kapsamlı e-ticaret çözümü. Ödeme sistemleri entegrasyonu ve admin paneli dahil."
                tags={["REACT", "NODE.JS"]}
                imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBWrgId4f07lgfBmM7JRvUYmKRHzkLnLgCKFRSQI-4S41eBJ01wkCRxfEKXkGuWYUA6Fj2maBYlbYfFpVbs0FrOi8TXgHtfwEB06HGGJ2qXryB0fvzJ-DLvPEXA3e-0fwgyXCpqaDK_0YDecrporMlTxJRz4_7C2DXzNe0eV7e1W0_qS5lsdQSNZ9O8L-iUowYJlY3XeenXhMPHmR2Qb6gYuYLtCTkSuZgkiclSHZ6-vcN943rKhEOy5y4nI7wkd01n26cU6fLqaPmE"
            />
            <ProjectCard
                title="Veri Analiz Paneli"
                description="Python ve Django kullanılarak geliştirilen gerçek zamanlı veri görselleştirme ve raporlama aracı."
                tags={["PYTHON", "DJANGO"]}
                imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCXWe8s3qlx8t3ERNFWTbZ77yFAaTVzofoKYMTRFKIdH-ywpg4cPESUu5re8zkwsB7KvLIkbl47_OXoNR_qnv3WqrCfSJtK3yp5M7Lucq_2QvoSl3ULUIJrqRt9LTcrcpCFcfaZKJp_5l4V8hHXSfQHyjtexamF6uDpSdPJAL6M8eYJAq1xpelYHYQT1Em5bKV_ap73tg2ZJ8RVbT-Nbfs1Qt_sijMtKzFHuYca-Pve4ODAfoxt1k2qxcuIZowuAYr4Fh5KPdRdjVdh"
            />
            <button className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-8 flex flex-col items-center justify-center gap-3 text-slate-400 hover:border-primary hover:text-primary transition-all group min-h-75">
                <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-3xl">add</span>
                </div>
                <span className="font-bold text-sm">Yeni Proje Ekle</span>
            </button>
        </section>
    );
};

export default ProjectsSection;