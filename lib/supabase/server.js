import { createClient } from "@supabase/supabase-js";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Koneksi server untuk membaca data publik (memakai SUPABASE_SECRET_KEY).
 * Melewati RLS — hanya dipakai untuk membaca katalog/detail produk.
 */
export function buatSupabaseServer() {
  return createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
  );
}

/**
 * Koneksi sesi admin (memakai SUPABASE_PUBLISHABLE_KEY + cookie).
 * RLS tetap berlaku — dipakai untuk login, keluar, ganti password, dan aksi admin.
 */
export async function buatSupabaseAdmin() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Bisa diabaikan jika dipanggil dari Server Component
          }
        },
      },
    }
  );
}
