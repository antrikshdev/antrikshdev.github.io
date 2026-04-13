export const resumeData = {
  "basics": {
    "name": "Antriksh Devgan",
    "title": "Senior DevOps & Azure Engineer",
    "headline": "Ex Microsoft | Certified Azure Engineer | Expertise in AKS, ACI, Kubernetes & Infrastructure Management",
    "summary": "12 years. Three industry giants. One mission: building cloud infrastructure that scales. I've spent my career at Microsoft, BOQ, Westpac, GlobalLogic, and Thomson Digital, turning complex cloud challenges into elegant, reliable solutions. My sweet spot? Azure-native ecosystems - where DevOps pipelines, Kubernetes orchestration, and containerized microservices come together to power enterprise-grade systems.",
    "location": "Sydney, NSW, Australia",
    "email": "antrikshdevgan@gmail.com",
    "phone": "",
    "profileImage": "/src/profile.jpg",
    "shortSummary": {
      "hook": "12 years. Three industry giants. One mission: building cloud infrastructure that scales.",
      "bio": "I've spent my career at Microsoft, BOQ, Westpac, GlobalLogic, and Thomson Digital, turning complex cloud challenges into elegant, reliable solutions. My sweet spot? Azure-native ecosystems - where DevOps pipelines, Kubernetes orchestration, and containerized microservices come together to power enterprise-grade systems.",
      "highlights": [
        "End-to-end Azure DevOps - Pipelines, Release Management",
        "Container mastery - Docker, ACR, ACI, and AKS Blue Green Deployments",
        "Security & governance - MS Defender, Azure Key Vault, Policies, Container Insights, Prometheus, Grafana",
        "Infrastructure as Code - Bicep, Terraform & Git for repeatable, auditable deployments"
      ],
      "philosophy": "I don't just manage infrastructure — I architect it to be resilient, secure, and future-ready. Whether it's spinning up a Kubernetes cluster or designing a zero-downtime release pipeline, I bring precision and purpose to every layer of the stack.",
      "cta": "Let's build something that lasts."
    },
    "links": [
      {
        "label": "LinkedIn",
        "url": "https://www.linkedin.com/in/antrikshdevgan"
      }
    ]
  },
  "experience": [
    {
      "company": "BOQ Group",
      "role": "Kubernetes AKS Specialist",
      "dates": "October 2024 - Present",
      "location": "Sydney, NSW",
      "bullets": [
        "Designed and implemented Azure cloud infrastructure using Bicep, building reusable AVM modules for services such as Storage Accounts, AKS, SQL DB, Key Vault, CosmosDB and Private Endpoints to support secure enterprise workloads.",
        "Managed and supported AKS-based microservices platform, configuring NGINX Ingress, cert-manager, and secure TLS termination for multiple internal banking applications.",
        "Investigated and resolved TLS trust chain failures across 20+ AKS pods and service integrations, identifying internal CA trust limitations in container environments and driving adoption of DigiCert public CA to simplify certificate management and reduce integration risk.",
        "Automated infrastructure provisioning and deployments through CI/CD pipelines (Azure DevOps) enabling consistent delivery of platform services across dev, uat, sit and production environments.",
        "Implemented secure networking patterns in Azure Landing Zone, including VNet integration, private endpoints, and controlled service access between platform components.",
        "Integrated applications with Azure Key Vault and Managed Identities, Workload Identities to enforce secure secret management using the secret provider class and eliminate hard-coded credentials in workloads.",
        "Collaborated with application teams and vendors to troubleshoot Kubernetes, networking, and cloud platform issues, improving platform stability and reducing operational incidents.",
        "Contributed to cloud platform architecture decisions and technical documentation, ensuring solutions align with enterprise security standards and scalable cloud-native practices"
      ]
    },
    {
      "company": "AI Talent",
      "role": "Software Engineer",
      "dates": "January 2024 - Present",
      "location": "Sydney, NSW, Australia",
      "bullets": []
    },
    {
      "company": "Westpac",
      "role": "Senior DevOps Engineer",
      "dates": "April 2024 - September 2024",
      "location": "Sydney, NSW, Australia",
      "bullets": [
        "Developed and maintained secure, reusable Terraform modules and pattern designs, adhering to Westpac's strict compliance and security standards.",
        "Collaborated with cross-functional teams to onboard internal customers, providing guidance on using Terraform modules to build compliant and scalable Azure infrastructure.",
        "Managed the full lifecycle of Terraform deployments, from design and implementation to ongoing maintenance, ensuring alignment with Westpac’s IT governance and risk management policies.",
        "Leveraged Jenkins pipelines to automate the provisioning and deployment of Terraform workspaces and Azure resources, enhancing efficiency and reducing deployment times.",
        "Conducted code reviews and implemented CI/CD best practices to ensure code quality and minimize risks associated with infrastructure as code (IaC) changes.",
        "Provided continuous support and troubleshooting for Terraform-based environments, addressing security concerns and compliance requirements specific to the banking domain.",
        "Implemented robust access controls and audit trails in Terraform to maintain a high level of security across the deployed infrastructure.",
        "Contributed to knowledge sharing by documenting best practices and providing training sessions on Terraform usage and security considerations within the financial sector."
      ]
    },
    {
      "company": "Microsoft",
      "role": "Azure Kubernetes Service Engineer",
      "dates": "July 2020 - August 2023",
      "location": "",
      "bullets": [
        "Integrated Azure Container Instances (ACI) with Azure Container Registry (ACR), streamlining container deployment by 50% and minimizing manual intervention.",
        "Built CI/CD pipelines to facilitate continuous integration and deployment, optimizing software development processes and accelerating time-to-market.",
        "Implemented robust security practices throughout the software development lifecycle, ensuring data protection and compliance with industry standards.",
        "Applied LEAN Agile methodologies to project management, fostering collaboration, agility, and value-driven development.",
        "Deployed containerization techniques, with a focus on Kubernetes using Helm Chart, resulting in a 20% boost in application scalability and flexibility.",
        "Configured and managed networking on AKS, addressing Kubernetes and Azure CNI issues, guaranteeing seamless communication between containers, and enhancing the overall reliability of the Kubernetes clusters.",
        "Attained Azure Administrator certification, demonstrating comprehensive knowledge and expertise in Azure cloud technology, allowing for efficient management and optimization of cloud resources.",
        "Utilized various Azure services, such as policies, key vaults, Container Insights, Application Gateway Add-on, and Ingress controller, to design and implement robust and secure cloud-based solutions, meeting specific project requirements effectively.",
        "Employed Microsoft Azure DevOps Tools, including Pipelines, Release pipelines, and Azure DevOps Board, to establish efficient CI/CD pipelines, accelerating software delivery and ensuring continuous integration and deployment.",
        "Leveraged HashiCorp Terraform for Infrastructure as Code (IAC) practices, automating the deployment and management of cloud resources, resulting in standardized and reproducible infrastructure across environments"
      ]
    },
    {
      "company": "GlobalLogic",
      "role": "Senior Engineer",
      "dates": "January 2017 - July 2020",
      "location": "",
      "bullets": [
        "Conducted failure analysis and optimized build processes, resulting in more reliable and efficient builds, reducing the occurrence of build failures.",
        "Managed and maintained infrastructure across various platforms, including VMs, Docker, Azure, and Linux, ensuring smooth and consistent operations of cloud-based applications and services.",
        "Set up and managed Azure VM clusters, enhancing the scalability and availability of applications, and performed VM import/export operations for seamless migration and disaster recovery scenarios.",
        "Utilized Source Code Management (Version Control System) tools like Git and SVN to efficiently track code changes, enabling seamless collaboration and version control within the development team.",
        "Implemented and maintained Jenkins pipelines, automating the build, regression, and release processes, resulting in accelerated software delivery and continuous integration and deployment.",
        "Demonstrated expertise in Docker, proficiently building and pushing Docker images, improving application deployment speed and portability across different environments.",
        "Created Docker Swarm clusters with a private registry and established Docker networks, enhancing container orchestration capabilities and ensuring secure communication between containers.",
        "Automated build processes for Docker containers and Kubernetes pods, streamlining the containerization workflow and reducing manual intervention, resulting in improved efficiency and consistency."
      ]
    },
    {
      "company": "Thomson Digital",
      "role": "Software Developer",
      "dates": "May 2013 - January 2017",
      "location": "",
      "bullets": [
        "Built and deployed Java and PHP applications on Linux systems, ensuring reliable and efficient performance of web applications in a Linux environment.",
        "Utilized JQuery and JavaScript for various development tasks, enhancing the functionality and user experience of web applications.",
        "Conducted environment sanity checks post-deployment, ensuring that the application environment is stable and ready for production use, resulting in reduced post-deployment issues and improved overall system reliability.",
        "Provided thorough root cause analysis (RCA) for production issues, enhancing domain knowledge and facilitating data-driven decision-making for resolving critical incidents promptly, thereby meeting business expectations.",
        "Leveraged CronJobs for task scheduling, enabling the execution of automated tasks at regular intervals, such as periodic data backups or routine maintenance tasks, streamlining operational processes and reducing manual intervention."
      ]
    }
  ],
  "skills": [
    {
      "category": "Core",
      "items": ["Red Hat Linux", "Platform as a Service (PAAS)", "Microservices", "Kubernetes (AKS)", "Azure Container Instances (ACI)", "Infrastructure Management", "DevOps", "Terraform (IAC)", "Azure Cloud", "Monitoring Tools"]
    },
    {
      "category": "Azure Ecosystem",
      "items": ["Azure Pipelines", "Azure DevOps Board", "Azure Policies", "Key Vault", "Container Insights", "Azure Container Registry (ACR)", "Azure Landing Zone", "VNet Integration", "Managed Identities", "Workload Identities", "Bicep", "AVM Modules"]
    },
    {
      "category": "Tools & Tech",
      "items": ["Docker", "Docker Swarm", "Helm Chart", "Jenkins", "Git", "SVN", "NGINX Ingress", "Cert-manager", "DigiCert public CA", "Java", "PHP", "JQuery", "JavaScript", "CronJobs"]
    }
  ],
  "education": [
    {
      "school": "Lovely Professional University",
      "degree": "Master of Technology (MTech), Computer Engineering",
      "dates": "2007 - 2012"
    }
  ],
  "certifications": [
    {
      "title": "Certified Kubernetes Administrator",
      "issuer": "The Linux Foundation",
      "date": "May 2020",
      "expiry": "May 2023",
      "id": "CKA-2000-007818-0",
      "url": "https://www.credly.com/badges/0a77130c-83cc-4d10-8816-83e253e74f10/public_url"
    },
    {
      "title": "Certified Kubernetes Application Developer",
      "issuer": "Cloud Native Computing Foundation (CNCF)",
      "date": "Oct 2020",
      "expiry": "Oct 2023",
      "id": "LF0lqrm4510m"
    },
    {
      "title": "Microsoft Certified: Azure Solutions Architect Expert",
      "issuer": "Microsoft",
      "date": "Feb 2023",
      "expiry": "Feb 2024",
      "id": "I598-5491"
    },
    {
      "title": "Microsoft Certified Azure DevOps Engineer Expert",
      "issuer": "Microsoft"
    },
    {
      "title": "Azure Administrator",
      "issuer": "Microsoft"
    },
    {
      "title": "Docker Certified Associate",
      "issuer": "Docker"
    },
    {
      "title": "Azure Containers - Azure Red Hat OpenShift - Specialist Assessment Certificate",
      "issuer": "Microsoft"
    }
  ],
  "achievements": [
    {
      "title": "Deployment Efficiency",
      "metric": "50%",
      "context": "Streamlined container deployment by integrating ACI with ACR, minimizing manual intervention.",
      "type": "metric"
    },
    {
      "title": "Application Scalability",
      "metric": "20%",
      "context": "Boost in scalability and flexibility through Kubernetes containerization using Helm Charts.",
      "type": "metric"
    },
    {
      "title": "TLS Resolution",
      "metric": "20+",
      "context": "Resolved trust chain failures across 20+ AKS pods, driving adoption of DigiCert public CA.",
      "type": "wins"
    }
  ],
  "extra": [
    "Experienced in LEAN Agile methodologies",
    "Proficient in Source Code Management (Git, SVN)",
    "Expertise in Root Cause Analysis (RCA)",
    "Knowledge of secure TLS termination and certificate management"
  ]
};
