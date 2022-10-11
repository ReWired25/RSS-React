import React from 'react';

import UserForm from 'components/UserForm/UserForm';
import FormCard from 'components/FormCard/FormCard';

import { IFormsData } from 'pages/Forms/types';
import { InewData } from 'components/UserForm/types';

class Forms extends React.Component<Record<string, string>, IFormsData> {
  constructor(props: Record<string, string>) {
    super(props);
    this.state = { value: [] };
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
    const stateValue = this.state.value.slice();

    stateValue.push(newCardData);
    this.setState({ value: stateValue });
  }

  render() {
    return (
      <>
        <UserForm onChange={(newData: InewData) => this.handleNewData(newData)} />
        {this.state.value.length > 0 &&
          this.state.value.map(({ name, surname, date, country, switcher, picture }, index) => {
            return (
              <FormCard
                key={index}
                name={name}
                surname={surname}
                date={date}
                country={country}
                switcher={switcher}
                picture={picture}
              />
            );
          })}
      </>
    );
  }
}

export default Forms;
