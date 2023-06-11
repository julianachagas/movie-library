import { SectionContainer } from '../../pages/styles';
import { SpinnerGap } from 'phosphor-react';
import { LoaderContainer } from './styles';

export const Loader = () => {
  return (
    <SectionContainer>
      <LoaderContainer>
        <SpinnerGap size={70} />
        <p>Loading...</p>
      </LoaderContainer>
    </SectionContainer>
  );
};
