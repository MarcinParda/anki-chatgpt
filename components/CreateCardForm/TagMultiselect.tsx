import { ALL_TAGS } from '@/consts/tanstackQueryKeys';
import { getAllAnkiTags } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Multiselect } from '../Multiselect';

interface TagMultiselectProps {
  register: UseFormRegisterReturn<'tags'>;
}

export const TagMultiselect = ({ register }: TagMultiselectProps) => {
  const { data, isLoading } = useQuery([ALL_TAGS], getAllAnkiTags);

  const options =
    data?.map((tag) => ({
      label: tag,
      value: tag,
    })) || [];

  return (
    <Multiselect
      label='Tags (optional, you can select multiple tags by pressing "Ctrl")'
      options={options}
      loading={isLoading}
      register={register}
    />
  );
};
