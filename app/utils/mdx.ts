import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export async function getMDXContent(content: string): Promise<MDXRemoteSerializeResult> {
  return serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      format: 'mdx',
    },
  });
} 