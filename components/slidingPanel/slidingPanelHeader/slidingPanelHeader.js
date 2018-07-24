import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { getDataAttributes, warnAboutDeprecatedProp } from '../../_helpers';

const renderDefaultLeftBlock = (backButtonLabel, onBackButtonClick) => (
  <button
    className="ui-sliding-panel-header__left-block-back"
    onClick={onBackButtonClick}
  >
    <span className="ui-sliding-panel-header__left-block-back-icon" />

    { backButtonLabel && (
      <span className="ui-sliding-panel-header__left-block-back-text">
        {backButtonLabel}
      </span>
    ) }
  </button>
);

const leftBlock = (
  backButtonLabel,
  renderLeftBlock,
  onBackButtonClick,
  useDefaultLeftBlock,
) => {
  const defaultProps = {
    className: "ui-sliding-panel-header__left-block-back",
    onClick: onBackButtonClick,
  };

  if (renderLeftBlock) {
    return renderLeftBlock(defaultProps);
  }

  if (useDefaultLeftBlock) {
    return renderDefaultLeftBlock(backButtonLabel, onBackButtonClick);
  }

  return null;
};

const rightBlock = (renderRightBlock) => {
  const defaultProps = {
    className: "ui-sliding-panel-header__close-button",
    'data-rel': "close",
  };

  if (renderRightBlock) {
    return renderRightBlock(defaultProps);
  }

  return (
    <button {...defaultProps}>
      &#215;
    </button>
  );
};

class SlidingPanelHeader extends Component {
  componentWillMount() {
    warnAboutDeprecatedProp(this.props.rightBlock, 'rightBlock', 'renderRightBlock property');
    warnAboutDeprecatedProp(this.props.leftBlock, 'leftBlock', 'renderLeftBlock property');
    warnAboutDeprecatedProp(
      this.props.useDefaultLeftBlock,
      'useDefaultLeftBlock',
      'renderLeftBlock property and () => null'
    );
  }

  render() {
    const {
      backButtonLabel,
      children,
      className,
      dataAttrs,
      renderLeftBlock,
      onBackButtonClick,
      renderRightBlock,
      useDefaultLeftBlock,
    } = this.props;

    if (!children) {
      return null;
    }

    const headerClassName = classnames('ui-sliding-panel-header', className);

    return (
      <div
        className={headerClassName}
        {...getDataAttributes(dataAttrs)}
      >
        <div className="ui-sliding-panel-header__left-block">
          {
            this.props.leftBlock
              ? this.props.leftBlock
              : leftBlock(
                backButtonLabel,
                renderLeftBlock,
                onBackButtonClick,
                useDefaultLeftBlock,
              )
          }
        </div>

        <h3 className="ui-sliding-panel-header__title">
          {children}
        </h3>

        <div className="ui-sliding-panel-header__right-block">
          {
            this.props.rightBlock
              ? this.props.rightBlock
              : rightBlock(renderRightBlock)
          }
        </div>
      </div>
    );
  }
}

SlidingPanelHeader.propTypes = {
  /**
   * The text for default back button that will appear near the arrow icon
   */
  backButtonLabel: PropTypes.node,

  /**
   * Content, that will be wrapped by SlidingPanel
   */
  children: PropTypes.node.isRequired,

  /**
   * Attribute used to set specific classes
   */
  className: PropTypes.string,

  /**
   * Data attributes. You can use it to set up any custom data-* attribute
   */
  dataAttrs: PropTypes.object,

  /**
   * When defined, this custom component will appears on the left part of the header
   *
   * Props passed to component
   * @param className {String}
   * @param onClick {Function}
   */
  renderLeftBlock: PropTypes.func,

  /**
   * Deprecated!
   * use `renderLeftBlock` instead
   */
  leftBlock: PropTypes.node,

  /**
   * Callback for back button
   */
  onBackButtonClick: PropTypes.func,

  /**
   * When defined, this custom component will appears on the right part of the header
   *
   * Props passed to component
   * @param className {String}
   * @param 'data-rel' {String}
   */
  renderRightBlock: PropTypes.func,

  /**
   * Deprecated!
   * use `renderRightBlock` instead
   */
  rightBlock: PropTypes.node,

  /**
   * Deprecated!
   * Use renderLeftBlock={() => null} instead
   *
   * When true, it will show the block with arrow icon and passed text (optional).
   * You can either enable it, or use leftBlock property to have more customization.
   */
  useDefaultLeftBlock: PropTypes.bool,
};

export default SlidingPanelHeader;
