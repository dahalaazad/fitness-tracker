import {render, fireEvent} from '@testing-library/react-native';
import {InputField} from '@app/components';

describe('Input Field Tests', () => {
  it('Should apply the value when changing text', () => {
    const testIdName = 'inputFieldTest';
    const {getByTestId} = render(<InputField />);
    const input = getByTestId(testIdName);
    fireEvent.changeText(input, 'aazad.dahal@gurzu.net');
    expect(input.props.value).toBe('aazad.dahal@gurzu.net');
  });
});
