'use client';

import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useProjects } from '@/components/ProjectContext';
import Link from 'next/link';

export default function Dashboard({ user }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { totalProjects, totalTasks, myTasks, projects } = useProjects();
  const userName = user?.displayName || user?.email ;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Gather all tasks (myTasks + all project tasks)
  const allTasks = [
    ...myTasks.map(t => ({ ...t, source: 'my-tasks' })),
    ...projects.flatMap(p => Array.isArray(p.tasks) ? p.tasks.map(t => ({ ...t, project: p.name, projectSlug: p.slug, source: 'project' })) : [])
  ];

  // Tasks due today
  const todayStr = new Date().toISOString().slice(0, 10);
  const dueToday = allTasks.filter(t => t.dueDate === todayStr);

  // Helper: get link for a task
  const getTaskLink = (task) => {
    if (task.source === 'project' && task.projectSlug) {
      return `/dashboard/${task.projectSlug}?task=${task.id}`;
    }
    return `/dashboard/my-tasks?task=${task.id}`;
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl text-gray-600 mb-2">{formatDate(currentTime)}</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {getGreeting()} {userName}
          </h2>
        </div>

        {/* Circular Stats */}
        <div className="flex justify-center space-x-12 mb-12">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full border-8 border-orange-400 bg-white flex items-center justify-center mb-4 shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{totalTasks}</div>
                <div className="text-sm text-gray-600">Tasks</div>
              </div>
            </div>
            <p className="text-gray-600">Total Tasks</p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 rounded-full border-8 border-blue-400 bg-white flex items-center justify-center mb-4 shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{totalProjects}</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </div>
            <p className="text-gray-600">Total Projects</p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tasks Due Today */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tasks Due Today</h3>
            <div className="space-y-3 flex flex-col items-center justify-center min-h-[120px]">
              {dueToday.length === 0 ? (
                <div className="text-gray-400 text-center flex-1 flex items-center justify-center">No tasks due today.</div>
              ) : (
                dueToday.map((task, index) => (
                  <Link
                    key={index}
                    href={getTaskLink(task)}
                    className="bg-gray-50 rounded-lg p-4 flex justify-between items-center w-full hover:bg-blue-50 transition-colors"
                  >
                    <div>
                      <h4 className="text-gray-900 font-medium">{task.name}</h4>
                      {task.project && <p className="text-gray-600 text-sm">{task.project}</p>}
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        task.priority === 'High'
                          ? 'bg-red-100 text-red-700'
                          : task.priority === 'Medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {task.priority}
                    </span>
                  </Link>
                ))
              )}
            </div>
          </div>

          {/* Recent Tasks */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Tasks</h3>
            <div className="space-y-3">
              {allTasks.length === 0 ? (
                <div className="text-gray-400 text-center">No tasks yet.</div>
              ) : (
                allTasks.slice(-5).reverse().map((task, index) => (
                  <Link
                    key={index}
                    href={getTaskLink(task)}
                    className="bg-gray-50 rounded-lg p-4 flex justify-between items-center hover:bg-blue-50 transition-colors"
                  >
                    <div>
                      <h4 className="text-gray-900 font-medium">{task.name}</h4>
                      {task.project && <p className="text-gray-600 text-sm">{task.project}</p>}
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        task.priority === 'High'
                          ? 'bg-red-100 text-red-700'
                          : task.priority === 'Medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {task.priority}
                    </span>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
