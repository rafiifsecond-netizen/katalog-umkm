import Link from "next/link";
import { toko } from "@/lib/toko";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-garis bg-white text-sm text-teks-lembut">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Kolom 1: Brand & Tagline */}
        <div>
          <p className="text-base font-extrabold text-teks">{toko.nama}</p>
          <p className="mt-2 text-xs leading-5 text-teks-lembut">{toko.tagline}</p>
          <p className="mt-3 text-xs text-teks-lembut">Jam Operasional: {toko.jamBuka}</p>
        </div>

        {/* Kolom 2: Akses Pelanggan */}
        <div>
          <p className="font-bold text-teks text-xs uppercase tracking-wider">Akses Pelanggan</p>
          <ul className="mt-3 space-y-2 text-xs">
            <li><Link href="/#katalog" className="hover:text-utama">Katalog Produk</Link></li>
            <li><Link href="/#keunggulan" className="hover:text-utama">Layanan &amp; Kualitas</Link></li>
            <li><a href={`https://wa.me/${toko.nomorWhatsApp}`} className="hover:text-utama">Chat Penjual WhatsApp</a></li>
          </ul>
        </div>

        {/* Kolom 3: Akses Admin & Keamanan */}
        <div>
          <p className="font-bold text-teks text-xs uppercase tracking-wider">Akses Pengelola</p>
          <ul className="mt-3 space-y-2 text-xs">
            <li><Link href="/admin" className="hover:text-utama">Dashboard Admin</Link></li>
            <li><Link href="/admin/login" className="hover:text-utama">Login Pemilik Toko</Link></li>
            <li><Link href="/admin/password" className="hover:text-utama">Keamanan Password</Link></li>
          </ul>
        </div>

        {/* Kolom 4: Alamat Toko */}
        <div>
          <p className="font-bold text-teks text-xs uppercase tracking-wider">Lokasi Toko</p>
          <p className="mt-3 text-xs leading-5">{toko.alamat}</p>
        </div>
      </div>

      <div className="border-t border-garis py-4 text-center text-xs text-teks-lembut">
        <p>© {new Date().getFullYear()} {toko.nama}. Katalog online &amp; pemesanan WhatsApp aman.</p>
      </div>
    </footer>
  );
}
