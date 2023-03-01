import {render, fireEvent} from '@testing-library/react-native';
import {InputField} from '@app/components';
import {useForm} from 'react-hook-form';

const InputFieldTest = ({...props}) => {
  const {
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  });
  return <InputField control={control} {...props} />;
};

describe('Input Field Tests', () => {
  it('should render without props', () => {
    render(<InputFieldTest />);
  });

  it('should render with props', () => {
    <InputFieldTest
      inputName="email"
      secureTextEntry={false}
      placeholderText="email"
      iconName="email"
    />;
  });

  // it('Should apply the value when changing text', () => {

  //   const testIdName = 'inputFieldTest';
  //   const {getByTestId} = render(<InputField />);
  //   const input = getByTestId(testIdName);
  //   fireEvent.changeText(input, 'aazad.dahal@gurzu.net');
  //   expect(input.props.value).toBe('aazad.dahal@gurzu.net');
  // });
});

// render(<Component errMsg="Error Occurred"></Component>);
// const textInputControllertextinput = screen.getByTestId(
//   'textInputController-text-input',
// );
// fireEvent(textInputControllertextinput, 'onFocus');
// fireEvent(textInputControllertextinput, 'onChangeText', 'adb');
// fireEvent(textInputControllertextinput, 'onBlur');

// expect(textInputControllertextinput.props.value).toBe('adb');
