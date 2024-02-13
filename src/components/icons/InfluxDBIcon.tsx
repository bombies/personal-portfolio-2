import * as React from "react"
import {IconProps} from "@/components/icons/icon-utils";
import clsx from "clsx";

const InfluxDBIcon = ({className, fill, width, height}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? 16}
        height={height ?? width ?? 16}
        preserveAspectRatio="xMidYMid"
        viewBox="-2.5 0 261 261"
        className={clsx("self-center", className)}
    >
        <path
            fill={clsx(fill || "#292933")}
            d="M255.597 156.506 230.75 48.763c-1.393-5.805-6.734-11.842-12.772-13.468L104.896.465C103.502 0 101.876 0 100.019 0c-4.876 0-9.752 1.858-13.235 4.876L5.744 80.343C1.332 84.29-.99 92.185.404 97.758l26.47 115.406c1.394 5.805 6.735 11.843 12.772 13.468l105.885 32.973c1.394.465 3.02.465 4.877.465 4.876 0 9.752-1.858 13.235-4.877l86.613-80.575c4.412-4.644 6.734-12.074 5.34-18.112ZM116.738 26.007l77.789 23.917c3.018.929 3.018 2.322 0 3.019l-40.868 9.288c-3.019.929-7.43-.464-9.52-2.786l-28.33-30.652c-2.554-2.554-2.09-3.715.93-2.786Zm48.53 139.323c.93 3.019-1.16 4.876-4.179 3.948L77.263 143.27c-3.018-.93-3.715-3.484-1.393-5.573l64.089-59.677c2.322-2.322 4.876-1.393 5.572 1.625l19.738 85.684ZM27.108 89.4l68.036-63.392c2.322-2.322 5.805-1.858 8.127.232l34.134 36.92c2.322 2.323 1.858 5.806-.232 8.128l-68.036 63.392c-2.322 2.322-5.805 1.858-8.127-.232l-34.134-36.92c-2.322-2.555-2.09-6.27.232-8.128Zm16.486 100.313-17.88-78.95c-.928-3.019.465-3.715 2.555-1.393l28.329 30.65c2.322 2.323 3.019 6.735 2.322 9.753l-12.307 39.94c-.929 3.25-2.322 3.25-3.019 0Zm99.616 46.44L54.275 208.52c-3.019-.929-4.876-4.18-3.948-7.43l14.862-47.835c.928-3.018 4.18-4.876 7.43-3.947l88.935 27.4c3.018.929 4.876 4.18 3.947 7.43l-14.861 47.835c-1.161 3.019-4.18 4.876-7.43 4.18Zm78.95-64.785-59.444 55.265c-2.322 2.322-3.483 1.393-2.555-1.625l12.307-39.94c.93-3.018 4.18-6.269 7.43-6.733l40.869-9.289c3.019-1.16 3.483.233 1.393 2.322Zm6.502-12.074-48.995 11.146c-3.019.928-6.27-1.161-6.967-4.18l-20.898-90.56c-.929-3.019 1.161-6.27 4.18-6.966l48.995-11.146c3.019-.929 6.27 1.16 6.966 4.18l20.899 90.56c.696 3.483-1.161 6.501-4.18 6.966Z"
        />
    </svg>
)
export default InfluxDBIcon