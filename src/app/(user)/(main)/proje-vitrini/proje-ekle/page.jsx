import Form from './_components/Form';

export default function Page() {
    return (
        <main className="flex-1 flex justify-center py-10 px-4 md:px-0">
            <div className="w-full max-w-[800px] flex flex-col">
                <div className="flex flex-col gap-4 mb-8">
                    <h1 className="text-4xl font-black tracking-[-0.033em]">Yeni Proje Ekle</h1>
                    <p className="text-primary/70 dark:text-slate-400 text-lg">Yenilikçi projenizi toplulukla paylaşmak için detayları aşağıya girin.</p>
                </div>
                <Form />
            </div>
        </main>
    );
}