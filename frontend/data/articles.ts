export interface Article {
  id: string;
  title: string;
  summary: string;
  content?: string;
  imageUrl: string;
  sourceUrl: string;
  sourceName: string;
  category: string;
  readTime: string;
  publishedDate: string;
}

export const articles: Article[] = [
  {
    id: "what-is-asd",
    title: "What is Autism Spectrum Disorder (ASD)?",
    summary: "Autism Spectrum Disorder (ASD) is a developmental condition that affects how people perceive and interact with the world around them. It's called a 'spectrum' because it affects individuals differently and to varying degrees. Some people with autism may need significant support in their daily lives, while others may need less support and, in some cases, live entirely independently. ASD is characterized by differences in social communication, sensory processing, and patterns of behavior or interests. Early identification and understanding can make a significant difference in supporting individuals with autism to reach their full potential. Research shows that with the right support and understanding, people with autism can lead fulfilling, meaningful lives.",
    imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop",
    sourceUrl: "https://www.cdc.gov/autism/",
    sourceName: "CDC - Centers for Disease Control and Prevention",
    category: "Understanding ASD",
    readTime: "5 min read",
    publishedDate: "January 15, 2026"
  },
  {
    id: "early-signs",
    title: "Early Signs of Autism in Children",
    summary: "Recognizing early signs of autism can help families access support sooner. Learn about the developmental milestones and behaviors to watch for in young children.",
    imageUrl: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&auto=format&fit=crop",
    sourceUrl: "https://www.autismspeaks.org/signs-autism",
    sourceName: "Autism Speaks",
    category: "Early Detection",
    readTime: "4 min read",
    publishedDate: "January 10, 2026"
  },
  {
    id: "supporting-your-child",
    title: "Supporting Your Child with Autism at Home",
    summary: "Practical strategies and tips for creating a supportive, nurturing environment for children with autism. From routines to sensory-friendly spaces.",
    imageUrl: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&auto=format&fit=crop",
    sourceUrl: "https://www.autism.org/",
    sourceName: "Autism Research Institute",
    category: "Family Support",
    readTime: "6 min read",
    publishedDate: "January 8, 2026"
  },
  {
    id: "therapy-options",
    title: "Therapy and Intervention Options for ASD",
    summary: "An overview of evidence-based therapies and interventions that can support individuals with autism, including speech therapy, occupational therapy, and behavioral approaches.",
    imageUrl: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&auto=format&fit=crop",
    sourceUrl: "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd",
    sourceName: "National Institute of Mental Health",
    category: "Treatment",
    readTime: "7 min read",
    publishedDate: "January 5, 2026"
  },
  {
    id: "sensory-processing",
    title: "Understanding Sensory Processing in Autism",
    summary: "Many individuals with autism experience sensory differences. Learn how sensory processing affects daily life and strategies to create sensory-friendly environments.",
    imageUrl: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&auto=format&fit=crop",
    sourceUrl: "https://www.autism.org/sensory-processing/",
    sourceName: "Autism Research Institute",
    category: "Sensory",
    readTime: "5 min read",
    publishedDate: "January 3, 2026"
  },
  {
  id: "level-1",
  title: "ASD Level 1: Requiring Support",
  summary: "ASD Level 1 is often described as autism that requires support. Individuals may experience challenges with social communication, flexibility, and sensory sensitivities, but they can usually function independently with appropriate guidance and accommodations.",
  content: "Individuals with ASD Level 1 may have difficulty initiating social interactions, understanding social cues, or adapting to changes in routine. They often benefit from structured environments, social skills training, and supportive communication strategies. With early intervention and understanding, many people at this level lead independent and fulfilling lives.",
  imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&auto=format&fit=crop",
  sourceUrl: "https://www.cdc.gov/autism/diagnosis/levels.html",
  sourceName: "CDC - Autism Support Levels",
  category: "ASD Levels",
  readTime: "5 min read",
  publishedDate: "January 20, 2026"
},
{
  id: "level-2",
  title: "ASD Level 2: Requiring Substantial Support",
  summary: "ASD Level 2 involves more noticeable challenges in communication and behavior. Individuals often require substantial support to manage daily activities and social interactions.",
  content: "People with ASD Level 2 may show limited verbal communication, difficulty coping with change, and repetitive behaviors that interfere with daily life. Support may include behavioral therapy, speech therapy, visual schedules, and consistent routines to help reduce anxiety and improve functional skills.",
  imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop",
  sourceUrl: "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd",
  sourceName: "National Institute of Mental Health",
  category: "ASD Levels",
  readTime: "6 min read",
  publishedDate: "January 20, 2026"
},
{
  id: "level-3",
  title: "ASD Level 3: Requiring Very Substantial Support",
  summary: "ASD Level 3 represents the highest support needs. Individuals may have severe difficulties with communication and behavior that significantly impact daily functioning.",
  content: "Individuals with ASD Level 3 may have minimal verbal communication, intense sensory sensitivities, and a strong need for routine. Comprehensive support often includes intensive behavioral interventions, assistive communication tools, and continuous caregiver involvement to support safety, communication, and quality of life.",
  imageUrl: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?w=800&auto=format&fit=crop",
  sourceUrl: "https://www.autismspeaks.org/autism-levels",
  sourceName: "Autism Speaks",
  category: "ASD Levels",
  readTime: "7 min read",
  publishedDate: "January 20, 2026"
}

];
