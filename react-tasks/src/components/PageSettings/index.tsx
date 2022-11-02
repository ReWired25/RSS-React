import React from 'react';

import TotalResultsSelect from 'components/PageSettings/TotalResultsSelect';
import Sorting from 'components/PageSettings/Sorting';

const PageSettings = () => {
  return (
    <div className="page-settings">
      <TotalResultsSelect />
      <Sorting />
    </div>
  );
};

export default PageSettings;
