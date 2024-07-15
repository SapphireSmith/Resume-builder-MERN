// import React, { forwardRef } from 'react';
// const DummyImage = 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1721056861~exp=1721060461~hmac=93cf870f0ed259556dde891f422a553d40ef529367555ffa3a9cb651f0271289&w=2000'
// const Template = forwardRef(({ formData }, ref) => (
//     <div ref={ref} className="bg-gray-100 p-8 rounded-lg min-h-[1250px] shadow-lg w-full" id="resume-content">
//         <div className="flex flex-col md:flex-row md:space-x-6">
//             <div className="w-full md:w-1/4 ">
//                 <img src={formData.imageUrl || DummyImage} alt="Profile" className="rounded-full object-cover w-48 h-48 mx-auto md:mx-0 md:ml-auto md:mr-0 mb-4" />
//                 <h2 className="text-3xl font-bold mb-2 text-center md:text-left">{formData.name}</h2>
//                 <p className="text-lg text-center md:text-left">{formData.jobTitle}</p>
//                 <p className="text-base text-gray-600 text-center md:text-left">{formData.subtitle}</p>
//             </div>
//             <div className="w-full md:w-3/4">
//                 <div className="mt-4 md:mt-0">
//                     <div className="bg-gradient-to-r min-h-[150px] from-blue-500 to-purple-500 text-white p-6 rounded-t-lg">
//                         <h3 className="text-2xl font-bold mb-2">About Me</h3>
//                         <p className="text-lg">{formData.aboutMe}</p>
//                     </div>
//                     <div className="mt-6 min-h-[250px]">
//                         <h3 className="text-2xl font-bold mb-2">Experience</h3>
//                         {formData.experience.map((exp, index) => (
//                             <div key={index} className="mb-4">
//                                 <h4 className="text-xl font-bold">{exp.position}</h4>
//                                 <p className="text-lg">{exp.company}</p>
//                                 <p className="text-base text-gray-600">{exp.duration}</p>
//                                 <p className="text-base">{exp.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="mt-6 min-h-[350px]">
//                         <h3 className="text-2xl font-bold mb-2">Projects</h3>
//                         {formData.projects.map((project, index) => (
//                             <div key={index} className="mb-4">
//                                 <h4 className="text-xl font-bold">{project.name}</h4>
//                                 <p className="text-base">{project.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="mt-6">
//                         <h3 className="text-2xl font-bold mb-2">Education</h3>
//                         {formData.education.map((edu, index) => (
//                             <div key={index} className="mb-4">
//                                 <h4 className="text-xl font-bold">{edu.degree}</h4>
//                                 <p className="text-lg">{edu.university}</p>
//                                 <p className="text-base text-gray-600">{edu.year}</p>
//                                 <p className="text-base">{edu.details}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// ));

// export default Template;


import React, { forwardRef } from 'react';
import { Dummy_Profile } from '../assets/images'
const DummyImage = Dummy_Profile
const Template = forwardRef(({ formData }, ref) => (
    <div ref={ref} className="bg-gray-100 p-4 md:p-8 rounded-lg min-h-[1250px] shadow-lg w-full" id="resume-content">
        <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="w-full md:w-1/4">
                <img src={formData.imageUrl || DummyImage} alt="Profile" className="rounded-full object-cover w-24 h-24 md:w-48 md:h-48 mx-auto md:mx-0 md:ml-auto md:mr-0 mb-4" />
                <h2 className="text-xl md:text-3xl font-bold mb-2 text-center md:text-left">{formData.name}</h2>
                <p className="text-base md:text-lg text-center md:text-left">{formData.jobTitle}</p>
                <p className="text-sm md:text-base text-gray-600 text-center md:text-left">{formData.subtitle}</p>
            </div>
            <div className="w-full md:w-3/4">
                <div className="mt-4 md:mt-0">
                    <div className="bg-gradient-to-r min-h-[100px] md:min-h-[150px] from-blue-500 to-purple-500 text-white p-4 md:p-6 rounded-t-lg">
                        <h3 className="text-lg md:text-2xl font-bold mb-2">About Me</h3>
                        <p className="text-sm md:text-lg">{formData.aboutMe}</p>
                    </div>
                    <div className="mt-4 md:mt-6 min-h-[150px] md:min-h-[250px]">
                        <h3 className="text-lg md:text-2xl font-bold mb-2">Experience</h3>
                        {formData.experience.map((exp, index) => (
                            <div key={index} className="mb-2 md:mb-4">
                                <h4 className="text-base md:text-xl font-bold">{exp.position}</h4>
                                <p className="text-xs md:text-base">{exp.company}</p>
                                <p className="text-xs md:text-sm text-gray-600">{exp.duration}</p>
                                <p className="text-xs md:text-sm">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 md:mt-6 min-h-[150px] md:min-h-[250px]">
                        <h3 className="text-lg md:text-2xl font-bold mb-2">Projects</h3>
                        {formData.projects.map((project, index) => (
                            <div key={index} className="mb-2 md:mb-4">
                                <h4 className="text-base md:text-xl font-bold">{project.name}</h4>
                                <p className="text-xs md:text-base">{project.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 md:mt-6 min-h-[150px]">
                        <h3 className="text-lg md:text-2xl font-bold mb-2">Education</h3>
                        {formData.education.map((edu, index) => (
                            <div key={index} className="mb-2 md:mb-4">
                                <h4 className="text-base md:text-xl font-bold">{edu.degree}</h4>
                                <p className="text-xs md:text-lg">{edu.university}</p>
                                <p className="text-xs md:text-sm text-gray-600">{edu.year}</p>
                                <p className="text-xs md:text-sm">{edu.details}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 md:mt-6">
                        <h3 className="text-lg md:text-2xl font-bold mb-2">Achivements</h3>
                        {formData.achievements.map((achiv, index) => (
                            <div key={index} className="mb-2 md:mb-4">
                                <h4 className="text-base md:text-xl font-bold">{achiv.title}</h4>
                                <p className="text-xs md:text-lg">{achiv.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
));

export default Template;
