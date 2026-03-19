export default function FormHeader() {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-midnight-navy text-4xl font-extrabold tracking-tight">Etkinlik Formu</h1>
            <p className="text-primary/70 text-base">
                Yeni bir etkinlik talebi oluşturun. Bilgileriniz editörlerimiz tarafından incelenecektir.
            </p>
        </div>
    );
}