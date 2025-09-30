import { notFound } from 'next/navigation';
import { getMDXContent } from '@/app/utils/mdx';
import MDXContent from '@/app/components/blog/MDXContent';
import Navigation from '@/app/components/layout/Navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'app/blog');
  const files = fs.readdirSync(postsDirectory);
  
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
    }));
}

export const revalidate = 60;
export const dynamic = 'force-dynamic';

export default async function BlogPost(props: BlogPostProps) {
  const { slug } = await props.params;
  const filePath = path.join(process.cwd(), 'app/blog', `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);
  const mdxSource = await getMDXContent(content);

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      <Navigation />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {data.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {new Date(data.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </header>
        <MDXContent source={mdxSource} />
      </article>
    </main>
  );
} 