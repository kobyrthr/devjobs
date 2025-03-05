'use client';
import { createContext } from 'react';

export const CompanyContext = createContext({
  companies: [],
  company: null,
  setCompany: () => {},
  setCompanies: () => {},
  selectedStatuses: [],
  statuses: [],
  selectedStatuses: [],
  setSelectedStatuses: () => {},
  updateCompany: (invoice) => {},
});
