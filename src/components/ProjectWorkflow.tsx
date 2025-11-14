import { 
  FileText, 
  Layout, 
  GitBranch, 
  Boxes, 
  Workflow, 
  Code, 
  TestTube, 
  Rocket 
} from 'lucide-react';

export default function ProjectWorkflow() {
  const steps = [
    {
      icon: FileText,
      title: 'Requirement Gathering',
      items: [
        'Collect project requirements from stakeholders.',
        'Document functional and non-functional requirements.'
      ],
      deliverable: 'Requirement List / Specification Document.'
    },
    {
      icon: Layout,
      title: 'Planning & Architecture',
      items: [
        'Define main entities, models, or database tables.',
        'Suggest clear global-friendly names like: User, Project, Task, Module.',
        'Decide on overall system architecture (monolith, microservices, layered).'
      ]
    },
    {
      icon: GitBranch,
      title: 'Database Design & Relationships',
      items: [
        'Map entity relationships (1:1, 1:n, n:n).',
        'Design tables, foreign keys, indexes, and constraints.'
      ],
      deliverable: 'Entity-Relationship Diagram (ERD).'
    },
    {
      icon: Boxes,
      title: 'Module Design & Planning',
      items: [
        'Break the system into modules (Authentication, User Management, Project Management).',
        'Define responsibilities and dependencies of each module.'
      ],
      deliverable: 'Module Diagram / Architecture Plan.'
    },
    {
      icon: Workflow,
      title: 'Use Case & System Flow',
      items: [
        'Define user stories or use cases.',
        'Map how users interact with the system step by step.'
      ],
      deliverable: 'Flowchart / Sequence Diagram.'
    },
    {
      icon: Code,
      title: 'Development & Implementation',
      items: [
        'Implement backend, APIs, frontend, and integrations according to planned modules and database schema.',
        'Follow clean architecture and separation of concerns.'
      ]
    },
    {
      icon: TestTube,
      title: 'Testing & Quality Assurance',
      items: [
        'Perform unit testing, integration testing, and end-to-end testing.',
        'Document expected outcomes and track bugs.'
      ]
    },
    {
      icon: Rocket,
      title: 'Deployment & Maintenance',
      items: [
        'Deploy the system to production or staging servers.',
        'Setup monitoring, CI/CD pipelines, and regular updates.'
      ]
    }
  ];

  return (
    <section id="workflow" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">Workflow</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A systematic approach to building robust and scalable applications
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line - Left on mobile, center on desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/50 via-red-600/50 to-red-500/50 md:transform md:-translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center flex-row group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Step Content - Full width on mobile, 45% on desktop */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-left`}>
                    {/* Glass Card */}
                    <div className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-900/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(239,68,68,0.3)] hover:-translate-y-1 overflow-hidden">
                      {/* Glowing background effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className={`flex items-center mb-4 justify-start ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          <span className="w-10 h-10 bg-gradient-to-br from-red-500/30 to-red-600/30 backdrop-blur-sm border border-red-500/40 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.4)] group-hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] transition-all duration-300">
                            {index + 1}
                          </span>
                          <div className="flex items-center flex-row">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-500/30 to-red-600/30 backdrop-blur-sm border border-red-500/40 rounded-xl flex items-center justify-center mr-3 flex-shrink-0 shadow-[0_0_20px_rgba(239,68,68,0.4)] group-hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all duration-300">
                              <Icon className="w-6 h-6 text-red-400" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <ul className="text-sm md:text-base text-slate-300 space-y-2 text-left list-none">
                          {step.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="text-red-400 mr-2 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        {step.deliverable && (
                          <div className="mt-4 pt-4 border-t border-red-500/10">
                            <p className="text-xs md:text-sm text-red-400 italic flex items-center">
                              <span className="mr-2">📄</span>
                              <span>Deliverable: {step.deliverable}</span>
                            </p>
                          </div>
                        )}
                      </div>
                      
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-2xl"></div>
                    </div>
                  </div>

                  {/* Center Circle - Left on mobile, center on desktop */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-14 md:h-14 bg-slate-900/80 backdrop-blur-sm rounded-full border-4 border-red-500/60 flex items-center justify-center z-10 shadow-[0_0_25px_rgba(239,68,68,0.5)] group-hover:border-red-500 group-hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] transition-all duration-300">
                    <div className="w-3 h-3 md:w-5 md:h-5 bg-gradient-to-br from-red-400 to-red-600 rounded-full"></div>
                  </div>

                  {/* Empty space for opposite side - Hidden on mobile */}
                  <div className="hidden md:block w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
