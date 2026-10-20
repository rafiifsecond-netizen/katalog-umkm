import Link from "next/link";
import { toko } from "@/lib/toko";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-garis bg-white/95 backdrop-blur-md">
      {/* GoCart-style top announcement banner */}
      <div className="bg-[#111827] px-4 py-2 text-center text-xs font-medium text-gray-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="truncate">Pesan langsung via WhatsApp resmi: respon cepat &amp; tanpa biaya aplikasi</p>
          <span className="hidden sm:inline-block text-emerald-400 font-semibold">Buka {toko.jamBuka}</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-teks">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-utama text-base text-white">G</span>
            <span>{toko.nama}</span>
          </Link>
          <nav aria-label="Navigasi kategori" className="hidden md:flex items-center gap-5 text-sm font-semibold text-teks-lembut">
            <Link href="/#katalog" className="transition hover:text-utama">Katalog</Link>
            <Link href="/#keunggulan" className="transition hover:text-utama">Keunggulan</Link>
            <Link href="/#kontak" className="transition hover:text-utama">Kontak</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Tombol Pesan WhatsApp gaya cart badge GoCart */}
          <a
            href={`https://wa.me/${toko.nomorWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-utama px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-utama-gelap sm:text-sm"
          >
            <span>Chat Toko</span>
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">WA</span>
          </a>

          {/* Akses Admin jelas */}
          <Link
            href="/admin"
            className="rounded-full border border-garis px-3 py-2 text-xs font-bold text-teks transition hover:border-teks hover:bg-permukaan sm:text-sm"
          >
            Admin
          </Link>
        </div>
      </div>
    </header>
  );
}
