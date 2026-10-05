// ── Edit your info here — every other page pulls from this one file ──
export const profile = {
  name: 'Sandra Márquez',
  initials: 'SM',
  tagline: 'Senior Biostatistician at ISGlobal (Barcelona Institute for Global Health)',
  location: 'Barcelona, Spain',

  // Contact — replace the placeholders in [brackets] with your real info
  email: 'smarquezdu@gmail.com',
  githubUser: 'sanmarquez',
  linkedin: 'https://www.linkedin.com/in/sandra-márquez-626424b7/',
  orcid: '0000-0001-7159-6495',
  domain: 'sanmarquez.github.io',

  // Set this to '/photo.jpg' once you add public/photo.jpg — see README.md
  photo: '/sandra_pilatus.jpg',

  bio: `I'm a mathematician with 9+ years in biostatistics and epidemiology — since 2018 as Senior Biostatistician
  at ISGlobal, supporting researchers in the Urban Planning, Environment and Health Over the Lifecourse programmes, with earlier work
  on HPV and head & neck cancer epidemiology at the Catalan Institute of Oncology. I'm now moving into data
  science, machine learning and applied AI, backed by a postgraduate specialization in Deep Learning & AI. I care
  about statistically sound methodology, reproducible pipelines, and machine learning that actually holds up on
  biomedical data.`,

  status: `transitioning from biostatistics into applied ML/AI for health & life sciences — building hands-on
  Docker/Git skills through portfolio projects. Open to collaboration and new opportunities.`,
};

export const skillCards = [
  {
    label: '01',
    title: 'Data Science & ML',
    body: 'Statistical modelling, applied machine learning, feature engineering and evaluation on real-world biomedical and environmental-health data.',
  },
  {
    label: '02',
    title: 'Health Data & Epidemiology',
    body: 'Urban planning, environment and health over the life course at ISGlobal; earlier HPV and head & neck cancer epidemiology at the Catalan Institute of Oncology.',
  },
  {
    label: '03',
    title: 'Scientific Software',
    body: "Python and R packages, reproducible pipelines, and well-documented research workflows — this is where I'm strongest. Comfortable with Git; building up Docker for deployment.",
  },
];

export const skillBars = [
  { label: 'Scientific Software', pct: 92, tag: 'core strength' },
  { label: 'Biostatistics', pct: 90, tag: 'core strength' },
  { label: 'Data Science & ML', pct: 75, tag: 'strong' },
  { label: 'Cloud & MLOps', pct: 35, tag: 'growing', warm: true },
];

export const interests = [
  { label: 'Computer Vision', on: true },
  { label: 'Machine Learning' },
  { label: 'Deep Learning' },
  { label: 'Epidemiology & Public Health' },
  { label: 'Clinical Research' },
  { label: 'Scientific Software & Reproducibility' },
];

export const experience = [
  {
    year: 'Apr 2018 – Present · 8+ yrs',
    title: 'Senior Biostatistician',
    sub: 'ISGlobal (Barcelona Institute for Global Health) — statistical support for the Urban Planning, Environment and Health programme; analyses on environment and health across the life course. Statistical consulting, machine learning. Greater Barcelona Metropolitan Area.',
  },
  {
    year: 'Jun 2017 – Mar 2018 · 10 mos',
    title: 'Statistical Technician',
    sub: 'Catalan Institute of Oncology (ICO) — Molecular Epidemiology and Genetics in Infections and Cancer Unit (CERP). Data management and statistical analysis for HPV and head & neck cancer studies; co-author of 3+ papers in oncology journals; taught statistical writing to Medicine PhD students and postdocs.',
  },
  {
    year: 'Oct 2016 – Jun 2017 · 9 mos',
    title: "Intern Student — Master's Thesis",
    sub: "ICO & Dept. of Mathematics, UPC · L'Hospitalet de Llobregat — developed a sensitivity-analysis algorithm for missing data in modeling age at diagnosis of HPV-related cancers.",
  },
];

export const academic = [
  {
    year: '2025-2026',
    title: 'Postgraduate in Artificial Intelligence with Deep Learning',
    sub: 'UPC School',
  },
  {
    year: '2016–2017',
    title: "Master's Thesis — Sensitivity analysis for missing data in HPV-related cancers",
    sub: 'Catalan Institute of Oncology (ICO) & Dept. of Mathematics, UPC · presented at XVI Conferencia Española de Biometría, Seville 2017',
  },
  {
    year: '2007-2014',
    title: 'Degree in Mathematics',
    sub: 'Universitat Politècnica de Catalunya (UPC)',
  },
];

