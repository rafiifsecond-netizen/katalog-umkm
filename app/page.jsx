import Link from "next/link";
import KartuProduk from "@/components/KartuProduk";
import { produkContoh } from "@/lib/data-contoh";
import { toko } from "@/lib/toko";

export default function HalamanKatalog() {
  const produkUnggulan = produkContoh.slice(0, 3);

  return (
    <>
      <section className="hero-grid -mx-4 overflow-hidden px-4 py-16 text-center sm:px-8 sm:py-24">
        <p className="mb-3 text-sm font-bold tracking-[0.16em] text-utama">PILIHAN LOKAL</p>
        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-[-0.06em] sm:text-7xl">
          Yang dibuat dekat,
          <br />
          terasa istimewa.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-teks-lembut sm:text-xl">{toko.tagline}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="#koleksi" className="rounded-full bg-utama px-5 py-3 text-sm font-bold text-white transition hover:bg-utama-gelap">
            Jelajahi koleksi
          </Link>
          <a href={`https://wa.me/${toko.nomorWhatsApp}`} className="rounded-full border border-garis bg-latar px-5 py-3 text-sm font-bold transition hover:border-teks">
            Hubungi kami
          </a>
        </div>
      </section>

      <section className="grid gap-4 py-6 sm:grid-cols-2">
        <Link href={`/produk/${produkContoh[0].id}`} className="group relative min-h-105 overflow-hidden rounded-[2rem] bg-[#e8eee9] p-7 sm:p-10">
          <div className="relative z-10 max-w-xs">
            <p className="text-sm font-bold text-utama">Racikan pilihan</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.05em]">Seduh rasa asli.</h2>
            <p className="mt-3 text-teks-lembut">Kopi yang disiapkan perlahan untuk pagi yang lebih baik.</p>
            <span className="mt-5 inline-block text-sm font-bold text-utama group-hover:underline">Lihat produk →</span>
          </div>
          <img src={produkContoh[0].foto_url} alt="" className="absolute -bottom-10 -right-8 w-72 rotate-[-8deg] transition duration-500 group-hover:-translate-y-3 group-hover:rotate-[-3deg] sm:w-80" />
        </Link>
        <Link href={`/produk/${produkContoh[4].id}`} className="group relative min-h-105 overflow-hidden rounded-[2rem] bg-[#f8ead9] p-7 sm:p-10">
          <div className="relative z-10 max-w-xs">
            <p className="text-sm font-bold text-harga">Dibuat tangan</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.05em]">Ada cerita di tiap anyaman.</h2>
            <p className="mt-3 text-teks-lembut">Benda sehari-hari, dibentuk dengan ketelitian perajin lokal.</p>
            <span className="mt-5 inline-block text-sm font-bold text-harga group-hover:underline">Lihat produk →</span>
          </div>
          <img src={produkContoh[4].foto_url} alt="" className="absolute -bottom-10 -right-7 w-72 rotate-[9deg] transition duration-500 group-hover:-translate-y-3 group-hover:rotate-[4deg] sm:w-80" />
        </Link>
      </section>

      <section id="koleksi" className="scroll-mt-20 py-16 sm:py-24">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-[0.16em] text-utama">KOLEKSI</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.05em] sm:text-5xl">Pilihan untuk hari ini.</h2>
          </div>
          <Link href="#semua-produk" className="hidden text-sm font-bold text-utama hover:underline sm:block">Lihat semua produk →</Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {produkUnggulan.map((produk) => <KartuProduk key={produk.id} produk={produk} unggulan />)}
        </div>
      </section>

      <section className="rounded-[2rem] bg-teks px-7 py-12 text-center text-white sm:px-12 sm:py-16">
        <p className="text-sm font-bold tracking-[0.16em] text-[#a7c9b8]">PESAN LANGSUNG</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.05em] sm:text-5xl">Mau tanya sebelum memilih?</h2>
        <p className="mx-auto mt-4 max-w-lg leading-7 text-white/70">Ceritakan yang Anda cari. Kami bantu memilihkan produk yang tepat lewat WhatsApp.</p>
        <a href={`https://wa.me/${toko.nomorWhatsApp}`} className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-teks transition hover:bg-[#dff1e6]">Mulai percakapan</a>
      </section>

      <section id="semua-produk" className="scroll-mt-20 py-16 sm:py-24">
        <div className="mb-8 border-b border-garis pb-5">
          <p className="text-sm font-bold tracking-[0.16em] text-utama">SEMUA PRODUK</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.05em] sm:text-5xl">Dibuat dengan niat baik.</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {produkContoh.map((produk) => <KartuProduk key={produk.id} produk={produk} />)}
        </div>
      </section>
    </>
  );
}
