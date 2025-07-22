'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';

import Overview from './overview/page';
import List from './list/page';

export default function ProjectPage() {
  
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Project Header */}
        <div className="mb-6">
          {/* Modern Toggle */}
          <div className="bg-white rounded-lg border border-blue-200 p-1 inline-flex shadow-sm">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-2 rounded-md transition-colors font-medium focus:outline-none ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-blue-700 hover:bg-blue-50'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('list')}
              className={`px-6 py-2 rounded-md transition-colors font-medium focus:outline-none ${
                activeTab === 'list'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-blue-700 hover:bg-blue-50'
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