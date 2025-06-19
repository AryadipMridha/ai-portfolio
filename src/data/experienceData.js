// src/data/experienceData.js
export const experienceData = [
  {
    id: 1,
    title: 'Lead ML Engineer',
    period: 'Jan 2024 - Present',
    institution: 'Innovatech Solutions Inc.',
    details: [
      'Leading LLM Ops and deployment strategies for enterprise clients.',
      'Developing scalable CV models for industrial automation.',
      'Mentoring junior engineers in NLP best practices.',
    ],
    isLeft: true, // For timeline layout
  },
  {
    id: 2,
    title: 'Data Scientist Intern',
    period: 'May 2023 - Dec 2023',
    institution: 'AI Forward Labs',
    details: [
      'Worked on sentiment analysis models using NLP techniques.',
      'Assisted in data preprocessing and feature engineering for CV projects.',
      'Contributed to R&D in few-shot learning for LLMs.',
    ],
    isLeft: false,
  },
  // Add more experience items as needed, alternating isLeft
];