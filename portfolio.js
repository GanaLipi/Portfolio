import React, { useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

export default function Portfolio() {
  const contact = {
    email: "akshayaad1234@gmail.com",
    phone: "+919886339077",
    location: "Anywhere (Ready to Relocate)",
    linkedin: "https://linkedin.com/in/akshay-deshapande-172a76175",
    github: "https://github.com/GanaLipi",
    resumeUrl:
      "https://drive.google.com/uc?export=download&id=1TVQO5z6lIzMTJY0FqiLaRSWr8pmzfPj-",
  };

  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = contact.resumeUrl;
    link.setAttribute("download", "Akshay_Deshapande_CV.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="p-6 bg-white shadow-md sticky top-0 z-50">
        <nav className="flex justify-center gap-6 font-semibold">
          <a href="#summary" className="hover:text-blue-600">Summary</a>
          <a href="#employment" className="hover:text-blue-600">Employment</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#education" className="hover:text-blue-600">Education</a>
          <a href="#certifications" className="hover:text-blue-600">Certifications</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Summary */}
      <section id="summary" className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Akshay Deshapande</h1>
        <h2 className="text-xl font-semibold mb-4">Embedded Software Engineer (Automotive)</h2>
        <p>
          An <strong>Embedded Software Engineer (Automotive)</strong> with ~4 years of experience in the full <strong>V-Cycle</strong>, covering <strong>requirements engineering</strong>, <strong>software design</strong>, <strong>implementation</strong>, <strong>static analysis</strong>, and <strong>unit testing</strong>. Strong expertise in <strong>Classic AUTOSAR</strong>, <strong>ASPICE</strong>, <strong>MISRA C compliance</strong>, <strong>CAN</strong>, and <strong>UDS</strong>. Hands-on experience across <strong>Braking Systems</strong>, <strong>Battery Management Systems (BMS)</strong>, and <strong>ADAS Vision Systems</strong>, with proven contributions to <strong>performance optimization</strong> and <strong>defect resolution</strong>. Skilled in tools such as <strong>Vector DaVinci</strong>, <strong>CANoe</strong>, <strong>VectorCAST</strong>, <strong>Eclipse</strong>, <strong>ASCET</strong>, and <strong>Rhapsody</strong>. Recognized for <strong>problem-solving</strong>, <strong>cross-functional collaboration</strong>, and ensuring compliance with <strong>automotive safety</strong> and <strong>quality standards</strong> (<strong>ISO 26262</strong>, <strong>Agile and Scrum</strong>).
        </p>
      </section>

      {/* Employment */}
      <section id="employment" className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Employment History</h2>
        <div className="mb-6">
          <h3 className="font-semibold">Jan 2024 – April 2025 | Embedded Software Engineer, Knorr-Bremse TCI Pvt.Ltd – Pune, Maharashtra, India</h3>
          <p><strong>Project:</strong> Global Electronic Parking Braking System (GEPB), Truck Division</p>
          <ul className="list-disc ml-6">
            <li><strong>Owned complete development</strong> of <strong>Pressure Sensor</strong> and <strong>Valve Driver and Monitoring SWCs</strong>, from requirements derivation (IBM Jazz) to integration and validation.</li>
            <li><strong>Designed detailed software</strong> in <strong>Rhapsody</strong>, linked components to architecture, and implemented SWC and runnables via <strong>Vector DaVinci Developer/Configurator</strong> and <strong>Eclipse IDE</strong>.</li>
            <li><strong>Performed static code analysis</strong> ensuring <strong>MISRA compliance</strong>; validated implementation on hardware using <strong>Lauterbach debugger</strong>.</li>
            <li><strong>Developed & executed VectorCAST unit tests</strong>, achieving 100% branch/statement coverage; ensured <strong>ASPICE-compliant traceability</strong>.</li>
            <li><strong>Optimized execution time</strong> of Valve Driver and Pressure Sensor SWC from <strong>300ms to under 10ms</strong> by introducing handshake methodology.</li>
            <li><strong>Diagnosed sensor startup spike</strong> (7ms–20ms after POR), coordinated with HW team for circuit fix in next revision.</li>
            <li><strong>Corrected and streamlined VectorCAST to Jazz export workflow</strong>, saving license cost and training team on new process.</li>
            <li><strong>Ensured defect tracking and sprint prioritization</strong> via <strong>JIRA</strong>, <strong>PTC Integrity</strong> and <strong>IBM Jazz</strong>.</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold">Sep 2022 – Dec 2023 | Software Engineer, Magna International – Bengaluru, Karnataka, India</h3>
          <p><strong>Projects:</strong> Subaru Vision Systems 350(SVS-350) & Stereo Multi-Purpose Camera (SMPC5)</p>
          <ul className="list-disc ml-6">
            <li><strong>Supported ADAS</strong> and Active Safety projects with <strong>AUTOSAR development</strong> and <strong>SW quality testing</strong>.</li>
            <li><strong>Created and executed test cases</strong> in <strong>Code-Beamer</strong>, validated outputs in <strong>CANoe</strong>, and updated <strong>CAPL scripts</strong> for new variants.</li>
            <li><strong>Contributed in POC</strong> by creating SWC using <strong>DaVinci Developer and Configurator</strong>.</li>
            <li><strong>Assisted in integration and unit testing</strong>.</li>
            <li><strong>Gained practical exposure</strong> to <strong>Agile and Scrum processes</strong> in cross-functional teams.</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold">Jun 2021 – Aug 2022 | Software Engineer, Bosch Global Software Technologies – Bengaluru, Karnataka, India</h3>
          <p><strong>Projects:</strong> GM, Honda, Isuzu, CATL and Panasonic</p>
          <ul className="list-disc ml-6">
            <li><strong>Developed and tested</strong> low-voltage <strong>Battery Management Systems</strong> (Gen1–Gen2).</li>
            <li><strong>Implemented changes</strong> in <strong>ECU.Worx (Eclipse IDE)</strong>; validated via <strong>HIL testing</strong> in <strong>CANoe</strong> and <strong>ETAS INCA</strong>.</li>
            <li><strong>Applied Model-Based Development</strong> (<strong>ASCET</strong>) with <strong>MiL/SiL testing</strong> in <strong>TPT</strong>.</li>
            <li><strong>Conducted functional & integration testing</strong>, including <strong>CAN Bus-Off</strong>, <strong>Network Supervision</strong>, and <strong>ECU reprogramming</strong> (<strong>DPS Tool</strong>).</li>
            <li><strong>Performed static code analysis</strong> ensuring <strong>MISRA compliance</strong>.</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
        <ul className="list-disc ml-6">
          <li><strong>Programming Languages:</strong> C and Embedded C</li>
          <li><strong>Tools:</strong> Eclipse, Vector DaVinci, ASCET, TPT, INCA, Rhapsody, VectorCAST, CANoe, GIT, IBM Jazz, JIRA, CodeBeamer, PTC Integrity</li>
          <li><strong>Automotive Standards:</strong> Classic AUTOSAR, ASPICE, ISO 26262 (Functional Safety), MISRA C, Agile, Test Methodology</li>
          <li><strong>Protocols:</strong> CAN, UDS (ISO 14229)</li>
          <li><strong>Domains:</strong> Parking Brake Systems, Battery Management Systems, ADAS Vision Systems</li>
          <li><strong>Microcontrollers:</strong> ARM-based MCUs</li>
        </ul>
      </section>

      {/* Education */}
      <section id="education" className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul className="list-disc ml-6">
          <li><strong>Bachelor of Engineering</strong> in Electronics and Communication Engineering, Rao Bahadur Y Mahabaleshwarappa Engineering College, Ballari (2015 – 2018)</li>
          <li><strong>Diploma</strong> in Electronics and Communication Engineering, Sanjay Gandhi Polytechnic College, Ballari (2012 – 2015)</li>
          <li><strong>High School</strong>, Sri Nanda Residential School, Ballari (2011 – 2012)</li>
        </ul>
      </section>

      {/* Certifications */}
      <section id="certifications" className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
        <ul className="list-disc ml-6">
          <li><strong>Advanced Diploma in Embedded Systems and IoT</strong>, ISM Univ, Bengaluru</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white shadow-md mt-6 p-6">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-blue-600">
            <Mail className="h-5 w-5" /> {contact.email}
          </a>
          <a href={`tel:${contact.phone}`} className="flex items-center gap-2 hover:text-blue-600">
            <Phone className="h-5 w-5" /> {contact.phone}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-5 w-5" /> {contact.location}
          </span>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600">
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600">
            <Github className="h-5 w-5" /> GitHub
          </a>
          <a
            href={contact.resumeUrl}
            download="Akshay_Deshapande_CV.pdf"
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <Download className="h-5 w-5" /> Download CV
          </a>
        </div>
      </section>
    </div>
  );
}
