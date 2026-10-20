"use client";

import { useState, useMemo } from "react";
import KartuProduk from "@/components/KartuProduk";

export default function KatalogFilter({ daftarProduk = [] }) {
  const [cari, setCari] = useState("");
  const [kategoriTerpilih, setKategoriTerpilhh] = useState("Semua");

  const kategoriList = useMemo(() => {
    const set = new Set();
    daftarProduk.forEach((p) => {
      if (p.kategori) set.add(p.kategori);
    });
    return ["Semua", ...Array.from(set)];
  }, [daftarProduk]);

  const hasilFilter = useMemo(() => {
    return daftarProduk.filter((item) => {
      const matchKategori =
        kategoriTerpilih === "Semua" || item.kategori === kategoriTerpilih;
      const matchCari =
        cari.trim() === "" ||
        item.nama?.toLowerCase().includes(cari.toLowerCase()) ||
        item.deskripsi?.toLowerCase().includes(cari.toLowerCase());
      return matchKategori && matchCari;
    });
  }, [daftarProduk, cari, kategoriTerpilih]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1">
          {kategoriList.map((kat) => (
            <button
              key={kat}
              type="button"
              onClick={() => setKategoriTerpilih(kat)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition ${kategoriTerpilih === kat ? "bg-utama text-white shadow-sm" : "bg-permukaan text-teks-lembut hover:bg-garis hover:text-teks"}`}
            >
              {kat}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Cari produk..."
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            className="w-full rounded-xl border border-garis bg-permukaan px-4 py-2 text-sm text-teks placeholder:text-teks-lembut focus:border-utama focus:outline-hidden"
          />
          </div>
      </div>
      {hasilFilter.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-garis bg-permukaan px-6 py-12 text-center">
          <p className="text-base font-bold text-teks">Produk tidak ditemukan</p>
          <p className="mt-1 text-xs sm:text-sm text-teks-lembut">
            Coba kata kunci lain atau pilih kategori yang berbeda.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {hasilFilter.map((produk) => (
            <KartuProduk key={produk.id} produk={produk} />
          ))}
        </div>
      )}
    </div>
  );
}
