import Image from "next/image";
import Link from "next/link";
import banner from "../../assets/places/modern-office-space-interior.jpg"
export default function CoworkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    
      <section className="relative min-h-[80vh] md:min-h-[70vh]   w-full overflow-hidden">
        <Image
          src={banner}
          alt="Coworking Space"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 h-full flex ">
          <div className="max-w-7xl mx-auto mx-start px-25 text-white">
            <h1 className="text-3xl md:text-5xl md:mt-50 mt-20 font-bold leading-tight">
              Premium Coworking Spaces <br />
              Built for Modern Professionals
            </h1>

            <p className="mt-4 max-w-2xl text-gray-200">
              Discover fully-furnished coworking spaces, private offices and
              meeting rooms across prime business locations.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/coworking"
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-sm font-medium transition"
              >
                Book a Space
              </Link>

              <Link
                href="/book-spaces/meeting-rooms"
                className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-md text-sm font-medium transition"
              >
                Get a Free Tour
              </Link>
            </div>
          </div>
        </div>
      </section>
      <main>{children}</main>
    </>
  );
}
