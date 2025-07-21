'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import DashboardLayout from '@/components/DashboardLayout';
import { Calendar, Trash2 } from 'lucide-react';
import { useProjects } from '@/components/ProjectContext';

export default function ProjectOverview() {
  const params = useParams();
  const { deleteProject } = useProjects();
  const projectName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const [projectDescription, setProjectDescription] = useState('This is a sample project description that can be edited.');
  const [projectStatus, setProjectStatus] = useState('On track');
  const [assignedDate] = useState('2025-01-10');
  const [dueDate, setDueDate] = useState('2025-02-15');
  const [isCompleted, setIsCompleted] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const tasksToday = [
    { name: 'Review design mockups', priority: 'High' },
    { name: 'Update project timeline', priority: 'Medium' },
    { name: 'Team sync meeting', priority: 'Low' },
  ];

  const handleDeleteProject = () => {
    deleteProject(params.slug);
    window.location.href = '/dashboard';
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{projectName}</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6 flex flex-col h-full">
          {/* Project Description */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Description</h3>
            <textarea
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="w-full bg-gray-50 text-gray-700 p-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none resize-none"
              rows={4}
            />
          </div>
          {/* Tasks Due Today */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow flex-1 flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tasks Due Today</h3>
            <div className="flex-1 flex items-center justify-center">
              <span className="text-gray-400 text-center">All your due tasks appear here.</span>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col h-full space-y-6">
          {/* Project Status */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What's the Status?</h3>
            <select
              value={projectStatus}
              onChange={(e) => setProjectStatus(e.target.value)}
              className="w-full bg-gray-50 text-gray-700 p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none mb-4"
            >
              <option value="On track">On track</option>
              <option value="At risk">At risk</option>
              <option value="Off track">Off track</option>
            </select>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline mr-2" size={16} />
                  Assigned Date
                </label>
                <input
                  type="date"
                  value={assignedDate}
                  disabled
                  className="w-full bg-gray-50 text-gray-400 p-3 rounded-lg border border-gray-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline mr-2" size={16} />
                  Due Date
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full bg-gray-50 text-gray-700 p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
          {/* Spacer to push actions to bottom */}
          <div className="flex-1" />
          {/* Project Actions at the bottom */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow mt-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Actions</h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={isCompleted}
                  onChange={(e) => setIsCompleted(e.target.checked)}
                  className="w-5 h-5 text-blue-600 bg-gray-50 border-gray-200 rounded focus:ring-blue-500"
                />
                <span className="text-gray-900">Mark as completed</span>
              </label>
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="flex items-center space-x-2 text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 size={16} />
                <span>Delete project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 border border-gray-200 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Delete Project</h3>
            <p className="text-gray-700 mb-4">
              Are you sure you want to delete this project? This action cannot be undone.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleDeleteProject}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => {
                  setShowDeleteConfirm(false);
                }}
                className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}