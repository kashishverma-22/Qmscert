document.addEventListener("DOMContentLoaded", function () {
  /* =====================================================
       COMPLIANCE DATA
    ===================================================== */

  const complianceData = {
    gmp: {
      code: "GMP",
      title: "Good Manufacturing Practice",
      icon: "fa-solid fa-prescription-bottle-medical",
      shortTitle: "GMP Certificate",
      description:
        "GMP certification ensures that products are consistently produced and controlled according to quality standards. It minimizes risks involved in production that cannot be eliminated through testing the final product.",
      benefits: [
        "Ensure product quality & safety",
        "Meet regulatory requirements",
        "Reduce production risks",
        "Build customer confidence",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-shield-halved",
          title: "Quality Assurance",
          desc: "Ensure consistent quality and safety of products and services.",
        },
        {
          icon: "fa-solid fa-gavel",
          title: "Regulatory Compliance",
          desc: "Meet national and international regulatory requirements.",
        },
        {
          icon: "fa-solid fa-user-shield",
          title: "Consumer Protection",
          desc: "Protect consumers with safe and reliable products.",
        },
        {
          icon: "fa-solid fa-globe",
          title: "Global Recognition",
          desc: "Build credibility in domestic and international markets.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "Quality Management",
          desc: "Establish robust quality management systems and procedures.",
        },
        {
          num: "02",
          title: "Documentation",
          desc: "Maintain proper documentation and record keeping systems.",
        },
        {
          num: "03",
          title: "Process Controls",
          desc: "Implement effective process controls and quality checks.",
        },
        {
          num: "04",
          title: "Continual Improvement",
          desc: "Monitor performance and continuously improve compliance.",
        },
      ],
    },

    ce: {
      code: "CE",
      title: "CE Marking",
      icon: "fa-solid fa-circle-check",
      shortTitle: "CE Marking",
      description:
        "CE Marking indicates that a product complies with EU safety, health and environmental protection requirements. It is mandatory for products sold in the European Economic Area.",
      benefits: [
        "Access EU markets",
        "Meet safety standards",
        "Build customer trust",
        "Ensure product compliance",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-europe",
          title: "Market Access",
          desc: "Access the European market with CE certification.",
        },
        {
          icon: "fa-solid fa-shield-halved",
          title: "Safety Compliance",
          desc: "Meet EU safety and health requirements.",
        },
        {
          icon: "fa-solid fa-handshake",
          title: "Customer Trust",
          desc: "Build trust with European customers.",
        },
        {
          icon: "fa-solid fa-file-lines",
          title: "Regulatory Compliance",
          desc: "Comply with EU regulations and directives.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "Product Assessment",
          desc: "Assess product conformity with EU requirements.",
        },
        {
          num: "02",
          title: "Technical Documentation",
          desc: "Prepare and maintain technical documentation.",
        },
        {
          num: "03",
          title: "Conformity Declaration",
          desc: "Issue EU Declaration of Conformity.",
        },
        {
          num: "04",
          title: "CE Marking",
          desc: "Affix CE marking on compliant products.",
        },
      ],
    },

    haccp: {
      code: "HACCP",
      title: "HACCP Certification",
      icon: "fa-solid fa-bowl-food",
      shortTitle: "HACCP Certification",
      description:
        "HACCP (Hazard Analysis and Critical Control Points) is a systematic approach to food safety that identifies, evaluates and controls hazards throughout the food production process.",
      benefits: [
        "Ensure food safety",
        "Control food hazards",
        "Meet regulatory requirements",
        "Build consumer confidence",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-apple",
          title: "Food Safety",
          desc: "Ensure safe food production and handling.",
        },
        {
          icon: "fa-solid fa-microscope",
          title: "Hazard Control",
          desc: "Identify and control food safety hazards.",
        },
        {
          icon: "fa-solid fa-people-group",
          title: "Consumer Trust",
          desc: "Build trust with consumers and regulators.",
        },
        {
          icon: "fa-solid fa-file-lines",
          title: "Compliance",
          desc: "Meet food safety regulatory requirements.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "Hazard Analysis",
          desc: "Identify and analyze potential food safety hazards.",
        },
        {
          num: "02",
          title: "Critical Control Points",
          desc: "Establish critical control points in production.",
        },
        {
          num: "03",
          title: "Monitoring",
          desc: "Monitor and control CCPs effectively.",
        },
        {
          num: "04",
          title: "Corrective Actions",
          desc: "Implement corrective actions when needed.",
        },
      ],
    },

    kosher: {
      code: "Kosher",
      title: "Kosher Certificate",
      icon: "fa-solid fa-award",
      shortTitle: "Kosher Certificate",
      description:
        "Kosher certification ensures that food products meet Jewish dietary laws (Kashrut). It is a mark of quality and purity recognized by consumers worldwide.",
      benefits: [
        "Access kosher markets",
        "Build consumer trust",
        "Ensure product purity",
        "Meet religious requirements",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-star",
          title: "Kosher Compliance",
          desc: "Meet Jewish dietary law requirements.",
        },
        {
          icon: "fa-solid fa-globe",
          title: "Global Market",
          desc: "Access kosher markets worldwide.",
        },
        {
          icon: "fa-solid fa-handshake",
          title: "Consumer Trust",
          desc: "Build trust with kosher consumers.",
        },
        {
          icon: "fa-solid fa-shield",
          title: "Quality Assurance",
          desc: "Ensure product quality and purity.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "Ingredient Review",
          desc: "Review all ingredients for kosher compliance.",
        },
        {
          num: "02",
          title: "Production Process",
          desc: "Ensure kosher production processes.",
        },
        {
          num: "03",
          title: "Facility Inspection",
          desc: "Inspect facilities for kosher standards.",
        },
        {
          num: "04",
          title: "Certification",
          desc: "Issue kosher certification for products.",
        },
      ],
    },

    rohs: {
      code: "RoHS",
      title: "RoHS Compliance",
      icon: "fa-solid fa-microchip",
      shortTitle: "RoHS Compliance",
      description:
        "RoHS (Restriction of Hazardous Substances) compliance restricts the use of specific hazardous materials in electrical and electronic products to protect human health and the environment.",
      benefits: [
        "Reduce hazardous substances",
        "Meet regulatory requirements",
        "Protect environment",
        "Build customer trust",
      ],
      benefitCards: [
        {
          icon: "fa-solid fa-recycle",
          title: "Environmental Safety",
          desc: "Protect the environment from hazardous substances.",
        },
        {
          icon: "fa-solid fa-shield",
          title: "Health Protection",
          desc: "Protect human health and safety.",
        },
        {
          icon: "fa-solid fa-globe",
          title: "Global Compliance",
          desc: "Meet global RoHS requirements.",
        },
        {
          icon: "fa-solid fa-handshake",
          title: "Customer Trust",
          desc: "Build trust with environmentally conscious customers.",
        },
      ],
      requirements: [
        {
          num: "01",
          title: "Substance Testing",
          desc: "Test products for restricted substances.",
        },
        {
          num: "02",
          title: "Documentation",
          desc: "Maintain compliance documentation.",
        },
        {
          num: "03",
          title: "Supplier Compliance",
          desc: "Ensure supplier RoHS compliance.",
        },
        {
          num: "04",
          title: "Certification",
          desc: "Obtain RoHS compliance certification.",
        },
      ],
    },
  };

  // Default values for fallback
  const defaultBenefits = [
    "Ensure product quality & safety",
    "Meet regulatory requirements",
    "Reduce production risks",
    "Build customer confidence",
  ];

  const defaultBenefitCards = [
    {
      icon: "fa-solid fa-shield-halved",
      title: "Quality Assurance",
      desc: "Ensure consistent quality and safety of products and services.",
    },
    {
      icon: "fa-solid fa-gavel",
      title: "Regulatory Compliance",
      desc: "Meet national and international regulatory requirements.",
    },
    {
      icon: "fa-solid fa-user-shield",
      title: "Consumer Protection",
      desc: "Protect consumers with safe and reliable products.",
    },
    {
      icon: "fa-solid fa-globe",
      title: "Global Recognition",
      desc: "Build credibility in domestic and international markets.",
    },
  ];

  const defaultRequirements = [
    {
      num: "01",
      title: "Quality Management",
      desc: "Establish robust quality management systems and procedures.",
    },
    {
      num: "02",
      title: "Documentation",
      desc: "Maintain proper documentation and record keeping systems.",
    },
    {
      num: "03",
      title: "Process Controls",
      desc: "Implement effective process controls and quality checks.",
    },
    {
      num: "04",
      title: "Continual Improvement",
      desc: "Monitor performance and continuously improve compliance.",
    },
  ];

  /* =====================================================
       UPDATE PAGE CONTENT
    ===================================================== */

  function updateComplianceContent(typeKey) {
    const data = complianceData[typeKey];

    if (!data) {
      updateComplianceContent("gmp");
      return;
    }

    // ========== HERO SECTION ==========
    const heroTitle = document.getElementById("heroTitle");
    const heroDesc = document.getElementById("heroDescription");
    const breadcrumbTitle = document.getElementById("breadcrumbTitle");

    if (heroTitle) heroTitle.textContent = data.shortTitle;
    if (heroDesc) heroDesc.textContent = data.description;
    if (breadcrumbTitle) breadcrumbTitle.textContent = data.shortTitle;

    // ========== OVERVIEW SECTION ==========
    const overviewTitle = document.getElementById("overviewTitle");
    const overviewText = document.getElementById("overviewText");
    const benefitsList = document.getElementById("benefitsList");

    if (overviewTitle) {
      const span = overviewTitle.querySelector("span");
      if (span) {
        overviewTitle.childNodes[0].textContent = data.shortTitle + " ";
        span.textContent = data.title;
      }
    }

    if (overviewText) overviewText.textContent = data.description;

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
    const certName = document.getElementById("certificateName");
    const certStandard = document.getElementById("certificateStandard");
    const certDesc = document.getElementById("certificateDesc");

    if (certName) certName.textContent = data.code;
    if (certStandard) certStandard.textContent = data.title;
    if (certDesc) certDesc.textContent = data.title + " Compliance";

    // ========== BENEFITS SECTION ==========
    const benefitHeading = document.getElementById("benefitHeading");
    const benefitDescription = document.getElementById("benefitDescription");
    const benefitsCards = document.getElementById("benefitsCards");

    if (benefitHeading)
      benefitHeading.textContent = data.shortTitle + " Compliance";
    if (benefitDescription) benefitDescription.textContent = data.description;

    if (benefitsCards) {
      const cards = data.benefitCards || defaultBenefitCards;
      benefitsCards.innerHTML = cards
        .map(function (card) {
          return `
          <div class="compliance-benefit-card">
            <div class="compliance-benefit-icon">
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
    if (ctaTitle) ctaTitle.textContent = data.shortTitle + " Compliance?";

    // ========== PAGE TITLE ==========
    document.title = data.shortTitle + " | QMSCERT";

    // Update URL without reload
    const url = new URL(window.location);
    url.searchParams.set("type", typeKey);
    window.history.pushState({ type: typeKey }, "", url);

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* =====================================================
       LOAD PAGE FROM URL
    ===================================================== */

  function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    const typeKey = params.get("type");

    if (typeKey && complianceData[typeKey]) {
      updateComplianceContent(typeKey);
    } else {
      updateComplianceContent("gmp");
    }
  }

  /* =====================================================
       HANDLE DROPDOWN LINKS
    ===================================================== */

  const complianceLinks = document.querySelectorAll(
    ".dropdown-menu a[href*='compliance.html?type=']",
  );

  complianceLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const url = new URL(link.href, window.location.href);
      const typeKey = url.searchParams.get("type");

      if (typeKey === "all") {
        window.location.href = "compliance.html?type=all";
        return;
      }

      if (complianceData[typeKey]) {
        updateComplianceContent(typeKey);
      }
    });
  });

  /* =====================================================
       HANDLE FOOTER LINKS
    ===================================================== */

  const footerLinks = document.querySelectorAll(
    ".footer-column a[href*='compliance.html?type=']",
  );

  footerLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const url = new URL(link.href, window.location.href);
      const typeKey = url.searchParams.get("type");

      if (complianceData[typeKey]) {
        updateComplianceContent(typeKey);
      }
    });
  });

  /* =====================================================
       BACK/ FORWARD BROWSER NAVIGATION
    ===================================================== */

  window.addEventListener("popstate", function (e) {
    if (e.state && e.state.type) {
      updateComplianceContent(e.state.type);
    } else {
      loadFromURL();
    }
  });

  /* =====================================================
       INITIAL LOAD
    ===================================================== */

  loadFromURL();

  console.log("Compliance page loaded successfully!");
});
