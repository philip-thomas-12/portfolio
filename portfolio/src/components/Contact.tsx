"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-5xl mx-auto px-6 border-t border-[#262626]">
      <div className="flex flex-col gap-12 max-w-2xl">
        <div>
          <span className="text-sm font-mono text-accent-blue tracking-wider">07. CONTACT</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white mt-4">
            Let&apos;s build something useful.
          </h2>
          <p className="text-lg text-gray-400 mt-6 leading-relaxed">
            I am actively seeking backend development and software engineering internships. 
            If you have an opportunity or just want to discuss technology, my inbox is open.
          </p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-2 flex-grow">
              <label htmlFor="name" className="font-mono text-sm text-gray-400">Name</label>
              <input 
                type="text" 
                id="name" 
                className="bg-card-bg border border-[#262626] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors font-sans" 
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              <label htmlFor="email" className="font-mono text-sm text-gray-400">Email</label>
              <input 
                type="email" 
                id="email" 
                className="bg-card-bg border border-[#262626] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors font-sans" 
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-mono text-sm text-gray-400">Message</label>
            <textarea 
              id="message" 
              rows={5}
              className="bg-card-bg border border-[#262626] rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors font-sans resize-none" 
              placeholder="How can we work together?"
            ></textarea>
          </div>

          <button type="submit" className="self-start px-8 py-3 bg-white text-black font-sans font-medium rounded-sm hover:bg-gray-200 transition-colors mt-2">
            SEND MESSAGE &rarr;
          </button>
        </form>
      </div>
    </section>
  );
}
