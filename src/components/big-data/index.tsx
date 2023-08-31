import { useImmerAtom } from 'jotai-immer';
import { ChangeEvent } from 'react';
import { bigDataAtom } from '@/stores/testStore';

export default function BigData() {
  // const [data, setData] = useAtom(bigDataAtom);
  const [bd, setBd] = useImmerAtom(bigDataAtom);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBd((draftState) => {
      draftState.people[0].name = value;
    });
  };

  return (
    <div>
      <h1>Big Data</h1>
      <div>
        <input type="text" onChange={onChange} />
      </div>
      {JSON.stringify(bd, null, 2)}
    </div>
  );
}
