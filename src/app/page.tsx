import styles from '@/app/styles/index.module.css';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';


export default function Home() {
  	return (
    		<div className={styles.hmContent}>
            <MaxWidthWrapper>
              <div className={styles.contentOnHeader}>
        				<div className={styles.txtOnHeader}>
          					<i className={styles.kehadiranmuDanDonasimu}>Kehadiranmu dan donasimu ialah</i>
          					<b className={styles.kekuatanBagiOrang}>Kekuatan bagi orang lain</b>
        				</div>
        				<div className={styles.jadilahPenolongBagi}>Jadilah penolong bagi orang lain yang sangat membutuhkan bantuanmu!</div>
        				<div className={styles.primaryButtonLarge}>
          					<div className={styles.icon} />
          					<div className={styles.text}>Daftar Sekarang</div>
          					<div className={styles.icon} />
        				</div>
      			</div>
      			<div className={styles.imgs}>
        				<div className={styles.imgsContent}>
          					<img className={styles.imgIcon} alt="" src="/img1.png" />
          					<img className={styles.imgIcon} alt="" src="/img2.png" />
          					<img className={styles.imgIcon} alt="" src="/img3.png" />
          					<img className={styles.imgIcon} alt="" src="/img4.png" />
        				</div>
      			</div>
      			<div className={styles.aboutUs}>
        				<div className={styles.titleOnSectionAboutUs}>
          					<div className={styles.label}>
            						<div className={styles.aboutUs1}>About Us</div>
          					</div>
          					<div className={styles.txtOnSectionAboutUs}>
            						<b className={styles.semakinBanyakOrang}>Semakin banyak orang, Semakin banyak kebaikan</b>
            						<div className={styles.banyakOrangMembutuhkan}>Banyak orang membutuhkan bantuanmu, sekecil apapun bantuanmu sangat berdampak positif bagi lingkungan dan masyarakat</div>
          					</div>
        				</div>
        				<div className={styles.cards}>
          					<div className={styles.card}>
            						<img className={styles.imgIcon4} alt="" src="/img5.png" />
            						<div className={styles.contentOnCard}>
              							<div className={styles.txtOnCard}>
                								<b className={styles.lindungiBumiKita}>Lindungi bumi kita!</b>
                								<div className={styles.pelestarianAlamDimulai}>Pelestarian alam dimulai dari langkah kecil kita. Bergabunglah dengan kami untuk masa depan yang lebih baik!</div>
              							</div>
              							<div className={styles.primaryButtonMedium}>
                								<div className={styles.icon2} />
                								<div className={styles.text1}>Daftar sebagai volunteer</div>
                								<div className={styles.icon2} />
              							</div>
            						</div>
          					</div>
          					<div className={styles.card1}>
            						<img className={styles.imgIcon4} alt="" src="/img6.png" />
            						<div className={styles.contentOnCard}>
              							<div className={styles.txtOnCard}>
                								<b className={styles.lindungiBumiKita}>Bantu adik-adik kita!</b>
                								<div className={styles.pelestarianAlamDimulai}>Masa depan yang cerah dimulai dari pendidikan yang baik. Bergabunglah sebagai volunteer dan bantu ciptakan perubahan!</div>
              							</div>
              							<div className={styles.primaryButtonMedium}>
                								<div className={styles.icon2} />
                								<div className={styles.text1}>Daftar sebagai volunteer</div>
                								<div className={styles.icon2} />
              							</div>
            						</div>
          					</div>
          					<div className={styles.card}>
            						<img className={styles.imgIcon4} alt="" src="/img7.png" />
            						<div className={styles.contentOnCard}>
              							<div className={styles.txtOnCard}>
                								<b className={styles.lindungiBumiKita}>Sehat bersama!</b>
                								<div className={styles.pelestarianAlamDimulai}>Tunjukkan kepedulianmu dengan menjadi relawan kesehatan.Kita bisa membantu lebih banyak orang hidup sehat.</div>
              							</div>
              							<div className={styles.primaryButtonMedium}>
                								<div className={styles.icon2} />
                								<div className={styles.text1}>Daftar sebagai volunteer</div>
                								<div className={styles.icon2} />
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.banner}>
        				<div className={styles.contentBanner}>
          					<div className={styles.txtOnBanner}>
            						<b className={styles.kamuJugaBisa}>Kamu juga bisa membantu lewat donasi</b>
            						<div className={styles.satuDonasiAndaContainer}>
              							<span className={styles.satuDonasiAnda}>{`Satu donasi Anda adalah `}</span>
              							<b>#SetetesHarapan</b>
              							<span className={styles.satuDonasiAnda}> bagi mereka yang membutuhkan. Mari ulurkan tangan dan buat perbedaan hari ini!</span>
            						</div>
          					</div>
          					<div className={styles.contentPp}>
            						<div className={styles.profilePicture}>
              							<img className={styles.ppIcon} alt="" src="/pp1.png" />
              							<img className={styles.ppIcon1} alt="" src="/pp2.png" />
              							<img className={styles.ppIcon2} alt="" src="/pp3.png" />
              							<img className={styles.ppIcon3} alt="" src="/pp4.png" />
              							<img className={styles.ppIcon4} alt="" src="/pp5.png" />
            						</div>
            						<div className={styles.lebihDari1}>Lebih dari 1 juta orang telah bergabung untuk membantu</div>
          					</div>
          					<div className={styles.primaryButtonLargeIconleft}>
            						<div className={styles.icon} />
            						<div className={styles.text}>Donasi sekarang!</div>
            						<div className={styles.emoticon}>
              							<div className={styles.div}>💖</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.productSection}>
        				<div className={styles.txtOnSectionProduct}>
          					<b className={styles.semakinBanyakOrang}>Beberapa aktivitas membutuhkan bantuanmu</b>
          					<div className={styles.banyakOrangMembutuhkan}>Pilihlah aktivitas kerelawanan sesuai minat, lokasi, dan isu yang kamu sukai</div>
        				</div>
        				<div className={styles.row1PdParent}>
          					<div className={styles.row1Pd}>
            						<div className={styles.pdCard}>
              							<img className={styles.imgOnPdCardIcon} alt="" src="/img-on-pd-card.png" />
              							<div className={styles.contentPdCard}>
                								<div className={styles.detailPdCard}>
                  									<div className={styles.labelLingkungan}>
                    										<div className={styles.lingkungan}>Lingkungan</div>
                  									</div>
                  									<b className={styles.bersihPantaiNusantaraContainer}>
                    										<p className={styles.bersihPantaiNusantara}>Bersih Pantai Nusantara</p>
                  									</b>
                  									<div className={styles.penyelenggara}>
                    										<div className={styles.penyelenggaraLogo} />
                    										<div className={styles.yayasanHijauNusantara}>Yayasan Hijau Nusantara</div>
                  									</div>
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
                								</div>
                                <div className={styles.primaryButtonMedium3}>
                  									<button className='styles.icon2'>
                                      <Link href="/job/detail">Daftar sebagai volunteer</Link>
                                    </button>
                								</div>

              							</div>
            						</div>
            						<div className={styles.pdCard}>
              							<img className={styles.imgOnPdCardIcon} alt="" src="/img-on-pd-card2.png" />
              							<div className={styles.contentPdCard}>
                								<div className={styles.detailPdCard}>
                  									<div className={styles.labelLingkungan}>
                    										<div className={styles.lingkungan}>Lingkungan</div>
                  									</div>
                  									<b className={styles.bersihPantaiNusantaraContainer}>Penanaman Pohon Serentak</b>
                  									<div className={styles.penyelenggara}>
                    										<div className={styles.penyelenggaraLogo} />
                    										<div className={styles.yayasanHijauNusantara}>Gerakan Indonesia Hijau</div>
                  									</div>
                  									<div className={styles.tglloc}>
                    										<div className={styles.tanggal}>
                      											<div className={styles.calendarIcon}>
                        												<img className={styles.locationIcon} alt="" src="/calendar.svg" />
                      											</div>
                      											<div className={styles.sabtu14September}>Minggu, 22 September 2024</div>
                    										</div>
                    										<div className={styles.tanggal}>
                      											<div className={styles.calendarIcon}>
                        												<img className={styles.locationIcon} alt="" src="/location.svg" />
                      											</div>
                      											<div className={styles.sabtu14September}>Hutan Kota, Bandung</div>
                    										</div>
                  									</div>
                								</div>
                								<div className={styles.primaryButtonMedium3}>
                  									<div className={styles.icon2} />
                  									<div className={styles.text1}>Daftar sebagai volunteer</div>
                  									<div className={styles.icon2} />
                								</div>
              							</div>
            						</div>
            						<div className={styles.pdCard}>
              							<img className={styles.imgOnPdCardIcon} alt="" src="/img-on-pd-card3.png" />
              							<div className={styles.contentPdCard}>
                								<div className={styles.detailPdCard}>
                  									<div className={styles.labelLingkungan}>
                    										<div className={styles.lingkungan}>Lingkungan</div>
                  									</div>
                  									<b className={styles.bersihPantaiNusantaraContainer}>Kampanye Kurangi Plastik</b>
                  									<div className={styles.penyelenggara}>
                    										<div className={styles.penyelenggaraLogo} />
                    										<div className={styles.yayasanHijauNusantara}>Komunitas Bebas Plastik</div>
                  									</div>
                  									<div className={styles.tglloc}>
                    										<div className={styles.tanggal}>
                      											<div className={styles.calendarIcon}>
                        												<img className={styles.locationIcon} alt="" src="/calendar.svg" />
                      											</div>
                      											<div className={styles.sabtu14September}>Sabtu, 5 Oktober 2024</div>
                    										</div>
                    										<div className={styles.tanggal}>
                      											<div className={styles.calendarIcon}>
                        												<img className={styles.locationIcon} alt="" src="/location.svg" />
                      											</div>
                      											<div className={styles.sabtu14September}>Alun-Alun Kota, Surabaya</div>
                    										</div>
                  									</div>
                								</div>
                								<div className={styles.primaryButtonMedium3}>
                  									<div className={styles.icon2} />
                  									<div className={styles.text1}>Daftar sebagai volunteer</div>
                  									<div className={styles.icon2} />
                								</div>
              							</div>
            						</div>
            						<div className={styles.pdCard}>
              							<img className={styles.imgOnPdCardIcon} alt="" src="/img-on-pd-card4.png" />
              							<div className={styles.contentPdCard}>
                								<div className={styles.detailPdCard}>
                  									<div className={styles.label4}>
                    										<div className={styles.lingkungan}>Pendidikan</div>
                  									</div>
                  									<b className={styles.bersihPantaiNusantaraContainer}>Kelas Inspirasi Anak Nusantara</b>
                  									<div className={styles.penyelenggara}>
                    										<div className={styles.penyelenggaraLogo} />
                    										<div className={styles.yayasanHijauNusantara}>Yayasan Pendidikan Bangsa</div>
                  									</div>
                  									<div className={styles.tglloc}>
                    										<div className={styles.tanggal}>
                      											<div className={styles.calendarIcon}>
                        												<img className={styles.locationIcon} alt="" src="/calendar.svg" />
                      											</div>
                      											<div className={styles.sabtu14September}>Sabtu, 28 September 2024</div>
                    										</div>
                    										<div className={styles.tanggal}>
                      											<div className={styles.calendarIcon}>
                        												<img className={styles.locationIcon} alt="" src="/location.svg" />
                      											</div>
                      											<div className={styles.sabtu14September}>SDN 1, Yogyakarta</div>
                    										</div>
                  									</div>
                								</div>
                								<div className={styles.primaryButtonMedium3}>
                  									<div className={styles.icon2} />
                  									<div className={styles.text1}>Daftar sebagai volunteer</div>
                  									<div className={styles.icon2} />
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.row1Pd}>
            						<div className={styles.pdCard}>
              							<img className={styles.imgOnPdCardIcon} alt="" src="/img-on-pd-card5.png" />
              							<div className={styles.contentPdCard}>
                								<div className={styles.detailPdCard}>
                  									<div className={styles.label4}>
                    										<div className={styles.lingkungan}>Pendidikan</div>
                  									</div>
                  									<b className={styles.bersihPantaiNusantaraContainer}>Bimbingan Belajar Gratis</b>
                  									<div className={styles.penyelenggara}>
                    										<div className={styles.penyelenggaraLogo} />
                    										<div className={styles.yayasanHijauNusantara}>Komunitas Cerdas Indonesia</div>
                  									</div>
                  									<div className={styles.tglloc}>
                    										<div className={styles.tanggal}>
                      											<div className={styles.calendarIcon}>
                        												<img className={styles.locationIcon} alt="" src="/calendar.svg" />
                      											</div>
                      											<div className={styles.sabtu14September}>Minggu, 6 Oktober 2024</div>
                    										</div>
                    										<div className={styles.tanggal}>
                      											<div className={styles.calendarIcon}>
                        												<img className={styles.locationIcon} alt="" src="/location.svg" />
                      											</div>
                      											<div className={styles.sabtu14September}>Balai Desa, Semarang</div>
                    										</div>
                  									</div>
                								</div>
                								<div className={styles.primaryButtonMedium3}>
                  									<div className={styles.icon2} />
                  									<div className={styles.text1}>Daftar sebagai volunteer</div>
                  									<div className={styles.icon2} />
                								</div>
              							</div>
            						</div>
            						<div className={styles.pdCard}>
              							<img className={styles.imgOnPdCardIcon} alt="" src="/img-on-pd-card6.png" />
              							<div className={styles.contentPdCard}>
                								<div className={styles.detailPdCard}>
                  									<div className={styles.label4}>
                    										<div className={styles.lingkungan}>Pendidikan</div>
                  									</div>
                  									<b className={styles.bersihPantaiNusantaraContainer}>Perpustakaan Keliling</b>
                  									<div className={styles.penyelenggara}>
                    										<div className={styles.penyelenggaraLogo} />
                    										<div className={styles.yayasanHijauNusantara}>Yayasan Literasi Bangsa</div>
                  									</div>
                  									<div className={styles.tglloc}>
                    										<div className={styles.tanggal}>
                      											<div className={styles.calendarIcon}>
                        												<img className={styles.locationIcon} alt="" src="/calendar.svg" />
                      											</div>
                      											<div className={styles.sabtu14September}>Sabtu, 12 Oktober 2024</div>
                    										</div>
                    										<div className={styles.tanggal}>
                      											<div className={styles.calendarIcon}>
                        												<img className={styles.locationIcon} alt="" src="/location.svg" />
                      											</div>
                      											<div className={styles.sabtu14September}>Taman Kota, Medan</div>
                    										</div>
                  									</div>
                								</div>
                								<div className={styles.primaryButtonMedium3}>
                  									<div className={styles.icon2} />
                  									<div className={styles.text1}>Daftar sebagai volunteer</div>
                  									<div className={styles.icon2} />
                								</div>
              							</div>
            						</div>
            						<div className={styles.pdCard}>
              							<img className={styles.imgOnPdCardIcon} alt="" src="/img-on-pd-card7.png" />
              							<div className={styles.contentPdCard}>
                								<div className={styles.detailPdCard}>
                  									<div className={styles.label7}>
                    										<div className={styles.lingkungan}>Kesehatan</div>
                  									</div>
                  									<b className={styles.bersihPantaiNusantaraContainer}>Klinik Kesehatan Gratis</b>
                  									<div className={styles.penyelenggara}>
                    										<div className={styles.penyelenggaraLogo} />
                    										<div className={styles.yayasanHijauNusantara}>Yayasan Sehat Bersama</div>
                  									</div>
                  									<div className={styles.tglloc}>
                    										<div className={styles.tanggal}>
                      											<div className={styles.calendarIcon}>
                        												<img className={styles.locationIcon} alt="" src="/calendar.svg" />
                      											</div>
                      											<div className={styles.sabtu14September}>Minggu, 20 Oktober 2024</div>
                    										</div>
                    										<div className={styles.tanggal}>
                      											<div className={styles.calendarIcon}>
                        												<img className={styles.locationIcon} alt="" src="/location.svg" />
                      											</div>
                      											<div className={styles.sabtu14September}>Lapangan Merdeka, Palembang</div>
                    										</div>
                  									</div>
                								</div>
                								<div className={styles.primaryButtonMedium3}>
                  									<div className={styles.icon2} />
                  									<div className={styles.text1}>Daftar sebagai volunteer</div>
                  									<div className={styles.icon2} />
                								</div>
              							</div>
            						</div>
            						<div className={styles.pdCard}>
              							<img className={styles.imgOnPdCardIcon} alt="" src="/img-on-pd-card8.png" />
              							<div className={styles.contentPdCard}>
                								<div className={styles.detailPdCard}>
                  									<div className={styles.label7}>
                    										<div className={styles.lingkungan}>Kesehatan</div>
                  									</div>
                  									<b className={styles.bersihPantaiNusantaraContainer}>Kampanye Hidup Sehat</b>
                  									<div className={styles.penyelenggara}>
                    										<div className={styles.penyelenggaraLogo} />
                    										<div className={styles.yayasanHijauNusantara}>Komunitas Peduli Kesehatan</div>
                  									</div>
                  									<div className={styles.tglloc}>
                    										<div className={styles.tanggal}>
                      											<div className={styles.calendarIcon}>
                        												<img className={styles.locationIcon} alt="" src="/calendar.svg" />
                      											</div>
                      											<div className={styles.sabtu14September}>Sabtu, 26 Oktober 2024</div>
                    										</div>
                    										<div className={styles.tanggal}>
                      											<div className={styles.calendarIcon}>
                        												<img className={styles.locationIcon} alt="" src="/location.svg" />
                      											</div>
                      											<div className={styles.sabtu14September}>Alun-Alun Kota, Makassar</div>
                    										</div>
                  									</div>
                								</div>
                								<div className={styles.primaryButtonMedium3}>
                  									<div className={styles.icon2} />
                  									<div className={styles.text1}>Daftar sebagai volunteer</div>
                  									<div className={styles.icon2} />
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.primaryButtonLarge1}>
          					<div className={styles.icon} />
          					<div className={styles.text13}>Lihat semuanya</div>
          					<div className={styles.icon} />
        				</div>
      			</div>
      			<div className={styles.donateSection}>

            <div className={styles.txtOnSectionDonate}>
              <b className={styles.merekaSangatMembutuhkan}>Mereka sangat membutuhkan bantuan kamu</b>
              <div className={styles.bukanMasalahBesar}>Bukan masalah besar atau kecilnya, sekecil apapun bantuanmu dapat mengukir masa depan mereka</div>
            </div>
            <div className={styles.donateCards}>
              <div className={styles.donateCardLingk}>
                <div className={styles.contentDonateCard}>
                  <div className={styles.detailDonCard}>
                    <div className={styles.label}>
                      <div className={styles.lingkungan}>Lingkungan</div>
                    </div>
                    <div className={styles.title}>
                      <div className={styles.restorasiHutanKalimantan}>Restorasi Hutan Kalimantan</div>
                        <div className={styles.yayasanAlamLestari}>Yayasan Alam Lestari</div>
                    </div>
            <div className={styles.terkumpul}>
            <div className={styles.slider}>
            <div className={styles.objSlider} />
            </div>
            <div className={styles.uang}>
            <div className={styles.idr75000000}>IDR 75.000.000</div>
            <div className={styles.idr150000000}>IDR 150.000.000</div>
            </div>
            </div>
            </div>
            <div className={styles.primaryButtonMedium}>
            <div className={styles.icon} />
            <div className={styles.text}>Berikan donasi</div>
            <div className={styles.icon} />
            </div>
            </div>
            </div>
            <div className={styles.donateCardPend}>
            <div className={styles.contentDonateCard}>
            <div className={styles.detailDonCard}>
            <div className={styles.label1}>
            <div className={styles.lingkungan}>Pendidikan</div>
            </div>
            <div className={styles.title}>
            <div className={styles.restorasiHutanKalimantan}>Beasiswa Anak Cerdas</div>
            <div className={styles.yayasanAlamLestari}>Yayasan Pendidikan Harapan Bangsa</div>
            </div>
            <div className={styles.terkumpul}>
            <div className={styles.slider}>
            <div className={styles.objSlider1} />
            </div>
            <div className={styles.uang}>
            <div className={styles.idr75000000}>IDR 120.000.00</div>
            <div className={styles.idr150000000}>IDR 200.000.000</div>
            </div>
            </div>
            </div>
            <div className={styles.primaryButtonMedium}>
            <div className={styles.icon} />
            <div className={styles.text}>Berikan donasi</div>
            <div className={styles.icon} />
            </div>
            </div>
            </div>
            <div className={styles.donateCardKes}>
            <div className={styles.contentDonateCard}>
            <div className={styles.detailDonCard}>
            <div className={styles.label2}>
            <div className={styles.lingkungan}>Kesehatan</div>
            </div>
            <div className={styles.title}>
            <div className={styles.restorasiHutanKalimantan}>Klinik Gratis di Desa Tertinggal</div>
            <div className={styles.yayasanAlamLestari}>Yayasan Alam Lestari</div>
            </div>
            <div className={styles.terkumpul}>
            <div className={styles.slider}>
            <div className={styles.objSlider} />
            </div>
            <div className={styles.uang}>
            <div className={styles.idr75000000}>IDR 50.000.000</div>
            <div className={styles.idr150000000}>IDR 100.000.000</div>
            </div>
            </div>
            </div>
            <div className={styles.primaryButtonMedium}>
            <div className={styles.icon} />
            <div className={styles.text}>Berikan donasi</div>
            <div className={styles.icon} />
            </div>
            </div>
            </div>
            </div>
            <div className={styles.primaryButtonLarge}>
            <div className={styles.icon6} />
            <div className={styles.text3}>Lihat semuanya</div>
            <div className={styles.icon6} />
            </div>
            </div>

      			<div className={styles.reviewSection}>
        				<b className={styles.semakinBanyakOrang}>Apa kata mereka tentang volunteer?</b>
          					<div className={styles.rvCards}>
            						<div className={styles.row1Rv}>
              							<div className={styles.rvCard}>
                								<img className={styles.profileOnReviewIcon} alt="" src="/profile-on-review.png" />
                								<div className={styles.contentRvCard}>
                  									<b className={styles.iniMerupakanPengalaman}>Ini merupakan pengalaman yang sangat luar biasa, saya merasa sangat baik dengan mengikuti volunteering, dan saya harap bisa lebih banyak lagi orang yang ingin melalukan voluntary.</b>
                  									<div className={styles.sitiAsmuni}>Siti Asmuni</div>
                								</div>
              							</div>
              							<div className={styles.rvCard}>
                								<img className={styles.profileOnReviewIcon} alt="" src="/profile-on-review2.png" />
                								<div className={styles.contentRvCard}>
                  									<b className={styles.iniMerupakanPengalaman}>Bersih Pantai Nusantara adalah pengalaman yang menginspirasi. Saya senang melihat semangat bersama menjaga kebersihan pantai.</b>
                  									<div className={styles.sitiAsmuni}>Rina</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.row1Rv}>
              							<div className={styles.rvCard}>
                								<img className={styles.profileOnReviewIcon} alt="" src="/profile-on-review3.png" />
                								<div className={styles.contentRvCard}>
                  									<b className={styles.iniMerupakanPengalaman}>Penanaman Pohon Serentak di Bandung memberi saya kesempatan berkontribusi untuk lingkungan. Sangat bermanfaat!</b>
                  									<div className={styles.sitiAsmuni}>Ahmad</div>
                								</div>
              							</div>
              							<div className={styles.rvCard}> 
                								<img className={styles.profileOnReviewIcon} alt="" src="/profile-on-review4.png" />
                								<div className={styles.contentRvCard}>
                  									<b className={styles.iniMerupakanPengalaman}>Kelas Inspirasi Anak Nusantara di Yogyakarta mengesankan. Saya bangga bisa berbagi inspirasi dengan anak-anak.</b>
                  									<div className={styles.sitiAsmuni}>Budi</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					</div>
            </MaxWidthWrapper>
        </div>
    );
};