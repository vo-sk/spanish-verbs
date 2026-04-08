# Simple HTTP Server for Spanish Verbs App
$port = 3000
$url = "http://localhost:$port/"

Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host "Spanish Verbs Local Server" -ForegroundColor Green
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host ""
Write-Host "Server starting at: $url" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)
$listener.Start()

Write-Host "Server is running! Open your browser to:" -ForegroundColor Green
Write-Host $url -ForegroundColor Cyan
Write-Host ""

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $path = $request.Url.LocalPath
        if ($path -eq '/') { $path = '/index.html' }
        
        $filePath = Join-Path $PSScriptRoot $path.TrimStart('/')
        
        Write-Host "$($request.HttpMethod) $path" -ForegroundColor Gray
        
        if (Test-Path $filePath) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            
            # Set content type
            $ext = [System.IO.Path]::GetExtension($filePath)
            $contentType = switch ($ext) {
                '.html' { 'text/html; charset=utf-8' }
                '.css'  { 'text/css; charset=utf-8' }
                '.js'   { 'application/javascript; charset=utf-8' }
                '.json' { 'application/json; charset=utf-8' }
                default { 'application/octet-stream' }
            }
            
            $response.ContentType = $contentType
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $response.StatusCode = 404
            $message = [System.Text.Encoding]::UTF8.GetBytes("404 - File not found: $path")
            $response.OutputStream.Write($message, 0, $message.Length)
        }
        
        $response.Close()
    }
} finally {
    $listener.Stop()
    Write-Host "`nServer stopped." -ForegroundColor Yellow
}
