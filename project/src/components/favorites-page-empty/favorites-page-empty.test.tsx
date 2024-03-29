import {render, screen} from '@testing-library/react';
import FavoritesPageEmpty from './favorites-page-empty';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    render(
      <FavoritesPageEmpty />
    );

    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
  });
});
