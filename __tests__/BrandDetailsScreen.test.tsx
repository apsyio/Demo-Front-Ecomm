import React from 'react';

import useGetBrandByBrandId from '~/hooks/brand/useGetBrandByBrandId';
import {navigate} from '~/navigation/methods';
import {BrandDetailsScreen} from '~/screens/brands';
import {fireEvent, render} from '~/test/utils';

jest.useFakeTimers();

const mockGetBrandByBrandId = useGetBrandByBrandId as jest.Mock<
  Partial<ReturnType<typeof useGetBrandByBrandId>>
>;
jest.mock('~/hooks/brand/useGetBrandByBrandId');

jest.mock('~/navigation/methods');

const myNavigate = navigate as jest.Mock<Partial<ReturnType<typeof navigate>>>;

// Describing a test suite
describe('<SelectFavoriteBrandScreen />', () => {
  // Describing our test

  beforeEach(() => {
    mockGetBrandByBrandId.mockReturnValue({
      brandDetails: {
        id: 3,
        name: 'Cupshe',
        thumbnail:
          'https://apscueonthecurvesstorage.blob.core.windows.net/admin/11honore.png',
        sizes: ['1x', '2x'],
        likesCount: 4,
        photos: [{key: 'LW740pjOMu.jpg', value: ['']}],
        inspos: [],
        liked: true,
        createdAt: '0001-01-01T00:00:00.000Z',
      },
    });
  });

  it('should render brand details', async () => {
    const {getByText} = render(
      <BrandDetailsScreen route={{params: {id: 1}}} />,
    );

    getByText('Cupshe');
    getByText('1x 2x');

    fireEvent(getByText('See More'), 'press');

    expect(myNavigate).toHaveBeenLastCalledWith('Posts', {brandId: 1});
  });
});
