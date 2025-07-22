'use client';

import TaskList from '@/components/TaskList';
import { useParams } from 'next/navigation';

export default function ProjectTaskList() {
  const params = useParams();
  const projectName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return (
    <div className="max-w-6xl mx-auto">
      <TaskList projectName={projectName} projectSlug={params.slug} />
    </div>
  );
}