export default function handler(request, context) {
    request.headers.delete("x-launch-deploymentuid");
    return fetch(request)
}