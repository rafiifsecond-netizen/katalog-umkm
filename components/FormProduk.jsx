"use client";

import { useActionState } from "react";
import Input from "@/components/Input";
import Tombol from "@/components/Tombol";

export default function FormProduk({ produk = {}, labelTombol, actionFn }) {
  const [state, formAction, pending] = useActionState(actionFn, null);

  return (
    <form action={formAction} className="flex max-w-xl flex-col gap-4">
      {state?.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <Input label="Nama produk" name="nama" defaultValue={produk.nama} required />

      <Input
        label="Harga (Rp)"
        name="harga"
        type="number"
        min="0"
        defaultValue={produk.harga}
        required
      />

      <Input label="Kategori" name="kategori" defaultValue={produk.kategori} />

      <Input
        label="Link foto"
        name="foto_url"
        placeholder="https://... atau /produk/nama-file.svg"
        defaultValue={produk.foto_url}
      />

      <Input label="Deskripsi" name="deskripsi" textarea defaultValue={produk.deskripsi} />

      <div className="flex items-center gap-3 pt-2">
        <Tombol type="submit" disabled={pending}>
          {pending ? "Menyimpan…" : labelTombol}
        </Tombol>
        <Tombol href="/admin" varian="garis">Batal</Tombol>
      </div>
    </form>
  );
}
