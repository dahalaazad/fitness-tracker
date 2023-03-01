import {render, fireEvent, screen} from '@testing-library/react-native';
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

  it('Should apply the value when changing text', () => {
    render(<InputFieldTest />);
    const textInputControllertextinput = screen.getByTestId('inputFieldTest');
    fireEvent(textInputControllertextinput, 'onChangeText', 'aazad');
  });
});
