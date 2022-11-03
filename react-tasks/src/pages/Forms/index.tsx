import React, { useContext } from 'react';

import UserForm from 'components/UserFormComponents/UserForm';
import FormCard from 'components/FormCard';
import { AppContext } from 'context';

const Forms = () => {
  const AppState = useContext(AppContext);
  const { FormState } = AppState;

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
