import { buatSupabaseServer } from "@/lib/supabase/server";

export default async function sitemap() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://katalog-umkm.vercel.app";
  const supabase = buatSupabaseServer();
  const { data: produk } = await supabase.from("produk").select("id, created_at");

  const produkUrls = (produk || []).map((p) => ({
    url: `${baseUrl}/produk/${p.id}`,
    lastModified: p.created_at ? new Date(p.created_at) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...produkUrls,
  ];
}
