'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useParams } from 'next/navigation';

// Standard, static imports instead of dynamic ones
import Overview from './overview/page';
import List from './list/page';

export default function ProjectPage() {
  const params = useParams();
  const projectName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Project Header */}
        <div className="mb-6">
          
          {/* Sticky Navigation */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-1 inline-flex">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('list')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'list'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              List
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && <Overview />}
        {activeTab === 'list' && <List />}
      </div>
    </DashboardLayout>
  );
}