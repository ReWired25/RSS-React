import React from 'react';

import UserForm from 'components/UserFormComponents/UserForm';
import FormCard from 'components/FormCard';

import { IFormsData } from 'pages/Forms/types';
import { InewData } from 'components/UserFormComponents/UserForm/types';

class Forms extends React.Component<Record<string, string>, IFormsData> {
  constructor(props: Record<string, string>) {
    super(props);
    this.state = { formCards: [] };
  }

  handleNewData({ name, surname, date, country, switcher, picture }: InewData) {
    const newCardData = {
      name: name,
      surname: surname,
      date: date,
      country: country,
      switcher: switcher,
      picture: picture,
    };
    const stateValue = this.state.formCards.slice();

    stateValue.push(newCardData);
    this.setState({ formCards: stateValue });
  }

  render() {
    return (
      <>
        <UserForm onChange={(newData: InewData) => this.handleNewData(newData)} />
        <div className="cards-container">
          {this.state.formCards.length > 0 &&
            this.state.formCards.map((FormCardData, index) => (
              <FormCard key={index} FormCardData={FormCardData} />
            ))}
        </div>
      </>
    );
  }
}

export default Forms;
