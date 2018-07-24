import Stepper from '../../../components/stepper/stepper';

describe('Stepper: tryIncreaseValue', () => {
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
    instance.tryIncreaseValue(event);

    expect(Stepper.prototype.setState).toHaveBeenCalledTimes(1);
    expect(Stepper.prototype.setState.mock.calls[0][0]).toEqual({ currentValue: 3 });
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });

  it('should skip value updating', () => {
    const props = {
      initValue: 10,
      minValue: 1,
      maxValue: 10,
    };
    const event = {
      preventDefault: jest.fn(),
    };

    Stepper.prototype.setState = jest.fn();
    const instance = new Stepper(props);
    instance.tryIncreaseValue(event);

    expect(Stepper.prototype.setState).toHaveBeenCalledTimes(0);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });
});
