import Link from "next/link";
import { formatRupiah } from "@/lib/format";

export default function KartuProduk({ produk, unggulan = false }) {
  return (
    <Link href={`/produk/${produk.id}`} className="group block">
      <div className="overflow-hidden rounded-[1.5rem] bg-permukaan">
        <img
          src={produk.foto_url}
          alt={produk.nama}
          className={`w-full object-cover transition duration-500 group-hover:scale-105 ${unggulan ? "aspect-4/5 p-5" : "aspect-square p-3"}`}
        />
      </div>
      <div className="px-1 pb-1 pt-4">
        <p className="text-xs font-bold tracking-wide text-teks-lembut">{produk.kategori}</p>
        <h3 className="mt-1 font-bold leading-snug tracking-[-0.02em] group-hover:text-utama">{produk.nama}</h3>
        <p className="mt-2 text-sm font-bold text-harga">{formatRupiah(produk.harga)}</p>
      </div>
    </Link>
  );
}
