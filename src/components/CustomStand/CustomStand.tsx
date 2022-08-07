import React, {useState} from 'react';
import {CustomSelect} from "../Common/Select/CustomSelect";
import {CustomRadio} from "../Common/Radio/CustomRadio";
import {CustomButton} from "../Common/Button/CustomButton";


export const CustomStand = () => {
  const arr = ['x', 'y', 'z']
  const [value, onChangeOption] = useState<string>(arr[1])
  return (
    <div>
      <CustomSelect options={arr}
                    value={value}
                    onChangeOption={onChangeOption}/>
      <CustomRadio name={'radio'}
                   options={arr}
                   value={value}
                   onChangeOption={onChangeOption}
      />
      <CustomButton name={'button'}/>
    </div>
  );
};
