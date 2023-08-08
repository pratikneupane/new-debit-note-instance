import React from 'react'
import FormHeader from './FormHeader'
import FormInnerWrapper from './FormInnerWrapper'

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
    <div>
      <FormHeader />
      <FormInnerWrapper />
    </div>
  );
}

export default FormWrapper;
