"use server";

import { redirect } from "next/navigation";
import { buatSupabaseAdmin } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

/**
 * US-04: Login admin dengan email dan password.
 */
export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const supabase = await buatSupabaseAdmin();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: "Email atau password salah. Coba lagi." };
  }

  redirect("/admin");
}

/**
 * US-04: Keluar dari sesi admin.
 */
export async function keluar() {
  const supabase = await buatSupabaseAdmin();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

/**
 * US-05: Ganti password admin yang sedang login.
 */
export async function gantiPassword(prevState, formData) {
  const passwordBaru = formData.get("password_baru");
  const konfirmasi = formData.get("konfirmasi_password");

  if (!passwordBaru || passwordBaru.length < 8) {
    return { error: "Password baru minimal 8 karakter." };
  }

  if (passwordBaru !== konfirmasi) {
    return { error: "Password baru dan konfirmasi tidak sama." };
  }

  const supabase = await buatSupabaseAdmin();

  // Periksa login di server
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { error: "Sesi tidak valid. Silakan login kembali." };
  }

  const { error } = await supabase.auth.updateUser({ password: passwordBaru });

  if (error) {
    return { error: `Gagal mengganti password: ${error.message}` };
  }

  return { sukses: "Password berhasil diganti." };
}

/**
 * Helper: Periksa apakah sesi admin aktif
 */
async function pastikanAdmin(supabase) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Akses ditolak. Sesi admin diperlukan.");
  }
  return user;
}

/**
 * US-08: Tambah produk baru
 */
export async function tambahProduk(prevState, formData) {
  const supabase = await buatSupabaseAdmin();
  try {
    await pastikanAdmin(supabase);
  } catch (err) {
    return { error: err.message };
  }

  const nama = formData.get("nama")?.trim();
  const harga = parseInt(formData.get("harga"), 10);
  const kategori = formData.get("kategori")?.trim();
  const foto_url = formData.get("foto_url")?.trim();
  const deskripsi = formData.get("deskripsi")?.trim();

  if (!nama || isNaN(harga)) {
    return { error: "Nama dan harga wajib diisi." };
  }

  const { error } = await supabase
    .from("produk")
    .insert([{ nama, harga, kategori, foto_url, deskripsi }]);

  if (error) {
    return { error: `Gagal menambah produk: ${error.message}` };
  }

  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin");
}

/**
 * US-09: Ubah produk
 */
export async function ubahProduk(id, prevState, formData) {
  const supabase = await buatSupabaseAdmin();
  try {
    await pastikanAdmin(supabase);
  } catch (err) {
    return { error: err.message };
  }

  const nama = formData.get("nama")?.trim();
  const harga = parseInt(formData.get("harga"), 10);
  const kategori = formData.get("kategori")?.trim();
  const foto_url = formData.get("foto_url")?.trim();
  const deskripsi = formData.get("deskripsi")?.trim();

  if (!nama || isNaN(harga)) {
    return { error: "Nama dan harga wajib diisi." };
  }

  const { error } = await supabase
    .from("produk")
    .update({ nama, harga, kategori, foto_url, deskripsi })
    .eq("id", id);

  if (error) {
    return { error: `Gagal mengubah produk: ${error.message}` };
  }

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath(`/produk/${id}`);
  redirect("/admin");
}

/**
 * US-10: Hapus produk
 */
export async function hapusProduk(id) {
  const supabase = await buatSupabaseAdmin();
  await pastikanAdmin(supabase);

  const { error } = await supabase.from("produk").delete().eq("id", id);
  if (error) {
    throw new Error(`Gagal menghapus: ${error.message}`);
  }

  revalidatePath("/");
  revalidatePath("/admin");
}
