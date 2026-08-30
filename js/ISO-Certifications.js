document.addEventListener("DOMContentLoaded", function () {
  /* =====================================================
       ISO CERTIFICATION DATA
    ===================================================== */

  const isoData = {
    9001: {
      code: "ISO 9001:2015",
      title: "Quality Management System",
      icon: "fa-solid fa-certificate",
      shortTitle: "ISO 9001:2015",
      description:
        "ISO 9001:2015 is an internationally recognized standard for Quality Management Systems. It helps organizations improve quality, customer satisfaction and business performance.",
      benefits: [
        "Improve business processes",
        "Improve customer satisfaction",
        "Reduce operational risks",
        "Improve organizational performance",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-chart-line",
          title: "Better Performance",
          desc: "Improve organizational efficiency through structured management systems.",
        },
        {
          icon: "fa-solid fa-users",
          title: "Customer Confidence",
          desc: "Demonstrate your commitment to quality and customer satisfaction.",
        },
        {
          icon: "fa-solid fa-shield-halved",
          title: "Risk Reduction",
          desc: "Identify potential risks and implement effective controls.",
        },
        {
          icon: "fa-solid fa-globe",
          title: "Global Recognition",
          desc: "Build credibility with customers and partners in domestic and international markets.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "Leadership",
          desc: "Strong leadership and commitment to the management system.",
        },
        {
          num: "02",
          title: "Planning",
          desc: "Identify risks, opportunities and organizational objectives.",
        },
        {
          num: "03",
          title: "Process Management",
          desc: "Establish and control effective organizational processes.",
        },
        {
          num: "04",
          title: "Continual Improvement",
          desc: "Monitor performance and continually improve the management system.",
        },
      ],
    },

    14001: {
      code: "ISO 14001:2015",
      title: "Environmental Management System",
      icon: "fa-solid fa-leaf",
      shortTitle: "ISO 14001:2015",
      description:
        "ISO 14001:2015 provides a framework for organizations to manage environmental responsibilities and improve their environmental performance.",
      benefits: [
        "Improve environmental performance",
        "Reduce environmental impact",
        "Help manage environmental risks",
        "Support legal compliance",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-leaf",
          title: "Environmental Performance",
          desc: "Improve your environmental footprint and sustainability.",
        },
        {
          icon: "fa-solid fa-recycle",
          title: "Waste Reduction",
          desc: "Minimize waste and optimize resource usage.",
        },
        {
          icon: "fa-solid fa-shield-halved",
          title: "Risk Management",
          desc: "Identify and manage environmental risks effectively.",
        },
        {
          icon: "fa-solid fa-globe",
          title: "Sustainable Growth",
          desc: "Build a sustainable business for the future.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "Environmental Policy",
          desc: "Establish a clear environmental policy and commitment.",
        },
        {
          num: "02",
          title: "Planning",
          desc: "Identify environmental aspects and compliance obligations.",
        },
        {
          num: "03",
          title: "Implementation",
          desc: "Implement environmental management programs.",
        },
        {
          num: "04",
          title: "Performance Evaluation",
          desc: "Monitor, measure and improve environmental performance.",
        },
      ],
    },

    45001: {
      code: "ISO 45001:2018",
      title: "Occupational Health & Safety",
      icon: "fa-solid fa-helmet-safety",
      shortTitle: "ISO 45001:2018",
      description:
        "ISO 45001:2018 helps organizations provide safe and healthy workplaces while reducing occupational health and safety risks.",
      benefits: [
        "Improve workplace safety",
        "Reduce occupational risks",
        "Protect employees",
        "Improve safety management",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-hard-hat",
          title: "Workplace Safety",
          desc: "Create a safer work environment for all employees.",
        },
        {
          icon: "fa-solid fa-heart-pulse",
          title: "Employee Wellbeing",
          desc: "Protect the health and wellbeing of your workforce.",
        },
        {
          icon: "fa-solid fa-triangle-exclamation",
          title: "Risk Prevention",
          desc: "Identify and prevent workplace hazards.",
        },
        {
          icon: "fa-solid fa-scale-balanced",
          title: "Compliance",
          desc: "Meet legal and regulatory requirements.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "OH&S Policy",
          desc: "Establish a clear health and safety policy.",
        },
        {
          num: "02",
          title: "Risk Assessment",
          desc: "Identify and assess workplace hazards.",
        },
        {
          num: "03",
          title: "Operational Controls",
          desc: "Implement controls to manage risks.",
        },
        {
          num: "04",
          title: "Performance Monitoring",
          desc: "Monitor and improve safety performance.",
        },
      ],
    },

    22000: {
      code: "ISO 22000:2018",
      title: "Food Safety Management System",
      icon: "fa-solid fa-utensils",
      shortTitle: "ISO 22000:2018",
      description:
        "ISO 22000:2018 provides requirements for a food safety management system applicable to organizations throughout the food chain.",
      benefits: [
        "Improve food safety",
        "Control food safety hazards",
        "Build consumer confidence",
        "Improve food safety processes",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-apple",
          title: "Food Safety",
          desc: "Ensure the safety of food products throughout the chain.",
        },
        {
          icon: "fa-solid fa-microscope",
          title: "Hazard Control",
          desc: "Identify and control food safety hazards.",
        },
        {
          icon: "fa-solid fa-people-group",
          title: "Consumer Trust",
          desc: "Build trust with consumers and stakeholders.",
        },
        {
          icon: "fa-solid fa-file-lines",
          title: "Compliance",
          desc: "Meet regulatory and industry requirements.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "Food Safety Policy",
          desc: "Establish a comprehensive food safety policy.",
        },
        {
          num: "02",
          title: "Hazard Analysis",
          desc: "Analyze and control food safety hazards.",
        },
        {
          num: "03",
          title: "Prerequisite Programs",
          desc: "Implement effective prerequisite programs.",
        },
        {
          num: "04",
          title: "Traceability",
          desc: "Maintain traceability throughout the food chain.",
        },
      ],
    },

    27001: {
      code: "ISO 27001:2022",
      title: "Information Security Management System",
      icon: "fa-solid fa-shield-halved",
      shortTitle: "ISO 27001:2022",
      description:
        "ISO 27001:2022 helps organizations protect sensitive information and manage information security risks effectively.",
      benefits: [
        "Protect sensitive information",
        "Reduce security risks",
        "Improve information security",
        "Build customer trust",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-lock",
          title: "Data Protection",
          desc: "Protect sensitive business and customer data.",
        },
        {
          icon: "fa-solid fa-user-secret",
          title: "Security Management",
          desc: "Implement robust information security controls.",
        },
        {
          icon: "fa-solid fa-cloud",
          title: "Secure Operations",
          desc: "Ensure secure IT and cloud operations.",
        },
        {
          icon: "fa-solid fa-handshake",
          title: "Customer Trust",
          desc: "Build trust with clients and partners.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "Information Security Policy",
          desc: "Establish a comprehensive security policy.",
        },
        {
          num: "02",
          title: "Risk Assessment",
          desc: "Identify and assess information security risks.",
        },
        {
          num: "03",
          title: "Security Controls",
          desc: "Implement appropriate security controls.",
        },
        {
          num: "04",
          title: "Monitoring & Review",
          desc: "Monitor and improve security performance.",
        },
      ],
    },

    13485: {
      code: "ISO 13485:2016",
      title: "Medical Devices Quality Management",
      icon: "fa-solid fa-stethoscope",
      shortTitle: "ISO 13485:2016",
      description:
        "ISO 13485:2016 specifies requirements for a quality management system for organizations involved in medical devices.",
      benefits: [
        "Improve medical device quality",
        "Support regulatory requirements",
        "Improve manufacturing processes",
        "Reduce product risks",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-heart",
          title: "Device Quality",
          desc: "Ensure quality and safety of medical devices.",
        },
        {
          icon: "fa-solid fa-clipboard-check",
          title: "Regulatory Compliance",
          desc: "Meet global regulatory requirements.",
        },
        {
          icon: "fa-solid fa-industry",
          title: "Process Excellence",
          desc: "Improve manufacturing and quality processes.",
        },
        {
          icon: "fa-solid fa-shield",
          title: "Patient Safety",
          desc: "Ensure the safety of patients and users.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "Quality Management",
          desc: "Establish a robust quality management system.",
        },
        {
          num: "02",
          title: "Risk Management",
          desc: "Implement risk management for medical devices.",
        },
        {
          num: "03",
          title: "Process Control",
          desc: "Control manufacturing and service processes.",
        },
        {
          num: "04",
          title: "Regulatory Compliance",
          desc: "Meet regulatory and legal requirements.",
        },
      ],
    },

    50001: {
      code: "ISO 50001:2018",
      title: "Energy Management System",
      icon: "fa-solid fa-bolt",
      shortTitle: "ISO 50001:2018",
      description:
        "ISO 50001:2018 helps organizations establish systems and processes necessary to improve energy performance.",
      benefits: [
        "Improve energy performance",
        "Reduce energy consumption",
        "Reduce operating costs",
        "Improve energy efficiency",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-lightbulb",
          title: "Energy Efficiency",
          desc: "Optimize energy usage and reduce waste.",
        },
        {
          icon: "fa-solid fa-coins",
          title: "Cost Reduction",
          desc: "Reduce energy costs and operating expenses.",
        },
        {
          icon: "fa-solid fa-recycle",
          title: "Sustainability",
          desc: "Build a sustainable energy management system.",
        },
        {
          icon: "fa-solid fa-chart-simple",
          title: "Performance",
          desc: "Monitor and improve energy performance.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "Energy Policy",
          desc: "Establish a clear energy management policy.",
        },
        {
          num: "02",
          title: "Energy Planning",
          desc: "Plan and set energy performance goals.",
        },
        {
          num: "03",
          title: "Implementation",
          desc: "Implement energy management programs.",
        },
        {
          num: "04",
          title: "Monitoring",
          desc: "Monitor and measure energy performance.",
        },
      ],
    },

    22301: {
      code: "ISO 22301:2019",
      title: "Business Continuity Management",
      icon: "fa-solid fa-business-time",
      shortTitle: "ISO 22301:2019",
      description:
        "ISO 22301:2019 helps organizations prepare for, respond to and recover from disruptive incidents.",
      benefits: [
        "Improve business resilience",
        "Reduce disruption risks",
        "Support business continuity",
        "Improve emergency preparedness",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-briefcase",
          title: "Business Resilience",
          desc: "Build a resilient and robust organization.",
        },
        {
          icon: "fa-solid fa-triangle-exclamation",
          title: "Risk Mitigation",
          desc: "Reduce the impact of disruptions.",
        },
        {
          icon: "fa-solid fa-clock",
          title: "Rapid Recovery",
          desc: "Recover quickly from incidents.",
        },
        {
          icon: "fa-solid fa-people-arrows",
          title: "Stakeholder Trust",
          desc: "Maintain stakeholder confidence.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "Business Continuity Policy",
          desc: "Establish a continuity policy and framework.",
        },
        {
          num: "02",
          title: "Risk Assessment",
          desc: "Identify and assess potential disruptions.",
        },
        {
          num: "03",
          title: "Business Continuity Plans",
          desc: "Develop effective continuity plans.",
        },
        {
          num: "04",
          title: "Testing & Review",
          desc: "Test and improve continuity capabilities.",
        },
      ],
    },

    20000: {
      code: "ISO 20000-1:2018",
      title: "IT Service Management System",
      icon: "fa-solid fa-server",
      shortTitle: "ISO 20000-1:2018",
      description:
        "ISO 20000-1:2018 provides requirements for organizations to establish, implement and maintain an effective IT service management system.",
      benefits: [
        "Improve IT service quality",
        "Improve service management",
        "Enhance customer satisfaction",
        "Reduce service risks",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-laptop",
          title: "Service Quality",
          desc: "Deliver high-quality IT services to users.",
        },
        {
          icon: "fa-solid fa-gears",
          title: "Process Optimization",
          desc: "Optimize IT service management processes.",
        },
        {
          icon: "fa-solid fa-smile",
          title: "Customer Satisfaction",
          desc: "Enhance satisfaction with IT services.",
        },
        {
          icon: "fa-solid fa-shield",
          title: "Service Reliability",
          desc: "Ensure reliable and consistent IT services.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "Service Management Policy",
          desc: "Establish a comprehensive service management policy.",
        },
        {
          num: "02",
          title: "Service Planning",
          desc: "Plan and design IT services effectively.",
        },
        {
          num: "03",
          title: "Service Delivery",
          desc: "Deliver and manage IT services efficiently.",
        },
        {
          num: "04",
          title: "Improvement",
          desc: "Monitor and continuously improve services.",
        },
      ],
    },

    37001: {
      code: "ISO 37001:2016",
      title: "Anti-Bribery Management System",
      icon: "fa-solid fa-scale-balanced",
      shortTitle: "ISO 37001:2016",
      description:
        "ISO 37001:2016 helps organizations prevent, detect and address bribery through an effective anti-bribery management system.",
      benefits: [
        "Help prevent bribery",
        "Improve organizational integrity",
        "Reduce corruption risks",
        "Support ethical business",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-handcuffs",
          title: "Anti-Bribery",
          desc: "Prevent bribery and corruption effectively.",
        },
        {
          icon: "fa-solid fa-scale-balanced",
          title: "Organizational Integrity",
          desc: "Build a culture of integrity and ethics.",
        },
        {
          icon: "fa-solid fa-shield",
          title: "Risk Reduction",
          desc: "Reduce exposure to bribery risks.",
        },
        {
          icon: "fa-solid fa-handshake",
          title: "Trust",
          desc: "Build trust with stakeholders.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "Anti-Bribery Policy",
          desc: "Establish a clear anti-bribery policy.",
        },
        {
          num: "02",
          title: "Risk Assessment",
          desc: "Identify and assess bribery risks.",
        },
        {
          num: "03",
          title: "Controls",
          desc: "Implement effective anti-bribery controls.",
        },
        {
          num: "04",
          title: "Monitoring",
          desc: "Monitor and review the anti-bribery system.",
        },
      ],
    },

    41001: {
      code: "ISO 41001:2018",
      title: "Facility Management System",
      icon: "fa-solid fa-building",
      shortTitle: "ISO 41001:2018",
      description:
        "ISO 41001:2018 provides requirements for an effective facility management system to support organizational objectives.",
      benefits: [
        "Improve facility management",
        "Optimize facility operations",
        "Improve service quality",
        "Reduce operational risks",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-building",
          title: "Facility Excellence",
          desc: "Deliver excellent facility management services.",
        },
        {
          icon: "fa-solid fa-chart-line",
          title: "Operational Optimization",
          desc: "Optimize facility operations and costs.",
        },
        {
          icon: "fa-solid fa-users",
          title: "Service Quality",
          desc: "Improve service quality for building users.",
        },
        {
          icon: "fa-solid fa-shield",
          title: "Risk Management",
          desc: "Manage facility-related risks effectively.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "Facility Management Policy",
          desc: "Establish a comprehensive facility management policy.",
        },
        {
          num: "02",
          title: "Planning",
          desc: "Plan facility management services effectively.",
        },
        {
          num: "03",
          title: "Operations",
          desc: "Manage and operate facilities efficiently.",
        },
        {
          num: "04",
          title: "Evaluation",
          desc: "Monitor and improve facility performance.",
        },
      ],
    },

    10002: {
      code: "ISO 10002:2018",
      title: "Customer Satisfaction Management",
      icon: "fa-solid fa-comments",
      shortTitle: "ISO 10002:2018",
      description:
        "ISO 10002:2018 provides guidance for organizations to establish an effective customer complaint-handling process.",
      benefits: [
        "Improve customer satisfaction",
        "Improve complaint handling",
        "Build customer relationships",
        "Identify customer concerns",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-smile",
          title: "Customer Satisfaction",
          desc: "Enhance overall customer satisfaction.",
        },
        {
          icon: "fa-solid fa-headset",
          title: "Complaint Handling",
          desc: "Handle complaints professionally and effectively.",
        },
        {
          icon: "fa-solid fa-handshake",
          title: "Customer Relationships",
          desc: "Build strong customer relationships.",
        },
        {
          icon: "fa-solid fa-chart-line",
          title: "Continuous Improvement",
          desc: "Use feedback to improve services.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "Complaint Policy",
          desc: "Establish a clear complaint handling policy.",
        },
        {
          num: "02",
          title: "Process",
          desc: "Implement effective complaint handling processes.",
        },
        {
          num: "03",
          title: "Resolution",
          desc: "Resolve complaints and address customer concerns.",
        },
        {
          num: "04",
          title: "Improvement",
          desc: "Use feedback to drive improvements.",
        },
      ],
    },
  };

  // Default benefits for fallback
  const defaultBenefits = [
    "Improve business processes",
    "Improve customer satisfaction",
    "Reduce operational risks",
    "Improve organizational performance",
  ];

  const defaultBenefitCards = [
    {
      icon: "fa-solid fa-chart-line",
      title: "Better Performance",
      desc: "Improve organizational efficiency through structured management systems.",
    },
    {
      icon: "fa-solid fa-users",
      title: "Customer Confidence",
      desc: "Demonstrate your commitment to quality and customer satisfaction.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Risk Reduction",
      desc: "Identify potential risks and implement effective controls.",
    },
    {
      icon: "fa-solid fa-globe",
      title: "Global Recognition",
      desc: "Build credibility with customers and partners in domestic and international markets.",
    },
  ];

  const defaultRequirements = [
    {
      num: "01",
      title: "Leadership",
      desc: "Strong leadership and commitment to the management system.",
    },
    {
      num: "02",
      title: "Planning",
      desc: "Identify risks, opportunities and organizational objectives.",
    },
    {
      num: "03",
      title: "Process Management",
      desc: "Establish and control effective organizational processes.",
    },
    {
      num: "04",
      title: "Continual Improvement",
      desc: "Monitor performance and continually improve the management system.",
    },
  ];

  /* =====================================================
       UPDATE PAGE CONTENT
    ===================================================== */

  function updateISOContent(isoKey) {
    const data = isoData[isoKey];

    if (!data) {
      // If no data found, show 9001 as default
      updateISOContent("9001");
      return;
    }

    // ========== HERO SECTION ==========
    const heroTitle = document.getElementById("heroTitle");
    const heroDesc = document.getElementById("heroDescription");
    const breadcrumbTitle = document.getElementById("breadcrumbTitle");

    if (heroTitle) heroTitle.textContent = data.code;
    if (heroDesc) heroDesc.textContent = data.description;
    if (breadcrumbTitle) breadcrumbTitle.textContent = data.code;

    // ========== OVERVIEW SECTION ==========
    const overviewTitle = document.getElementById("overviewTitle");
    const overviewText = document.getElementById("overviewText");
    const benefitsList = document.getElementById("benefitsList");

    if (overviewTitle) {
      const span = overviewTitle.querySelector("span");
      if (span) {
        overviewTitle.childNodes[0].textContent = data.code + " ";
        span.textContent = data.title;
      }
    }

    if (overviewText) overviewText.textContent = data.description;

    // Update benefits list
    if (benefitsList) {
      const benefits = data.benefits || defaultBenefits;
      benefitsList.innerHTML = benefits
        .map(function (benefit) {
          return (
            '<div><i class="fa-solid fa-circle-check"></i> ' +
            benefit +
            "</div>"
          );
        })
        .join("");
    }

    // ========== CERTIFICATE CARD ==========
    const certNumber = document.getElementById("certificateNumber");
    const certStandard = document.getElementById("certificateStandard");
    const certName = document.getElementById("certificateName");

    if (certNumber) {
      // Extract ISO from code (e.g., "ISO 9001:2015" -> "ISO")
      const isoPart = data.code.split(" ")[0] || "ISO";
      certNumber.textContent = isoPart;
    }
    if (certStandard) certStandard.textContent = data.code;
    if (certName) certName.textContent = data.title;

    // ========== BENEFITS SECTION ==========
    const benefitHeading = document.getElementById("benefitHeading");
    const benefitDescription = document.getElementById("benefitDescription");
    const benefitsCards = document.getElementById("benefitsCards");

    if (benefitHeading)
      benefitHeading.textContent = data.code + " Certification";
    if (benefitDescription) benefitDescription.textContent = data.description;

    // Update benefit cards
    if (benefitsCards) {
      const cards = data.benefitCards || defaultBenefitCards;
      benefitsCards.innerHTML = cards
        .map(function (card) {
          return `
          <div class="iso-benefit-card">
            <div class="iso-benefit-icon">
              <i class="${card.icon}"></i>
            </div>
            <h3>${card.title}</h3>
            <p>${card.desc}</p>
          </div>
        `;
        })
        .join("");
    }

    // ========== REQUIREMENTS SECTION ==========
    const requirementsTitle = document.getElementById("requirementsTitle");
    const requirementsText = document.getElementById("requirementsText");
    const requirementsList = document.getElementById("requirementsList");

    if (requirementsTitle) requirementsTitle.textContent = data.code;
    if (requirementsText) requirementsText.textContent = data.description;

    // Update requirements list
    if (requirementsList) {
      const reqs = data.requirements || defaultRequirements;
      requirementsList.innerHTML = reqs
        .map(function (req) {
          return `
          <div class="requirement-item">
            <span class="requirement-number">${req.num}</span>
            <div>
              <h3>${req.title}</h3>
              <p>${req.desc}</p>
            </div>
          </div>
        `;
        })
        .join("");
    }

    // ========== CTA SECTION ==========
    const ctaTitle = document.getElementById("ctaTitle");
    if (ctaTitle) ctaTitle.textContent = data.code + " Certification?";

    // ========== PAGE TITLE ==========
    document.title = data.code + " | QMSCERT";

    // Update URL without reload
    const url = new URL(window.location);
    url.searchParams.set("iso", isoKey);
    window.history.pushState({ iso: isoKey }, "", url);

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* =====================================================
       LOAD PAGE FROM URL
    ===================================================== */

  function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    const isoKey = params.get("iso");

    if (isoKey && isoData[isoKey]) {
      updateISOContent(isoKey);
    } else {
      // Default to 9001 if no valid iso parameter
      updateISOContent("9001");
    }
  }

  /* =====================================================
       HANDLE DROPDOWN LINKS
    ===================================================== */

  const isoLinks = document.querySelectorAll(
    ".dropdown-menu a[href*='ISO-Certifications.html?iso=']",
  );

  isoLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const url = new URL(link.href, window.location.href);
      const isoKey = url.searchParams.get("iso");

      if (isoKey === "all") {
        // Show all certifications - redirect to all page
        window.location.href = "ISO-Certifications.html?iso=all";
        return;
      }

      if (isoData[isoKey]) {
        updateISOContent(isoKey);
      }
    });
  });

  /* =====================================================
       HANDLE FOOTER LINKS
    ===================================================== */

  const footerLinks = document.querySelectorAll(
    ".footer-column a[href*='ISO-Certifications.html?iso=']",
  );

  footerLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const url = new URL(link.href, window.location.href);
      const isoKey = url.searchParams.get("iso");

      if (isoData[isoKey]) {
        updateISOContent(isoKey);
      }
    });
  });

  /* =====================================================
       BACK/ FORWARD BROWSER NAVIGATION
    ===================================================== */

  window.addEventListener("popstate", function (e) {
    if (e.state && e.state.iso) {
      updateISOContent(e.state.iso);
    } else {
      loadFromURL();
    }
  });

  /* =====================================================
       INITIAL LOAD
    ===================================================== */

  loadFromURL();

  console.log("ISO Certifications page loaded successfully!");
});
