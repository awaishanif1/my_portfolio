import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Tolu AI (Women centric health platform)",
    description:
      "A fully customizable AI assistant built first for certified practitioners who value systems thinking, nuance, and integrity in care. Get clearer insights, build stronger cases, guide your clients with confidence, and share your expertise—all from one seamless hub.",
    image: "/projects/Project-1.png",
    tags: ["Python", "React", "PostgreSQL", "Generative AI"],
    link: "https://tolu.health/",
    github: "https://github.com/awaishanif1/Tolu-back-end",
  },
  {
    title: "AI Dashboard Generator",
    description:
      "A full-featured dashboard generator which supports dataset format including csv, xls,xlsx and txt and then generates dashboards using OpenAI GPT-4 model",
    image: "/projects/Project-2.png",
    tags: ["React", "OpenAI", "Typescript"],
    link: "https://github.com/awaishanif1/ai-data-dashboard-develop",
    github: "https://github.com/awaishanif1/ai-data-dashboard-develop",
  },
  {
    title: "AI Data Chatbot",
    description:
      "An intelligent chatbot powered by GPT-4, helping users understand and gain insights about there datasets.",
    image: "/projects/Project-3.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "https://github.com/awaishanif1/ai-data-chat",
    github: "https://github.com/awaishanif1/ai-data-chat",
  },
  {
    title: "AI Forecast Generator",
    description:
      "An intelligent forecast generator powered by GPT-4, supports datasets in multiple formats and generates forecasts with plots, also supports back-testing.",
    image: "/projects/Project-4.png",
    tags: ["Python", "Machine Learning", "Next.js", "OpenAI"],
    link: "https://github.com/awaishanif1/ai-data-forecast",
    github: "https://github.com/awaishanif1/ai-data-forecast",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
