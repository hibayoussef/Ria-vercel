import FusePageCarded from "@fuse/core/FusePageCarded";
import withReducer from "app/store/withReducer";
import reducer from "../store";
import InvoicesHeader from "./InvoicesHeader";
import InvoicesTable from "./InvoicesTable";

function Invoices() {
  return (
    <FusePageCarded
      classes={{
        content: "flex",
        contentCard: "overflow-hidden",
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136",
      }}
      header={<InvoicesHeader />}
      content={<InvoicesTable />}
      innerScroll
    />
  );
}

export default withReducer("invoicesApp", reducer)(Invoices);
