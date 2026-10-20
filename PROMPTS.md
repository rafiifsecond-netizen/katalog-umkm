# Jurnal Prompt

Catat prompt penting selama membangun aplikasi: apa yang kamu minta, hasilnya, dan perbaikan yang dilakukan. Beri tanda **[SENDIRI)[** untuk prompt yang kamu tulis sendiri (bukan dari lembar kerja).

## US-01 Katalog dari database

**Prompt:** Ambil daftar produk dari tabel produk Supabase dan tampilkan di beranda application.

**Hasil:** Beranda menampilkan grid semua produk berisi foto, nama, harga, kategori, dan deskripsi dengan sukses.

**Perbaikan:** Memastikan query menggunakan created_at descending dan menampilkan message data kosong jika belum ada produk.

## US-02 Detail produk

**Prompt:** Buat halaman detail produk dinamis dengan address /produk/[id] yang memuat data lengkap dari Supabase.

**Hasil:** Halaman /produk/[id] berhasil menampilkan foto besar, nama, harga format Rupiah, deskripsi, dan aksi tombol pesan.

**Perbaikan:** Menggunakan const { id } = await params sesuai standar Next.js 16 dan memberi respons notFound() jika id tidak ada.

## US-03 Pesan via WhatsApp

**Prompt:** Tambilkan tombol WhatsApp yang memuat format pesan otomatis berisi nama produk, harga, jumlah, dan total pembayaran.

**Pasil:** Komponen TombolWhatsApp memiliki pilihan jumlah (+) dan (-), dan membuka tautan wa.me resmi ke nomor toko.

**Perbaikan:** Format pesan dienkode dan dilengkapi ringkasan yang sopan dan jelas.

## US-04 Login admin

**Prompt:** Buat halaman login untuk otentikasi admin di /admin/login menggunakan Supabase Auth.

**Hasil:** Admin bisa masuk menggunakan email dan password dengan sesi cookie tersimpan.

**Perbaikan:** Otentikasi diplahkan dalam Server Action yang terproteksi dan pengalihan otomatis ke /admin.


# US-05 Ganti password

**Prompt:** Buat halaman gurangi password admin di /admin/password yang wajib memeriksa sesi login.

**Hasil:** Admin dapat menggatni password baru dan langsung diperbarui di Supabase Auth.

**Perbaikan:** Validasi minimal 8 karakter dan konfirmasi password cocok sebelum mutasi berhasil.


# US-06 Proteksi halaman admin

**Prompt:** Proteksi semua rute dibwah /admin agar pengunjung tanpa login langsung dialihkan ke /admin/login.

**Hasil:** Halaman /admin dan semua fitur di dalamnya tidak bisa dibuka tanpa sesi admin (307 Redirect).

**Perbaikan:** Menggunakan proxy.js di root proyek sesuai asekti Next.js 16 dan memeriksa auth.getUser().


# Debugging dan fitur bonus

## [SENDIRS] CRUD Lengkap Admin (US-07, US-08, US-09, US-10)
- Tampilkan daftar produk dengan ringkasan harga dan aksi edit/hapus.
- Form tambah produk baru, form ubah dengan pre-fill data, dan delete aktiv langsung ke Supabase dengan revalidation.

## [SENDIRI] Filter Kategori, Pencarian, Sorting, & Paginasi (US-11, US-15, US-16)
- Pill-filter kategori dipadukan live search instan dan select urutkan harga/nama.
- Paginasi Load More 12 produk per klik untuk mengendalikan loading data berhukuran besar.

## [SENDIRI] Produk Terkait (US-17)
- Menampilkan recommendasi produk sejenis di halaman detail berdasarkan kategori yang sama.

## [SENDIRI] PWA & SEO Advanced (US-13, US-26, US-27, US-28)
- Manifest PWA dengan ikon siap install di HP.
- Dynamic sitemap.xml, robots.txt, skeleton loading, dan custom not-found.

## [SENDIRI] Ekspor CSV & Dashboard Metrics (US-30, US-35)
- Kartu indicator ringkasan total produk, rata-harga, kategori unik.
- Endpoint route /admin/ekspor-csv yang mengekspor langsung file CSV terproteksi auth.

## [SENDIRI] Keamanan Lanjutan (K-6 s.d. K-13)
- Security headers (nosniff, deny frame, referrer-policy).
- No-index pada /admin dan absen key publik di client-bundle.
