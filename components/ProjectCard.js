import Image from 'next/image';

export default function ProjectCard({ title, description, image, index = 0 }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''} items-center md:items-start justify-center mt-24 px-8`}
    >
      <div className="md:w-1/4 flex justify-center md:mb-0 mb-6">
        <Image
          src={image}
          width={1920}
          height={1080}
          alt={title}
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
      <div
        className={`md:w-1/2 ${isEven ? 'md:pl-10' : 'md:pr-10'} text-white font-mono pt-6 md:pt-0`}
      >
        <h2 className={`text-2xl font-bold ${isEven ? 'text-left' : 'text-right'}`}>
          {title}
        </h2>
        <p className="text-md pt-4 text-justify">{description}</p>
      </div>
    </div>
  );
}
