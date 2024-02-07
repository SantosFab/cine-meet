import { Descriptor } from "../../../reducer/fetch/detail/interface";

export const listItems = ({
  str,
  data,
}: {
  str: string;
  data?: string | Descriptor[];
}): JSX.Element | undefined => {
  console.log(data, str);
  if (data === "" || data?.length === 0) {
    return <></>;
  } else if (data && Array.isArray(data)) {
    const newData = data?.map((companie, index) => {
      return index === data.length - 1 ? companie.name : `${companie.name} | `;
    });

    return (
      <>
        <strong>{str}:</strong> {newData}
      </>
    );
  } else {
    return (
      <>
        <strong>{str}:</strong> {data}
      </>
    );
  }
};
