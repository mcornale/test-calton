import './FormsContainer.css';

import Form from './Form';
import DropDown from '../DropDown/DropDown';
import {
  GROUP_BY_MONTHS_FILTER,
  SHOWING_MODES_FILTER,
} from '../../constants/dropdown-options';
import { useContext } from 'react';
import { ShowingModeContext } from '../../context/ShowingModeContext';

const FormsContainer = () => {
  const { showingMode, updateShowingMode } = useContext(ShowingModeContext);

  return (
    <section className='forms-container'>
      <Form title='Raggruppa per'>
        <DropDown
          label='Tempo'
          options={GROUP_BY_MONTHS_FILTER}
          activeOption={GROUP_BY_MONTHS_FILTER[0]}
        />
      </Form>
      <Form title='Mostra per'>
        <DropDown
          label='Asse X'
          options={SHOWING_MODES_FILTER}
          activeOption={showingMode}
          onUpdateShowingMode={updateShowingMode}
        />
      </Form>
    </section>
  );
};

export default FormsContainer;
