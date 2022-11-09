import React from 'react';
import { useSelector } from 'react-redux';

import UserForm from 'components/UserFormComponents/UserForm';
import FormCard from 'components/FormCard';

import { RootState } from 'store/types';

const Forms = () => {
  const { FormState } = useSelector((state: RootState) => state);

  return (
    <>
      <UserForm />
      <div className="cards-container">
        {FormState.formCards.length > 0 &&
          FormState.formCards.map((FormCardData, index) => (
            <FormCard key={index} FormCardData={FormCardData} />
          ))}
      </div>
    </>
  );
};

export default Forms;
