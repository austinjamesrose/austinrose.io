import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout";
import { getAllPosts, getFeaturedPosts } from "@/lib/posts";
import { HeadshotDataRing, DataTypeIcon } from "@/components/data-viz";

// Featured projects for homepage
const featuredProjects = [
  {
    id: "onboarding-initiative",
    title: "Onboarding Team Initiative",
    description:
      "Diagnosed pre-hire drop-off as a key revenue risk by analyzing attrition data. Traced the problem to a 6+ month credentialing process with no dedicated support.",
    impact: "$55M incremental revenue",
  },
  {
    id: "universal-wait-times",
    title: "Universal Parks Wait Time Tracker",
    description:
      "Built a real-time scraper and dashboard tracking ride wait times across Universal Orlando parks. Exposed patterns in crowd flow and identified optimal visit windows.",
    impact: "Personal project",
  },
];

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 5);
  const featuredPost = featuredPosts[0];

  return (
    <>
      {/* Hero Section */}
      <section className="py-12">
        <Container>
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
            {/* Headshot with Data Ring */}
            <Link href="/about" className="block mx-auto sm:mx-0 group flex-shrink-0 relative">
              <HeadshotDataRing size={160} />
              <Image
                src="/images/headshot.jpg"
                alt="Austin Rose"
                width={160}
                height={160}
                className="w-40 h-40 rounded-full object-cover ring-4 ring-accent/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:ring-accent/50 relative z-10"
                priority
              />
            </Link>

            {/* Intro */}
            <div>
              <h1 className="text-4xl sm:text-5xl mb-4">
                Hi, I&apos;m Austin.
              </h1>

              <p className="opacity-90">
                I&apos;m a curious People Analytics leader turning workforce data into strategic actions.
                Currently, I'm at The Aspen Group, where I partner closely with HR and business leaders to build data infrastructure, create memorable data experiences,
                and deliver insights that drive talent decisions for 23,000+ employees.
              </p>
            </div>
          </div>

          <p className="mb-6 opacity-90">
            Read the{" "}
            <Link href="/posts">blog posts</Link>{" "}
            or check{" "}
            <Link href="/about">About</Link>{" "}
            to explore further.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <span className="opacity-60 text-sm">Social Links:</span>
            <Link
              href="https://github.com/austinjamesrose"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon no-underline"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/in/roseaustin"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon no-underline"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
            <Link
              href="mailto:austin@austinrose.io"
              className="social-icon no-underline"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      <hr />

      {/* Featured Section - 2 Projects + 1 Post */}
      <section className="py-12">
        <Container>
          <h2 className="text-2xl mb-6">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Featured Projects */}
            {featuredProjects.map((project) => (
              <Link key={project.id} href="/projects" className="card block group !no-underline" style={{ textDecoration: 'none' }}>
                <div className="flex items-center gap-2 mb-1">
                  <DataTypeIcon type="chart" size={14} className="text-accent" />
                  <span className="text-xs text-accent uppercase tracking-wider !no-underline">Project</span>
                </div>
                <h3 className="font-display text-lg mb-2 underline decoration-1 underline-offset-4 group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="text-sm opacity-80 leading-relaxed mb-2 !no-underline">{project.description}</p>
                <p className="text-sm text-accent !no-underline">{project.impact}</p>
              </Link>
            ))}

            {/* Featured Post */}
            {featuredPost && (
              <Link href={`/posts/${featuredPost.slug}`} className="card block group !no-underline" style={{ textDecoration: 'none' }}>
                <div className="flex items-center gap-2 mb-1">
                  <DataTypeIcon type="scatter" size={14} className="text-accent" />
                  <span className="text-xs text-accent uppercase tracking-wider !no-underline">Post</span>
                </div>
                <h3 className="font-display text-lg mb-2 underline decoration-1 underline-offset-4 group-hover:text-accent">
                  {featuredPost.frontmatter.title}
                </h3>
                <p className="text-sm opacity-80 leading-relaxed mb-2 !no-underline">
                  {featuredPost.frontmatter.description}
                </p>
                <span className="text-sm opacity-60 !no-underline">
                  {new Date(featuredPost.frontmatter.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </Link>
            )}
          </div>
        </Container>
      </section>
      <hr />

      {/* Recent Posts */}
      <section className="py-12">
        <Container>
          <h2 className="text-2xl mb-6">Recent Posts</h2>
          {recentPosts.length > 0 ? (
            <ul className="space-y-6">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="text-accent no-underline hover:underline text-lg font-medium"
                  >
                    {post.frontmatter.title}
                  </Link>
                  <div className="flex items-center gap-2 text-sm opacity-60 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span>
                      {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <p className="mt-2 opacity-80">{post.frontmatter.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="opacity-60">No posts yet. Check back soon!</p>
          )}

          {allPosts.length > 5 && (
            <div className="mt-8">
              <Link href="/posts" className="text-accent">
                All Posts &rarr;
              </Link>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
