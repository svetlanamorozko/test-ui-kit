import Stepper from '../../../components/stepper/stepper';

describe('Stepper: tryDecreaseValue', () => {
  it('should set new value', () => {
    const props = {
      initValue: 2,
      minValue: 1,
      maxValue: 10,
    };
    const event = {
      preventDefault: jest.fn(),
    };

    Stepper.prototype.setState = jest.fn();
    const instance = new Stepper(props);
    instance.tryDecreaseValue(event);

    expect(Stepper.prototype.setState).toHaveBeenCalledTimes(1);
    expect(Stepper.prototype.setState.mock.calls[0][0]).toEqual({ currentValue: 1 });
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });

  it('should skip value updating', () => {
    const props = {
      initValue: 1,
      minValue: 1,
      maxValue: 10,
    };
    const event = {
      preventDefault: jest.fn(),
    };

    Stepper.prototype.setState = jest.fn();
    const instance = new Stepper(props);
    instance.tryDecreaseValue(event);

    expect(Stepper.prototype.setState).toHaveBeenCalledTimes(0);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });
});
