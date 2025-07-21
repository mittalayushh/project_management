'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardLayout from '@/components/DashboardLayout';

export default function NewProjectPage() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [created, setCreated] = useState(false);
  const router = useRouter();

  const handleCreate = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Project name is required');
      return;
    }
    const slug = name.trim().toLowerCase().replace(/\s+/g, '-');
    setCreated(true);
    setTimeout(() => {
      router.push(`/dashboard/${slug}`);
    }, 1000);
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <form onSubmit={handleCreate} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Project</h1>
          <input
            type="text"
            value={name}
            onChange={e => { setName(e.target.value); setError(''); }}
            placeholder="Project name"
            className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-500"
          />
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow"
            disabled={created}
          >
            {created ? 'Creating...' : 'Create Project'}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}