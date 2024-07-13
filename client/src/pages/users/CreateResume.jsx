import React from 'react';
import ResumeForm from '../../Components/ResumeForm';
import Template from '../../Components/Template';

const CreateResume = () => {
    return (
        <div className='bg-black w-full h-screen flex items-center justify-center'>
            <div className='flex w-full h-full'>
                <div className='w-1/3 border-2 overflow-y-auto'>
                    <ResumeForm />
                </div>
                <div className='w-2/3 overflow-y-scroll'>
                    <Template />
                </div>
            </div>
        </div>
    );
};

export default CreateResume;
