import {
    content,
    reputation,
    socialMedia,
    featureImg1,
    featureImg2,
    featureImg3,
    featureImg4,
    clientImg,
    footerImg
} from "../assets";


export const SERVICES = [
  {
    id: '01',
    title: 'Reputation Management',
    description:
      'We understand the importance of maintaining a positive online image. Our reputation management services are designed to help you present your best self and build trust.',
    points: [
      'Customized strategy development',
      'Ongoing monitoring and support',
      'Proactive image enhancement',
    ],
    image: reputation,
  },
  {
    id: '02',
    title: 'Social Media Strategy',
    description:
      'Engage your audience like never before with our expertly crafted social media strategies. We tailor content to resonate with your followers and drive engagement.',
    points: [
      'Targeted content creation',
      'Audience engagement techniques',
      'Performance analytics and insights',
    ],
    image:  content,
  },
  {
    id: '03',
    title: 'Content Creation',
    description:
      'Crafting compelling content is essential for connecting with your audience. Our experienced team produces high-quality articles, blogs, and visual content tailored to your message.',
    points: [
      'Engaging blog posts',
      'Professional copywriting',
      'Custom visual assets',
    ],
    image:  socialMedia,
  },
];

export const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "Existing Project 1",
    image: featureImg1,
  },
  {
    id: 2,
    title: "Existing Project 2",
    image: featureImg2,
  },
  {
    id: 3,
    title: "Existing Project 3",
    image: featureImg3,
  },
  {
    id: 4,
    title: "Existing Project 4",
    image: featureImg4,
  },
];


export const Feedback = [
  {
    stars: 5,
    feedback:
      "Booknetservices transformed my online presence! My patient inquiries have skyrocketed, thanks to their incredible reputation management strategies.",
    client_image: clientImg,
    client_name: 'Dr. Kavya Sharma',
    client_designation: 'M.D. at Global Tech',
  },
  {
    stars: 5,
    feedback:
      "The social media campaign they created for my real estate business was a game changer. I'm seeing more engagement and leads than ever before!",
    client_image: clientImg,
    client_name: 'Ravi Verma',
    client_designation: 'Creative Director',
  },
  {
    stars: 5,
    feedback:
      "Their content strategy significantly improved my visibility online. I can't imagine growing my brand without them.",
    client_image: clientImg,
    client_name: 'Meera Choudhary',
    client_designation: 'Entrepreneur',
  },
  {
    stars: 5,
    feedback:
      "Simply put, they’re the best in the business! Their tailored approach and exceptional service made all the difference for my practice.",
    client_image: clientImg,
    client_name: 'Aman Singh',
    client_designation: 'YouTuber',
  },
  {
    stars: 5,
    feedback:
      "Simply put, they’re the best in the business! Their tailored approach and exceptional service made all the difference for my practice.",
    client_image: clientImg,
    client_name: 'Aman Singh',
    client_designation: 'YouTuber',
  },
  {
    stars: 5,
    feedback:
      "Simply put, they’re the best in the business! Their tailored approach and exceptional service made all the difference for my practice.",
    client_image: clientImg,
    client_name: 'Aman Singh',
    client_designation: 'YouTuber',
  },
];


  // replace with your actual image path
export const FooterBgImg = footerImg;