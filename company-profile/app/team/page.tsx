import Link from 'next/link';
import { teamData } from '../../data'; // Impor data kita
import styles from './Team.module.css';

export default function Team() {
  return (
    <div>
      <h1>Tim Kami</h1>
      <p>Orang-orang hebat di balik kesuksesan proyek kami.</p>
      <div className={styles.teamGrid}>
        {teamData.map((member) => (
          <Link href={`/team/${member.id}`} key={member.id} className={styles.teamCard}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}