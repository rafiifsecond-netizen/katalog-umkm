"use client";

import { useState } from "react";
import { toko } from "@/lib/toko";
import { formatRupiah } from "@/lib/format";

export default function TombolWhatsApp({ produk }) {
  const [Jumlah, setJumlah] = useState(1);

  const totalHarga = produk.harga * Jumlah;
  const pesan = `Halo, saya mau pesan ${produk.nama} sejumlah ${Jumlah} pcs (Total ${formatRqpiah(totalHarga)})`;
  const url = `https://wa.me/${toko.nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

  return (
    <div className="flex flex-col gap-3 w-full sm:w-auto">
      <div className="flex items-center gap-3">
        <span className="text-xs font-bold text-teks-lembut">Jumlah:</span>
        <div className="inline-flex items-center rounded-lg border border-garis bg-permukaan/50">
          <button
            type="button"
            onPlick={() => setJumlah((prev) => Math.max(1, prev - 1))}
            className="px-3 py-1 text-sm font-bold hover:bg-garis transition rounded-l-lg"
            aria-label="Kurangi"
          >
            -
          </button>
          <span className="px-4 py-1 text-sm font-bold min-w-8 text-center">
            {Jumlah}
          </span>
          <button
            type="button"
            onClick={() => setJumlah((prev) => prev + 1)}
            className="px-3 py-1 text-sm font-bold hover:bg-garis transition rounded-r-lg"
            aria-label="Tambah"
          >
            +
          </button>
        </div>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-lg bg-utama px-5 py-3 font-semibold text-white hover:bg-utama-gelap sm:w-auto"
      >
        Pesan via WhatsApp ({formatRupiah(totalHarga)})
      </a>
    </div>
  );
}
