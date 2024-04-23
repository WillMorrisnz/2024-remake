interface TechnologyStack {
  coreCompetencies: CoreCompetencies;
  programmingLanguages: ProgrammingLanguages;
  frameworksAndLibraries: FrameworksAndLibraries;
  devOpsAndCloudTechnologies: DevOpsAndCloudTechnologies;
  databases: DatabaseTechnologies;
  softwareDevelopmentPracticesAndTools: SoftwareDevelopmentPracticesAndTools;
  additionalSkills: AdditionalSkills;
}

interface CoreCompetencies {
  general: string[];
}

interface ProgrammingLanguages {
  commonlyUsed: string[];
  specificUse: string[];
}

interface FrameworksAndLibraries {
  frontend: string[];
  backend: string[];
  fullStack: string[];
}

interface DevOpsAndCloudTechnologies {
  cloudServices: string[];
  containerizationAndOrchestration: string[];
  continuousIntegrationAndDelivery: string[];
  monitoringAndLogging: string[];
  infrastructureAsCode: string[];
}

interface DatabaseTechnologies {
  relational: string[];
  noSql: string[];
}

interface SoftwareDevelopmentPracticesAndTools {
  methodologies: string[];
  principlesAndPatterns: string[];
  tools: string[];
  versionControlAndCollaboration: string[];
}

interface AdditionalSkills {
  architectureAndDesign: string[];
  testingAndDocumentation: string[];
}

const techStack: TechnologyStack = {
  coreCompetencies: {
    general: [
      "Full-Stack",
      "Backend",
      "Frontend",
      "Cloud Computing",
      "DevOps",
      "Agile & Scrum Methodologies",
    ],
  },
  programmingLanguages: {
    commonlyUsed: [
      "JavaScript",
      "Python",
      "Java",
      "PHP",
      "TypeScript",
      "SQL",
      "C",
    ],
    specificUse: [],
  },
  frameworksAndLibraries: {
    frontend: ["Reactjs", "Vue.js", "NextJs", "jQuery"],
    backend: ["Node.js", "Express", "Django", "Spring", "Laravel"],
    fullStack: [],
  },
  devOpsAndCloudTechnologies: {
    cloudServices: ["AWS Cloud (S3, DynamoDB, IAM, EC2, EKS, VPC)"],
    containerizationAndOrchestration: ["Docker", "Kubernetes"],
    continuousIntegrationAndDelivery: ["GitHub Actions", "CI/CD pipelines"],
    monitoringAndLogging: ["Grafana", "Prometheus"],
    infrastructureAsCode: ["Terraform", "Ansible"],
  },
  databases: {
    relational: ["PostgreSQL", "MySQL"],
    noSql: ["MongoDB", "Redis"],
  },
  softwareDevelopmentPracticesAndTools: {
    methodologies: ["Agile & Scrum", "TDD", "SDLC"],
    principlesAndPatterns: ["SOLID principles", "MVC/MVVM", "Design Patterns"],
    tools: ["Trello", "Confluence", "Asana"],
    versionControlAndCollaboration: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Code Reviews",
    ],
  },
  additionalSkills: {
    architectureAndDesign: [
      "Microservices Architecture",
      "API Development & Integration",
      "Data Structures & Algorithms",
    ],
    testingAndDocumentation: [
      "Web Scraping",
      "Documentation (Swagger)",
      "testing",
    ],
  },
};

export { techStack };
