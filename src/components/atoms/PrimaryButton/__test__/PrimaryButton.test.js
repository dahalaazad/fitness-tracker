import {render} from '@testing-library/react-native';
import PrimaryButton from '../PrimaryButton';

describe('Counter Tests', () => {
  it('it should find the button via testId', () => {
    const testIdName = 'primaryButtonTest';
    const {getByTestId} = render(<PrimaryButton />);
    const foundButton = getByTestId(testIdName);
    expect(foundButton).toBeTruthy();
  });
});