export const projects = [
  {
    title: 'Flow Matching for Disease Progression in Medical Imaging',
    body: 'Final project, Postgraduate in AI with Deep Learning (UPC School). Learned a generative transformation from healthy to progressively-ill chest X-rays (PneumoniaMNIST) using Conditional Flow Matching over a VAE latent space — with team members Arnau Claramunt, Sergi Padrés and Albert Vidal, advised by Òscar Pina.',
    stack: ['PyTorch', 'VAE', 'Flow Matching'],
    href: 'https://github.com/sergipadres/Project-AIDL',
  },
  {
    title: 'Pooling Complex Mixture Models Across Multiple Imputations',
    body: "Reproducible R workflow for environmental-mixture analysis: Weighted Quantile Sum (WQS), quantile g-computation (qgcomp), and Bayesian Kernel Machine Regression (BKMR) fit on the same multiply-imputed data, with pooling matched to each method's nature — Rubin's rules with an explicit Barnard & Rubin (1999) degrees-of-freedom correction for the scalar WQS/qgcomp estimates, and direct pooling of posterior draws for BKMR's non-linear response surface — plus a side-by-side comparison across all three. Optional extension to Bayesian WQS via Stan.",
    stack: ['R', 'mice', 'gWQS', 'qgcomp', 'bkmr'],
    href: 'https://github.com/sanmarquez/mixtures-mi',
  },
  {
    title: 'Vectorized Health Micro-Simulation with Probabilistic Sensitivity Analysis',
    body: 'Synthetic showcase of a production health micro-simulation optimization: replacing per-person loops with vectorized matrix operations for a 100–300× speedup while preserving numerically identical results, wrapped in a probabilistic sensitivity-analysis layer using Latin Hypercube Sampling to report credible intervals — rather than single point estimates — for disease-transition outcomes.',
    stack: ['R', 'Monte Carlo · LHS', 'Quarto'],
    href: 'https://github.com/sanmarquez/health-microsim-optimization',
  },
];

export const languages = [
  { lang: 'Catalan', level: 'Native or bilingual proficiency' },
  { lang: 'Spanish', level: 'Native or bilingual proficiency' },
  { lang: 'English', level: 'Full professional proficiency' },
  { lang: 'German', level: 'Elementary proficiency' },
];

export const techSkills = [
  {
    title: 'Statistical Engineering',
    body: 'Advanced statistical modelling (GLM/GAM), multivariate analysis, and non-linear regression (splines, regularization). Multiple imputation and meta-analysis for real-world, incomplete biomedical and environmental data.',
  },
  {
    title: 'Advanced Data Science',
    body: 'End-to-end implementation of machine learning pipelines and deep learning architectures — CNNs, VAEs, GNNs, and PointNet — from data preparation through model validation.',
  },
  {
    title: 'Generative AI & Computer Vision',
    body: 'Research and development of variational autoencoders (VAE), latent space disentanglement, and spatial feature extraction for high-dimensional data, including medical imaging.',
  },
  {
    title: 'Federated Learning & Privacy',
    body: 'Federated analysis through DataSHIELD, enabling collaborative research across sensitive datasets without compromising individual privacy or data sovereignty.',
  },
  {
    title: 'Analytical Rigor',
    body: 'Applied critical thinking for model validation, hypothesis testing, and rigorous data interpretation in complex, real-world analytical environments.',
  },
  {
    title: 'R',
    body: 'My habitual, day-to-day language for statistical analysis and bioinformatics — particularly tidyverse and Bioconductor — with regular R/Python interoperability in analytical workflows.',
  },
  {
    title: 'Python',
    body: 'My primary language for building — data pipelines, machine learning and deep learning models, package development, and APIs. Regular use of pandas, polars, statsmodels, scikit-learn, PyTorch, TensorFlow.',
  },
  {
    title: 'Scientific Software & Reproducibility',
    body: 'Reproducible data pipelines, tests, code review, and computationally efficient workflows and analytical tools, using GitHub, Jupyter and R Markdown.',
  },
  {
    title: 'Linux, HPC & Infrastructure',
    body: 'Linux user across local, remote, and HPC systems. Work includes SLURM and Nextflow workflows, service automation, secure remote access, and lightweight server infrastructure.',
  },
];

// Detailed tool/technology matrix — rendered as grouped tag-clouds below the skill cards.
export const toolsMatrix = [
  {
    group: 'Programming & Core Data Science',
    subgroups: [
      { label: 'Languages', items: ['Python', 'R (Advanced)', 'C++', 'SQL (PostgreSQL, Oracle)', 'MATLAB', 'SAS', 'STATA'] },
      { label: 'Data Architecture', items: ['MLOps notions (Google Cloud)', 'Federated Analysis (DataSHIELD)', 'Docker'] },
      { label: 'Data Engineering (ETL)', items: ['Pandas', 'NumPy', 'dplyr/tidyr', 'MICE (Data Imputation)', 'SQL Developer'] },
    ],
  },
  {
    group: 'Advanced Modeling & Deep Learning',
    subgroups: [
      { label: 'Machine Learning', items: ['Scikit-learn', 'Caret', 'glmnet (Regularization)', 'mgcv (GAM/Non-linear)'] },
      { label: 'Deep Learning & GenAI', items: ['PyTorch', 'PyTorch Geometric', 'TensorFlow', 'Keras', 'VAEs (Latent Space)'] },
      { label: '3D & Geometric Learning', items: ['PointNet architectures', 'Torch Scatter/Cluster', 'k-NN Graphs'] },
    ],
  },
  {
    group: 'Visualization & Experiment Tracking',
    subgroups: [
      { label: 'Monitoring', items: ['Hyperparameter Tuning', 'TensorBoard (Real-time)', 'Weights & Biases (notions)'] },
      { label: 'Reporting', items: ['Shiny', 'R Markdown', 'Jupyter', 'Plotly', 'Folium', 'ggplot2', 'Matplotlib', 'Seaborn'] },
    ],
  },
  {
    group: 'Software Engineering & Workflow',
    subgroups: [
      { label: 'DevOps/Collaboration', items: ['Git/GitHub (Version Control)', 'Unit Testing', 'Markdown', 'Project Boards'] },
      { label: 'Environments', items: ['Linux', 'Windows', 'VS Code', 'Google Colab', 'Kaggle API (Large-scale data management)'] },
      { label: 'Scientific Publishing', items: ['LaTeX', 'Microsoft Office Suite (Excel/Access Advanced)'] },
    ],
  },
];

