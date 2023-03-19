import { uuid } from "@/utils";
let kuaren =
  "闭月羞花 沉鱼落雁 出水芙蓉 明眸皓齿 国色天香 鹤发童颜 雍容华贵 眉清目秀 威风凛凛 蓬头垢面 老态龙钟 弱不禁风 骨瘦如柴 面黄肌瘦 其貌不扬";
let zhengzhi =
  "大义凛然 危言高论 铁面无私 浩然之气 直言正论 刚正不阿 襟怀坦白 正气凛然 光明正大";
let keku =
  "苦心孤诣 囊萤映雪 埋头苦干 卧薪尝胆 悬梁刺股 凿壁偷光 废寝忘食 孜孜不倦 夙兴夜寐 勤能补拙 朝乾夕惕 手不释卷";
function str_trans_array(str: string, color: string): Array<any> {
  return str.split(" ").map((item) => {
    return {
      label_id: uuid(),
      label_name: item,
      label_color: color,
    };
  });
}
export const arrayData = [
  {
    group_id: uuid(),
    group_name: "夸人",
    group_type: "kuaren",
    group_children: str_trans_array(kuaren, "blue"),
    create_date: Date.now(),
  },
  {
    group_id: uuid(),
    group_name: "正直",
    group_type: "zhengzhi",
    group_children: str_trans_array(zhengzhi, "green"),
    create_date: Date.now(),
  },
  {
    group_id: uuid(),
    group_name: "刻苦",
    group_type: "keku",
    group_children: str_trans_array(keku, "purple"),
    create_date: Date.now(),
  },
];
