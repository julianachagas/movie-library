import { SpinnerGap } from 'phosphor-react';
import { LoaderContainer } from './styles';

export const Loader = () => {
  return (
    <section>
      <LoaderContainer>
        <SpinnerGap size={70} />
        <p>Loading...</p>
      </LoaderContainer>
    </section>
  );
};
