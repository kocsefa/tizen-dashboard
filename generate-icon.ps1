Add-Type -AssemblyName System.Drawing

$width = 512
$height = 512
$bmp = New-Object System.Drawing.Bitmap $width, $height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias

# Arka plan degrade
$rect = New-Object System.Drawing.Rectangle 0, 0, $width, $height
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, ([System.Drawing.Color]::FromArgb(15, 23, 42)), ([System.Drawing.Color]::FromArgb(2, 132, 199)), 45.0
$g.FillRectangle($brush, $rect)

# Dış çerçeve
$penBorder = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(56, 189, 248)), 14
$g.DrawRectangle($penBorder, 24, 24, 464, 464)

# TV Ekranı
$penTv = New-Object System.Drawing.Pen ([System.Drawing.Color]::White), 14
$g.DrawRectangle($penTv, 80, 90, 352, 220)

# TV Ayağı
$brushWhite = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
$p1 = New-Object System.Drawing.Point 220, 310
$p2 = New-Object System.Drawing.Point 190, 370
$p3 = New-Object System.Drawing.Point 322, 370
$p4 = New-Object System.Drawing.Point 292, 310
[System.Drawing.Point[]]$pts = @($p1, $p2, $p3, $p4)
$g.FillPolygon($brushWhite, $pts)
$g.FillRectangle($brushWhite, 160, 370, 192, 16)

# Güneş
$brushSun = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(251, 191, 36))
$g.FillEllipse($brushSun, 130, 140, 70, 70)

# Hilal
$brushMoon = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(129, 140, 248))
$g.FillEllipse($brushMoon, 300, 135, 70, 70)
$brushCover = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(15, 23, 42))
$g.FillEllipse($brushCover, 280, 130, 65, 65)

# Yazı
$font = New-Object System.Drawing.Font "Arial", 26, ([System.Drawing.FontStyle]::Bold)
$format = New-Object System.Drawing.StringFormat
$format.Alignment = [System.Drawing.StringAlignment]::Center
$g.DrawString("SMART DASHBOARD", $font, $brushWhite, [float]($width / 2), 420.0, $format)

$outPath = Join-Path $PSScriptRoot "icon.png"
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
Write-Host "icon.png başarıyla oluşturuldu: $outPath"
