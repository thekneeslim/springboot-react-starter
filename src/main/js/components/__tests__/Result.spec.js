import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Result from '../Result';

configure({ adapter: new Adapter() });


describe('Result', () => {
    it('should contain property', () => {
        let wrapper = shallow(<Result />);
        expect(wrapper.find('p').length).toEqual(1);
    });
});

