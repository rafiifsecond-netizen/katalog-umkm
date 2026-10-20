import KatalogFilter from "@/components/KatalogFilter";
import Link from "next/link";
import { buatSupabaseServer } from "@/lib/supabase/server";
import { toko } from "@/lib/toko";

export default async function HalamanKatalog() {
  const supabase = buatSupabaseServer();
  const { data: daftarProduk, error } = await supabase
    .from("produk")
    .select("*")
    .order("created_at", { ascending: false });

  const semuaProduk = daftarProduk || [];
  const heroProduk = semuaProduk[0];

  return (
    <div className="space-y-12 py-6 sm:space-y-16">
      {/* Hero Banner GoCart */}
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] p-6 text-white sm:p-12">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">
              <span>✨ Produk UMKM Pilihan Terbaik</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Belanja Produk Lokal, <br className="hidden sm:inline" />
              Pesan Cepat via WhatsApp
            </h1>
            <p className="max-w-lg text-sm sm:text-base text-gray-300">
              {toko.tagline}. Dapatkan kualitas rasa dan buatan tangan terbaik langsung dari produsen lokal tanpa perantara rumit.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#katalog"
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-emerald-600"
              >
                Lihat Semua Produk
              </Link>
              <a
                href={`https://wa.me/${toko.nomorWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-600 bg-gray-800/80 px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-700"
              >
                Hubungi Penjual
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-4/3 sm:aspect-square max-w-md overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80"
                alt="Koleksi Produk Pilihan"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-black/75 p-3 backdrop-blur-sm">
                <p className="text-xs text-emerald-400 font-semibold">Toko Resmi</p>
                <p className="font-bold text-sm text-white truncate">{toko.nama}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strip Fitur GoCart: Keunggulan Layanan Toko */}
      <section id="keunggulan" className="grid grid-cols-1 gap-4 rounded-2xl border border-garis bg-permukaan/60 p-6 sm:grid-cols-3">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 text-xl font-bold">
            🚀
          </div>
          <div>
            <h4 className="font-bold text-teks text-sm sm:text-base">Pemesanan Mudah</h4>
            <p className="text-xs sm:text-sm text-teks-lembut">1 Klik langsung chat WA penjual.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800 text-xl font-bold">
            ⭐
          </div>
          <div>
            <h4 className="font-bold text-teks text-sm sm:text-base">Kualitas Asli</h4>
            <p className="text-xs sm:text-sm text-teks-lembut">Bahan fresh langsung dari UMKM lokal.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-800 text-xl font-bold">
            💬
          </div>
          <div>
            <h4 className="font-bold text-teks text-sm sm:text-base">Layanan Ramah</h4>
            <p className="text-xs sm:text-sm text-teks-lembut">Tersedia konsultasi produk via WhatsApp.</p>
          </div>
        </div>
      </section>

      {/* Daftar Produk GoCart Style */}
      <section id="katalog" className="space-y-6 scroll-mt-24">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-garis pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-utama">Katalog Pilihan</span>
            <h2 className="text-2xl font-extrabold text-teks sm:text-3xl">Semua Produk</h2>
          </div>
          <p className="text-xs sm:text-sm text-teks-lembut">
            Menampilkan {semuaProduk.length} produk siap pesan
          </p>
        </div>

        {error && (
          <p className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-700">
            Gagal memuat produk: {error.message}
          </p>
        )}

        {!error && semuaProduk.length === 0 && (
          <div className="rounded-2xl border border-dashed border-garis bg-permukaan px-6 py-14 text-center">
            <p className="text-xl font-bold">Produk sedang disiapkan.</p>
            <p className="mt-2 text-sm text-teks-lembut">Hubungi toko via WhatsApp untuk cek stok terbaru.</p>
          </div>
        )}

        {!error && semuaProduk.length > 0 && <KatalogFilter daftarProduk={semuaProduk} />}
      </section>

      {/* CTA Box GoCart Newsletter/Order Style */}
      <section id="kontak" className="rounded-3xl bg-utama p-8 text-center text-white sm:p-12">
        <h3 className="text-2xl font-extrabold sm:text-3xl">Punya Pertanyaan atau Pesanan Khusus?</h3>
        <p className="mx-auto mt-2 max-w-xl text-sm sm:text-base text-emerald-100">
          Kami siap melayani kebutuhan grosir, hampers, atau konsultasi produk setiap hari jam {toko.jamBuka}.
        </p>
        <div className="mt-6">
          <a
            href={`https://wa.me/${toko.nomorWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-utama shadow-md transition hover:bg-emerald-50"
          >
            Hubungi Admin via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
