import { getCardTipData } from "../api/service";
import { reactive, ref } from "vue";

let cardTipData: any;

const useGetTip = (code: string) => {
  let state = ref<any>({});

  const load = async () => {
    if (!state[code]) {
      const res = await getCardTipData();
      state.value[code] = res;
    }
  };
  return { state, load };
};

const getTip = (code: string) => {
  if (!cardTipData) {
    cardTipData = useGetTip(code);
  }
  return "";
};

export { getTip };
