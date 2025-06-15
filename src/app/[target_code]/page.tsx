import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";

type Props = {
  params: { target_code: string }
};

export default async function DetailPage({ params }: Props) {
  const { target_code } = params;

  // santei_flag
  const { data: santei, error: santeiError } = await supabase
    .from("santei_flag")
    .select("*")
    .eq("target_code", target_code)
    .single();

  // chi_各テーブル
  const { data: disease } = await supabase
    .from("chi_square_disease")
    .select("*")
    .eq("target_code", target_code);

  const { data: drug } = await supabase
    .from("chi_square_drug")
    .select("*")
    .eq("target_code", target_code);

  const { data: procedures } = await supabase
    .from("chi_square_medical_procedures")
    .select("*")
    .eq("target_code", target_code);

  const { data: device } = await supabase
    .from("chi_square_specific_device")
    .select("*")
    .eq("target_code", target_code);

  if (santeiError || !santei) {
    return <div>データが見つかりません</div>;
  }

  return (
    <main>
      <div className="mt-10 mb-10 p-10">
        <h1>{santei.target_name}（{santei.target_code})</h1>
          <h2>算定フラグ一覧</h2>
          <table border={1}>
            <thead>
              <tr>
                <th>項目名</th>
                <th>フラグ</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>脊髄誘発電位測定等加算区分</td><td>{santei.sekizui_yuhatsu_kasan}</td></tr>
              <tr><td>自動縫合器加算区分 </td><td>{santei.jidou_hougouki_kasan}</td></tr>
              <tr><td>自動吻合器加算区分</td><td>{santei.jidou_funngouki_kasan}</td></tr>
              <tr><td>超音波凝固切開装置等加算区分</td><td>{santei.chouonpa_goukokekkai_kasan}</td></tr>
              <tr><td>副鼻腔手術用内視鏡加算</td><td>{santei.fukubiku_shujutsu_endoscope_kasan}</td></tr>
              <tr><td>副鼻腔手術用骨軟部組織切除機器加算</td><td>{santei.fukubiku_shujutsu_bone_soft_kasan}</td></tr>
              <tr><td>凍結保存同種組織加算</td><td>{santei.touketsu_houzou_kasan}</td></tr>
              <tr><td>超音波切削機器加算</td><td>{santei.chouonpa_sessaku_kiki_kasan}</td></tr>
              <tr><td>切開創局所陰圧閉鎖処置機器加算</td><td>{santei.setsukaikou_inkyoku_heisa_kiki_kasan}</td></tr>
            </tbody>
          </table>
          <h2>カイ二乗検定結果</h2>
          <h3>病名</h3>
          <table border={1}>
            <thead>
              <tr>
                <th>病名コード</th>
                <th>病名</th>
              </tr>
            </thead>
            <tbody>
              {disease?.map((d: any) => (
                <tr key={d.disease_code}>
                  <td>{d.disease_code}</td>
                  <td>{d.disease_name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>医薬品</h3>
          <table border={1}>
            <thead>
              <tr>
                <th>医薬品コード</th>
                <th>医薬品名</th>
              </tr>
            </thead>
            <tbody>
              {drug?.map((d: any) => (
                <tr key={d.drug_code}>
                  <td>{d.drug_code}</td>
                  <td>{d.drug_name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>診療行為</h3>
          <table border={1}>
            <thead>
              <tr>
                <th>診療行為コード</th>
                <th>診療行為名</th>
                <th>区分番号</th>
              </tr>
            </thead>
            <tbody>
              {procedures?.map((p: any) => (
                <tr key={p.procedure_code}>
                  <td>{p.procedure_code}</td>
                  <td>{p.procedure_name}</td>
                  <td>{p.division_number}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>特定機材</h3>
          <table border={1}>
            <thead>
              <tr>
                <th>特定機材コード</th>
                <th>特定機材名</th>
              </tr>
            </thead>
            <tbody>
              {device?.map((d: any) => (
                <tr key={d.specific_device_code}>
                  <td>{d.specific_device_code}</td>
                  <td>{d.specific_device_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        <Link href="/">← 一覧ページに戻る</Link>
      </div>
    </main>
  );
}