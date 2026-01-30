import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import style from './About.module.css';
import { SxProps, Theme } from "@mui/material/styles";

type Props = BoxProps;

const paragraphMargin = {
    mt: 2,
} satisfies SxProps<Theme>;

const About: FC<Props> = ({ className, ...boxProps }) => {
    return (
        <>
            <Typography variant="h2">About me</Typography>
            <Typography sx={paragraphMargin}>I've been bringing awesome front-end experiences to life since 2013.</Typography>
            <Typography sx={paragraphMargin}>I have a passion for building clean, accessible interfaces made of clear, reusable and well-tested code.</Typography>
            <Typography sx={paragraphMargin}>
                <Typography component="strong" sx={{ fontWeight: '700' }}>Value proposition:</Typography>
                {' '}React/TS + Accessibility + Design Systems + Real-time UX. Trusted partner to product/design; turns ambiguous problems into reusable, tested solutions that ship faster and with fewer defects.
            </Typography>
            <Typography sx={paragraphMargin}>Tech experience:</Typography>
            <ul>
                <li>
                    Languages:
                    <ul>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li><abbr title="ECMAScript">ES</abbr>6+</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>English (native)</li>
                        <li>German (B1)</li>
                    </ul>
                </li>
                <li>
                    Frameworks:
                    <ul>
                        <li>React</li>
                        <li>Angular</li>
                        <li>Web Components (Stencil.js)</li>
                        <li>Next.js</li>
                    </ul>
                </li>
                <li>
                    State:
                    <ul>
                        <li>Redux</li>
                        <li>MobX</li>
                        <li>Knockout</li>
                    </ul>
                </li>
                <li>
                    Testing:
                    <ul>
                        <li>Jest</li>
                        <li>React Testing Library (RTL)</li>
                        <li>Playwright/<wbr />Cypress/<wbr />Puppeteer</li>
                        <li>Storybook</li>
                        <li>MSW</li>
                    </ul>
                </li>
                <li>
                    <abbr title="Application Programming Interface">API</abbr>s:
                    <ul>
                        <li><abbr title="Representational State Transfer">ReST</abbr></li>
                        <li>WebSockets</li>
                        <li>payments</li>
                    </ul>
                </li>
                <li>
                    Tooling:
                    <ul>
                        <li>nx</li>
                        <li>ESlint</li>
                        <li>Prettier</li>
                        <li>Webpack</li>
                        <li>GruntJS</li>
                    </ul>
                </li>
            </ul>
            <Typography sx={paragraphMargin}>A single-page HTML document isn't a great place to showcase my <abbr title="JavaScript">JS</abbr> prowess. Indeed, there isn't a lick of ECMAScript to be seen on this page at all; everything here &ndash; including the theme switcher &ndash; is plain HTML and CSS.</Typography>
            <Typography sx={paragraphMargin}>I'm not a designer, but I work closely with them to ensure usability, accessibility and engineering concerns are addressed early.</Typography>
            <Typography sx={paragraphMargin}>In a world of ever-increasing use of AI, this page was an opportunity for me to be creative <em>without</em> an AI co-pilot. A place to play with CSS to get the text to follow the outline of images, even when they float to the right; to play with browser-choice image resolution; to play with moving buttons around. I know how and when to use AI to speed up my coding, but I wanted to just be me for a while.</Typography>
            <Typography sx={paragraphMargin}>Mostly, though, this page exists so you can search for me to know I exist. You probably got here from a job application. Now you know I'm real and know some stuff, send me a message and we can have a chat.</Typography>
        </>
    );
};
export default About;
