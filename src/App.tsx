import { Header } from './components/Header';
import { Post, PostType } from './components/Post';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/viniciuspachecof.png',
      name: 'Vinicius Pacheco',
      role: 'dev front end',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-02-24 20:50:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/viniciuspachecof.png',
      name: 'Tiago Fernandes',
      role: 'dev back end',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-02-28 20:55:00'),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => <Post key={post.id} post={post}/>)}
        </main>
      </div>
    </>
  );
}
