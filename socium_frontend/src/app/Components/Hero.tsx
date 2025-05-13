"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 min-h-screen bg-transparent'>
      <div className='flex flex-col justify-center items-start p-8 md:p-16'>
        <h1
          className={
            "text-6xl text-yellow-400 md:text-6xl font-dm-sans leading-tight mb-6 "
          }
          style={{
            fontWeight: 900,
            fontSize: "3.5rem",
            mixBlendMode: "difference",
          }}
        >
          Track, Analyze, Optimize: Real-Time Social Insights
        </h1>
        <p className='text-sm text-muted-foreground mb-4  font-poppins'>
          Monitor real-time engagement across Twitter, Instagram, and YouTube
          with interactive charts and AI-driven insights. Securely analyze 15K+
          monthly posts, optimize strategies via role-based access, and export
          actionable reports—all in one centralized dashboard.
        </p>
        <div className='flex items-center mt-4'>
          <Button
            variant='default'
            size='sm'
            onClick={() => router.push("/dashboard")}
            className='bg-indigo-600 backdrop-blur-md hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mix-blend-darken hover:animate-pulse'
          >
            Dashboard <span className='hover:animate-pulse'>›</span>
          </Button>
        </div>
      </div>

      {/* Example Component */}
      <div className='hidden sm:flex sm:flex-col justify-center items-center p-8 md:p-16'>
        <Image
          layout='intrinsic'
          src={"/IphoneMockup.png"}
          width={300}
          height={300}
          alt='IphoneMockup'
        />
      </div>
    </div>
  );
}

// function ExampleComponent() {
//   return (
//     <div className='border rounded-lg p-4 shadow-md'>
//       <h2 className='text-xl font-semibold mb-2'>Example Component</h2>
//       <p className='text-sm text-muted-foreground'>
//         This is an example component in the right column.
//       </p>
//     </div>
//   );
// }
