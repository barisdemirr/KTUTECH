export default function EventBanner() {
    return (
        <div
            className="bg-gray-800 flex justify-center relative w-full md:aspect-12/9 lg:aspect-14/9 xl:aspect-video overflow-hidden rounded-xl shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-t from-navy-deep/60 to-transparent z-10"></div>
            <img
                alt="Main Event Poster"
                className="w-full h-auto md:h-full md:w-auto object-cover"
                data-alt="Modern tech conference stage with neon lights"
                src="https://avatars.mds.yandex.net/i?id=2f2f5448c09cb5fc92adb7e8ea6f4968f88ccdcb-7755864-images-thumbs&n=13"
            />
        </div>
    );
}