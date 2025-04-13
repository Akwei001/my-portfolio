import Navigation from '../components/layout/Navigation';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogContent from './BlogContent';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), 'app/blog');
  const files = fs.readdirSync(postsDirectory);
  
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug: file.replace(/\.mdx$/, ''),
        title: data.title,
        date: data.date,
        description: data.description,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      <Navigation />
      <BlogContent posts={posts} />
    </main>
  );
} 