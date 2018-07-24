import { mount } from 'enzyme';
import React from 'react';
import SlidingPanelHeader from '../../../components/slidingPanel/slidingPanelHeader/slidingPanelHeader';

jest.useFakeTimers();

describe('SlidingPanel', () => {
  describe('#render()', () => {
    it('render noscript without children', () => {
      const renderTree = mount(
        <SlidingPanelHeader />
      );

      jest.runAllTimers();

      expect(renderTree).toMatchSnapshot();
    });

    it('render with children', () => {
      const title = 'Test Title';
      const renderTree = mount(
        <SlidingPanelHeader>
          { title }
        </SlidingPanelHeader>
      );

      const titleEl = renderTree.find('.ui-sliding-panel-header__title');
      const defaultRightBlock = renderTree.find('.ui-sliding-panel-header__close-button');

      jest.runAllTimers();

      expect(renderTree).toMatchSnapshot();
      expect(titleEl.text()).toEqual(title);
      expect(defaultRightBlock.text()).toEqual('×');
    });

    it('render with custom left and right blocks', () => {
      const title = 'Test Title';
      const renderTree = mount(
        <SlidingPanelHeader
          renderLeftBlock={
            props => (
              <button
                {...props}
                style={{ marginLeft: '15px' }}
              > ← </button>
            )
          }
          renderRightBlock={
            props => (
              <button
                {...props}
                data-rel="close"
                style={{ marginRight: '15px' }}
              > close me! </button>
            )
          }
        >
          {title}
        </SlidingPanelHeader>
      );

      const titleEl = renderTree.find('.ui-sliding-panel-header__title');

      jest.runAllTimers();

      expect(renderTree).toMatchSnapshot();
      expect(titleEl.text()).toEqual(title);
    });

    it('render with title as a node', () => {
      const backButtonText = ' ← ';
      const closeButtonText = ' close me! ';
      const title = <span className="my-class"> my label </span>;
      const renderTree = mount(
        <SlidingPanelHeader
          renderLeftBlock={
            props => (
              <button
                {...props}
                style={{ marginLeft: '15px' }}
              >{backButtonText}</button>
            )
          }
          renderRightBlock={
            props => (
              <button
                {...props}
                data-rel="close"
                style={{ marginRight: '15px' }}
              >{closeButtonText}</button>
            )
          }
        >
          { title }
        </SlidingPanelHeader>
      );

      const titleEl = renderTree.find('.ui-sliding-panel-header__title');
      const titleContent = renderTree.find('.my-class');
      const rightBlock = renderTree.find('.ui-sliding-panel-header__close-button');
      const leftBlock = renderTree.find('.ui-sliding-panel-header__left-block-back');

      jest.runAllTimers();

      expect(titleEl).toHaveLength(1);
      expect(titleContent).toHaveLength(1);
      expect(rightBlock.text()).toEqual(closeButtonText);
      expect(leftBlock.text()).toEqual(backButtonText);
    });

    it('should render with backButtonLabel and onBackButtonClick', () => {
      const title = <span className="my-class"> my label </span>;
      const backButtonClick = jest.fn();
      const renderTree = mount(
        <SlidingPanelHeader
          backButtonLabel="foo"
          onBackButtonClick={backButtonClick}
          useDefaultLeftBlock
        >
          { title }
        </SlidingPanelHeader>
      );

      expect(renderTree).toMatchSnapshot();
    });

    it('should render with dataAttr and className', () => {
      const title = <span className="my-class"> my label </span>;
      const renderTree = mount(
        <SlidingPanelHeader
          className="foo"
          dataAttrs={{ foo: 'bar' }}
        >
          { title }
        </SlidingPanelHeader>
      );

      expect(renderTree).toMatchSnapshot();
    });

    it('should render with deprecated rightBlock and leftBlock', () => {
      const backButtonText = ' ← ';
      const closeButtonText = ' close me! ';
      const title = <span className="my-class"> my label </span>;
      const renderTree = mount(
        <SlidingPanelHeader
          leftBlock={<button
            className="back-button"
            data-rel="close"
            style={{ marginRight: '15px' }}
          >{backButtonText}</button>}
          rightBlock={<button
            className="close-button"
            data-rel="close"
            style={{ marginRight: '15px' }}
          >{closeButtonText}</button>}
        >
          { title }
        </SlidingPanelHeader>
      );

      const rightBlock = renderTree.find('.close-button');
      const leftBlock = renderTree.find('.back-button');

      jest.runAllTimers();

      expect(renderTree).toMatchSnapshot();

      expect(rightBlock.text()).toEqual(closeButtonText);
      expect(leftBlock.text()).toEqual(backButtonText);
    });
  });
});
