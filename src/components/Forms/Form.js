import './Form.css';

const Form = (props) => {
  const { children, title } = props;

  return (
    <form className='form'>
      <h3 className='form__title'>{title}</h3>
      {children}
    </form>
  );
};

export default Form;
