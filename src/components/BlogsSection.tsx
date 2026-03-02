import Image from "next/image";
import blog1 from "../assets/home/blogs/business-meeting-working-room-blog-1.webp";
import blog2 from "../assets/home/blogs/green-business-meeting-working-room-blog-2.webp";
import blog3 from "../assets/home/blogs/3d-rendering-business-meeting-working-room-blog-3.webp";
const blogs = [
  {
    title: "How to List Your Coworking Space and Attract More Bookings",
    category: "Coworking Space",
    date: "16 May",
    image: blog1,
  },
  {
    title: "Coworking Etiquette: 12 Unspoken Rules Everyone Should Know",
    category: "Coworking Space",
    date: "15 May",
    image: blog2,
  },
  {
    title: "How to Choose the Perfect Coworking Space for Your Work Style",
    category: "Coworking Space",
    date: "20 Aug",
    image: blog3,
  },
];
export default function BlogsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="text-red-500 uppercase tracking-wide font-medium">
          Tips and Inspiration
        </p>
        <h2 className="text-4xl font-bold mt-2">
          Latest Blog Posts
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={260}
                className="w-full h-[220px] object-cover 
                           transition-transform duration-500 ease-out
                           group-hover:scale-105"
              />
              <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-md">
                {blog.date}
              </span>
            </div>
            <div className="p-6">
              <span className="inline-block mb-3 text-sm font-medium 
                               hover:bg-red-500 hover:text-white bg-red-100 text-red-500 transition-colors duration-300 cursor-pointer
                               px-4 py-1 rounded-full">
                {blog.category}
              </span>
              <h3 className="text-lg font-semibold leading-snug hover:text-red-500 transition">
                {blog.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
