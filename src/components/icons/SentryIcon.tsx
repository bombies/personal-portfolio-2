import * as React from "react"
import {IconProps} from "@/components/icons/icon-utils";
import clsx from "clsx";

const SentryIcon = ({className, fill, width, height}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? 16}
        height={height ?? width ?? 16}
        viewBox="0 0 32 32"
        className={clsx("self-center", className)}

    >
        <title>{"file_type_sentry"}</title>
        <path
            d="M18.242 4.352a2.53 2.53 0 0 0-3.534-.986 2.643 2.643 0 0 0-.946.986l-3.688 6.658.941.563a18.965 18.965 0 0 1 9 15.179h-2.589A16.244 16.244 0 0 0 9.711 13.9l-.941-.561-3.436 6.226.941.562a9.116 9.116 0 0 1 4.225 6.625H4.587a.436.436 0 0 1-.434-.437.464.464 0 0 1 .058-.231l1.648-2.976a5.932 5.932 0 0 0-1.881-1.119l-1.631 2.969a2.759 2.759 0 0 0 .953 3.683A2.51 2.51 0 0 0 4.587 29h8.138v-1.122a11.366 11.366 0 0 0-4.467-9.1l1.3-2.338A14.089 14.089 0 0 1 15.3 27.868v1.126h6.9V27.87a21.342 21.342 0 0 0-9.19-17.66l2.618-4.733a.418.418 0 0 1 .583-.162.433.433 0 0 1 .156.162L27.78 26.084a.456.456 0 0 1-.155.608.4.4 0 0 1-.221.06h-2.67c.033.752.037 1.5 0 2.252h2.679A2.644 2.644 0 0 0 30 26.307a2.781 2.781 0 0 0-.346-1.347Z"
            style={{
                fill: clsx(fill || "#fb4226"),
            }}
        />
    </svg>
)
export default SentryIcon
