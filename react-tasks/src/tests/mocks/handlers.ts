import { rest } from 'msw';
import { charactersTestResults } from './data';

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(charactersTestResults));
  }),
];
