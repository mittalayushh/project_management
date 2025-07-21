import { BarChart3, CheckCircle, MessageSquare } from "lucide-react";

export const features = [
  {
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    title: 'Task Management',
    description: 'Create, assign, and track tasks with ease. Set deadlines, priorities, and dependencies.',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    title: 'Progress Tracking',
    description: 'Monitor project progress with dashboards and reports.',
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
    title: 'Communication',
    description: 'Keep all project communication centralized and organized.',
  },
];