import { TemplateProps } from "@/types/TemplateProps";

const projectData: TemplateProps[] = [
  {
    title: 'Online Grocery Shopping Service for the Visually Impaired',
    url: 'https://github.com/boostcampaitech7/level4-nlp-finalproject-hackathon-nlp-05-lv3',
    from: 'boostcamp AI Tech 7th',
    period: 'Jan. 2025 - Feb. 2025',
    role: '(Team Leader) LLM Fine-Tuning, Object Detection Fine-Tuning, UI/UX Design, React Native & Spring Development',
    description: [
      'Developed a service to refine product information into accessible textual descriptions for visually impaired users',
      'Built an object detection model for products and reference objects to describe product sizes accurately',
      'Applied prompt engineering and parameter-efficient fine-tuning on the Deepseek-R1 Distilled LLM (Qwen)',
      'Achieved 95% accuracy in size description and the best performance with fine-tuned LLM (F1-score: 0.7508)',
      'Accomplished top usability score (4.6/5.0) from testing with 7 visually impaired users, outperforming existing platforms',
    ],
  },
  {
    title: 'Korean Legal QA Chatbot Service',
    url: 'https://github.com/byeonhophd',
    from: '1st AI Chip Contest',
    period: 'Aug. 2024 - Dec. 2024',
    role: 'Data Collection & Preprocessing, LLM Fine-Tuning, React & Django Development',
    description: [
      'Developed a legal support chatbot service using sub-10.8B parameter sLLM on NPU servers',
      'Implemented RAG with Korean statutes and case law for evidence-based Q&A, legal search, and sentence prediction',
	    'Achieved an average Time to First Token (TTFT) of 2.5 seconds per round, enabling robust multi-turn interactions',
	    'Improved explicitness by 21%p and relevance by 45%p over existing services, based on lawyer evaluations'
    ],
  },
  {
    title: 'Sleep, Emotion, and Stress Recognition and Inference Using Lifelog Data',
    url: 'https://github.com/jin-jae/ETRI-Paper-Contest',
    from: '3rd ETRI Human Understanding AI Paper Contest',
    period: 'May. 2024 - Oct. 2024',
    role: '(Team Leader) Data Analysis & Preprocessing, Time-Series Deep Learning Modeling, First Author of Conference Paper',
    description: [
      'Utilized lifelog data to recognize and infer sleep patterns, emotional states, and stress indicators',
      'Applied time-series regression model and multi-output classifier based on data-driven analysis',
      'Achieved 2nd place in the final private leaderboard (F1-score) with a robust predictive model',
      'Published and presented a first-author paper at ICTC conference (Kim et al., 2024)'
    ],
  },
  {
    title: 'Real-Time Spatial Trend Analysis Service',
    url: 'https://github.com/kookmin-sw/capstone-2023-22',
    from: 'Interdisciplinary Capstone Design',
    period: 'Jan. 2023 - Jun. 2023',
    role: '(Team Leader) UI/UX Design, Project Management, React Native Development, DevOps',
    description: [
      'Developed a service to address crowd congestion by providing real-time crowd density information for major locations',
	    'Delivered spatial trend rankings and popular keywords based on user-uploaded posts',
	    'Built and demonstrated a prototype of the “Sesohaeng” application',
	    'Selected as a presenter at the Capstone Excellence Conference and awarded the Encouragement Prize'
    ],
  },
  {
    title: 'Criminal Composite Generator Service',
    url: 'https://github.com/face-gram',
    from: 'GDSC Solution Challenge 2023',
    period: 'Jan. 2023 - Apr. 2023',
    role: 'UI/UX Design, Frontend Development, DevOps',
    description: [
      'Developed “Facegram”, a Korean composite sketch generation service for criminals and missing children',
	    'Built facial image generation and storage functionality with customizable attributes',
	    'Led UI/UX design, frontend development, and DevOps implementation from concept to prototype demonstration',
	    'Gained comprehensive experience in full-stack IT service development from initial development through deployment'
    ],
  },
];

export default projectData;