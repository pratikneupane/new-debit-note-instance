import React from 'react'
import FormHeader from './FormHeader'
import FormInnerWrapper from './FormInnerWrapper'
import Footer from './Footer';

const FormWrapper: React.FC = () : JSX.Element => {
  return (
    <div className='w-[1024px] h-auto'>
      <FormHeader />
      <FormInnerWrapper />
      <Footer/>
    </div>
  );
}

export default FormWrapper;
