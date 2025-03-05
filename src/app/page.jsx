'use client';
import { CompanyContext } from '@/context/company-context';
import { useContext } from 'react';

export default function Home() {
  const { companies, selectedStatuses } = useContext(CompanyContext);
  const filteredData = selectedStatuses
    ? companies.filter((company) => selectedStatuses?.includes(company?.status))
    : companies;
  return (
    <div className=" grid bg-background items-center justify-items-center size-full max-[376px]:p-6 p-12 max-[376px]:pb-10 pb-20 gap-16 lg:p-20"></div>
  );
}
