import ProjectCard from '../components/ProjectCard';
import AchievementCard from '../components/AchievementCard';
import Header from '../components/headers';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-800">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900 opacity-20 z-0"
        style={{
          backgroundSize: '50px 50px',
          backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.1) 1px, transparent 1px)'
        }}
      ></div>
      <Header />

      {/* About Section */}
      <div id="about" className="text-white h-screen pt-40 md:pt-52 md:pl-32 px-8 font-mono">
        <p className="text-lg text-sky-400">Hi, my name is</p>
        <p className="text-5xl font-bold pt-6">Fakhridanish Mirza</p>
        <p className="text-5xl font-bold">Priyoyuwono</p>
        <p className="text-lg text-left max-w-2xl pt-10">
          I’m a student at SMA Negeri 1 Waru with a strong passion for data science and electrical engineering, especially in the development of Internet of Things (IoT) systems. I focus on building impactful, real-world solutions by combining smart technologies, and embedded system.
        </p>
      </div>

      {/* Projects Section */}
      <div id="projects" className="min-h-screen bg-neutral-800 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900 opacity-20 z-0"
          style={{
            backgroundSize: '50px 50px',
            backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.1) 1px, transparent 1px)'
          }}></div>

        <div className="flex justify-center pt-14 flex-col items-center">
          <p className="text-white text-5xl font-bold font-mono pr-4">PROJECTS</p>
          <p className="text-white text-md font-mono mt-4 text-center">
            A collection of my recent work, blending code, design, <br />
            and hardware built to solve real-world problems.
          </p>
        </div>

        <ProjectCard
          title="Non-Invasive Glucometer Dashboard"
          description="The Non-Invasive Glucometer Dashboard is designed to support healthcare professionals in monitoring and managing pediatric diabetes cases. With a responsive and user-friendly interface, it enables real-time visualization of blood sugar trends, facilitates data-driven decision-making, and enhances the overall quality of care for young patients."
          image="/project1.png"
          index={0}
        />

        <ProjectCard
          title="Non-Invasive Glucometer with Machine Learning"
          description="This Non-Invasive Glucometer is a child-friendly blood sugar monitoring device developed to address the growing concern of diabetes among Indonesian children. Utilizing biosignal data such as PPG and advanced machine learning algorithms, it estimates glucose levels without needles—offering a painless, comfortable, and reliable alternative for daily monitoring."
          image="/project2.png"
          index={1}
        />

        <ProjectCard
          title="RFID-Based Presence System for SMA Negeri 1 Waru"
          description="The RFID-Based Presence System is a smart attendance tracking solution developed for SMA Negeri 1 Waru. As a classroom IoT project, it streamlines the recording of student attendance through RFID scanning. It assists both teachers and student leaders (BPH) in managing attendance logs, identifying behavioral trends, and improving classroom discipline with minimal effort."
          image="/project3.png"
          index={2}
        />


      </div>


      {/* Achievements Section */}
      <div id="achievements" className="min-h-screen bg-neutral-800 pt-32 pb-8 z-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900 opacity-20 z-0"
          style={{
            backgroundSize: '50px 50px',
            backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          }}></div>

        <div className="flex flex-col items-center">
          <h1 className="text-white text-5xl font-bold font-mono">ACHIEVEMENTS</h1>
          <p className="text-white text-sm md:text-md font-bold font-mono mt-4 px-8 text-center">
            A few highlights of awards and recognitions I’ve received along my project journey.
          </p>
        </div>

        <div className="mt-12 px-8 md:px-32 space-y-12">
          <AchievementCard
            title="Inspire - KRPY X Universitas Gajah Mada (3rd Place) | 2024"
            items={[
              "Organizer: Taman Pintar Yogyakarta & Universitas Gajah Mada (FMIPA, DCSE)",
              "Project: Non-invasive glucometer",
              "Project Background: This project addresses the growing prevalence of diabetes mellitus in children, with a focus on alleviating needle phobia by developing a non-invasive glucometer for monitoring blood glucose levels."
            ]}
          />
          <AchievementCard
            title="Biomedical Engineering Annual Contest - Bepro (2nd Place) | 2024"
            items={[
              "Organizer: Institut Teknologi Sepuluh Nopember (FTEIC, BME)",
              "Project: Non-invasive glucometer",
              "Project Background: Focused on providing a solution for the high number of children with diabetes mellitus, this project features a non-invasive method for blood glucose monitoring that reduces the fear of needles."
            ]}
          />
          <AchievementCard
            title="Biomedical Engineering Annual Contest - Bepro (Favourite Champion) | 2024"
            items={[
              "Organizer: Institut Teknologi Sepuluh Nopember (FTEIC, BME)",
              "Project: Non-invasive glucometer",
              "Project Background: Aimed at addressing the increasing cases of diabetes in children, this project created a non-invasive glucometer to provide an alternative to painful blood glucose testing, helping children with needle phobia."
            ]}
          />
          <AchievementCard
            title="Deployed IoT Attendance System at SMA Negeri 1 Waru | 2025"
            items={[
              "Project: RFID-Based Presence System for SMA Negeri 1 Waru",
              "Impact: Actively used by students and teachers to simplify daily attendance tracking, reduce manual errors, and improve classroom discipline.",
              "Project Background: This system was developed as a practical IoT solution to help automate attendance using RFID technology, making it easier for the BPH and teachers to manage class presence efficiently."
            ]}
          />

        </div>
      </div>


      {/* Reach Me Section */}
      <div id="reach-me" className="text-white h-[30rem] justify-center flex flex-col pt-8 px-8 font-mono">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900 opacity-20 z-0"
          style={{
            backgroundSize: '50px 50px',
            backgroundImage:
              'linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          }}
        ></div>
        <div className="flex justify-center flex-col items-center">

          <p className="text-white text-5xl font-bold font-mono">REACH ME</p>
          <p className="text-white text-sm md:text-md font-bold font-mono mt-4 px-8">Feel free to reach out via email, GitHub, or Instagram!</p>
        </div>

        {/* Icons container with flexbox to center them */}
        <div className="flex justify-center items-center space-x-8 mt-8">
          {/* Email Icon */}
          <a href="mailto:fakhridanish.mirza@gmail.com" target="_blank" rel="noopener noreferrer" className="text-center">
            <i className="fas fa-envelope text-white text-3xl hover:text-sky-400 transition duration-300"></i>
          </a>

          {/* GitHub Icon */}
          <a href="https://github.com/fakhridanishmp" target="_blank" rel="noopener noreferrer" className="text-center">
            <i className="fab fa-github text-white text-3xl hover:text-sky-400 transition duration-300"></i>
          </a>

          {/* Instagram Icon */}
          <a href="https://instagram.com/fakhri.mp.17" target="_blank" rel="noopener noreferrer" className="text-center">
            <i className="fab fa-instagram text-white text-3xl hover:text-sky-400 transition duration-300"></i>
          </a>
        </div>
      </div>

    </div >
  );
}