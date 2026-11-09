// Edit the project records and timeline below. Keep confidential material out of this file.
const portfolio = {
  "projects": [
    {
      "id": "land-speed",
      "category": "Professional",
      "title": "Land speed record vehicle",
      "summary": "Composite bodywork, aerodynamic load transfer and door hardware for a confidential client.",
      "role": "I built finite element meshes for CFRP bodywork and chassis structures in HyperMesh, ran OptiStruct analyses and interpreted the results. My scope was modelling, simulation and assessment. The final reports were handled separately.",
      "method": "I used quadrilateral shell elements for the composite bodywork, shell models for the chassis frame and shared nodes at selected interfaces. I implemented the supplied laminate schedules and assessed the layups against a Tsai–Hill failure criterion. I converted spreadsheet pressures to consistent units, mapped them to the structural mesh and checked summed loads against the supplied resultants.",
      "outcome": "The work supported a separate design iteration on the door hardware, including changes to local section thickness and fastener sizing.",
      "media": {
        "src": "",
        "alt": "",
        "caption": "Visual material withheld pending disclosure review."
      }
    },
    {
      "id": "uav",
      "category": "Professional",
      "title": "UAV mass properties & flight simulation",
      "summary": "Python studies of tank depletion strategies and the effect of disturbances on flight paths.",
      "role": "I defined the engineering cases, reviewed the Python implementation and checked the outputs. AI assisted with writing the code. I also supported physical centre-of-gravity checks in the workshop.",
      "method": "One tool compared fuel drawdown sequences across multiple tanks against a defined centre-of-gravity tolerance. Two separate trajectory tools addressed different questions. The deterministic model let the user choose which disturbances to apply. The Monte Carlo model sampled variable conditions to study the spread of trajectories.",
      "outcome": "The workflow made it possible to compare fuel strategies and separate the effect of a chosen disturbance from the combined variability across runs.",
      "media": {
        "src": "",
        "alt": "",
        "caption": "Visual material withheld pending disclosure review."
      }
    },
    {
      "id": "lmh",
      "category": "Academic",
      "title": "Le Mans Hypercar chassis & impact",
      "summary": "An LS-DYNA group design project at Cranfield University.",
      "role": "I developed the frontal impact absorbing structure (FIAS) after studying several concepts, built LS-DYNA models and ran crash simulations as part of a Cranfield team project.",
      "method": "The team assessed the simulated response against the applicable FIA requirements as part of the academic study. I also created the vehicle renders from a CAD model made by a teammate.",
      "outcome": "",
      "media": {
        "src": "./assets/lmh-render.jpg",
        "alt": "Side view render of the team's Le Mans Hypercar concept.",
        "caption": "Vehicle render by Sergi Roures Vives · CAD model by a project teammate."
      }
    },
    {
      "id": "heave",
      "category": "Academic",
      "title": "Variable heave for ground-effect cars",
      "summary": "MSc thesis on mechanical packaging, ride-height control and porpoising.",
      "role": "I developed mechanical linkage concepts and hydraulic actuation layouts for a variable heave system.",
      "method": "The thesis examined how changing the heave response could help manage porpoising while preserving useful ride-height control. I considered linkage kinematics and the space available for the mechanism and actuators.",
      "outcome": "",
      "media": {
        "src": "",
        "alt": "",
        "caption": "Image slot · thesis linkage drawing or own kinematic sketch."
      }
    },
    {
      "id": "boltcheck",
      "category": "Tools",
      "title": "BoltCheck",
      "summary": "A browser-based tool for screening and examining bolted joints.",
      "role": "I developed the tool separately and iterated it through v11, adding a more detailed joint verification workflow and coverage of thread-related inputs.",
      "method": "A colleague’s spreadsheet informed parts of the calculation approach. My contribution is the implementation and the design of the tool’s workflow.",
      "outcome": "",
      "media": {
        "src": "",
        "alt": "",
        "caption": "Image slot · cleared screenshot using synthetic inputs."
      }
    },
    {
      "id": "formula-student",
      "category": "Team",
      "title": "Formula Student at UPC",
      "summary": "Bodywork CAD, suspension checks and composite manufacturing with BCN eMotorsports.",
      "role": "I refined nosecone surfaces in SolidWorks, contributed to suspension geometry checks and supported composite manufacture through surface preparation, layup and carbon fibre quality checks.",
      "method": "",
      "outcome": "",
      "media": {
        "src": "",
        "alt": "",
        "caption": "Image slot · approved team workshop photograph."
      }
    },
    {
      "id": "formula-ford",
      "category": "Workshop",
      "title": "1990s Formula Ford",
      "summary": "A group restoration at Cranfield University.",
      "role": "I worked on the teardown, inspection and rebuild for Cranfield’s 25th Motorsport MSc anniversary showcase.",
      "method": "",
      "outcome": "",
      "media": {
        "src": "",
        "alt": "",
        "caption": "Image slot · workshop photograph from the rebuild."
      }
    },
    {
      "id": "seat-600",
      "category": "Workshop",
      "title": "1962 SEAT 600",
      "summary": "An ongoing father-and-son restoration in Barcelona.",
      "role": "We are working through the mechanical and cosmetic restoration together, weighing originality against changes that make sense for the car.",
      "method": "",
      "outcome": "",
      "media": {
        "src": "",
        "alt": "",
        "caption": "Image slot · personal before-and-after photographs."
      }
    },
    {
      "id": "cad",
      "category": "Personal",
      "title": "1:5 scale RC F1 suspension",
      "summary": "Bachelor’s thesis on suspension design for a scale RC F1 car.",
      "role": "My bachelor’s thesis focused on the design of a suspension for a 1:5 scale RC F1 car.",
      "method": "",
      "outcome": "",
      "media": {
        "src": "",
        "alt": "",
        "caption": "Image slot · original RC CAD or suspension details."
      }
    },
    {
      "id": "personal-design",
      "category": "Personal",
      "title": "Designed, analysed, printed",
      "summary": "Personal 3D-printed projects developed from my own ideas.",
      "role": "I design many of my own printed parts from scratch and analyse them before making them. They are a way to turn an idea into a physical object and explore how it works.",
      "method": "",
      "outcome": "",
      "media": {
        "src": "",
        "alt": "",
        "caption": "Image slot · personal designs and prints."
      }
    }
  ],
  "timeline": [
    {
      "dates": "Jul 2025 – Present",
      "title": "Graduate Stress Engineer",
      "organisation": "MGI Engineering · Witney, UK",
      "description": "Metallic and composite structural analysis, load cases and design iteration using HyperMesh, OptiStruct and Siemens NX."
    },
    {
      "dates": "Feb 2023 – Sep 2025",
      "title": "Dual MSc programme",
      "organisation": "Cranfield University & UPC Barcelona",
      "description": "Advanced Motorsport Engineering at Cranfield and Industrial Engineering, specialising in Mechanics, at UPC."
    },
    {
      "dates": "Dec 2022 – Dec 2023",
      "title": "Automotive Assistant",
      "organisation": "Rennsport Taller Porsche · Barcelona",
      "description": "PIWIS diagnostics, mechanical maintenance and support for track preparation."
    },
    {
      "dates": "Feb – Sep 2022",
      "title": "Erasmus exchange",
      "organisation": "Karlsruhe Institute of Technology",
      "description": "Industrial engineering coursework in German and English."
    },
    {
      "dates": "Sep 2020 – Feb 2021",
      "title": "Calculus I Engineering Tutor",
      "organisation": "Academia Ceus · Barcelona",
      "description": "Taught calculus and MATLAB to industrial engineering students."
    },
    {
      "dates": "Sep 2017 – Sep 2022",
      "title": "BSc in Industrial / Mechanical Engineering",
      "organisation": "UPC Barcelona · ETSEIB",
      "description": "Bachelor’s thesis on suspension design for a 1:5 scale RC F1 car."
    }
  ]
};
