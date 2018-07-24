import Stepper from '../../../components/stepper/stepper';

describe('Stepper: setValue', () => {
  it('should call setState with newValue', () => {
    const props = {
    };

    Stepper.prototype.setState = jest.fn();
    const instance = new Stepper(props);
    instance.setValue(2);

    expect(Stepper.prototype.setState).toHaveBeenCalledTimes(1);
    expect(Stepper.prototype.setState.mock.calls[0][0]).toEqual({ currentValue: 2 });
  });

  it('should call setState and fire callback', () => {
    const callback = jest.fn();
    const props = {
      onChange: callback,
    };

    Stepper.prototype.setState = jest.fn((state, cb) => cb());
    const instance = new Stepper(props);
    instance.setValue(2);

    expect(Stepper.prototype.setState).toHaveBeenCalledTimes(1);
    expect(Stepper.prototype.setState.mock.calls[0][0]).toEqual({ currentValue: 2 });
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(2);
  });

  it('should call setState and do not fire callback', () => {
    const callback = jest.fn();
    const props = {
      onChange: undefined,
    };

    Stepper.prototype.setState = jest.fn((state, cb) => cb());
    const instance = new Stepper(props);
    instance.setValue(2);

    expect(Stepper.prototype.setState).toHaveBeenCalledTimes(1);
    expect(Stepper.prototype.setState.mock.calls[0][0]).toEqual({ currentValue: 2 });
    expect(callback).toHaveBeenCalledTimes(0);
  });
});
