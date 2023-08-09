import React from 'react'
import FormHeader from './FormHeader'
import FormInnerWrapper from './FormInnerWrapper'
import Footer from './Footer';

/**
 * FormWrapper Component
 *
 * A component to wrap the entire form content.
 *
 * @component
 * @returns {JSX.Element} FormWrapper component.
 */
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
