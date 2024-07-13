import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const Template = () => {
  const [image, setImage] = useState(null); // State to store uploaded image file

  const resumeData = {
    name: 'John Doe',
    jobTitle: 'Senior Developer',
    subtitle: 'Full Stack Developer | React.js | Node.js',
    aboutMe: `I'm a passionate and experienced full stack developer with expertise in React.js and Node.js. 
              I enjoy solving complex problems and building scalable web applications.`,
    imageUrl: image ? URL.createObjectURL(image) : '', // Use uploaded image if available
    experience: [
      {
        position: 'Senior Developer',
        company: 'Tech Solutions Inc.',
        duration: 'Jan 2018 - Present',
        description: 'Lead development of web applications using React and Node.js.'
      },
      {
        position: 'Junior Developer',
        company: 'Software Co.',
        duration: 'May 2015 - Dec 2017',
        description: 'Assisted in frontend and backend development tasks.'
      }
    ],
    projects: [
      {
        name: 'Project A',
        description: 'Developed a scalable web application using React and Node.js.'
      },
      {
        name: 'Project B',
        description: 'Integrated third-party APIs to enhance application functionality.'
      }
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        university: 'University of Example',
        year: 'Graduated 2015',
        details: 'Courses in Algorithms, Database Management, and Software Engineering.'
      }
    ]
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    const input = document.getElementById('resume-content');

    html2canvas(input, {
      scale: 2, // Increase scale to improve image quality
      logging: true, // Enable logging for debugging
      useCORS: true // Enable CORS for cross-origin images
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg', 1.0); // Use JPEG format with maximum quality
      const pdf = new jsPDF({
        orientation: 'portrait', // or 'landscape'
        unit: 'pt', // Points, 'mm', 'cm', 'in'
        format: 'a4' // Choose a format like 'a4', 'letter', etc.
      });

      const imgWidth = 595.28; // A4 width in points (approx 210mm)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save('resume.pdf');
    });
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full" id="resume-content">
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="w-full md:w-1/4">
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="upload-image" />
          <label htmlFor="upload-image" className="block cursor-pointer">
            <img src={resumeData.imageUrl} alt="Profile" className="rounded-full w-48 h-48 mx-auto md:mx-0 md:ml-auto md:mr-0 mb-4" />
          </label>
          <h2 className="text-3xl font-bold mb-2 text-center md:text-left">{resumeData.name}</h2>
          <p className="text-lg text-center md:text-left">{resumeData.jobTitle}</p>
          <p className="text-base text-gray-600 text-center md:text-left">{resumeData.subtitle}</p>
        </div>
        <div className="w-full md:w-3/4">
          <div className="mt-4 md:mt-0">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-t-lg">
              <h3 className="text-2xl font-bold mb-2">About Me</h3>
              <p className="text-lg">{resumeData.aboutMe}</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-xl font-bold text-gray-700">{exp.position}</h4>
                  <p className="text-lg text-gray-600">{exp.company}</p>
                  <p className="text-lg text-gray-500">{exp.duration}</p>
                  <p className="text-md text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Projects</h3>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-xl font-bold text-gray-700">{project.name}</h4>
                  <p className="text-md text-gray-700">{project.description}</p>
                </div>
              ))}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-xl font-bold text-gray-700">{edu.degree}</h4>
                  <p className="text-lg text-gray-600">{edu.university}</p>
                  <p className="text-lg text-gray-500">{edu.year}</p>
                  <p className="text-md text-gray-700">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button onClick={handleDownloadPDF} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Template;
