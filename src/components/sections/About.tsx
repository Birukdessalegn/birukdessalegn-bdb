import { siteConfig } from "../../content/site";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-black text-white rounded-xl p-6 md:p-8">
      <h2 className="text-3xl font-semibold tracking-tight text-white animate-fade-slide-up">About</h2>
      <div className="mt-6 text-white/90 grid gap-8 max-w-5xl md:grid-cols-2 items-start text-[17px] md:text-[18px] leading-relaxed">
        <div className="space-y-5">
          <p className="text-[17px] md:text-[18px] font-medium animate-fade-slide-up">👋 About Me — <span className="text-white">Biruk Dessalegn</span></p>
        
        <p>
          Hi, I’m Bruk, a passionate Full-Stack Developer, Cybersecurity Enthusiast, and CEO of
          Mekenet Tech Solutions — where innovation meets integrity.
        </p>
        <p>
          My journey in tech began with a curiosity to build and secure digital systems that make a
          real-world impact. Over the years, I’ve gained hands-on experience in web and mobile
          development, specializing in React, Next.js, Flutter, Spring Boot, and MySQL, while also
          developing a deep interest in ethical hacking, system defense, and penetration testing.
        </p>
        <p>
          At Mekenet Tech Solutions, I lead a talented team dedicated to building efficient,
          scalable, and secure applications — from vehicle route assignment systems to modern
          business websites. My approach combines creative design with strong backend logic and a
          focus on data protection and system integrity.
        </p>
        <p>
          Beyond code, I’m inspired by the rich spiritual and intellectual tradition of the
          Ethiopian Orthodox Tewahedo Church — grounding my work in discipline, purpose, and values
          that guide both my professional and personal life.
        </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4 mx-auto md:mx-0 md:justify-self-end">
          {/* Main portrait centered with subtle float */}
          <div className="relative overflow-hidden rounded-xl ring-2 ring-foreground/10 shadow-lg w-full sm:w-[260px] md:w-[280px] lg:w-[340px] aspect-[3/4] animate-float-slow transition-transform duration-300 hover:scale-105">
            <Image
              src="/IMG_9748 (Edited).JPG"
              alt="Biruk Dessalegn"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 340px, (min-width: 768px) 280px, (min-width: 640px) 260px, 100vw"
            />
          </div>
          

          {/* Small circular profile that appears to float to the right */}
          
        </div>
        <div className="relative overflow-hidden rounded-xl ring-2 ring-foreground/10 shadow-lg w-full sm:w-[260px] md:w-[280px] lg:w-[340px] aspect-[3/4] animate-float-slow transition-transform duration-300 hover:scale-105">
            <Image
              src="/profile.jpg"
              alt="Biruk Dessalegn"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 340px, (min-width: 768px) 280px, (min-width: 640px) 260px, 100vw"
            />
          </div>
        <div className="md:col-span-2 space-y-5">
          <div className="pt-2">
            <h3 className="text-2xl font-semibold text-white">💡 What I Do</h3>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                <span className="font-medium">Frontend Development:</span> React, Next.js, Tailwind
                CSS, Framer Motion
              </li>
              <li>
                <span className="font-medium">Backend Development:</span> Spring Boot, Node.js,
                Express, REST APIs
              </li>
              <li>
                <span className="font-medium">Mobile Apps:</span> Flutter (Android & iOS)
              </li>
              <li>
                <span className="font-medium">Cybersecurity:</span> Ethical Hacking, Network
                Scanning, Vulnerability Testing, System Hardening
              </li>
              <li>
                <span className="font-medium">Full Project Lifecycle:</span> From idea → design →
                development → deployment
              </li>
              <li>
                <span className="font-medium">Team Leadership:</span> Building and guiding teams at
                Mekenet Tech Solutions
              </li>
            </ul>
          </div>
          <div className="pt-2">
            <h3 className="text-2xl font-semibold text-white">⚙️ My Vision</h3>
            <p className="mt-2">
              To create technology that blends innovation, security, and spiritual integrity —
              empowering businesses and individuals to thrive in a safe and connected digital world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

