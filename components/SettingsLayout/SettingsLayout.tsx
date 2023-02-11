import { ALL_LANGUAGES } from '@/consts/tanstackQueryKeys';
import { getLanguages } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SearchSelect from './SearchSelect';

const SettingsLayout = () => {
  const { isLoading, data } = useQuery([ALL_LANGUAGES], getLanguages);
  const response = data?.replace(/"/g, '').replace(/\n/g, '').split(',');

  const languages =
    response?.map((language) => ({
      value: language.toLowerCase(),
      label: language,
    })) || [];

  return (
    <section className="mx-auto lg:min-w-[768px]">
      <form className="flex flex-col gap-4 pt-10">
        <SearchSelect
          label="Select language"
          options={languages}
          loading={isLoading}
        />
        <hr className="my-2 text-slate-300" />
      </form>
    </section>
  );
};

export default SettingsLayout;
