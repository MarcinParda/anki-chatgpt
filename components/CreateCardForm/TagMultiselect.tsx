import { ALL_TAGS } from '@/consts/tanstackQueryKeys';
import { getAllAnkiTags } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Multiselect } from '../Multiselect';

export const TagMultiselect = () => {
  const tagsQuery = useQuery([ALL_TAGS], getAllAnkiTags);

  return (
    <Multiselect
      label='Tags (optional, you can select multiple tags by pressing "Ctrl")'
      options={
        tagsQuery.data?.map((tag) => ({
          label: tag,
          value: tag,
        })) || []
      }
    />
  );
};
