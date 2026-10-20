import Link from "next/link";
import { toko } from "@/lib/toko";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-garis bg-permukaan">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 text-sm sm:grid-cols-2">
        <div>
          <p className="text-lg font-extrabold tracking-[-0.04em] text-teks">{toko.nama}</p>
          <p className="mt-2 max-w-sm leading-6 text-teks-lembut">Produk lokal untuk momen sehari-hari yang lebih berkesan.</p>
        </div>
        <div className="sm:text-right">
          <p className="font-bold text-teks">Kunjungi atau hubungi kami</p>
          <p className="mt-2 text-teks-lembut">{toko.alamat}</p>
          <p className="text-teks-lembut">{toko.jamBuka}</p>
          <Link href="/admin" className="mt-4 inline-block text-teks-lembut underline underline-offset-4 transition hover:text-utama">
            Masuk sebagai admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
