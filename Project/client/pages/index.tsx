import dynamic from 'next/dynamic';
import React from 'react';
import TaskType from '../src/models/type/TaskType';
import Home from '../src/Views/Home';

const Layout = dynamic(() => import('../src/layout/Base'));

export interface IPagesProps {
  task: Array<TaskType>;
}

export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
