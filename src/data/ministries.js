// Simple ministries data used by Ministries list and MinistryDetail pages
const ministries = [
  {
    slug: 'children',
    title: 'Children Ministry',
    image: 'children.jfif',
    imagePosition: '50% 25%',
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
    image: 'women.jfif',
    imagePosition: '50% 25%',
    description:
      'Fellowship, discipleship and support for women in the church. Bible studies and outreach events throughout the year.',
    events: [
      { id: 3, title: 'Women Bible Study', date: 'Tuesdays • 6:30 PM', description: 'Weekly Bible study and prayer.' },
    ],
  },
  {
    slug: 'mens',
    title: "Men's Fellowship",
    image: 'mens ministry.jfif',
    imagePosition: '30% 30%',
    description: 'Men gathering for fellowship, mentorship and community service.',
    events: [
      { id: 4, title: 'Men Breakfast', date: 'First Saturday • 8:00 AM', description: 'Breakfast and devotion for men.' },
    ],
  },
  {
    slug: 'youth',
    title: 'Youth & Young Adults',
    image: 'youth.jpg',
    imagePosition: '50% 20%',
    description: 'Activities, teachings and community for teenagers and young adults.',
    events: [
      { id: 5, title: 'Youth Night', date: 'Fridays • 10:00 PM', description: 'Worship, teaching and games.' },
    ],
  },
  {
    slug: 'outreach',
    title: 'Outreach & Evangelism',
    image: 'envangelism.jfif',
    description: 'Community outreach programmes focused on serving local needs and sharing the Gospel.',
    events: [
      ],
  },
  {
    slug: 'worship',
    title: 'Worship Team',
    image: 'worship.jfif',
    description: 'Music and worship leading for services and events.',
    events: [
      { id: 8, title: 'Worship Rehearsal', date: 'saturday 10:00 am to 1:00pm ', description: 'Weekly rehearsal for singers and musicians.' },
  {id: 11, title: 'Sound Check', date: 'Sundays • 8:00 AM', description: 'Preparation for Sunday worship service.' },
    {id: 12, title: 'instrument training', date: 'teusdays • 7:00pm to 10:00pm', description : 'training for new worship team members.' }
],
  },
  {
    slug: 'media',
    title: 'Media & Communications',
    image: 'media.jfif',
    description: 'Handles live streaming, recordings and social media communications.',
    events: [
      ],
  },
]

export default ministries
