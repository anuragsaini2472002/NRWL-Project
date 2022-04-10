import { render } from '@testing-library/react';

import TestComp1 from './test-comp1';

describe('TestComp1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestComp1 />);
    expect(baseElement).toBeTruthy();
  });
});
