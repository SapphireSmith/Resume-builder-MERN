import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

const ResumeForm = ({ onInputChange, onFileChange, formData, toggle, setToggle, }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        const nameParts = name.split('.');

        if (nameParts.length === 1) {
            // Simple update for non-nested fields
            onInputChange(name, value);
        } else {
            // Update for nested fields
            const field = nameParts[0];
            const index = parseInt(nameParts[1], 10);
            const nestedField = nameParts[2];

            const updatedNestedArray = formData[field].map((item, i) =>
                i === index ? { ...item, [nestedField]: value } : item
            );

            onInputChange(field, updatedNestedArray);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        onFileChange(file);
    };

    return (
        <div className='p-4'>
            {toggle && <XMarkIcon className='size-6 mb-4' color='white' onClick={()=>setToggle(false)} />}
            <h2 className='text-2xl mb-4 text-white font-bold'>Enter Details</h2>
            <div className='mb-4'>
                <label className='block text-white mb-1'>Name</label>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full p-2'
                />
            </div>
            <div className='mb-4'>
                <label className='block text-white mb-1'>Job Title</label>
                <input
                    type='text'
                    name='jobTitle'
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className='w-full p-2'
                />
            </div>
            <div className='mb-4'>
                <label className='block text-white mb-1'>Subtitle</label>
                <input
                    type='text'
                    name='subtitle'
                    value={formData.subtitle}
                    onChange={handleChange}
                    className='w-full p-2'
                />
            </div>
            <div className='mb-4'>
                <label className='block text-white mb-1'>About Me</label>
                <textarea
                    name='aboutMe'
                    value={formData.aboutMe}
                    onChange={handleChange}
                    className='w-full p-2'
                />
            </div>
            <div className='mb-4'>
                <label className='block text-white mb-1'>Profile Image</label>
                <input
                    type='file'
                    name='imageUrl'
                    onChange={handleFileChange}
                    className='w-full p-2'
                />
            </div>
            {/* Experience fields */}
            <div className='mb-4'>
                <label className='block text-white mb-1'>Experience</label>
                {formData.experience.map((exp, index) => (
                    <div key={index} className='mb-4'>
                        <label className='block text-white mb-1'>Position</label>
                        <input
                            type='text'
                            name={`experience.${index}.position`}
                            value={exp.position}
                            onChange={handleChange}
                            className='w-full p-2'
                        />
                        <label className='block text-white mb-1'>Company</label>
                        <input
                            type='text'
                            name={`experience.${index}.company`}
                            value={exp.company}
                            onChange={handleChange}
                            className='w-full p-2'
                        />
                        <label className='block text-white mb-1'>Duration</label>
                        <input
                            type='text'
                            name={`experience.${index}.duration`}
                            value={exp.duration}
                            onChange={handleChange}
                            className='w-full p-2'
                        />
                        <label className='block text-white mb-1'>Description</label>
                        <textarea
                            name={`experience.${index}.description`}
                            value={exp.description}
                            onChange={handleChange}
                            className='w-full p-2'
                        />
                    </div>
                ))}
                <button
                    className='bg-blue-500 text-white py-2 px-4 rounded'
                    onClick={() => onInputChange('experience', [...formData.experience, { position: '', company: '', duration: '', description: '' }])}
                >
                    Add Experience
                </button>
            </div>
            {/* Projects fields */}
            <div className='mb-4'>
                <label className='block text-white mb-1'>Projects</label>
                {formData.projects.map((project, index) => (
                    <div key={index} className='mb-4'>
                        <label className='block text-white mb-1'>Project Name</label>
                        <input
                            type='text'
                            name={`projects.${index}.name`}
                            value={project.name}
                            onChange={handleChange}
                            className='w-full p-2'
                        />
                        <label className='block text-white mb-1'>Description</label>
                        <textarea
                            name={`projects.${index}.description`}
                            value={project.description}
                            onChange={handleChange}
                            className='w-full p-2'
                        />
                    </div>
                ))}
                <button
                    className='bg-blue-500 text-white py-2 px-4 rounded'
                    onClick={() => onInputChange('projects', [...formData.projects, { name: '', description: '' }])}
                >
                    Add Project
                </button>
            </div>
            {/* Education fields */}
            <div className='mb-4'>
                <label className='block text-white mb-1'>Education</label>
                {formData.education.map((edu, index) => (
                    <div key={index} className='mb-4'>
                        <label className='block text-white mb-1'>Degree</label>
                        <input
                            type='text'
                            name={`education.${index}.degree`}
                            value={edu.degree}
                            onChange={handleChange}
                            className='w-full p-2'
                        />
                        <label className='block text-white mb-1'>University</label>
                        <input
                            type='text'
                            name={`education.${index}.university`}
                            value={edu.university}
                            onChange={handleChange}
                            className='w-full p-2'
                        />
                        <label className='block text-white mb-1'>Year</label>
                        <input
                            type='text'
                            name={`education.${index}.year`}
                            value={edu.year}
                            onChange={handleChange}
                            className='w-full p-2'
                        />
                        <label className='block text-white mb-1'>Details</label>
                        <textarea
                            name={`education.${index}.details`}
                            value={edu.details}
                            onChange={handleChange}
                            className='w-full p-2'
                        />
                    </div>
                ))}
                <button
                    className='bg-blue-500 text-white py-2 px-4 rounded'
                    onClick={() => onInputChange('education', [...formData.education, { degree: '', university: '', year: '', details: '' }])}
                >
                    Add Education
                </button>
            </div>

            {/* Achivement field */}
            {/* Achievements field */}
            <div className='mb-4'>
                <label className='block text-white mb-1'>Achievements</label>
                {formData.achievements.map((achiv, index) => (
                    <div key={index} className='mb-4'>
                        <label className='block text-white mb-1'>Title</label>
                        <input
                            type='text'
                            name={`achievements.${index}.title`} // Corrected spelling to 'achievements'
                            value={achiv.title}
                            onChange={handleChange}
                            className='w-full p-2'
                        />
                        <label className='block text-white mb-1'>Details</label>
                        <textarea
                            name={`achievements.${index}.details`} // Corrected spelling to 'achievements'
                            value={achiv.details}
                            onChange={handleChange}
                            className='w-full p-2'
                        />
                    </div>
                ))}
                <button
                    className='bg-blue-500 text-white py-2 px-4 rounded'
                    onClick={() => onInputChange('achievements', [...formData.achievements, { title: '', details: '' }])} // Corrected spelling to 'achievements'
                >
                    Add Achievement
                </button>
            </div>
        </div>
    );
};

export default ResumeForm;
