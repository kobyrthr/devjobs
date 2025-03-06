'use client';
import { Typography } from '@/components/ui/typography';
import { useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CompanyContext } from '@/context/company-context';
import { useParams, useRouter } from 'next/navigation';
import { PageHeader } from './components/page-header';

const CompanyPage = () => {
  const { company, companies, setCompany } = useContext(CompanyContext);
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  useEffect(() => {
    if (!company) {
      const val = companies.find((item) => {
        return item.id === parseInt(id);
      });
      if (!val) {
        router.push('/');
      } else {
        setCompany(val);
      }
    }
  }, []);

  return (
    <div className="-mt-10 grid items-center justify-items-center size-full !pt-0 max-[376px]:p-6 p-12 px-10 gap-16">
      <PageHeader company={company} className="lg:max-w-[730px]" />
      <div className="lg:max-w-[730px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 lg:gap-x-[30px] gap-y-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/icon-arrow-left.svg"
            alt="Go back arrow"
            width={10}
            height={10}
            className="inline-block"
          />

          <Typography type="heading-s" className="inline-block ml-6">
            Go Back
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default CompanyPage;
