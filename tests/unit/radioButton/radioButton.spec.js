import { shallow } from 'enzyme';
import React from 'react';
import RadioButton from '../../../components/radioButton/radioButton';

describe('Radio Button', () => {
  describe('#render()', () => {
    const onChange = () => {};

    it('should not modify mods', () => {
      const mods = ['test'];
      const wrapper = shallow(
        <RadioButton disabled id="disabledRadio" mods={mods} onChange={onChange}>
          Disabled radio button
        </RadioButton>
      );

      expect(mods.length).toEqual(1);
      expect(mods[0]).toEqual('test');
      expect(wrapper).toMatchSnapshot();
    });

    it('should render disabled radio button', () => {
      const wrapper = shallow(
        <RadioButton disabled id="disabledRadio" onChange={onChange}>
          Disabled radio button
        </RadioButton>
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('should render checked radio button', () => {
      const wrapper = shallow(
        <RadioButton checked id="radio1" onChange={onChange}>
          Radio 1
        </RadioButton>
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('should render radio button', () => {
      const wrapper = shallow(
        <RadioButton id="radio2" onChange={onChange}>
          Radio 2
        </RadioButton>
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('should render radio button with provided className', () => {
      const wrapper = shallow(
        <RadioButton className="test-class" id="radio1" onChange={onChange}>
          Radio 1
        </RadioButton>
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('should render radio button with dataAttrs for root element', () => {
      const wrapper = shallow(
        <RadioButton className="test-class" dataAttrs={{ 'my-attr': 'some-attr' }} id="radio1" onChange={onChange}>
          Radio 1
        </RadioButton>
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('should render radio button with dataAttrs for input', () => {
      const wrapper = shallow(
        <RadioButton
          className="test-class"
          id="radio1"
          inputDataAttrs={{ 'my-attr-for-input': 'some-attr-for-input' }}
          onChange={onChange}
        >
          Radio 1
        </RadioButton>
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('should render radio button with dataAttrs for label', () => {
      const wrapper = shallow(
        <RadioButton
          className="test-class"
          id="radio1"
          labelDataAttrs={{ 'my-attr-for-label': 'some-attr-for-label' }}
          onChange={onChange}
        >
          Radio 1
        </RadioButton>
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
