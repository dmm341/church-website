// Simple ministries data used by Ministries list and MinistryDetail pages
const ministries = [
  {
    slug: 'children',
    title: 'Children Ministry',
    description:
      'Programs, Sunday school and activities for kids. We create a safe, fun environment where children can learn about Jesus.',
    events: [
      { id: 1, title: 'Sunday School', date: 'Sundays • 10:30 AM', description: 'Weekly class for children aged 4-12.' },
      { id: 2, title: 'Kids Choir', date: 'Wednesdays • 5:00 PM', description: 'Practice for the children choir.' },
    ],
  },
  {
    slug: 'womens',
    title: "Women's Ministry",
    description:
      'Fellowship, discipleship and support for women in the church. Bible studies and outreach events throughout the year.',
    events: [
      { id: 3, title: 'Women Bible Study', date: 'Tuesdays • 6:30 PM', description: 'Weekly Bible study and prayer.' },
    ],
  },
  {
    slug: 'mens',
    title: "Men's Fellowship",
    description: 'Men gathering for fellowship, mentorship and community service.',
    events: [
      { id: 4, title: 'Men Breakfast', date: 'First Saturday • 8:00 AM', description: 'Breakfast and devotion for men.' },
    ],
  },
  {
    slug: 'youth',
    title: 'Youth & Young Adults',
    description: 'Activities, teachings and community for teenagers and young adults.',
    events: [
      { id: 5, title: 'Youth Night', date: 'Fridays • 7:00 PM', description: 'Worship, teaching and games.' },
    ],
  },
  {
    slug: 'outreach',
    title: 'Outreach & Evangelism',
    description: 'Community outreach programmes focused on serving local needs and sharing the Gospel.',
    events: [
      { id: 6, title: 'Community Food Drive', date: 'Monthly', description: 'Food distribution and support to the vulnerable.' },
    ],
  },
  {
    slug: 'care',
    title: 'Care & Counseling',
    description: 'Pastoral care, counseling and support groups for those in need.',
    events: [
      { id: 7, title: 'Counseling Clinic', date: 'By appointment', description: 'One-on-one pastoral counseling.' },
    ],
  },
  {
    slug: 'worship',
    title: 'Worship Team',
    description: 'Music and worship leading for services and events.',
    events: [
      { id: 8, title: 'Worship Rehearsal', date: 'Thursdays • 6:00 PM', description: 'Weekly rehearsal for singers and musicians.' },
    ],
  },
  {
    slug: 'media',
    title: 'Media & Communications',
    description: 'Handles live streaming, recordings and social media communications.',
    events: [
      { id: 9, title: 'Live Stream Team Meeting', date: 'Monthly', description: 'Coordinate upcoming recordings and schedules.' },
    ],
  },
  {
    slug: 'hospitality',
    title: 'Hospitality & Events',
    description: 'Welcoming guests and organising church events and logistics.',
    events: [
      { id: 10, title: 'Volunteer Day', date: 'Quarterly', description: 'Prepare for large events and train volunteers.' },
    ],
  },
]

export default ministries
