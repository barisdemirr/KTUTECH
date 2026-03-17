import React from 'react';

const ProjectCard = ({ title, description, tags, imageSrc }) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col group overflow-hidden">
            <div className="h-48 w-full relative">
                <img className="w-full h-full object-cover" data-alt={title} src={imageSrc} />
                <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest shadow-sm">Aktif</span>
            </div>
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex gap-2">
                        {tags.map((tag, index) => (
                            <span key={index} className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500 font-bold">{tag}</span>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-xl">edit</span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                            <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;