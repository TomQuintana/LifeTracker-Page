import Button from "@mui/material/Button";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import {
  BookIcon,
  DollarSignIcon,
  ListIcon,
  PieChartIcon,
  UserCog,
  NotebookText,
} from "lucide-react";
import User from "./User";

export default function SideBar() {
  return (
    <div className="flex w-64 flex-col border h-max rounded-xl shadow-black">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">My Menu</h2>
      </div>
      <ScrollArea className="flex-1">
        <nav className="p-4 space-y-2">
          <Link href="/lifetracker/books" passHref>
            <Button variant="ghost" className="w-full justify-start">
              <BookIcon className="mr-2 h-4 w-4" />
              Books
            </Button>
          </Link>

          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-start">
                <DollarSignIcon className="mr-2 h-4 w-4" />
                Expenses
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 space-y-2">
              <Link href="/lifetracker/expenses/list" passHref>
                <Button variant="ghost" className="w-full justify-start">
                  <ListIcon className="mr-2 h-4 w-4" />
                  List
                </Button>
              </Link>
              <Link href="/lifetracker/expenses/totalByType" passHref>
                <Button variant="ghost" className="w-full justify-start">
                  <PieChartIcon className="mr-2 h-4 w-4" />
                  Total by type
                </Button>
              </Link>
            </CollapsibleContent>
          </Collapsible>

          <Link href="/lifetracker/tracker" passHref>
            <Button variant="ghost" className="w-full justify-start">
              <NotebookText className="mr-2 h-4 w-4" />
              Track Habits
            </Button>
          </Link>

          <Link href="/lifetracker/user" passHref>
            <Button variant="ghost" className="w-full justify-start">
              <UserCog className="mr-2 h-4 w-4" />
              <User />
            </Button>
          </Link>
        </nav>
      </ScrollArea>
    </div>
  );
}
