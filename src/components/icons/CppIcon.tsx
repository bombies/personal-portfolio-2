import * as React from "react"
import {IconProps} from "@/components/icons/icon-utils";
import clsx from "clsx";

const CppIcon = ({className, fill, width, height}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? 16}
        height={height ?? width ?? 16}
        viewBox="0 0 32 32"
        className={clsx("self-center", className)}
    >
        <title>{"file_type_cpp3"}</title>
        <path
            d="M29 10.232a2.387 2.387 0 0 0-.318-1.244 2.451 2.451 0 0 0-.936-.879q-5.194-2.868-10.393-5.733a2.642 2.642 0 0 0-2.763.024c-1.378.779-8.275 4.565-10.331 5.706A2.287 2.287 0 0 0 3 10.231V21.77a2.4 2.4 0 0 0 .3 1.22 2.434 2.434 0 0 0 .954.9c2.056 1.141 8.954 4.927 10.332 5.706a2.642 2.642 0 0 0 2.763.026q5.19-2.871 10.386-5.733a2.444 2.444 0 0 0 .955-.9 2.4 2.4 0 0 0 .3-1.22V10.232"
            style={{
                fill: clsx(fill || "#659ad2"),
            }}
        />
        <path
            d="M28.549 23.171a2.126 2.126 0 0 0 .147-.182 2.4 2.4 0 0 0 .3-1.22V10.232a2.387 2.387 0 0 0-.318-1.244c-.036-.059-.089-.105-.13-.16L16 16Z"
            style={{
                fill: clsx(fill || "#00599c"),
            }}
        />
        <path
            d="M28.549 23.171 16 16 3.451 23.171a2.435 2.435 0 0 0 .809.72c2.056 1.141 8.954 4.927 10.332 5.706a2.642 2.642 0 0 0 2.763.026q5.19-2.871 10.386-5.733a2.43 2.43 0 0 0 .808-.719Z"
            style={{
                fill: clsx(fill || "#004482"),
            }}
        />
        <path
            d="M19.6 18.02a4.121 4.121 0 1 1-.027-4.087l3.615-2.073A8.309 8.309 0 0 0 7.7 16a8.216 8.216 0 0 0 1.1 4.117 8.319 8.319 0 0 0 14.411-.017L19.6 18.02"
            style={{
                fill: "#fff",
            }}
        />
        <path
            d="M24.076 15.538h-.926v-.921h-.925v.921h-.926v.923h.926v.92h.925v-.92h.926v-.923zM27.549 15.538h-.926v-.921h-.926v.921h-.926v.923h.926v.92h.926v-.92h.926v-.923z"
            style={{
                fill: "#fff",
            }}
        />
    </svg>
)
export default CppIcon
