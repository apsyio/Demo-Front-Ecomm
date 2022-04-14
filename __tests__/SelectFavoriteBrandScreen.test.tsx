import React from 'react';

import useGetAllBrands from '~/hooks/brand/useGetBrands';
import useSetBrands from '~/hooks/inspo/useSetBrands';
import {SelectFavoriteBrandScreen} from '~/screens/auth';
import {fireEvent, render, waitFor} from '~/test/utils';

jest.useFakeTimers();

const mockGetAllBrands = useGetAllBrands as jest.Mock<
  Partial<ReturnType<typeof useGetAllBrands>>
>;
jest.mock('~/hooks/brand/useGetBrands');

const mockUseSetBrands = useSetBrands as jest.Mock<
  Partial<ReturnType<typeof useSetBrands>>
>;
jest.mock('~/hooks/inspo/useSetBrands');

// Describing a test suite
describe('<SelectFavoriteBrandScreen />', () => {
  // Describing our test

  const mockMutate = jest.fn();

  beforeEach(() => {
    mockUseSetBrands.mockReturnValue({
      isLoading: false,
      mutate: mockMutate,
    });

    mockGetAllBrands.mockReturnValue({
      data: {
        pages: [
          {
            id: 3,
            name: 'Cupshe',
            thumbnail:
              'https://apscueonthecurvesstorage.blob.core.windows.net/admin/11honore.png',
            sizes: [],
            likesCount: 4,
            createdAt: '0001-01-01T00:00:00.000Z',
          },
          {
            id: 4,
            name: 'ullapopken',
            thumbnail:
              'https://apscueonthecurvesstorage.blob.core.windows.net/admin/adoreme.png',
            sizes: [],
            likesCount: 3,
            createdAt: '0001-01-01T00:00:00.000Z',
          },
        ],
        pageParams: [],
      },
    });
  });

  it('should checked the checkboxes and call mutation', async () => {
    const {getByTestId, getAllByTestId, getByText} = render(
      <SelectFavoriteBrandScreen />,
    );

    const cupshe = getByTestId('Cupshe');
    const ullapopken = getByTestId('ullapopken');

    fireEvent(cupshe, 'press');
    fireEvent(ullapopken, 'press');

    const checkboxes = getAllByTestId('checkbox');
    expect(checkboxes.length).toBe(2);

    fireEvent(getByText('Next'), 'press');
    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledTimes(1);
    });
  });
});
