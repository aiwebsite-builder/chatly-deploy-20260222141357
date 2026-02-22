import { motion } from 'framer-motion';
import { ArrowRight, Zap, Settings, Shield, Globe, Users, TrendingUp } from 'lucide-react';
import FeatureCard from './FeatureCard'; // Ensure correct path

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
            opacity: 1,
      transition: {
        staggerChildren: 0.07, // Faster stagger
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }, // Faster duration
  };

  const features = [
    {
      icon: Zap,
      title: 'Blazing Fast Performance',
      description: 'Experience unparalleled speed and responsiveness with our optimized infrastructure.'
    },
    {
      icon: Settings,
      title: 'Fully Customizable',
      description: 'Tailor every aspect to fit your unique needs with our flexible configurations.'
    },
    {
      icon: Shield,
      title: 'Ironclad Security',
      description: 'Your data is protected by industry-leading security protocols and encryption.'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Deploy and manage your applications seamlessly across the globe.'
    },
    {
      icon: Users,
      title: 'Collaborative Workflows',
      description: 'Empower your team with tools built for efficient and effective collaboration.'
    },
    {
      icon: TrendingUp,
      title: 'Actionable Insights',
      description: 'Gain deep understanding of your operations with intuitive analytics and reporting.'
    },
  ];

  return (
    <div className="animated-gradient-bg min-h-screen flex flex-col pt-24 md:pt-32 pb-16 md:pb-24 dot-grid-overlay">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">

        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-24 md:mb-32"
        >
                    <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight mb-6 bg-gradient-to-r from-blue-500 via-violet-500 to-red-500 text-transparent bg-clip-text">
            Build Something <br className="hidden md:block" /> Cool.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            The future of development is here. Unleash your potential with tools designed for speed, scale, and seamless integration.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex h-12 items-center justify-center rounded-full bg-indigo-500 px-6 font-medium text-white transition-all duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-[#0A0A0A]"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 font-medium text-neutral-200 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 focus:ring-offset-[#0A0A0A]"
            >
              Learn More
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-24 md:mb-32"
        >
          <motion.h2 variants={itemVariants} className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-4 text-center">
            Powerful Features
          </motion.h2>
          <motion.p variants={itemVariants} className="text-3xl md:text-4xl font-semibold text-center text-neutral-100 mb-12 max-w-3xl mx-auto leading-tight">
            Everything you need to ship faster and scale effortlessly.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.07} // Stagger delay for each card, adjusted for faster overall animation
              />
            ))}
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center py-16 md:py-24"
        >
          <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6 bg-gradient-to-r from-blue-400 to-red-500 text-transparent bg-clip-text">
            Ready to get started?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Join thousands of innovators building the next big thing. Start your journey today and transform your ideas into reality.
          </motion.p>
          <motion.div variants={itemVariants}>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-red-500 px-8 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-offset-[#0A0A0A]"
            >
              Sign Up For Free
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.section>

      </div>
    </div>
  );
}

// Ensure ChevronRight is imported if used. It was referenced in the hero button.
import { ChevronRight } from 'lucide-react';
