import React, { useState } from 'react';
import { Menu, X, Mail, Github, Instagram, Award, Code, Lightbulb, Download, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projectGallery, setProjectGallery] = useState({});
  const [achievementGallery, setAchievementGallery] = useState({});

  const projects = [
    {
      title: "Multi-Analysis Medical Device",
      description: "A child-friendly medical device that combines non-invasive glucose monitoring with cuffless blood pressure measurement using machine learning algorithms. Designed to improve daily monitoring comfort and accessibility for children.",
      images: ["/projects/muti-analysis-medical-device.jpg"]
    },
    {
      title: "Non-Invasive Glucometer with Machine Learning",
      description: "This Non-Invasive Glucometer is a child-friendly blood sugar monitoring device developed to address the growing concern of diabetes among Indonesian children. Utilizing biosignal data such as PPG and advanced machine learning algorithms, it estimates glucose levels without needles—offering a painless, comfortable, and reliable alternative for daily monitoring.",
      images: ["/projects/project2.png"]
    },
    {
      title: "RFID-Based Presence System for SMA Negeri 1 Waru",
      description: "The RFID-Based Presence System is a smart attendance tracking solution developed for SMA Negeri 1 Waru. As a classroom IoT project, it streamlines the recording of student attendance through RFID scanning. It assists both teachers and student leaders (BPH) in managing attendance logs, identifying behavioral trends, and improving classroom discipline with minimal effort.",
      images: ["/projects/project3.png"]
    }
  ];

  const achievements = [
    {
      title: "BEPRO - Biomedical Engineering Annual Contest",
      subtitle: "1st Place & Favorite Award | 2025",
      organizer: "Institut Teknologi Sepuluh Nopember (FTEIC, BME)",
      project: "Multi-Analysis Medical Device",
      description: "A device combining non-invasive glucose monitoring and cuffless blood pressure measurement using machine learning.",
      images: ["/photos/1st_champ_2025.jpg"]
    },
    {
      title: "Biomedical Engineering Annual Contest - Bepro",
      subtitle: "2nd Place | 2024",
      organizer: "Institut Teknologi Sepuluh Nopember (FTEIC, BME)",
      project: "Non-invasive glucometer",
      description: "Focused on providing a solution for the high number of children with diabetes mellitus, this project features a non-invasive method for blood glucose monitoring that reduces the fear of needles.",
      images: ["/projects/project2.png"]
    },
    {
      title: "Inspire - KRPY X UGM",
      subtitle: "3rd Place | 2024",
      organizer: "Taman Pintar Yogyakarta & Universitas Gajah Mada",
      project: "Non-invasive glucometer",
      description: "This project addresses the growing prevalence of diabetes mellitus in children, with a focus on alleviating needle phobia by developing a non-invasive glucometer for monitoring blood glucose levels.",
      images: ["/projects/project1.png"]
    },
    {
      title: "BEPRO - Biomedical Engineering Annual Contest",
      subtitle: "Favourite Champion | 2025",
      organizer: "Institut Teknologi Sepuluh Nopember (FTEIC, BME)",
      project: "Multi-Analysis Medical Device",
      description: "Recognized as favourite champion for the multi-analysis medical device combining non-invasive glucose monitoring and cuffless blood pressure measurement.",
      images: ["/photos/fav_champ_2025.jpg"]
    },
    {
      title: "Biomedical Engineering Annual Contest - Bepro",
      subtitle: "Favourite Champion | 2024",
      organizer: "Institut Teknologi Sepuluh Nopember (FTEIC, BME)",
      project: "Non-invasive glucometer",
      description: "Aimed at addressing the increasing cases of diabetes in children, this project created a non-invasive glucometer to provide an alternative to painful blood glucose testing, helping children with needle phobia.",
      images: ["/projects/project2.png"]
    },
    {
      title: "Deployed IoT Attendance System",
      subtitle: "SMA Negeri 1 Waru | 2025",
      organizer: "Actively used by students and teachers",
      project: "RFID-Based Presence System",
      description: "This system was developed as a practical IoT solution to help automate attendance using RFID technology, making it easier for the BPH and teachers to manage class presence efficiently.",
      images: ["/projects/project3.png"]
    }
  ];



  const nextImage = (index, type) => {
    if (type === 'project') {
      setProjectGallery(prev => ({
        ...prev,
        [index]: ((prev[index] || 0) + 1) % projects[index].images.length
      }));
    } else {
      setAchievementGallery(prev => ({
        ...prev,
        [index]: ((prev[index] || 0) + 1) % achievements[index].images.length
      }));
    }
  };

  const prevImage = (index, type) => {
    if (type === 'project') {
      setProjectGallery(prev => ({
        ...prev,
        [index]: ((prev[index] || 0) - 1 + projects[index].images.length) % projects[index].images.length
      }));
    } else {
      setAchievementGallery(prev => ({
        ...prev,
        [index]: ((prev[index] || 0) - 1 + achievements[index].images.length) % achievements[index].images.length
      }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold" style={{ color: '#d41213' }}>
              FakhridanishMP
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-8">
              <li>
                <a href="#about" className="text-gray-700 hover:text-[#d41213] transition-colors">
                  <span style={{ color: '#02027f' }} className="font-mono mr-1">01.</span>About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-700 hover:text-[#d41213] transition-colors">
                  <span style={{ color: '#02027f' }} className="font-mono mr-1">02.</span>Projects
                </a>
              </li>
              <li>
                <a href="#achievements" className="text-gray-700 hover:text-[#d41213] transition-colors">
                  <span style={{ color: '#02027f' }} className="font-mono mr-1">03.</span>Achievements
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-[#d41213] transition-colors">
                  <span style={{ color: '#02027f' }} className="font-mono mr-1">04.</span>Contact
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="md:hidden mt-4 space-y-4 pb-4">
              <li>
                <a
                  href="#about"
                  className="block text-gray-700 hover:text-[#d41213] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span style={{ color: '#02027f' }} className="font-mono mr-1">01.</span>About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block text-gray-700 hover:text-[#d41213] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span style={{ color: '#02027f' }} className="font-mono mr-1">02.</span>Projects
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="block text-gray-700 hover:text-[#d41213] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span style={{ color: '#02027f' }} className="font-mono mr-1">03.</span>Achievements
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-gray-700 hover:text-[#d41213] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span style={{ color: '#02027f' }} className="font-mono mr-1">04.</span>Contact
                </a>
              </li>
            </ul>
          )}
        </nav>
      </header>

      {/* Hero/About Section */}
      <section id="about" className="min-h-screen flex items-start pt-48 pl-12 pr-6">
        <div className="max-w-4xl space-y-6">
          <div className="max-w-3xl space-y-6 md:ml-16 lg:ml-32">
            <p className="text-lg font-mono" style={{ color: '#d41213' }}>Hi, my name is</p>
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#02027f' }}>
              Fakhridanish Mirza<br />Priyoyuwono
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-[#d41213] to-[#02027f]"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed relative group">
              I’m a student at{" "}
              <span className="relative inline-block highlight">
                SMA Negeri 1 Waru
                <span className="absolute inset-0 bg-gradient-to-r from-[#d41213]/40 to-[#02027f]/40 scale-x-0 origin-left transition-transform duration-700 ease-in-out"></span>
              </span>{" "}
              exploring how engineering and data science can create real impact. I’ve built projects such as an{" "}
              <span className="relative inline-block highlight">
                machine-learning-based non-invasive glucometer
                <span className="absolute inset-0 bg-gradient-to-r from-[#d41213]/40 to-[#02027f]/40 scale-x-0 origin-left transition-transform duration-700 ease-in-out"></span>
              </span>{" "}
              and a{" "}
              <span className="relative inline-block highlight">
                IoT attendance tracker
                <span className="absolute inset-0 bg-gradient-to-r from-[#d41213]/40 to-[#02027f]/40 scale-x-0 origin-left transition-transform duration-700 ease-in-out"></span>
              </span>
              , with focus on improving accessibility and comfort through technology.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                <Code size={20} style={{ color: '#d41213' }} />
                <span className="text-sm font-mono text-neutral-800">Biomedical Engineering</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                <Lightbulb size={20} style={{ color: '#02027f' }} />
                <span className="text-sm font-mono text-neutral-800">Data Science</span>
              </div>
              <button
                className="flex items-center gap-2 px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#d41213' }}
                onClick={() => window.open('/Fakhridanish_Mirza_CV.pdf', '_blank')}
              >
                <Download size={20} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#02027f' }}>
              PROJECTS
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#d41213] to-[#02027f] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">
              A collection of my recent work, blending code, design,<br />
              and hardware built to solve real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Image Gallery */}
                <div className="relative h-64 bg-gray-200 group" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={project.images[projectGallery[index] || 0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />


                  {/* Gallery Navigation */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(index, 'project')}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                        style={{ color: '#02027f' }}
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => nextImage(index, 'project')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                        style={{ color: '#02027f' }}
                      >
                        <ChevronRight size={20} />
                      </button>

                      {/* Dots Indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, imgIdx) => (
                          <div
                            key={imgIdx}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${imgIdx === (projectGallery[index] || 0) ? 'w-6' : ''
                              }`}
                            style={{
                              backgroundColor: imgIdx === (projectGallery[index] || 0) ? '#d41213' : '#ffffff80'
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#02027f' }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="min-h-screen py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#02027f' }}>
              ACHIEVEMENTS
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#d41213] to-[#02027f] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">
              A few highlights of awards and recognitions I've received along my project journey.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="w-full md:w-[48%] lg:w-[31%] bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Image Gallery */}
                <div className="relative bg-gray-200 group aspect-[16/9]">
                  <img
                    src={achievement.images[achievementGallery[index] || 0]}
                    alt={achievement.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />


                  {/* Gallery Navigation */}
                  {achievement.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(index, 'achievement')}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                        style={{ color: '#02027f' }}
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => nextImage(index, 'achievement')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                        style={{ color: '#02027f' }}
                      >
                        <ChevronRight size={20} />
                      </button>

                      {/* Dots Indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        {achievement.images.map((_, imgIdx) => (
                          <div
                            key={imgIdx}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${imgIdx === (achievementGallery[index] || 0) ? 'w-6' : ''
                              }`}
                            style={{
                              backgroundColor: imgIdx === (achievementGallery[index] || 0) ? '#d41213' : '#ffffff80'
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Award Badge */}
                  <div
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg"
                  >
                    <Award size={24} style={{ color: '#d41213' }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#02027f' }}>
                    {achievement.title}
                  </h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: '#d41213' }}>
                    {achievement.subtitle}
                  </p>

                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">
                      <span className="font-semibold" style={{ color: '#02027f' }}>Organizer:</span> {achievement.organizer}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold" style={{ color: '#02027f' }}>Project:</span> {achievement.project}
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-3">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-[60vh] flex items-center py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#02027f' }}>
            GET IN TOUCH
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#d41213] to-[#02027f] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg mb-12">
            Feel free to reach out via email, GitHub, or Instagram!
          </p>

          <div className="flex justify-center items-center gap-8">
            <a
              href="mailto:fakhridanish.mirza@gmail.com"
              className="p-4 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ borderWidth: '2px', borderColor: 'transparent' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#d41213'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
            >
              <Mail size={32} style={{ color: '#02027f' }} />
            </a>

            <a
              href="https://github.com/fakhridanishmp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ borderWidth: '2px', borderColor: 'transparent' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#d41213'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
            >
              <Github size={32} style={{ color: '#02027f' }} />
            </a>

            <a
              href="https://instagram.com/fakhri.mp.17"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ borderWidth: '2px', borderColor: 'transparent' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#d41213'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
            >
              <Instagram size={32} style={{ color: '#02027f' }} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-600 text-sm">
            Designed & Built by Fakhridanish Mirza Priyoyuwono
          </p>
        </div>
      </footer>
    </div>
  );
}