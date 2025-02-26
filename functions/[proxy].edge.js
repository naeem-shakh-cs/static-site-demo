export default function handler(request, context) {
    request.headers.set("x-launch-deploymentuid", "67beb0ee96a15fe79f602a72");
    return fetch(request)
}