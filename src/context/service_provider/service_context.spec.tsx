import React from 'react';
import { render } from 'enzyme';
import { ServiceProvider } from './service_provider_context';

describe('Service Provider', () => {
  let Wrapper;
  beforeEach(() => {
    Wrapper = ServiceProvider;
  });
  test('Renders correctly', () => {
    const component = render(
      <Wrapper shouldUseFaked={true}>
        <div></div>
      </Wrapper>
    );
    expect(component).toMatchSnapshot();
  });
});
