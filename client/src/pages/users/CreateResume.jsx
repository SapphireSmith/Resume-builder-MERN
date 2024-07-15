import React, { useRef, useState } from 'react';
import ResumeForm from '../../Components/ResumeForm';
import Template from '../../Components/Template';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CreateResume = () => {
    const [formData, setFormData] = useState({
        name: '',
        jobTitle: '',
        subtitle: '',
        aboutMe: '',
        imageUrl: '',
        experience: [],
        projects: [],
        education: [],
        achievements: [], // Corrected spelling to 'achievements'
    });

    const templateRef = useRef();

    const handleInputChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData(prevState => ({
                ...prevState,
                imageUrl: reader.result,
            }));
        };
        reader.readAsDataURL(file);
    };

    const printResume = () => {
        const input = document.getElementById('resume-content');
        html2canvas(input, { scale: 2 }) // Adjust scale for better quality
            .then(canvas => {
                const imgData = canvas.toDataURL('image/jpeg', 0.8); // Use JPEG format for smaller size
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('resume.pdf');
            });
    };

    return (
        <div className='bg-black w-full h-screen flex items-center justify-center'>
            <div className='flex w-full h-full'>
                <div className='w-full md:w-1/3 hidden md:block border-2 overflow-y-auto max-w-[1273px]'>
                    <ResumeForm
                        onInputChange={handleInputChange}
                        onFileChange={handleFileChange}
                        formData={formData}
                    />
                </div>
                <div className='w-full md:w-2/3 overflow-y-scroll p-6'>
                    <div className='px-3 py-4 flex justify-end'>
                        <button onClick={printResume} className='bg-green-400 text-black px-4 py-2 rounded-lg'>Print</button>
                    </div>
                    <Template ref={templateRef} formData={formData} />
                </div>
            </div>
        </div>
    );
};


export default CreateResume;
