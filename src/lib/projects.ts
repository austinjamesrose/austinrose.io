import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Directory where projects are stored
const projectsDirectory = path.join(process.cwd(), "content/projects");

/**
 * Frontmatter structure for projects
 */
export interface ProjectFrontmatter {
  title: string;
  category: string;
  description: string;
  tags: string[];
  featured: boolean;
  draft: boolean;
  externalUrl?: string;
  impact?: string;
  pattern?: string;
}

/**
 * Complete project data including content
 */
export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

/**
 * Project metadata without content (for listings)
 */
export interface ProjectMeta {
  slug: string;
  frontmatter: ProjectFrontmatter;
}

/**
 * Get all MDX files from the projects directory
 */
function getProjectFiles(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".mdx"));
}

/**
 * Parse a single project file and return its data
 */
function parseProject(fileName: string): Project {
  const slug = fileName.replace(/\.mdx$/, "");
  const fullPath = path.join(projectsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Parse frontmatter
  const { data, content } = matter(fileContents);
  const frontmatter = data as ProjectFrontmatter;

  return {
    slug,
    frontmatter,
    content,
  };
}

/**
 * Get all published (non-draft) projects sorted by title
 */
export function getAllProjects(): ProjectMeta[] {
  const files = getProjectFiles();

  const projects = files
    .map((fileName) => {
      const project = parseProject(fileName);
      // Return metadata without content for listings
      return {
        slug: project.slug,
        frontmatter: project.frontmatter,
      };
    })
    // Filter out drafts
    .filter((project) => !project.frontmatter.draft)
    // Sort by title alphabetically
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));

  return projects;
}

/**
 * Get a single project by its slug
 * Returns null if not found or if it's a draft
 */
export function getProjectBySlug(slug: string): Project | null {
  const fileName = `${slug}.mdx`;
  const fullPath = path.join(projectsDirectory, fileName);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const project = parseProject(fileName);

  // Return null for drafts unless in development
  if (project.frontmatter.draft && process.env.NODE_ENV !== "development") {
    return null;
  }

  return project;
}

/**
 * Get all project slugs (useful for static generation)
 */
export function getAllProjectSlugs(): string[] {
  const files = getProjectFiles();
  return files.map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Get featured projects
 */
export function getFeaturedProjects(): ProjectMeta[] {
  const allProjects = getAllProjects();
  return allProjects.filter((project) => project.frontmatter.featured);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): ProjectMeta[] {
  const allProjects = getAllProjects();
  return allProjects.filter(
    (project) =>
      project.frontmatter.category.toLowerCase() === category.toLowerCase()
  );
}
