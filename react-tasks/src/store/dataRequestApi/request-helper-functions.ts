import { IdataResult, IMainState, Sort, Page, TotalResults } from 'store/MainState/types';

export const handleResultsSorting = (results: IdataResult[], MainState: IMainState) => {
  if (MainState.currentSorting === Sort.default) return results;

  const sortedResults = results.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });

  return MainState.currentSorting === Sort.asc ? sortedResults : sortedResults.reverse();
};

export const handleCurrentResults = (results: IdataResult[], MainState: IMainState) => {
  if (MainState.resultsOnPage === Page.maxResults) return results;

  return +MainState.viewPage % 2 !== 0
    ? results.slice(TotalResults.start, TotalResults.end)
    : results.slice(TotalResults.end);
};
