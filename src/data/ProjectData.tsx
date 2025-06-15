import { ExperienceProps } from "@/types/ExperienceProps";

const experienceData: ExperienceProps[] = [
  {
    title: 'Online Grocery Shopping Service for the Visually Impaired',
    from: 'Boostcamp AI Tech 7th',
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
];

export default experienceData;