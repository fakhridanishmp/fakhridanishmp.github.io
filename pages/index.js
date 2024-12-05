import Header from '../components/headers';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-800">
      <Header />

      {/* About Section */}
      <div id="about" className="text-white h-screen pt-40 md:pt-52 md:pl-32 px-8 font-mono">
        <p className="text-lg text-sky-400">Hi, my name is</p>
        <p className="text-5xl font-bold pt-6">Fakhridanish Mirza</p>
        <p className="text-5xl font-bold">Priyoyuwono</p>
        <p className="text-lg text-left max-w-2xl pt-10">I am a student at SMA Negeri 1 Waru, and I am interested in data science and electrical engineering, with a focus on the development of IoT.</p>
      </div>

      {/* Projects Section */}
      <div id="projects" className="min-h-screen bg-neutral-800">
        <div className="flex justify-center pt-14 flex-col items-center">
          <p className="text-white text-5xl font-bold font-mono pr-4">PROJECTS</p>
          <p className="text-white text-md font-bold font-mono mt-4">Here are some of my projects</p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-16 px-8">
          <div className="md:w-1/4 flex justify-center">
            <Image src="/project1.png" width={1920} height={1080} alt="Non-Invasive Glucometer Dashboard" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pl-10 text-white font-mono pt-6 md:pt-0">
            <h2 className="text-2xl font-bold">Non-Invasive Glucometer Dashboard</h2>
            <p className="text-md pt-4">The Non-Invasive Glucometer Dashboard is designed to help doctors easily monitor and manage diabetes cases, particularly in children. This dashboard provides an intuitive and responsive interface for tracking blood sugar levels in real-time. It allows healthcare professionals to efficiently analyze patient data, visualize trends, and make informed decisions for better diabetes management.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-center mt-16 px-8">
          <div className="md:w-1/4 flex justify-center md:mb-0 mb-6">
            <Image src="/project2.png" width={1920} height={1080} alt="IoT Smart Home System" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pr-10 text-white font-mono pt-6 md:pt-0">
            <h2 className="text-2xl font-bold">Non-Invasive Glucometer</h2>
            <p className="text-md pt-4">The Non-Invasive Glucometer is a blood sugar monitoring device developed to address the increasing cases of diabetes mellitus, particularly among children in Indonesia. Many children are afraid of needles and are reluctant to regularly check their blood sugar levels. This device offers a more comfortable and painless way to measure blood sugar, making it easier to monitor diabetes in children.</p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div id="achievements" className="min-h-screen bg-neutral-800 pt-32 pb-8">
        <div className="flex justify-center flex-col items-center">
          <p className="text-white text-5xl font-bold font-mono">ACHIEVEMENTS</p>
          <p className="text-white text-md font-bold font-mono mt-4">Here are some of the notable awards and recognitions I’ve received for my projects</p>
        </div>

        <div className="flex flex-col items-start justify-center mt-12 px-32">
          <div className="text-white font-mono pb-8 md:pr-4">
            <h3 className="text-xl font-bold">{">"} Inspire - KRPY X Universitas Gajah Mada (3rd Place) | 2024</h3>
            <p className="text-md pt-2">- Organizer: Taman Pintar Yogyakarta & Universitas Gajah Mada (FMIPA, DCSE)</p>
            <p className="text-md">- Project: Non-invasive glucometer</p>
            <p className="text-md pt-2">- Project Background: This project addresses the growing prevalence of diabetes mellitus in children, with a focus on alleviating needle phobia by developing a non-invasive glucometer for monitoring blood glucose levels.</p>
          </div>

          <div className="text-white font-mono pb-8 md:pr-4">
            <h3 className="text-xl font-bold">{">"} Biomedical Engineering Annual Contest - Bepro (2nd Place) | 2024</h3>
            <p className="text-md pt-2">- Organizer: Institut Teknologi Sepuluh Nopember (FTEIC, BME)</p>
            <p className="text-md">- Project: Non-invasive glucometer</p>
            <p className="text-md pt-2">- Project Background: Focused on providing a solution for the high number of children with diabetes mellitus, this project features a non-invasive method for blood glucose monitoring that reduces the fear of needles.</p>
          </div>

          <div className="text-white font-mono pb-8">
            <h3 className="text-xl font-bold">{">"} Biomedical Engineering Annual Contest - Bepro (Favourite Champion) | 2024</h3>
            <p className="text-md pt-2">- Organizer: Institut Teknologi Sepuluh Nopember (FTEIC, BME)</p>
            <p className="text-md">- Project: Non-invasive glucometer</p>
            <p className="text-md pt-2">- Project Background: Aimed at addressing the increasing cases of diabetes in children, this project created a non-invasive glucometer to provide an alternative to painful blood glucose testing, helping children with needle phobia.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
