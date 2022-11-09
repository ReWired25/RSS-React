import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'store/types';
import { Ifields, fieldsValues } from './types';

const CharacterInfo = () => {
  const { CharacterState, MainState } = useSelector((state: RootState) => state);
  const { id, gender, image, name, species, origin, location } = CharacterState.CharacterData;
  const position = (MainState.currentResults?.findIndex((data) => data.id === id) as number) + 1;
  const fields: Ifields = {
    'Character ID': id,
    'Position on page': position,
    'Character image': image,
    Name: name,
    Gender: gender,
    Species: species,
    Origin: origin.name,
    Location: location.name,
  };

  return (
    <>
      <NavLink className="main-link" to={'/'}>
        Back to Main
      </NavLink>
      <div className="character-info-container">
        {Object.keys(fields).map((currentField) => {
          if (currentField === fieldsValues.image) {
            return (
              <img
                className="character-image"
                key={currentField}
                src={fields[currentField] as string}
                alt={currentField}
              />
            );
          }

          return (
            <p key={currentField}>
              <span className="character-title-field">
                {currentField + fieldsValues.colonAndSpace}
              </span>
              {`${fields[currentField]}`}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default CharacterInfo;
