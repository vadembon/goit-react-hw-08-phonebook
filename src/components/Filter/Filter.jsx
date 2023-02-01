import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { getFilter } from 'redux/contacts/selectors';

import { FilterBox, TitleList, FilterForm, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const changeFilter = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  return (
    <FilterBox>
      <TitleList>Contacts</TitleList>
      <FilterForm>Find contacts by name</FilterForm>
      <FilterInput
        type="text"
        value={filter}
        onChange={changeFilter}
      ></FilterInput>
    </FilterBox>
  );
};
