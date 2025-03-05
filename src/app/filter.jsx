import React, { useContext } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';

import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { CompanyContext } from '@/context/company-context';
import { useIsMobile } from '@/hooks/use-mobile';
import { Input } from '@/components/ui/input';
import FilterIcon from '@/../public/icon-filter.svg';
import SearchIcon from '@/../public/icon-search.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Filter = () => {
  const isMobile = useIsMobile();
  const { statuses, selectedStatuses, setSelectedStatuses } =
    useContext(CompanyContext);

  const handleStatusChange = (status) => {
    if (selectedStatuses?.includes(status)) {
      setSelectedStatuses(selectedStatuses?.filter((s) => s !== status));
    } else {
      setSelectedStatuses([...(selectedStatuses ?? []), status]);
    }
  };

  const isStatusSelected = (item) => {
    return selectedStatuses?.includes(item);
  };

  return (
    <div className=" w-full flex items-center relative h-20 !bg-transparent rounded-xl overflow-hidden px-4">
      <Button className="rounded-sm hover:bg-transparent z-10">
        <Image src={SearchIcon} alt="filter" />
      </Button>
      <Input
        placeholder="Search company"
        type="text"
        className="absolute inset-0 h-full rounded-xl px-16 sm:px-20 !text-lg !font-medium"
      />

      <Select
        onValueChange={(val) => {
          handleStatusChange(val);
        }}
      >
        <SelectTrigger
          defaultValue="net-1"
          className="absolute right-0 w-14 min-w-fit border-none bg-transparent p-0 normal-case"
        >
          <Image src={FilterIcon} alt="filter" />
        </SelectTrigger>
        <SelectContent
          align="center"
          className="p-3 sm:p-6 w-[140px] rounded-[8px]"
          sideOffset={6}
        >
          {statuses.map((item, index) => (
            <SelectItem
              key={item}
              hideCheck
              className={cn('capitalize p-0', { 'mt-3': index > 0 })}
              value={item}
            >
              <label
                htmlFor={`checkbox-${item}`}
                className="flex items-center gap-2 sm:gap-3 cursor-pointer"
              >
                <Checkbox
                  id={`checkbox-${item}`}
                  checked={isStatusSelected(item)}
                />
                <span className="!leading-[12px]">{item}</span>
              </label>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
