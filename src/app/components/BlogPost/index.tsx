import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

interface BlogPostProps {
  tag: string;
  title: string;
  date: string;
  slug: string;
}

const tagColorMap: { [key: string]: string } = {
  Technology: '#D4F1F4',
  Design: '#CDABFC',
  Money: '#CBF592',
  Reflections: '#8EC2F3',
  'Side Quest': '#F38E8F',
};

const BlogPost = ({ tag, title, date, slug }: BlogPostProps) => {
  return (
    <Link href={`/notes/${slug}`} className={styles.container}>
      <div className={styles.tags}>
        <span
          className={styles.tag}
          style={{ backgroundColor: tagColorMap[tag] || '#E0E0E0' }}
        >
          {tag}
        </span>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.date}>{date}</p>
    </Link>
  );
};

export default BlogPost;