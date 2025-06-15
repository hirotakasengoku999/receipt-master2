import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default async function MainPage() {
  const { data: rows, error } = await supabase
  .from('santei_flag')
  .select('*')
  .order('target_code', { ascending: true });

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <main>
      <h1>算定フラグ一覧</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>診療行為コード</th>
            <th>診療行為名称</th>
          </tr>
        </thead>
        <tbody>
          {rows?.map(row => (
            <tr key={row.target_code}>
              <td>
                <Link href={`/${row.target_code}`}>{row.target_code}</Link>
              </td>
              <td>{row.target_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
