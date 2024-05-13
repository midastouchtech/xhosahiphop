import React from 'react';
import CreateSelect from 'react-select/creatable';
import Select from 'react-select';
import { useAuthentication } from '@/core/contexts/authentication';
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const FindSelect = ({
  name,
  type,
  labelKey,
  onChange,
  value,
  isSingleSelect,
  disableCreate,
  hideLabel,
  createEntityType,
}) => {
  const { currentUser } = useAuthentication();
  const [options, setOptions] = React.useState([]);
  const [searchString, setSearchString] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    console.log('finding', type, searchString);
    fetch(`/api/${type}/find`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchString }),
    })
      .then((res) => res.json())
      .then((res) => {
        const opts = res.data.map((d) => ({
          value: d._id,
          label: `${d[labelKey]}`,
        }));
        setOptions(opts);
      });
  }, [type, searchString]);

  const handleChange = (selectedOption) => {
    onChange({ target: { name, value: selectedOption } });
  };

  const handleCreate = (inputValue) => {
    setIsLoading(true);
    fetch(`/api/${type}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        [labelKey]: inputValue,
        type: createEntityType,
        createdFromFind: true,
        createdBy: currentUser._id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('res', res);
        const newOption = {
          value: res.data.insertedId,
          label: `${res.data[labelKey]}`,
        };
        setOptions([...options, newOption]);
        setIsLoading(false);
        setError(null);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
      });
  };

  return (
    <>
      {!hideLabel && <label className='mb-2 fw-bold'>{capitalize(name)}</label>}
      {disableCreate ? (
        <Select
          options={options}
          isMulti={!isSingleSelect}
          onChange={handleChange}
          value={value}
          placeholder={`Search for ${name}`}
          onInputChange={(inputValue) => {
            console.log('inputValue', inputValue);
            setSearchString(inputValue);
          }}
          filterOption={(option, rawInput) => {
            return option.label.toLowerCase().includes(rawInput.toLowerCase());
          }}
          isSearchable
          isLoading={isLoading}
          isDisabled={isLoading}
        />
      ) : (
        <CreateSelect
          options={options}
          isMulti={!isSingleSelect}
          onChange={handleChange}
          value={value}
          placeholder={`Search for ${name}`}
          onInputChange={(inputValue) => {
            console.log('inputValue', inputValue);
            setSearchString(inputValue);
          }}
          filterOption={(option, rawInput) => {
            return option.label.toLowerCase().includes(rawInput.toLowerCase());
          }}
          isSearchable
          isLoading={isLoading}
          onCreateOption={handleCreate}
          formatCreateLabel={(inputValue) => `Create ${inputValue}`}
          isDisabled={isLoading}
        />
      )}
    </>
  );
};

export default FindSelect;
