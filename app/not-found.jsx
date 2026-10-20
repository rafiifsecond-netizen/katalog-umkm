import { toko } from "@/lib/toko";
import Tombol from "@/components/Tombol";

export default function NotFound() {
  return (
    <div className="my-16 flex flex-col items-center justify-center text-center">
      <span className="text-6xl font-extrabold text-utama">404</span>
      <h1 className="mt-4 text-2xl font-bold sm:text-3xl">Halaman tidak ditemukan</h1>
      <p className="mt-2 max-w-md text-sm text-teks-lembut">
        Produk atau halaman yang sedang Anda cari mungkin sudah dihapus, diganti nama, atau tidak tersedia.
      </p>
      <div className="mt-6 flex gap-3">
        <Tombol href="/">Kembali ke Katalog</Tombol>
        <Tombol href={`https://wa.me/${toko.nomorWhatsApp}`} varian="garis">Hubungi Kami</Tombol>
      </div>
    </div>
  );
}
