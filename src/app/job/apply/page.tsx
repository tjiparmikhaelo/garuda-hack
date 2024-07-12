import styles from '@/app/styles/apply.module.css'
import Link from 'next/link'

const Page = () => {
  return (
    <div className={styles.contentBio}>
        <div className={styles.contentBioPelamar}>
            <div className={styles.title}>
                <b className={styles.biodataPelamar}>Biodata pelamar</b>
                <div className={styles.detailKontakIni}>Detail kontak ini akan digunakan untuk seleksi dan sertifikat.</div>
            </div>
            <div className={styles.biodata}>
                <div className={styles.input}>
                    <div className={styles.options}>
                        <div className={styles.option}>
                            <img className={styles.radioButtonIcon} alt="" src="/radio-button.svg" />
                            <div className={styles.tuan}>Tuan</div>
                        </div>
                        <div className={styles.option}>
                            <img className={styles.radioButtonIcon} alt="" src="/radio-button.svg" />
                            <div className={styles.tuan}>Nyonya</div>
                        </div>
                        <div className={styles.option}>
                            <img className={styles.radioButtonIcon} alt="" src="/radio-button.svg" />
                            <div className={styles.tuan}>Nona</div>
                        </div>
                    </div>
                    <div className={styles.inputField}>
                        <div className={styles.namaLengkapSesuai}>Nama Lengkap Sesuai Identitas</div>
                    </div>
                    <div className={styles.phoneInput}>
                        <div className={styles.country}>
                            <img className={styles.idIndonesia} alt="" src="/indonesia.png" />
                        </div>
                        <div className={styles.contentPnsl}>
                            <div className={styles.nomorPonsel}>Nomor Ponsel</div>
                            <div className={styles.div}>+62</div>
                        </div>
                    </div>
                    <div className={styles.inputField}>
                        <div className={styles.namaLengkapSesuai}>Alamat Email</div>
                    </div>
                    <div className={styles.inputField}>
                        <div className={styles.namaLengkapSesuai}>Akun Instagram</div>
                    </div>
                    <div className={styles.inputField3}>
                        <div className={styles.namaLengkapSesuai}>Unggah CV (.pdf)</div>
                        <div className={styles.unggahWrapper}>
                            <div className={styles.unggah}>Unggah</div>
                        </div>
                    </div>
                    <div className={styles.inputField4}>
                        <div className={styles.namaLengkapSesuai}>Alasan kenapa ingin mengikuti kegiatan ini? (Maks. 500 kata)</div>
                            </div>
                            </div>
                            <button className={styles.primaryButtonLarge}>
                                <div className={styles.icon} />
                                <div className={styles.text}>
                                  <Link href='/job/success'>Kirim lamaran saya!</Link>
                                </div>
                                <div className={styles.icon} />
                            </button>
                          </div>
                        </div>
                      </div>
  )
}

export default Page