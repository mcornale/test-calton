import logoSrc from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header__container'>
      <header className='header'>
        <img className='header__logo' src={logoSrc} alt='Calton logo' />
      </header>
    </div>
  );
};

export default Header;
