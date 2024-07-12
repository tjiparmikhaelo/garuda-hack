import styles from '@/app/styles/index.module.css';
import MaxWidthWrapper from './MaxWidthWrapper';

const Navbar = () => {
  	return (
			<nav className='absolute sticky-z-[100] inset-x-0 top-0 w-full border-b
				border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
					<MaxWidthWrapper>
						<div className={styles.navigasiBar}>
								<div className={styles.logo}>
									<img className={styles.logoIcon} alt="" src="/logo.png" />
									<b className={styles.sosial}>Sosial</b>
							</div>
							<div className={styles.pages}>
								<div className={styles.page}>
									<div className={styles.cariAktivitas}>Cari Aktivitas</div>
									</div>
									<div className={styles.page}>
											<div className={styles.cariAktivitas}>Donasi</div>
									</div>
									<div className={styles.page}>
											<div className={styles.cariAktivitas}>Tentang Kami</div>
									</div>
							</div>
							<div className={styles.ctas}>
									<div className={styles.secondarySmallButton}>
											<div className={styles.icon} />
											<div className={styles.text}>Masuk</div>
											<div className={styles.icon} />
									</div>
									<div className={styles.primarySmallButton}>
											<div className={styles.icon} />
											<div className={styles.text}>Buat Akun</div>
											<div className={styles.icon} />
									</div>
							</div>
					</div>
					</MaxWidthWrapper>
			</nav>
  );
};

export default Navbar;