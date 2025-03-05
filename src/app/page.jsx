'use client';
import { CompanyContext } from '@/context/company-context';
import { useContext, useState } from 'react';
import Filter from './filter';
import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function Home() {
  const { companies, selectedStatuses } = useContext(CompanyContext);
  const [itemsToShow, setItemsToShow] = useState(9);
  const filteredData = selectedStatuses
    ? companies.filter((company) =>
        selectedStatuses?.includes(company?.contract)
      )
    : companies;

  const currentItems = filteredData.slice(0, itemsToShow);
  const hasMore = itemsToShow < filteredData.length;
  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 6);
  };

  return (
    <div className="-mt-10 grid items-center justify-items-center size-full !pt-0 max-[376px]:p-6 p-12 px-10 lg:px-40 gap-16">
      <Filter />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 lg:gap-x-[30px] gap-y-16">
        {currentItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="rounded-lg w-full h-[228px] cursor-pointer hover:shadow-md">
              <div
                className={cn('-mt-12 relative size-[50px] rounded-[15px]')}
                style={{ backgroundColor: item.logoBackground }}
              >
                <Image
                  src={`/${item.logo}`}
                  alt="logo"
                  fill
                  className="rounded-full object-scale-down p-2"
                />
              </div>

              <div className="flex gap-3 mt-6">
                <Typography
                  type="heading-s-variant"
                  className="font-normal text-gray-500"
                >
                  {item.postedAt}
                </Typography>
                <Typography
                  type="heading-s-variant"
                  className="font-normal text-gray-500"
                >
                  {'• '}
                  {item.contract}
                </Typography>
              </div>
              <Typography type="heading-m" className="mt-3">
                {item.position}
              </Typography>
              <Typography
                type="heading-s-variant"
                className="mt-4 font-normal text-gray-500"
              >
                {item.company}
              </Typography>
              <Typography
                type="body-variant"
                className="mt-11 text-color-01 font-bold"
              >
                {item.location}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      {hasMore && (
        <Button
          variant="primary"
          onClick={handleLoadMore}
          className="rounded-md px-6 py-4"
        >
          Load More
        </Button>
      )}
    </div>
  );
}
