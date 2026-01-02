import { Demo } from "./models/demo";

export async function getDemos(): Promise<Pick<Response, 'ok' | 'status' | 'statusText'> & { demos: Demo[] }> {
    try {
        const response = new Response(
            JSON.stringify([
                {
                    id: 'zama-2025-11',
                    name: 'Zama API key sandbox',
                    description: 'A lightweight sandbox to manage API keys. This project was made from scratch.',
                    keywords: ['react', 'next.js', 'typescript', 'mui'],
                    image: '/zama-test-screenshot.png',
                    cta: 'View live',
                    href: 'http://zama-tech-test.stevenmeyer.uk/',
                    repository: 'https://github.com/StevenMeyer/zama-tech-test-202511-sandbox-console',
                    height: 702,
                    width: 865,
                },
                {
                    id: 'zama-2025-11-2',
                    name: 'Zama API key sandbox',
                    description: 'A lightweight sandbox to manage API keys. This project was made from scratch.',
                    keywords: ['react', 'next.js', 'typescript', 'mui'],
                    image: '/zama-test-screenshot.png',
                    cta: 'View live',
                    href: 'http://zama-tech-test.stevenmeyer.uk/',
                    repository: 'https://github.com/StevenMeyer/zama-tech-test-202511-sandbox-console',
                    height: 702,
                    width: 865,
                }
            ]),
            {
                status: 200,
                statusText: 'OK',
            },
        );
        if (!response.ok) {
            return {
                demos: [],
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
            };
        }
        const demos = await response.json();
        return {
            demos,
            ok: response.ok,
            status: response.status,
            statusText: response.statusText,
        };
    } catch (error) {
        return {
            demos: [],
            ok: false,
            status: 500, // it's not a 500, but it's not so important
            statusText: `${error}`,
        };
    }
}