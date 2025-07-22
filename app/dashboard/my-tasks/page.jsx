'use client';

import DashboardLayout from '@/components/DashboardLayout';
import TaskList from '@/components/TaskList';

export default function MyTasks() {
  return (
    <DashboardLayout>
      <TaskList />
    </DashboardLayout>
  );
}