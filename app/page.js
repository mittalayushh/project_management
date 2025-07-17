import Link from 'next/link';
import { CheckCircle, Users, BarChart3, Calendar, MessageSquare, Shield } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: 'Task Management',
      description: 'Create, assign, and track tasks with ease. Set deadlines, priorities, and dependencies.',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time updates, comments, and file sharing.',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: 'Progress Tracking',
      description: 'Monitor project progress with visual dashboards and detailed reports.',
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: 'Timeline View',
      description: 'Visualize project timelines and dependencies with Gantt charts.',
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      title: 'Communication',
      description: 'Keep all project communication centralized and organized.',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Security',
      description: 'Enterprise-grade security to keep your data safe and compliant.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager at TechCorp',
      content: 'Nakama has revolutionized how our team manages projects. The intuitive interface and powerful features have increased our productivity by 40%.',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    },
    {
      name: 'Michael Chen',
      role: 'CEO at StartupXYZ',
      content: 'As a fast-growing startup, we needed a project management solution that could scale with us. Nakama delivers exactly that.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Team Lead at Creative Agency',
      content: 'The collaboration features in Nakama have transformed how our remote team works together. Everything is organized and accessible.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Streamline your project
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Organize tasks, collaborate with your team, and track progress all in one place. 
            Our intuitive platform helps you manage projects efficiently and effectively.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/login"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
            >
              Sign Up
            </Link>
          </div>

          {/* Project Management Images */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Project dashboard"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage projects and collaborate effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">
              Trusted by teams worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}