import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  createPortal,
} from 'react-dom';

import { getDataAttributes } from '../_helpers';

/**
 * Global component
 * React component for transportation of modals, lightboxes, loading bars... to document.body
 */
class Global extends Component {
  constructor(props) {
    super(props);

    this.isSettedNoScroll = false;
    this.target = global.window.document.createElement('div');
    this.target.classList.add('ui-global');
    global.window.document.body.appendChild(this.target);
  }

  toggleGlobalNoscroll(flag) {
    const body = global.window.document.body;
    if (!this.isSettedNoScroll) {
      return;
    }
    flag
      ? body.classList.add('ui-global_noscroll')
      : body.classList.remove('ui-global_noscroll');
  }

  setNoScroll() {
    const body = global.window.document.body;
    this.isSettedNoScroll = !body.classList.contains('ui-global_noscroll');
  }

  componentWillUpdate(nextProps) {
    if (nextProps.noscroll !== this.props.noscroll) {
      nextProps.noscroll && this.setNoScroll();
      this.toggleGlobalNoscroll(nextProps.noscroll);
    }
  }

  componentWillMount() {
    if (this.props.noscroll) {
      this.setNoScroll();
      this.toggleGlobalNoscroll();
    }
  }

  handleClick = (e) => {
    e.stopPropagation();
  }

  componentWillUnmount() {
    this.toggleGlobalNoscroll(false);
    global.window.document.body.removeChild(this.target);
  }

  render() {
    const {
      children,
      className,
      dataAttrs,
    } = this.props;

    return createPortal((
      <div
        {...getDataAttributes(dataAttrs)}
        className={className}
        onClick={this.handleClick}
      >
        {children}
      </div>
    ), this.target);
  }
}

Global.defaultProps = {
  noscroll: true,
};

Global.propTypes = {
  /**
   * Specify a CSS class
   */
  className: PropTypes.string,
  /**
   * The modal dialog's body
   */
  children: PropTypes.node,
  /**
   * Data attribute. You can use it to set up GTM key or any custom data-* attribute
   */
  dataAttrs: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  /**
   * Determine whether a body is scrollable or not
   */
  noscroll: PropTypes.bool,
};

export default Global;
