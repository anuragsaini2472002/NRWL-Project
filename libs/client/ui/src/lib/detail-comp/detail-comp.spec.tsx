import { render } from '@testing-library/react';

import DetailComp from './detail-comp';

describe('DetailComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailComp />);
    expect(baseElement).toBeTruthy();
  });
});
