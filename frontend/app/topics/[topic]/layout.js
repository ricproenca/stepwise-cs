export function generateStaticParams() {
  return [{ topic: 'data-representation' }];
}

import TopicHeader from '../../../components/TopicHeader';
import TopicNav from '../../../components/TopicNav';
import { chapters } from '../../../data/chapters';

export default async function TopicLayout({ children, params }) {
  const { topic } = await params;

  const chapter = chapters.find(c => c.topics.some(t => t.slug === topic));
  const topicData = chapter?.topics.find(t => t.slug === topic) ?? {};
  const levelLabel = chapter?.level === 'AS' ? 'AS Level' : (chapter?.level ?? '');
  const paperLabel = chapter?.paper ?? '';

  return (
    <>
      <TopicHeader topicData={topicData} levelLabel={levelLabel} paperLabel={paperLabel} />
      <TopicNav topic={topic} />
      {children}
    </>
  );
}
