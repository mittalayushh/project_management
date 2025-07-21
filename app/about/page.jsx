import Link from 'next/link';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Mission-Driven',
      description: 'We are committed to empowering teams to achieve their goals with clarity and efficiency.',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Collaboration First',
      description: 'We believe the best results come from teams working together seamlessly.',
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our product to our customer service.',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: 'Innovation',
      description: 'We continuously innovate to provide cutting-edge solutions for modern teams.',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '500+', label: 'Companies' },
    { number: '50,000+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime' },
  ];

  return (
    <>
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            About Nakama
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Nakama is a project management platform designed to simplify collaboration and 
              streamline workflows. Our mission is to empower teams to achieve their goals with 
              clarity and efficiency. By offering intuitive tools for task management, progress 
              tracking, and team communication, Nakama helps businesses of all sizes succeed in 
              delivering projects on time and within budget.
            </p>
            
            <Link
              href="/signup"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Team collaborating on projects"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Teams Worldwide</h2>
            <p className="text-xl text-gray-600">Numbers that reflect our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide us in everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of teams who have streamlined their workflows with Nakama. 
            Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}