import React from 'react';

import Page404 from 'components/404Page/Page404';

it('should generate 404 page', () => {
  const wrapper = shallow(<Page404 />);
  expect(wrapper.exists()).toBe(true);
});
