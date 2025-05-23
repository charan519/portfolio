import React, { useRef, useEffect, FormEvent } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline();
      
      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      ).fromTo(
        formRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      ).fromTo(
        contactInfoRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );
    }
  }, [inView]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const mailtoLink = `mailto:dcharan0508@gmail.com?subject=${encodeURIComponent(String(subject))}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section 
      id="contact"
      ref={ref}
      className="py-24 bg-background text-primary"
    >
      <div className="container-fluid mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-12 md:mb-0">
            <h2 
              ref={titleRef}
              className="text-[10vw] md:text-[8vw] xl:text-[6vw] font-black mb-6"
            >
              Let's work together
            </h2>
            
            <div 
              ref={contactInfoRef}
              className="space-y-6"
            >
              <div>
                <p className="text-secondary text-sm mb-1">Email</p>
                <a 
                  href="mailto:dcharan0508@gmail.com" 
                  className="text-xl font-medium hover:text-secondary transition-colors duration-300 flex items-center gap-2"
                >
                  dcharan0508@gmail.com
                  <ArrowUpRight size={16} />
                </a>
              </div>
              
              <div>
                <p className="text-secondary text-sm mb-1">Based in</p>
                <p className="text-xl font-medium">Andhra Pradesh, Chittoor</p>
              </div>
              
              <div className="pt-6">
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/ro_prime/" 
                    className="text-primary hover:text-secondary transition-colors duration-300"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://github.com/charan519" 
                    className="text-primary hover:text-secondary transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/d-charan-a02b6a284/" 
                    className="text-primary hover:text-secondary transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 md:pl-12">
            <form 
              ref={formRef}
              className="space-y-8"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-secondary">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    className="w-full bg-transparent border-b border-secondary/20 py-3 focus:border-primary outline-none transition-colors duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-secondary">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    className="w-full bg-transparent border-b border-secondary/20 py-3 focus:border-primary outline-none transition-colors duration-300"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-secondary">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject" 
                  className="w-full bg-transparent border-b border-secondary/20 py-3 focus:border-primary outline-none transition-colors duration-300"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-secondary">
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message" 
                  className="w-full bg-transparent border-b border-secondary/20 py-3 focus:border-primary outline-none transition-colors duration-300 min-h-[150px]"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="btn btn-primary rounded-full"
                >
                  Send Message
                  <Mail className="ml-2" size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;