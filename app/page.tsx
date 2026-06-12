import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4d03f] p-4 font-sans selection:bg-[#f4d03f]">
      {/* الكارت الأبيض الرئيسي مع تأثير الـ Neo-brutalism shadow */}
      <div className="w-full max-w-[384px] rounded-2xl border border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
        
        {/* الصورة الرئيسية للمقال */}
        <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
          <Image
            src="/preview.jpg"
            alt="Article Illustration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* محتوى الكارت */}
        <div className="mt-6 flex flex-col items-start gap-3">
          {/* شارة التصنيف (Tag) */}
          <span className="rounded bg-[#f4d03f] px-3 py-1 text-sm font-extrabold text-black">
            Learning
          </span>

          {/* تاريخ النشر */}
          <p className="text-sm font-medium text-black">
            Published 21 Dec 2026
          </p>

          {/* عنوان المقال */}
          <h1 className="cursor-pointer text-2xl font-extrabold text-black transition-colors duration-200 hover:text-[#f4d03f]">
            HTML & CSS foundations
          </h1>

          {/* وصف المقال */}
          <p className="text-base font-medium text-[#7f7f7f] leading-relaxed">
            These languages are the foundations of every website, defining structure, content, and presentation.
          </p>
        </div>

        {/* بيانات الكاتب أسفل الكارت */}
        <div className="mt-6 flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/image-avatar.webp"
              alt="Greg Hooper"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-extrabold text-black">
            Greg Hooper
          </span>
        </div>

      </div>
    </main>
  );
}
