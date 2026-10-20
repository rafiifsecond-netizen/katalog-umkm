import Link from "next/link";
import { toko } from "@/lib/toko";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-latar/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2.5">
        <Link href="/" className="text-base font-extrabold tracking-[-0.04em] text-teks">
          {toko.nama}
        </Link>
        <nav aria-label="Navigasi utama" className="flex items-center gap-5 text-xs font-semibold">
          <Link href="/#koleksi" className="hidden text-teks-lembut transition hover:text-teks sm:block">
            Koleksi
          </Link>
          <Link href="/#semua-produk" className="hidden text-teks-lembut transition hover:text-teks sm:block">
            Produk
          </Link>
          <a
            href={`https://wa.me/${toko.nomorWhatsApp}`}
            className="rounded-full bg-utama px-4 py-1.5 text-white transition hover:bg-utama-gelap"
          >
            Pesan
          </a>
        </nav>
      </div>
    </header>
  );
}
