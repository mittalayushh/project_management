'use client';

import DashboardLayout from '@/components/DashboardLayout';
import TaskList from '@/components/TaskList';
import { useParams } from 'next/navigation';

export default function ProjectTaskList() {
  const params = useParams();
  const projectName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const storageKey = `tasks-project-${params.slug}`;
  return (
    <DashboardLayout>
      <TaskList storageKey={storageKey} projectName={projectName} />
    </DashboardLayout>
  );
}