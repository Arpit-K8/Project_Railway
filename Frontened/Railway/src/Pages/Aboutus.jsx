import React from 'react';
import { 
  Train, Users, Shield, Clock, Award, Target, Heart, Zap, 
  Globe2, CheckCircle, Sparkles, TrendingUp, Phone, Mail 
} from 'lucide-react';

const Aboutus = () => {
  const stats = [
    { icon: Users, label: 'Active Users', value: '176K+', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Train, label: 'Trains Available', value: '156+', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: CheckCircle, label: 'Tickets Booked', value: '2M+', color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: Award, label: 'Customer Rating', value: '4.8/5', color: 'text-orange-600', bg: 'bg-orange-50' }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Tatkal Booking',
      desc: 'Lightning-fast ticket booking with real-time countdown. Opens at 10:00 AM (AC) / 11:00 AM (Non-AC)',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe2,
      title: 'Tour Packages',
      desc: 'Curated journeys across India including Golden Triangle, Kerala Backwaters, and Himalayan Adventures',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Train,
      title: 'Coach Seating Layout',
      desc: 'View detailed seating arrangements for all coach types (1A, 2A, 3A, SL, CC) with zoom capabilities',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Real-Time Tracking',
      desc: 'Track trains live, check PNR status, and get instant platform information',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const services = [
    { name: 'Easy Booking', desc: 'Book tickets in just a few clicks with intuitive interface' },
    { name: 'Train Services', desc: 'Wi-Fi, charging points, bedding service, and accessibility features' },
    { name: 'Food Ordering', desc: 'Pre-order meals delivered directly to your seat' },
    { name: 'Seat Availability', desc: 'Real-time availability across all classes: AC First, 2-Tier, 3-Tier, Sleeper' },
    { name: 'Train Status', desc: 'Live running status with expected arrival times' },
    { name: '24/7 Support', desc: 'Call us at 139 (Toll-Free) or email support@railsync.in' }
  ];

  const values = [
    { icon: Target, title: 'Our Mission', desc: 'To revolutionize railway travel with seamless digital solutions that make journey planning effortless and reliable.' },
    { icon: Heart, title: 'Our Vision', desc: 'To be India\'s #1 trusted railway travel partner, connecting millions with innovative technology and exceptional service.' },
    { icon: Shield, title: 'Our Values', desc: 'Security, reliability, innovation, and customer satisfaction drive everything we do.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-[#1C335C] via-[#2a4d8a] to-[#008BD0] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 52px)',
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Your Trusted Railway Travel Partner</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              About <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-cyan-300">RailSync</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your trusted companion for seamless railway journeys. We combine cutting-edge technology 
              with user-centric design to deliver the best rail travel booking experience in India.
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-16 md:h-24">
            <path fill="#f9fafb" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className={`inline-flex p-3 rounded-xl ${stat.bg} mb-3`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-3xl font-bold text-[#1C335C] mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {values.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="inline-flex p-4 rounded-xl bg-blue-50 mb-4">
                <item.icon className="w-8 h-8 text-[#008BD0]" />
              </div>
              <h3 className="text-xl font-bold text-[#1C335C] mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1C335C] mb-4">What Makes Us Special</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Innovative features designed to make your railway journey smooth and hassle-free
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all group">
                <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1C335C] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1C335C] mb-4">Comprehensive Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for a perfect railway journey, all in one platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#008BD0] hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#008BD0] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#1C335C] mb-1">{service.name}</h4>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#1C335C] mb-4">Built with Modern Technology</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powered by React 19, Tailwind CSS 4, and MongoDB for a fast, secure, and scalable experience
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['React 19', 'Tailwind CSS 4', 'MongoDB', 'Express.js', 'Vite', 'Mongoose', 'Lucide Icons', 'React Router'].map((tech, idx) => (
              <div key={idx} className="bg-white rounded-lg py-4 px-3 shadow-sm">
                <p className="font-semibold text-[#1C335C]">{tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-linear-to-r from-[#1C335C] to-[#008BD0] rounded-3xl p-8 md:p-12 text-white text-center mb-20">
          <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">Join 176K+ Happy Travelers</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Experience the future of railway travel. Book your tickets with confidence and travel with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-blue-100">
              <Phone className="w-5 h-5" />
              <span>139 (Toll-Free)</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <Mail className="w-5 h-5" />
              <span>support@railsync.in</span>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Aboutus;