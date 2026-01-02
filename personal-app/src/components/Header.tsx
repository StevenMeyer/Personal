import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import visuallyHidden from '@mui/utils/visuallyHidden'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FC } from "react";

type Props = BoxProps;

const Header: FC<Props> = (boxProps) => {
    return (
        <Box component="section" {...boxProps}>
            <Typography variant="h1">Steven Meyer</Typography>
            <Typography variant="subtitle1">Senior Frontend Engineer</Typography>
            <Typography variant="subtitle2" style={visuallyHidden}>{' | '}</Typography>
            <Typography variant="subtitle2">Senior React Engineer | Senior Software Engineer</Typography>
            <Grid
                container
                columns={{ xs: 1, sm: 2 }}
                spacing={{ xs: 2, md: 3 }}
                sx={{ mt: 4 }}
            >
                <Grid size={{ xs: 2, sm: 1 }}>
                    <Button
                        fullWidth
                        startIcon={<LinkedInIcon />}
                        variant="outlined"
                    >View my profile on LinkedIn</Button>
                </Grid>
                <Grid size={{ xs: 2, sm: 1 }}>
                    <Button
                        fullWidth
                        startIcon={<GitHubIcon />}
                        variant="outlined"
                    >View my GitHub profile</Button>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Header;
