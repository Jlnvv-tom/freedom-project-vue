export const getCardTipData = () => {
  return new Promise((resolve, reject) => {
    const data = [
      { code: "aa", name: "这个名称是aa", tip: "这个aa的提示" },
      { code: "bb", name: "这个名称是bb", tip: "这个bb的提示" },
      { code: "cc", name: "这个名称是cc", tip: "这个cc的提示" },
      { code: "dd", name: "这个名称是dd", tip: "这个dd的提示" },
      { code: "cat", name: "这个名称是怕浪猫", tip: "这个怕浪猫的提示" },
    ];
    resolve(data);
  });
};
