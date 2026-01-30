import { Demo as IDemo } from "@/models/demo";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip, { ChipProps } from "@mui/material/Chip";
import { FC, memo } from "react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Image from "next/image";
import style from "./Demos.module.css";
import Paper, { PaperProps } from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface Props extends Omit<PaperProps, keyof IDemo>, Omit<IDemo, 'id'> {
    preload?: boolean;
}

const KeywordChip: FC<ChipProps & { keyword: IDemo['keywords'][number] }> = ({ keyword, ...chipProps }) => {
    return <Chip
        icon={<Box className={style.keywordIcon}><Image fill alt={`${keyword} logo`} src={`/icon/${keyword}.svg`} /></Box>}
        label={keyword}
        size="small"
        variant="outlined"
        {...chipProps}
    />;
};

const Info: FC<PaperProps> = ({ children, className, ...paperProps }) => {
    return <Paper className={`${style.demoInfo} ${className}`} {...paperProps}>{children}</Paper>
};

const Demo = memo<Props>(({ cta, description, height, href, image, keywords, name, preload, repository, sx, width, ...boxProps }) => {
    return (
        <Paper
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
            <Info elevation={3}>
                <Typography className={style.demoTitle} variant="h6">Demo &ndash; {name}</Typography>
                <Typography className={style.demoDescription}>{description}</Typography>
                <Box>
                    {keywords.map((keyword) => <KeywordChip keyword={keyword} />)}
                </Box>
            </Info>
            </Paper>
        );
    },
);
export default Demo;
