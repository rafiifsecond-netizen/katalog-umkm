import { buatSupabaseAdmin } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await buatSupabaseAdmin();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { data: produk, error } = await supabase
    .from("produk")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const headers = ["id", "nama", "harga", "kategori", "deskripsi", "foto_url", "created_at"];
  const rows = (produk || []).map((p) => [
    p.id,
    JSON.stringify(p.nama || ""),
    p.harga,
    JSON.stringify(p.kategori || ""),
    JSON.stringify(p.deskripsi || ""),
    JSON.stringify(p.foto_url || ""),
    p.created_at,
  ].join(","));

  const csv = [headers.join(","), ...rows].join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=ut-8",
      "Content-Disposition": 'attachment; filename="produk.csv"',
    },
  });
}
