import type { NextPage } from 'next';
import styles from '@/app/styles/index.module.css';
import Link from 'next/link';

const Page = () => {
  	return (
    		<div className={styles.contentPdp}>
      			<div className={styles.imgsOnPdp}>
        				<img className={styles.imgPdp1Icon} alt="" src="/img-pdp-1.png" />
        				<div className={styles.row2}>
          					<img className={styles.imgPdp2Icon} alt="" src="/img-pdp-2.png" />
          					<img className={styles.imgPdp2Icon} alt="" src="/img-pdp-3.png" />
        				</div>
        				<div className={styles.row2}>
          					<img className={styles.imgPdp2Icon} alt="" src="/img-pdp-4.png" />
          					<img className={styles.imgPdp2Icon} alt="" src="/img-pdp-5.png" />
        				</div>
      			</div>
      			<div className={styles.contentPdp1}>
        				<div className={styles.titlecta}>
          					<div className={styles.label}>
            						<div className={styles.lingkungan}>Lingkungan</div>
          					</div>
          					<div className={styles.title}>
            						<b className={styles.bersihPantaiNusantara}>Bersih Pantai Nusantara</b>
            						<div className={styles.penyelenggaraLogo} />
            						<div className={styles.yayasanHijauNusantara}>Yayasan Hijau Nusantara</div>
          					</div>
          					<div className={styles.loccta}>
            						<div className={styles.tglloc}>
              							<div className={styles.tanggal}>
                								<div className={styles.calendarIcon}>
                  									<img className={styles.locationIcon} alt="" src="/calendar.svg" />
                								</div>
                								<div className={styles.sabtu14September}>Sabtu, 14 September 2024</div>
              							</div>
              							<div className={styles.tanggal}>
                								<div className={styles.calendarIcon}>
                  									<img className={styles.locationIcon} alt="" src="/location.svg" />
                								</div>
                								<div className={styles.sabtu14September}>Pantai Ancol, Jakarta</div>
              							</div>
            						</div>
            						<button className={styles.primaryButtonLarge}>
              							<div className={styles.icon} />
              							<div className={styles.text}>
															<Link
																href="/job/apply"
															>
																Daftar sebagai volunteer
															</Link>
														</div>
              							<div className={styles.icon} />
            						</button>
          					</div>
        				</div>
        				<div className={styles.divider} />
        				<div className={styles.haloGenerasiMudaContainer}>
          					<p className={styles.haloGenerasiMuda}>Halo, Generasi Muda Indonesia!</p>
          					<p className={styles.haloGenerasiMuda}>Kami dari Wujud Aksi Nyata ingin mengajakmu untuk turut serta dalam menjaga kebersihan Pantai Ancol. Bersama, kita bisa memberikan dampak positif bagi lingkungan sekitar dan meningkatkan kesadaran akan pentingnya menjaga kebersihan pantai. Jika kamu berdomisili di sekitar Jakarta, memiliki semangat sosial yang tinggi, dan ingin mengubah niat baikmu menjadi aksi nyata, mari bergabung bersama kami sebagai relawan!</p>
          					<p className={styles.haloGenerasiMuda}>Ayo, segera daftarkan dirimu untuk menjadi bagian dari Wujud Aksi Nyata dan berperan aktif dalam menjaga keindahan Pantai Ancol</p>
        				</div>
        				<div className={styles.divider} />
        				<div className={styles.detailAct}>
          					<b className={styles.detailAktivitas}>Detail Aktivitas</b>
          					<div className={styles.txtDetailAct}>
            						<div className={styles.metodeBriefing}>Metode Briefing</div>
            						<div className={styles.sabtu14September}>Relawan akan di briefing melalui WhatsApp</div>
          					</div>
        				</div>
        				<div className={styles.divider} />
        				<div className={styles.cncOrg}>
          					<b className={styles.kontakOrganisasi}>Kontak Organisasi</b>
          					<div className={styles.imgsOnPdp}>
            						<div className={styles.metodeBriefing}>Email</div>
            						<div className={styles.sabtu14September}>yayasanhijaunusantara@gmail.com</div>
          					</div>
          					<div className={styles.imgsOnPdp}>
            						<div className={styles.metodeBriefing}>Facebook</div>
            						<div className={styles.sabtu14September}>Yayasan Hijau Nusantara</div>
          					</div>
          					<div className={styles.imgsOnPdp}>
            						<div className={styles.metodeBriefing}>twitter</div>
            						<div className={styles.sabtu14September}>Yayasan Hijau Nusantara</div>
          					</div>
          					<div className={styles.imgsOnPdp}>
            						<div className={styles.metodeBriefing}>WhatsApp</div>
            						<div className={styles.sabtu14September}>+62 91246372659</div>
          					</div>
        				</div>
        				<div className={styles.divider} />
        				<div className={styles.cncOrg}>
          					<b className={styles.kontakOrganisasi}>Keuntungan</b>
          					<div className={styles.mendapatkanSertifikat}>
            						<ul className={styles.relasiYangSolid}>
              							<li>Mendapatkan sertifikat</li>
                            <li>Relasi yang solid</li>
            						</ul>
          					</div>
        				</div>
        				<div className={styles.divider} />
        				<div className={styles.detailAct}>
          					<b className={styles.detailAktivitas}>Review</b>
          					<div className={styles.rvCardsPdp}>
            						<div className={styles.row1Rv}>
              							<div className={styles.rvCard}>
                								<img className={styles.profileOnReviewIcon} alt="" src="/profile-on-review-detail.png" />
                								<div className={styles.tglloc}>
                  									<b className={styles.menyenangkanIkutBersih}>Menyenangkan ikut Bersih Pantai Nusantara di Pantai Ancol. Suasana ramah dan lingkungan bersih membuat pengalaman volunteering sangat berarti.</b>
                  									<div className={styles.andi}>Andi</div>
                								</div>
              							</div>
              							<div className={styles.rvCard}>
                								<img className={styles.profileOnReviewIcon} alt="" src="/profile-on-review-detail2.png" />
                								<div className={styles.tglloc}>
                  									<b className={styles.menyenangkanIkutBersih}>Bersama Wujud Aksi Nyata, saya belajar banyak tentang pentingnya menjaga kebersihan pantai di Pantai Ancol. Terima kasih atas kesempatannya!</b>
                  									<div className={styles.andi}>Budi</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.row1Rv}>
              							<div className={styles.rvCard}>
                								<img className={styles.profileOnReviewIcon} alt="" src="/profile-on-review-detail3.png" />
                								<div className={styles.tglloc}>
                  									<b className={styles.menyenangkanIkutBersih}>Acara Bersih Pantai di Pantai Ancol mengajarkan nilai-nilai kebersamaan dan tanggung jawab lingkungan. Saya merasa berkontribusi positif.</b>
                  									<div className={styles.andi}>Citra</div>
                								</div>
              							</div>
              							<div className={styles.rvCard}>
                								<img className={styles.profileOnReviewIcon} alt="" src="/profile-on-review-detail4.png" />
                								<div className={styles.tglloc}>
                  									<b className={styles.menyenangkanIkutBersih}>Partisipasi dalam acara bersih pantai di Pantai Ancol bersama Wujud Aksi Nyata sangat menginspirasi. Pengalaman volunteering yang memuaskan!</b>
                  									<div className={styles.andi}>Dian</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Page