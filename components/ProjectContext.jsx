'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ProjectContext = createContext();

export function useProjects() {
  return useContext(ProjectContext);
}

export function ProjectProvider({ children }) {
  // Load from localStorage on mount
  const [projects, setProjects] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('projects');
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });
  const [myTasks, setMyTasks] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('myTasks');
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  // Save to localStorage whenever projects or myTasks change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  }, [projects]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('myTasks', JSON.stringify(myTasks));
    }
  }, [myTasks]);

  // Project functions
  const addProject = (name, slug) => {
    if (!projects.some(p => p.slug === slug)) {
      setProjects(prev => [...prev, { name, slug, tasks: [] }]);
    }
  };
  const deleteProject = (slug) => {
    // Remove the entire project and all its tasks
    setProjects(prev => prev.filter(p => p.slug !== slug));
  };

  // Task functions for projects
  const addTaskToProject = (slug, task) => {
    setProjects(prev => prev.map(p =>
      p.slug === slug ? { ...p, tasks: [...(Array.isArray(p.tasks) ? p.tasks : []), task] } : p
    ));
  };
  const updateTaskInProject = (slug, taskId, updates) => {
    setProjects(prev => prev.map(p =>
      p.slug === slug ? {
        ...p,
        tasks: (Array.isArray(p.tasks) ? p.tasks : []).map(t => t.id === taskId ? { ...t, ...updates } : t)
      } : p
    ));
  };
  const deleteTaskFromProject = (slug, taskId) => {
    setProjects(prev => prev.map(p =>
      p.slug === slug ? { ...p, tasks: (Array.isArray(p.tasks) ? p.tasks : []).filter(t => t.id !== taskId) } : p
    ));
  };

  // My Tasks functions
  const addMyTask = (task) => setMyTasks(prev => [...prev, task]);
  const updateMyTask = (taskId, updates) => setMyTasks(prev => prev.map(t => t.id === taskId ? { ...t, ...updates } : t));
  const deleteMyTask = (taskId) => setMyTasks(prev => prev.filter(t => t.id !== taskId));

  // Counts
  const totalProjects = projects.length;
  const totalTasks = myTasks.length + projects.reduce((sum, p) => sum + (Array.isArray(p.tasks) ? p.tasks.length : 0), 0);

  return (
    <ProjectContext.Provider value={{
      projects, addProject, deleteProject,
      addTaskToProject, updateTaskInProject, deleteTaskFromProject,
      myTasks, addMyTask, updateMyTask, deleteMyTask,
      totalProjects, totalTasks
    }}>
      {children}
    </ProjectContext.Provider>
  );
} 