$ErrorActionPreference = 'Stop'

$path = Join-Path (Get-Location) 'index.html'
if (-not (Test-Path $path)) { throw "index.html not found at $path" }

$content = Get-Content -Path $path -Raw -Encoding UTF8

# Find the first <img ...> tag containing class="...avatar..." (attributes in any order)
$imgPattern = '<img[^>]*class="[^"]*avatar[^"]*"[^>]*>'
$m = [System.Text.RegularExpressions.Regex]::Match($content, $imgPattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
if (-not $m.Success) {
    Write-Host "No avatar <img> tag found to update (class contains 'avatar')."
    exit 0
}

$origTag = $m.Value
# Replace or insert the src attribute within the found tag
if ($origTag -match 'src="[^"]*"') {
    $newTag = [System.Text.RegularExpressions.Regex]::Replace($origTag, 'src="[^"]*"', 'src="assets/profile.png"', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
} else {
    # Insert src as the first attribute after <img
    $newTag = $origTag -replace '<img\s*', '<img src="assets/profile.png" '
}

$new = $content.Substring(0, $m.Index) + $newTag + $content.Substring($m.Index + $m.Length)

Set-Content -Path $path -Value $new -Encoding UTF8
Write-Host "Updated avatar img src -> assets/profile.png"

