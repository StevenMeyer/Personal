export const dynamic = 'force-static';

export async function GET(): Promise<Response> {
    return Response.json([
        {
            id: 'zama-2025-11',
            name: 'Zama API key sandbox',
            description: 'A lightweight sandbox to manage API keys. This project was made from scratch.',
            keywords: ['react', 'next.js', 'typescript', 'mui'],
            image: '/zama-test-screenshot.jpg',
            shapeImage: '/zama-test-screenshot.shape.jpg',
            cta: 'View live',
            href: 'http://zama-tech-test.stevenmeyer.uk/',
            repository: 'https://github.com/StevenMeyer/zama-tech-test-202511-sandbox-console',
            height: 702,
            width: 865,
        }
    ]);
}
