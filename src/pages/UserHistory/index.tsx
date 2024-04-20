import Table from "shared/UI/Table";

export default function UserHistoryPage(): JSX.Element {
  const data = [
    {
      id: 0,
      status: "new_order",
      order_date: "2024-04-20T14:09:02.619Z",
      products: [
        {
          product: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          name: "string",
          img: "string",
          quantity: 0,
          price: "7",
        },
        {
          product: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          name: "string",
          img: "string",
          quantity: 0,
          price: "7",
        },
        {
          product: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          name: "string",
          img: "string",
          quantity: 0,
          price: "7",
        },
      ],
    },
    {
      id: 1,
      status: "new_order",
      order_date: "2024-04-20T14:09:02.619Z",
      products: [
        {
          product: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          name: "string",
          img: "string",
          quantity: 0,
          price: "7",
        },
      ],
    },
  ];

  const columns = Object.keys(data[0])
    .slice(1)
    .reverse()
    .map((key) => "history." + key);
  return (
    <>
      <Table columns={columns}>
        <tbody className="divide-y divide-gray-400">
          {data.map((el) => {
            return (
              <tr key={el.id} className="divide-x divide-gray-400 [&>td]:p-2">
                <td>
                  {el.products.map((prod) => {
                    return <div key={prod.product}>{prod.name}</div>;
                  })}
                </td>
                <td>{el.order_date}</td>
                <td>{el.status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
