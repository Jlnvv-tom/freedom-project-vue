interface IFlex {
  key: string;
  value: string[];
  description?: string; // 描述
  default?: string; // 默认值
}

const flexContainerConfig: IFlex[] = [
  {
    key: "flex-direction",
    value: ["row", "column", "row-reverse", "column-reverse"],
    description: "决定主轴的方向（即项目的排列方向）",
    default: "row",
  },
  {
    key: "flex-wrap",
    value: ["nowrap", "wrap", "wrap-reverse"],
    description: "一条轴线排不下，如何换行",
    default: "nowrap",
  },
  {
    key: "flex-flow",
    value: getFlexWrapValue(),
    description:
      "flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。",
    default: "row nowrap",
  },
  {
    key: "flex-content",
    value: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
    ],
    description: "定义了项目在主轴上的对齐方式。",
  },
  {
    key: "flex-items",
    value: ["flex-start", "flex-end", "center", "baseline", "stretch"],
    description: "定义项目在交叉轴上如何对齐",
    default: "flex-start",
  },
  {
    key: "align-content",
    value: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "stretch",
    ],
    description:
      "定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。",
    default: "stretch",
  },
];
function getFlexWrapValue() {
  const value: string[] = [];
  const flexDirectionValue = flexContainerConfig.find(
    (item) => item.key === "flex-direction"
  )?.value;
  const flexWrapValue = flexContainerConfig.find(
    (item) => item.key === "flex-wrap"
  )?.value;
  flexDirectionValue?.forEach((fdv) => {
    flexWrapValue?.forEach((fwv) => {
      const v = fdv + " " + fwv;
      value.push(v);
    });
  });
  return value;
}
export { flexContainerConfig };
