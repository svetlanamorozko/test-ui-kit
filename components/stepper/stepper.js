import PropTypes from 'prop-types';
import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * General Stepper component
 */
class Stepper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: props.initValue,
    };
  }

  componentWillReceiveProps(newProps) {
    const { currentValue } = this.state;
    const { initValue } = this.props;
    const { initValue: newInitValue } = newProps;

    if (newInitValue !== currentValue && newInitValue !== initValue) {
      this.setState({
        currentValue: newInitValue,
      });
    }
  }

  setValue = (newValue) => {
    const { onChange } = this.props;

    this.setState({
      currentValue: newValue,
    }, () => {
      if (onChange) {
        onChange(newValue);
      }
    });
  }

  tryDecreaseValue = (e) => {
    e.preventDefault();
    const newValue = this.state.currentValue - 1;

    if (newValue < this.props.minValue) {
      return;
    }

    this.setValue(newValue);
  }

  tryIncreaseValue = (e) => {
    e.preventDefault();
    const newValue = this.state.currentValue + 1;

    if (newValue > this.props.maxValue) {
      return;
    }

    this.setValue(newValue);
  }

  render() {
    const { inputName, minValue, maxValue } = this.props;
    const { currentValue } = this.state;

    const buttonDecreaseClasses = classnames({
      'ui-stepper__button': true,
      'ui-stepper__button-decrease': true,
      'ui-stepper__button-disabled': currentValue === minValue,
    });

    const buttonIncreaseClasses = classnames({
      'ui-stepper__button': true,
      'ui-stepper__button-increase': true,
      'ui-stepper__button-disabled': currentValue === maxValue,
    });

    return (
      <div className="ui-stepper">
        <input
          name={inputName}
          type="hidden"
          value={currentValue}
        />

        <div className="ui-stepper__content">
          <button
            className={buttonDecreaseClasses}
            onClick={this.tryDecreaseValue}
            type="button"
          />
          <div className="ui-stepper__value">{currentValue}</div>
          <div className="ui-stepper__shadow" />
          <button
            className={buttonIncreaseClasses}
            onClick={this.tryIncreaseValue}
            type="button"
          />
        </div>
      </div>
    );
  }
}

Stepper.defaultProps = {
  initValue: 0,
  inputName: 'input',
  maxValue: 999,
  minValue: 0,
};

Stepper.propTypes = {
  /**
   * Initial value
   */
  initValue: PropTypes.number,
  /**
   * Name for component's input
   */
  inputName: PropTypes.string,
  /**
   * Minimum value
   */
  minValue: PropTypes.number,
  /**
   * Maximum value
   */
  maxValue: PropTypes.number,
  /**
   * Callback for changes
   */
  onChange: PropTypes.func,
};

export default Stepper;
