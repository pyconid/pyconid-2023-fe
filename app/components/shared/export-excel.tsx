import * as FileSaver from "file-saver"
import { utils, write } from "xlsx"

import { Button } from "../ui"

const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
const fileExtension = ".xlsx"

export function ExportToExcel({ data }: { data: any[] }) {
    return (
        <Button
            type="button"
            onClick={() => {
                const ws = utils.json_to_sheet(data)
                const excelBuffer = write(
                    { Sheets: { data: ws }, SheetNames: ["data"] },
                    { bookType: "xlsx", type: "array" },
                )
                const testA = new Blob([excelBuffer], { type: fileType })
                FileSaver.saveAs(testA, "connection-pyconid-2023" + fileExtension)
            }}
        >
            Export to Excel
        </Button>
    )
}
