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
    <section id="workflow" className="relative py-20 overflow-hidden starry-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Project Workflow
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A systematic approach to building robust and scalable applications
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Step Content */}
                  <div className={`w-[45%] ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-purple-500/50 transition-all">
                      <div className={`flex items-center mb-3 ${isEven ? 'justify-end' : 'justify-start'}`}>
                        {!isEven && (
                          <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">
                            {index + 1}
                          </span>
                        )}
                        <div className="flex items-center flex-row">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold text-white">
                            {step.title}
                          </h3>
                        </div>
                        {isEven && (
                          <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm ml-3 flex-shrink-0">
                            {index + 1}
                          </span>
                        )}
                      </div>
                      <ul className={`text-sm text-slate-300 space-y-1 ${isEven ? 'text-right' : 'text-left'}`}>
                        {step.items.map((item, itemIndex) => (
                          <li key={itemIndex} className={isEven ? 'list-none' : 'list-disc list-inside'}>
                            {item}
                          </li>
                        ))}
                      </ul>
                      {step.deliverable && (
                        <p className={`text-xs text-blue-400 mt-3 italic ${isEven ? 'text-right' : 'text-left'}`}>
                          Deliverable: {step.deliverable}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-slate-900 rounded-full border-4 border-blue-500 flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                  </div>

                  {/* Empty space for opposite side */}
                  <div className="w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
