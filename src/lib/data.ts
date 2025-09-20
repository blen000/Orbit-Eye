import type { Service, Doctor, BlogPost, Testimonial, FaqItem } from './types';

export const services: Service[] = [
  {
    id: '1',
    title: 'LASIK & Refractive Surgery',
    slug: 'lasik-refractive-surgery',
    shortDescription: 'Advanced laser vision correction for a life without glasses or contacts.',
    content:
      'Our clinic specializes in state-of-the-art LASIK and other refractive surgeries to correct nearsightedness, farsightedness, and astigmatism. We use the latest bladeless, all-laser technology to ensure maximum safety, precision, and a quick recovery. Our experienced surgeons will guide you through a comprehensive consultation to determine the best procedure for your unique eyes.',
    imageId: 'lasik',
  },
  {
    id: '2',
    title: 'Cataract Surgery',
    slug: 'cataract-surgery',
    shortDescription: 'Restore clear vision with our modern, minimally invasive cataract procedures.',
    content:
      'We offer advanced cataract surgery to remove cloudy lenses and replace them with premium intraocular lenses (IOLs). Our techniques are minimally invasive, promoting faster healing and better visual outcomes. We provide a range of IOL options, including multifocal and toric lenses, to reduce or eliminate the need for glasses after surgery.',
    imageId: 'cataract',
  },
  {
    id: '3',
    title: 'Comprehensive Eye Exams',
    slug: 'comprehensive-eye-exams',
    shortDescription: 'Protect your vision with regular, thorough eye health evaluations.',
    content:
      'A comprehensive eye exam is crucial for maintaining eye health. Our exams include vision testing, glaucoma screening, retina evaluation, and a check for other eye diseases. We use advanced diagnostic equipment to detect problems early, often before you notice any symptoms.',
    imageId: 'checkup',
  },
  {
    id: '4',
    title: 'Optical & Contact Lenses',
    slug: 'optical-contact-lenses',
    shortDescription: 'Find the perfect frames and lenses to match your style and vision needs.',
    content:
      'Our full-service optical shop offers a wide selection of designer frames, sunglasses, and high-performance lenses. Our certified opticians will help you find the perfect fit and style. We also provide expert contact lens fittings, including options for astigmatism and multifocal needs.',
    imageId: 'glasses',
  },
];

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Evelyn Reed',
    specialty: 'Cataract & Refractive Surgeon',
    bio: 'Dr. Reed is a board-certified ophthalmologist with over 15 years of experience in advanced cataract and LASIK surgery. She is dedicated to providing personalized care and the latest surgical techniques.',
    imageId: 'doctor1',
  },
  {
    id: '2',
    name: 'Dr. Marcus Thorne',
    specialty: 'Glaucoma & Retina Specialist',
    bio: 'Dr. Thorne specializes in the medical and surgical management of glaucoma and retinal diseases. He is a respected researcher and advocate for early detection and treatment of eye conditions.',
    imageId: 'doctor2',
  },
  {
    id: '3',
    name: 'Dr. Aliyah Chen',
    specialty: 'Pediatric Ophthalmology',
    bio: 'Dr. Chen is passionate about children\'s eye health. She has a friendly and gentle approach, making eye exams a positive experience for our youngest patients. She manages a range of pediatric eye conditions.',
    imageId: 'doctor3',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Digital Eye Strain in the Modern Age',
    slug: 'digital-eye-strain',
    excerpt: 'Are your eyes tired after a long day of work? You might be experiencing digital eye strain. Learn the causes and how to prevent it.',
    content: 'In today\'s world, we spend countless hours staring at digital screens. This can lead to a condition known as digital eye strain or computer vision syndrome. Symptoms include dry eyes, headaches, blurred vision, and neck pain. The main causes are glare, poor lighting, and the blue light emitted from screens. To combat this, follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for at least 20 seconds. Also, ensure your workspace is well-lit and consider blue light filtering glasses.',
    date: '2024-07-15',
    author: 'Dr. Evelyn Reed',
    imageId: 'blog1',
  },
  {
    id: '2',
    title: 'Foods That Boost Your Eye Health',
    slug: 'foods-for-eye-health',
    excerpt: 'Did you know your diet can impact your vision? Discover the best foods to keep your eyes healthy and strong.',
    content: 'A balanced diet rich in certain nutrients is essential for maintaining good eye health. Foods rich in vitamins C and E, zinc, lutein, zeaxanthin, and omega-3 fatty acids can help ward off age-related vision problems like macular degeneration and cataracts. Include these in your diet: leafy green vegetables like spinach and kale, oily fish like salmon and tuna, eggs, nuts, and citrus fruits. And yes, carrots are great too, thanks to their high vitamin A content!',
    date: '2024-06-28',
    author: 'Dr. Aliyah Chen',
    imageId: 'blog2',
  },
  {
    id: '3',
    title: 'The Importance of UV Protection for Your Eyes',
    slug: 'uv-protection-for-eyes',
    excerpt: 'Sunglasses aren\'t just a fashion statement. They are a crucial tool for protecting your eyes from harmful ultraviolet (UV) radiation.',
    content: 'Just like your skin, your eyes need protection from the sun\'s harmful UV rays. Long-term exposure to UV radiation can increase your risk of developing cataracts, macular degeneration, and other serious eye conditions. When choosing sunglasses, make sure they block 100% of both UVA and UVB rays. A wide-brimmed hat also provides excellent protection. Remember to wear them even on cloudy days, as UV rays can penetrate clouds.',
    date: '2024-05-19',
    author: 'Dr. Marcus Thorne',
    imageId: 'blog3',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah L.',
    location: 'New York, NY',
    quote: 'The LASIK procedure at Orbit Eye Clinic was life-changing! The staff was so professional and caring. I can see 20/20 now, and I couldn\'t be happier.',
  },
  {
    id: '2',
    name: 'Michael B.',
    location: 'Brooklyn, NY',
    quote: 'Dr. Thorne is an exceptional doctor. He took the time to explain my glaucoma diagnosis and treatment plan thoroughly. I feel confident that my vision is in the best hands.',
  },
  {
    id: '3',
    name: 'Jessica P.',
    location: 'Queens, NY',
    quote: 'My cataract surgery was a breeze. The recovery was quick, and the world looks so much brighter and clearer now. Thank you to the entire team at Orbit!',
  },
];

export const faqs: FaqItem[] = [
    {
      question: "What are your clinic's hours of operation?",
      answer: "Our clinic is open Monday to Friday from 9:00 AM to 5:00 PM. We are closed on weekends and public holidays. For emergencies, please call our hotline."
    },
    {
      question: "Do I need a referral to book an appointment?",
      answer: "A referral is not required for a general eye examination. However, some insurance plans may require a referral for specialist consultations. Please check with your insurance provider."
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We accept a wide range of insurance plans. Please visit our 'Insurance & Billing' page or contact our office with your insurance information, and we will be happy to verify your coverage."
    },
    {
      question: "What should I bring to my appointment?",
      answer: "Please bring your current eyeglasses or contact lenses, a list of any medications you are taking, your insurance card, and a valid photo ID. If it's your first visit, you may want to arrive a few minutes early to complete paperwork."
    },
    {
        question: "How long does a typical eye exam take?",
        answer: "A comprehensive eye exam typically takes about 60 to 90 minutes. This may vary depending on your specific needs and if additional testing is required."
    }
  ];
