import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import AppRoute from './AppRoute';
import LegacyLayout from './components/layout/LegacyLayout';
import HomeView from './components/home/HomeView';
import ImageUploadView from './imageUpload/ImageUploadView';

describe('<AppRoute />', () => {
  it('match the snapshot with LegacyLayout', () => {
    const wrapper = shallow(
      <AppRoute layout={LegacyLayout} component={HomeView} exact path="/" />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('match the snapshot with ImageUploadLayout', () => {
    const wrapper = shallow(
      <AppRoute
        layout={LegacyLayout}
        component={ImageUploadView}
        exact
        path="/image-upload/:sku?"
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
