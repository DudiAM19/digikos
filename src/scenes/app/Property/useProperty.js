import {useState} from 'react';

const useProperty = () => {
  const [selected, setSelected] = useState('Apartemen');

  return {
    selected,
    setSelected,
  };
};

export default useProperty;
