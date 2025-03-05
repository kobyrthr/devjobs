'use client';
import { CompanyContext } from '@/context/company-context';
import { useContext } from 'react';
import Filter from './filter';

export default function Home() {
  const { companies, selectedStatuses } = useContext(CompanyContext);
  const filteredData = selectedStatuses
    ? companies.filter((company) => selectedStatuses?.includes(company?.status))
    : companies;
  return (
    <div className="-mt-10 grid items-center justify-items-center size-full !pt-0 max-[376px]:p-6 p-12 px-10 sm:px-20 lg:px-40 gap-16">
      <Filter />
    </div>
  );
}
