export const recruiterReachFeatures = [
  {
    id: 1,
    name: "AI-Powered Email Personalization",
    description: "Generate tailored email drafts using recruiter/job details.",
    category: "Core",
  },
  {
    id: 2,
    name: "Recruiter Database Integration",
    description: "Auto-fetch recruiter contacts from LinkedIn/company sites.",
    category: "Core",
  },
  {
    id: 3,
    name: "Smart Email Scheduling",
    description: "Optimize send times and automate follow-ups.",
    category: "Core",
  },
  {
    id: 4,
    name: "Dynamic Email Templates",
    description: "Pre-built templates with variables like {CompanyName}.",
    category: "Core",
  },
  {
    id: 5,
    name: "CRM-Like Tracking",
    description: "Track opens, clicks, and tag recruiter engagement.",
    category: "Analytics",
  },
  {
    id: 6,
    name: "AI Reply Suggestions",
    description: "Get AI-generated responses to recruiter replies.",
    category: "Advanced",
  },
  {
    id: 7,
    name: "Job Description Analyzer",
    description: "Auto-match job postings with optimal email templates.",
    category: "Advanced",
  },
  {
    id: 8,
    name: "Multi-Channel Outreach",
    description: "Sync with LinkedIn InMail or SMS for follow-ups.",
    category: "Advanced",
  },
  {
    id: 9,
    name: "Meeting Scheduler",
    description:
      "Automatically schedule Google Meet calls and add to calendars.",
    category: "Productivity",
    integration: "Google Calendar API",
    action: "Schedule Meeting",
  },
];

export const AnalyticsFeature = [
  "Track open & response rates in real-time",
  "Identify best-performing templates",
  "Discover optimal sending times",
  "Monitor candidate engagement heatmaps",
  "Compare team performance metrics",
];

export const outreachData = [
  {
    name: "Mon",
    Open_Rate: 42,
    Reply_Rate: 12,
    Conversion: 3,
  },
  {
    name: "Tue",
    Open_Rate: 68,
    Reply_Rate: 18,
    Conversion: 5,
  },
  {
    name: "Wed",
    Open_Rate: 55,
    Reply_Rate: 14,
    Conversion: 4,
  },
  {
    name: "Thu",
    Open_Rate: 80,
    Reply_Rate: 22,
    Conversion: 7,
  },
  {
    name: "Fri",
    Open_Rate: 75,
    Reply_Rate: 20,
    Conversion: 6,
  },
  {
    name: "Sat",
    Open_Rate: 38,
    Reply_Rate: 8,
    Conversion: 2,
  },
  {
    name: "Sun",
    Open_Rate: 45,
    Reply_Rate: 10,
    Conversion: 3,
  },
];

export const trendData = [
  { name: "Week 1", value: 150 },
  { name: "Week 2", value: 230 },
  { name: "Week 3", value: 320 },
  { name: "Week 4", value: 275 },
  { name: "Week 5", value: 400 },
];

export const emails = [
  {
    senderName: "John Doe",
    senderEmail: "john.doe@example.com",
    subject: "Meeting Tomorrow",
    body: "Hi, just a reminder about our meeting tomorrow at 10 AM. Please bring your project updates.",
    timeSent: "2023-11-15T09:30:00Z",
  },
  {
    senderName: "Jane Smith",
    senderEmail: "jane.smith@example.com",
    subject: "Project Deadline",
    body: "Hello, the project deadline has been extended to next Friday. Let me know if you have any questions.",
    timeSent: "2023-11-14T14:15:00Z",
  },
  {
    senderName: "Alex Johnson",
    senderEmail: "alex.johnson@example.com",
    subject: "Weekend Plans",
    body: "Hey, are you free this weekend? We’re planning a small get-together.",
    timeSent: "2023-11-13T18:45:00Z",
  },
  {
    senderName: "Sarah Williams",
    senderEmail: "sarah.williams@example.com",
    subject: "Invoice #1234",
    body: "Please find attached the invoice for your recent purchase. Due date is November 20th.",
    timeSent: "2023-11-12T11:20:00Z",
  },
  {
    senderName: "Michael Brown",
    senderEmail: "michael.brown@example.com",
    subject: "Feedback Request",
    body: "We’d love to hear your feedback on our service. Here’s a short survey.",
    timeSent: "2023-11-11T16:10:00Z",
  },
];
