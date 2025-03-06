import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

export const PageHeader = ({ company, className = '' }) => {
  return (
    <div className={cn('h-36 bg-popover w-full', className)}>
      <div className="flex items-center">
        <div
          className={cn('relative size-[150px]')}
          style={{ backgroundColor: company?.logoBackground }}
        >
          <Image
            src={`/${company?.logo}`}
            fill
            alt="logo"
            className="object-contain p-8"
          />
        </div>

        <div className="p-10 flex justify-between w-full">
          <div className="flex flex-col gap-4">
            <Typography type="heading-m" className="">
              {company?.company}
            </Typography>
            <Typography
              type="heading-s-variant"
              className="font-normal text-gray-500"
            >
              {company?.website}
            </Typography>
          </div>
          <Button variant="default" className="" onClick={() => {}}>
            Company Site
          </Button>
        </div>
      </div>
    </div>
  );
};
