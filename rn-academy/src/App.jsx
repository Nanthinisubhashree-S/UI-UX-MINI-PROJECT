import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./components/ui/avatar";
import { Badge } from "./components/ui/badge";
import { Progress } from "./components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import {
  Brain,
  BookOpen,
  Clock,
  Users,
  Star,
  CheckCircle2,
  PlayCircle,
  Award,
  Code,
  BarChart3,
  Layers,
  Database,
  GraduationCap,
  Trophy,
  TrendingUp,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const topics = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Python Fundamentals",
      description:
        "Master Python programming from basics to advanced concepts",
      color: "from-blue-500 to-blue-600",
      lessons: 12,
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description:
        "Learn supervised, unsupervised, and reinforcement learning",
      color: "from-blue-500 to-blue-600",
      lessons: 18,
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Deep Learning",
      description:
        "Build neural networks and understand deep learning architectures",
      color: "from-cyan-500 to-cyan-600",
      lessons: 15,
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Visualization",
      description:
        "Create stunning visualizations with Matplotlib, Seaborn & Plotly",
      color: "from-orange-500 to-orange-600",
      lessons: 10,
    },
  ];

  const curriculum = [
    {
      week: "Week 1-2",
      title: "Python & Data Structures",
      modules: [
        "Python Basics",
        "NumPy & Pandas",
        "Data Preprocessing",
        "Exploratory Data Analysis",
      ],
    },
    {
      week: "Week 3-5",
      title: "Machine Learning Fundamentals",
      modules: [
        "Linear Regression",
        "Logistic Regression",
        "Decision Trees",
        "Random Forests",
        "Support Vector Machines",
      ],
    },
    {
      week: "Week 6-8",
      title: "Deep Learning & Neural Networks",
      modules: [
        "Neural Network Basics",
        "CNNs for Computer Vision",
        "RNNs & LSTMs",
        "Transfer Learning",
      ],
    },
    {
      week: "Week 9-10",
      title: "Advanced Topics & Projects",
      modules: [
        "Model Deployment",
        "MLOps Basics",
        "Capstone Project",
        "Portfolio Building",
      ],
    },
  ];

  const stats = [
    {
      icon: <Users className="w-5 h-5" />,
      value: "50,000+",
      label: "Students Enrolled",
    },
    {
      icon: <Star className="w-5 h-5" />,
      value: "4.9/5",
      label: "Course Rating",
    },
    {
      icon: <Award className="w-5 h-5" />,
      value: "100%",
      label: "Completion Certificate",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      value: "10 Weeks",
      label: "Self-Paced",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-slate-900">RN Academy</div>
                <div className="text-xs text-slate-500">
                  Learn. Build. Deploy.
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#courses"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Courses
              </a>
              <a
                href="#curriculum"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Curriculum
              </a>
              <a
                href="#instructor"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Instructor
              </a>
              <Button variant="outline">Sign In</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                <Trophy className="w-4 h-4" />
                <span className="text-sm">
                  Most Popular AI Course 2025
                </span>
              </div>
              <h1 className="text-slate-900">
                Build Your First AI Model Today!
              </h1>
              <p className="text-slate-600 text-xl">
                Learn Machine Learning from scratch with
                hands-on projects, real-world datasets, and
                expert guidance. No prior experience needed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Start Learning Free
                </Button>
                <Button size="lg" variant="outline">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Download Syllabus
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center gap-2 text-blue-600">
                      {stat.icon}
                      <span className="text-slate-900">
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-sm text-slate-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl" />
              <ImageWithFallback
                src="https://cdn.mos.cms.futurecdn.net/VFLt5vHV7aCoLrLGjP9Qwm-970-80.jpg.webp"
                alt="AI Machine Learning"
                className="relative rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-slate-900">95%</div>
                    <div className="text-xs text-slate-600">
                      Success Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-0">
              Course Overview
            </Badge>
            <h2 className="text-slate-900 mb-4">
              What You'll Learn
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              A comprehensive journey from Python fundamentals
              to deploying production-ready AI models. Master
              the complete machine learning pipeline with
              practical, industry-relevant projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 border-2 border-slate-200 hover:border-blue-300 transition-colors">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-2">
                      What You'll Gain
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          Build and deploy real-world ML models
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          Master Python, NumPy, Pandas, and
                          Scikit-learn
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          Understand neural networks and deep
                          learning
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          Create professional data
                          visualizations
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          Portfolio-ready projects for job
                          applications
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-slate-200 hover:border-blue-300 transition-colors">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-2">
                      Prerequisites
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>
                          Basic computer skills (no coding
                          experience required)
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>
                          High school level mathematics
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>
                          Willingness to learn and practice
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>
                          15-20 hours per week for study
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>
                          Computer with internet connection
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Learning Path Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1701576766277-c6160505581d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBsYXB0b3B8ZW58MXx8fHwxNzYxMDk4Njc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Student learning"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-900/90 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h3 className="text-white mb-2">
                  Join Our Learning Community
                </h3>
                <p className="text-blue-100 mb-6">
                  Connect with 50,000+ students worldwide
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  View Student Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section id="courses" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-0">
              Topics Covered
            </Badge>
            <h2 className="text-slate-900 mb-4">
              Master the Complete AI Stack
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From Python basics to advanced deep learning, we
              cover everything you need to become a successful
              AI practitioner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {topics.map((topic, index) => (
              <Card
                key={index}
                className="p-6 border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all group"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${topic.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-white`}
                >
                  {topic.icon}
                </div>
                <h3 className="text-slate-900 mb-2">
                  {topic.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm">
                  {topic.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <BookOpen className="w-4 h-4" />
                  <span>{topic.lessons} lessons</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Curriculum Details */}
          <div id="curriculum">
            <h3 className="text-slate-900 mb-8 text-center">
              Detailed Curriculum
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {curriculum.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 border-2 border-slate-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-blue-600 mb-1">
                        {item.week}
                      </div>
                      <h4 className="text-slate-900 mb-3">
                        {item.title}
                      </h4>
                      <ul className="space-y-2">
                        {item.modules.map((module, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-slate-600"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            {module}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-0">
              Your Instructor
            </Badge>
            <h2 className="text-slate-900 mb-4">
              Learn from Industry Experts
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-2xl" />
              <ImageWithFallback
                src="https://bernardmarr.com/wp-content/uploads/2022/03/Will-Artificial-Intelligence-Replace-Teachers.jpg"
                alt="Instructor"
                className="relative rounded-2xl shadow-xl w-full"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-slate-900 mb-2">
                  Dr. Sarah Johnson
                </h3>
                <p className="text-blue-600 mb-4">
                  PhD in Machine Learning • Former Google AI
                  Research Scientist
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-slate-600">
                    4.9 Instructor Rating
                  </span>
                </div>
              </div>

              <p className="text-slate-600">
                With over 15 years of experience in AI and
                machine learning, Dr. Johnson has worked on
                cutting-edge projects at Google, published 40+
                research papers, and taught over 100,000
                students worldwide.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-900">
                      15+ years in AI/ML
                    </div>
                    <div className="text-sm text-slate-600">
                      Led teams at Google, Amazon, and Microsoft
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-900">
                      40+ Research Publications
                    </div>
                    <div className="text-sm text-slate-600">
                      Published in top conferences (NeurIPS,
                      ICML, CVPR)
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-900">
                      100,000+ Students Taught
                    </div>
                    <div className="text-sm text-slate-600">
                      Across multiple platforms with 4.9★
                      average rating
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  View Full Bio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjExOTAzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Neural network"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-white mb-4">
            Start Your AI Journey Today
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students who are building their
            future in AI. Limited-time offer: Get 40% off when
            you enroll today!
          </p>

          <Card className="p-8 max-w-md mx-auto mb-8">
            <div className="text-center mb-6">
              <div className="text-slate-500 line-through mb-2">
                $300
              </div>
              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-slate-900 text-5xl">
                  $113
                </span>
                <span className="text-slate-600 mb-2">
                  /lifetime access
                </span>
              </div>
              <Badge className="bg-green-100 text-green-700 border-0">
                Save $200 • Limited Time
              </Badge>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>55+ hours of video content</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>20+ hands-on projects</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Certificate of completion</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Lifetime access & updates</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Enroll Now
            </Button>
            <p className="text-xs text-slate-500 text-center mt-4">
              30-day money-back guarantee. No questions asked.
            </p>
          </Card>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>Certificate Included</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Community Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Self-Paced</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-white">RN Academy</span>
              </div>
              <p className="text-sm">
                Empowering the next generation of AI
                practitioners.
              </p>
            </div>
            <div>
              <div className="text-white mb-4">Courses</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Machine Learning
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Deep Learning
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Data Science
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    AI Ethics
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-white mb-4">Resources</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-white mb-4">Company</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Instructors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm text-center">
            © 2025 RN Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}