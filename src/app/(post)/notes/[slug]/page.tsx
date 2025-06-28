import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import styles from './page.module.css';
import HummingbirdLogo from '@/app/components/HummingbirdLogo';

const postsDirectory = path.join(process.cwd(), 'notes');

// Generate the paths for all posts
export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}

// Fetch the data for a single post
async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...(matterResult.data as { title:string; date:string; tag:string }),
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          &larr;
        </Link>
        <div className={styles.logo}>
          <HummingbirdLogo />
        </div>
      </header>
      <main className={styles.mainContent}>
        <article>
          <h1 className={styles.title}>{postData.title}</h1>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </main>
    </div>
  );
} 