import dynamic from 'next/dynamic';
import React from 'react';
import RestApiCall from '../src/api/RestApiCall';
import TaskType from '../src/models/type/TaskType';
import Home from '../src/Views/Home';

const Layout = dynamic(() => import('../src/layout/Base'));

export interface IPagesProps {
  task: Array<TaskType>;
}

export async function getStaticProps() {
  try {
    const getTaks = await RestApiCall('GET', '/todos');

    const task: Array<TaskType> = getTaks.data;
    return {
      props: { task },
      revalidate: 1,
    };
  } catch (err) {
    return {
      props: { task: [] },
      revalidate: 1,
    };
  }
}

export default function Index({ task }: IPagesProps) {
  return (
    <Layout>
      <Home task={task} />
    </Layout>
  );
}
