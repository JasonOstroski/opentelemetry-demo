// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { createContext, useContext } from 'react';

interface IContext {
  currencyCodeList: string[];
  setSelectedCurrency(currency: string): void;
  selectedCurrency: string;
}

export const Context = createContext<IContext>({
  currencyCodeList: [],
  selectedCurrency: 'USD',
  setSelectedCurrency: () => ({}),
});

interface IProps {
  children: React.ReactNode;
}

export const useCurrency = () => useContext(Context);

const CurrencyProvider = ({ children }: IProps) => {
  const value = {
    currencyCodeList: ['USD'],
    selectedCurrency: 'USD',
    setSelectedCurrency: () => ({}),
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default CurrencyProvider;
