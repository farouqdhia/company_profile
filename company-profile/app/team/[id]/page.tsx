import { teamData } from '../../../data';
import styles from './TeamDetail.module.css';
import { notFound } from 'next/navigation';

function getMemberById(id) {
  return teamData.find((member) => member.id === id);
}

export default function TeamMember({ params }) {
  const member = getMemberById(params.id);

  if (!member) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{member.name}</h1>
      <h2 className={styles.role}>{member.role}</h2>
      <p className={styles.bio}>{member.bio}</p>
    </div>
  );
}