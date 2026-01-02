'use client';
import { Demo as IDemo } from "@/models/demo";
import { FC, JSX, use, useMemo } from "react";
import Demo from "./Demo";
import style from "./Demos.module.css";

interface Props {
    demos: Promise<ReadonlyArray<Readonly<IDemo>>>;
}

function useDemos(demos: ReadonlyArray<Readonly<IDemo>>): JSX.Element[] {
    return useMemo(() => {
        const [ components ] = demos.reduce(([componentAccumulator, heightAccumulator], demo, index) => {
            const component = <Demo
                key={demo.id}
                {...demo}
                className={style.demo}
                preload={index === 0}
                sx={{
                    '--top': `calc(${heightAccumulator}px + var(--mui-spacing) * 4 * ${index})`,
                }}
            />;
            return [[...componentAccumulator, component], heightAccumulator + demo.height];
        }, [[] as JSX.Element[], 0]);
        return components;
    }, [demos]);
}

const Demos: FC<Props> = ({ demos: demosPromise }) => {
    const demos = use(demosPromise);
    return useDemos(demos);
};
export default Demos;
