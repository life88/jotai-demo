import { useSetAtom } from 'jotai';
import { useImmerAtom } from 'jotai-immer';
import { RESET } from 'jotai/utils';
import { ChangeEvent } from 'react';
import { bigDataAtom } from '@/stores/testStore';

export default function BigData() {
  // const [data, setData] = useAtom(bigDataAtom);
  const [bd, setBd] = useImmerAtom(bigDataAtom);
  const resetBd = useSetAtom(bigDataAtom);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBd((draftState) => {
      draftState.people[0].name = value;
    });
  };

  const onResetBd = () => {
    resetBd(RESET);
  };

  return (
    <div>
      <h1>Big Data</h1>
      <div>
        <input type="text" onChange={onChange} />
        <button onClick={onResetBd}>Reset</button>
      </div>
      {JSON.stringify(bd, null, 2)}
    </div>
  );
}
