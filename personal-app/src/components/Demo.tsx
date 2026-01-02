import { Demo as IDemo } from "@/models/demo";
import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
import { memo } from "react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Image from "next/image";
import { Typography } from "@mui/material";
import style from "./Demos.module.css";

interface Props extends Omit<BoxProps, keyof IDemo>, Omit<IDemo, 'id'> {
    preload?: boolean;
}

const Demo = memo<Props>(({ cta, description, height, href, image, keywords, name, preload, repository, sx, width, ...boxProps }) => {
    return (
        <Box
            {...boxProps}
            sx={{
                '--height': height,
                '--width': width,
                ...sx,
            }}
        >
            <Image
                fill
                alt={name}
                className={style.demoImg}
                preload={!!preload}
                quality={40}
                src={image}
            />
            <Button
                aria-hidden
                color="secondary"
                className={style.demoClueButton}
                startIcon={<PlayCircleOutlineIcon />}
                variant="contained"
            >
                Demo
            </Button>
            <Typography className={style.demoTitle} variant="h6">Demo &ndash; {name}</Typography>
            <Typography className={style.demoDescription}>{description}</Typography>
        </Box>
    );
});
export default Demo;
