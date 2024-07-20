import React, { useRef, useState } from 'react';
import ResumeForm from '../../Components/ResumeForm';
import Template from '../../Components/Template';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';

const CreateResume = () => {
    const [toggle, setToggle] = useState(false);
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
                const imgData = canvas.toDataURL('image/jpeg', 0.5); // Use JPEG format for smaller size
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('resume.pdf');
            });
    };

    const toggleMenu = () => {
        setToggle(!toggle)

    }

    return (
        <div className='bg-black w-full h-screen flex items-center justify-center'>
            <div className='flex w-full h-full'>
                <div className={` md:w-1/3  lg:block lg:static ${toggle ? 'absolute bg-black block w-[70%] h-screen' : 'hidden w-full'}  overflow-y-auto max-w-[1273px]`}>
                    <ResumeForm
                        onInputChange={handleInputChange}
                        onFileChange={handleFileChange}
                        formData={formData}
                        toggle={toggle}
                        setToggle={setToggle}
                    />
                </div>
                <div className='w-full lg:w-2/3 overflow-y-scroll p-6'>
                    <div className='px-3 py-4 flex items-center justify-between '>
                        <Bars3BottomLeftIcon className={`size-6 lg:hidden`} color='white' onClick={toggleMenu} />
                        <button onClick={printResume} className='bg-green-400 text-black px-4 py-2 rounded-lg'>Print</button>
                    </div>
                    <Template ref={templateRef} formData={formData} />
                </div>
            </div>
        </div>
    );
};


export default CreateResume;
