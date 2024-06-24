// export async function GEt() {
//     return Response.json({
//         currentTime : new Date().toLocaleDateString()
//     })
// }

// E:\Programming-Hero\Next-js\next-meal\src\app\time\route.js


export async function GET() {
    return new Response(JSON.stringify({
        currentTime: new Date().toLocaleString()
    }), {
        headers: { 'Content-Type': 'application/json' }
    });
}
