import React from 'react';
import styles from './styles.module.css';

interface BlogPostProps {
  tag: string;
  title: string;
  date: string;
}

const tagColorMap: { [key: string]: string } = {
  "Design": "#CDABFC",
  "Finance": "#CBF592",
  "Philosophy": "#8EC2F3",
  "Side Quests": "#F38E8F",
};

const BlogPost: React.FC<BlogPostProps> = ({ tag, title, date }) => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default BlogPost;