export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface AboutContent {
  mission: string;
  history: string;
  team: TeamMember[];
}

export const aboutContent: AboutContent = {
  mission: "At Wanderworld Holidays, our mission is to create unforgettable travel experiences that showcase the rich cultural heritage, natural beauty, and diverse traditions of India. We are committed to responsible tourism that benefits local communities while providing exceptional value to our travelers.",
  history: "Founded in 2010 by a group of passionate travelers, Wanderworld Holidays has grown from a small local agency to one of India's premier travel companies. Over the years, we have helped thousands of travelers from around the world discover the magic of India.",
  team: [
    {
      name: "Rajiv Sharma",
      position: "Founder & CEO",
      bio: "With over 20 years of experience in the travel industry, Rajiv's vision and leadership have been instrumental in the company's success.",
      image: "https://public.readdy.ai/ai/img_res/4b9a4a5eb9e6c7059f8d926ca6f942a7.jpg"
    },
    {
      name: "Priya Patel",
      position: "Head of Operations",
      bio: "Priya ensures that every tour runs smoothly, with meticulous attention to detail and a commitment to excellence.",
      image: "https://public.readdy.ai/ai/img_res/79198da225ba660e1f08c37d3cc31edf.jpg"
    },
    {
      name: "Amit Verma",
      position: "Lead Tour Designer",
      bio: "Amit combines his deep knowledge of India with creative flair to design unique and authentic travel experiences.",
      image: "https://public.readdy.ai/ai/img_res/387c0ea489634999b755b45a6c605b9c.jpg"
    }
  ]
};
