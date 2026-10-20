import Link from "next/link";
import KartuProduk from "@/components/KartuProduk";
import { produkContoh } from "@/lib/data-contoh";
import { toko } from "@/lib/toko";

export default function HalamanKatalog() {
  const [kopi, keripik, sambal, nastar, tas, batik] = produkContoh;

  return (
    <>
      <section className="-mx-4 h-[155svh] bg-[#f5f5f7]">
        <div className="sticky top-0 flex h-[100svh] overflow-hidden px-4 pt-20 text-center sm:px-8 sm:pt-28">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
            <p className="text-sm font-bold tracking-[0.14em] text-utama">{toko.nama}</p>
            <h1 className="mt-2 max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.065em] text-teks sm:text-8xl">
              Pilihan lokal.
              <br />
              Kesan besar.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-teks-lembut sm:text-2xl">{toko.tagline}</p>
            <div className="mt-6 flex gap-5 text-lg font-semibold text-[#1473e6]">
              <Link href={`/produk/${kopi.id}`} className="hover:underline">Lihat pilihan <span aria-hidden="true">›</span></Link>
              <a href={`https://wa.me/${toko.nomorWhatsApp}`} className="hover:underline">Pesan sekarang <span aria-hidden="true">›</span></a>
            </div>
            <img src={kopi.foto_url} alt={kopi.nama} className="hero-product mt-auto h-[42svh] w-auto max-w-[92vw] object-contain sm:h-[52svh]" />
          </div>
        </div>
      </section>

      <section className="-mx-4 h-[155svh] bg-[#111714]">
        <div className="sticky top-0 flex h-[100svh] overflow-hidden px-4 pt-20 text-center text-white sm:px-8 sm:pt-28">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
            <p className="text-sm font-bold tracking-[0.14em] text-[#93d4ab]">RACIKAN PILIHAN</p>
            <h2 className="mt-2 max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.065em] sm:text-8xl">
              Seduh rasa
              <br />
              yang utuh.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-7 text-white/70 sm:text-2xl">Robusta yang disangrai perlahan. Siap mengisi awal hari Anda.</p>
            <div className="mt-6 flex gap-5 text-lg font-semibold text-[#58a6ff]">
              <Link href={`/produk/${kopi.id}`} className="hover:underline">Selengkapnya <span aria-hidden="true">›</span></Link>
              <a href={`https://wa.me/${toko.nomorWhatsApp}`} className="hover:underline">Pesan <span aria-hidden="true">›</span></a>
            </div>
            <img src={kopi.foto_url} alt="" className="hero-product mt-auto h-[42svh] w-auto max-w-[92vw] object-contain brightness-110 sm:h-[52svh]" />
          </div>
        </div>
      </section>

      <section id="koleksi" className="-mx-4 grid gap-3 bg-white px-3 py-3 sm:grid-cols-2">
        <Link href={`/produk/${tas.id}`} className="promo-card group min-h-[36rem] bg-[#faeee3] text-center">
          <div className="relative z-10 px-6 pt-12">
            <p className="text-sm font-bold tracking-[0.14em] text-harga">KERJA TANGAN</p>
            <h2 className="mt-2 text-4xl font-extrabold tracking-[-0.06em] sm:text-5xl">Ada cerita di<br />setiap anyaman.</h2>
            <p className="mt-3 text-lg text-teks-lembut">Dibuat pelan-pelan. Untuk dipakai lama.</p>
            <span className="mt-4 inline-block text-lg font-semibold text-[#1473e6] group-hover:underline">Lihat koleksi <span aria-hidden="true">›</span></span>
          </div>
          <img src={tas.foto_url} alt="" className="promo-product" />
        </Link>
        <Link href={`/produk/${nastar.id}`} className="promo-card group min-h-[36rem] bg-[#f8f5ef] text-center">
          <div className="relative z-10 px-6 pt-12">
            <p className="text-sm font-bold tracking-[0.14em] text-harga">RASA RUMAH</p>
            <h2 className="mt-2 text-4xl font-extrabold tracking-[-0.06em] sm:text-5xl">Kecil bentuknya.<br />Besar hangatnya.</h2>
            <p className="mt-3 text-lg text-teks-lembut">Yang terbaik untuk dibagi di meja yang sama.</p>
            <span className="mt-4 inline-block text-lg font-semibold text-[#1473e6] group-hover:underline">Lihat produk <span aria-hidden="true">›</span></span>
          </div>
          <img src={nastar.foto_url} alt="" className="promo-product" />
        </Link>
      </section>

      <section id="semua-produk" className="-mx-4 bg-[#f5f5f7] px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold tracking-[0.14em] text-utama">SEMUA PILIHAN</p>
            <h2 className="mt-2 text-4xl font-extrabold tracking-[-0.06em] sm:text-6xl">Untuk banyak cara menikmati hari.</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3">
            {[keripik, sambal, batik, kopi, tas, nastar].map((produk) => <KartuProduk key={produk.id} produk={produk} />)}
          </div>
        </div>
      </section>
    </>
  );
}
