import ExpenseTable from "@/components/table/ExpensesTable";

const page = () => {
  interface Expense {
    name: string;
    price_ARS: number;
    price_USDT: number;
    type: string;
    coutes: number;
    month: string;
    date: string;
  }

  const mockExpenses: Expense[] = [
    {
      name: "Groceries",
      price_ARS: 15000,
      price_USDT: 50,
      type: "Food",
      coutes: 1,
      month: "August",
      date: "2024-08-05",
    },
    {
      name: "Rent",
      price_ARS: 120000,
      price_USDT: 400,
      type: "Housing",
      coutes: 1,
      month: "August",
      date: "2024-08-01",
    },
    {
      name: "Electricity Bill",
      price_ARS: 8000,
      price_USDT: 25,
      type: "Utilities",
      coutes: 1,
      month: "August",
      date: "2024-08-10",
    },
    {
      name: "Dining Out",
      price_ARS: 10000,
      price_USDT: 35,
      type: "Entertainment",
      coutes: 1,
      month: "August",
      date: "2024-08-12",
    },
    {
      name: "Internet",
      price_ARS: 5000,
      price_USDT: 18,
      type: "Utilities",
      coutes: 1,
      month: "August",
      date: "2024-08-07",
    },
  ];

  return (
    <>
      <div className="flex w-full justify-center">
        <ExpenseTable expenses={mockExpenses} />
      </div>
    </>
  );
};

export default page;
