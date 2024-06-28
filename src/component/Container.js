import { IoRemoveOutline } from 'react-icons/io5';

import { LiaPagerSolid } from "react-icons/lia";

import { useState } from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const blogsData = {
  students: [
    { 
      title: "Effective Study Techniques for Students", 
      excerpt: "Discover powerful study techniques to enhance your learning experience and improve your academic performance.", 
      description: "Studying effectively is crucial for academic success. In this blog post, we explore various techniques such as active recall, spaced repetition, and the Pomodoro technique. Active recall involves testing yourself on the material, while spaced repetition helps in retaining information over the long term. The Pomodoro technique encourages short, focused study sessions followed by breaks. Implementing these methods can help you study smarter, not harder, and achieve better results in your exams.",
 
    },
    { 
      title: "Why Book a Tutor for Home Tuition?", 
      excerpt: "Discover the benefits of home tuition and why it might be the best choice for your educational needs.", 
      description: "Home tuition offers personalized learning experiences tailored to individual needs, ensuring focused attention and customized lesson plans. This blog post explores the advantages of home tuition, such as flexible scheduling, a comfortable learning environment, and the ability to progress at your own pace. Home tutors can identify and address specific areas of weakness, provide instant feedback, and adapt teaching methods to suit your learning style. Booking a home tutor can significantly enhance your academic performance and boost your confidence in challenging subjects.",

    },
  ],
  tutors: [
    { 
      title: "Tailoring Teaching Methods to Individual Learning Styles", 
      excerpt: "Discover how to adapt your teaching methods to suit different learning styles and enhance student understanding.", 
      description: "Every student has a unique learning style, whether it's visual, auditory, reading/writing, or kinesthetic. This blog post explores how tutors can identify and adapt their teaching methods to match these styles. Using visual aids, engaging in discussions, providing written materials, and incorporating hands-on activities can cater to different learners. By recognizing and accommodating various learning preferences, tutors can create more effective and personalized learning experiences, leading to better student engagement and academic success.",
    
    },
    { 
      title: "How to Engage Students in Home Tuition", 
      excerpt: "Learn effective strategies to keep students engaged and motivated during home tuition sessions.", 
      description: "Engaging students in home tuition requires creativity and adaptability. This blog post discusses various techniques such as using interactive teaching methods, incorporating technology, and fostering a positive learning environment. Tutors can make lessons more engaging by using educational games, multimedia resources, and real-life examples. Building a rapport with students, setting clear goals, and providing regular feedback also play crucial roles in maintaining student interest and motivation. By implementing these strategies, tutors can create an enriching and enjoyable learning experience for their students.",
   
    },
  ],
  parents: [
    { 
      title: "Supporting Your Child's Education at Home", 
      excerpt: "Practical tips for parents to support their child's education and foster a positive learning environment at home.", 
      description: "Parents play a crucial role in their child's education. This blog post offers practical tips to help parents support their children effectively. Creating a dedicated study space, establishing a consistent routine, and encouraging a growth mindset are key factors. Additionally, being involved in their academic activities and maintaining open communication with teachers can significantly impact a child's learning journey. By following these tips, parents can create a nurturing environment that promotes their child's educational success.",
   
    },
    { 
      title: "Encouraging Healthy Screen Time Habits for Children", 
      excerpt: "Tips for parents on how to manage and encourage healthy screen time habits for their children.", 
      description: "In today's digital age, managing screen time is a significant challenge for parents. This blog post offers practical tips on setting screen time limits, encouraging offline activities, and promoting educational content. Establishing clear rules, creating a balanced routine, and leading by example are essential strategies. Additionally, engaging in family activities and open discussions about the benefits and risks of screen time can help children develop healthy habits. By implementing these tips, parents can ensure their children use technology in a balanced and productive way.",
  
    },
  ],
};

const BlogCard = ({ title, excerpt, description, img }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="mb-6 p-4 border border-gray-300 rounded-lg bg-white shadow-lg group-hover:transition-all duration-200 hover:scale-95">
      <img src={img} alt={title} priority={true} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-bold font-Poppins mb-2">{title}</h3>
        <p className="mb-3 dark:text-gray-700 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-700 first-letter:me-3 first-letter:float-start">{excerpt}</p>
        {showDescription && <p className="text-black font-normal mt-2 font-Opensans text-[13pt]">{description}</p>}
        <button 
          onClick={toggleDescription} 
          className="text-orange-600 font-Poppins font-bold flex items-center mt-2"
        >
          {showDescription ? 'Show less' : 'Read more'}<MdKeyboardDoubleArrowRight size={20}/>
        </button>
      </div>
    </div>
  );
};

export default function Blogs() {
  return (
    <>
    

      <div className="container mx-auto px-4 py-8 mt-[70px]">
        <div className="flex justify-center p-3 sm:p-0 md:p-0 items-center flex-col ">
          <div className='flex items-center gap-2'>
            <LiaPagerSolid size={40} className='text-orange-600'/>
            <h1 className="text-2xl font-Poppins font-bold ">Learn<b className='text-orange-600 font-Poppins'>O</b>sphere Blogs</h1>
          </div>
          <IoRemoveOutline size={70} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-Poppins">Blogs for Students</h2>
            {blogsData.students.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-Poppins">Blogs for Tutors</h2>
            {blogsData.tutors.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-Poppins">Blogs for Parents</h2>
            {blogsData.parents.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}