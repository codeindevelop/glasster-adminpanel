import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import { languages } from './Languages';
import { useLang, setLanguage } from '../../../../@core/i18n/SiteLangProvider';
import { FormattedMessage } from 'react-intl';

export default function SelectAuthLang() {
  const lang = useLang();
  const currentLanguage = languages.find((x) => x.lang === lang);

  console.log(currentLanguage);
  return (
    <>
      <div className='w-48 '>
        <FormControl fullWidth>
          <InputLabel id='language-selector-label'>
            <span>{currentLanguage?.name} </span>
          </InputLabel>
          <Select
            labelId='language-selector'
            id='language-selector'
            // value={currentLanguage?.name}
            label={currentLanguage?.name}
            className='w-full'
          >
            {languages.map((l) => (
              <MenuItem
                onClick={() => {
                  setLanguage(l.lang);
                }}
                className='w-full'
                key={l.lang}
                value={currentLanguage?.name}
              >
                <div className='flex items-center justify-between'>
                  <img className='rounded-full w-5 h-5' src={l.flag} alt='glasster-lang' />
                  <span className='text-slate-700 mx-3'>{l.name}</span>
                </div>
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            <FormattedMessage id='AUTH_SELECT_LANG' />
          </FormHelperText>
        </FormControl>
      </div>
    </>
  );
}