export const postgradCoursework = [
  {
    track: 'Deep Learning',
    topics: [
      'Intro to machine learning', 'Backpropagation training', 'The perceptron',
      'Softmax & multilayer perceptron', 'Losses', 'Convolutional neural networks (CNN)',
      'Interpretability', 'Optimization', 'Methodology',
      'Graph convolutional networks & recommender systems',
    ],
  },
  {
    track: 'Natural Language Processing',
    topics: [
      'Recurrent neural networks (RNN)', 'Attention', 'Transformers',
      'Text processing', 'Word embeddings', 'Language models & advanced adaptations',
    ],
  },
  {
    track: 'Computer Vision',
    topics: [
      'Transfer learning', 'Self-supervised & autoregressive models', 'Metrics & recovery',
      'Video architectures', 'Object detection', 'Segmentation',
      'Variational autoencoders (VAE)', 'GANs & diffusion',
    ],
  },
  {
    track: 'Advanced Applications',
    topics: [
      '3D reconstruction', 'Anomaly detection with VAE', 'Generative model applications', 'Video',
      'Reinforcement learning (Q-learning, policy gradient)', 'Cloud computing & APIs', 'Docker',
    ],
  },
];

export const publications = [
  {
    text: 'Co-author. Association between the urban environment, parents related concerns and perceptions, and childhood obesity and lifestyle in Barcelona, Spain. HEALTH & PLACE',
    meta: '2026 · DOI: 10.1016/J.HEALTHPLACE.2026.103655',
    link: 'https://www.sciencedirect.com/science/article/pii/S135382922600050X?via%3Dihub',
  },
  {
    text: 'Co-author. Childhood outdoor air pollution exposure across multiple microenvironments and metabolic syndrome: A HELIX cohort analysis. ENVIRONMENTAL RESEARCH.',
    meta: '2026 · DOI: 10.1016/j.envres.2026.124892',
    link: 'https://www.sciencedirect.com/science/article/pii/S0013935126012235?via%3Dihub',
  },
  {
    text: 'Co-author. Prenatal Exposure to Mixtures of Nonpersistent Endocrine-Disrupting Chemicals and Angiogenic Biomarkers, Placental Function, and Fetal Growth. ENVIRONMENTAL SCIENCE & TECHNOLOGY.',
    meta: '2026 · DOI: 10.1021/acs.est.5c13234',
    link: 'https://pubs.acs.org/esthag/article/60/11/8339/5083529/Prenatal-Exposure-to-Mixtures-of-Nonpersistent',
  },
  {
    text: 'Co-author. Urban exposome and sleep and overweight/obesity outcomes in European adolescents. ENVIRONMENTAL RESEARCH.',
    meta: '2026 · DOI: 10.1016/j.envres.2026.125568',
    link: 'https://www.sciencedirect.com/science/article/pii/S0013935126018992?via%3Dihub',
  },
  {
    text: 'Co-author. Dietary patterns and exposure to non-persistent endocrine-disrupting chemicals during pregnancy. ENVIRONMENT INTERNATIONAL.',
    meta: '2026 · DOI: 10.1016/j.envint.2025.109612',
    link: 'https://www.sciencedirect.com/science/article/pii/S0160412025003630?via%3Dihub',
  },
  {
    text: 'Co-author. Prenatal and childhood exposure to mixtures of environmental chemicals and adolescence attentional problems: a triangulation study. ENVIRONMENT INTERNATIONAL.',
    meta: '2026 · DOI: 10.1016/j.envint.2025.109927',
    link: 'https://www.sciencedirect.com/science/article/pii/S0160412025006786?via%3Dihub',
  },
  {
    text: 'Principal author: Márquez, S. Exploring the effect of non-response in modeling the age at diagnosis in HPV-related cancers.',
    meta: '2017 · XVI Conferencia Española de Biometría, Seville · conference presentation',
    link: '',
  },
];
