import Link from "next/link";
import { formatRupiah } from "@/lib/format";

// Fallback foto internet berkualitas tinggi jika foto produk lokal/kosong
const FOTO_INTERNET_DEFAULT = "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80";

export default function KartuProduk({ produk }) {
  const fotoSumber = produk.foto_url && produk.foto_url.startsWith("http")
    ? produk.foto_url
    : FOTO_INTERNET_DEFAULT;

  return (
    <Link
      href={`/produk/${produk.id}`}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-garis bg-white p-3 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-utama hover:shadow-md"
    >
      <div>
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-permukaan">
          <img
            src={fotoSumber}
            alt={produk.nama}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute top-2 left-2 rounded-md bg-white/90 px-2 py-0.5 text-[11px] font-bold text-teks shadow-xs">
            {produk.kategori || "Produk"}
          </span>
        </div>
        <div className="pt-3">
          <h3 className="line-clamp-2 text-sm font-bold text-teks transition group-hover:text-utama sm:text-base">
            {produk.nama}
          </h3>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-garis/60 pt-2.5">
        <p className="text-sm font-extrabold text-harga sm:text-base">{formatRupiah(produk.harga)}</p>
        <span className="rounded-lg bg-utama/10 px-2 py-1 text-xs font-bold text-utama group-hover:bg-utama group-hover:text-white transition">
          Beli
        </span>
      </div>
    </Link>
  );
}
