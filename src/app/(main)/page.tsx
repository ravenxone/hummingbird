import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styles from "./page.module.css";
import BlogPost from "../components/BlogPost";

// Define a type for our post data
type Post = {
  slug: string;
  title: string;
  date: string;
  tag: string;
};

function getPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'notes');
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName): Post => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title,
      date: data.date,
      tag: data.tag,
    };
  });

  // Sort posts by date in descending order
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export default function Home() {
  const posts = getPosts();

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.blogList}>
          {posts.map((post) => (
            <BlogPost
              key={post.slug}
              slug={post.slug}
              tag={post.tag}
              title={post.title}
              date={new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
