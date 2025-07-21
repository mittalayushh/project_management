'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import DashboardLayout from '@/components/DashboardLayout';
import { Calendar, Trash2 } from 'lucide-react';

export default function ProjectOverview() {
  const params = useParams();
  const projectName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const [projectDescription, setProjectDescription] = useState('This is a sample project description that can be edited.');
  const [projectStatus, setProjectStatus] = useState('On track');
  const [assignedDate] = useState('2025-01-10');
  const [dueDate, setDueDate] = useState('2025-02-15');
  const [isCompleted, setIsCompleted] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [password, setPassword] = useState('');

  const tasksToday = [
    { name: 'Review design mockups', priority: 'High' },
    { name: 'Update project timeline', priority: 'Medium' },
    { name: 'Team sync meeting', priority: 'Low' },
  ];

  const handleDeleteProject = () => {
    if (password === 'password') { // Simple password check
      alert('Project deleted successfully!');
      window.location.href = '/dashboard';
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Project Header */}
        <div className="mb-8">
          <input
            type="text"
            value={projectName}
            className="text-3xl font-bold text-white bg-transparent border-none outline-none hover:bg-gray-800 rounded px-2 py-1 transition-colors"
            placeholder="Project Name"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Project Description */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Project Description</h3>
              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="w-full bg-gray-700 text-white p-4 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none resize-none"
                rows={4}
              />
            </div>

            {/* Tasks Due Today */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Tasks Due Today</h3>
              <div className="space-y-3">
                {tasksToday.map((task, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4 flex justify-between items-center">
                    <span className="text-white">{task.name}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      task.priority === 'High' ? 'bg-red-600 text-white' :
                      task.priority === 'Medium' ? 'bg-yellow-600 text-white' :
                      'bg-green-600 text-white'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Project Status */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">What's the Status?</h3>
              <select
                value={projectStatus}
                onChange={(e) => setProjectStatus(e.target.value)}
                className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none mb-4"
              >
                <option value="On track">On track</option>
                <option value="At risk">At risk</option>
                <option value="Off track">Off track</option>
              </select>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Calendar className="inline mr-2" size={16} />
                    Assigned Date
                  </label>
                  <input
                    type="date"
                    value={assignedDate}
                    disabled
                    className="w-full bg-gray-700 text-gray-400 p-3 rounded-lg border border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Calendar className="inline mr-2" size={16} />
                    Due Date
                  </label>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Project Actions */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Project Actions</h3>
              
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={(e) => setIsCompleted(e.target.checked)}
                    className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-white">Mark as completed</span>
                </label>

                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors"
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
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 max-w-md w-full mx-4">
              <h3 className="text-xl font-semibold text-white mb-4">Delete Project</h3>
              <p className="text-gray-300 mb-4">
                This action cannot be undone. Please enter your password to confirm deletion.
              </p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none mb-4"
              />
              <div className="flex space-x-4">
                <button
                  onClick={handleDeleteProject}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setShowDeleteConfirm(false);
                    setPassword('');
                  }}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}