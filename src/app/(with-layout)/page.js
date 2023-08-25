import Image from "next/image";
// image 
import image from "@/Assets/images/1.jpg";
import image2 from "@/Assets/images/2.jpg";

function page() {
  return (
    <main>
      <div className="container mx-auto px-2 py-5 ">
        <div className="flex gap-5">
            <div className="">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi qui sequi numquam doloribus voluptas ullam earum magnam quae, et beatae architecto consequatur similique praesentium, culpa aliquid dolore illo dolorem enim aperiam. Iusto ullam enim cupiditate perferendis modi, aperiam ipsam, voluptatem deleniti quasi soluta ipsum, reiciendis pariatur voluptatum placeat eum earum.</p>
            </div>
            <div className="">
              <Image className="rounded shadow-2xl" src={image} placeholder="blur" alt="loading" />
            </div>
        </div>
      </div>
    </main>
  );
}

export default page;