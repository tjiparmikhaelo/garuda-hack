import styles from '@/app/styles/success.module.css';
import Link from 'next/link';

const Page = () => {
  return (
    <div className={styles.contentBio}>
      <div className={styles.successCard}>
        <div className={styles.contentSuc}>
          <img className={styles.epsuccessFilledIcon} alt="" src="/ep_success-filled.svg" />
          <div className={styles.title}>
            <b className={styles.telahBerhasilTerkirim}>Telah berhasil terkirim!</b>
            <div className={styles.informasiLebihLanjut}>Informasi lebih lanjut akan dikirm melalui email yang telah terdaftar</div>
          </div>
        </div>
        <button className={styles.primaryButtonLarge}>
          <div className={styles.icon} />
          <div className={styles.text}>
            <Link href="/dashboard">Kembali ke halaman beranda</Link>
          </div>
          <div className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Page;