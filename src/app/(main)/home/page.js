"use client";

import { useState } from 'react';

import Main from './Main';
import Header from '@/components/main/header/Header';
import { ContentFilter } from '@/components/main/home/Context';

export default function Home({ params }) {

  const [contentFilter, setContentFilter] = useState(0);

  return (
    <ContentFilter.Provider value={{ contentFilter, setContentFilter }} >
      <Header isLogin={params.isLogin} />
      <Main />
    </ContentFilter.Provider>
  );
}