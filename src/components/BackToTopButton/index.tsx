import React from 'react';
import { BackToTopButtonContainer } from './styles';
import { ArrowUp } from 'phosphor-react';
import { GlobalContext } from '../../contexts/GlobalContext';

export const BackToTopButton = () => {
  const [backToTopBtn, setBackToTopBtn] = React.useState(false);
  const { mobileMenu } = React.useContext(GlobalContext);

  function handleClick() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }

  React.useEffect(() => {
    function handleScroll() {
      setBackToTopBtn(() => window.scrollY > 500);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (mobileMenu) return null;

  return (
    <BackToTopButtonContainer
      onClick={handleClick}
      className={backToTopBtn ? 'active' : ''}
      aria-label="Go back to the top of the page"
    >
      <ArrowUp />
    </BackToTopButtonContainer>
  );
};
