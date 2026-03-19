import FormHeader from './_components/FormHeader';
import EventForm from './_components/EventForm';

export default function EtkinlikTalebiOlusturPage() {
    return (
        <main className="flex-1 flex justify-center py-10 px-4 md:px-0">
            <div className="max-w-2xl w-full flex flex-col gap-8">
                <FormHeader />
                <EventForm />
            </div>
        </main>
    );
}
