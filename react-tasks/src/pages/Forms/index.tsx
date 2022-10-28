import React, { useState } from 'react';

import UserForm from 'components/UserFormComponents/UserForm';
import FormCard from 'components/FormCard';

import { InewData } from 'components/UserFormComponents/UserForm/types';

const Forms = () => {
  const [formCards, setFormCards] = useState<InewData[]>([]);

  const handleNewData = ({ name, surname, date, country, switcher, picture }: InewData) => {
    const newCardData = {
      name: name,
      surname: surname,
      date: date,
      country: country,
      switcher: switcher,
      picture: picture,
    };

    setFormCards([...formCards, newCardData]);
  };

  return (
    <>
      <UserForm onChange={(newData: InewData) => handleNewData(newData)} />
      <div className="cards-container">
        {formCards.length > 0 &&
          formCards.map((FormCardData, index) => (
            <FormCard key={index} FormCardData={FormCardData} />
          ))}
      </div>
    </>
  );
};

export default Forms;
