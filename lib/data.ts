export type Opportunity = {
  id: string
  type: string
  title: string
  organization: string
  description: string
  details: string
  tags: string[]
  why: string[]
  deadline: string
  deadlineLabel: string
  urgency?: string
  commitment: string
  location: string
  compensation: string
  eligibility: string
  source: string
  sourceUrl: string
  score: number
  accent: string
}

export const interests = ['Artificial Intelligence', 'Data Science', 'Product Management', 'Entrepreneurship', 'Consulting', 'Finance', 'Design', 'Robotics', 'Psychology', 'Healthcare', 'Sustainability', 'Public Policy']
export const types = ['Research', 'Hackathon', 'Club', 'Event', 'Campus Job', 'Fellowship', 'Competition', 'Workshop']

export const opportunities: Opportunity[] = [
  { id: 'human-ai', type: 'Research', title: 'Undergraduate Human–AI Research Assistant', organization: 'Human-Computer Interaction Institute', description: 'Study how people interact with generative AI and help shape the next generation of creative tools.', details: 'The HCII is looking for an undergraduate research assistant to support a mixed-methods study on trust and interaction patterns in generative AI. You’ll work closely with a graduate mentor, contribute to weekly lab meetings, and help turn findings into a publishable paper.', tags: ['AI / ML', 'HCI', 'Python', 'Research'], why: ['AI interest', 'Research preference', 'Python skill match'], deadline: 'Sep 12', deadlineLabel: 'September 12, 2024', urgency: '12 days left', commitment: '8–10 hrs / week', location: 'Pittsburgh, PA · Hybrid', compensation: 'Academic credit or hourly research stipend', eligibility: 'Open to undergraduate students with an interest in human-computer interaction, psychology, computer science, or a related field.', source: 'Human-Computer Interaction Institute', sourceUrl: 'https://www.hcii.cmu.edu/', score: 92, accent: 'peach' },
  { id: 'founders', type: 'Fellowship', title: 'Founders Fellowship — Fall Cohort', organization: 'Swartz Center for Entrepreneurship', description: 'Turn a problem you care about into a real venture alongside a small cohort of student founders.', details: 'A semester-long program for students building an early-stage idea. Fellows get weekly founder dinners, office hours with mentors, and a $2,000 project grant. No prior startup experience is required.', tags: ['Entrepreneurship', 'Product', 'Community'], why: ['Entrepreneurship interest', 'Program preference', 'Early-stage fit'], deadline: 'Sep 20', deadlineLabel: 'September 20, 2024', urgency: '20 days left', commitment: '3–5 hrs / week', location: 'Pittsburgh, PA · In person', compensation: '$2,000 project grant', eligibility: 'Open to all currently enrolled undergraduate and graduate students.', source: 'Swartz Center for Entrepreneurship', sourceUrl: 'https://www.cmu.edu/swartz-center-for-entrepreneurship/', score: 88, accent: 'lavender' },
  { id: 'product-studio', type: 'Workshop', title: 'Product Studio: From Insight to Prototype', organization: 'IDeATe + Product Management Club', description: 'A hands-on evening workshop for students who want to practice product thinking with a real campus problem.', details: 'Bring a team or join one at the door. You’ll learn a lightweight discovery framework, map a problem space, and leave with a clickable prototype to test.', tags: ['Product', 'Design', 'Workshop'], why: ['Product Management interest', 'Design interest', 'This week'], deadline: 'Sep 14', deadlineLabel: 'September 14, 2024', commitment: '2 hours', location: 'Hunt Library · Room 120', compensation: 'Free', eligibility: 'Any student curious about product, design, or entrepreneurship.', source: 'IDeATe', sourceUrl: 'https://ideate.cmu.edu/', score: 84, accent: 'mint' },
  { id: 'hackcmu', type: 'Hackathon', title: 'HackCMU 2024', organization: 'ScottyLabs', description: 'Build something useful, weird, or delightful with 500 students from across the university.', details: 'HackCMU is a 24-hour student hackathon with workshops, mentors, hardware, and plenty of snacks. Come with an idea or find a team when you arrive.', tags: ['Hackathon', 'AI / ML', 'Community'], why: ['AI interest', 'Hackathon preference', 'No experience required'], deadline: 'Oct 04', deadlineLabel: 'October 4, 2024', commitment: '24 hours', location: 'Cohon University Center', compensation: 'Free · Meals and prizes provided', eligibility: 'All CMU students. Beginners are encouraged to participate.', source: 'ScottyLabs', sourceUrl: 'https://scottylabs.org/', score: 81, accent: 'blue' },
  { id: 'data-consulting', type: 'Competition', title: 'Data for Good Case Competition', organization: 'Tepper School of Business', description: 'Use data and storytelling to help a local nonprofit make a bigger impact.', details: 'Multidisciplinary teams will work with a Pittsburgh nonprofit to identify an opportunity, analyze a provided dataset, and present recommendations to a panel of judges.', tags: ['Data Science', 'Consulting', 'Impact'], why: ['Data Science interest', 'Consulting interest', 'Team-based'], deadline: 'Sep 27', deadlineLabel: 'September 27, 2024', commitment: '4–6 hrs / week', location: 'Virtual + Tepper', compensation: 'Prizes up to $1,500', eligibility: 'Teams of 2–4 current students from any major.', source: 'Tepper School of Business', sourceUrl: 'https://www.cmu.edu/tepper/', score: 78, accent: 'yellow' },
]
