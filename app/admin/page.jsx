import NavAdmin from "@/components/NavAdmin";
import TabelProduk from "@/components/TabelProduk";
import Tombol from "@/components/Tombol";
import { buatSupabaseServer } from "@/lib/supabase/server";
import { formatRupiah } from "@/lib/format";

export default async function HalamanAdmin() {
  const supabase = buatSupabaseServer();
  const { data: daftarProduk } = await supabase
    .from("produk")
    .select("*")
    .order("created_at", { ascending: false });

  const produkList = daftarProduk || [];
  const totalProduk = produkList.length;
  const rataHarga = totalProduk > 0 ? Math.round(produkList.reduce((s, p) => s + p.harga, 0) / totalProduk) : 0;
  const kategoriUnik = new Set(produkList.map((p) => p.kategori).filter(Boolean)).size;

  return (
    <div className="flex flex-col gap-6 py-8">
      <NavAdmin />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-garis bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-teks-lembut">Total Produk</p>
          <p className="mt-1 text-2xl font-extrabold text-utama">{totalProduk}</p>
        </div>
        <div className="relative rounded-2xl border border-garis bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-teks-lembut">Rata-rata Harga</p>
          <p className="mt-1 text-2xl font-extrabold text-teks">{formatRupiah(rataHarga)}</p>
        </div>
        <div className="rounded-2xl border border-garis bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-teks-lembut">Total Kategori</p>
          <p className="mt-1 text-2xl font-extrabold text-amber-600">{kategoriUnik}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-extrabold">Produk</h1>
        <div className="flex items-center gap-2">
          <a
            href="/admin/ekspor-csv"
            download="produk.csv"
            className="inline-flex items-center rounded-xl border border-garis bg-white px-4 py-2 text-sm font-semibold text-teks hover:bg-permukaan"
          >
            Ekspor CSV
          </a>
          <Tombol href="/admin/produk/baru">Tambah produk</Tombol>
        </div>
      </div>

      <TabelProduk daftarProduk={produkList} />
    </div>
  );
}
